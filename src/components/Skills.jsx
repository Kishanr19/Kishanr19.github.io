import { BadgeCheck } from 'lucide-react'
import { skills, certifications } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

function SkillGroup({ group }) {
  const ref = useReveal()
  return (
    <div ref={ref} className="reveal">
      <p className="text-sm font-semibold text-ink mb-3">{group.category}</p>
      <div className="flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="text-xs font-medium px-3 py-1.5 rounded-full border border-base-border text-ink-soft"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Skills() {
  const headingRef = useReveal()
  const certRef = useReveal()
  return (
    <section id="skills" className="scroll-mt-20 py-24 px-6 border-t border-base-border bg-base-bg">
      <div className="max-w-content mx-auto">
        <div className="grid gap-12 lg:grid-cols-[1.3fr_1fr]">
          <div>
            <h2 ref={headingRef} className="reveal font-display font-semibold text-2xl tracking-tight mb-10">
              Skills
            </h2>
            <div className="grid gap-8 sm:grid-cols-2">
              {skills.map((group) => (
                <SkillGroup key={group.category} group={group} />
              ))}
            </div>
          </div>

          <div ref={certRef} className="reveal lg:border-l lg:border-base-border lg:pl-10">
            <h2 className="font-display font-semibold text-2xl tracking-tight mb-10">
              Certifications
            </h2>
            <div className="space-y-4">
              {certifications.map((cert) => (
                <div key={cert.name} className="flex items-start gap-2.5">
                  <BadgeCheck size={15} className="text-accent shrink-0 mt-0.5" />
                  <div>
                    <p className="text-sm text-ink">{cert.name}</p>
                    <p className="text-xs text-ink-faint mt-0.5">
                      {cert.issuer} · {cert.dates}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
