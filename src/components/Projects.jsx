import { Github, FileText, ArrowUpRight } from 'lucide-react'
import { projects } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

function ProjectCard({ project }) {
  const ref = useReveal()

  return (
    <article
      ref={ref}
      className={`reveal group rounded-card border border-base-border bg-base-surface p-8 transition-all hover:border-base-borderHover hover:bg-base-raised ${
        project.wide ? 'md:col-span-2' : ''
      }`}
    >
      <h3 className="font-display font-semibold text-xl text-ink tracking-tight mb-3">
        {project.name}
      </h3>

      <p className="text-sm text-ink-soft leading-relaxed mb-2">
        <span className="text-ink font-medium">Problem: </span>
        {project.problem}
      </p>
      <p className="text-sm text-ink-soft leading-relaxed mb-5">
        <span className="text-ink font-medium">Solution: </span>
        {project.solution}
      </p>

      <ul className="space-y-2 mb-5">
        {project.features.map((f, i) => (
          <li key={i} className="relative pl-4 text-sm text-ink-soft leading-relaxed">
            <span className="absolute left-0 top-[0.55em] w-1 h-1 rounded-full bg-accent" />
            {f}
          </li>
        ))}
      </ul>

      {project.outcome && (
        <p className="text-sm text-ink border-l-2 border-accent pl-3 mb-6">
          {project.outcome}
        </p>
      )}

      <div className="flex flex-wrap gap-2 mb-6">
        {project.tech.map((t) => (
          <span
            key={t}
            className="text-xs font-medium px-3 py-1.5 rounded-full bg-accent-soft text-accent"
          >
            {t}
          </span>
        ))}
      </div>

      <div className="flex flex-wrap items-center gap-5 pt-5 border-t border-base-border">
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-ink hover:text-accent transition-colors"
        >
          <Github size={16} />
          Code
        </a>
        {project.report && (
          <a
            href={project.report}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent transition-colors"
          >
            <FileText size={16} />
            Report
          </a>
        )}
        {project.demo && (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-soft hover:text-accent transition-colors"
          >
            <ArrowUpRight size={16} />
            Live demo
          </a>
        )}
      </div>
    </article>
  )
}

export default function Projects() {
  const headingRef = useReveal()
  return (
    <section id="projects" className="py-24 px-6 border-t border-base-border">
      <div className="max-w-content mx-auto">
        <h2 ref={headingRef} className="reveal font-display font-semibold text-2xl tracking-tight mb-10">
          Projects
        </h2>
        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((project) => (
            <ProjectCard key={project.name} project={project} />
          ))}
        </div>
      </div>
    </section>
  )
}
