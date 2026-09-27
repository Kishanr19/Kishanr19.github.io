import { ArrowRight, Download } from 'lucide-react'
import { profile } from '../data.js'

export default function Hero() {
  return (
    <section id="top" className="pt-40 pb-24 px-6">
      <div className="max-w-content mx-auto">
        <p className="text-sm font-medium text-accent mb-4">{profile.role}</p>

        <h1 className="font-display font-semibold text-4xl sm:text-5xl tracking-tight leading-[1.1] max-w-2xl">
          {profile.name}
        </h1>

        <p className="mt-5 max-w-lg text-lg leading-relaxed text-ink-soft">
          {profile.tagline}
        </p>

        <div className="mt-6 inline-flex items-center gap-2 rounded-full border border-base-border bg-base-surface px-4 py-2 text-sm text-ink-soft">
          <span className="relative flex h-2 w-2">
            <span className="absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-60 animate-ping" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald-400" />
          </span>
          Open to full-time roles, available immediately
        </div>

        <div className="mt-9 flex flex-wrap items-center gap-3">
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-5 py-3 transition-colors"
          >
            View Projects
            <ArrowRight size={16} />
          </a>
          <a
            href={profile.cvFile}
            download
            className="inline-flex items-center gap-2 rounded-xl border border-base-border hover:border-base-borderHover text-ink text-sm font-semibold px-5 py-3 transition-colors"
          >
            <Download size={16} />
            Download CV
          </a>
        </div>

        <div className="mt-10 flex flex-wrap gap-x-6 gap-y-2 text-sm text-ink-soft">
          <a href={`mailto:${profile.email}`} className="hover:text-accent transition-colors">
            {profile.email}
          </a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`} className="hover:text-accent transition-colors">
            {profile.phone}
          </a>
          <a href={profile.github} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            GitHub
          </a>
          <a href={profile.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-accent transition-colors">
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
