/**
 * Credly API Utilities
 * Fetches badges for display in Certifications section
 */

import { config } from '@config';

export interface CredlyBadge {
    id: string;
    issued_at: string;
    badge_template: {
        id: string;
        name: string;
        description: string;
        image_url: string;
        issuer: {
            name: string;
            image_url: string;
        };
    };
}

export interface CredlyResponse {
    data: CredlyBadge[];
}

export interface PortfolioCertification {
    id: string;
    title: string;
    organization: string;
    date: string;
    credentialUrl: string;
    imageUrl: string;
}

/**
 * Fetch all Credly badges
 */
export async function fetchCredlyBadges(): Promise<CredlyBadge[]> {
    try {
        // Note: Credly's public API may have CORS restrictions
        // Using a proxy or build-time fetch is recommended for production
        const response = await fetch(
            `https://www.credly.com/users/${config.credly.username}/badges.json`,
            {
                headers: {
                    'Accept': 'application/json',
                },
            }
        );

        if (!response.ok) {
            throw new Error(`Credly API error: ${response.status}`);
        }

        const data: CredlyResponse = await response.json();
        return data.data || [];
    } catch (error) {
        console.error('Failed to fetch Credly badges:', error);
        return [];
    }
}

/**
 * Convert Credly badge to Portfolio certification format
 */
export function badgeToCertification(badge: CredlyBadge): PortfolioCertification {
    return {
        id: badge.id,
        title: badge.badge_template.name,
        organization: badge.badge_template.issuer.name,
        date: new Date(badge.issued_at).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
        }),
        credentialUrl: `https://www.credly.com/badges/${badge.id}`,
        imageUrl: badge.badge_template.image_url,
    };
}

/**
 * Fetch and convert all badges
 */
export async function fetchPortfolioCertifications(): Promise<PortfolioCertification[]> {
    const badges = await fetchCredlyBadges();
    return badges.map(badgeToCertification);
}
