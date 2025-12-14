"use client"

import { motion, useScroll, useTransform } from "framer-motion"

interface BackgroundElementsProps {
  mousePosition: { x: number; y: number }
}

export const BackgroundElements = ({ mousePosition }: BackgroundElementsProps) => {
  const { scrollY } = useScroll()

  // Parallax effects with different speeds
  const y1 = useTransform(scrollY, [0, 1000], [0, 300])
  const y2 = useTransform(scrollY, [0, 1000], [0, -200])
  const y3 = useTransform(scrollY, [0, 1000], [0, 150])
  const rotate1 = useTransform(scrollY, [0, 1000], [0, 360])
  const rotate2 = useTransform(scrollY, [0, 1000], [0, -360])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Main floating blobs with parallax */}
      <motion.div
        className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/30 to-blue-500/20 rounded-full blur-3xl opacity-60"
        style={{
          y: y1,
          x: mousePosition.x * 0.03,
          top: "-10%",
          left: "-10%",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.6, 0.4, 0.6],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        className="absolute w-[400px] h-[400px] bg-gradient-to-r from-amber-400/25 to-orange-500/15 rounded-full blur-3xl opacity-70"
        style={{
          y: y2,
          x: mousePosition.x * -0.02,
          top: "20%",
          right: "-5%",
        }}
        animate={{
          scale: [1, 1.15, 1],
          opacity: [0.7, 0.5, 0.7],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 1,
        }}
      />

      <motion.div
        className="absolute w-[350px] h-[350px] bg-gradient-to-r from-emerald-400/20 to-teal-500/15 rounded-full blur-3xl opacity-50"
        style={{
          y: y3,
          x: mousePosition.x * 0.025,
          bottom: "10%",
          left: "30%",
        }}
        animate={{
          scale: [1, 1.1, 1],
          opacity: [0.5, 0.3, 0.5],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Animated geometric shapes */}
      <motion.div
        className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full opacity-30"
        style={{ rotate: rotate1 }}
        animate={{
          scale: [1, 1.2, 1],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute bottom-32 left-16 w-24 h-24 border-2 border-amber-500/20 rotate-45 opacity-40"
        style={{ rotate: rotate2 }}
        animate={{
          scale: [1, 1.3, 1],
        }}
        transition={{
          duration: 15,
          repeat: Infinity,
          ease: "linear",
        }}
      />

      <motion.div
        className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg opacity-30"
        animate={{
          y: [0, -30, 0],
          rotate: [0, 180, 360],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 2,
        }}
      />

      {/* Floating particles */}
      {[...Array(15)].map((_, i) => (
        <motion.div
          key={i}
          className="absolute w-1 h-1 bg-cyan-400/30 rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
          animate={{
            y: [0, -100, 0],
            x: [0, Math.random() * 50 - 25, 0],
            opacity: [0, 1, 0],
            scale: [0, 1.5, 0],
          }}
          transition={{
            duration: 5 + Math.random() * 5,
            repeat: Infinity,
            delay: Math.random() * 5,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  )
}
