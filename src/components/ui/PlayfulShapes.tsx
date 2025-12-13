/**
 * Playful decorative shapes - inspired by Google Dev graphics
 * Use these to add visual interest to sections
 */

interface ShapeProps {
    className?: string;
}

/**
 * Asterisk/Spark shape - 8-pointed star
 */
export function AsteriskShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-12 h-12 ${className}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
        >
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="18" y1="18" x2="82" y2="82" />
            <line x1="82" y1="18" x2="18" y2="82" />
        </svg>
    );
}

/**
 * Puzzle piece shape
 */
export function PuzzlePiece({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-16 h-16 ${className}`}
            fill="currentColor"
        >
            <path d="M20 10 H50 C50 10 45 20 50 30 C55 20 50 10 50 10 H80 V40 C80 40 70 35 60 40 C70 45 80 40 80 40 V70 H50 C50 70 55 60 50 50 C45 60 50 70 50 70 H20 V40 C20 40 30 45 40 40 C30 35 20 40 20 40 Z" />
        </svg>
    );
}

/**
 * Quote/Comma shape
 */
export function QuoteShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 50 80"
            className={`w-10 h-16 ${className}`}
            fill="currentColor"
        >
            <path d="M25 0 C38 0 50 12 50 25 C50 38 38 50 25 50 C25 50 25 60 20 80 L10 80 C15 60 12 50 5 42 C2 38 0 32 0 25 C0 12 12 0 25 0 Z" />
        </svg>
    );
}

/**
 * Pill/Rounded rectangle shape
 */
export function PillShape({ className = '' }: ShapeProps) {
    return (
        <div className={`rounded-full ${className}`} />
    );
}

/**
 * Hash/Hashtag shape
 */
export function HashShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-14 h-14 ${className}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="10"
            strokeLinecap="round"
        >
            <line x1="30" y1="10" x2="20" y2="90" />
            <line x1="70" y1="10" x2="60" y2="90" />
            <line x1="10" y1="35" x2="90" y2="35" />
            <line x1="10" y1="65" x2="90" y2="65" />
        </svg>
    );
}

export default { AsteriskShape, PuzzlePiece, QuoteShape, PillShape, HashShape };
