import { Reveal } from '@/components/motion-primitives'

export function SectionHeading({
  index,
  title,
  description,
}: {
  index: string
  title: string
  description?: string
}) {
  return (
    <Reveal className="mb-12 md:mb-16">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-muted-foreground">
        <span className="text-accent">{index}</span>
        <span className="h-px w-8 bg-border" aria-hidden="true" />
      </div>
      <h2 className="mt-4 text-balance text-3xl font-semibold tracking-tight md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 max-w-xl text-pretty leading-relaxed text-muted-foreground">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
