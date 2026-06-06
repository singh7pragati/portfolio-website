'use client'

import { motion } from 'motion/react'
import { GraduationCap, Award } from 'lucide-react'
import { SectionHeading } from '@/components/section-heading'
import { StaggerGroup, staggerItem } from '@/components/motion-primitives'
import { education, certifications } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-5xl px-6 py-24 md:py-32">
      <div className="grid gap-16 lg:grid-cols-2 lg:gap-12">
        <div>
          <SectionHeading index="04" title="Education" />
          <ol className="relative ml-1 border-l border-border pl-8">
            {education.map((item, i) => (
              <motion.li
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="relative pb-10 last:pb-0"
              >
                <span className="absolute -left-[41px] grid size-7 place-items-center rounded-full border border-border bg-card text-accent">
                  <GraduationCap className="size-3.5" />
                </span>
                <span className="font-mono text-xs uppercase tracking-[0.18em] text-accent">
                  {item.period}
                </span>
                <h3 className="mt-2 text-lg font-semibold tracking-tight">
                  {item.school}
                </h3>
                <p className="mt-1 text-pretty text-muted-foreground">
                  {item.degree}
                </p>
                <p className="mt-2 text-sm font-medium text-foreground/80">
                  {item.detail}
                </p>
                {item.coursework.length > 0 && (
                  <div className="mt-4">
                    <p className="text-xs font-medium uppercase tracking-[0.12em] text-muted-foreground">
                      {item.courseworkLabel}
                    </p>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-foreground/75"
                        >
                          {course}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.li>
            ))}
          </ol>
        </div>

        <div>
          <SectionHeading index="05" title="Certifications" />
          <StaggerGroup className="grid gap-3">
            {certifications.map((cert) => (
              <motion.div
                key={cert.title}
                variants={staggerItem}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-card/40 p-5 backdrop-blur transition-colors hover:border-accent/40"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-accent/15 text-accent">
                  <Award className="size-5" />
                </span>
                <div>
                  <h3 className="font-medium leading-snug">{cert.title}</h3>
                  <p className="mt-0.5 text-sm text-muted-foreground">
                    {cert.issuer}
                  </p>
                </div>
              </motion.div>
            ))}
          </StaggerGroup>
        </div>
      </div>
    </section>
  )
}
