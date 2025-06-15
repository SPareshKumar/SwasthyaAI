import { useEffect, useState } from 'react';

interface ScrollPosition {
  x: number;
  y: number;
}

export const useScrollAnimation = () => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({ x: 0, y: 0 });
  const [scrollDirection, setScrollDirection] = useState<'up' | 'down'>('down');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    let lastScrollY = window.pageYOffset;

    const updateScrollPosition = () => {
      const currentScrollY = window.pageYOffset;
      const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = currentScrollY / scrollHeight;

      setScrollPosition({
        x: window.pageXOffset,
        y: currentScrollY,
      });

      setScrollDirection(currentScrollY > lastScrollY ? 'down' : 'up');
      setScrollProgress(progress);
      lastScrollY = currentScrollY;
    };

    const handleScroll = () => {
      requestAnimationFrame(updateScrollPosition);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return {
    scrollPosition,
    scrollDirection,
    scrollProgress,
  };
};

export default useScrollAnimation;