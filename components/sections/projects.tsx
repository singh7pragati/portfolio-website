'use client'

import { motion } from 'motion/react'
import { ExternalLink, ArrowUpRight } from 'lucide-react'
import { GithubIcon } from '@/components/brand-icons'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { projects } from '@/lib/data'

export function Projects() {
  return (
    <section id="projects" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <SectionHeading
        index="03"
        title="Featured Projects"
        description="Selected work that reflects how I approach building real, usable software."
      />

      <StaggerGroup className="grid gap-6 md:grid-cols-2">
        {projects.map((project) => (
          <motion.article
            key={project.name}
            variants={staggerItem}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-border bg-card/40 p-7 backdrop-blur transition-all duration-300 hover:border-accent/40 hover:bg-card/60"
          >
            <div className="pointer-events-none absolute -right-16 -top-16 size-40 rounded-full bg-accent/10 blur-3xl opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

            <div className="flex items-start justify-between gap-4">
              <h3 className="text-xl font-semibold tracking-tight">
                {project.name}
              </h3>
              <ArrowUpRight className="size-5 shrink-0 text-muted-foreground transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
            </div>

            <p className="mt-3 text-pretty leading-relaxed text-muted-foreground">
              {project.description}
            </p>

            <ul className="mt-5 grid gap-2">
              {project.features.map((feature) => (
                <li
                  key={feature}
                  className="flex items-center gap-2 text-sm text-foreground/80"
                >
                  <span className="size-1 rounded-full bg-accent" aria-hidden />
                  {feature}
                </li>
              ))}
            </ul>

            <div className="mt-6 flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span
                  key={tech}
                  className="rounded-md border border-border bg-secondary/40 px-2 py-0.5 font-mono text-xs text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-7 flex items-center gap-3 border-t border-border pt-5">
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-border px-3.5 py-1.5 text-sm transition-colors hover:bg-secondary"
              >
                <GithubIcon className="size-4" />
                Code
              </a>
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 rounded-full bg-foreground px-3.5 py-1.5 text-sm font-medium text-background transition-opacity hover:opacity-90"
              >
                <ExternalLink className="size-4" />
                Live Demo
              </a>
            </div>
          </motion.article>
        ))}
      </StaggerGroup>
    </section>
  )
}
