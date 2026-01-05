import { motion } from 'framer-motion';
import { cn } from '@utils';
import { appleReveal, magneticHover } from './Motion';
import { use3DTilt } from '@hooks/useInteractions';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  hoverEffects?: boolean;
  tilt3D?: boolean;
}

export default function Card({ children, className, hoverEffects = true, tilt3D = false }: CardProps) {
  const tilt = use3DTilt(12);

  if (tilt3D) {
    return (
      <motion.div
        ref={tilt.ref}
        variants={appleReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.2 }}
        style={tilt.style}
        {...tilt.handlers}
        whileHover={{ scale: 1.02, transition: { duration: 0.3 } }}
        className={cn('card-glass perspective-1000', className)}
      >
        <div style={{ transform: 'translateZ(50px)' }} className="relative z-10">
          {children}
        </div>
        {/* Subtle shine overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-xl" />
      </motion.div>
    );
  }

  return (
    <motion.div
      variants={appleReveal}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      {...(hoverEffects ? (magneticHover as any) : {})}
      className={cn('card-glass', className)}
    >
      {children}
    </motion.div>
  );
}
