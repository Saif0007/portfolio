"use client"

import { motion } from "framer-motion"

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number }
}

export const BackgroundElements = ({ mousePosition }: BackgroundElementsProps) => {
  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
      {/* Subtle grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage: `linear-gradient(rgba(16,185,129,0.6) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(16,185,129,0.6) 1px, transparent 1px)`,
          backgroundSize: "80px 80px",
        }}
      />

      {/* Top-left emerald glow */}
      <motion.div
        className="absolute w-[600px] h-[600px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(16,185,129,0.07) 0%, transparent 70%)",
          top: "-10%",
          left: "-10%",
          x: mousePosition.x * 0.02,
        }}
        animate={{ scale: [1, 1.1, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Bottom-right amber glow */}
      <motion.div
        className="absolute w-[400px] h-[400px] rounded-full"
        style={{
          background: "radial-gradient(circle, rgba(245,158,11,0.05) 0%, transparent 70%)",
          bottom: "5%",
          right: "-5%",
          x: mousePosition.x * -0.015,
        }}
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 15, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />

      {/* Rotating ring — top right */}
      <motion.div
        className="absolute top-24 right-16 w-28 h-28 rounded-full border border-emerald-500/10"
        animate={{ rotate: 360 }}
        transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-24 right-16 w-20 h-20 rounded-full border border-emerald-500/5"
        style={{ margin: "16px" }}
        animate={{ rotate: -360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />

      {/* Small floating squares */}
      {[
        { top: "15%", left: "8%", size: 6, delay: 0 },
        { top: "65%", left: "4%", size: 4, delay: 1.5 },
        { top: "40%", right: "6%", size: 5, delay: 3 },
        { top: "80%", right: "12%", size: 3, delay: 0.8 },
      ].map((item, i) => (
        <motion.div
          key={i}
          className="absolute rounded-sm border border-emerald-500/20 bg-emerald-500/5"
          style={{
            top: item.top,
            left: "left" in item ? item.left : undefined,
            right: "right" in item ? item.right : undefined,
            width: item.size * 4,
            height: item.size * 4,
          }}
          animate={{ y: [0, -12, 0], rotate: [0, 45, 0] }}
          transition={{ duration: 6 + i, repeat: Infinity, ease: "easeInOut", delay: item.delay }}
        />
      ))}
    </div>
  )
}
