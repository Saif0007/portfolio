"use client"

import { useRef, useEffect } from "react"
import { useInView } from "framer-motion"
import emailjs from "@emailjs/browser"
import { ArrowRight } from "lucide-react"
import { useContactForm } from "@/lib/hooks/usePortfolio"

const BIG_TEXT = "Let's build\nsomething →"

function BigLink() {
  return (
    <a
      className="big-contact-link"
      href="mailto:syfin008@gmail.com"
      style={{ marginBottom: 16 }}
      onMouseEnter={e => {
        const el = e.currentTarget as HTMLElement
        el.querySelectorAll<HTMLElement>(".ch").forEach((ch, i) => {
          setTimeout(() => {
            ch.style.color = "#FFB454"
            ch.style.webkitTextStrokeColor = "#FFB454"
            ch.style.transform = "translateY(-6px)"
          }, i * 30)
        })
      }}
      onMouseLeave={e => {
        const el = e.currentTarget as HTMLElement
        el.querySelectorAll<HTMLElement>(".ch").forEach(ch => {
          ch.style.color = ""
          ch.style.webkitTextStrokeColor = ""
          ch.style.transform = ""
        })
      }}
    >
      {BIG_TEXT.split("").map((ch, i) =>
        ch === "\n" ? (
          <br key={i} />
        ) : (
          <span key={i} className="ch" style={{ transition: `transform .35s ${i * 18}ms cubic-bezier(.16,1,.3,1), color .35s, -webkit-text-stroke-color .35s` }}>
            {ch === " " ? " " : ch}
          </span>
        )
      )}
    </a>
  )
}

