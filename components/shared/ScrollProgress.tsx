"use client"

import { useEffect, useState } from "react"

export const ScrollProgress = () => {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight
      setWidth(h > 0 ? (window.scrollY / h) * 100 : 0)
    }
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return <div className="scroll-progress" style={{ width: width + "%" }} />
}
