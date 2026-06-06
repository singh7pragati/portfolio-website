'use client'

import { useEffect, useRef, useState } from 'react'
import { motion, useInView } from 'motion/react'
import { stats } from '@/lib/data'

function Counter({
  value,
  suffix,
  decimals = 0,
}: {
  value: number
  suffix: string
  decimals?: number
}) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, margin: '-60px' })
  const [display, setDisplay] = useState(0)

  useEffect(() => {
    if (!inView) return
    const duration = 1400
    const start = performance.now()
    let raf = 0
    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setDisplay(value * eased)
      if (progress < 1) raf = requestAnimationFrame(tick)
    }
    raf = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(raf)
  }, [inView, value])

  return (
    <span ref={ref}>
      {display.toFixed(decimals)}
      {suffix}
    </span>
  )
}

export function Achievements() {
  return (
    <section className="mx-auto max-w-5xl px-6 py-12">
      <div className="grid grid-cols-2 gap-px overflow-hidden rounded-3xl border border-border bg-border lg:grid-cols-4">
        {stats.map((stat, i) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="bg-card/60 p-8 text-center backdrop-blur"
          >
            <div className="text-4xl font-semibold tracking-tight text-foreground md:text-5xl">
              <Counter
                value={stat.value}
                suffix={stat.suffix}
                decimals={stat.decimals ?? 0}
              />
            </div>
            <div className="mt-2 text-sm text-muted-foreground">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
