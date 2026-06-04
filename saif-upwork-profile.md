# Saif Ur Rehman — Upwork Proposal Reference Document

This document is intended to be fed to an LLM to write Upwork proposals on behalf of Saif Ur Rehman.
Read the full profile, all projects, and the proposal rules before generating any proposal.

---

## PROPOSAL WRITING RULES — FOLLOW THESE WITHOUT EXCEPTION

These rules exist because proposals that look AI-generated get ignored. Every rule below is non-negotiable.

1. No bullet points of any kind. No dashes used as list markers. No numbered lists.
2. No bold text. No italic text. No headers or section titles inside the proposal.
3. No apostrophes. Write "do not" not "don't". Write "I have" not "I've". Write "it is" not "it's". Write "that is" not "that's". Write "you are" not "you're". Write "we will" not "we'll". Write "I am" not "I'm". Write "would not" not "wouldn't". Write "cannot" not "can't". Write "they are" not "they're". No contractions of any kind.
4. No em dashes or en dashes used as separators (the — or - as punctuation between clauses). Use a period or rephrase instead.
5. No phrases like "I hope this finds you well", "I noticed your project", "I am excited to", "I would love to", "I am passionate about", "perfect fit", "look no further". These are red flags.
6. Maximum 4 to 5 paragraphs total. Hard limit.
7. Each paragraph is a maximum of 3 lines. It can be 1 or 2 lines. It cannot exceed 3.
8. The proposal must not start with "I". Open with an observation about the client's problem or situation.
9. Paragraph 1: Address the client's specific pain point or goal. Show you understood what they posted.
10. Paragraph 2: Relevant experience. Reference a specific project or result that directly maps to what they need. Be concrete, not generic.
11. Paragraph 3: How you will approach their specific project. Technical specifics if relevant. Not a generic process description.
12. Paragraph 4 (optional): A secondary credential or relevant detail that adds weight.
13. Paragraph 5 (closing): One short line. A simple next step or question that opens a conversation.
14. Write in plain conversational English. First person but not self-congratulatory. Confident, not salesy.
15. Never mention "AI-generated", "LLM", or anything that reveals the proposal was assisted.
16. Tailor every proposal. Do not reuse the same paragraph across proposals. Reference specifics from the job post.

---

## PROFILE SUMMARY

Saif Ur Rehman is a Full Stack AI Engineer based in Lahore, Pakistan. He builds production AI systems for US-based clients across healthcare, fintech, real estate, optometry, mortgage, and e-commerce. His work spans the full stack from architecture and backend APIs to React/Next.js frontends and AWS deployment. He has shipped AI voice agents, multi-tenant SaaS platforms, RAG pipelines, automated compliance systems, document generation services, and ML trading platforms. All of his portfolio projects are live and actively used by real clients, not demos or side projects.

He works directly with founders and business owners, typically owning the entire project end to end including architecture decisions, Salesforce integrations, third-party APIs, and deployment. He has strong Salesforce integration experience (REST API, SOQL, Apex triggers, webhooks, OAuth2), which is a differentiator for US healthcare and business clients on Upwork.

Portfolio: https://saif.trontech.ai
Upwork: https://www.upwork.com/freelancers/~01b3d4ebea7a54ae9a/
GitHub: https://github.com/Saif-Ur-Rehman0

---

## WORK EXPERIENCE

### Tron AI — Senior Software Engineer, Team Lead (Current)
Lahore, Pakistan. Currently leading delivery of production AI systems for US-based clients. Responsible for end-to-end architecture, backend development, frontend, Salesforce integrations, third-party API connections, and AWS deployment. Managing and mentoring a team of engineers. Clients include Pioneer Healthcare Recruitment Agency (multiple systems), Sentire Systems (B2B SaaS), XA Financial Services (True Mortgages), and others.

### Rolustech — Software Engineer (Previous Role)
Lahore, Pakistan. Built and maintained full-stack web applications for international clients across healthcare, e-commerce, and SaaS verticals using Python Django and REST APIs. Led backend development on multiple concurrent projects, designed data models, implemented complex business logic, and integrated third-party APIs.

---

## EDUCATION

Bachelor of Computer Science, FAST NUCES, Lahore.

---

## TECHNICAL SKILLS

