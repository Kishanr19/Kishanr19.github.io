export default function Footer() {
  return (
    <footer className="px-6 py-8 border-t border-base-border">
      <div className="max-w-content mx-auto flex flex-wrap items-center justify-between gap-3 text-xs text-ink-faint">
        <span>© {new Date().getFullYear()} Kishan Ravikumar</span>
        <span>Built with React, Vite &amp; Tailwind CSS</span>
      </div>
    </footer>
  )
}
