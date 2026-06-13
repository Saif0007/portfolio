"use client"

import { useState, useEffect, useRef } from "react"

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
  const [done, setDone] = useState(false)
  const lineIdx = useRef(0)

  useEffect(() => {
    const tick = () => {
      const i = lineIdx.current
      if (i < bootLines.length) {
        const [html, target] = bootLines[i]
        setLines(prev => [...prev, html as string])
        setBarWidth(target as number)
        // animate pct
        let shown = pct
        const step = () => {
          shown++
          setPct(shown)
          if (shown < (target as number)) requestAnimationFrame(step)
        }
        requestAnimationFrame(step)
        lineIdx.current++
        setTimeout(tick, 300)
      } else {
        setTimeout(() => {
          setDone(true)
          setTimeout(onDone, 900)
        }, 350)
      }
    }
    tick()
  }, []) // eslint-disable-line

  return (
    <div className={`preloader${done ? " done" : ""}`}>
      <div
        className="preloader-boot"
        dangerouslySetInnerHTML={{ __html: lines.join("<br/>") }}
      />
      <div className="preloader-bar">
        <i style={{ width: barWidth + "%" }} />
      </div>
      <div className="preloader-pct">{pct}%</div>
    </div>
  )
}
