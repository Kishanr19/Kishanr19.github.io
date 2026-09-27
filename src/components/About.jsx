import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            Recent BSc Computer Science graduate with a strong foundation in data analysis,
            software development and automation, built through hands-on academic and professional
            experience. As a Data and Operations Assistant, I produced management reporting,
            validated and maintained data accuracy, investigated discrepancies, and supported
            stakeholders through system rollouts, using Excel, SQL and Python to automate
            recurring workflows and resolve data-quality issues.
          </p>
          <p>
            This sits alongside academic and professional experience and independent project work
            spanning software development, AI and information management, where I've translated
            requirements into working solutions, organised project tasks, and communicated
            clearly with both technical and non-technical stakeholders. A quick learner with a
            strong aptitude for new technologies, I'm now looking to build on this foundation in
            a graduate role, whether in data analytics, software engineering, or business
            transformation, where I can keep developing across automation, data visualisation and
            operational improvement, and gain further industrial expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
