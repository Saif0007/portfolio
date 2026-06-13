"use client"

import { useEffect, useRef } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import emailjs from "@emailjs/browser"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/lib/hooks/usePortfolio"

const EASE = [0.16, 1, 0.3, 1] as const
const BIG_TEXT_LINES = ["Let's build", "something →"]

function MagneticButton({ children, onClick, type = "button", disabled = false }: {
  children: React.ReactNode
  onClick?: () => void
  type?: "button" | "submit"
  disabled?: boolean
}) {
  const mx = useMotionValue(0)
  const my = useMotionValue(0)
  const sx = useSpring(mx, { stiffness: 500, damping: 30 })
  const sy = useSpring(my, { stiffness: 500, damping: 30 })

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      style={{ x: sx, y: sy }}
      onMouseMove={e => {
        const r = e.currentTarget.getBoundingClientRect()
        mx.set((e.clientX - r.left - r.width / 2) * 0.35)
        my.set((e.clientY - r.top - r.height / 2) * 0.35)
      }}
      onMouseLeave={() => { mx.set(0); my.set(0) }}
      whileHover={{ scale: 1.04 }}
      whileTap={{ scale: 0.97 }}
      transition={{ type: "spring", stiffness: 400, damping: 28 }}
    >
      {children}
    </motion.button>
  )
}

function BigContactLink() {
  const letterRefs = useRef<(HTMLSpanElement | null)[]>([])

  const handleEnter = () => {
    letterRefs.current.forEach((ch, i) => {
      if (!ch) return
      setTimeout(() => {
        ch.style.color = "#FFB454"
        ch.style.webkitTextStrokeColor = "#FFB454"
        ch.style.transform = "translateY(-8px)"
      }, i * 22)
    })
  }
  const handleLeave = () => {
    letterRefs.current.forEach(ch => {
      if (!ch) return
      ch.style.color = ""
      ch.style.webkitTextStrokeColor = ""
      ch.style.transform = ""
    })
  }

  let letterIdx = 0
  return (
    <a
      className="big-contact-link"
      href="mailto:syfin008@gmail.com"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {BIG_TEXT_LINES.map((line, li) => (
        <span key={li} style={{ display: "block" }}>
          {line.split("").map((ch) => {
            const i = letterIdx++
            return (
              <span
                key={i}
                ref={el => { letterRefs.current[i] = el }}
                className="ch"
                style={{
                  display: "inline-block",
                  transition: `transform .4s ${i * 18}ms cubic-bezier(.16,1,.3,1), color .3s, -webkit-text-stroke-color .3s`,
                  whiteSpace: ch === " " ? "pre" : "normal",
                }}
              >
                {ch}
              </span>
            )
          })}
        </span>
      ))}
    </a>
  )
}

const infoVariants = {
  hidden: { opacity: 0, x: -24 },
  visible: (i: number) => ({
    opacity: 1, x: 0,
    transition: { duration: 0.6, ease: EASE, delay: i * 0.1 },
  }),
}

const formVariants = {
  hidden: { opacity: 0, x: 24 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.7, ease: EASE, delay: 0.15 } },
}

