import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            Recent Computer Science graduate (2:1, University of Essex) with experience as a Data
            and Operations Assistant, producing management reporting, maintaining project
            trackers and documentation, and supporting stakeholders during system rollouts.
            Practical exposure to automation using Excel, SQL and Python.
          </p>
          <p>
            This sits alongside academic and project experience building automated Python
            pipelines, developing backend Java components, and managing Agile workflows via
            Jira. Now seeking a graduate role where I can apply this mix of technical and
            analytical experience, whether in software engineering, data & analytics, or
            business transformation.
          </p>
        </div>
      </div>
    </section>
  )
}
