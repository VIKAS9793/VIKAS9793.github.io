import type { SVGProps } from 'react';

/** Small line icons, drawn here so no icon library is shipped. All are decorative unless a parent labels them. */
type IconProps = SVGProps<SVGSVGElement>;

const base: IconProps = { viewBox: '0 0 24 24', 'aria-hidden': true, focusable: false };

export const ArrowUpRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 17 17 7M8 7h9v9" />
  </svg>
);

export const ArrowDownRight = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M7 7l10 10M17 8v9H8" />
  </svg>
);

export const ArrowDown = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 5v14M6 13l6 6 6-6" />
  </svg>
);

export const Asterisk = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3v18M4.2 7.5l15.6 9M19.8 7.5l-15.6 9" />
  </svg>
);

export const Wave = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M3 12c2.5-4 4.5-4 6 0s3.5 4 6 0 3.5-4 6 0" />
  </svg>
);

export const Compass = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m15.5 8.5-2 5-5 2 2-5z" />
  </svg>
);

export const Spark = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3c.6 4.6 2.4 6.4 7 7-4.6.6-6.4 2.4-7 7-.6-4.6-2.4-6.4-7-7 4.6-.6 6.4-2.4 7-7z" />
    <path d="M19 16.5v3M17.5 18h3" />
  </svg>
);

export const Shield = (props: IconProps) => (
  <svg {...base} {...props}>
    <path d="M12 3 5 6v5.5c0 4.4 3 7.6 7 9.5 4-1.9 7-5.1 7-9.5V6z" />
    <path d="m9 12 2.2 2.2L15.5 10" />
  </svg>
);

export const Check = (props: IconProps) => (
  <svg {...base} {...props}>
    <circle cx="12" cy="12" r="9" />
    <path d="m8 12.3 2.8 2.8L16 9.5" />
  </svg>
);

export const Mail = (props: IconProps) => (
  <svg {...base} {...props}>
    <rect x="3" y="5.5" width="18" height="13" rx="1.5" />
    <path d="m4 7 8 6 8-6" />
  </svg>
);
