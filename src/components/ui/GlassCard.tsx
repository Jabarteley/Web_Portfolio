import { motion, HTMLMotionProps } from 'framer-motion';

interface GlassCardProps extends HTMLMotionProps<'div'> {
  children: React.ReactNode;
  className?: string;
  blur?: string;
  background?: string;
  border?: boolean;
  padding?: string;
  rounded?: string;
  position?: string;
  zIndex?: string;
}

const GlassCard: React.FC<GlassCardProps> = ({
  children,
  className = '',
  blur = '10px',
  background = 'rgba(255, 255, 255, 0.15)',
  border = true,
  padding = 'p-6',
  rounded = 'rounded-xl',
  position = 'relative',
  zIndex = 'z-10',
  ...props
}) => {
  return (
    <motion.div
      className={`${position} ${rounded} ${padding} ${border ? 'border border-white/20' : ''} ${zIndex} ${className}`}
      style={{
        background,
        backdropFilter: `blur(${blur})`,
        WebkitBackdropFilter: `blur(${blur})`,
        boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
        border: border ? '1px solid rgba(255, 255, 255, 0.18)' : 'none'
      }}
      {...props}
    >
      {children}
    </motion.div>
  );
};

export default GlassCard;