"use client";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import React from "react";

export const BackgroundLines = ({
  children,
  className,
  svgOptions,
}: {
  children: React.ReactNode;
  className?: string;
  svgOptions?: {
    duration?: number;
  };
}) => {
  return (
    <div
      className={cn(
        "h-10 w-40 overflow-hidden relative",
        className
      )}
    >
      <SVG svgOptions={svgOptions} />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

const pathVariants = {
  initial: { strokeDashoffset: 200, strokeDasharray: "10 100" },
  animate: {
    strokeDashoffset: 0,
    strokeDasharray: "5 100",
    opacity: [0, 1, 1, 0],
  },
};

const SVG = ({
  svgOptions,
}: {
  svgOptions?: {
    duration?: number;
  };
}) => {
  // More paths for a denser wave effect
  const paths = [
    "M 0 20 Q 20 10, 40 20 T 80 20 T 120 20 T 160 20",
    "M 0 15 Q 20 5, 40 15 T 80 15 T 120 15 T 160 15",
    "M 0 25 Q 20 15, 40 25 T 80 25 T 120 25 T 160 25",
    "M 0 10 Q 20 0, 40 10 T 80 10 T 120 10 T 160 10",
    "M 0 30 Q 20 20, 40 30 T 80 30 T 120 30 T 160 30",
    "M 0 5 Q 20 -5, 40 5 T 80 5 T 120 5 T 160 5",
    "M 0 35 Q 20 25, 40 35 T 80 35 T 120 35 T 160 35",
    "M 0 12 Q 20 2, 40 12 T 80 12 T 120 12 T 160 12",
    "M 0 28 Q 20 18, 40 28 T 80 28 T 120 28 T 160 28",
    "M 0 18 Q 20 8, 40 18 T 80 18 T 120 18 T 160 18",
    "M 0 22 Q 20 12, 40 22 T 80 22 T 120 22 T 160 22",
    "M 0 7 Q 20 -3, 40 7 T 80 7 T 120 7 T 160 7",
    "M 0 33 Q 20 23, 40 33 T 80 33 T 120 33 T 160 33",
    "M 0 17 Q 20 7, 40 17 T 80 17 T 120 17 T 160 17",
    "M 0 23 Q 20 13, 40 23 T 80 23 T 120 23 T 160 23",
  ];

  const colors = [
    "#46A5CA",
    "#8C2F2F",
    "#4FAE4D",
    "#D6590C",
    "#811010",
    "#247AFB",
    "#A534A0",
    "#A8A438",
  ];
  return (
    <motion.svg
      viewBox="0 0 160 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className="absolute inset-0 w-full h-full"
    >
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="1"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: (idx * 0.2) % 2,
          }}
          key={`path-first-${idx}`}
        />
      ))}

      {/* duplicate for more paths */}
      {paths.map((path, idx) => (
        <motion.path
          d={path}
          stroke={colors[idx % colors.length]}
          strokeWidth="1"
          strokeLinecap="round"
          variants={pathVariants}
          initial="initial"
          animate="animate"
          transition={{
            duration: svgOptions?.duration || 5,
            ease: "linear",
            repeat: Infinity,
            repeatType: "loop",
            delay: (idx * 0.2 + 1) % 2,
          }}
          key={`path-second-${idx}`}
        />
      ))}
    </motion.svg>
  );
};