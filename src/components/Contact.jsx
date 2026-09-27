import { Mail, Phone, Github, Linkedin } from 'lucide-react'
import { profile } from '../data.js'
import { useReveal } from '../hooks/useReveal.js'

export default function Contact() {
  const ref = useReveal()

  return (
    <section id="contact" className="scroll-mt-20 py-28 px-6 border-t border-base-border bg-base-bg">
      <div ref={ref} className="reveal max-w-content mx-auto text-center">
        <h2 className="font-display font-semibold text-3xl tracking-tight mb-4">
          Let's talk
        </h2>
        <p className="text-ink-soft max-w-md mx-auto mb-9">
          I'm open to full-time graduate roles and available to start immediately.
          Please reach out and I'll get back to you quickly.
        </p>

        <a
          href={`mailto:${profile.email}`}
          className="inline-flex items-center gap-2 rounded-xl bg-accent hover:bg-accent-hover text-white text-sm font-semibold px-6 py-3.5 transition-colors"
        >
          <Mail size={16} />
          Email me
        </a>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-6 text-sm">
          <a
            href={`mailto:${profile.email}`}
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-accent transition-colors"
          >
            <Mail size={16} />
            {profile.email}
          </a>
          <a
            href={`tel:${profile.phone.replace(/\s+/g, '')}`}
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-accent transition-colors"
          >
            <Phone size={16} />
            {profile.phone}
          </a>
          <a
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-accent transition-colors"
          >
            <Github size={16} />
            GitHub
          </a>
          <a
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 text-ink-soft hover:text-accent transition-colors"
          >
            <Linkedin size={16} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}
