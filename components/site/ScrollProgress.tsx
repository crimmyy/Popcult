"use client";

import { motion, useReducedMotion, useScroll, useSpring } from "motion/react";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const shouldReduceMotion = useReducedMotion();
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 180,
    damping: 30,
    mass: 0.25,
  });

  return (
    <motion.div
      aria-hidden="true"
      className="absolute inset-x-0 bottom-0 h-[3px] origin-left bg-[#ffe200]"
      style={{
        scaleX: shouldReduceMotion ? scrollYProgress : smoothProgress,
      }}
    />
  );
}