AI and Machine Learning: OpenAI GPT-4o, GPT-5, Anthropic Claude, LSTM, TensorFlow, RAG Systems, LangChain, Pinecone, Prompt Engineering, NLP, Deep Learning, CrewAI, Multi-Agent Systems, Hugging Face Transformers.

Voice AI: Retell AI, Twilio, Deepgram, ElevenLabs, WebSocket audio streaming, real-time STT/TTS pipelines.

Frontend: Next.js 14/15, React, TypeScript, JavaScript, Tailwind CSS, responsive design.

Backend: Python FastAPI, Django, Flask, Node.js, Express.js, REST APIs, GraphQL, WebSockets.

Databases: PostgreSQL, Supabase, MySQL, MongoDB, Redis, Firebase.

CRM and Integrations: Salesforce API, SOQL, Apex triggers, GoHighLevel API, Google Calendar API, Microsoft Graph API, Stripe, Coinbase Advanced Trade API, Zapier.

Automation: Playwright, Bright Data, 2Captcha, python-docx, LibreOffice headless, WeasyPrint, n8n.

Cloud and DevOps: AWS (EC2, ECS, S3, Lambda, CloudFront, Route 53), Docker, Vercel, GitHub Actions, CI/CD pipelines.

---

## PROJECTS — FULL CASE STUDIES

---

### Project 1: Pioneer Voice AI Platform

Live URL: https://voice-ai-live.pioneercommission.com/
Client: Pioneer Healthcare Recruitment Agency (US-based)
Tech: Retell AI, Twilio, Next.js, Supabase, Salesforce API, Microsoft Graph API, Outlook API

What was built: A full AI voice agent platform with two production voice agents and a comprehensive admin dashboard for Pioneer Healthcare Recruitment. Both agents are live and actively used by the Pioneer internal team.

Agent 1: Penny, After-Hours Inbound AI Receptionist. Penny handles all inbound calls after business hours. She collects 14 or more data points from each caller including name, profession, assignment type, preferred location, start date, and experience level. She detects whether the caller is a job candidate, a client, or a payroll inquiry and routes accordingly. She looks up existing Salesforce contacts by phone and email and creates activity tasks on every call. She updates Salesforce fields including discipline, job type, desired states, and available start date. She sends a personalized follow-up email and SMS to every caller with relevant job links. She schedules Microsoft Teams calendar events with the assigned recruiter and creates Salesforce follow-up tasks with one-hour reminders. She runs a 12-month last-activity check and flags long-inactive contacts to the lead distribution team.

Agent 2: Re-Engagement Agent, Outbound Campaigns. This agent proactively calls cold and inactive candidates who have had no activity in six or more months from Salesforce. It follows a structured multi-turn conversational flow, updates candidate profiles, and triggers recruiter follow-up. It queries Salesforce for Cold, Warm, and New Lead contacts and respects Do Not Contact flags. It supports batch scheduling of up to 50 candidates per batch at configurable times. It sends a 30-minute advance notification to all portal admins before each batch dispatches. It captures updated profile data including availability, assignment type, discipline, and license status. It enforces opt-out compliance by setting Salesforce Do Not Contact and marking status as Unsubscribed on any opt-out. Every call outcome is logged as a Salesforce activity task.

Admin Dashboard Features: Call logs with recordings, transcripts, and per-call outcome status. Scheduled events view synced with Microsoft Outlook Calendar. Call analytics dashboard showing volume, duration, outcomes, and booking trends. Knowledge base management allowing attaching and updating knowledge bases per agent. User management with Admin and Viewer role permissions. Batch scheduler for queuing re-engagement campaigns with configurable batch size and call times. Pre-dispatch notification system sending email and in-portal alerts 30 minutes before each batch.

---

### Project 2: Sentire Systems — Multi-Tenant Voice AI Platform

Live URL: https://www.sentiresystems.com/
Test phone: +1 (857) 767-7618
Tech: Deepgram, ElevenLabs, Twilio, Next.js, FastAPI, OpenAI GPT-4o, Supabase, Google Calendar API, Redis, AWS

What was built: A production-grade B2B multi-tenant conversational AI voice platform. Each business that onboards gets a dedicated Twilio phone number, a fully configurable AI voice agent with a custom personality, real-time Google Calendar integration for appointment booking, and a white-label dashboard. Adding a new industry vertical such as dental, med spa, or salon is a configuration change, not a code change.

