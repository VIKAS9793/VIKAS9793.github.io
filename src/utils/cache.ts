/**
 * Simple in-memory cache for API responses
 * Reduces redundant network requests and improves performance
 */

import { config } from '@config';

interface CacheEntry<T> {
  data: T;
  timestamp: number;
  expiresAt: number;
}

class Cache {
  private store: Map<string, CacheEntry<any>>;

  constructor() {
    this.store = new Map();
  }

  /**
   * Get cached data if available and not expired
   */
  get<T>(key: string): T | null {
    const entry = this.store.get(key);

    if (!entry) {
      return null;
    }

    // Check if expired
    if (Date.now() > entry.expiresAt) {
      this.store.delete(key);
      return null;
    }

    return entry.data as T;
  }

  /**
   * Set data in cache with TTL
   */
  set<T>(key: string, data: T, ttl: number = config.api.cacheDuration): void {
    const entry: CacheEntry<T> = {
      data,
      timestamp: Date.now(),
      expiresAt: Date.now() + ttl,
    };

    this.store.set(key, entry);
  }

  /**
   * Check if key exists and is not expired
   */
  has(key: string): boolean {
    return this.get(key) !== null;
  }

  /**
   * Clear specific key
   */
  delete(key: string): void {
    this.store.delete(key);
  }

  /**
   * Clear all cache
   */
  clear(): void {
    this.store.clear();
  }

  /**
   * Clear expired entries
   */
  clearExpired(): void {
    const now = Date.now();
    for (const [key, entry] of this.store.entries()) {
      if (now > entry.expiresAt) {
        this.store.delete(key);
      }
    }
  }

  /**
   * Get cache stats
   */
  stats(): { size: number; keys: string[] } {
    return {
      size: this.store.size,
      keys: Array.from(this.store.keys()),
    };
  }
}

// Singleton instance
export const cache = new Cache();

// Clear expired entries every 5 minutes
if (typeof window !== 'undefined') {
  setInterval(() => {
    cache.clearExpired();
  }, 5 * 60 * 1000);
}

/**
 * Cache versioning for invalidation
 * Increment this when data structure changes or you want to force refresh
 */
export const CACHE_VERSION = '1.0.0';

/**
 * Create a versioned cache key
 */
export function versionedCacheKey(key: string): string {
  return `${key}_v${CACHE_VERSION}`;
}

/**
 * Higher-order function to add caching to async functions
 */
export function withCache<T>(
  key: string,
  fetchFn: () => Promise<T>,
  ttl?: number
): () => Promise<T> {
  return async () => {
    // Check cache first
    const cached = cache.get<T>(key);
    if (cached !== null) {
      console.log(`Cache hit for: ${key}`);
      return cached;
    }

    console.log(`Cache miss for: ${key}, fetching...`);
    const data = await fetchFn();
    cache.set(key, data, ttl);
    return data;
  };
}
