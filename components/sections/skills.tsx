'use client'

import { motion } from 'motion/react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { skillGroups } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="02"
        title="Skills & Technologies"
        description="A toolkit spanning languages, frameworks, and core computer science fundamentals."
      />

      <StaggerGroup className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group) => (
          <motion.div
            key={group.title}
            variants={staggerItem}
            className="group relative overflow-hidden rounded-2xl border border-border bg-card/40 p-6 backdrop-blur transition-colors hover:border-accent/40"
          >
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/40 to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
            <h3 className="text-xs font-mono uppercase tracking-[0.18em] text-muted-foreground">
              {group.title}
            </h3>
            <div className="mt-4 flex flex-wrap gap-2">
              {group.items.map((item) => (
                <span
                  key={item}
                  className="rounded-lg border border-border bg-secondary/50 px-2.5 py-1 text-sm text-foreground/90 transition-colors group-hover:border-border"
                >
                  {item}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </StaggerGroup>
    </section>
  )
}
