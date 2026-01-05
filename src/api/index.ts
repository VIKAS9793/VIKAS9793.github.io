/**
 * API Index - Export all API utilities
 */

export { fetchPortfolioRepos, repoToProject } from './github';
export type { GitHubRepo, PortfolioProject } from './github';

export { fetchCredlyBadges, badgeToCertification, fetchPortfolioCertifications } from './credly';
export type { CredlyBadge, PortfolioCertification } from './credly';
