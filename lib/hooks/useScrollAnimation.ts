import { useEffect, useState } from "react"
import { useScroll, useTransform, MotionValue } from "framer-motion"

export const useScrollAnimation = () => {
  const { scrollY, scrollYProgress } = useScroll()
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const updateScroll = () => {
      setScrollPosition(window.scrollY)
    }

    window.addEventListener("scroll", updateScroll)
    return () => window.removeEventListener("scroll", updateScroll)
  }, [])

  return { scrollY, scrollYProgress, scrollPosition }
}

export const useParallax = (scrollY: MotionValue<number>, distance: number) => {
  return useTransform(scrollY, [0, 1000], [0, distance])
}
