import { useState, useEffect } from 'react';

/**
 * Floating Scroll Button - GDG Style
 * Shows up/down arrows for smooth navigation
 */
export default function ScrollButton() {
    const [showScroll, setShowScroll] = useState(false);
    const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');

    useEffect(() => {
        const checkScrollPosition = () => {
            const scrolled = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;

            // Show button after scrolling 300px
            setShowScroll(scrolled > 300);

            // Determine direction based on scroll position
            if (scrolled + windowHeight >= documentHeight - 100) {
                setScrollDirection('up'); // At bottom, show up arrow
            } else {
                setScrollDirection('down'); // Otherwise show down arrow
            }
        };

        window.addEventListener('scroll', checkScrollPosition);
        checkScrollPosition(); // Initial check

        return () => window.removeEventListener('scroll', checkScrollPosition);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const scrollToNext = () => {
        const sections = Array.from(document.querySelectorAll('section[id]'));
        const scrollPosition = window.scrollY + window.innerHeight / 2;

        const nextSection = sections.find(section => {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            return sectionTop > scrollPosition;
        });

        if (nextSection) {
            (nextSection as HTMLElement).scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            // Scroll to bottom if no next section
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        }
    };

    const handleClick = () => {
        if (scrollDirection === 'up') {
            scrollToTop();
        } else {
            scrollToNext();
        }
    };

    if (!showScroll) return null;

    return (
        <button
            onClick={handleClick}
            className="fixed bottom-8 right-8 w-14 h-14 bg-white border-card-em border-black rounded-full shadow-card-hover hover:shadow-xl transition-all duration-200 flex items-center justify-center z-50 hover:scale-110"
            aria-label={scrollDirection === 'up' ? 'Scroll to top' : 'Scroll to next section'}
        >
            {scrollDirection === 'up' ? (
                <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 10l7-7m0 0l7 7m-7-7v18" />
                </svg>
            ) : (
                <svg className="w-6 h-6 text-text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                </svg>
            )}
        </button>
    );
}
