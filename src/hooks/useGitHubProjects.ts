import { useState, useEffect } from 'react';
import { fetchPortfolioRepos, repoToProject, type PortfolioProject } from '../api/github';

interface UseGitHubProjectsResult {
    projects: PortfolioProject[];
    loading: boolean;
    error: string | null;
}

/**
 * Hook to fetch GitHub repos with 'portfolio' topic
 */
export function useGitHubProjects(): UseGitHubProjectsResult {
    const [projects, setProjects] = useState<PortfolioProject[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        async function fetchProjects() {
            try {
                setLoading(true);
                const repos = await fetchPortfolioRepos();

                if (mounted) {
                    const portfolioProjects = repos.map(repoToProject);
                    setProjects(portfolioProjects);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch projects');
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
    }, []);

    return { projects, loading, error };
}
