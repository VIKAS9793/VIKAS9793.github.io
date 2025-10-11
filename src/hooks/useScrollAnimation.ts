import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

interface ScrollAnimationOptions {
  trigger?: string;
  start?: string;
  end?: string;
  scrub?: boolean;
  markers?: boolean;
  once?: boolean;
}

/**
 * Apple-style reveal animation on scroll
 * Elements fade in and slide up smoothly as they enter viewport
 */
export function useScrollReveal(
  options: ScrollAnimationOptions = {}
) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        {
          opacity: 0,
          y: 60,
          scale: 0.95,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: options.trigger || element,
            start: options.start || 'top 85%',
            end: options.end || 'top 20%',
            toggleActions: options.once ? 'play none none none' : 'play none none reverse',
            markers: options.markers || false,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [options.trigger, options.start, options.end, options.once, options.markers]);

  return elementRef;
}

/**
 * Nike-style stagger animation
 * Children elements animate in sequence
 */
export function useStaggerAnimation(
  childrenSelector: string = '> *',
  delay: number = 0.1
) {
  const containerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const children = container.querySelectorAll(childrenSelector);
    if (!children.length) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        children,
        {
          opacity: 0,
          y: 40,
          rotateX: -15,
        },
        {
          opacity: 1,
          y: 0,
          rotateX: 0,
          duration: 0.8,
          ease: 'power2.out',
          stagger: delay,
          scrollTrigger: {
            trigger: container,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, container);

    return () => ctx.revert();
  }, [childrenSelector, delay]);

  return containerRef;
}

/**
 * Tesla-style parallax effect
 * Element moves at different speed than scroll
 */
export function useParallax(speed: number = 0.5) {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.to(element, {
        yPercent: -100 * speed,
        ease: 'none',
        scrollTrigger: {
          trigger: element,
          start: 'top bottom',
          end: 'bottom top',
          scrub: 1,
        },
      });
    }, element);

    return () => ctx.revert();
  }, [speed]);

  return elementRef;
}

/**
 * Stripe-style scale on scroll
 * Element scales up as you scroll
 */
export function useScaleOnScroll() {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { scale: 0.8, opacity: 0 },
        {
          scale: 1,
          opacity: 1,
          duration: 1.5,
          ease: 'power2.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 80%',
            end: 'top 30%',
            scrub: 1,
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, []);

  return elementRef;
}

/**
 * Airbnb-style fade slide animation
 * Smooth fade and directional slide
 */
export function useFadeSlide(direction: 'left' | 'right' | 'up' | 'down' = 'up') {
  const elementRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    const getTransform = () => {
      switch (direction) {
        case 'left': return { x: -100, y: 0 };
        case 'right': return { x: 100, y: 0 };
        case 'up': return { x: 0, y: 60 };
        case 'down': return { x: 0, y: -60 };
      }
    };

    const from = getTransform();

    const ctx = gsap.context(() => {
      gsap.fromTo(
        element,
        { opacity: 0, ...from },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: element,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    }, element);

    return () => ctx.revert();
  }, [direction]);

  return elementRef;
}
