import { motion } from 'framer-motion';
import { memo } from 'react';

interface HoverCardProps {
  children: React.ReactNode;
  className?: string;
  whileHoverScale?: number;
  transition?: any;
}

const HoverCard: React.FC<HoverCardProps> = memo(({
  children,
  className = '',
  whileHoverScale = 1.05,
  transition = { type: 'spring', stiffness: 400, damping: 10 }
}) => {
  return (
    <motion.div
      whileHover={{ scale: whileHoverScale }}
      whileTap={{ scale: 0.98 }}
      transition={transition}
      className={className}
    >
      {children}
    </motion.div>
  );
});

HoverCard.displayName = 'HoverCard';

export default HoverCard;