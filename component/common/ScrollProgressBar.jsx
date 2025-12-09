"use client";

import { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const ScrollProgressBar = () => {
  const progress = useMotionValue(0); // 0..100
  // spring to smooth changes
  const spring = useSpring(progress, { stiffness: 120, damping: 20 });
  // map to a percentage string the motion.div can use as width
  const width = useTransform(spring, (v) => `${v}%`);

  useEffect(() => {

    const onScroll = () => {
      const totalScroll = document.documentElement.scrollTop;
      const windowHeight =
        document.documentElement.scrollHeight - document.documentElement.clientHeight;
      const pct = windowHeight > 0 ? (totalScroll / windowHeight) * 100 : 0;

      // set motion value (framer handles animation/spring)
      progress.set(pct);
    };

    // listen passive
    window.addEventListener("scroll", onScroll, { passive: true });
    // init
    onScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [progress]);

  return (
    <div className="fixed top-0 left-0 w-full  h-[1.5px] bg-transparent z-[9999]">
      <motion.div
        style={{ width }}
        className="h-full bg-Primary rounded-full origin-left"
      />
    </div>
  );
};

export default ScrollProgressBar;

