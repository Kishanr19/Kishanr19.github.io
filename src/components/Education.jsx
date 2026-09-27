import { GraduationCap, Award } from 'lucide-react'
import { education } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Education() {
  const ref = useReveal()

  return (
    <section id="education" className="py-24 px-6 border-t border-base-border">
      <div className="max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-10">Education</h2>

        <div
          ref={ref}
          className="reveal rounded-card border border-base-border bg-base-surface p-8"
        >
          <div className="flex items-start gap-4">
            <div className="shrink-0 w-10 h-10 rounded-xl bg-accent-soft flex items-center justify-center">
              <GraduationCap size={20} className="text-accent" />
            </div>
            <div className="flex-1">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <h3 className="font-semibold text-ink">{education.degree}</h3>
                  <p className="text-sm text-ink-soft mt-0.5">{education.institution}</p>
                </div>
                <span className="font-mono text-xs text-ink-faint whitespace-nowrap pt-1">
                  {education.dates}
                </span>
              </div>

              <p className="text-sm text-ink-soft mt-4">{education.grade}</p>

              <div className="mt-3 inline-flex items-center gap-1.5 text-xs font-medium px-3 py-1.5 rounded-full bg-accent-soft text-accent">
                <Award size={13} />
                {education.honors}
              </div>

              <div className="mt-6 pt-6 border-t border-base-border">
                <p className="text-sm font-medium text-ink mb-1">Dissertation</p>
                <p className="text-sm text-ink-soft leading-relaxed">
                  {education.dissertation.title} — graded {education.dissertation.grade},
                  supervised by {education.dissertation.supervisor}.
                </p>
              </div>

              <div className="mt-6 pt-6 border-t border-base-border space-y-4">
                {education.modules.map((group) => (
                  <div key={group.year}>
                    <p className="text-sm font-medium text-ink mb-2">{group.year}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.items.map((item) => (
                        <span
                          key={item}
                          className="font-mono text-[11px] px-2.5 py-1 rounded-md border border-base-border text-ink-soft"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
