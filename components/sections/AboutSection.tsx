"use client"

import { useRef, useEffect, useState } from "react"
import { useInView } from "framer-motion"

const skillRows = [
  { name: "Frontend", meta: "React · Next.js · TypeScript · Tailwind" },
  { name: "Backend", meta: "Python · FastAPI · Django · Node" },
  { name: "AI / ML", meta: "LangChain · OpenAI · RAG · Voice Agents" },
  { name: "Infra", meta: "AWS · Docker · PostgreSQL · Redis" },
  { name: "Integrations", meta: "Salesforce · Twilio · Stripe · Retell AI" },
]

const stats = [
  { target: 30, label: "Projects shipped", suffix: "+" },
  { target: 10, label: "Industries served", suffix: "+" },
  { target: 100, label: "Client satisfaction", suffix: "%" },
]

function Counter({ target, suffix, active }: { target: number; suffix: string; active: boolean }) {
  const [count, setCount] = useState(0)
  useEffect(() => {
    if (!active) return
    let current = 0
    const duration = 1400
    const steps = target
    const interval = Math.max(10, Math.floor(duration / steps))
    const timer = setInterval(() => {
      current++
      setCount(current)
      if (current >= target) clearInterval(timer)
    }, interval)
    return () => clearInterval(timer)
  }, [active, target])
  return <>{count}{suffix}</>
}

export const AboutSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  return (
    <section
      id="about"
      ref={ref}
      style={{
        background: "var(--surface)",
        borderTop: "1px solid var(--line)",
        borderBottom: "1px solid var(--line)",
        padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)",
      }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="eyebrow"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(10px)", transition: "opacity .6s, transform .6s" }}
        >
          About
        </div>

        <h2
          style={{
            fontFamily: "var(--font-syne), Syne, sans-serif",
            fontWeight: 800,
            fontSize: "clamp(36px,6vw,72px)",
            lineHeight: 1.05,
            letterSpacing: "-.02em",
            marginBottom: 64,
            marginTop: 16,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "opacity .7s .1s, transform .7s .1s",
          }}
        >
          Engineering with <span style={{ color: "#FFB454" }}>taste.</span>
        </h2>

        <div className="about-grid">
          {/* Left — bio + stats */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(24px)",
              transition: "opacity .7s .2s, transform .7s .2s",
            }}
          >
            <p
              style={{
                fontSize: "clamp(17px,2.2vw,22px)",
                lineHeight: 1.6,
                color: "var(--ink)",
                marginBottom: 40,
              }}
            >
              I work across the whole stack — from{" "}
              <span style={{ color: "#FFB454" }}>database schema</span> to the{" "}
              <span style={{ color: "#FFB454" }}>last pixel</span>. I build production AI systems,
              voice agents, multi-tenant SaaS platforms, and full-stack applications — end-to-end,
              shipped and live.
            </p>

            {/* Stat counters */}
            <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 16 }}>
              {stats.map((s, i) => (
                <div
                  key={i}
                  style={{
                    border: "1px solid var(--line)",
                    borderRadius: 14,
                    padding: "20px 18px",
                    background: "var(--bg)",
                    transition: "transform .35s, border-color .35s",
                    cursor: "default",
                  }}
                  onMouseEnter={e => {
                    ;(e.currentTarget as HTMLElement).style.transform = "translateY(-5px)"
                    ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.35)"
                  }}
                  onMouseLeave={e => {
                    ;(e.currentTarget as HTMLElement).style.transform = ""
                    ;(e.currentTarget as HTMLElement).style.borderColor = "var(--line)"
                  }}
                >
                  <div
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 800,
                      fontSize: "clamp(28px,3.4vw,42px)",
                      color: "#FFB454",
                      lineHeight: 1,
                    }}
                  >
                    <Counter target={s.target} suffix={s.suffix} active={isInView} />
                  </div>
                  <div
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 11,
                      letterSpacing: ".14em",
                      textTransform: "uppercase",
                      color: "var(--ink-dim)",
                      marginTop: 6,
                    }}
                  >
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skill rows + education */}
          <div
            style={{
              opacity: isInView ? 1 : 0,
              transform: isInView ? "none" : "translateY(24px)",
              transition: "opacity .7s .35s, transform .7s .35s",
            }}
          >
            <div>
              {skillRows.map((row, i) => (
                <div key={i} className="skill-row-item">
                  <span
                    style={{
                      fontFamily: "var(--font-syne), Syne, sans-serif",
                      fontWeight: 700,
                      fontSize: 20,
                    }}
                  >
                    {row.name}
                  </span>
                  <span
                    style={{
                      fontFamily: "var(--font-jetbrains), monospace",
                      fontSize: 12,
                      color: "var(--ink-dim)",
                      letterSpacing: ".08em",
                      textAlign: "right",
                    }}
                  >
                    {row.meta}
                  </span>
                </div>
              ))}
            </div>

            <div
              style={{
                marginTop: 36,
                padding: 24,
                border: "1px solid var(--line)",
                borderRadius: 14,
                background: "var(--bg)",
              }}
            >
              <div
                style={{
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 11,
                  letterSpacing: ".14em",
                  textTransform: "uppercase",
                  color: "#FFB454",
                  marginBottom: 12,
                }}
              >
                Education
              </div>
              <div
                style={{
                  fontFamily: "var(--font-syne), Syne, sans-serif",
                  fontWeight: 700,
                  fontSize: 18,
                }}
              >
                Bachelor of Computer Science
              </div>
              <div style={{ color: "var(--cool)", fontSize: 14, marginTop: 4 }}>FAST NUCES, Lahore</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
