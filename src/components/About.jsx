import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            I combine academic and professional experience building automated Python and SQL
            pipelines, developing backend Java components, and analysing structured data with
            Excel, Power BI, and Tableau. I'm comfortable translating requirements into clean
            technical specifications and working within Agile workflows.
          </p>
          <p>
            Alongside my technical work, I've produced management reporting, maintained project
            trackers, and supported stakeholders through system rollouts — giving me a foundation
            that spans engineering, data, and operational delivery.
          </p>
        </div>
      </div>
    </section>
  )
}