Voice Pipeline (step by step): Caller dials the tenant's dedicated Twilio number. Twilio streams call audio over WebSocket to the FastAPI orchestrator. Deepgram STT transcribes speech in real time with under 300ms latency. OpenAI GPT-4o handles conversation and extracts booking intent via a slot-filling state machine. Google Calendar FreeBusy API checks real-time availability and books the appointment. ElevenLabs streams a natural-sounding voice response back to the caller. Full transcript, outcome, and call metadata are saved to Supabase in real time.

User Roles: Platform Admin (Sentire Systems team) manages all tenant accounts, assigns Twilio numbers, views aggregate analytics, and monitors system health. Business Owner has full control over their own agent including personality, system prompt, voice, Google Calendar connection, call logs, and booking rules. Viewer has read-only access to call logs, transcripts, and analytics.

Key technical achievements: Sub-2-second voice response latency via parallel streaming pipeline. 30 or more concurrent calls per instance with horizontal scaling. Multi-tenant data isolation enforced via Supabase Row-Level Security. White-label dashboard with per-tenant branding.

---

### Project 3: Trade Gekko — AI Crypto Trading Platform

Live URL: https://www.tradegekko.com/
Tech: Django, Next.js, TensorFlow, Keras, LSTM, Coinbase Advanced Trade API, Stripe, PostgreSQL, APScheduler, Redis

What was built: A full-stack SaaS platform where subscribers connect their Coinbase account and deploy autonomous AI trading bots. The platform trains 42 LSTM models daily across 6 crypto assets (BTC, ETH, SOL, XRP, DOGE, LINK) over 7 timeframes (1 minute through 1 day). Signals are generated every 15 minutes using a hybrid ML plus technical analysis pipeline.

Signal engine: LSTM predictions combined with RSI, MACD, Bollinger Bands, Fibonacci retracements, ATR, and news sentiment scoring. Minimum signal quality filters of 35 percent confidence, trend strength 2 percent or more, and risk-reward ratio 1.2 or better before a trade fires.

Bot lifecycle: Autonomous BUY to position management to SELL with trailing stop-loss and take-profit. Dynamic position sizing scales with ML confidence score, drawdown streak, and live volatility. Multi-timeframe confirmation guards prevent lower timeframe BUY signals when a higher timeframe shows a SELL.

Platform features: Live Coinbase Advanced Trade order execution with Fernet-encrypted per-user API keys. Real-time PnL streaming via SSE. Backtesting engine with historical analytics. Timeframe performance optimizer runs daily. Stripe subscription tiers (Starter, Pro, Elite) with plan-gated bot access and webhook-synced status.

---

### Project 4: True Mortgages — AI-Powered Mortgage Platform

Live URL: https://www.truemortgages.com/
Client: Xavier Alcala, XA Financial Services LLC (US-based)
Tech: FastAPI, Next.js, LangChain, Anthropic Claude, Pinecone, Supabase, Deepgram, GoHighLevel API v2, n8n, AWS ECS, Redis

What was built: A centralized AI brain for a US mortgage business. The system ingests all GoHighLevel call recordings, SMS threads, and email conversations. Deepgram transcribes every call. LangChain chunks and embeds all content into Pinecone. The RAG pipeline trains the AI on the owner's actual communication style drawn from 15,000 or more real conversations. When a lead texts the GHL number at night, the AI responds through GHL the way the owner would, using his tone, phrasing, and objection-handling patterns.

AI response pipeline (step by step): Lead sends SMS to GHL number. GHL fires a webhook to n8n. n8n forwards the payload to FastAPI. FastAPI queries Pinecone for the most relevant past responses and conversation examples. FastAPI queries Supabase for the lead's full history and context. LangChain constructs the prompt combining RAG context, lead history, style guide, and topic guardrails. Anthropic Claude generates the response. FastAPI returns it to n8n, n8n pushes it through GHL, and the SMS is delivered. The conversation is logged in Supabase and re-vectorized into Pinecone for continuous learning.

Admin portal features: Natural language chat interface to query the AI brain. Pattern analysis engine surfacing top objections, conversion scripts, rep performance differences, and lead drop-off points. Content generation module for social posts, email sequences, and SMS copy in brand voice. Dashboard with AI activity feed, response metrics, lead engagement stats, and conversion trends. Multi sub-account support with full data isolation via Supabase Row-Level Security.

