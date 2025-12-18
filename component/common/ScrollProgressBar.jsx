"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const progress = useMotionValue(0); // 0 to 100

  // Create a spring to smooth out the scroll bar movement
  const spring = useSpring(progress, { 
    stiffness: 100, 
    damping: 30, 
    restDelta: 0.001 
  });

  // Transform the numerical value into a CSS percentage string
  const width = useTransform(spring, (v) => `${v}%`);

  useEffect(() => {
    const onScroll = () => {
      const scrollY = window.scrollY;
      const scrollHeight = document.documentElement.scrollHeight;
      const clientHeight = document.documentElement.clientHeight;

      const windowHeight = scrollHeight - clientHeight;
      const pct = windowHeight > 0 ? (scrollY / windowHeight) * 100 : 0;

      // Update the motion value
      progress.set(pct);
    };

    // Add scroll listener with passive option for performance
    window.addEventListener("scroll", onScroll, { passive: true });
    
    // Initial call to set bar position on load
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      // Removed the undefined rafId cleanup as Framer Motion handles its own animations
    };
  }, [progress]);

  return (
    <div className="fixed top-0 left-0 w-full h-[2px] bg-transparent z-[9999] pointer-events-none">
      <motion.div
        style={{ width }}
        className="h-full bg-cyan-400 shadow-[0_0_10px_#00ffff] rounded-full origin-left"
      />
    </div>
  );
};

export default ScrollProgressBar;
