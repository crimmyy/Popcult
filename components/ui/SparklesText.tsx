"use client";

import type { ReactNode } from "react";
import { motion, useReducedMotion } from "motion/react";
import { cn } from "@/lib/utils";

type SparklesTextProps = {
  children: ReactNode;
  className?: string;
};

const sparkles = [
  { id: "one", left: "4%", top: "8%", color: "#ffe200", delay: 0, scale: 0.7 },
  {
    id: "two",
    left: "29%",
    top: "-5%",
    color: "#7621c5",
    delay: 0.55,
    scale: 0.45,
  },
  {
    id: "three",
    left: "57%",
    top: "4%",
    color: "#ffe200",
    delay: 1.1,
    scale: 0.55,
  },
  {
    id: "four",
    left: "82%",
    top: "28%",
    color: "#7621c5",
    delay: 0.3,
    scale: 0.65,
  },
  {
    id: "five",
    left: "68%",
    top: "77%",
    color: "#ffe200",
    delay: 1.45,
    scale: 0.4,
  },
] as const;

export function SparklesText({
  children,
  className,
}: SparklesTextProps) {
  const shouldReduceMotion = useReducedMotion();

  return (
    <span className={cn("relative inline-block", className)}>
      {!shouldReduceMotion
        ? sparkles.map((sparkle) => (
            <motion.svg
              key={sparkle.id}
              aria-hidden="true"
              className="pointer-events-none absolute z-20 size-5"
              style={{ left: sparkle.left, top: sparkle.top }}
              initial={{ opacity: 0, scale: 0, rotate: 75 }}
              animate={{
                opacity: [0, 0.9, 0],
                scale: [0, sparkle.scale, 0],
                rotate: [75, 120, 150],
              }}
              transition={{
                duration: 1.4,
                repeat: Infinity,
                repeatDelay: 1.6,
                delay: sparkle.delay,
              }}
              viewBox="0 0 21 21"
            >
              <path
                d="M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z"
                fill={sparkle.color}
              />
            </motion.svg>
          ))
        : null}
      <span className="relative z-10">{children}</span>
    </span>
  );
}
