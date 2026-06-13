"use client"

import { useState, useEffect, useRef } from "react"
import { motion } from "framer-motion"

const bootLines = [
  ['> initializing portfolio', 24],
  ['> loading modules <span style="color:#FFB454">✓</span>', 51],
  ['> compiling experience <span style="color:#FFB454">✓</span>', 78],
  ['> optimizing pixels <span style="color:#FFB454">✓</span>', 93],
  ['> ready. <span style="color:#FFB454">deploying…</span>', 100],
] as const

export const Preloader = ({ onDone }: { onDone: () => void }) => {
  const [lines, setLines] = useState<string[]>([])
  const [barWidth, setBarWidth] = useState(0)
  const [pct, setPct] = useState(0)
  const lineIdx = useRef(0)
  const pctRef = useRef(0)

  useEffect(() => {
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches

    const animatePct = (target: number) => {
      const step = () => {
        if (pctRef.current < target) {
          pctRef.current++
          setPct(pctRef.current)
          requestAnimationFrame(step)
        }
      }
      step()
    }

    const tick = () => {
      const i = lineIdx.current
      if (i < bootLines.length) {
        const [html, target] = bootLines[i]
        setLines(prev => [...prev, html as string])
        setBarWidth(target as number)
        animatePct(target as number)
        lineIdx.current++
        setTimeout(tick, reduced ? 0 : 290)
      } else {
        setTimeout(onDone, reduced ? 0 : 420)
      }
    }
    tick()
  }, [onDone])

  return (
    <motion.div
      className="preloader"
      exit={{ y: "-100%", transition: { duration: 0.65, ease: [0.76, 0, 0.24, 1] } }}
    >
      <div
        className="preloader-boot"
        dangerouslySetInnerHTML={{ __html: lines.join("<br/>") }}
      />
      <div className="preloader-bar">
        <i style={{ width: barWidth + "%" }} />
      </div>
      <div className="preloader-pct">{pct}%</div>
    </motion.div>
  )
}