Website and team system: truemortgages.com built with Next.js SSR, schema markup, and SEO. Lead capture forms pipe directly into GHL. Templated sub-website system for each team member, each getting their own domain with same branding but swappable name, bio, headshot, and contact info using wildcard DNS routing. This also supports A2P SMS registration requirements.

Milestone 3 (Arrive LOS): LangChain extracts 1003 mortgage application fields directly from conversation history with confidence scoring. Fields below 90 percent confidence are flagged for human review before submission to Arrive. No manual re-entry of data from CRM to LOS.

AI safety guardrails: System prompt hard-blocks rate quotes, approval promises, and legal advice. Hallucination confidence scoring routes anything below 85 percent confidence to human review queue. Angry or compliance-sensitive conversations trigger human escalation. Full audit trail of every AI message sent including the full prompt and retrieved context.

---

### Project 5: Pioneer Commissions Portal

Live URL: https://pioneercommission.com/
Client: Pioneer Healthcare Recruitment Agency (US-based)
Tech: Next.js, FastAPI, PostgreSQL, Redis, Salesforce API, Microsoft Graph API, TypeScript

What was built: A commission tracking and visibility platform for a healthcare staffing agency. Before this system, recruiters and account managers had no transparent real-time view of their own earnings and finance had no audit trail on how commissions were calculated.

Calculation engines: Recruiter engine uses a dual-axis matrix with 5 cumulative hours tiers crossed against 8 gross margin brackets. Account manager engine uses a gross profit-based tier commission with separate rate tables. The two engines run independently and produce accurate real-time figures for each individual.

Data and sync: Syncs Financial Record data live from Salesforce via REST API. Webhook-driven recalculation triggers automatically on Salesforce record changes. Redis caching for real-time commission estimates without repeated heavy database queries.

Edge cases handled: Split commission tracking across shared deals with per-user percentage, approval workflow, and status tracking (pending, approved, paid, disputed). Candidate and client reassignment management ensuring commissions are correctly re-attributed when ownership changes. Business development bonus tracking and quarterly bonus calculations. Full commission audit trail where every calculation is versioned and explainable.

Dashboard views: Weekly, month-to-date, and year-to-date dashboards with year-over-year comparison and 26-week trend charts. Tier performance chart showing live hours and gross margin versus tier thresholds with active tier highlighted. Three-tier role system: Admin or Superuser with full access, Manager who can see direct reports, and individual Recruiter or Account Manager who sees only their own data.

---

### Project 6: Pioneer License Verification Agent

Live URL: https://license.pioneercommission.com/
Client: Pioneer Healthcare Recruitment Agency (US-based)
Tech: FastAPI, Playwright, Bright Data, Next.js, Supabase, Salesforce API, AWS S3, TypeScript, Anthropic Claude

What was built: A three-service automated compliance system that eliminates manual license verification entirely. Before this system, Pioneer's compliance team was manually checking every healthcare candidate's license on state board websites with no audit trail.

The three services: A FastAPI backend that orchestrates the flow and owns the Salesforce integration. A headless Playwright scraper service that navigates state and national licensing boards and bypasses CAPTCHAs. A Next.js compliance dashboard at license.pioneercommission.com where the team monitors every verification job, sees PDF evidence, and receives real-time notifications.

Pipeline (step by step): A Salesforce Apex trigger fires when a Job Applicant advances to Submitted to Account Manager and their license is unverified. A LicenseVerificationCallout Apex class POSTs the job applicant ID and contact ID to the backend webhook endpoint with HMAC signature verification. The backend returns 200 immediately and runs verification as a detached asyncio background task to eliminate any Salesforce timeout risk. The backend fetches the Job Applicant and Contact from Salesforce concurrently to retrieve discipline, setting, license states, and license number. A three-key site key is built in the format discipline underscore setting underscore state. Multi-state candidates get one verification job per state. Clinical disciplines auto-merge national registry entries on top of state results. The backend posts to the scraper service which resolves the site key to one to three target URLs. Playwright launches with a fresh Bright Data residential session for CAPTCHA-protected sites or a local Chromium for plain boards. Each scraper navigates the board, searches by name and license number, extracts status and expiration date, and captures a full-page PDF screenshot as compliance evidence. The PDF is uploaded to AWS S3 and a 7-day presigned URL is returned. Results are saved to Supabase, License records are created in Salesforce with status and expiration, and the PDF is attached as a Salesforce ContentDocument. The License Verified field on the Job Applicant is set to true if any result is active and not expired.

