'use client'

import { motion } from 'motion/react'
import { ArrowUpRight, CheckCircle2, Terminal, Layers, Cpu } from 'lucide-react'
import { profile } from '@/lib/data'

const pillars = [
  {
    num: '01',
    title: 'Algorithmic Problem Solving',
    desc: '450+ DSA problems solved on LeetCode with strong intuition for data structures, algorithms, and complexity optimization.',
    icon: Terminal,
  },
  {
    num: '02',
    title: 'Full Stack Engineering',
    desc: 'End-to-end product development using modern React, Next.js, TypeScript, Node.js, Express, and database systems.',
    icon: Layers,
  },
  {
    num: '03',
    title: 'Core Computer Science',
    desc: 'Firm theoretical and practical foundations in DBMS, Operating Systems, Computer Networks, and Object-Oriented Architecture (8.7 CGPA).',
    icon: Cpu,
  },
]

export function About() {
  return (
    <section id="about" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      {/* Editorial Header */}
      <div className="border-b border-[#E8E4DD] pb-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555C6D]">
          <span className="text-[#2D5BFF] font-semibold">01</span>
          <span>//</span>
          <span>THE PHILOSOPHY &amp; BACKGROUND</span>
        </div>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl">
          ABOUT <span className="font-serif-italic font-normal text-[#2D5BFF]">ME.</span>
        </h2>
      </div>

      {/* Main Editorial Grid */}
      <div className="mt-12 grid gap-12 lg:grid-cols-12">
        {/* Left Column: Manifesto & Narrative */}
        <div className="lg:col-span-7 flex flex-col justify-between">
          <div>
            <p className="text-2xl font-light leading-snug text-[#0B0F19] sm:text-3xl">
              I am passionate about turning complex problems into <span className="font-serif-italic font-normal text-[#2D5BFF]">clean, high-performance web products</span> that deliver tangible value.
            </p>
            <p className="mt-6 text-base leading-relaxed text-[#555C6D] sm:text-lg">
              {profile.about}
            </p>
            <p className="mt-4 text-base leading-relaxed text-[#555C6D]">
              Whether breaking down complex graph algorithms or architecting full-stack web applications with Next.js, Node.js, and MongoDB, my focus is always on code quality, scalability, and seamless user experiences.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-6 border-t border-[#E8E4DD] pt-6 font-mono text-xs uppercase tracking-wider text-[#555C6D]">
            <div>
              <span className="block text-[10px] text-[#555C6D]/70">Location</span>
              <span className="font-semibold text-[#0B0F19]">{profile.location}</span>
            </div>
            <span className="text-[#E8E4DD]">•</span>
            <div>
              <span className="block text-[10px] text-[#555C6D]/70">Status</span>
              <span className="font-semibold text-[#2D5BFF]">Final-Year Student</span>
            </div>
            <span className="text-[#E8E4DD]">•</span>
            <div>
              <span className="block text-[10px] text-[#555C6D]/70">Graduation</span>
              <span className="font-semibold text-[#0B0F19]">2027</span>
            </div>
          </div>
        </div>

        {/* Right Column: Engineering Pillars */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          {pillars.map((pillar) => {
            const Icon = pillar.icon
            return (
              <div
                key={pillar.num}
                className="group rounded-2xl border border-[#E8E4DD] bg-white p-6 shadow-2xs transition-all hover:border-[#2D5BFF]/40 hover:shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs font-semibold text-[#2D5BFF]">
                    {pillar.num}
                  </span>
                  <Icon className="size-4 text-[#555C6D] transition-colors group-hover:text-[#2D5BFF]" />
                </div>
                <h3 className="mt-3 text-base font-bold text-[#0B0F19]">
                  {pillar.title}
                </h3>
                <p className="mt-1.5 text-xs leading-relaxed text-[#555C6D]">
                  {pillar.desc}
                </p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
