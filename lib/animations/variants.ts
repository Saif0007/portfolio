import { Variants } from "framer-motion"

// Container animations with stagger
export const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.15,
    },
  },
}

// Slide up fade in
export const slideUpVariants: Variants = {
  hidden: { opacity: 0, y: 60 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Scale fade in
export const scaleVariants: Variants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.6, -0.05, 0.01, 0.99],
    },
  },
}

// Text reveal character by character
export const textRevealVariants: Variants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut",
    },
  },
}

// 3D card hover effect
export const cardHoverVariants: Variants = {
  initial: {
    scale: 1,
    rotateX: 0,
    rotateY: 0,
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Magnetic button effect
export const magneticVariants: Variants = {
  initial: { x: 0, y: 0 },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeOut",
    },
  },
}

// Fade in from direction
export const fadeInVariants = (direction: "left" | "right" | "up" | "down" = "up"): Variants => {
  const directions = {
    left: { x: -100, y: 0 },
    right: { x: 100, y: 0 },
    up: { x: 0, y: 100 },
    down: { x: 0, y: -100 },
  }

  return {
    hidden: {
      opacity: 0,
      ...directions[direction],
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: {
        duration: 0.8,
        ease: [0.6, -0.05, 0.01, 0.99],
      },
    },
  }
}

// Parallax scroll effect
export const parallaxVariants = (speed: number = 0.5): Variants => ({
  initial: { y: 0 },
  animate: (scrollY: number) => ({
    y: scrollY * speed,
    transition: {
      ease: "linear",
      duration: 0,
    },
  }),
})

// Glowing border effect
export const glowVariants: Variants = {
  initial: {
    boxShadow: "0 0 0px rgba(6, 182, 212, 0)",
  },
  animate: {
    boxShadow: [
      "0 0 20px rgba(6, 182, 212, 0.3)",
      "0 0 40px rgba(6, 182, 212, 0.6)",
      "0 0 20px rgba(6, 182, 212, 0.3)",
    ],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// Floating animation
export const floatVariants: Variants = {
  animate: {
    y: [0, -20, 0],
    transition: {
      duration: 6,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// Rotating animation
export const rotateVariants: Variants = {
  animate: {
    rotate: 360,
    transition: {
      duration: 20,
      repeat: Infinity,
      ease: "linear",
    },
  },
}

// Pulse animation
export const pulseVariants: Variants = {
  animate: {
    scale: [1, 1.05, 1],
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
}

// Shimmer effect
export const shimmerVariants: Variants = {
  initial: { backgroundPosition: "-200% center" },
  animate: {
    backgroundPosition: "200% center",
    transition: {
      duration: 2,
      repeat: Infinity,
      ease: "linear",
    },
  },
}

// Typewriter effect
export const typewriterVariants: Variants = {
  hidden: { width: 0 },
  visible: {
    width: "100%",
    transition: {
      duration: 2,
      ease: "linear",
    },
  },
}

// Bouncy entrance
export const bouncyVariants: Variants = {
  hidden: { opacity: 0, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 260,
      damping: 20,
    },
  },
}
