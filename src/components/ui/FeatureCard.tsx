import type { ReactNode } from 'react';

interface FeatureCardProps {
    icon: ReactNode;
    title: string;
    description: string;
    className?: string;
}

export default function FeatureCard({
    icon,
    title,
    description,
    className = '',
}: FeatureCardProps) {
    return (
        <div className={`card-feature ${className}`}>
            <div className="icon-circle mb-4">
                {icon}
            </div>
            <h3 className="title-subsection mb-2">{title}</h3>
            <p className="body-default">{description}</p>
        </div>
    );
}
