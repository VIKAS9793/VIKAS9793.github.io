import React from 'react';
import { motion } from 'framer-motion';

interface SafeLinkProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  href: string;
  children: React.ReactNode;
}

const SafeLink: React.FC<SafeLinkProps> = ({ href, children, target = '_blank', rel, className, ...rest }) => {
  const safeRel = target === '_blank' ? 'noopener noreferrer' : undefined;
  
  return (
    <motion.a
      href={href} 
      target={target} 
      rel={rel ?? safeRel}
      whileHover={{ scale: 1.02, x: 2 }}
      whileTap={{ scale: 0.98 }}
      className={`interactive-element ${className ?? ''}`}
      {...(rest as any)}
    >
      {children}
    </motion.a>
  );
};

export default SafeLink;
