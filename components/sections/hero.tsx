'use client'

import { motion } from 'motion/react'
import { ArrowDown, Download, ArrowUpRight, Code2, Sparkles, Terminal } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

export function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex flex-col justify-between overflow-hidden px-6 pt-32 pb-16 md:pt-40 md:pb-20"
    >
      {/* Background Decorative Architecture */}
      <div className="pointer-events-none absolute inset-0 editorial-grid [mask-image:radial-gradient(ellipse_75%_65%_at_50%_40%,black,transparent)]" />
      
      {/* Oversized Ghost Watermark */}
      <div 
        aria-hidden="true"
        className="pointer-events-none absolute top-20 left-1/2 -translate-x-1/2 select-none text-[14vw] font-black uppercase tracking-tighter text-[#0B0F19]/[0.028] leading-none whitespace-nowrap"
      >
        ENGINEER
      </div>

      <div className="relative mx-auto w-full max-w-6xl">
        {/* Eyebrow & Technical Coordinates */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-between gap-4 border-b border-[#E8E4DD] pb-4 text-xs font-mono uppercase tracking-widest text-[#555C6D]"
        >
          <div className="flex items-center gap-2">
            <span className="size-2 rounded-full bg-[#2D5BFF]" />
            <span className="font-semibold text-[#0B0F19]">PRAGATI SINGH</span>
            <span>//</span>
            <span>SOFTWARE ENGINEER</span>
          </div>
          <div className="hidden sm:flex items-center gap-3">
            <span>DELHI, IN</span>
            <span>•</span>
            <span>28.6139° N</span>
            <span>•</span>
            <span className="text-[#2D5BFF] font-semibold">CLASS OF 2027</span>
          </div>
        </motion.div>

        {/* Hero Composition: Typography & Staging */}
        <div className="mt-10 grid gap-12 lg:grid-cols-12 lg:items-end">
          <div className="lg:col-span-8">
            {/* Massive Bold Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.08 }}
              className="text-6xl font-black tracking-tight text-[#0B0F19] sm:text-7xl md:text-8xl lg:text-[6.8rem] leading-[0.92]"
            >
              PRAGATI <br />
              <span className="inline-block text-[#0B0F19]">SINGH</span>
              <span className="text-[#2D5BFF]">.</span>
            </motion.h1>

            {/* Editorial Statement with Serif Accent */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.16 }}
              className="mt-6 max-w-2xl text-2xl font-light leading-snug text-[#0B0F19] sm:text-3xl"
            >
              Building <span className="font-serif-italic font-normal text-[#2D5BFF]">real-world products</span> with scalable architecture and algorithmic problem solving.
            </motion.p>

            {/* Required Introduction Paragraph */}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.24 }}
              className="mt-5 max-w-xl text-base leading-relaxed text-[#555C6D] sm:text-lg"
            >
              Final-year B.Tech CSE student seeking software engineering opportunities to build real-world products and solve meaningful problems.
            </motion.p>
          </div>

          {/* Right Column: Prominent Metric & Highlights */}
          <div className="lg:col-span-4 flex flex-col gap-4">
            {/* 450+ DSA Prominent Card */}
            <motion.a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="group relative block overflow-hidden rounded-2xl border border-[#E8E4DD] bg-white p-6 shadow-xs transition-all hover:border-[#2D5BFF]/50 hover:shadow-md"
            >
              <div className="flex items-center justify-between text-xs font-mono uppercase tracking-wider text-[#555C6D]">
                <span className="flex items-center gap-1.5 font-semibold text-[#2D5BFF]">
                  <Code2 className="size-3.5" />
                  LeetCode Metric
                </span>
                <ArrowUpRight className="size-4 text-[#555C6D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2D5BFF]" />
              </div>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-5xl font-black tracking-tight text-[#0B0F19]">
                  450<span className="text-[#2D5BFF]">+</span>
                </span>
              </div>
              <p className="mt-1 text-sm font-medium text-[#0B0F19]">
                DSA problems solved on LeetCode
              </p>
              <p className="mt-2 text-xs leading-relaxed text-[#555C6D]">
                Strong algorithmic foundation in Data Structures, Dynamic Programming, Graphs &amp; Trees.
              </p>
            </motion.a>

            {/* Quick Spec Matrix */}
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28 }}
              className="grid grid-cols-2 gap-3"
            >
              <div className="rounded-xl border border-[#E8E4DD] bg-white/70 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#555C6D]">Degree / CGPA</span>
                <p className="mt-1 font-bold text-sm text-[#0B0F19]">B.Tech CSE • 8.7</p>
              </div>
              <div className="rounded-xl border border-[#E8E4DD] bg-white/70 p-4">
                <span className="font-mono text-[10px] uppercase tracking-wider text-[#555C6D]">Focus</span>
                <p className="mt-1 font-bold text-sm text-[#0B0F19]">Full Stack Systems</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Hero Actions & Social Links Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.36 }}
          className="mt-12 flex flex-wrap items-center justify-between gap-6 border-t border-[#E8E4DD] pt-8"
        >
          {/* Action CTAs */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2.5 rounded-full bg-[#0B0F19] px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] shadow-sm transition-all hover:bg-[#2D5BFF] hover:shadow-md"
            >
              <span>Explore Projects</span>
              <ArrowDown className="size-3.5 transition-transform group-hover:translate-y-0.5" />
            </a>
            <a
              href="/resume.pdf"
              download="Pragati_Singh_Resume.pdf"
              className="group inline-flex items-center gap-2.5 rounded-full border border-[#0B0F19] bg-white px-6 py-3.5 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] shadow-2xs transition-all hover:bg-[#0B0F19] hover:text-[#FAF9F6]"
            >
              <Download className="size-3.5" />
              <span>Download Resume</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-5 text-xs font-mono uppercase tracking-wider text-[#555C6D]">
            <a
              href={profile.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#0B0F19]"
            >
              <GithubIcon className="size-4 text-[#0B0F19]" />
              <span>GitHub ↗</span>
            </a>
            <span className="text-[#E8E4DD]">•</span>
            <a
              href={profile.links.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-[#2D5BFF]"
            >
              <LinkedinIcon className="size-4 text-[#2D5BFF]" />
              <span>LinkedIn ↗</span>
            </a>
            <span className="text-[#E8E4DD]">•</span>
            <a
              href={profile.links.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 transition-colors hover:text-amber-600"
            >
              <LeetcodeIcon className="size-4 text-amber-600" />
              <span>LeetCode ↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
