/**
 * Decorative Arrow Component - Vibrant Design
 * 
 * Hand-drawn, chunky style arrows for visual flow
 * Features:
 * - 8-12px stroke width
 * - 2-3px black outline
 * - Multi-directional (up, down, left, right, diagonals)
 * - Color variants matching speech bubbles
 */

export interface DecorativeArrowProps {
    color?: 'red' | 'pink' | 'blue' | 'cyan' | 'green' | 'yellow' | 'orange';
    direction?: 'up' | 'down' | 'left' | 'right' | 'up-right' | 'down-right' | 'up-left' | 'down-left';
    size?: 'sm' | 'md' | 'lg';
    className?: string;
}

const colorClasses = {
    red: '#FF5757',
    pink: '#FF69B4',
    blue: '#1E90FF',
    cyan: '#00D4FF',
    green: '#7FFF00',
    yellow: '#FFD700',
    orange: '#FFA500',
};

const sizeMap = {
    sm: { width: 40, height: 40, strokeWidth: 8 },
    md: { width: 60, height: 60, strokeWidth: 10 },
    lg: { width: 80, height: 80, strokeWidth: 12 },
};

const rotationMap = {
    'up': 0,
    'up-right': 45,
    'right': 90,
    'down-right': 135,
    'down': 180,
    'down-left': 225,
    'left': 270,
    'up-left': 315,
};

export default function DecorativeArrow({
    color = 'yellow',
    direction = 'right',
    size = 'md',
    className = '',
}: DecorativeArrowProps) {
    const fillColor = colorClasses[color];
    const { width, height, strokeWidth } = sizeMap[size];
    const rotation = rotationMap[direction];

    return (
        <div
            className={`inline-block ${className}`}
            style={{
                transform: `rotate(${rotation}deg)`,
                width: `${width}px`,
                height: `${height}px`,
            }}
        >
            <svg
                width={width}
                height={height}
                viewBox="0 0 60 60"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
                {/* Arrow shaft */}
                <path
                    d="M10 30 L40 30"
                    stroke={fillColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                />
                {/* Arrow head */}
                <path
                    d="M35 20 L50 30 L35 40"
                    stroke={fillColor}
                    strokeWidth={strokeWidth}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                />

                {/* Black outline for shaft */}
                <path
                    d="M10 30 L40 30"
                    stroke="black"
                    strokeWidth={strokeWidth + 3}
                    strokeLinecap="round"
                    opacity="0.3"
                />
                {/* Black outline for head */}
                <path
                    d="M35 20 L50 30 L35 40"
                    stroke="black"
                    strokeWidth={strokeWidth + 3}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    opacity="0.3"
                />
            </svg>
        </div>
    );
}
