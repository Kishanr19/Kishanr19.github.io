import { skills } from '../data.js'
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
  return (
    <section id="skills" className="py-24 px-6 border-t border-base-border bg-base-bg">
      <div className="max-w-content mx-auto">
        <h2 ref={headingRef} className="reveal font-display font-semibold text-2xl tracking-tight mb-10">
          Skills
        </h2>
        <div className="grid gap-8 sm:grid-cols-2">
          {skills.map((group) => (
            <SkillGroup key={group.category} group={group} />
          ))}
        </div>
      </div>
    </section>
  )
}
