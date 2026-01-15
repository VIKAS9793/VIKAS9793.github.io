import React from 'react';

/**
 * Speech Bubble Component - Vibrant Design
 * 
 * Colorful callout boxes with hand-drawn aesthetic
 * Features:
 * - Rounded rectangle with 12-20px corner radius
 * - 3-5px solid black border
 * - Solid color fill (no gradients)
 * - Triangular tail/pointer
 * - Multiple size and color variants
 */

export interface SpeechBubbleProps {
    children: React.ReactNode;
    color: 'red' | 'pink' | 'blue' | 'cyan' | 'green' | 'yellow' | 'orange';
    size?: 'sm' | 'md' | 'lg';
    tailDirection?: 'top' | 'bottom' | 'left' | 'right' | 'none';
    className?: string;
}

const colorClasses = {
    red: 'bg-vibrant-red',
    pink: 'bg-vibrant-pink',
    blue: 'bg-vibrant-blue',
    cyan: 'bg-vibrant-cyan',
    green: 'bg-vibrant-green',
    yellow: 'bg-vibrant-yellow',
    orange: 'bg-vibrant-orange',
};

const sizeClasses = {
    sm: 'px-4 py-2 text-sm min-w-[120px] max-w-[180px]',
    md: 'px-6 py-3 text-base min-w-[200px] max-w-[280px]',
    lg: 'px-8 py-4 text-lg min-w-[300px] max-w-[400px]',
};

export default function SpeechBubble({
    children,
    color,
    size = 'md',
    tailDirection = 'bottom',
    className = '',
}: SpeechBubbleProps) {
    const bgColor = colorClasses[color];
    const sizeClass = sizeClasses[size];

    return (
        <div className={`relative inline-block ${className}`}>
            {/* Main bubble */}
            <div
                className={`
          ${bgColor}
          ${sizeClass}
          rounded-2xl
          border-punchy-lg
          border-black
          font-bold
          text-black
          shadow-md
          relative
          z-10
        `}
            >
                {children}
            </div>

            {/* Tail/Pointer */}
            {tailDirection !== 'none' && (
                <div
                    className={`
            absolute
            ${tailDirection === 'bottom' ? 'top-full left-1/2 -translate-x-1/2 -mt-1' : ''}
            ${tailDirection === 'top' ? 'bottom-full left-1/2 -translate-x-1/2 -mb-1' : ''}
            ${tailDirection === 'left' ? 'right-full top-1/2 -translate-y-1/2 -mr-1' : ''}
            ${tailDirection === 'right' ? 'left-full top-1/2 -translate-y-1/2 -ml-1' : ''}
          `}
                >
                    <svg
                        width="20"
                        height="15"
                        viewBox="0 0 20 15"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        className={`
              ${tailDirection === 'top' ? 'rotate-180' : ''}
              ${tailDirection === 'left' ? '-rotate-90' : ''}
              ${tailDirection === 'right' ? 'rotate-90' : ''}
            `}
                    >
                        {/* Triangle with black border */}
                        <path
                            d="M10 15L0 0H20L10 15Z"
                            className={bgColor.replace('bg-', 'fill-')}
                        />
                        <path
                            d="M10 15L0 0H20L10 15Z"
                            stroke="black"
                            strokeWidth="3"
                            fill="none"
                        />
                    </svg>
                </div>
            )}
        </div>
    );
}
