'use client'

import { useEffect, useState } from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Menu, X, ArrowUpRight } from 'lucide-react'

const navItems = [
  { href: '#about', label: 'About', num: '01' },
  { href: '#skills', label: 'Skills', num: '02' },
  { href: '#projects', label: 'Projects', num: '03' },
  { href: '#education', label: 'Education', num: '04' },
  { href: '#contact', label: 'Contact', num: '05' },
]

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#FAF9F6]/90 backdrop-blur-md border-b border-[#E8E4DD] shadow-2xs'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        {/* Brand / Logo */}
        <a
          href="#top"
          className="group flex items-baseline gap-2 text-sm tracking-tight text-[#0B0F19]"
        >
          <span className="font-bold tracking-tight text-base font-sans">
            PRAGATI SINGH
          </span>
          <span className="size-1.5 rounded-full bg-[#2D5BFF]" />
          <span className="hidden font-mono text-[10px] text-[#555C6D] uppercase tracking-widest sm:inline-block">
            B.Tech CSE
          </span>
        </a>

        {/* Center Desktop Links */}
        <nav className="hidden items-center gap-7 md:flex">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative flex items-center gap-1.5 py-1 text-xs font-semibold uppercase tracking-wider text-[#555C6D] transition-colors hover:text-[#0B0F19]"
            >
              <span className="font-mono text-[9px] text-[#2D5BFF] opacity-70 group-hover:opacity-100">
                {item.num}
              </span>
              <span>{item.label}</span>
              <span className="absolute -bottom-1 left-0 h-[1.5px] w-0 bg-[#2D5BFF] transition-all duration-200 group-hover:w-full" />
            </a>
          ))}
        </nav>

        {/* Right CTA */}
        <div className="flex items-center gap-3">
          <a
            href="/resume.pdf"
            download="Pragati_Singh_Resume.pdf"
            className="group hidden items-center gap-1.5 rounded-full border border-[#0B0F19] bg-transparent px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#0B0F19] transition-all hover:bg-[#0B0F19] hover:text-[#FAF9F6] sm:inline-flex"
          >
            <span>Resume</span>
            <ArrowUpRight className="size-3.5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>

          {/* Mobile Menu Button */}
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="grid size-9 place-items-center rounded-lg border border-[#E8E4DD] bg-[#FAF9F6] text-[#0B0F19] md:hidden"
            aria-label="Toggle Navigation"
            aria-expanded={open}
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="border-b border-[#E8E4DD] bg-[#FAF9F6] px-6 py-5 md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between border-b border-[#E8E4DD]/60 py-2.5 text-sm font-semibold uppercase tracking-wider text-[#0B0F19]"
                >
                  <span>{item.label}</span>
                  <span className="font-mono text-xs text-[#2D5BFF]">{item.num}</span>
                </a>
              ))}
              <div className="pt-2">
                <a
                  href="/resume.pdf"
                  download="Pragati_Singh_Resume.pdf"
                  onClick={() => setOpen(false)}
                  className="flex w-full items-center justify-center gap-2 rounded-xl bg-[#0B0F19] py-3 text-xs font-semibold uppercase tracking-wider text-[#FAF9F6]"
                >
                  <span>Download Resume</span>
                  <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
