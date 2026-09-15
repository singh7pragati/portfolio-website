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
    <Reveal className="mb-10 md:mb-14">
      <div className="flex items-center gap-3 text-xs font-mono uppercase tracking-[0.2em] text-slate-400">
        <span className="font-semibold text-blue-600">{index}</span>
        <span className="h-px w-8 bg-slate-200" aria-hidden="true" />
      </div>
      <h2 className="mt-3 text-balance text-3xl font-bold tracking-tight text-slate-900 md:text-4xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-2.5 max-w-2xl text-pretty text-sm sm:text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </Reveal>
  )
}
