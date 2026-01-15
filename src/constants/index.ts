/**
 * Application Constants
 * Centralized location for magic numbers, timeouts, and configuration values
 */

/**
 * Animation & Timing Constants
 */
export const ANIMATION = {
  DURATION: {
    SHORT: 200,
    MEDIUM: 500,
    LONG: 1000,
  },
  DEBOUNCE_DELAY: 300,
  THROTTLE_DELAY: 100,
} as const;

/**
 * Form Constants
 */
export const FORM = {
  SUBMISSION_TIMEOUT: 1000,
  SUCCESS_MESSAGE_DURATION: 5000,
  VALIDATION: {
    NAME_MIN_LENGTH: 2,
    NAME_MAX_LENGTH: 50,
    SUBJECT_MIN_LENGTH: 3,
    SUBJECT_MAX_LENGTH: 100,
    MESSAGE_MIN_LENGTH: 10,
    MESSAGE_MAX_LENGTH: 1000,
  },
} as const;

/**
 * API Constants
 */
export const API = {
  CACHE_DURATION: 300000, // 5 minutes
  RETRY_ATTEMPTS: 3,
  RETRY_DELAY: 1000, // 1 second
  REQUEST_TIMEOUT: 10000, // 10 seconds
} as const;

/**
 * Breakpoints (matching Tailwind)
 */
export const BREAKPOINTS = {
  SM: 640,
  MD: 768,
  LG: 1024,
  XL: 1280,
  '2XL': 1536,
} as const;

/**
 * Z-Index Layers
 */
export const Z_INDEX = {
  BACKGROUND: -1,
  BASE: 0,
  DROPDOWN: 1000,
  STICKY: 1020,
  FIXED: 1030,
  MODAL_BACKDROP: 1040,
  MODAL: 1050,
  POPOVER: 1060,
  TOOLTIP: 1070,
  NOTIFICATION: 1080,
} as const;

/**
 * Performance Constants
 */
export const PERFORMANCE = {
  READING_WPM: 200,
  IMAGE_QUALITY: {
    LOW: 0.5,
    MEDIUM: 0.75,
    HIGH: 0.9,
  },
  LAZY_LOAD_THRESHOLD: 0.1,
} as const;

/**
 * Content Limits
 */
export const CONTENT = {
  MAX_PROJECTS: 50,
  MAX_SKILLS_PER_CATEGORY: 10,
  MAX_CERTIFICATIONS: 20,
  PROJECTS_PER_PAGE: 9,
} as const;
