import React, { useRef, useState } from 'react';
import { motion } from 'framer-motion';

interface SpotlightCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  gradient: string;
  delay?: number;
}

const SpotlightCard: React.FC<SpotlightCardProps> = ({
  title,
  description,
  icon,
  gradient,
  delay = 0,
}) => {
  const divRef = useRef<HTMLDivElement>(null);
  const [isFocused, setIsFocused] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [opacity, setOpacity] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!divRef.current || isFocused) return;

    const div = divRef.current;
    const rect = div.getBoundingClientRect();

    setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  const handleFocus = () => {
    setIsFocused(true);
    setOpacity(1);
  };

  const handleBlur = () => {
    setIsFocused(false);
    setOpacity(0);
  };

  const handleMouseEnter = () => {
    setOpacity(1);
  };

  const handleMouseLeave = () => {
    setOpacity(0);
  };

  return (
    <motion.div
      ref={divRef}
      onMouseMove={handleMouseMove}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay }}
      viewport={{ once: true }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 p-8 shadow-2xl border border-gray-700/50 hover:border-gray-600/50 transition-all duration-300 group"
    >
      {/* Spotlight Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300"
        style={{
          opacity,
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(255,255,255,.1), transparent 40%)`,
        }}
      />
      
      {/* Glow Effect */}
      <div
        className="pointer-events-none absolute -inset-px opacity-0 transition duration-300 group-hover:opacity-100"
        style={{
          background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, ${gradient}, transparent 40%)`,
        }}
      />

      {/* Content */}
      <div className="relative z-10">
        {/* Icon */}
        <motion.div
          className="mb-6 flex h-16 w-16 items-center justify-center rounded-lg bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/10"
          whileHover={{ scale: 1.1, rotate: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          <div className="text-white/90 text-2xl">
            {icon}
          </div>
        </motion.div>

        {/* Title */}
        <motion.h3
          className="mb-4 text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-gray-300 transition-all duration-300"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17 }}
        >
          {title}
        </motion.h3>

        {/* Description */}
        <motion.p
          className="text-gray-300 leading-relaxed group-hover:text-gray-200 transition-colors duration-300"
          whileHover={{ x: 5 }}
          transition={{ type: "spring", stiffness: 400, damping: 17, delay: 0.05 }}
        >
          {description}
        </motion.p>

        {/* Decorative Element */}
        <motion.div
          className="absolute -bottom-2 -right-2 h-20 w-20 rounded-full opacity-5 group-hover:opacity-10 transition-opacity duration-300"
          style={{ background: gradient }}
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Border Glow */}
      <div className="absolute inset-0 rounded-xl border border-white/10 group-hover:border-white/20 transition-colors duration-300" />
    </motion.div>
  );
};

export default SpotlightCard;