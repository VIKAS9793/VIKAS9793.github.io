import { motion } from 'framer-motion';

interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  children: React.ReactNode;
}

export default function Tag({ children, className, ...rest }: TagProps) {
  return (
    <motion.span
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      className={`inline-block px-3 py-1 text-xs border border-primary-500/30 rounded-md interactive-element cursor-default ${className ?? ''}`}
      {...(rest as any)}
    >
      {children}
    </motion.span>
  );
}

