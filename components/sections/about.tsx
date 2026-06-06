import { SectionHeading } from '@/components/section-heading'
import { Reveal } from '@/components/motion-primitives'
import { profile, achievements } from '@/lib/data'
import { Check } from 'lucide-react'

export function About() {
  return (
    <section id="about" className="mx-auto max-w-3xl px-6 py-24 md:py-32">
      <SectionHeading index="01" title="About" />
      <Reveal>
        <p className="text-pretty text-xl leading-relaxed text-foreground/90 md:text-2xl">
          {profile.about}
        </p>
      </Reveal>
      <Reveal delay={0.1}>
        <ul className="mt-10 grid gap-3 sm:grid-cols-1">
          {achievements.map((item) => (
            <li
              key={item}
              className="flex items-start gap-3 text-muted-foreground"
            >
              <span className="mt-0.5 grid size-5 shrink-0 place-items-center rounded-full bg-accent/15 text-accent">
                <Check className="size-3" />
              </span>
              <span className="leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
