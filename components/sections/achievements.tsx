'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { stats } from '@/lib/data'

function Counter({
  value,
  suffix,
}: {
  value: number
  suffix: string
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1200
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(Math.floor(value * eased))
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display}
      <span className="text-[#2D5BFF]">{suffix}</span>
    </span>
  )
}

export function Achievements() {
  return (
    <section className="mx-auto max-w-6xl px-6 py-12">
      <div className="grid grid-cols-2 divide-y divide-[#E8E4DD] rounded-3xl border border-[#E8E4DD] bg-white shadow-xs sm:divide-y-0 sm:divide-x lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="p-8 text-center transition-colors hover:bg-[#FAF9F6]/60"
          >
            <div className="text-4xl font-black tracking-tight text-[#0B0F19] sm:text-5xl lg:text-6xl">
              <Counter value={stat.value} suffix={stat.suffix} />
            </div>
            <div className="mt-2.5 font-mono text-[11px] font-bold uppercase tracking-wider text-[#555C6D]">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
