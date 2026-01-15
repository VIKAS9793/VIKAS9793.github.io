import { useState, useEffect } from 'react';
import { fetchPortfolioRepos, repoToProject, type PortfolioProject } from '../api/github';
import { retryAsync } from '../utils/apiHelpers';
import { cache, versionedCacheKey } from '../utils/cache';

interface UseGitHubProjectsResult {
    projects: PortfolioProject[];
    loading: boolean;
    error: string | null;
    retry: () => void;
    refresh: () => void;
}

const CACHE_KEY = versionedCacheKey('github_portfolio_projects');
const CACHE_HASH_KEY = versionedCacheKey('github_projects_hash');

/**
 * Hook to fetch GitHub repos with 'portfolio' topic
 * Features:
 * - Retry logic with exponential backoff
 * - Smart caching with automatic invalidation
 * - Background validation for data changes
 * - Manual refresh capability
 */
export function useGitHubProjects(): UseGitHubProjectsResult {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [retryCount, setRetryCount] = useState(0);

    useEffect(() => {
        let mounted = true;

        async function fetchProjects() {
            try {
                setLoading(true);
                setError(null);

                // Check cache first
                const cachedProjects = cache.get<PortfolioProject[]>(CACHE_KEY);
                const cachedHash = cache.get<string>(CACHE_HASH_KEY);

                if (cachedProjects && cachedHash) {
                    console.log('✅ Using cached GitHub projects');
                    if (mounted) {
                        setProjects(cachedProjects);
                        setLoading(false);
                    }

                    // Background validation: Check if data has changed
                    // This ensures new projects appear without manual refresh
                    setTimeout(async () => {
                        try {
                            const repos = await fetchPortfolioRepos();
                            const newHash = JSON.stringify(repos.map(r => r.id + r.updated_at));

                            // If data changed (new project added/updated), invalidate cache
                            if (newHash !== cachedHash) {
                                console.log('🔄 GitHub data changed, auto-refreshing...');
                                cache.delete(CACHE_KEY);
                                cache.delete(CACHE_HASH_KEY);
                                setRetryCount(prev => prev + 1); // Trigger re-fetch
                            } else {
                                console.log('✓ GitHub data unchanged');
                            }
                        } catch (e) {
                            console.log('⚠️  Background validation failed, keeping cached data');
                        }
                    }, 0);

                    return;
                }

                // Fetch from API with retry logic
                const repos = await retryAsync(
                    () => fetchPortfolioRepos(),
                    {
                        onRetry: (attempt, error) => {
                            console.log(`🔄 Retry attempt ${attempt} after error:`, error.message);
                        },
                    }
                );

                if (mounted) {
                    const portfolioProjects = repos.map(repoToProject);
                    setProjects(portfolioProjects);
                    setError(null);

                    // Create hash of repo IDs and update times for change detection
                    const dataHash = JSON.stringify(repos.map(r => r.id + r.updated_at));

                    // Cache the results with hash for smart invalidation
                    cache.set(CACHE_KEY, portfolioProjects);
                    cache.set(CACHE_HASH_KEY, dataHash);
                    console.log('💾 GitHub projects cached successfully');
                }
            } catch (err) {
                if (mounted) {
                    const errorMessage = err instanceof Error
                        ? err.message
                        : 'Failed to fetch projects';
                    setError(errorMessage);
                    console.error('❌ GitHub projects fetch error:', err);
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchProjects();

        return () => {
            mounted = false;
        };
    }, [retryCount]);

    const retry = () => {
        // Clear cache on manual retry
        cache.delete(CACHE_KEY);
        cache.delete(CACHE_HASH_KEY);
        setRetryCount(prev => prev + 1);
    };

    const refresh = () => {
        // Force refresh by clearing cache (useful for dev/testing)
        console.log('🔄 Forcing refresh of GitHub projects...');
        cache.delete(CACHE_KEY);
        cache.delete(CACHE_HASH_KEY);
        setRetryCount(prev => prev + 1);
    };

    return { projects, loading, error, retry, refresh };
}
