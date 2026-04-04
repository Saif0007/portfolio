export const skills = {
  ai: [
    "AI Voice Agents",
    "GPT Fine-Tuning",
    "RAG Systems",
    "LangChain",
    "OpenAI API",
    "Hugging Face",
    "Prompt Engineering",
    "TensorFlow",
    "PyTorch",
    "Transformers",
    "NLP",
    "Deep Learning",
    "CrewAI",
    "Multi-Agent Systems",
  ],
  frontend: [
    "React.js",
    "Next.js",
    "TypeScript",
    "JavaScript",
    "Tailwind CSS",
    "HTML5",
    "CSS3",
    "Responsive Design",
  ],
  backend: [
    "Python",
    "Django",
    "FastAPI",
    "Flask",
    "Node.js",
    "Express.js",
    "REST APIs",
    "GraphQL",
    "WebSockets",
  ],
  databases: ["PostgreSQL", "MySQL", "MongoDB", "Supabase", "Firebase", "SQL Server"],
  cloud: ["AWS (EC2, S3, Lambda)", "Docker", "Vercel", "Heroku", "CI/CD Pipelines"],
  tools: [
    "Twilio",
    "Retell AI",
    "Deepgram",
    "ElevenLabs",
    "Salesforce API",
    "Git",
    "VS Code",
    "Cursor",
    "Postman",
    "JIRA",
    "Zapier",
    "Stripe Integration",
  ],
}

export interface ProjectAgent {
  name: string
  role: string
  phone: string
  description: string
  capabilities: string[]
}

export interface ProjectRole {
  name: string
  description: string
  permissions: string[]
}

export interface Project {
  title: string
  slug: string
  description: string
  tech: string[]
  github?: string
  demo?: string
  image: string
  images?: string[]
  featured?: boolean
  // Detail page fields
  overview?: string
  agents?: ProjectAgent[]
  roles?: ProjectRole[]
  pipeline?: string[]
  features?: string[]
  challenges?: string[]
  liveNote?: string
  testPhone?: string
}

