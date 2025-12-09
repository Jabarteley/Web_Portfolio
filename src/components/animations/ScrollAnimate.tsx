import { motion, useInView, HTMLMotionProps } from 'framer-motion';
import { useRef, memo } from 'react';

interface AnimatedSectionProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  animationType?: 'fadeIn' | 'slideInUp' | 'slideInLeft' | 'slideInRight' | 'slideInDown';
  delay?: number;
  threshold?: number;
  once?: boolean;
}

const AnimatedSection: React.FC<AnimatedSectionProps> = memo(({
  children,
  animationType = 'fadeIn',
  delay = 0,
  threshold = 0.1,
  once = true,
  ...props
}) => {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once,
    threshold,
  });

  const variants = {
    hidden: {
      opacity: 0,
      y: animationType === 'slideInUp' ? 50 : animationType === 'slideInDown' ? -50 : 0,
      x: animationType === 'slideInLeft' ? -50 : animationType === 'slideInRight' ? 50 : 0,
    },
    visible: {
      opacity: 1,
      y: 0,
      x: 0,
      transition: {
        duration: 0.6,
        delay,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={variants}
      {...props}
    >
      {children}
    </motion.div>
  );
});

AnimatedSection.displayName = 'AnimatedSection';

export default AnimatedSection;