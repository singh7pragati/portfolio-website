'use client'

import { motion } from 'motion/react'
import { ArrowRight, Download, Mail, MapPin } from 'lucide-react'
import { profile } from '@/lib/data'

const easeOut = [0.22, 1, 0.36, 1] as const

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-screen items-center overflow-hidden px-6 pt-32 pb-20"
    >
      <div className="pointer-events-none absolute inset-0 grid-bg [mask-image:radial-gradient(ellipse_60%_50%_at_50%_40%,black,transparent)]" />
      <div className="pointer-events-none absolute left-1/2 top-1/3 -z-10 h-[480px] w-[480px] -translate-x-1/2 rounded-full bg-accent/10 blur-[120px]" />

      <div className="relative mx-auto w-full max-w-3xl">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOut }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-card/50 px-3 py-1.5 text-xs text-muted-foreground backdrop-blur"
        >
          <span className="relative flex size-2">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex size-2 rounded-full bg-accent" />
          </span>
          Available for internships
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.08 }}
          className="mt-6 text-balance text-5xl font-semibold leading-[1.05] tracking-tight sm:text-6xl md:text-7xl"
        >
          {profile.name}
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.16 }}
          className="mt-6 max-w-xl text-pretty text-lg leading-relaxed text-muted-foreground"
        >
          Full Stack Developer and Problem Solver building scalable web
          applications and solving algorithmic challenges. Currently pursuing my
          B.Tech in Computer Science.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.24 }}
          className="mt-6 flex items-center gap-2 text-sm text-muted-foreground"
        >
          <MapPin className="size-4 text-accent" />
          {profile.location}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: easeOut, delay: 0.32 }}
          className="mt-10 flex flex-wrap items-center gap-3"
        >
          <a
            href="#projects"
            className="group inline-flex items-center gap-2 rounded-full bg-foreground px-5 py-3 text-sm font-medium text-background transition-opacity hover:opacity-90"
          >
            View Projects
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-0.5" />
          </a>
          <a
            href="/Pragati_Singh_Resume.pdf"
            download="Pragati_Singh_Resume.pdf"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/40 px-5 py-3 text-sm font-medium backdrop-blur transition-colors hover:bg-secondary"
          >
          <Download className="size-4" />
          Download Resume
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
          >
            <Mail className="size-4" />
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  )
}
