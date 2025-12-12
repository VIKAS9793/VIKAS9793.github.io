/**
 * GitHub API Utilities
 * Fetches repos with 'portfolio' topic for display
 */

export interface GitHubRepo {
    id: number;
    name: string;
    full_name: string;
    description: string | null;
    html_url: string;
    homepage: string | null;
    topics: string[];
    language: string | null;
    stargazers_count: number;
    forks_count: number;
    updated_at: string;
    created_at: string;
}

export interface PortfolioProject {
    id: string;
    title: string;
    description: string;
    longDescription: string;
    category: 'ai' | 'product' | 'web';
    featured: boolean;
    technologies: string[];
    metrics: { label: string; value: string }[];
    links: { type: string; url: string; label: string }[];
    image: string;
}

const GITHUB_USERNAME = 'VIKAS9793';
const PORTFOLIO_TOPIC = 'portfolio';

/**
 * Fetch all repos with 'portfolio' topic
 */
export async function fetchPortfolioRepos(): Promise<GitHubRepo[]> {
    try {
        const response = await fetch(
            `https://api.github.com/users/${GITHUB_USERNAME}/repos?per_page=100&sort=updated`,
            {
                headers: {
                    'Accept': 'application/vnd.github.v3+json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`GitHub API error: ${response.status}`);
        }

        const repos: GitHubRepo[] = await response.json();

        // Filter repos with 'portfolio' topic
        return repos.filter(repo =>
            repo.topics?.includes(PORTFOLIO_TOPIC) && !repo.name.includes('.github.io')
        );
    } catch (error) {
        console.error('Failed to fetch GitHub repos:', error);
        return [];
    }
}

/**
 * Map language to category
 */
function getCategory(language: string | null, topics: string[]): 'ai' | 'product' | 'web' {
    const lower = (language || '').toLowerCase();
    const topicsLower = topics.map(t => t.toLowerCase());

    if (topicsLower.includes('ai') || topicsLower.includes('machine-learning') || topicsLower.includes('llm')) {
        return 'ai';
    }
    if (topicsLower.includes('product') || topicsLower.includes('case-study')) {
        return 'product';
    }
    if (lower === 'typescript' || lower === 'javascript' || lower === 'html') {
        return 'web';
    }
    return 'ai'; // Default to AI for your profile
}

/**
 * Convert GitHub repo to Portfolio project format
 */
export function repoToProject(repo: GitHubRepo): PortfolioProject {
    return {
        id: repo.name,
        title: repo.name
            .replace(/-/g, ' ')
            .replace(/\b\w/g, c => c.toUpperCase()),
        description: repo.description || 'No description available',
        longDescription: repo.description || 'View the repository for more details.',
        category: getCategory(repo.language, repo.topics),
        featured: repo.stargazers_count > 0 || repo.topics.includes('featured'),
        technologies: [
            repo.language || 'Various',
            ...repo.topics.filter(t => t !== PORTFOLIO_TOPIC && t !== 'featured').slice(0, 5)
        ],
        metrics: [
            { label: 'Stars', value: String(repo.stargazers_count) },
            { label: 'Forks', value: String(repo.forks_count) },
            { label: 'Updated', value: new Date(repo.updated_at).toLocaleDateString() },
        ],
        links: [
            { type: 'github', url: repo.html_url, label: 'View Code' },
            ...(repo.homepage ? [{ type: 'live', url: repo.homepage, label: 'Live Demo' }] : []),
        ],
        image: `/images/${repo.name}.png`, // Fallback image path
    };
}
