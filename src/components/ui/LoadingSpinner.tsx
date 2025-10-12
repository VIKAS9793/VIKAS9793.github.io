import { motion } from 'framer-motion';
import { cn } from '@utils';

interface LoadingSpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  variant?: 'primary' | 'secondary' | 'white';
  showText?: boolean;
  text?: string;
  progress?: number;
  className?: string;
}

const sizeClasses = {
  sm: 'w-4 h-4',
  md: 'w-6 h-6',
  lg: 'w-8 h-8'
};

const colorClasses = {
  primary: 'text-primary-500',
  secondary: 'text-secondary-500',
  white: 'text-white'
};

export default function LoadingSpinner({
  size = 'md',
  variant = 'primary',
  showText = false,
  text = 'Loading...',
  progress,
  className
}: LoadingSpinnerProps) {
  return (
    <div className={cn('flex flex-col items-center justify-center', className)}>
      {/* Animated spinner */}
      <div className="relative">
        <motion.div
          className={cn(
            'rounded-full border-2 border-transparent border-t-current',
            sizeClasses[size],
            colorClasses[variant]
          )}
          animate={{ rotate: 360 }}
          transition={{
            duration: 1,
            repeat: Infinity,
            ease: 'linear'
          }}
        />
        
        {/* Glow effect for primary variant */}
        {variant === 'primary' && (
          <motion.div
            className={cn(
              'absolute inset-0 rounded-full border-2 border-transparent border-t-primary-500 opacity-30',
              sizeClasses[size]
            )}
            animate={{ rotate: 360 }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: 'linear'
            }}
          />
        )}
      </div>
      
      {/* Progress bar */}
      {progress !== undefined && (
        <div className="w-32 h-1 bg-gray-800 rounded-full mt-4 overflow-hidden">
          <motion.div
            className="h-full bg-gradient-to-r from-primary-500 to-secondary-500 rounded-full"
            initial={{ width: '0%' }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3, ease: 'easeOut' }}
          />
        </div>
      )}
      
      {/* Loading text */}
      {showText && (
        <motion.p
          className="mt-3 text-sm text-gray-400 font-medium"
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: 'easeInOut'
          }}
        >
          {text}
          {progress !== undefined && ` ${Math.round(progress)}%`}
        </motion.p>
      )}
    </div>
  );
}

// Skeleton loader for cards
export function SkeletonCard({ className }: { className?: string }) {
  return (
    <div className={cn('card-glass animate-pulse', className)}>
      <div className="space-y-4">
        <div className="h-4 bg-gray-800 rounded w-3/4"></div>
        <div className="h-3 bg-gray-800 rounded w-1/2"></div>
        <div className="h-20 bg-gray-800 rounded"></div>
        <div className="flex space-x-2">
          <div className="h-6 bg-gray-800 rounded w-16"></div>
          <div className="h-6 bg-gray-800 rounded w-20"></div>
          <div className="h-6 bg-gray-800 rounded w-14"></div>
        </div>
      </div>
    </div>
  );
}

// Page transition loader
export function PageLoader() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm"
    >
      <div className="text-center">
        <LoadingSpinner size="lg" variant="primary" showText text="Loading portfolio" />
        
        {/* Animated dots */}
        <div className="flex justify-center space-x-1 mt-6">
          {[0, 1, 2].map((i) => (
            <motion.div
              key={i}
              className="w-2 h-2 bg-primary-500 rounded-full"
              animate={{ y: [0, -8, 0] }}
              transition={{
                duration: 0.6,
                repeat: Infinity,
                delay: i * 0.2
              }}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
}