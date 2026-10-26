import { motion, useInView, Variants } from 'framer-motion';
import { useRef } from 'react';

interface TextRevealProps {
  children: string;
  className?: string;
  delay?: number;
  as?: 'h1' | 'h2' | 'h3' | 'p' | 'span';
}

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.02,
    },
  },
};

const wordVariants: Variants = {
  hidden: {
    y: 100,
    opacity: 0,
    rotateX: -80,
  },
  visible: {
    y: 0,
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.8,
      ease: [0.22, 1, 0.36, 1],
    },
  },
};

export function TextReveal({
  children,
  className,
  delay = 0,
  as: Component = 'p',
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const words = children.split(' ');

  const MotionComponent = motion[Component];

  return (
    <MotionComponent
      ref={ref}
      className={className}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? 'visible' : 'hidden'}
      style={{ perspective: 1000, display: 'flex', flexWrap: 'wrap', gap: '0.3em' }}
      transition={{ delay }}
    >
      {words.map((word, i) => (
        <span key={i} style={{ overflow: 'hidden', display: 'inline-block' }}>
          <motion.span
            variants={wordVariants}
            style={{ display: 'inline-block', transformOrigin: 'bottom' }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </MotionComponent>
  );
}