Coverage: 13 discipline types supported: PT, PTA, OT, COTA, SLP, SLPA, RN, LPN, BCBA, RBT, NCSP, Psychologist, and SPEDTeacher across clinical and school settings. National registry coverage: ASHA for SLP and SLPA, NBCOT for OT and COTA, Nursys NLC for RN and LPN, PT Compact for PT and PTA, NASP NCSP for Psychologist, and BACB for BCBA and RBT.

CAPTCHA bypass stack: Bright Data Scraping Browser handles Cloudflare, Turnstile, reCAPTCHA, hCaptcha, and AWS WAF. 2Captcha Turnstile solver is used for BACB and CA DCA. 2Captcha reCAPTCHA solver is used for Nursys. Fresh residential IP per session prevents re-block. playwright-stealth patches navigator.webdriver, WebGL vendor, sec-ch-ua headers, and Chrome runtime flags on non-Bright Data scrapers.

Result model: 6 statuses: verified, expired, inactive, not found, captcha, site unavailable. Each maps to a distinct Salesforce and dashboard outcome. Real-time dashboard notifications fire for success, CAPTCHA block, or no-record outcomes.

---

### Project 7: Pioneer Submissions Document Automation

Client: Pioneer Healthcare Recruitment Agency (US-based)
Tech: FastAPI, Python, Salesforce API, python-docx, LibreOffice headless, WeasyPrint, Jinja2, SOQL

What was built: A Salesforce-integrated FastAPI service that auto-generates branded candidate submission documents (PDF and DOCX) for Pioneer Healthcare Recruitment. Before this system, recruiters were manually assembling candidate documents from multiple Salesforce screens, which was slow and error-prone.

How it works: A recruiter clicks Generate Submission Doc on a Salesforce Job Applicant record. Salesforce opens the FastAPI endpoint. The service authenticates via OAuth2 Client Credentials and queries the Job Applicant record for all profile fields. Parallel SOQL queries fetch Employment History, Educational History, and References from three related Salesforce objects. A stage gate check returns a branded error page if the Job Applicant is not yet at the Submitted to Account Manager stage. All data is injected into a Jinja2 HTML form where the recruiter can review and edit any field before generating. On submit, python-docx builds the DOCX with exact Pioneer branding including orange border, Inter font, blue-grey headings, and yellow education band. LibreOffice headless converts the DOCX to PDF with full fidelity. WeasyPrint serves as the fallback if LibreOffice is unavailable. The completed file streams directly to the recruiter's browser as a download.

Apex integration: A JobApplicantValidation Apex trigger blocks any stage advancement to Submitted to Account Manager unless all 10 or more required fields and at least one Employment record and one Education record exist. This means the document generator never receives incomplete data.

---

### Project 8: TheRightContact.com — AI Contact Lens Platform

Live URL: https://www.therightcontact.com/
Tech: Next.js, FastAPI, GPT-5, RAG, AWS, Google Sheets API, web scraping, image analysis

What was built: An AI-powered platform for eye care professionals (optometrists and ophthalmologists) delivering accurate real-time contact lens information. The platform combines a GPT-5 conversational interface with a custom NLP-to-Excel query engine that translates natural language into precise spreadsheet queries across thousands of lens records.

Data pipeline: Continuously synced from Google Sheets, PDFs, and 40 or more industry web sources. Covers the full range of contact lens specifications and fitting parameters.

Key features: Custom NLP-to-Excel query engine that resolves natural language questions against live spreadsheet data. GPT-5 conversational interface with source-backed answers for clinical queries. Corneal topography image analysis with AI-powered interpretation of diagnostic images. Multi-tier subscription management with role-based feature access. Admin dashboard to manage data sources, monitor usage, and update training content. CI/CD pipeline on AWS for automated deployments and zero-downtime updates. HIPAA-compliant infrastructure.

---

### Project 9: PRD Generator Platform

Live URL: https://www.saasbeautiful.ai/signup
Tech: Django, Next.js, OpenAI, JIRA API, Figma API

What was built: A platform that automates the creation of Product Requirement Documents. Product managers answer a guided questionnaire and the system generates a structured PRD, automatically creates JIRA epics and stories from the PRD content, and triggers Figma design stubs, all in one workflow.

