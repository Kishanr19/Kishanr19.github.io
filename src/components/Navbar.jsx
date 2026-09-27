import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import { useScrollSpy } from '../hooks/useScrollSpy.js'

const LINKS = [
  { id: 'about', label: 'About' },
  { id: 'education', label: 'Education' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const activeId = useScrollSpy(LINKS.map((l) => l.id))

  return (
    <header className="fixed top-0 inset-x-0 z-50 border-b border-base-border bg-base-bg/80 backdrop-blur-md">
      <div className="w-full px-6 sm:px-10 lg:px-16 h-16 flex items-center justify-between">
        <a
          href="#top"
          className="font-display font-semibold text-lg tracking-tight text-ink"
          aria-label="Kishan Ravikumar — back to top"
        >
          KR
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Primary">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.id === 'about' ? '#top' : `#${link.id}`}
              className={`relative text-sm font-medium transition-colors py-1 ${
                activeId === link.id ? 'text-ink' : 'text-ink-soft hover:text-ink'
              }`}
              aria-current={activeId === link.id ? 'true' : undefined}
            >
              {link.label}
              <span
                className={`absolute left-0 right-0 -bottom-[2px] h-[2px] rounded-full bg-accent transition-transform origin-left ${
                  activeId === link.id ? 'scale-x-100' : 'scale-x-0'
                }`}
              />
            </a>
          ))}
        </nav>

        <button
          className="md:hidden p-2 -mr-2 text-ink"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle navigation menu"
          aria-expanded={open}
          aria-controls="mobile-nav"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      <nav
        id="mobile-nav"
        aria-label="Mobile"
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-300 ease-out border-t border-base-border ${
          open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 border-t-0'
        }`}
      >
        <div className="w-full px-6 sm:px-10 lg:px-16 py-3 flex flex-col">
          {LINKS.map((link) => (
            <a
              key={link.id}
              href={link.id === 'about' ? '#top' : `#${link.id}`}
              onClick={() => setOpen(false)}
              className="py-3 text-sm font-medium text-ink-soft hover:text-ink border-b border-base-border last:border-none"
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
