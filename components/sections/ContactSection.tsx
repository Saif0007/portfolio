import { Mail, Phone, Linkedin, ArrowRight } from "lucide-react"
import emailjs from "@emailjs/browser"
import { useEffect } from "react"
import { useContactForm } from "@/lib/hooks/usePortfolio"

interface ContactSectionProps {
  isVisible: (id: string) => boolean
}

export const ContactSection = ({ isVisible }: ContactSectionProps) => {
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
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactItems = [
    {
      icon: Mail,
      label: "Email",
      value: "syfin008@gmail.com",
      href: "mailto:syfin008@gmail.com",
      accent: "emerald",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+92 322 401 6585",
      href: "tel:+923224016585",
      accent: "teal",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      value: "Connect with me",
      href: "https://linkedin.com/in/saif-ur-rehman-404650218",
      accent: "sky",
    },
  ]

  const inputClass =
    "w-full px-4 py-3 bg-background border border-border rounded-xl focus:outline-none focus:ring-1 focus:ring-emerald-500/50 focus:border-emerald-500/50 transition-all text-sm text-foreground placeholder:text-muted-foreground/50"

  return (
    <section id="contact" className="py-16 sm:py-24">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <div
          id="contact-header"
          data-animate="contact-header"
          className={`mb-12 sm:mb-16 transition-all duration-700 ${
            isVisible("contact-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase">Get In Touch</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground mb-3">
            Let's <span className="gradient-text">Connect</span>
          </h2>
          <p className="text-muted-foreground text-base max-w-xl">
            Looking to build a production AI voice agent, a multi-tenant SaaS platform, or an intelligent system integrated with your existing tools? Let's talk.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">

          {/* Left — contact info */}
          <div
            id="contact-content"
            data-animate="contact-content"
            className={`space-y-4 transition-all duration-700 delay-100 ${
              isVisible("contact-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            {contactItems.map((item, index) => (
              <a
                key={index}
                href={item.href}
                target={item.label === "LinkedIn" ? "_blank" : undefined}
                rel={item.label === "LinkedIn" ? "noopener noreferrer" : undefined}
                className="flex items-center gap-4 p-5 rounded-xl border border-border bg-card hover:border-emerald-500/30 hover:shadow-[0_0_20px_rgba(16,185,129,0.06)] transition-all duration-300 group"
              >
                <div className="p-2.5 rounded-xl bg-emerald-500/10 border border-emerald-500/20 shrink-0 group-hover:bg-emerald-500/15 transition-colors">
                  <item.icon className="text-emerald-400" size={18} />
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-xs text-muted-foreground font-medium uppercase tracking-wide mb-0.5">{item.label}</div>
                  <div className="text-foreground text-sm font-semibold truncate">{item.value}</div>
                </div>
                <ArrowRight size={14} className="text-muted-foreground/50 group-hover:text-emerald-400 group-hover:translate-x-1 transition-all shrink-0" />
              </a>
            ))}

            {/* Availability note */}
            <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/5 p-5 mt-2">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span className="text-emerald-400 text-xs font-semibold uppercase tracking-wide">Available Now</span>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Open to freelance projects and full-time opportunities. Based in Pakistan, working with US-based clients.
              </p>
            </div>
          </div>

          {/* Right — form */}
          <div
            id="contact-form"
            data-animate="contact-form"
            className={`rounded-2xl border border-border bg-card p-6 sm:p-8 transition-all duration-700 delay-200 ${
              isVisible("contact-form") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-xl font-bold mb-6 text-foreground">Send a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-5 p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-xl text-emerald-400 text-sm font-medium">
                Message sent! I'll get back to you soon.
              </div>
            )}
            {submitStatus === "error" && (
              <div className="mb-5 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm font-medium">
                Failed to send. Please try again or email me directly.
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Name</label>
                  <input
                    type="text" name="name" value={formData.name}
                    onChange={handleInputChange} required disabled={isSubmitting}
                    className={inputClass} placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Email</label>
                  <input
                    type="email" name="email" value={formData.email}
                    onChange={handleInputChange} required disabled={isSubmitting}
                    className={inputClass} placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Subject</label>
                <input
                  type="text" name="subject" value={formData.subject}
                  onChange={handleInputChange} required disabled={isSubmitting}
                  className={inputClass} placeholder="Project discussion"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-muted-foreground uppercase tracking-wide mb-2">Message</label>
                <textarea
                  rows={4} name="message" value={formData.message}
                  onChange={handleInputChange} required disabled={isSubmitting}
                  className={inputClass + " resize-none"}
                  placeholder="Tell me about your project..."
                />
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full flex items-center justify-center gap-2 px-6 py-3.5 bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 disabled:cursor-not-allowed text-white font-bold text-sm rounded-xl transition-colors"
              >
                {isSubmitting ? (
                  <>
                    <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    Send Message
                    <ArrowRight size={15} />
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
