import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useScrollAnimation } from './useScrollAnimation';

const ScrollTransition: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const { scrollProgress } = useScrollAnimation();

  return (
    <>
      {/* Progress Indicator */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-800 z-50">
        <motion.div
          className="h-full bg-gradient-to-r from-teal-400 to-blue-500"
          style={{ 
            scaleX: scrollYProgress,
            transformOrigin: "0%" 
          }}
        />
      </div>

      {/* Scroll Indicator - Only shows at the bottom of hero */}
      <motion.div
        className="absolute bottom-10 left-1/2 transform -translate-x-1/2 flex flex-col items-center text-white/60 z-20"
        initial={{ opacity: 1 }}
        animate={{ opacity: scrollProgress > 0.1 ? 0 : 1 }}
        transition={{ duration: 0.3 }}
      >
        <span className="text-sm mb-2 font-light tracking-wide">Scroll to explore</span>
        <motion.div
          className="w-6 h-10 border-2 border-white/30 rounded-full relative"
          animate={{ borderColor: ["rgba(255,255,255,0.3)", "rgba(20,184,166,0.6)", "rgba(255,255,255,0.3)"] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            className="w-1.5 h-1.5 bg-teal-400 rounded-full absolute left-1/2 transform -translate-x-1/2"
            animate={{ y: [2, 20, 2] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </motion.div>
      </motion.div>
    </>
  );
};

export default ScrollTransition;