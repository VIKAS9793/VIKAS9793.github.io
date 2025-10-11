import type { Variants } from 'framer-motion';

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } },
};

export const staggerContainer = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.95 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.4, ease: 'easeOut' } },
};

export const tiltHover = {
  whileHover: { rotateZ: 2, scale: 1.02 },
  whileTap: { scale: 0.98 },
};

// Apple-style smooth reveal
export const appleReveal: Variants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1, 
    transition: { 
      duration: 1.2, 
      ease: [0.25, 0.46, 0.45, 0.94] // Apple's signature easing
    } 
  },
};

// Nike-style dynamic entrance
export const nikeEntrance: Variants = {
  hidden: { opacity: 0, x: -60, rotateY: -15 },
  show: { 
    opacity: 1, 
    x: 0, 
    rotateY: 0,
    transition: { 
      duration: 0.8, 
      ease: [0.22, 1, 0.36, 1] // Nike's sharp easing
    } 
  },
};

// Tesla-style magnetic hover
export const magneticHover = {
  whileHover: { 
    scale: 1.05, 
    rotateZ: 1,
    transition: { duration: 0.3, ease: 'easeOut' }
  },
  whileTap: { scale: 0.95 },
};

// Stripe-style smooth fade
export const stripeFade: Variants = {
  hidden: { opacity: 0, y: 20 },
  show: { 
    opacity: 1, 
    y: 0,
    transition: { 
      duration: 0.6, 
      ease: [0.16, 1, 0.3, 1] // Smooth deceleration
    } 
  },
};

// Luxury brand slide-in (Gucci/LV style)
export const luxurySlide: Variants = {
  hidden: { opacity: 0, x: 100, skewX: -5 },
  show: { 
    opacity: 1, 
    x: 0,
    skewX: 0,
    transition: { 
      duration: 1, 
      ease: [0.19, 1, 0.22, 1]
    } 
  },
};

// Advanced stagger with scale
export const staggerScale = (stagger = 0.08, delay = 0): Variants => ({
  hidden: {},
  show: {
    transition: {
      staggerChildren: stagger,
      delayChildren: delay,
    },
  },
});
