import { useState, useEffect } from 'react';
import { fetchPortfolioCertifications, type PortfolioCertification } from '../api/credly';

interface UseCredlyCertificationsResult {
    certifications: PortfolioCertification[];
    loading: boolean;
    error: string | null;
}

/**
 * Hook to fetch Credly certifications
 */
export function useCredlyCertifications(): UseCredlyCertificationsResult {
    const [certifications, setCertifications] = useState<PortfolioCertification[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        let mounted = true;

        async function fetchCerts() {
            try {
                setLoading(true);
                const certs = await fetchPortfolioCertifications();

                if (mounted) {
                    setCertifications(certs);
                    setError(null);
                }
            } catch (err) {
                if (mounted) {
                    setError(err instanceof Error ? err.message : 'Failed to fetch certifications');
                }
            } finally {
                if (mounted) {
                    setLoading(false);
                }
            }
        }

        fetchCerts();

        return () => {
            mounted = false;
        };
    }, []);

    return { certifications, loading, error };
}
