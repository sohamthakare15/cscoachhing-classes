import { motion } from "motion/react";
import React from "react";

export const FadeIn: React.FC<{ children: React.ReactNode, delay?: number, className?: string, direction?: 'up' | 'down' | 'left' | 'right' | 'none', scale?: number }> = ({ children, delay = 0, className = "", direction = 'up', scale = 1 }) => {
  const directions = {
    up: { y: 30, x: 0 },
    down: { y: -30, x: 0 },
    left: { x: 30, y: 0 },
    right: { x: -30, y: 0 },
    none: { x: 0, y: 0 }
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale, ...directions[direction] }}
      whileInView={{ opacity: 1, x: 0, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.8, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
      className={`${className} will-change-transform will-change-opacity`}
    >
      {children}
    </motion.div>
  );
};

export const StaggerContainer: React.FC<{ children: React.ReactNode, className?: string }> = ({ children, className = "" }) => (
  <motion.div
    initial="hidden"
    whileInView="visible"
    viewport={{ once: true, margin: "-50px" }}
    variants={{
      hidden: {},
      visible: {
        transition: {
          staggerChildren: 0.15
        }
      }
    }}
    className={className}
  >
    {children}
  </motion.div>
);

export const StaggerItem: React.FC<{ children: React.ReactNode, className?: string, scale?: number }> = ({ children, className = "", scale = 1 }) => (
  <motion.div
    variants={{
      hidden: { opacity: 0, y: 20, scale },
      visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.6, ease: [0.21, 0.47, 0.32, 0.98] } }
    }}
    className={`${className} will-change-transform will-change-opacity`}
  >
    {children}
  </motion.div>
);
