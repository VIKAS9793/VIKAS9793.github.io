import { type ClassValue, clsx } from "clsx";

/**
 * Utility function to combine and conditionally apply CSS classes
 * Similar to the popular `cn` utility from shadcn/ui
 */
export function cn(...inputs: ClassValue[]) {
  return clsx(inputs);
}

/**
 * Debounce function for performance optimization
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function for performance optimization
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Check if user prefers reduced motion
 */
export function prefersReducedMotion(): boolean {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches;
}

/**
 * Get device type based on screen width
 */
export function getDeviceType(): 'mobile' | 'tablet' | 'desktop' {
  const width = window.innerWidth;
  if (width < 768) return 'mobile';
  if (width < 1024) return 'tablet';
  return 'desktop';
}

/**
 * Check if device supports touch
 */
export function isTouchDevice(): boolean {
  return 'ontouchstart' in window || navigator.maxTouchPoints > 0;
}

/**
 * Linear interpolation function
 */
export function lerp(start: number, end: number, factor: number): number {
  return start + (end - start) * factor;
}

/**
 * Map a value from one range to another
 */
export function mapRange(
  value: number,
  inputMin: number,
  inputMax: number,
  outputMin: number,
  outputMax: number
): number {
  return ((value - inputMin) * (outputMax - outputMin)) / (inputMax - inputMin) + outputMin;
}

/**
 * Clamp a value between min and max
 */
export function clamp(value: number, min: number, max: number): number {
  return Math.min(Math.max(value, min), max);
}

/**
 * Get normalized mouse position (-1 to 1)
 */
export function getNormalizedMousePosition(clientX: number, clientY: number) {
  return {
    x: (clientX / window.innerWidth) * 2 - 1,
    y: -(clientY / window.innerHeight) * 2 + 1,
  };
}

/**
 * Generate a unique ID
 */
export function generateId(): string {
  return Math.random().toString(36).substring(2, 11);
}

/**
 * Format number with commas
 */
export function formatNumber(num: number): string {
  return num.toLocaleString();
}

/**
 * Calculate reading time for text
 */
export function calculateReadingTime(text: string, wpm: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wpm);
}

/**
 * Async delay function
 */
export function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Get contrast color (black or white) based on background color
 */
export function getContrastColor(hexColor: string): string {
  // Remove # if present
  hexColor = hexColor.replace('#', '');

  // Validate hex color length
  if (hexColor.length !== 6) {
    console.warn(`Invalid hex color: ${hexColor}, defaulting to white`);
    return '#ffffff';
  }

  // Convert to RGB
  const r = parseInt(hexColor.substring(0, 2), 16);
  const g = parseInt(hexColor.substring(2, 4), 16);
  const b = parseInt(hexColor.substring(4, 6), 16);

  // Calculate luminance
  const luminance = (0.299 * r + 0.587 * g + 0.114 * b) / 255;

  return luminance > 0.5 ? '#000000' : '#ffffff';
}

/**
 * Preload an image
 */
export function preloadImage(src: string): Promise<HTMLImageElement> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = reject;
    img.src = src;
  });
}

/**
 * Check if element is in viewport
 */
export function isInViewport(element: Element, rootMargin: string = '0px'): Promise<boolean> {
  return new Promise((resolve) => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        resolve(entry.isIntersecting);
        observer.disconnect();
      },
      { rootMargin }
    );
    observer.observe(element);
  });
}

/**
 * Get scroll progress (0 to 1) for an element
 */
export function getScrollProgress(element: Element): number {
  const rect = element.getBoundingClientRect();
  const windowHeight = window.innerHeight;
  const elementTop = rect.top;
  const elementHeight = rect.height;
  
  if (elementTop > windowHeight) return 0;
  if (elementTop + elementHeight < 0) return 1;
  
  const visibleHeight = Math.min(windowHeight - elementTop, elementHeight);
  return visibleHeight / elementHeight;
}

/**
 * Convert hex color to RGB values
 */
export function hexToRgb(hex: string): { r: number; g: number; b: number } | null {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result
    ? {
        r: parseInt(result[1], 16),
        g: parseInt(result[2], 16),
        b: parseInt(result[3], 16),
      }
    : null;
}

/**
 * Get random number between min and max (inclusive)
 */
export function getRandomBetween(min: number, max: number): number {
  return Math.random() * (max - min) + min;
}

/**
 * Get random element from array
 */
export function getRandomFromArray<T>(array: T[]): T {
  return array[Math.floor(Math.random() * array.length)];
}

/**
 * Check if browser supports WebGL
 */
export function supportsWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas');
    return !!(
      window.WebGLRenderingContext &&
      (canvas.getContext('webgl') || canvas.getContext('experimental-webgl'))
    );
  } catch (e) {
    return false;
  }
}

/**
 * Get GPU tier for performance optimization
 * Returns: 'high', 'medium', 'low'
 */
export function getGPUTier(): 'high' | 'medium' | 'low' {
  if (!supportsWebGL()) return 'low';
  
  try {
    const canvas = document.createElement('canvas');
    const gl = canvas.getContext('webgl') as WebGLRenderingContext | null;
    if (!gl) return 'low';
    
    const debugInfo = gl.getExtension('WEBGL_debug_renderer_info');
    if (!debugInfo) return 'medium';
    
    const renderer = (gl.getParameter(debugInfo.UNMASKED_RENDERER_WEBGL) as string).toLowerCase();
    
    // High-end GPUs
    if (
      renderer.includes('nvidia') && 
      (renderer.includes('rtx') || renderer.includes('gtx'))
    ) return 'high';
    
    if (renderer.includes('amd') && renderer.includes('radeon')) return 'high';
    if (renderer.includes('intel') && renderer.includes('iris')) return 'medium';
    
    // Default to medium for unknown GPUs
    return 'medium';
  } catch (e) {
    return 'low';
  }
}
