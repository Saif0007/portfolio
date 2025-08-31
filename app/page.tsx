"use client"

import { useState, useEffect, useRef } from "react"
import {
  Github,
  Linkedin,
  Mail,
  Phone,
  ExternalLink,
  Code,
  Database,
  Cloud,
  Zap,
  Users,
  Award,
  Calendar,
  MapPin,
  Download,
  ArrowRight,
  Sparkles,
  Star,
  Globe,
  Briefcase,
  Bot,
} from "lucide-react"

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState("hero")
  const [isScrolled, setIsScrolled] = useState(false)
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [visibleElements, setVisibleElements] = useState(new Set())
  const observerRef = useRef<IntersectionObserver | null>(null)

  useEffect(() => {
    document.documentElement.classList.add("dark")

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)

      // Update active section based on scroll position
      const sections = ["hero", "about", "skills", "projects", "experience", "contact"]
      const scrollPosition = window.scrollY + 100

      for (const section of sections) {
        const element = document.getElementById(section)
        if (element) {
          const { offsetTop, offsetHeight } = element
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section)
            break
          }
        }
      }
    }

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    // Intersection Observer for animations
    observerRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleElements((prev) => new Set([...prev, entry.target.id]))
          }
        })
      },
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" },
    )

    // Observe all animated elements
    const animatedElements = document.querySelectorAll("[data-animate]")
    animatedElements.forEach((el) => {
      if (observerRef.current) {
        observerRef.current.observe(el)
      }
    })

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("mousemove", handleMouseMove)

    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("mousemove", handleMouseMove)
      if (observerRef.current) {
        observerRef.current.disconnect()
      }
    }
  }, [])

  const skills = {
    frontend: ["HTML", "CSS", "JavaScript", "Next.js", "React"],
    backend: ["Python", "Django", "Flask", "FastAPI", "REST APIs"],
    databases: ["MySQL", "PostgreSQL", "MongoDB", "SQL Server"],
    cloud: ["AWS", "EC2", "S3", "RDS", "Docker"],
    tools: ["Visual Studio Code", "Cursor", "Postman", "Git", "JIRA", "Zapier"],
    ai: ["LangChain", "OpenAI", "GPT Models", "RAG Systems", "AI Integration"],
  }

  const projects = [
    {
      title: "Contact Lens RAG Application",
      description:
        "AI-powered research chatbot system with GPT-like capabilities for contact lens research. Features comprehensive admin panel for training AI models using PDFs, Excel sheets, and automated web scraping from 40+ websites.",
      tech: ["FastAPI", "Next.js", "OpenAI", "RAG", "Web Scraping"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "https://www.therightcontact.com/",
      image: "/ai-news-analysis-interface-with-text-processing.png",
      featured: true,
    },
    {
      title: "PRD Generator Platform",
      description:
        "AI-driven PRD generation system that creates detailed product requirement documents through guided questionnaires. Integrated with JIRA and Figma APIs for automatic ticket creation and design generation.",
      tech: ["Django", "Next.js", "OpenAI", "JIRA API", "Figma API"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/modern-analytics-dashboard.png",
      featured: true,
    },
    {
      title: "Real Estate Intelligence Platform",
      description:
        "Comprehensive property data scraping system from Zillow with AI-powered scope of work generator. Features image recognition technology and GPT models for room design generation and floor plan creation.",
      tech: ["Next.js", "Django", "OpenAI", "Image Recognition", "Web Scraping"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/modern-chat-app.png",
    },
    {
      title: "LinkedIn Ad Analytics Dashboard",
      description:
        "Automated ad scraping system for comprehensive company advertising analysis across LinkedIn. Built detailed analytics engine with Stripe payment integration for premium features.",
      tech: ["Python", "LinkedIn API", "Stripe", "Analytics", "Web Scraping"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "#",
      image: "/e-commerce-platform-interface-with-shopping-cart.png",
    },
    {
      title: "Crypto Trading Analysis Chrome Extension",
      description:
        "Published Chrome extension providing real-time AI-driven chart analysis for traders. Features OpenAI integration for pattern recognition and Firebase authentication with tiered access system.",
      tech: ["JavaScript", "Chrome API", "OpenAI", "Firebase", "Technical Analysis"],
      github: "https://github.com/Saif-Ur-Rehman0",
      demo: "https://chromewebstore.google.com/detail/crypto-trading-analysis-b/fgldmbbkdnnmjgkdldihfpieheomlkif",
      image: "/modern-analytics-dashboard.png",
    },
  ]

  const experience = [
    {
      company: "Tron AI",
      position: "Senior Software Engineer (Team Lead)",
      duration: "October 2024 - Present",
      location: "Lahore",
      description:
        "Leading development teams in building cutting-edge AI-powered solutions. Architecting scalable software systems, mentoring junior developers, and driving technical decision-making across projects.",
      current: true,
    },
    {
      company: "Rolustech",
      position: "Software Engineer",
      duration: "July 2022 - September 2024",
      location: "Lahore",
      description:
        "Developed and deployed dynamic web applications using Python Django and REST APIs. Spearheaded backend development, implemented advanced debugging techniques, and collaborated with cross-functional teams to deliver high-performance applications.",
      current: false,
    },
  ]

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const downloadResume = () => {
    const link = document.createElement('a')
    link.href = '/resume.pdf'
    link.download = 'Saif_Ur_Rehman_Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const isVisible = (id: string) => visibleElements.has(id)

  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <div
          className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/30 to-blue-500/20 rounded-full blur-3xl animate-float opacity-60"
          style={{
            transform: `translate(${mousePosition.x * 0.03}px, ${mousePosition.y * 0.03}px)`,
            top: "-10%",
            left: "-10%",
          }}
        />
        <div
          className="absolute w-[400px] h-[400px] bg-gradient-to-r from-amber-400/25 to-orange-500/15 rounded-full blur-3xl animate-float opacity-70"
          style={{
            transform: `translate(${mousePosition.x * -0.02}px, ${mousePosition.y * -0.02}px)`,
            top: "20%",
            right: "-5%",
            animationDelay: "1s",
          }}
        />
        <div
          className="absolute w-[350px] h-[350px] bg-gradient-to-r from-emerald-400/20 to-teal-500/15 rounded-full blur-3xl animate-float opacity-50"
          style={{
            transform: `translate(${mousePosition.x * 0.025}px, ${mousePosition.y * 0.025}px)`,
            bottom: "10%",
            left: "30%",
            animationDelay: "3s",
          }}
        />
        <div className="absolute top-20 right-20 w-32 h-32 border border-cyan-500/20 rounded-full animate-spin-slow opacity-30" />
        <div className="absolute bottom-32 left-16 w-24 h-24 border-2 border-amber-500/20 rotate-45 animate-pulse opacity-40" />
        <div
          className="absolute top-1/2 left-10 w-16 h-16 bg-gradient-to-r from-emerald-500/10 to-teal-500/10 rounded-lg animate-bounce opacity-30"
          style={{ animationDelay: "2s" }}
        />
      </div>

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${isScrolled ? "glass shadow-lg" : ""}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4">
          <div className="flex justify-between items-center">
            <div className="text-xl sm:text-2xl font-bold gradient-text">Saif Ur Rehman</div>
            <div className="flex items-center gap-4 sm:gap-6">
              <div className="hidden md:flex space-x-6 lg:space-x-8">
                {["About", "Skills", "Projects", "Experience", "Contact"].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`relative px-3 lg:px-4 py-2 rounded-lg transition-all duration-300 text-sm lg:text-base ${
                      activeSection === item.toLowerCase()
                        ? "text-accent bg-accent/10"
                        : "text-muted hover:text-foreground hover:bg-muted/10"
                    }`}
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="hero"
        className="min-h-screen flex items-center justify-center relative overflow-hidden pt-16 sm:pt-20"
      >
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute w-[600px] h-[600px] bg-gradient-to-r from-cyan-400/20 to-blue-500/15 rounded-full blur-3xl animate-float opacity-50"
            style={{
              transform: `translate(${mousePosition.x * 0.02}px, ${mousePosition.y * 0.02}px)`,
              top: "-15%",
              left: "-15%",
            }}
          />
          <div
            className="absolute w-[400px] h-[400px] bg-gradient-to-r from-amber-400/15 to-orange-500/10 rounded-full blur-3xl animate-float opacity-40"
            style={{
              transform: `translate(${mousePosition.x * -0.015}px, ${mousePosition.y * -0.015}px)`,
              top: "30%",
              right: "-10%",
              animationDelay: "2s",
            }}
          />
        </div>

        <div className="text-center z-10 px-4 sm:px-6 max-w-6xl mx-auto relative">
          <div
            data-animate="hero-content"
            id="hero-content"
            className={`transition-all duration-1000 ${
              isVisible("hero-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <div className="mb-6 sm:mb-8">
              <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 sm:py-2 bg-gradient-to-r from-cyan-500/10 via-blue-500/10 to-purple-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400 rounded-full text-xs sm:text-sm font-medium animate-glow shadow-lg hover:shadow-cyan-500/25 transition-all duration-300">
                <div className="relative">
                  <Sparkles size={10} className="sm:w-3 sm:h-3 animate-pulse" />
                </div>
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Available for new opportunities
                </span>
                <div className="w-1 h-1 sm:w-1.5 sm:h-1.5 bg-emerald-400 rounded-full animate-pulse" />
              </div>
            </div>

            <div className="mb-8 sm:mb-10">
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl 2xl:text-8xl font-black leading-[0.9] mb-6 sm:mb-8">
                <div className="mb-2 sm:mb-3">
                  <span className="bg-gradient-to-r from-white via-cyan-200 to-blue-300 dark:from-gray-100 dark:via-cyan-300 dark:to-blue-400 bg-clip-text text-transparent drop-shadow-2xl">
                    M. Saif{" "}
                  </span>
                  <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent animate-gradient-x">
                    Ur Rehman
                  </span>
                </div>
              </h1>
            </div>

            <div className="mb-10 sm:mb-12">
              <div className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl font-bold mb-4 sm:mb-6">
                <span className="bg-gradient-to-r from-gray-600 to-gray-800 dark:from-gray-300 dark:to-gray-100 bg-clip-text text-transparent">
                  Software Engineer
                </span>
                <span className="mx-2 sm:mx-3 text-cyan-500 text-lg sm:text-xl md:text-2xl lg:text-3xl">|</span>
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">
                  FAST'22
                </span>
              </div>
              <div className="w-16 sm:w-20 md:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 via-blue-500 to-purple-500 mx-auto rounded-full animate-pulse" />
            </div>

            <div className="mb-12 sm:mb-16">
              <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-muted-foreground max-w-4xl mx-auto leading-relaxed font-light px-2 sm:px-4">
                Leading development teams in building{" "}
                <span className="text-cyan-400 font-semibold">cutting-edge AI-powered solutions</span>.
                <br className="hidden sm:block" />
                Specialized in <span className="text-amber-400 font-semibold">Python, Django, AI/ML integration</span>,
                and <span className="text-emerald-400 font-semibold">scalable cloud architectures</span>.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 md:gap-6 justify-center mb-16 sm:mb-20 px-2">
              <button
                onClick={() => scrollToSection("projects")}
                className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 bg-gradient-to-r from-cyan-500 via-blue-600 to-purple-600 text-white rounded-2xl hover:from-cyan-600 hover:via-blue-700 hover:to-purple-700 transition-all duration-500 transform hover:scale-105 shadow-2xl hover:shadow-cyan-500/25 flex items-center justify-center gap-2 sm:gap-3 font-bold text-sm sm:text-base md:text-lg overflow-hidden"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <Sparkles
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] group-hover:rotate-12 transition-transform duration-300"
                />
                View My Work
                <ArrowRight
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] group-hover:translate-x-2 transition-transform duration-300"
                />
              </button>

              <button onClick={downloadResume} className="group relative px-5 sm:px-6 md:px-8 py-3 sm:py-4 border-2 border-cyan-500/30 bg-card/80 backdrop-blur-sm text-card-foreground rounded-2xl hover:bg-gradient-to-r hover:from-cyan-500/10 hover:via-blue-500/10 hover:to-purple-500/10 hover:border-cyan-400/60 transition-all duration-500 transform hover:scale-105 shadow-xl hover:shadow-blue-500/20 flex items-center justify-center gap-2 sm:gap-3 font-bold text-sm sm:text-base md:text-lg">
                <Download
                  size={16}
                  className="sm:w-[18px] sm:h-[18px] group-hover:-translate-y-1 transition-transform duration-300"
                />
                Download Resume
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-cyan-500/5 to-blue-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </button>
            </div>

            <div className="flex justify-center space-x-3 sm:space-x-4 md:space-x-6">
              {[
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                  color: "hover:text-blue-500 hover:bg-blue-500/20 hover:border-blue-500/30 hover:shadow-blue-500/25",
                  label: "LinkedIn",
                },
                {
                  icon: Github,
                  href: "https://github.com/Saif-Ur-Rehman0",
                  color:
                    "hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-600/20 hover:border-gray-500/30 hover:shadow-gray-500/25",
                  label: "GitHub",
                },
                {
                  icon: Mail,
                  href: "mailto:syfin008@gmail.com",
                  color:
                    "hover:text-amber-500 hover:bg-amber-500/20 hover:border-amber-500/30 hover:shadow-amber-500/25",
                  label: "Email",
                },
                {
                  icon: Phone,
                  href: "tel:+923224016585",
                  color:
                    "hover:text-emerald-500 hover:bg-emerald-500/20 hover:border-emerald-500/30 hover:shadow-emerald-500/25",
                  label: "Phone",
                },
              ].map(({ icon: Icon, href, color, label }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`group relative p-2.5 sm:p-3 md:p-4 glass rounded-2xl ${color} transition-all duration-500 transform hover:scale-110 hover:-translate-y-2 shadow-lg border border-border/50`}
                  aria-label={label}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5 transition-transform duration-300 group-hover:scale-110" />
                  <div className="absolute -inset-1 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm -z-10" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 sm:py-20 relative">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            data-animate="about-header"
            id="about-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible("about-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">About Me</h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
            <div
              data-animate="about-content"
              id="about-content"
              className={`space-y-4 sm:space-y-6 transition-all duration-1000 delay-200 ${
                isVisible("about-content") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                I'm a passionate Software Engineer with 3+ years of experience in building robust, scalable web
                applications. Currently serving as a Senior Software Engineer and Team Lead at Tron AI, where I
                architect cutting-edge AI-powered solutions and mentor development teams.
              </p>
              <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
                My expertise spans full-stack development with Python Django, REST APIs, AI/ML integration, and cloud
                technologies. I'm passionate about leveraging artificial intelligence to solve complex business problems
                and creating seamless user experiences.
              </p>

              <div className="grid grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
                {[
                  { number: "3+", label: "Years Experience", color: "text-cyan-500" },
                  { number: "25+", label: "Projects Delivered", color: "text-amber-500" },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="text-center p-4 sm:p-6 glass rounded-xl hover:scale-105 transition-transform duration-300"
                  >
                    <div className={`text-2xl sm:text-3xl font-black ${stat.color} mb-1 sm:mb-2`}>{stat.number}</div>
                    <div className="text-muted-foreground font-medium text-sm sm:text-base">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div
              data-animate="about-education"
              id="about-education"
              className={`glass rounded-2xl p-6 sm:p-8 transition-all duration-1000 delay-400 ${
                isVisible("about-education") ? "animate-slide-in-up opacity-100" : "opacity-0"
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold mb-4 sm:mb-6 flex items-center gap-2">
                <Award className="text-amber-500" />
                Education & Certifications
              </h3>
              <div className="space-y-4 sm:space-y-6">
                <div className="border-l-4 border-cyan-500 pl-4 sm:pl-6">
                  <h4 className="text-xl font-bold text-cyan-500 mb-2">Bachelor of Computer Science</h4>
                  <p className="text-foreground font-medium">FAST NUCES, Lahore</p>
                  <p className="text-muted-foreground text-sm">August 2018 - June 2022</p>
                  <p className="text-muted-foreground text-sm mt-2">
                    Key Coursework: Programming Fundamentals, Design and Analysis of Algorithms, Databases, Object
                    Oriented Programming, Data Structures
                  </p>
                </div>
                <div className="space-y-3">
                  {[
                    "Python For Programmers Course - Codecademy",
                    "Django Framework Course - Great Learning",
                    "Learn JavaScript Course - Codecademy",
                  ].map((cert, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 p-3 bg-gradient-to-r from-cyan-500/5 to-blue-500/5 rounded-lg border border-cyan-500/20"
                    >
                      <Star className="text-amber-500 flex-shrink-0" size={16} />
                      <span className="text-sm font-medium">{cert}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            data-animate="skills-header"
            id="skills-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible("skills-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Skills & Technologies</h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {[
              {
                title: "Frontend",
                icon: Code,
                skills: skills.frontend,
                color: "from-blue-500/20 to-cyan-500/10",
                iconColor: "text-blue-500",
              },
              {
                title: "Backend",
                icon: Zap,
                skills: skills.backend,
                color: "from-cyan-500/20 to-teal-500/10",
                iconColor: "text-cyan-500",
              },
              {
                title: "Databases",
                icon: Database,
                skills: skills.databases,
                color: "from-emerald-500/20 to-green-500/10",
                iconColor: "text-emerald-500",
              },
              {
                title: "Cloud & DevOps",
                icon: Cloud,
                skills: skills.cloud,
                color: "from-amber-500/20 to-orange-500/10",
                iconColor: "text-amber-500",
              },
              {
                title: "AI & ML",
                icon: Bot,
                skills: skills.ai,
                color: "from-purple-500/20 to-pink-500/10",
                iconColor: "text-purple-500",
              },
              {
                title: "Development Tools",
                icon: Users,
                skills: skills.tools,
                color: "from-rose-500/20 to-red-500/10",
                iconColor: "text-rose-500",
              },
            ].map((category, index) => (
              <div
                key={index}
                data-animate={`skill-${index}`}
                id={`skill-${index}`}
                className={`bg-gradient-to-br ${category.color} backdrop-blur-sm rounded-2xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 ${
                  isVisible(`skill-${index}`) ? `animate-fade-in-scale opacity-100 stagger-${index + 1}` : "opacity-0"
                }`}
              >
                <div className="flex items-center mb-3 sm:mb-4">
                  <category.icon className={`${category.iconColor} mr-2 sm:mr-3`} size={20} />
                  <h3 className={`text-lg sm:text-xl font-bold ${category.iconColor}`}>{category.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 bg-background/50 backdrop-blur-sm rounded-full text-xs font-medium border border-border/50 hover:bg-background/70 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-16 sm:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div
            data-animate="projects-header"
            id="projects-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible("projects-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Featured Projects</h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          {/* Featured Projects Grid */}
          <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 mb-8 sm:mb-12">
            {projects
              .filter((p) => p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  data-animate={`featured-project-${index}`}
                  id={`featured-project-${index}`}
                  className={`group glass rounded-2xl overflow-hidden hover:scale-[1.02] transition-all duration-500 ${
                    isVisible(`featured-project-${index}`)
                      ? `animate-fade-in-scale opacity-100 stagger-${index + 1}`
                      : "opacity-0"
                  }`}
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image || "/placeholder.svg"}
                      alt={project.title}
                      className="w-full h-48 sm:h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent"></div>
                    <div className="absolute top-3 sm:top-4 right-3 sm:right-4">
                      <span className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-full text-xs font-bold">
                        Featured
                      </span>
                    </div>
                  </div>

                  <div className="p-5 sm:p-8">
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 sm:mb-3 group-hover:text-cyan-500 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 sm:mb-6 leading-relaxed">{project.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                      {project.tech.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-2 py-0.5 sm:px-3 sm:py-1 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 text-cyan-600 dark:text-cyan-400 rounded-full text-xs font-medium border border-cyan-500/20"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-2 sm:gap-4">
                      <a
                        href={project.github}
                        className="flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground rounded-xl transition-all duration-300 font-medium text-sm"
                      >
                        <Github size={16} />
                        Code
                      </a>
                      <a
                        href={project.demo}
                        className="flex items-center gap-1 sm:gap-2 px-4 py-2 sm:px-6 sm:py-3 bg-gradient-to-r from-cyan-500 to-blue-500 hover:from-cyan-600 hover:to-blue-600 text-white rounded-xl transition-all duration-300 font-medium text-sm"
                      >
                        <ExternalLink size={16} />
                        Live Website
                      </a>
                    </div>
                  </div>
                </div>
              ))}
          </div>

          {/* Other Projects */}
          <div className="grid sm:grid-cols-2 gap-4 sm:gap-6">
            {projects
              .filter((p) => !p.featured)
              .map((project, index) => (
                <div
                  key={index}
                  data-animate={`project-${index}`}
                  id={`project-${index}`}
                  className={`glass rounded-xl p-5 sm:p-6 hover:scale-105 transition-all duration-300 ${
                    isVisible(`project-${index}`)
                      ? `animate-fade-in-scale opacity-100 stagger-${index + 3}`
                      : "opacity-0"
                  }`}
                >
                  <div className="flex items-start gap-3 sm:gap-4 mb-3 sm:mb-4">
                    <div className="p-1.5 sm:p-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 rounded-lg border border-cyan-500/20">
                      <Globe className="text-cyan-500" size={18} />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-lg font-bold mb-1 sm:mb-2">{project.title}</h3>
                      <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">{project.description}</p>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1 sm:gap-2 mb-3 sm:mb-4">
                    {project.tech.slice(0, 3).map((tech, techIndex) => (
                      <span key={techIndex} className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded text-xs">
                        {tech}
                      </span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="px-1.5 py-0.5 bg-muted/50 text-muted-foreground rounded text-xs">
                        +{project.tech.length - 3} more
                      </span>
                    )}
                  </div>

                  <div className="flex gap-2 sm:gap-3">
                    <a href={project.github} className="text-muted-foreground hover:text-cyan-500 transition-colors">
                      <Github size={16} />
                    </a>
                    <a href={project.demo} className="text-muted-foreground hover:text-amber-500 transition-colors">
                      <ExternalLink size={16} />
                    </a>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-16 sm:py-20 bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div
            data-animate="experience-header"
            id="experience-header"
            className={`text-center mb-12 sm:mb-16 transition-all duration-1000 ${
              isVisible("experience-header") ? "animate-slide-in-up opacity-100" : "opacity-0"
            }`}
          >
            <h2 className="text-4xl sm:text-5xl font-black mb-4 sm:mb-6 gradient-text">Experience</h2>
            <div className="w-20 sm:w-24 h-0.5 sm:h-1 bg-gradient-to-r from-cyan-500 to-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 sm:space-y-8">
            {experience.map((exp, index) => (
              <div
                key={index}
                data-animate={`experience-${index}`}
                id={`experience-${index}`}
                className={`glass rounded-2xl p-6 sm:p-8 hover:bg-background/5 transition-all duration-300 ${
                  isVisible(`experience-${index}`)
                    ? `animate-slide-in-up opacity-100 stagger-${index + 1}`
                    : "opacity-0"
                }`}
              >
                <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between mb-4 sm:mb-6">
                  <div className="flex items-start gap-3 sm:gap-4">
                    <div
                      className={`p-2 rounded-xl ${exp.current ? "bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30" : "bg-muted/20"}`}
                    >
                      <Briefcase className={exp.current ? "text-cyan-500" : "text-muted-foreground"} size={20} />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-cyan-500 mb-1 sm:mb-2">{exp.position}</h3>
                      <h4 className="text-lg font-semibold mb-1 sm:mb-2">{exp.company}</h4>
                      {exp.current && (
                        <span className="inline-flex items-center gap-1 px-2 py-0.5 bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-600 dark:text-emerald-400 rounded-full text-xs font-medium border border-emerald-500/20">
                          <div className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></div>
                          Current Position
                        </span>
                      )}
                    </div>
                  </div>
                  <div className="flex flex-col lg:items-end mt-2 lg:mt-0 space-y-1 sm:space-y-2">
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <Calendar size={16} />
                      <span className="font-medium">{exp.duration}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground text-sm">
                      <MapPin size={16} />
                      <span className="font-medium">{exp.location}</span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground leading-relaxed">{exp.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
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
                  I'm always interested in hearing about new opportunities, interesting projects, or just having a chat
                  about technology. Feel free to reach out!
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
                    color:
                      "bg-gradient-to-r from-emerald-500/10 to-green-500/10 text-emerald-500 border-emerald-500/20",
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
              <form className="space-y-4 sm:space-y-6">
                <div className="grid md:grid-cols-2 gap-3 sm:gap-4">
                  <div>
                    <label className="block text-sm font-medium mb-1 sm:mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-1 sm:mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Subject</label>
                  <input
                    type="text"
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all"
                    placeholder="Project discussion"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-1 sm:mb-2">Message</label>
                  <textarea
                    rows={4}
                    className="w-full px-3 py-2 sm:px-4 sm:py-3 bg-input border border-border rounded-xl focus:ring-2 focus:ring-ring focus:border-transparent transition-all resize-none"
                    placeholder="Tell me about your project..."
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full px-6 py-3 sm:px-8 sm:py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-white rounded-xl hover:from-cyan-600 hover:to-blue-600 transition-all duration-300 transform hover:scale-[1.02] font-semibold shadow-lg hover:shadow-xl"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 sm:py-12 border-t border-border bg-card">
        <div className="max-w-6xl mx-auto px-4 sm:px-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-6">
            <div className="text-center md:text-left">
              <div className="text-lg sm:text-xl font-bold gradient-text mb-1 sm:mb-2">Saif Ur Rehman</div>
              <p className="text-muted-foreground text-sm sm:text-base">© 2025 Built with Next JS & Tailwind</p>
            </div>
            <div className="flex space-x-4 sm:space-x-6">
              {[
                {
                  icon: Github,
                  href: "https://github.com/Saif-Ur-Rehman0",
                  color: "hover:bg-gray-600/10 hover:text-gray-600",
                },
                {
                  icon: Linkedin,
                  href: "https://linkedin.com/in/saif-ur-rehman-404650218",
                  color: "hover:bg-blue-500/10 hover:text-blue-500",
                },
                { icon: Mail, href: "mailto:syfin008@gmail.com", color: "hover:bg-amber-500/10 hover:text-amber-500" },
              ].map(({ icon: Icon, href, color }, index) => (
                <a
                  key={index}
                  href={href}
                  className={`p-2.5 sm:p-3 glass rounded-lg ${color} transition-all duration-300 transform hover:scale-110`}
                >
                  <Icon size={18} className="sm:w-5 sm:h-5" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Portfolio
