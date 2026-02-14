// Explicit type declarations to fix IDE resolution issues
// even when packages are installed correctly.

declare module 'tailwind-merge' {
    export function twMerge(...classLists: (string | undefined | null | false)[]): string;
}

declare module 'clsx' {
    export type ClassValue = string | number | boolean | undefined | null | { [key: string]: any } | ClassValue[];
    export function clsx(...inputs: ClassValue[]): string;
}
