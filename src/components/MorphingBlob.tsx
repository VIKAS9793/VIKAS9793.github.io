import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

interface MorphingBlobProps {
  className?: string;
  color1?: string;
  color2?: string;
  opacity?: number;
}

export default function MorphingBlob({
  className = '',
  color1 = '#00ff88',
  color2 = '#0a84ff',
  opacity = 0.15,
}: MorphingBlobProps) {
  const blobRef = useRef<SVGPathElement>(null);

  useEffect(() => {
    if (!blobRef.current) return;

    let animationId: number;
    let time = 0;
    let frameCount = 0;

    const animate = () => {
      frameCount++;
      // Only update every 3rd frame (20fps instead of 60fps)
      if (frameCount % 3 === 0) {
        time += 0.005;

        // Create organic blob shapes using sine waves
        const path = createBlobPath(time);
        if (blobRef.current) {
          blobRef.current.setAttribute('d', path);
        }
      }

      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationId);
    };
  }, []);

  const createBlobPath = (t: number): string => {
    const points = 6;
    const radius = 300;
    const centerX = 500;
    const centerY = 500;

    let path = 'M ';

    for (let i = 0; i <= points; i++) {
      const angle = (i / points) * Math.PI * 2;
      const offset = Math.sin(t + i) * 50 + Math.cos(t * 1.5 + i) * 30;
      const r = radius + offset;

      const x = centerX + Math.cos(angle) * r;
      const y = centerY + Math.sin(angle) * r;

      if (i === 0) {
        path += `${x} ${y}`;
      } else {
        // Create smooth curves
        const prevAngle = ((i - 1) / points) * Math.PI * 2;
        const prevOffset = Math.sin(t + (i - 1)) * 50 + Math.cos(t * 1.5 + (i - 1)) * 30;
        const prevR = radius + prevOffset;
        const prevX = centerX + Math.cos(prevAngle) * prevR;
        const prevY = centerY + Math.sin(prevAngle) * prevR;

        const cpX1 = prevX + Math.cos(prevAngle + Math.PI / 2) * 50;
        const cpY1 = prevY + Math.sin(prevAngle + Math.PI / 2) * 50;
        const cpX2 = x + Math.cos(angle - Math.PI / 2) * 50;
        const cpY2 = y + Math.sin(angle - Math.PI / 2) * 50;

        path += ` C ${cpX1} ${cpY1}, ${cpX2} ${cpY2}, ${x} ${y}`;
      }
    }

    path += ' Z';
    return path;
  };

  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <svg
        className="absolute w-full h-full"
        viewBox="0 0 1000 1000"
        preserveAspectRatio="xMidYMid slice"
        style={{ opacity }}
      >
        <defs>
          {/* Gaussian blur for soft edges */}
          <filter id="gooey">
            <feGaussianBlur in="SourceGraphic" stdDeviation="30" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 30 -10"
              result="gooey"
            />
          </filter>

          {/* Gradient fills */}
          <radialGradient id="blobGradient1" cx="30%" cy="30%">
            <stop offset="0%" stopColor={color1} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color2} stopOpacity="0.3" />
          </radialGradient>

          <radialGradient id="blobGradient2" cx="70%" cy="70%">
            <stop offset="0%" stopColor={color2} stopOpacity="0.8" />
            <stop offset="100%" stopColor={color1} stopOpacity="0.3" />
          </radialGradient>
        </defs>

        {/* Single morphing blob */}
        <g filter="url(#gooey)">
          <motion.path
            ref={blobRef}
            fill="url(#blobGradient1)"
            initial={{ scale: 0.8, rotate: 0 }}
            animate={{
              scale: [0.8, 1, 0.9, 1.1, 0.8],
              rotate: [0, 90, 180, 270, 360],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: 'linear',
            }}
          />
        </g>
      </svg>
    </div>
  );
}
