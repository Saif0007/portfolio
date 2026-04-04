"use client"

import { Award, Mic, LayoutDashboard, BrainCircuit } from "lucide-react"
import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { containerVariants, scaleVariants, fadeInVariants } from "@/lib/animations/variants"

interface AboutSectionProps {
  isVisible: (id: string) => boolean
}

export const AboutSection = ({ isVisible }: AboutSectionProps) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, amount: 0.2 })

  const stats = [
    { number: "3+", label: "Years Experience", color: "text-emerald-400", border: "border-emerald-500/20", bg: "bg-emerald-500/5" },
    { number: "25+", label: "Projects Delivered", color: "text-amber-400", border: "border-amber-500/20", bg: "bg-amber-500/5" },
    { number: "3", label: "Live Voice Agents", color: "text-purple-400", border: "border-purple-500/20", bg: "bg-purple-500/5" },
    { number: "5+", label: "Industries Served", color: "text-teal-400", border: "border-teal-500/20", bg: "bg-teal-500/5" },
  ]

  const specializations = [
    {
      icon: Mic,
      title: "AI Voice Agents",
      description: "Production inbound & outbound voice agents with Twilio, Retell AI, Deepgram, and ElevenLabs — live in healthcare recruitment and B2B SaaS.",
      color: "text-emerald-400",
      bg: "bg-emerald-500/5 border-emerald-500/15",
    },
    {
      icon: LayoutDashboard,
      title: "Multi-Tenant SaaS",
      description: "White-label B2B platforms with role-based access, tenant isolation, Stripe billing, and full admin dashboards.",
      color: "text-purple-400",
      bg: "bg-purple-500/5 border-purple-500/15",
    },
    {
      icon: BrainCircuit,
      title: "AI & ML Systems",
      description: "RAG pipelines, LSTM trading models, GPT-powered apps, and enterprise integrations with Salesforce, Google Calendar, and more.",
      color: "text-amber-400",
      bg: "bg-amber-500/5 border-amber-500/15",
    },
  ]

  return (
    <section id="about" className="py-16 sm:py-24 relative" ref={ref}>
      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Section header */}
        <motion.div
          className="mb-12 sm:mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="w-8 h-px bg-emerald-500" />
            <span className="text-emerald-400 text-xs font-mono tracking-widest uppercase">Who I Am</span>
          </div>
          <h2 className="text-4xl sm:text-5xl font-black text-foreground">
            About <span className="gradient-text">Me</span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-10 sm:gap-16 items-start">

          {/* Left — Bio + Stats */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              As a <span className="text-emerald-400 font-semibold">Full Stack AI Engineer</span>, I build production AI systems that are live and actively used — not demos. That includes{" "}
              <span className="text-purple-400 font-semibold">AI voice agents</span> handling real inbound and outbound calls, multi-tenant SaaS platforms with white-label dashboards, RAG-based knowledge systems, and enterprise integrations with Salesforce, Twilio, Google Calendar, and more.
            </p>
            <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
              I bring{" "}
              <span className="text-amber-400 font-semibold">end-to-end ownership</span> — from architecture and backend APIs to dashboards and deployment on AWS. I've shipped across Healthcare Recruitment, FinTech, Real Estate, E-commerce, and Optometry, working directly with US-based clients and founders.
            </p>

            {/* Stats */}
            <motion.div
              className="grid grid-cols-2 gap-3 pt-4"
              variants={containerVariants}
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
            >
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  className={`p-4 rounded-xl border ${stat.border} ${stat.bg}`}
                  variants={scaleVariants}
                  whileHover={{ scale: 1.04 }}
                >
                  <div className={`text-3xl font-black ${stat.color} mb-1`}>{stat.number}</div>
                  <div className="text-muted-foreground text-xs font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>

          {/* Right — Education + Specializations */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            {/* Education card */}
            <div className="rounded-2xl border border-border bg-card p-6 mb-5">
              <div className="flex items-center gap-2 mb-4">
                <Award className="text-amber-400" size={18} />
                <h3 className="text-sm font-bold text-foreground uppercase tracking-wider">Education</h3>
              </div>
              <div className="border-l-2 border-emerald-500 pl-4">
                <h4 className="text-base font-bold text-emerald-400">Bachelor of Computer Science</h4>
                <p className="text-foreground font-medium text-sm mt-0.5">FAST NUCES, Lahore</p>
                <p className="text-muted-foreground text-xs mt-1">August 2018 — June 2022</p>
              </div>
            </div>

            {/* Specializations */}
            <div className="space-y-3">
              <p className="text-xs text-muted-foreground uppercase tracking-widest font-semibold mb-4">Core Specializations</p>
              {specializations.map((spec, index) => (
                <motion.div
                  key={index}
                  className={`flex items-start gap-3 p-4 rounded-xl border ${spec.bg} cursor-pointer`}
                  variants={fadeInVariants("left")}
                  initial="hidden"
                  animate={isInView ? "visible" : "hidden"}
                  transition={{ delay: 0.5 + index * 0.1 }}
                  whileHover={{ x: 4 }}
                >
                  <div className={`p-1.5 rounded-lg ${spec.bg} shrink-0 mt-0.5`}>
                    <spec.icon className={spec.color} size={16} />
                  </div>
                  <div>
                    <p className={`text-sm font-bold ${spec.color} mb-0.5`}>{spec.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{spec.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
