import React from 'react';

/**
 * Social Icons Component Set - Vibrant Design
 * 
 * Simplified geometric icons with thick black outlines
 * Icons: ThumbsUp, PlusSign, Star, Circle, Cloud
 */

interface IconProps {
    color?: string;
    size?: number;
    className?: string;
}

/**
 * Thumbs Up Icon
 */
export function ThumbsUpIcon({ color = '#FFD700', size = 40, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Thumb */}
            <path
                d="M15 18 L15 12 C15 10 16 8 18 8 C20 8 20 10 20 12 L20 18"
                fill={color}
                stroke="black"
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
            />
            {/* Hand */}
            <rect
                x="10"
                y="18"
                width="18"
                height="14"
                rx="3"
                fill={color}
                stroke="black"
                strokeWidth="3"
            />
        </svg>
    );
}

/**
 * Plus Sign Icon
 */
export function PlusSignIcon({ color = '#00D4FF', size = 40, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20 8 L20 32 M8 20 L32 20"
                stroke={color}
                strokeWidth="6"
                strokeLinecap="round"
            />
            <path
                d="M20 8 L20 32 M8 20 L32 20"
                stroke="black"
                strokeWidth="8"
                strokeLinecap="round"
                opacity="0.2"
            />
        </svg>
    );
}

/**
 * Star Icon (4-point)
 */
export function StarIcon({ color = '#FFD700', size = 40, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M20 4 L24 16 L36 20 L24 24 L20 36 L16 24 L4 20 L16 16 Z"
                fill={color}
                stroke="black"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/**
 * Circle/Dot Icon
 */
export function CircleIcon({ color = '#FF69B4', size = 30, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <circle
                cx="15"
                cy="15"
                r="12"
                fill={color}
                stroke="black"
                strokeWidth="3"
            />
        </svg>
    );
}

/**
 * Cloud Icon
 */
export function CloudIcon({ color = '#FFFFFF', size = 50, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size * 0.6}
            viewBox="0 0 50 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            <path
                d="M10 20 C10 20 8 20 8 18 C8 16 10 16 10 16 C10 16 10 12 14 12 C18 12 18 16 18 16 C18 16 22 14 26 16 C30 18 30 22 30 22 C30 22 32 22 32 24 C32 26 30 26 30 26 L10 26 C10 26 6 26 6 22 C6 20 10 20 10 20 Z"
                fill={color}
                stroke="black"
                strokeWidth="2"
                strokeLinejoin="round"
            />
        </svg>
    );
}

/**
 * Puzzle Piece Icon (enhanced from PlayfulShapes)
 */
export function PuzzlePieceIcon({ color = '#1E90FF', size = 40, className = '' }: IconProps) {
    return (
        <svg
            width={size}
            height={size}
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
        >
            {/* Simplified blocky puzzle piece */}
            <rect x="8" y="8" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="16" y="8" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="24" y="8" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="8" y="16" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="24" y="16" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="8" y="24" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="16" y="24" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
            <rect x="24" y="24" width="8" height="8" rx="1" fill={color} stroke="black" strokeWidth="2" />
        </svg>
    );
}

// Export all icons as default
export default {
    ThumbsUpIcon,
    PlusSignIcon,
    StarIcon,
    CircleIcon,
    CloudIcon,
    PuzzlePieceIcon,
};