export const projects: Project[] = [
  {
    title: "Pioneer Voice AI Platform",
    slug: "pioneer-voice-ai",
    description:
      "End-to-end AI voice agent platform for Pioneer Healthcare Recruitment Agency featuring two production voice agents, a full-stack admin dashboard with call analytics, knowledge base management, and automated re-engagement campaigns.",
    tech: ["Retell AI", "Twilio", "Next.js", "Supabase", "Outlook API", "Salesforce"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://voice-ai-live.pioneercommission.com/",
    image: "/pioneer-voice-ai-portal.png",
    featured: true,
    overview:
      "Built a production-grade AI voice platform for Pioneer, a healthcare recruitment agency. The platform comprises two autonomous voice agents and a comprehensive admin dashboard that gives the Pioneer internal team full visibility and control over all AI-driven calls, knowledge bases, and scheduled campaigns.",
    agents: [
      {
        name: "Penny — AI Receptionist",
        role: "After-Hours Inbound Agent",
        phone: "+1 (858) 298-2653",
        description:
          "Penny handles all inbound calls after business hours. She collects 14+ data points from callers, runs a smart processing flow to detect clients vs. candidates vs. payroll inquiries, updates Salesforce in real time, sends follow-up emails and SMS, and schedules Microsoft/Teams calendar events with the assigned recruiter when requested.",
        capabilities: [
          "Collects caller profile: name, profession, assignment type, preferred location, start date, experience, and more",
          "Detects client calls and payroll inquiries — routes each to the correct internal team via email",
          "Looks up existing Salesforce contacts by phone + email; creates activity tasks on every call",
          "Updates Salesforce fields: discipline, job type, desired states, available start date, and activity dates",
          "Sends personalized follow-up email + SMS to callers with open job links",
          "Schedules Microsoft/Teams calendar events with recruiters and creates Salesforce follow-up tasks with 1-hour reminders",
          "12-month last-activity check — flags long-inactive contacts to the lead distribution team",
        ],
      },
      {
        name: "Re-Engagement Agent",
        role: "Outbound Re-Engagement",
        phone: "+1 (858) 293-8436",
        description:
          "Proactively calls cold and inactive candidates (6+ months no activity) from Salesforce. Follows a structured multi-turn conversational flow, updates candidate profiles, and triggers recruiter follow-up — fully automated with pre-batch admin notifications and opt-out compliance built in.",
        capabilities: [
          "Queries Salesforce for Cold/Warm/New Lead contacts inactive 6+ months; respects Do Not Contact flags",
          "Batch scheduling: up to 50 candidates per batch at configurable times (9:00 AM, 3:30 PM, 12:00 AM PST)",
          "30-minute advance notification to all portal admins before each batch dispatches",
          "Captures updated profile: availability, assignment type, discipline, license status, licensed/desired states",
          "Action flags: opt-in for email/SMS job links, schedule recruiter meeting, lead distribution trigger",
          "Opt-out compliance: sets Salesforce Do Not Contact + marks status as Unsubscribed on any opt-out",
          "All outcomes logged: voicemail, no engagement, full conversation — Salesforce activity task created on every call",
        ],
      },
    ],
    features: [
      "Call logs with recordings, transcripts, and per-call outcome status",
      "Scheduled events view synced with Microsoft/Outlook Calendar",
      "Call analytics dashboard — volume, duration, outcomes, booking trends",
      "Knowledge base management — attach and update knowledge bases per agent",
      "User management with Admin and Viewer role permissions",
      "Batch scheduler — queue re-engagement campaigns with configurable batch size and call times",
      "Pre-dispatch notification system — admins receive email + in-portal alerts 30 minutes before each batch",
    ],
    liveNote: "Live and actively used by the Pioneer internal team.",
  },
  {
    title: "Auralis Labs — Multi-Tenant Voice AI Platform",
    slug: "auralis-labs-voice-ai",
    description:
      "Production-grade B2B multi-tenant conversational AI voice platform that handles inbound calls, books appointments in real time, and ships a white-label dashboard — all fully isolated per tenant business.",
    tech: ["Deepgram", "ElevenLabs", "Twilio", "Next.js", "FastAPI", "OpenAI GPT-4o", "Supabase", "Google Calendar", "Redis", "AWS"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://www.auralislabs.co/",
    image: "/auralis-labs-voice-ai.png",
    featured: true,
    testPhone: "+1 (857) 767-7618",
    overview:
      "Built a production-grade multi-tenant SaaS voice AI platform for Maximus Virgili (Auralis Labs). Each business that onboards gets their own dedicated phone number, a fully configurable AI voice agent with a custom personality, real-time Google Calendar integration for appointment booking, and a white-label dashboard. The platform is architected from day one for B2B scale — adding a new industry vertical (dental, med spa, salon) is a configuration change, not a code change.",
    pipeline: [
      "Caller dials the tenant's dedicated Twilio number",
      "Twilio streams call audio over WebSocket to FastAPI orchestrator",
      "Deepgram STT transcribes speech in real time with <300ms latency",
      "OpenAI GPT-4o handles conversation, extracts booking intent via slot-filling state machine",
      "Google Calendar FreeBusy API checks real-time availability and books the appointment",
      "ElevenLabs streams natural-sounding voice response back to the caller",
      "Full transcript, outcome, and call metadata saved to Supabase in real time",
    ],
    roles: [
      {
        name: "Platform Admin",
        description: "Auralis Labs team — manages the entire platform across all tenant businesses.",
        permissions: [
          "Create and manage tenant business accounts",
          "Assign Twilio numbers to tenants",
          "View aggregate analytics across all tenants",
          "Monitor system health, error rates, and call quality",
          "Manage platform-level settings and billing",
        ],
      },
      {
        name: "Business Owner",
        description: "Tenant business owner — has full control over their own agent and data.",
        permissions: [
          "Configure agent personality, greeting, and voice",
          "Set agent system prompt and conversational guidelines",
          "Connect and manage Google Calendar OAuth",
          "View call logs, full transcripts, and recordings",
          "Manage business hours, services, and booking rules",
          "Add and manage viewer users for their account",
        ],
      },
      {
        name: "Viewer",
        description: "Read-only team members — can monitor activity without making changes.",
        permissions: [
          "View call logs and transcripts",
          "View appointment bookings and calendar",
          "View analytics and performance metrics",
          "No configuration or settings access",
        ],
      },
    ],
    features: [
      "Call logs with full transcripts and recordings per tenant",
      "Real-time appointment booking via Google Calendar integration",
      "Analytics dashboard — call volume, booking success rate, error patterns",
      "Agent configuration — system prompt, voice selection, greeting, business hours",
      "White-label dashboard with per-tenant branding",
      "Sub-2-second voice response latency via parallel streaming pipeline",
      "30+ concurrent calls per instance with horizontal scaling",
      "Multi-tenant data isolation enforced via Supabase Row-Level Security",
    ],
    liveNote: "Live B2B platform actively onboarding businesses. Test tenant available at +1 (857) 767-7618.",
  },
  {
    title: "Pioneer Commissions Portal",
    slug: "pioneer-commissions-portal",
    description:
      "Commission tracking platform for a healthcare staffing agency — dual-engine model with a matrix-based calculator for recruiters and a tier-based calculator for account managers, pulling live data from Salesforce with real-time dashboards, split commissions, reassignment rules, and business development bonus tracking.",
    tech: ["Next.js", "FastAPI", "PostgreSQL", "Redis", "Salesforce API", "TypeScript", "Microsoft Graph API"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://pioneercommission.com/",
    image: "/pioneer-commissions-portal.png",
    featured: true,
    overview:
      "Pioneer's recruiters and account managers had no transparent, real-time view of their own earnings — and finance had no audit trail of how commissions were calculated. This platform solves all three pain points: it syncs Financial_Record__c data live from Salesforce, runs two separate calculation engines (matrix-based for recruiters, tier-based for account managers), and surfaces accurate earnings through role-gated dashboards. The system handles split commissions across shared deals, candidate and client reassignment edge cases, business development bonuses, and quarterly bonus calculations — with a full audit trail on every figure.",
    roles: [
      {
        name: "Admin / Superuser",
        description: "Full platform access — manages all users, triggers syncs, and views data across the entire organisation.",
        permissions: [
          "Create and manage all user accounts",
          "Trigger Salesforce Financial_Record__c sync and commission recalculation",
          "View every recruiter and account manager's dashboard",
          "Manage team structure, hierarchy, and reassignment rules",
        ],
      },
      {
        name: "Manager (Recruitment & AM)",
        description: "Earns commission and can view the dashboards of their direct reports.",
        permissions: [
          "View own commission dashboard (weekly, MTD, YTD, trend)",
          "Drill into direct reports' individual dashboards",
          "Review split commission deals and approve/dispute status",
          "View tier performance and quarterly bonus progress",
        ],
      },
      {
        name: "Recruiter / Account Manager",
        description: "Individual contributors — can only see their own earnings and performance data.",
        permissions: [
          "View own real-time commission dashboard",
          "Track weekly earnings, month-to-date progress vs. goal",
          "Monitor tier advancement (hours + gross margin for recruiters; gross profit tiers for AMs)",
          "View business development bonus tracking and split deal status",
        ],
      },
    ],
    features: [
      "Recruiter engine: dual-axis matrix — 5 cumulative hours tiers × 8 gross margin brackets",
      "Account manager engine: gross profit-based tier commission with separate rate tables",
      "Split commission handling — shared deals tracked with per-user %, approval workflow, and status (pending/approved/paid/disputed)",
      "Candidate & client reassignment management — commissions correctly re-attributed on ownership changes",
      "Business development bonus tracking and quarterly bonus calculations",
      "Webhook-driven recalculation — commission updates trigger automatically on Salesforce record changes",
      "Redis caching for real-time commission estimates without repeated heavy DB queries",
      "Full commission audit trail — every calculation is versioned and explainable",
      "Weekly, MTD, YTD dashboards with year-over-year comparison and 26-week trend charts",
      "Tier performance chart — live hours/GM vs. tier thresholds with active tier highlight",
    ],
  },
  {
    title: "Trade Gekko — AI Crypto Trading Platform",
    slug: "trade-gekko",
    description:
      "Full-stack SaaS platform that lets subscribers deploy autonomous AI trading bots on Coinbase. Generates signals from 42 LSTM models across 6 crypto assets and 7 timeframes, executes live market orders with stop-loss/take-profit, and gates features behind Stripe subscription tiers.",
    tech: ["Django", "Next.js", "TensorFlow", "LSTM", "Coinbase API", "Stripe", "PostgreSQL", "APScheduler"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://www.tradegekko.com/",
    image: "/trade-gekko.png",
    featured: true,
    overview:
      "Trade Gekko is a production SaaS platform where subscribers connect their Coinbase account and deploy AI-driven trading bots across 6 crypto assets (BTC, ETH, SOL, XRP, DOGE, LINK) over 7 timeframes (1m → 1d). The platform trains 42 LSTM models daily, generates signals every 15 minutes using a hybrid ML + technical analysis pipeline, and executes live market orders autonomously — complete with trailing stop-loss, take-profit, dynamic position sizing, and multi-timeframe confirmation guards.",
    features: [
      "42 LSTM models — one per symbol × timeframe, retrained daily at 12 AM UTC",
      "Hybrid signal engine: LSTM predictions combined with RSI, MACD, Bollinger Bands, Fibonacci, ATR, and news sentiment scoring",
      "Autonomous bot lifecycle: BUY → position management → SELL with trailing stop-loss and take-profit",
      "Dynamic position sizing: scales with ML confidence, drawdown streak, and live volatility (high-vol halves size)",
      "Multi-timeframe confirmation — higher TF SELL blocks lower TF BUY to prevent counter-trend entries",
      "Signal quality filters: min 35% confidence, trend strength ≥ 2%, R/R ≥ 1.2, no EXTREME risk signals",
      "Live Coinbase Advanced Trade order execution with Fernet-encrypted per-user API keys",
      "Real-time PnL streaming via SSE, backtesting engine, and timeframe performance optimizer (runs daily)",
      "Stripe subscription tiers (Starter / Pro / Elite) with plan-gated bot access and webhook-synced status",
    ],
  },
  {
    title: "TheRightContact.com — AI Contact Lens Platform",
    slug: "contact-lens-rag",
    description:
      "AI-powered platform for eye care professionals delivering accurate, real-time contact lens information via a custom NLP-to-Excel query engine and GPT-5. Integrates Google Sheets, PDFs, and web sources with corneal topography image analysis, multi-tier subscriptions, and admin dashboards.",
    tech: ["Next.js", "FastAPI", "GPT-5", "RAG", "AWS", "Google Sheets API", "Web Scraping", "Image Analysis"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://www.therightcontact.com/",
    image: "/contact-lens-rag-1.png",
    images: ["/contact-lens-rag-1.png", "/contact-lens-rag-2.png"],
    featured: true,
    overview:
      "TheRightContact.com is the leading digital solution for optometrists and ophthalmologists who need fast, accurate contact lens data. Built for eye care professionals, the platform combines a GPT-5 conversational interface with a custom NLP-to-Excel query engine that translates natural language into precise spreadsheet queries across thousands of lens records. Data is continuously synced from Google Sheets, PDFs, and 40+ industry web sources. The platform also includes corneal topography image analysis, multi-tier subscriptions, and full admin dashboards — all on HIPAA-compliant AWS infrastructure.",
    features: [
      "Custom NLP-to-Excel query engine — natural language questions resolved against live spreadsheet data",
      "GPT-5 conversational interface with source-backed answers for clinical queries",
      "Real-time data sync from Google Sheets, PDFs, and 40+ contact lens websites",
      "Corneal topography image analysis — AI-powered interpretation of diagnostic images",
      "Multi-tier subscription management with role-based feature access",
      "Admin dashboard — manage data sources, monitor usage, update training content",
      "CI/CD pipeline on AWS for automated deployments and zero-downtime updates",
      "HIPAA-compliant infrastructure with secure healthcare data handling",
    ],
  },
  {
    title: "PRD Generator Platform",
    slug: "prd-generator",
    description:
      "AI-driven PRD generation system that creates detailed product requirement documents through guided questionnaires. Integrated with JIRA and Figma APIs for automatic ticket creation and design generation.",
    tech: ["Django", "Next.js", "OpenAI", "JIRA API", "Figma API"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "#",
    image: "/modern-analytics-dashboard.png",
    featured: true,
    overview:
      "A platform that automates the creation of Product Requirement Documents. Product managers answer a guided questionnaire and the system generates a structured PRD, creates JIRA tickets, and triggers Figma design stubs — all in one workflow.",
    features: [
      "Guided questionnaire flow to capture product context",
      "AI-generated PRD with structured sections and acceptance criteria",
      "Automatic JIRA epic and story creation from PRD content",
      "Figma API integration for design stub generation",
      "Version history and collaborative editing",
      "Export to PDF and Confluence-compatible formats",
    ],
  },
  {
    title: "Real Estate Intelligence Platform",
    slug: "real-estate-intelligence",
    description:
      "Comprehensive property data scraping system from Zillow with AI-powered scope of work generator. Features image recognition technology and GPT models for room design generation and floor plan creation.",
    tech: ["Next.js", "Django", "OpenAI", "Image Recognition", "Web Scraping"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://www.renovawise.com/",
    image: "/real-estate-intelligence.png",
    overview:
      "A real estate intelligence tool that ingests property listings from Zillow, uses computer vision to analyze room images, and generates AI-powered renovation scope of work documents and conceptual floor plans.",
    features: [
      "Automated Zillow property data scraping and enrichment",
      "Image recognition to identify room types and conditions",
      "AI scope of work generator for renovation projects",
      "GPT-powered room redesign concept generation",
      "Floor plan creation from property images",
      "Exportable reports for contractors and investors",
    ],
  },
  {
    title: "LinkedIn Ad Analytics Dashboard",
    slug: "linkedin-ad-analytics",
    description:
      "Automated ad scraping system for comprehensive company advertising analysis across LinkedIn. Built detailed analytics engine with Stripe payment integration for premium features.",
    tech: ["Python", "LinkedIn API", "Stripe", "Analytics", "Web Scraping"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "#",
    image: "/e-commerce-platform-interface-with-shopping-cart.png",
    overview:
      "A SaaS analytics tool that monitors and analyzes LinkedIn advertising activity across companies. Users can track competitor ad strategies, creative trends, and campaign patterns through an intuitive dashboard.",
    features: [
      "Automated LinkedIn ad scraping across target companies",
      "Competitor ad analysis with creative and copy breakdown",
      "Engagement trend charts and campaign timeline views",
      "Stripe payment integration for tiered subscription plans",
      "Scheduled reports delivered via email",
      "Searchable ad library with filtering by industry and date",
    ],
  },
  {
    title: "Crypto Trading Analysis Chrome Extension",
    slug: "crypto-trading-extension",
    description:
      "Published Chrome extension providing real-time AI-driven chart analysis for traders. Features OpenAI integration for pattern recognition and Firebase authentication with tiered access system.",
    tech: ["JavaScript", "Chrome API", "OpenAI", "Firebase", "Technical Analysis"],
    github: "https://github.com/Saif-Ur-Rehman0",
    demo: "https://chromewebstore.google.com/detail/crypto-trading-analysis-b/fgldmbbkdnnmjgkdldihfpieheomlkif",
    image: "/modern-analytics-dashboard.png",
    overview:
      "A published Chrome extension that brings AI-powered technical analysis directly into the browser for crypto traders. It captures chart screenshots, analyzes patterns with OpenAI vision, and delivers actionable trade insights in seconds.",
    features: [
      "One-click AI chart analysis from any crypto trading platform",
      "OpenAI vision model for candlestick and pattern recognition",
      "Support/resistance level detection and trend identification",
      "Firebase authentication with free and premium tiers",
      "Analysis history saved per user account",
      "Published on Chrome Web Store with active users",
    ],
  },
]

export const experience = [
  {
    company: "Tron AI",
    position: "Senior Software Engineer (Team Lead)",
    duration: "October 2024 - Present",
    location: "Lahore",
    description:
      "Leading delivery of production AI systems for US-based clients. Built two live AI voice agents for Pioneer Healthcare Recruitment (Retell AI + Twilio + Salesforce + Outlook) and a multi-tenant B2B voice AI SaaS platform (Auralis Labs) handling real-time appointment booking via Deepgram, ElevenLabs, and Google Calendar. Delivered an internal commissions portal syncing live Salesforce financial data through a dual-engine calculation matrix. Mentoring a team of engineers and owning end-to-end architecture, client communication, and technical delivery.",
    current: true,
  },
  {
    company: "Rolustech",
    position: "Software Engineer",
    duration: "July 2022 - September 2024",
    location: "Lahore",
    description:
      "Built and maintained full-stack web applications for international clients across healthcare, e-commerce, and SaaS verticals using Python Django and REST APIs. Led backend development on multiple concurrent projects, implemented complex business logic, and collaborated with cross-functional teams to ship high-performance, production-grade applications on schedule.",
    current: false,
  },
]