Features: Guided questionnaire flow to capture product context. AI-generated PRD with structured sections and acceptance criteria. Automatic JIRA epic and story creation from PRD content. Figma API integration for design stub generation. Version history and collaborative editing. Export to PDF and Confluence-compatible formats.

---

### Project 10: Real Estate Intelligence Platform

Live URL: https://www.renovawise.com/
Tech: Next.js, Django, OpenAI, image recognition, web scraping

What was built: A real estate intelligence tool that ingests property listings from Zillow, uses computer vision to analyze room images, and generates AI-powered renovation scope of work documents and conceptual floor plans for contractors and investors.

Features: Automated Zillow property data scraping and enrichment. Image recognition to identify room types and conditions. AI scope of work generator for renovation projects. GPT-powered room redesign concept generation. Floor plan creation from property images. Exportable reports for contractors and investors.

---

### Project 11: LinkedIn Ad Analytics Dashboard

Tech: Python, LinkedIn API, Stripe, web scraping
(Internal SaaS tool, no public demo)

What was built: A SaaS analytics tool that monitors and analyzes LinkedIn advertising activity across companies. Users track competitor ad strategies, creative trends, and campaign patterns through an intuitive dashboard.

Features: Automated LinkedIn ad scraping across target companies. Competitor ad analysis with creative and copy breakdown. Engagement trend charts and campaign timeline views. Stripe payment integration for tiered subscription plans. Scheduled reports delivered via email. Searchable ad library with filtering by industry and date.

---

### Project 12: Crypto Trading Analysis Chrome Extension

Live URL: https://chromewebstore.google.com/detail/crypto-trading-analysis-b/fgldmbbkdnnmjgkdldihfpieheomlkif
Tech: JavaScript, Chrome Extension API, OpenAI, Firebase

What was built: A published Chrome extension that brings AI-powered technical analysis directly into the browser for crypto traders. It captures chart screenshots, analyzes patterns with OpenAI vision, and delivers actionable trade insights in seconds.

Features: One-click AI chart analysis from any crypto trading platform. OpenAI vision model for candlestick and pattern recognition. Support and resistance level detection and trend identification. Firebase authentication with free and premium tiers. Analysis history saved per user account. Published on Chrome Web Store with active users.

---

## PROPOSAL STRUCTURE TEMPLATE

Use this as a mental framework, not as a fill-in-the-blank template. Every proposal must be tailored.

Paragraph 1 (2 to 3 lines): Show you understood the client's actual problem or goal. Reference something specific from their job post. Do not introduce yourself here.

Paragraph 2 (2 to 3 lines): One specific project from the profile above that is directly relevant to what they need. Include a concrete detail such as a technology, a result, or a specific mechanism that matches their use case.

Paragraph 3 (2 to 3 lines): Your specific approach to their project. What you would build, which tools, and why. Do not use generic phrases like "I will follow best practices" or "I have a proven process".

Paragraph 4 (1 to 2 lines, optional): A second relevant credential or a specific technical clarification that adds weight to the proposal.

Paragraph 5 (1 line): A simple, direct call to action or a specific question about their project that opens a conversation.

---

## SAMPLE PROPOSAL — FOR REFERENCE ONLY

(This is an example of the style and structure. Do not copy this. Generate fresh proposals tailored to each job post.)

Job: Build an AI voice agent that handles inbound calls and books appointments for a dental clinic

---

Most voice AI demos sound robotic because they treat every caller the same way regardless of context. A dental clinic has a specific set of scenarios including new patient inquiries, rescheduling existing appointments, emergency calls, and insurance questions, and a good agent needs to handle each one differently.

I built a multi-tenant voice AI platform (Sentire Systems) that handles exactly this type of workflow. Each tenant gets a Twilio number, a Deepgram STT pipeline under 300ms, GPT-4o conversation handling with slot-filling for appointment details, and Google Calendar booking in real time. The platform is live and handling calls for multiple businesses right now.

For your clinic I would configure the agent with the specific intake flows you use, connect it to your calendar system, and set up escalation triggers for emergency calls so those always route to a human. The whole build including testing and a review session would take around two weeks depending on how complex your scheduling rules are.

I have also handled Twilio number provisioning, custom voice selection via ElevenLabs, and per-tenant analytics dashboards if any of those are relevant to what you are building.

Do you have an existing calendar system you need to connect to, or is that part of the scope as well?

---

End of document.
