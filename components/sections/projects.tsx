'use client'

import { motion } from 'motion/react'
import { ExternalLink, ArrowUpRight, CheckCircle2, FileSearch, LineChart, ShieldCheck, Database, GitBranch } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      {/* Editorial Header */}
      <div className="border-b border-[#E8E4DD] pb-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555C6D]">
          <span className="text-[#2D5BFF] font-semibold">03</span>
          <span>//</span>
          <span>SELECTED CASE STUDIES</span>
        </div>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl">
          FEATURED <span className="font-serif-italic font-normal text-[#2D5BFF]">WORK.</span>
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#555C6D]">
          Detailed case studies of engineered systems featuring verified production deployments, specialized algorithms, and full-stack implementations.
        </p>
      </div>

      {/* Projects Container */}
      <div className="mt-16 space-y-24">
        {/* =================================================================== */}
        {/* CASE STUDY 01: JobQuest */}
        {/* =================================================================== */}
        <article className="group relative rounded-3xl border border-[#E8E4DD] bg-white p-8 shadow-xs transition-all duration-300 hover:border-[#2D5BFF]/50 hover:shadow-lg lg:p-12">
          {/* Subtle Accent Glow */}
          <div className="pointer-events-none absolute -right-20 -top-20 size-72 rounded-full bg-blue-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left: Project Narrative & Specs */}
            <div className="lg:col-span-7 flex flex-col justify-between">
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2D5BFF]">
                    CASE STUDY // 01
                  </span>
                  <span className="font-mono text-xs text-[#555C6D]">
                    Python • FastAPI • React
                  </span>
                </div>

                {/* Project Title */}
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl font-extrabold tracking-tight text-[#0B0F19] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                    JobQuest
                  </h3>
                </div>

                {/* Exact Description */}
                <p className="mt-4 text-base leading-relaxed text-[#555C6D] sm:text-lg">
                  An intelligent resume analyzer that compares resumes with job descriptions using keyword and skill matching to identify skill gaps, calculate a match score, and provide personalized recommendations.
                </p>

                {/* Key Features Matrix */}
                <div className="mt-7">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0B0F19]">
                    Engineered Capabilities
                  </span>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      'Resume Analysis',
                      'Skill Extraction',
                      'Keyword Matching',
                      'Skill Gap Detection',
                      'Match Score',
                      'Personalized Recommendations',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs font-medium text-[#0B0F19]">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#2D5BFF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Python', 'FastAPI', 'Flask', 'React', 'spaCy', 'RapidFuzz'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#E8E4DD] bg-[#FAF9F6] px-3 py-1 font-mono text-xs font-medium text-[#0B0F19]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-[#E8E4DD] pt-6">
                <a
                  href="https://job-quest-chi.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View JobQuest Live Demo"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] shadow-xs transition-all hover:bg-[#2D5BFF] hover:shadow-md"
                >
                  <span>Live Application</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <a
                  href="https://github.com/singh7pragati/jobQuest"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View JobQuest GitHub Repository"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B0F19] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] shadow-2xs transition-all hover:bg-[#FAF9F6]"
                >
                  <GithubIcon className="size-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>

            {/* Right: Bespoke Visual Interactive Preview */}
            <div className="lg:col-span-5">
              <div className="overflow-hidden rounded-2xl border border-[#E8E4DD] bg-[#FAF9F6] p-5 shadow-2xs transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Visual Window Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-3 text-xs font-mono text-[#555C6D]">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-semibold text-[#0B0F19]">jobquest.engine</span>
                  </div>
                  <span className="rounded bg-emerald-100 px-2 py-0.5 text-[10px] font-semibold text-emerald-800">
                    MATCH ENGINE
                  </span>
                </div>

                {/* Simulated Analysis Dashboard */}
                <div className="mt-4 space-y-3.5">
                  {/* Match Score Display */}
                  <div className="rounded-xl border border-[#E8E4DD] bg-white p-4">
                    <div className="flex items-center justify-between text-xs">
                      <span className="font-mono uppercase text-[#555C6D]">Calculated Match Score</span>
                      <span className="font-mono font-bold text-[#2D5BFF]">88%</span>
                    </div>
                    <div className="mt-2 h-2 w-full overflow-hidden rounded-full bg-[#FAF9F6]">
                      <div className="h-full w-[88%] rounded-full bg-[#2D5BFF]" />
                    </div>
                  </div>

                  {/* Skill Gap Detection */}
                  <div className="rounded-xl border border-[#E8E4DD] bg-white p-4">
                    <span className="block font-mono text-[10px] uppercase text-[#555C6D]">
                      Extracted &amp; Matched Keywords
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-[#2D5BFF]">
                        ✓ Python
                      </span>
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-[#2D5BFF]">
                        ✓ REST APIs
                      </span>
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-[#2D5BFF]">
                        ✓ React
                      </span>
                      <span className="rounded bg-blue-50 px-2 py-0.5 text-[11px] font-medium text-[#2D5BFF]">
                        ✓ Data Structures
                      </span>
                    </div>
                  </div>

                  {/* Personalized Recommendations */}
                  <div className="rounded-xl border border-[#E8E4DD] bg-white p-4">
                    <span className="block font-mono text-[10px] uppercase text-[#555C6D]">
                      Recommendation Engine
                    </span>
                    <p className="mt-1 text-xs text-[#0B0F19]">
                      Targeted suggestions to bridge identified skill gaps with job requirements.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </article>

        {/* =================================================================== */}
        {/* CASE STUDY 02: CareerTrack */}
        {/* =================================================================== */}
        <article className="group relative rounded-3xl border border-[#E8E4DD] bg-white p-8 shadow-xs transition-all duration-300 hover:border-[#2D5BFF]/50 hover:shadow-lg lg:p-12">
          {/* Subtle Accent Glow */}
          <div className="pointer-events-none absolute -left-20 -top-20 size-72 rounded-full bg-blue-500/5 blur-3xl transition-opacity duration-300 group-hover:opacity-100" />

          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            {/* Left / Top on Mobile: Bespoke Visual Interactive Preview */}
            <div className="lg:col-span-5 order-2 lg:order-1">
              <div className="overflow-hidden rounded-2xl border border-[#E8E4DD] bg-[#FAF9F6] p-5 shadow-2xs transition-transform duration-300 group-hover:scale-[1.01]">
                {/* Visual Window Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-3 text-xs font-mono text-[#555C6D]">
                  <div className="flex items-center gap-1.5">
                    <span className="size-2.5 rounded-full bg-red-400" />
                    <span className="size-2.5 rounded-full bg-amber-400" />
                    <span className="size-2.5 rounded-full bg-emerald-400" />
                    <span className="ml-2 font-semibold text-[#0B0F19]">careertrack.app</span>
                  </div>
                  <span className="rounded bg-blue-100 px-2 py-0.5 text-[10px] font-semibold text-blue-800">
                    FULL-STACK MERN
                  </span>
                </div>

                {/* Simulated Pipeline Dashboard */}
                <div className="mt-4 space-y-3.5">
                  {/* Pipeline Stats */}
                  <div className="grid grid-cols-2 gap-2">
                    <div className="rounded-xl border border-[#E8E4DD] bg-white p-3 text-center">
                      <span className="font-mono text-[10px] uppercase text-[#555C6D]">Active Apps</span>
                      <p className="mt-0.5 font-bold text-lg text-[#0B0F19]">12</p>
                    </div>
                    <div className="rounded-xl border border-[#E8E4DD] bg-white p-3 text-center">
                      <span className="font-mono text-[10px] uppercase text-[#555C6D]">Interviews</span>
                      <p className="mt-0.5 font-bold text-lg text-[#2D5BFF]">3</p>
                    </div>
                  </div>

                  {/* Stage Tracking */}
                  <div className="rounded-xl border border-[#E8E4DD] bg-white p-4">
                    <span className="block font-mono text-[10px] uppercase text-[#555C6D]">
                      Recruitment Pipeline Status
                    </span>
                    <div className="mt-2.5 space-y-2">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#0B0F19]">Google — Technical Screen</span>
                        <span className="rounded bg-blue-50 px-2 py-0.5 text-[10px] font-semibold text-[#2D5BFF]">
                          In Progress
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-medium text-[#0B0F19]">Amazon — Final Round</span>
                        <span className="rounded bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold text-emerald-700">
                          Scheduled
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Architecture & Auth Badge */}
                  <div className="flex items-center justify-between rounded-xl border border-[#E8E4DD] bg-white p-3 text-xs">
                    <span className="flex items-center gap-1.5 font-medium text-[#0B0F19]">
                      <ShieldCheck className="size-4 text-emerald-600" />
                      JWT Authentication
                    </span>
                    <span className="flex items-center gap-1 font-mono text-[10px] text-[#555C6D]">
                      <Database className="size-3 text-[#2D5BFF]" />
                      MongoDB Atlas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Right / Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between order-1 lg:order-2">
              <div>
                {/* Meta Header */}
                <div className="flex items-center justify-between border-b border-[#E8E4DD] pb-4">
                  <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#2D5BFF]">
                    CASE STUDY // 02
                  </span>
                  <span className="font-mono text-xs text-[#555C6D]">
                    Next.js • TypeScript • MongoDB
                  </span>
                </div>

                {/* Project Title */}
                <div className="mt-6 flex items-baseline justify-between gap-4">
                  <h3 className="text-3xl font-extrabold tracking-tight text-[#0B0F19] transition-transform duration-300 group-hover:translate-x-1 sm:text-4xl">
                    CareerTrack
                  </h3>
                </div>

                {/* Exact Description */}
                <p className="mt-4 text-base leading-relaxed text-[#555C6D] sm:text-lg">
                  A full-stack job and internship tracking platform that helps users organize applications, track recruitment progress, manage goals, and monitor their career journey through a centralized dashboard.
                </p>

                {/* Key Features Matrix */}
                <div className="mt-7">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#0B0F19]">
                    Platform Highlights
                  </span>
                  <div className="mt-3 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                    {[
                      'Application Tracking',
                      'Recruitment Pipeline',
                      'Dashboard Analytics',
                      'Goal Management',
                      'Status Tracking',
                      'CRUD Operations',
                      'Responsive UI',
                      'User Authentication',
                    ].map((feature) => (
                      <div key={feature} className="flex items-center gap-2 text-xs font-medium text-[#0B0F19]">
                        <CheckCircle2 className="size-3.5 shrink-0 text-[#2D5BFF]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technologies */}
                <div className="mt-7 flex flex-wrap gap-2">
                  {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'MongoDB', 'Node.js'].map((tech) => (
                    <span
                      key={tech}
                      className="rounded-lg border border-[#E8E4DD] bg-[#FAF9F6] px-3 py-1 font-mono text-xs font-medium text-[#0B0F19]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-9 flex flex-wrap items-center gap-3 border-t border-[#E8E4DD] pt-6">
                <a
                  href="https://career-track-one.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CareerTrack Live Demo"
                  className="group/btn inline-flex items-center gap-2 rounded-full bg-[#0B0F19] px-6 py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] shadow-xs transition-all hover:bg-[#2D5BFF] hover:shadow-md"
                >
                  <span>Live Application</span>
                  <ExternalLink className="size-3.5 transition-transform group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5" />
                </a>
                <a
                  href="https://github.com/singh7pragati/careerTrack"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="View CareerTrack GitHub Repository"
                  className="inline-flex items-center gap-2 rounded-full border border-[#0B0F19] bg-white px-5 py-3 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] shadow-2xs transition-all hover:bg-[#FAF9F6]"
                >
                  <GithubIcon className="size-4" />
                  <span>Source Code</span>
                </a>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  )
}
