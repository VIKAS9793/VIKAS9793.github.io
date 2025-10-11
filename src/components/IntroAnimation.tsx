import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface IntroAnimationProps {
  name: string;
  title: string;
  tagline: string;
  onComplete: () => void;
}

export default function IntroAnimation({ name, title, tagline, onComplete }: IntroAnimationProps) {
  const [showName, setShowName] = useState(false);
  const [showDescription, setShowDescription] = useState(false);

  useEffect(() => {
    // Check if user has already seen the intro
    const hasSeenIntro = sessionStorage.getItem('hasSeenIntro');
    
    if (hasSeenIntro) {
      onComplete();
      return;
    }

    // Sequence the animations
    const timer1 = setTimeout(() => setShowName(true), 300);
    const timer2 = setTimeout(() => setShowDescription(true), 1500);
    const timer3 = setTimeout(() => {
      sessionStorage.setItem('hasSeenIntro', 'true');
      onComplete();
    }, 3500);

    return () => {
      clearTimeout(timer1);
      clearTimeout(timer2);
      clearTimeout(timer3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="fixed inset-0 z-[9999] flex items-center justify-center bg-black overflow-hidden"
      >
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-black via-gray-900 to-black">
          <div className="absolute inset-0 opacity-30">
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary-500/20 rounded-full blur-3xl animate-pulse" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary-500/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>
        </div>

        {/* Content container */}
        <div className="relative z-10 text-center">
          {/* Door-slide name animation */}
          {showName && (
            <div className="relative overflow-hidden mb-8">
              {/* Left door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '-100%' }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 bg-gradient-to-r from-primary-500 to-primary-600 z-20"
              />
              
              {/* Right door */}
              <motion.div
                initial={{ x: 0 }}
                animate={{ x: '100%' }}
                transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                className="absolute inset-0 left-1/2 bg-gradient-to-l from-secondary-500 to-secondary-600 z-20"
              />

              {/* Name reveal */}
              <motion.h1
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.5 }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tight"
                style={{
                  textShadow: '0 0 40px rgba(0, 255, 136, 0.3)',
                }}
              >
                {name}
              </motion.h1>
            </div>
          )}

          {/* Description fade-in */}
          {showDescription && (
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className="space-y-2"
            >
              <p className="text-xl md:text-2xl text-primary-500 font-semibold tracking-wide">
                {title}
              </p>
              <p className="text-lg md:text-xl text-gray-400 font-light max-w-3xl mx-auto px-4">
                {tagline}
              </p>
              
              {/* Loading indicator */}
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '200px' }}
                transition={{ duration: 1.5, ease: 'easeInOut' }}
                className="h-0.5 bg-gradient-to-r from-primary-500 to-secondary-500 mx-auto mt-8 rounded-full"
              />
            </motion.div>
          )}
        </div>
      </motion.div>
    </AnimatePresence>
  );
}
