import { useState, useEffect } from 'react';

interface NavItem {
    id: string;
    label: string;
    href: string;
}

const navItems: NavItem[] = [
    { id: 'about', label: 'About', href: '#hero' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'projects', label: 'Projects', href: '#projects' },
    { id: 'certifications', label: 'Certifications', href: '#certifications' },
    { id: 'contact', label: 'Contact', href: '#contact' },
];

export default function FloatingNav() {
    const [activeSection, setActiveSection] = useState('about');
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Show nav after scrolling past hero
        const handleScroll = () => {
            setIsVisible(window.scrollY > 300);
        };

        // Track active section
        const observerOptions = {
            root: null,
            rootMargin: '-50% 0px',
            threshold: 0,
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const navItem = navItems.find(item => item.href === `#${id}`);
                    if (navItem) {
                        setActiveSection(navItem.id);
                    }
                }
            });
        }, observerOptions);

        // Observe all sections
        const sections = document.querySelectorAll('section[id]');
        sections.forEach((section) => observer.observe(section));

        window.addEventListener('scroll', handleScroll);
        handleScroll();

        return () => {
            window.removeEventListener('scroll', handleScroll);
            observer.disconnect();
        };
    }, []);

    const handleClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        e.preventDefault();
        const target = document.querySelector(href);
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    };

    if (!isVisible) return null;

    return (
        <nav
            className="nav-floating animate-fade-in"
            role="navigation"
            aria-label="Main navigation"
        >
            <ul className="flex items-center gap-1">
                {navItems.map((item) => (
                    <li key={item.id}>
                        <a
                            href={item.href}
                            onClick={(e) => handleClick(e, item.href)}
                            className={activeSection === item.id ? 'nav-item-active' : 'nav-item'}
                            aria-current={activeSection === item.id ? 'page' : undefined}
                        >
                            {item.label}
                        </a>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
