import { Mail, Phone, Linkedin } from "lucide-react"
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

  // Initialize EmailJS
  useEffect(() => {
    emailjs.init("FsbBrJUsqiB8favTx")
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus("")

    try {
      const templateParams = {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
        to_name: "Saif Ur Rehman",
      }

      await emailjs.send("service_bnyprho", "template_5nptvo4", templateParams)

      setSubmitStatus("success")
      resetForm()
    } catch (error) {
      console.error("EmailJS error:", error)
      setSubmitStatus("error")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div
          data-animate="contact-header"
          id="contact-header"
          className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
            isVisible("contact-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Let's Connect</h2>
          <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 sm:gap-12">
          <div
            data-animate="contact-content"
            id="contact-content"
            className={`space-y-6 transition-all duration-1000 delay-200 ${
              isVisible("contact-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div>
              <h3 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Get In Touch</h3>
              <p className="text-muted-foreground leading-relaxed text-lg mb-6 sm:mb-8">
                Looking for an AI Engineer to build GPT-powered chatbots, RAG systems, or intelligent automation? I'm
                available for freelance projects and full-time opportunities. Let's discuss how AI can transform your
                business!
              </p>
            </div>

            <div className="space-y-3 sm:space-y-4">
              {[
                {
                  icon: Mail,
                  label: "Email",
                  value: "syfin008@gmail.com",
                  href: "mailto:syfin008@gmail.com",
                  color: "bg-gradient-to-r from-red-500/10 to-pink-500/10 text-red-500 border-red-500/20",
                },
                {
                  icon: Phone,
                  label: "Phone",
                  value: "+92 322 401 6585",
                  href: "tel:+923224016585",
                  color: "bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-500 border-emerald-500/20",
                },
                {
                  icon: Linkedin,
                  label: "LinkedIn",
                  value: "Connect with me",
                  href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                  color: "bg-gradient-to-r from-blue-500/10 to-cyan-500/10 text-blue-500 border-blue-500/20",
                },
              ].map((contact, index) => (
                <a
                  key={index}
                  href={contact.href}
                  className={`flex items-center gap-4 sm:gap-6 p-5 sm:p-6 glass rounded-xl hover:bg-background/5 transition-all duration-300 group border ${contact.color.split(" ").slice(3).join(" ")}`}
                >
                  <div
                    className={`p-3 rounded-xl ${contact.color.split(" ").slice(0, 3).join(" ")} group-hover:scale-110 transition-transform border`}
                  >
                    <contact.icon size={20} />
                  </div>
                  <div>
                    <div className="text-lg font-bold">{contact.label}</div>
                    <div className="text-muted-foreground text-sm">{contact.value}</div>
                  </div>
                </a>
              ))}
            </div>
          </div>

          <div
            data-animate="contact-form"
            id="contact-form"
            className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-400 ${
              isVisible("contact-form") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6">Send a Message</h3>

            {submitStatus === "success" && (
              <div className="mb-4 p-4 bg-green-500/10 border border-green-500/20 rounded-xl text-green-600 dark:text-green-400">
                <p className="font-medium">Message sent successfully! I'll get back to you soon.</p>
              </div>
            )}

            {submitStatus === "error" && (
              <div className="mb-4 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-600 dark:text-red-400">
                <p className="font-medium">Failed to send message. Please try again or contact me directly.</p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
              <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Your name"
                    disabled={isSubmitting}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="your@email.com"
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Subject</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                  placeholder="Project discussion"
                  disabled={isSubmitting}
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                  placeholder="Tell me about your project..."
                  disabled={isSubmitting}
                ></textarea>
              </div>
              <button
                type="submit"
                disabled={isSubmitting}
                className={`w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none flex items-center justify-center gap-2`}
              >
                {isSubmitting ? (
                  <>
                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                    Sending...
                  </>
                ) : (
                  "Send Message"
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
