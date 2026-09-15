'use client'

import { motion } from 'motion/react'
import { skillGroups } from '@/lib/data'

export function Skills() {
  return (
    <section id="skills" className="mx-auto max-w-6xl px-6 py-28 md:py-36">
      {/* Editorial Header */}
      <div className="border-b border-[#E8E4DD] pb-6">
        <div className="flex items-center gap-2 font-mono text-xs uppercase tracking-widest text-[#555C6D]">
          <span className="text-[#2D5BFF] font-semibold">02</span>
          <span>//</span>
          <span>CAPABILITIES &amp; EXPERTISE</span>
        </div>
        <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#0B0F19] sm:text-5xl md:text-6xl">
          TECHNICAL <span className="font-serif-italic font-normal text-[#2D5BFF]">ARSENAL.</span>
        </h2>
        <p className="mt-3 max-w-xl text-base text-[#555C6D]">
          Curated toolkit spanning modern programming languages, client-side frameworks, server-side environments, databases, and developer infrastructure.
        </p>
      </div>

      {/* Editorial Grouped Rows */}
      <div className="mt-12 divide-y divide-[#E8E4DD] border-t border-b border-[#E8E4DD]">
        {skillGroups.map((group, idx) => (
          <motion.div
            key={group.title}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.4, delay: idx * 0.06 }}
            className="group py-8 transition-colors hover:bg-white/50"
          >
            <div className="grid gap-6 md:grid-cols-12 md:items-center">
              {/* Category Identifier */}
              <div className="md:col-span-4 flex items-baseline gap-3">
                <span className="font-mono text-xs font-bold text-[#2D5BFF]">
                  0{idx + 1}
                </span>
                <h3 className="text-lg font-bold tracking-tight text-[#0B0F19] transition-colors group-hover:text-[#2D5BFF]">
                  {group.title}
                </h3>
              </div>

              {/* Skill Tags */}
              <div className="md:col-span-8 flex flex-wrap gap-2.5">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="inline-flex items-center rounded-full border border-[#E8E4DD] bg-white px-4 py-1.5 text-xs font-medium text-[#0B0F19] shadow-2xs transition-all hover:border-[#2D5BFF] hover:bg-blue-50/50 hover:text-[#2D5BFF]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
