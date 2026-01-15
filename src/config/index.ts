/**
 * Application Configuration
 * Centralized configuration management using environment variables
 */

export const config = {
  // GitHub API Configuration
  github: {
    username: import.meta.env.VITE_GITHUB_USERNAME || 'VIKAS9793',
    portfolioTopic: 'portfolio',
    perPage: 100,
  },

  // Credly API Configuration
  credly: {
    username: import.meta.env.VITE_CREDLY_USERNAME || 'vikas-sahani.e0a347d7',
  },

  // Contact Information
  contact: {
    email: import.meta.env.VITE_CONTACT_EMAIL || 'vikassahani17@gmail.com',
    phone: import.meta.env.VITE_CONTACT_PHONE || '+91 7715072817',
  },

  // API Configuration
  api: {
    cacheDuration: Number(import.meta.env.VITE_API_CACHE_DURATION) || 300000, // 5 minutes
    retryAttempts: Number(import.meta.env.VITE_API_RETRY_ATTEMPTS) || 3,
    retryDelay: 1000, // 1 second
  },

  // Animation & Performance
  animation: {
    defaultDuration: 200,
    longDuration: 500,
    debounceDelay: 300,
    throttleDelay: 100,
  },

  // Form Configuration
  form: {
    submissionTimeout: 1000,
    successMessageDuration: 5000,
  },
} as const;

export type Config = typeof config;
