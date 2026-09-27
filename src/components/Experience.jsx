import { experience } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

function ExperienceItem({ item }) {
  const ref = useReveal()
  return (
    <article
      ref={ref}
      className="reveal rounded-card border border-base-border bg-base-surface p-7 transition-colors hover:border-base-borderHover"
    >
      <div className="flex flex-wrap items-start justify-between gap-3 mb-4">
        <div>
          <h3 className="font-semibold text-ink">{item.title}</h3>
          <p className="text-sm text-ink-soft mt-0.5">{item.company}</p>
        </div>
        <span className="font-mono text-xs text-ink-faint whitespace-nowrap pt-1">{item.dates}</span>
      </div>
      <ul className="space-y-2">
        {item.points.map((point, i) => (
          <li key={i} className="relative pl-4 text-sm text-ink-soft leading-relaxed">
            <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-accent" />
            {point}
          </li>
        ))}
      </ul>
    </article>
  )
}

export default function Experience() {
  const headingRef = useReveal()
  return (
    <section id="experience" className="py-24 px-6 border-t border-base-border bg-base-bg">
      <div className="max-w-content mx-auto">
        <h2 ref={headingRef} className="reveal font-display font-semibold text-2xl tracking-tight mb-10">
          Experience
        </h2>
        <div className="grid gap-4">
          {experience.map((item) => (
            <ExperienceItem key={item.title + item.dates} item={item} />
          ))}
        </div>
      </div>
    </section>
  )
}
