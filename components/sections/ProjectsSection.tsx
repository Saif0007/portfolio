"use client"

import { useRef } from "react"
import {
  motion,
  useMotionValue,
  useSpring,
  useTransform,
} from "framer-motion"
import Link from "next/link"
import { projects } from "@/data/portfolio-data"

const EASE = [0.16, 1, 0.3, 1] as const

const codeSnippets: Record<string, string> = {
  "pioneer-voice-ai": `POST /api/voice/outbound
{ agent: "Penny",
  calls: 50,
  salesforce: "synced ✓" }`,
  "auralis-labs-voice-ai": `ws.on("voice", deepgram)
// tenants: 12
// latency: 180ms
// calendar: synced ✓`,
  "trade-gekko": `LSTM.predict(candles)
// accuracy: 78.4%
// trades: live
{ signal: "BUY" }`,
  "true-mortgages-ai-platform": `POST /api/mortgage/query
{ context: rag_docs,
  model: "claude-3",
  latency: "320ms" }`,
  "pioneer-commissions-portal": `SELECT earnings
FROM salesforce_sync
WHERE month = current
-- 12 commission types`,
  "contact-lens-rag": `GET /api/lens/recommend
{ sku: "ACUVUE",
  match: 94%,
  source: "RAG" }`,
  "pioneer-license-verification-agent": `playwright.scrape(
  state_board_sites, 48
)
// verified: ✓ live`,
  "prd-generator": `openai.generate(prd)
→ jira.create_ticket()
→ figma.export()
// shipped: ✓`,
  "pioneer-submissions-doc-automation": `salesforce.query(contacts)
→ docx.render(template)
→ pdf.export()
// 100s of docs/run`,
}

function TiltCard({ project, index }: { project: ReturnType<typeof projects.filter>[number]; index: number }) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 300, damping: 28 })
  const sy = useSpring(my, { stiffness: 300, damping: 28 })
  const rotateX = useTransform(sy, [-0.5, 0.5], [8, -8])
  const rotateY = useTransform(sx, [-0.5, 0.5], [-8, 8])
  const glowX = useTransform(mx, [-0.5, 0.5], [0, 100])
  const glowY = useTransform(my, [-0.5, 0.5], [0, 100])

  const code = codeSnippets[project.slug] || `// ${project.title}\n// live ✓`

  return (
    <motion.div
      variants={{
        hidden: { opacity: 0, y: 50 },
        visible: {
          opacity: 1, y: 0,
          transition: { duration: 0.7, ease: EASE, delay: index * 0.09 },
        },
      }}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left) / r.width - 0.5)
        my.set((e.clientY - r.top) / r.height - 0.5)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
    >
      <Link
        href={`/projects/${project.slug}`}
        className="project-card"
        style={{ textDecoration: "none", color: "inherit", display: "block", position: "relative", overflow: "hidden" }}
      >
        {/* Mouse-follow glow */}
        <motion.div
          style={{
            position: "absolute",
            width: 200,
            height: 200,
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(255,180,84,.12) 0%, transparent 70%)",
            pointerEvents: "none",
            left: glowX.get() + "%",
            top: glowY.get() + "%",
            transform: "translate(-50%,-50%)",
            opacity: 0,
          }}
          whileHover={{ opacity: 1 }}
        />

        {/* Code thumbnail */}
        <div style={{ borderRadius: 10, background: "#0D1017", border: "1px solid rgba(232,230,223,0.07)", padding: "18px 20px", marginBottom: 22, minHeight: 92, overflow: "hidden" }}>
          <pre style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, lineHeight: 1.75, color: "#8B93C9", margin: 0, whiteSpace: "pre" }}>
            {code}
          </pre>
        </div>

        {/* Title row */}
        <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: 19, marginBottom: 8, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          {project.title}
          <motion.span
            initial={{ x: -6, opacity: 0 }}
            whileHover={{ x: 0, opacity: 1 }}
            style={{ fontSize: 18, color: "var(--ink-dim)", flexShrink: 0, marginLeft: 8 }}
          >
            ↗
          </motion.span>
        </h3>

        <p style={{ color: "var(--ink-dim)", fontSize: 14, lineHeight: 1.65, marginBottom: 18 }}>
          {project.description.length > 110 ? project.description.slice(0, 107) + "…" : project.description}
        </p>

        {/* Tags */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: 7 }}>
          {project.tech.slice(0, 4).map(tag => (
            <span key={tag} style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", padding: "4px 10px", borderRadius: 100, border: "1px solid var(--line)", color: "var(--ink-dim)" }}>
              {tag}
            </span>
          ))}
          {project.demo && project.demo !== "#" && (
            <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".08em", padding: "4px 10px", borderRadius: 100, border: "1px solid rgba(255,180,84,.35)", color: "#FFB454" }}>
              Live ✓
            </span>
          )}
        </div>
      </Link>
    </motion.div>
  )
}

export const ProjectsSection = () => {
  const featured = projects.filter(p => p.featured).slice(0, 8)

  return (
    <section id="projects" style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px)" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Selected Work
        </motion.div>

        <div style={{ overflow: "hidden" }}>
          <motion.h2
            initial={{ y: "105%", opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: EASE, delay: 0.05 }}
            style={{
              fontFamily: "var(--font-syne), Syne, sans-serif",
              fontWeight: 800,
              fontSize: "clamp(36px,6vw,72px)",
              lineHeight: 1.05,
              letterSpacing: "-.02em",
              marginBottom: 12,
              marginTop: 16,
            }}
          >
            Things I&apos;ve shipped that{" "}
            <span style={{ color: "#FFB454" }}>people actually use.</span>
          </motion.h2>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          style={{ color: "var(--ink-dim)", fontSize: 16, marginBottom: 60 }}
        >
          Production systems — live in the real world, not portfolio demos.
        </motion.p>

        <motion.div
          className="work-grid"
          variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.09 } } }}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-60px" }}
        >
          {featured.map((project, i) => (
            <TiltCard key={project.slug} project={project} index={i} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}
