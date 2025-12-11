import type { ButtonHTMLAttributes, ReactNode } from 'react';

type Variant = 'primary' | 'outline' | 'green';

interface PillButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    variant?: Variant;
    href?: string;
    external?: boolean;
    className?: string;
}

const variantClasses: Record<Variant, string> = {
    primary: 'btn-pill',
    outline: 'btn-pill-outline',
    green: 'btn-pill-green',
};

export default function PillButton({
    children,
    variant = 'primary',
    href,
    external = false,
    className = '',
    ...props
}: PillButtonProps) {
    const classes = `${variantClasses[variant]} ${className}`;

    if (href) {
        return (
            <a
                href={href}
                className={classes}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
            >
                {children}
            </a>
        );
    }

    return (
        <button className={classes} {...props}>
            {children}
        </button>
    );
}
