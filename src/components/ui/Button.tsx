import { forwardRef, type ButtonHTMLAttributes } from 'react';
import { motion, type MotionProps } from 'framer-motion';
import { cn } from '@utils';
import LoadingSpinner from './LoadingSpinner';

interface ButtonProps extends Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'onAnimationStart' | 'onDrag' | 'onDragEnd' | 'onDragStart'> {
  variant?: 'primary' | 'secondary' | 'ghost' | 'outline' | 'danger';
  size?: 'sm' | 'md' | 'lg';
  loading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  fullWidth?: boolean;
  href?: string;
  external?: boolean;
  motionProps?: MotionProps;
}

const variants = {
  primary: 'bg-gradient-to-r from-primary-500 to-primary-400 text-black font-semibold hover:from-primary-400 hover:to-primary-300 focus:ring-primary-500',
  secondary: 'bg-gradient-to-r from-secondary-500 to-secondary-400 text-white font-semibold hover:from-secondary-400 hover:to-secondary-300 focus:ring-secondary-500',
  ghost: 'border border-primary-500/30 text-primary-500 font-semibold hover:bg-primary-500/10 hover:border-primary-500 focus:ring-primary-500',
  outline: 'border-2 border-white/20 text-white font-semibold hover:bg-white/5 hover:border-white/40 focus:ring-white',
  danger: 'bg-gradient-to-r from-red-500 to-red-400 text-white font-semibold hover:from-red-400 hover:to-red-300 focus:ring-red-500'
};

const sizes = {
  sm: 'px-4 py-2 text-sm',
  md: 'px-6 py-3 text-base',
  lg: 'px-8 py-4 text-lg'
};

const Button = forwardRef<HTMLButtonElement, ButtonProps>(({
  variant = 'primary',
  size = 'md',
  loading = false,
  leftIcon,
  rightIcon,
  fullWidth = false,
  href,
  external = false,
  children,
  className,
  disabled,
  motionProps,
  ...props
}, ref) => {
  const baseClasses = cn(
    'inline-flex items-center justify-center gap-2 rounded-lg transition-all duration-200',
    'transform active:scale-95 disabled:opacity-50 disabled:cursor-not-allowed',
    'focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-black',
    variants[variant],
    sizes[size],
    fullWidth && 'w-full',
    className
  );

  const content = (
    <>
      {loading && <LoadingSpinner size="sm" variant="white" />}
      {!loading && leftIcon && <span className="flex-shrink-0">{leftIcon}</span>}
      <span className={cn(loading && 'opacity-0')}>{children}</span>
      {!loading && rightIcon && <span className="flex-shrink-0">{rightIcon}</span>}
    </>
  );

  const defaultMotionProps: MotionProps = {
    whileHover: { scale: disabled || loading ? 1 : 1.02 },
    whileTap: { scale: disabled || loading ? 1 : 0.98 },
    transition: { duration: 0.2 }
  };

  if (href) {
    const Component = motion.a;
    return (
      <Component
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        className={baseClasses}
        aria-disabled={disabled || loading}
        {...defaultMotionProps}
        {...motionProps}
      >
        {content}
        {external && (
          <svg 
            className="w-4 h-4 ml-1" 
            fill="none" 
            stroke="currentColor" 
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
          </svg>
        )}
      </Component>
    );
  }

  return (
    <motion.button
      ref={ref}
      className={baseClasses}
      disabled={disabled || loading}
      aria-busy={loading}
      aria-describedby={loading ? 'loading-button' : undefined}
      {...defaultMotionProps}
      {...motionProps}
      {...props}
    >
      {content}
      {loading && <span id="loading-button" className="sr-only">Loading...</span>}
    </motion.button>
  );
});

Button.displayName = 'Button';

export default Button;

// Icon button variant
export const IconButton = forwardRef<HTMLButtonElement, Omit<ButtonProps, 'leftIcon' | 'rightIcon'> & { icon: React.ReactNode; 'aria-label': string }>(({
  icon,
  size = 'md',
  variant = 'ghost',
  className,
  ...props
}, ref) => {
  const iconSizes = {
    sm: 'w-8 h-8',
    md: 'w-10 h-10', 
    lg: 'w-12 h-12'
  };

  return (
    <Button
      ref={ref}
      variant={variant}
      size={size}
      className={cn('rounded-full aspect-square p-0', iconSizes[size], className)}
      {...props}
    >
      {icon}
    </Button>
  );
});

IconButton.displayName = 'IconButton';