import { notFound } from "next/navigation"
import Link from "next/link"
import { ArrowLeft, ExternalLink, Phone, CheckCircle2, Globe, Code, Shield } from "lucide-react"
import { projects } from "@/data/portfolio-data"

interface PageProps {
  params: Promise<{ slug: string }>
}

export async function generateStaticParams() {
  return projects.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)
  if (!project) return {}
  return {
    title: `${project.title} — Saif Ur Rehman`,
    description: project.description,
  }
}

export default async function ProjectDetailPage({ params }: PageProps) {
  const { slug } = await params
  const project = projects.find((p) => p.slug === slug)

  if (!project) notFound()

  const isPioneer = project.slug === "pioneer-voice-ai"
  const isAuralis = project.slug === "auralis-labs-voice-ai"
  const isVoiceProject = isPioneer || isAuralis

  const roleColors = [
    { border: "border-purple-500/20", bg: "from-purple-500/5 to-blue-500/5", dot: "bg-purple-400", text: "text-purple-400" },
    { border: "border-cyan-500/20",   bg: "from-cyan-500/5 to-blue-500/5",   dot: "bg-cyan-400",   text: "text-cyan-400" },
    { border: "border-blue-500/20",   bg: "from-blue-500/5 to-indigo-500/5", dot: "bg-blue-400",   text: "text-blue-400" },
  ]

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Background gradient blobs */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute top-1/4 -left-1/4 w-96 h-96 bg-cyan-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 -right-1/4 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 py-10 sm:py-16">
        {/* Back link */}
        <Link
          href="/#projects"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-500 transition-colors mb-10 group text-sm"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Portfolio
        </Link>

        {/* Header */}
        <div className="mb-10 sm:mb-14">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            {project.featured && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                Featured Project
              </span>
            )}
            {isAuralis && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-purple-500/20 to-blue-500/20 text-purple-400 border border-purple-500/30 rounded-full text-xs font-bold">
                B2B SaaS · Multi-Tenant
              </span>
            )}
            {isPioneer && (
              <span className="inline-block px-3 py-1 bg-gradient-to-r from-green-500/20 to-cyan-500/20 text-green-400 border border-green-500/30 rounded-full text-xs font-bold">
                Healthcare Recruitment
              </span>
            )}
          </div>

          <h1 className="text-3xl sm:text-5xl font-black mb-4 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent leading-tight">
            {project.title}
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-3xl">
            {project.description}
          </p>

          {/* Test phone for Auralis */}
          {isAuralis && project.testPhone && (
            <div className="mt-4 flex items-center gap-2">
              <a
                href={`tel:${project.testPhone.replace(/\s|\(|\)|-/g, "")}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-green-500/10 border border-green-500/20 text-green-400 text-sm font-mono hover:bg-green-500/20 transition-colors"
              >
                <Phone size={14} />
                Test tenant: {project.testPhone}
              </a>
              <span className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                Live
              </span>
            </div>
          )}

          {/* Action buttons */}
          <div className="flex flex-wrap gap-3 mt-6">
            {project.demo && project.demo !== "#" && (
              <a
                href={project.demo}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium text-sm"
              >
                <Globe size={16} />
                Live Website
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 font-medium text-sm"
              >
                <Code size={16} />
                View Code
              </a>
            )}
          </div>
        </div>

        {/* Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent mb-10 sm:mb-14" />

        {/* Screenshot Gallery */}
        {project.images && project.images.length > 0 ? (
          <section className="mb-10 sm:mb-14">
            <div className={`grid gap-4 ${project.images.length > 1 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1"}`}>
              {project.images.map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-border/40">
                  <img src={src} alt={`${project.title} screenshot ${i + 1}`} className="w-full object-cover" />
                </div>
              ))}
            </div>
          </section>
        ) : project.image && (
          <section className="mb-10 sm:mb-14">
            <div className="rounded-2xl overflow-hidden border border-border/40">
              <img src={project.image} alt={project.title} className="w-full object-cover" />
            </div>
          </section>
        )}

        {/* Tech Stack */}
        <section className="mb-10 sm:mb-14">
          <h2 className="text-xl font-bold mb-4 text-foreground">Tech Stack</h2>
          <div className="flex flex-wrap gap-2">
            {project.tech.map((t) => (
              <span
                key={t}
                className="px-3 py-1.5 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-400 rounded-full text-sm font-medium border border-cyan-500/20"
              >
                {t}
              </span>
            ))}
          </div>
        </section>

        {/* Overview */}
        {project.overview && (
          <section className="mb-10 sm:mb-14">
            <h2 className="text-xl font-bold mb-4 text-foreground">Overview</h2>
            <p className="text-muted-foreground leading-relaxed text-sm sm:text-base">{project.overview}</p>
          </section>
        )}

        {/* Voice Pipeline — Auralis */}
        {isAuralis && project.pipeline && (
          <section className="mb-10 sm:mb-14">
            <h2 className="text-xl font-bold mb-6 text-foreground">How a Call Works</h2>
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-px bg-gradient-to-b from-cyan-500/50 via-blue-500/30 to-transparent" />
              <ol className="space-y-4 pl-12">
                {project.pipeline.map((step, i) => (
                  <li key={i} className="relative">
                    {/* Step dot */}
                    <span className="absolute -left-8 flex items-center justify-center w-7 h-7 rounded-full bg-gradient-to-br from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 text-cyan-400 text-xs font-bold">
                      {i + 1}
                    </span>
                    <p className="text-sm text-muted-foreground leading-relaxed pt-1">{step}</p>
                  </li>
                ))}
              </ol>
            </div>
          </section>
        )}

        {/* Pioneer Voice Agents */}
        {isPioneer && project.agents && (
          <section className="mb-10 sm:mb-14">
            <h2 className="text-xl font-bold mb-6 text-foreground">AI Voice Agents</h2>
            <div className="grid sm:grid-cols-2 gap-5">
              {project.agents.map((agent) => (
                <div
                  key={agent.name}
                  className="rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-cyan-500/5 to-blue-500/5 p-6"
                >
                  <div className="flex items-start justify-between mb-3 gap-3">
                    <div>
                      <h3 className="text-lg font-bold text-foreground">{agent.name}</h3>
                      <span className="text-xs text-cyan-400 font-medium">{agent.role}</span>
                    </div>
                    <a
                      href={`tel:${agent.phone.replace(/[\s()+-]/g, "")}`}
                      className="inline-flex shrink-0 items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-xs font-mono hover:bg-cyan-500/20 transition-colors"
                    >
                      <Phone size={12} />
                      {agent.phone}
                    </a>
                  </div>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{agent.description}</p>
                  <ul className="space-y-2">
                    {agent.capabilities.map((cap) => (
                      <li key={cap} className="flex items-start gap-2 text-sm text-muted-foreground">
                        <CheckCircle2 size={14} className="text-cyan-500 mt-0.5 shrink-0" />
                        {cap}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            {project.liveNote && (
              <div className="mt-4 flex items-center gap-2 text-xs text-cyan-400">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                {project.liveNote}
              </div>
            )}
          </section>
        )}

        {/* User Roles — Auralis */}
        {isAuralis && project.roles && (
          <section className="mb-10 sm:mb-14">
            <h2 className="text-xl font-bold mb-2 text-foreground">User Roles & Access Control</h2>
            <p className="text-muted-foreground text-sm mb-6">Three-tier role system with strict access controls per tenant.</p>
            <div className="grid sm:grid-cols-3 gap-4">
              {project.roles.map((role, i) => {
                const colors = roleColors[i % roleColors.length]
                return (
                  <div
                    key={role.name}
                    className={`rounded-2xl border ${colors.border} bg-gradient-to-br ${colors.bg} p-5`}
                  >
                    <div className="flex items-center gap-2 mb-2">
                      <span className={`w-2 h-2 rounded-full ${colors.dot}`} />
                      <h3 className={`text-sm font-bold ${colors.text}`}>{role.name}</h3>
                    </div>
                    <p className="text-xs text-muted-foreground mb-4 leading-relaxed">{role.description}</p>
                    <ul className="space-y-1.5">
                      {role.permissions.map((perm) => (
                        <li key={perm} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <Shield size={10} className={`${colors.text} mt-0.5 shrink-0`} />
                          {perm}
                        </li>
                      ))}
                    </ul>
                  </div>
                )
              })}
            </div>
          </section>
        )}

        {/* Features / Capabilities */}
        {project.features && project.features.length > 0 && (
          <section className="mb-10 sm:mb-14">
            <h2 className="text-xl font-bold mb-6 text-foreground">
              {isVoiceProject ? "Dashboard & Platform Features" : "Key Features"}
            </h2>
            <div className="grid sm:grid-cols-2 gap-3">
              {project.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-start gap-3 p-4 rounded-xl bg-muted/30 border border-border/40"
                >
                  <CheckCircle2 size={16} className="text-cyan-500 mt-0.5 shrink-0" />
                  <span className="text-sm text-muted-foreground">{feature}</span>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Auralis live note */}
        {isAuralis && project.liveNote && (
          <div className="mb-10 flex items-center gap-2 text-xs text-green-400 bg-green-500/5 border border-green-500/20 rounded-xl px-4 py-3">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse shrink-0" />
            {project.liveNote}
          </div>
        )}

        {/* Bottom CTA */}
        <div className="border-t border-border/40 pt-10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-cyan-500 transition-colors group text-sm"
          >
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
            All Projects
          </Link>
          {project.demo && project.demo !== "#" && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              <ExternalLink size={14} />
              {project.demo}
            </a>
          )}
        </div>
      </div>
    </div>
  )
}