export const ContactSection = () => {
  const {
    formData, isSubmitting, submitStatus,
    setIsSubmitting, setSubmitStatus,
    handleInputChange, resetForm,
  } = useContactForm()

  useEffect(() => {
    emailjs.init("FsbBrJUsqiB8favTx")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")
    try {
      await emailjs.send("service_bnyprho", "template_5nptvo4", {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Saif Ur Rehman",
      })
      setSubmitStatus("success")
      resetForm()
    } catch {
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const inputStyle: React.CSSProperties = {
    width: "100%",
    padding: "12px 16px",
    background: "var(--background)",
    border: "1px solid var(--line)",
    borderRadius: 10,
    color: "var(--ink)",
    fontFamily: "var(--font-manrope), Manrope, sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color .3s",
    boxSizing: "border-box",
  }

  const contactInfo = [
    { label: "Email", value: "syfin008@gmail.com", href: "mailto:syfin008@gmail.com" },
    { label: "Phone", value: "+92 322 401 6585", href: "tel:+923224016585" },
    { label: "Location", value: "Lahore, Pakistan · Remote", href: null },
  ]

  return (
    <section
      id="contact"
      style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px) 60px", overflow: "hidden" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>

        <motion.div
          className="eyebrow"
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: EASE }}
        >
          Contact
        </motion.div>

        {/* Big link */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          style={{ marginTop: 16, marginBottom: 60 }}
        >
          <BigContactLink />
        </motion.div>

        {/* Grid */}
        <div className="contact-grid">
          {/* Left — info */}
          <div>
            {contactInfo.map((item, i) => (
              <motion.div
                key={item.label}
                custom={i}
                variants={infoVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{ marginBottom: 28 }}
              >
                <div style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".14em", textTransform: "uppercase", color: "#FFB454", marginBottom: 8 }}>
                  {item.label}
                </div>
                {item.href ? (
                  <motion.a
                    href={item.href}
                    whileHover={{ x: 4, color: "#FFB454" }}
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                    style={{ color: "var(--ink)", fontSize: 16, textDecoration: "none", display: "inline-block" }}
                  >
                    {item.value}
                  </motion.a>
                ) : (
                  <span style={{ color: "var(--ink)", fontSize: 16 }}>{item.value}</span>
                )}
              </motion.div>
            ))}

            <motion.div
              custom={3}
              variants={infoVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 10,
                padding: "12px 20px",
                border: "1px solid rgba(255,180,84,.25)",
                borderRadius: 100,
                background: "rgba(255,180,84,.05)",
                marginTop: 8,
              }}
            >
              <span style={{ width: 7, height: 7, borderRadius: "50%", background: "#FFB454", flexShrink: 0, animation: "ping-amber 1.8s cubic-bezier(0,0,.2,1) infinite" }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 11, letterSpacing: ".12em", textTransform: "uppercase", color: "#FFB454" }}>
                Available for new projects
              </span>
            </motion.div>
          </div>

          {/* Right — form */}
          <motion.div
            variants={formVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            style={{ background: "var(--surface)", border: "1px solid var(--line)", borderRadius: 18, padding: "32px 28px" }}
          >
            <h3 style={{ fontFamily: "var(--font-syne), Syne, sans-serif", fontWeight: 700, fontSize: 20, marginBottom: 24 }}>
              Send a message
            </h3>

            {submitStatus === "success" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: 20, padding: "12px 16px", background: "rgba(255,180,84,.08)", border: "1px solid rgba(255,180,84,.2)", borderRadius: 10, color: "#FFB454", fontSize: 14 }}
              >
                Message sent! I&apos;ll get back to you soon.
              </motion.div>
            )}
            {submitStatus === "error" && (
              <motion.div
                initial={{ opacity: 0, y: -8 }}
                animate={{ opacity: 1, y: 0 }}
                style={{ marginBottom: 20, padding: "12px 16px", background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 10, color: "#f87171", fontSize: 14 }}
              >
                Failed to send. Please email me directly.
              </motion.div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div className="form-row">
                {[
                  { name: "name", label: "Name", type: "text", placeholder: "Your name" },
                  { name: "email", label: "Email", type: "email", placeholder: "your@email.com" },
                ].map(field => (
                  <div key={field.name}>
                    <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>
                      {field.label}
                    </label>
                    <input
                      type={field.type}
                      name={field.name}
                      value={formData[field.name as keyof typeof formData]}
                      onChange={handleInputChange}
                      required
                      disabled={isSubmitting}
                      placeholder={field.placeholder}
                      style={inputStyle}
                      onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,180,84,.5)")}
                      onBlur={e => (e.currentTarget.style.borderColor = "var(--line)")}
                    />
                  </div>
                ))}
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} required
                  onChange={handleInputChange} disabled={isSubmitting}
                  placeholder="Project discussion" style={inputStyle}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,180,84,.5)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--line)")}
                />
              </div>

              <div>
                <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Message</label>
                <textarea
                  rows={4} name="message" value={formData.message} required
                  onChange={handleInputChange} disabled={isSubmitting}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => (e.currentTarget.style.borderColor = "rgba(255,180,84,.5)")}
                  onBlur={e => (e.currentTarget.style.borderColor = "var(--line)")}
                />
              </div>

              <MagneticButton type="submit" disabled={isSubmitting}>
                <span style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: 8,
                  padding: "14px 24px",
                  background: isSubmitting ? "rgba(255,180,84,.5)" : "#FFB454",
                  color: "#0A0C14",
                  fontFamily: "var(--font-jetbrains), monospace",
                  fontSize: 12,
                  letterSpacing: ".1em",
                  textTransform: "uppercase",
                  border: "none",
                  borderRadius: 10,
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  fontWeight: 700,
                  pointerEvents: "none",
                }}>
                  {isSubmitting ? (
                    <>
                      <span style={{ width: 14, height: 14, border: "2px solid rgba(10,12,20,.3)", borderTopColor: "#0A0C14", borderRadius: "50%", animation: "spin .7s linear infinite", display: "inline-block" }} />
                      Sending...
                    </>
                  ) : (
                    <>Send Message <ArrowRight size={14} /></>
                  )}
                </span>
              </MagneticButton>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
