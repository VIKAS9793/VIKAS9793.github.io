
import { useState, useEffect } from 'react';

interface OptimizedImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    src: string;
    alt: string;
    className?: string;
    width?: number | string;
    height?: number | string;
    priority?: boolean;
}

/**
 * Production-Grade Optimized Image Component
 * - Enforces alt text for accessibility
 * - Handles lazy loading by default
 * - Uses async decoding for performance
 * - Includes blur-up placeholder effect (simulated)
 */
export default function OptimizedImage({
    src,
    alt,
    className = '',
    width,
    height,
    priority = false,
    ...props
}: OptimizedImageProps) {
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        // If priority is true, or if the image is already cached by browser
        const img = new Image();
        img.src = src;
        if (img.complete) {
            setIsLoaded(true);
        }
    }, [src]);

    return (
        <img
            src={src}
            alt={alt}
            className={`transition-opacity duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'} ${className}`}
            width={width}
            height={height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            onLoad={() => setIsLoaded(true)}
            {...props}
        />
    );
}
