"use client";

import { motion } from "framer-motion";

export default function MeshGradient() {
  return (
    <div className="absolute inset-0 -z-10 overflow-hidden">
      {/* Base gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-background" />
      
      {/* Animated gradient blobs */}
      <motion.div
        animate={{
          x: [0, 200, -100, 0],
          y: [0, -150, 100, 0],
          scale: [1, 1.3, 0.9, 1],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        className="absolute -left-20 -top-20 h-[600px] w-[600px] rounded-full bg-primary/30 blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -200, 150, 0],
          y: [0, 150, -100, 0],
          scale: [1, 1.4, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 0.5,
        }}
        className="absolute right-0 top-20 h-[700px] w-[700px] rounded-full bg-blue-500/25 blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, 150, -150, 0],
          y: [0, 200, -50, 0],
          scale: [1, 1.2, 1.3, 1],
        }}
        transition={{
          duration: 9,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
        className="absolute bottom-0 left-1/4 h-[600px] w-[600px] rounded-full bg-purple-500/25 blur-3xl"
      />
      
      <motion.div
        animate={{
          x: [0, -150, 120, 0],
          y: [0, -180, 80, 0],
          scale: [1, 1.3, 0.95, 1],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1.5,
        }}
        className="absolute bottom-10 right-1/4 h-[650px] w-[650px] rounded-full bg-pink-500/20 blur-3xl"
      />
      
      {/* Overlay for better text contrast */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/50 via-transparent to-background/80" />
    </div>
  );
}