export const ContactSection = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.15 })

  const {
    formData,
    isSubmitting,
    submitStatus,
    setIsSubmitting,
    setSubmitStatus,
    handleInputChange,
    resetForm,
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
    background: "var(--bg)",
    border: "1px solid var(--line)",
    borderRadius: 10,
    color: "var(--ink)",
    fontFamily: "var(--font-manrope), Manrope, sans-serif",
    fontSize: 14,
    outline: "none",
    transition: "border-color .3s",
    boxSizing: "border-box",
  }

  return (
    <section
      id="contact"
      ref={ref}
      style={{ padding: "clamp(80px,10vw,140px) clamp(20px,5vw,64px) 60px" }}
    >
      <div style={{ maxWidth: 1100, margin: "0 auto" }}>
        <div
          className="eyebrow"
          style={{ opacity: isInView ? 1 : 0, transform: isInView ? "none" : "translateY(10px)", transition: "opacity .6s, transform .6s" }}
        >
          Contact
        </div>

        {/* Big outlined link */}
        <div
          style={{
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "opacity .7s .1s, transform .7s .1s",
            marginTop: 16,
            marginBottom: 56,
          }}
        >
          <BigLink />
        </div>

        {/* Form + info row */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 48,
            opacity: isInView ? 1 : 0,
            transform: isInView ? "none" : "translateY(20px)",
            transition: "opacity .7s .25s, transform .7s .25s",
          }}
          className="contact-grid"
        >
          {/* Left — info */}
          <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
            <div>
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
                Email
              </div>
              <a
                href="mailto:syfin008@gmail.com"
                style={{ color: "var(--ink)", fontSize: 16, textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FFB454")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
              >
                syfin008@gmail.com
              </a>
            </div>
            <div>
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
                Phone
              </div>
              <a
                href="tel:+923224016585"
                style={{ color: "var(--ink)", fontSize: 16, textDecoration: "none", transition: "color .3s" }}
                onMouseEnter={e => ((e.currentTarget as HTMLElement).style.color = "#FFB454")}
                onMouseLeave={e => ((e.currentTarget as HTMLElement).style.color = "var(--ink)")}
              >
                +92 322 401 6585
              </a>
            </div>
            <div>
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
                Location
              </div>
              <span style={{ color: "var(--ink)", fontSize: 16 }}>Lahore, Pakistan · Remote</span>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: 8,
                padding: "14px 20px",
                border: "1px solid rgba(255,180,84,.25)",
                borderRadius: 12,
                background: "rgba(255,180,84,.04)",
                marginTop: 8,
              }}
            >
              <span style={{ width: 8, height: 8, borderRadius: "50%", background: "#FFB454", flexShrink: 0 }} />
              <span style={{ fontFamily: "var(--font-jetbrains), monospace", fontSize: 12, letterSpacing: ".1em", textTransform: "uppercase", color: "#FFB454" }}>
                Available for new projects
              </span>
            </div>
          </div>

          {/* Right — form */}
          <div
            style={{
              background: "var(--surface)",
              border: "1px solid var(--line)",
              borderRadius: 18,
              padding: "32px 28px",
            }}
          >
            <h3
              style={{
                fontFamily: "var(--font-syne), Syne, sans-serif",
                fontWeight: 700,
                fontSize: 20,
                marginBottom: 24,
              }}
            >
              Send a message
            </h3>

            {submitStatus === "success" && (
              <div style={{ marginBottom: 20, padding: "12px 16px", background: "rgba(255,180,84,.08)", border: "1px solid rgba(255,180,84,.2)", borderRadius: 10, color: "#FFB454", fontSize: 14 }}>
                Message sent! I&apos;ll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div style={{ marginBottom: 20, padding: "12px 16px", background: "rgba(239,68,68,.06)", border: "1px solid rgba(239,68,68,.2)", borderRadius: 10, color: "#f87171", fontSize: 14 }}>
                Failed to send. Please email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 14 }} className="form-row">
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Name</label>
                  <input
                    type="text" name="name" value={formData.name} required
                    onChange={handleInputChange} disabled={isSubmitting}
                    placeholder="Your name" style={inputStyle}
                    onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)")}
                    onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--line)")}
                  />
                </div>
                <div>
                  <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Email</label>
                  <input
                    type="email" name="email" value={formData.email} required
                    onChange={handleInputChange} disabled={isSubmitting}
                    placeholder="your@email.com" style={inputStyle}
                    onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)")}
                    onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--line)")}
                  />
                </div>
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Subject</label>
                <input
                  type="text" name="subject" value={formData.subject} required
                  onChange={handleInputChange} disabled={isSubmitting}
                  placeholder="Project discussion" style={inputStyle}
                  onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)")}
                  onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--line)")}
                />
              </div>
              <div>
                <label style={{ display: "block", fontFamily: "var(--font-jetbrains), monospace", fontSize: 10, letterSpacing: ".14em", textTransform: "uppercase", color: "var(--ink-dim)", marginBottom: 8 }}>Message</label>
                <textarea
                  rows={4} name="message" value={formData.message} required
                  onChange={handleInputChange} disabled={isSubmitting}
                  placeholder="Tell me about your project..."
                  style={{ ...inputStyle, resize: "none" }}
                  onFocus={e => ((e.currentTarget as HTMLElement).style.borderColor = "rgba(255,180,84,.5)")}
                  onBlur={e => ((e.currentTarget as HTMLElement).style.borderColor = "var(--line)")}
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                style={{
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
                  transition: "transform .3s, box-shadow .3s",
                  fontWeight: 700,
                }}
                onMouseEnter={e => {
                  if (!isSubmitting) {
                    ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
                    ;(e.currentTarget as HTMLElement).style.boxShadow = "0 8px 30px rgba(255,180,84,.3)"
                  }
                }}
                onMouseLeave={e => {
                  ;(e.currentTarget as HTMLElement).style.transform = ""
                  ;(e.currentTarget as HTMLElement).style.boxShadow = ""
                }}
              >
                {isSubmitting ? (
                  <>
                    <span style={{ width: 14, height: 14, border: "2px solid rgba(10,12,20,.3)", borderTopColor: "#0A0C14", borderRadius: "50%", animation: "spin .7s linear infinite" }} />
                    Sending...
                  </>
                ) : (
                  <>Send Message <ArrowRight size={14} /></>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
