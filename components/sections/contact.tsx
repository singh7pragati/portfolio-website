'use client'

import { motion } from 'motion/react'
import { Mail, ArrowUpRight } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { GithubIcon, LinkedinIcon, LeetcodeIcon } from '@/components/brand-icons'
import { profile } from '@/lib/data'

const channels = [
  {
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
    icon: Mail,
  },
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
]

export function Contact() {
  return (
    <section id="contact" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading index="06" title="Get in touch" />

      <div className="relative overflow-hidden rounded-3xl border border-border bg-card/40 p-8 backdrop-blur md:p-12">
        <div className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent/10 blur-3xl" />
        <div className="relative">
          <p className="max-w-lg text-balance text-2xl font-semibold leading-snug tracking-tight md:text-3xl">
            I&apos;m open to internships, collaborations, and interesting
            engineering problems.
          </p>
          <a
            href={`mailto:${profile.email}`}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-foreground px-6 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            <Mail className="size-4" />
            Say hello
          </a>

          <div className="mt-10 grid gap-px overflow-hidden rounded-2xl border border-border bg-border sm:grid-cols-2">
            {channels.map((c, i) => {
              const Icon = c.icon
              const isExternal = c.href.startsWith('http')
              return (
                <motion.a
                  key={c.label}
                  href={c.href}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  aria-label={`${c.label}: ${c.value}`}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.99 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.06 }}
                  className="group relative flex cursor-pointer items-center justify-between gap-4 bg-card/60 p-5 backdrop-blur transition-all duration-300 hover:z-10 hover:bg-secondary/60 hover:shadow-[0_0_0_1px_var(--accent),0_8px_30px_-12px_var(--accent)]"
                >
                  <span className="flex items-center gap-3">
                    <span className="grid size-9 place-items-center rounded-lg border border-border bg-background/50 text-accent transition-colors duration-300 group-hover:border-accent/40 group-hover:bg-accent/10">
                      <Icon className="size-4" />
                    </span>
                    <span className="text-sm">
                      <span className="block text-xs uppercase tracking-wide text-muted-foreground">
                        {c.label}
                      </span>
                      <span className="font-medium">{c.value}</span>
                    </span>
                  </span>
                  <ArrowUpRight className="size-4 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
                </motion.a>
              )
            })}
          </div>
        </div>
      </div>

      <footer className="mt-16 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 text-sm text-muted-foreground sm:flex-row">
        <p>© {new Date().getFullYear()} Pragati Singh. All rights reserved.</p>
        <p className="font-mono text-xs">Built with Next.js &amp; Tailwind CSS</p>
      </footer>
    </section>
  )
}
