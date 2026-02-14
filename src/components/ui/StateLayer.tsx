
import { cn } from '@utils';

interface StateLayerProps {
    className?: string;
}

/**
 * Material Design 3 State Layer
 * 
 * A state layer is a semi-transparent covering on an element that indicates its state.
 * It provides a visual cue for interactions (hover, focus, press, drag).
 * 
 * Usage:
 * Place this generic component inside a `relative` container. 
 * It will overlay the entire container with the correct opacity.
 * 
 * Specs:
 * - Hover: 8% opacity (on-surface or primary)
 * - Focus: 12% opacity
 * - Press: 12% opacity
 */
export default function StateLayer({ className }: StateLayerProps) {
    return (
        <div
            className={cn(
                "absolute inset-0 pointer-events-none transition-opacity duration-200 opacity-0",
                // Hover state (parent must have group or hover state trigger)
                "group-hover:opacity-[0.08] group-active:opacity-[0.12] group-focus-visible:opacity-[0.12]",
                // Default color is on-surface (black in light, white in dark)
                "bg-on-surface",
                className
            )}
            aria-hidden="true"
        />
    );
}
