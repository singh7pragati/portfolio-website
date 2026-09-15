'use client'

import { motion } from 'motion/react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

const channels = [
  {
    label: 'LinkedIn',
    value: 'in/pragati-singh-80a201293',
    href: profile.links.linkedin,
    icon: LinkedinIcon,
  },
  {
    label: 'GitHub',
    value: 'github.com/singh7pragati',
    href: profile.links.github,
    icon: GithubIcon,
  },
  {
    label: 'LeetCode',
    value: 'leetcode.com/u/singh_pragati',
    href: profile.links.leetcode,
    icon: LeetcodeIcon,
  },
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-36 md:pb-20">
      {/* Editorial Header */}
      <div className="border-b border-[#E8E4DD] pb-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555C6D]">
          <span className="text-[#2D5BFF] font-semibold">05</span>
          <span>//</span>
          <span>GET IN TOUCH</span>
        </div>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl leading-[1.05]">
          LET&apos;S BUILD SOMETHING <br />
          <span className="font-serif-italic font-normal text-[#2D5BFF]">MEANINGFUL.</span>
        </h2>
        <p className="mt-4 max-w-xl text-base text-[#555C6D]">
          I am actively seeking software engineering opportunities and collaborations. Reach out directly or connect through any of my professional channels.
        </p>
      </div>

      {/* Main Email Callout */}
      <div className="mt-12">
        <a
          href={`mailto:${profile.email}`}
          className="group relative block overflow-hidden rounded-3xl border border-[#0B0F19] bg-[#0B0F19] p-8 text-[#FAF9F6] shadow-sm transition-all duration-300 hover:bg-[#2D5BFF] hover:shadow-xl sm:p-12"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-[#FAF9F6]/70">
                Direct Communication
              </span>
              <p className="mt-2 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-[#FAF9F6]">
                {profile.email}
              </p>
            </div>
            <div className="inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/10 px-5 py-2.5 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6] backdrop-blur-xs transition-colors group-hover:bg-white group-hover:text-[#2D5BFF]">
              <span>Send Message</span>
              <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          </div>
        </a>
      </div>

      {/* Channels Grid */}
      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {channels.map((c) => {
          const Icon = c.icon
          const isExternal = c.href.startsWith('http')
          return (
            <motion.a
              key={c.label}
              href={c.href}
              target={isExternal ? '_blank' : undefined}
              rel={isExternal ? 'noopener noreferrer' : undefined}
              aria-label={`${c.label}: ${c.value}`}
              whileHover={{ y: -2 }}
              className="group flex flex-col justify-between rounded-2xl border border-[#E8E4DD] bg-white p-5 shadow-2xs transition-all hover:border-[#2D5BFF]/40 hover:shadow-xs"
            >
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs uppercase tracking-wider text-[#555C6D]">
                  {c.label}
                </span>
                <ArrowUpRight className="size-4 text-[#555C6D] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-[#2D5BFF]" />
              </div>
              <div className="mt-6 flex items-center gap-2.5">
                <Icon className="size-4 text-[#0B0F19]" />
                <span className="font-semibold text-xs text-[#0B0F19] truncate">
                  {c.value}
                </span>
              </div>
            </motion.a>
          )
        })}
      </div>

      {/* Footer */}
      <footer className="mt-20 flex flex-col items-center justify-between gap-4 border-t border-[#E8E4DD] pt-8 text-xs font-mono uppercase tracking-wider text-[#555C6D] sm:flex-row">
        <p>© {new Date().getFullYear()} PRAGATI SINGH. ALL RIGHTS RESERVED.</p>
        <div className="flex items-center gap-5">
          <a
            href={profile.links.github}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#0B0F19]"
          >
            GitHub
          </a>
          <span>•</span>
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-[#2D5BFF]"
          >
            LinkedIn
          </a>
          <span>•</span>
          <a
            href={profile.links.leetcode}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-amber-600"
          >
            LeetCode
          </a>
        </div>
      </footer>
    </section>
  )
}
