'use client'

import { motion } from 'motion/react'
import { GraduationCap, Award, CheckCircle2 } from 'lucide-react'
import { education, certifications } from '@/lib/data'

export function Education() {
  return (
    <section id="education" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      {/* Editorial Header */}
      <div className="border-b border-[#E8E4DD] pb-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555C6D]">
          <span className="text-[#2D5BFF] font-semibold">04</span>
          <span>//</span>
          <span>ACADEMIC BACKGROUND</span>
        </div>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl">
          EDUCATION &amp; <span className="font-serif-italic font-normal text-[#2D5BFF]">CREDENTIALS.</span>
        </h2>
      </div>

      <div className="mt-14 grid gap-14 lg:grid-cols-12">
        {/* Left Column: Education Timeline */}
        <div className="lg:col-span-7">
          <ol className="relative ml-2 border-l border-[#E8E4DD] pl-8 space-y-12">
            {education.map((item, i) => (
              <motion.li
                key={`${item.school}-${item.period}`}
                initial={{ opacity: 0, x: -12 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="relative"
              >
                {/* Timeline Marker */}
                <span className="absolute -left-[41px] top-0 grid size-6 place-items-center rounded-full border border-[#E8E4DD] bg-white text-[#2D5BFF] shadow-2xs">
                  <span className="size-2 rounded-full bg-[#2D5BFF]" />
                </span>

                <div className="flex flex-wrap items-baseline justify-between gap-2">
                  <span className="font-mono text-xs font-bold uppercase tracking-wider text-[#2D5BFF]">
                    {item.period}
                  </span>
                  <span className="rounded-full bg-[#FAF9F6] border border-[#E8E4DD] px-3 py-0.5 font-mono text-xs font-bold text-[#0B0F19]">
                    {item.detail}
                  </span>
                </div>

                <h3 className="mt-2 text-xl font-bold tracking-tight text-[#0B0F19]">
                  {item.school}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#555C6D]">
                  {item.degree}
                </p>

                {/* Coursework only if present (B.Tech entry) */}
                {item.coursework && item.coursework.length > 0 && (
                  <div className="mt-4">
                    <span className="font-mono text-[10px] uppercase tracking-wider text-[#555C6D]">
                      {item.courseworkLabel}
                    </span>
                    <div className="mt-2 flex flex-wrap gap-1.5">
                      {item.coursework.map((course) => (
                        <span
                          key={course}
                          className="rounded-md border border-[#E8E4DD] bg-white px-2.5 py-1 text-xs font-medium text-[#0B0F19] shadow-2xs"
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

        {/* Right Column: Certifications */}
        <div className="lg:col-span-5 flex flex-col gap-4">
          <div className="border-b border-[#E8E4DD] pb-3">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#0B0F19]">
              Verified Certifications
            </span>
          </div>

          <div className="space-y-3.5">
            {certifications.map((cert) => (
              <div
                key={cert.title}
                className="group flex items-start gap-4 rounded-2xl border border-[#E8E4DD] bg-white p-5 shadow-2xs transition-all hover:border-[#2D5BFF]/40 hover:shadow-xs"
              >
                <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-blue-50 text-[#2D5BFF]">
                  <Award className="size-5" />
                </span>
                <div>
                  <h4 className="font-bold text-sm text-[#0B0F19] leading-snug">
                    {cert.title}
                  </h4>
                  <p className="mt-1 font-mono text-xs text-[#555C6D]">
                    {cert.issuer}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
