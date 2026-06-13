"use client"

import { useEffect, useRef } from "react"

export const Cursor = () => {
  const ringRef = useRef<HTMLDivElement>(null)
  const dotRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const ring = ringRef.current
    const dot = dotRef.current
    if (!ring || !dot) return

    let cx = window.innerWidth / 2, cy = window.innerHeight / 2
    let tx = cx, ty = cy
    let animId: number

    const onMove = (e: MouseEvent) => {
      tx = e.clientX
      ty = e.clientY
      dot.style.left = tx + "px"
      dot.style.top = ty + "px"
    }
    window.addEventListener("mousemove", onMove)

    const loop = () => {
      cx += (tx - cx) * 0.16
      cy += (ty - cy) * 0.16
      ring.style.left = cx + "px"
      ring.style.top = cy + "px"
      animId = requestAnimationFrame(loop)
    }
    loop()

    const targets = document.querySelectorAll("a, button, .project-card, .skill-row-item, .stat-card")
    const onEnter = () => ring.classList.add("hot")
    const onLeave = () => ring.classList.remove("hot")
    targets.forEach(el => {
      el.addEventListener("mouseenter", onEnter)
      el.addEventListener("mouseleave", onLeave)
    })

    return () => {
      window.removeEventListener("mousemove", onMove)
      cancelAnimationFrame(animId)
    }
  }, [])

  return (
    <>
      <div ref={ringRef} className="cursor-ring hidden lg:block" />
      <div ref={dotRef} className="cursor-dot hidden lg:block" />
    </>
  )
}
