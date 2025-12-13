/**
 * Playful decorative shapes - inspired by Google Dev graphics
 * Use these to add visual interest to sections
 */

interface ShapeProps {
    className?: string;
}

/**
 * Asterisk/Spark shape - 8-pointed star (solid, bold lines)
 */
export function AsteriskShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-12 h-12 ${className}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="6"
            strokeLinecap="round"
        >
            <line x1="50" y1="5" x2="50" y2="95" />
            <line x1="5" y1="50" x2="95" y2="50" />
            <line x1="18" y1="18" x2="82" y2="82" />
            <line x1="82" y1="18" x2="18" y2="82" />
        </svg>
    );
}

/**
 * Puzzle piece shape - pixelated/blocky style like reference
 */
export function PuzzlePiece({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-16 h-16 ${className}`}
            fill="currentColor"
        >
            {/* Blocky puzzle piece */}
            <rect x="20" y="10" width="20" height="20" rx="2" />
            <rect x="40" y="10" width="20" height="20" rx="2" />
            <rect x="60" y="10" width="20" height="20" rx="2" />
            <rect x="20" y="30" width="20" height="20" rx="2" />
            <rect x="60" y="30" width="20" height="20" rx="2" />
            <rect x="20" y="50" width="20" height="20" rx="2" />
            <rect x="40" y="50" width="20" height="20" rx="2" />
            <rect x="60" y="50" width="20" height="20" rx="2" />
            <rect x="40" y="70" width="20" height="20" rx="2" />
            <rect x="60" y="70" width="20" height="20" rx="2" />
        </svg>
    );
}

/**
 * Quote/Comma shape - solid filled like reference
 */
export function QuoteShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 50 80"
            className={`w-10 h-16 ${className}`}
            fill="currentColor"
        >
            <ellipse cx="25" cy="20" rx="20" ry="20" />
            <path d="M25 40 C25 40 25 70 15 80 L5 80 C15 70 15 50 15 40 Z" />
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
 * Hash/Hashtag shape - thick lines like reference
 */
export function HashShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-14 h-14 ${className}`}
            fill="none"
            stroke="currentColor"
            strokeWidth="12"
            strokeLinecap="round"
        >
            <line x1="30" y1="10" x2="20" y2="90" />
            <line x1="70" y1="10" x2="60" y2="90" />
            <line x1="10" y1="35" x2="90" y2="35" />
            <line x1="10" y1="65" x2="90" y2="65" />
        </svg>
    );
}

/**
 * Sparkle/Star shape - 4-pointed star like the Google Gemini logo style
 */
export function SparkleShape({ className = '' }: ShapeProps) {
    return (
        <svg
            viewBox="0 0 100 100"
            className={`w-10 h-10 ${className}`}
            fill="currentColor"
        >
            <path d="M50 0 C50 0 55 25 75 40 C75 40 100 50 100 50 C100 50 75 60 75 60 C55 75 50 100 50 100 C50 100 45 75 25 60 C25 60 0 50 0 50 C0 50 25 40 25 40 C45 25 50 0 50 0 Z" />
        </svg>
    );
}

export default { AsteriskShape, PuzzlePiece, QuoteShape, PillShape, HashShape, SparkleShape };
