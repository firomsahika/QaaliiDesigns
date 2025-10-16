"use client";

import { motion } from "framer-motion";

export const BackgroundAnimation = () => {
  return (
    <>
      {/* Top-left animated circle */}
      <motion.div
        className="absolute -top-20 -left-40 w-[400px] h-[400px] bg-pink-400 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [0, 50, 0], y: [0, 30, 0] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right animated circle */}
      <motion.div
        className="absolute -bottom-32 -right-20 w-[500px] h-[500px] bg-indigo-400 rounded-full filter blur-3xl opacity-40"
        animate={{ x: [0, -50, 0], y: [0, -30, 0] }}
        transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
      />
    </>
  );
};
