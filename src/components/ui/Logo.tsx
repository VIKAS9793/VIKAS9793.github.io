import { motion } from 'framer-motion';
import { cn } from '@utils';

interface LogoProps {
  size?: 'sm' | 'md' | 'lg';
  animated?: boolean;
  showText?: boolean;
  className?: string;
  onClick?: () => void;
}

const sizeClasses = {
  sm: {
    container: 'w-8 h-8',
    text: 'text-sm',
    textContainer: 'ml-2'
  },
  md: {
    container: 'w-10 h-10',
    text: 'text-base',
    textContainer: 'ml-2'
  },
  lg: {
    container: 'w-16 h-16',
    text: 'text-xl',
    textContainer: 'ml-3'
  }
};

export default function Logo({ 
  size = 'md', 
  animated = true, 
  showText = false, 
  className,
  onClick 
}: LogoProps) {
  const containerVariants = {
    initial: { scale: 0.8, opacity: 0 },
    animate: { 
      scale: 1, 
      opacity: 1
    },
    hover: { 
      scale: 1.05,
      rotateY: 180
    },
    tap: { scale: 0.95 }
  };

  const letterVariants = {
    initial: { rotateY: 0 },
    hover: { rotateY: 180 },
  };

  const glowVariants = {
    initial: { opacity: 0 },
    animate: { 
      opacity: [0, 0.5, 0]
    }
  };

  return (
    <motion.div
      className={cn('flex items-center cursor-pointer select-none', className)}
      initial={animated ? 'initial' : 'animate'}
      animate="animate"
      whileHover="hover"
      whileTap="tap"
      variants={containerVariants}
      onClick={onClick}
      transition={{ duration: 0.6, ease: [0.6, -0.05, 0.01, 0.99] }}
    >
      {/* Logo Icon */}
      <div className="relative">
        <motion.div
          className={cn(
            'relative flex items-center justify-center rounded-xl font-bold text-black overflow-hidden',
            'bg-gradient-to-br from-primary-500 via-primary-400 to-secondary-500',
            'shadow-lg shadow-primary-500/25',
            sizeClasses[size].container
          )}
          style={{ perspective: '1000px' }}
        >
          {/* Glow effect */}
          <motion.div
            className="absolute inset-0 rounded-xl bg-gradient-to-br from-primary-300 to-secondary-300 blur-sm"
            variants={glowVariants}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          />
          
          {/* Letter V */}
          <motion.span
            className={cn('font-black tracking-tighter z-10', sizeClasses[size].text)}
            variants={letterVariants}
            style={{ transformStyle: 'preserve-3d' }}
          >
            V
          </motion.span>
          
          {/* Letter S - appears on hover */}
          <motion.span
            className={cn(
              'absolute font-black tracking-tighter z-10 text-white',
              sizeClasses[size].text
            )}
            initial={{ rotateY: -180, opacity: 0 }}
            variants={{
              hover: { rotateY: 0, opacity: 1 }
            }}
            style={{ 
              transformStyle: 'preserve-3d',
              backfaceVisibility: 'hidden'
            }}
          >
            S
          </motion.span>
          
          {/* Corner decorations */}
          <div className="absolute top-0 right-0 w-2 h-2 bg-secondary-400 rounded-bl-full opacity-60" />
          <div className="absolute bottom-0 left-0 w-2 h-2 bg-primary-300 rounded-tr-full opacity-60" />
        </motion.div>
      </div>

      {/* Brand Text */}
      {showText && (
        <motion.div
          className={sizeClasses[size].textContainer}
          initial={animated ? { opacity: 0, x: -10 } : { opacity: 1, x: 0 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3, duration: 0.5 }}
        >
          <div className="flex flex-col leading-tight">
            <span className={cn('font-bold text-white', sizeClasses[size].text)}>
              Vikas Sahani
            </span>
            <span className="text-xs text-primary-500 font-medium tracking-wider">
              AI VISIONARY
            </span>
          </div>
        </motion.div>
      )}
    </motion.div>
  );
}

// Minimal version for footer or compact spaces
export function LogoMark({ size = 'sm', className }: Pick<LogoProps, 'size' | 'className'>) {
  return (
    <div className={cn(
      'flex items-center justify-center rounded-lg font-bold text-black',
      'bg-gradient-to-br from-primary-500 to-secondary-500',
      sizeClasses[size].container,
      className
    )}>
      <span className={sizeClasses[size].text}>VS</span>
    </div>
  );
}