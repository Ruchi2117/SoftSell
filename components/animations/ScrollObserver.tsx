import React, { useRef } from 'react';
import { motion } from 'framer-motion';

interface ScrollObserverProps {
  children: React.ReactNode;
  className?: string;
  animation?: 'fade-up' | 'scale-in';
  delay?: number;
}

const ScrollObserver: React.FC<ScrollObserverProps> = ({
  children,
  className = '',
  animation = 'fade-up',
  delay = 0
}) => {
  const variants = {
    hidden: {
      opacity: 0,
      y: animation === 'fade-up' ? 20 : 0,
      scale: animation === 'scale-in' ? 0.95 : 1,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.16, 1, 0.3, 1],
        delay
      }
    }
  };

  return (
    <motion.div
      className={`${className}`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-10%" }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
};

export default ScrollObserver; 