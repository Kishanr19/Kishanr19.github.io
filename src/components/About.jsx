import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            Recent BSc Computer Science graduate with experience as a Data and Operations Analyst
            and in data-focused operational roles, analysing transactional and CRM data,
            automating performance reporting and building dashboards using Excel, SQL and
            Python. Experienced in cleaning and processing datasets, identifying performance and
            consumer trends, and translating findings into clear insights and recommendations for
            stakeholders. Now seeking an entry level data and analytics role where I can apply
            this experience.
          </p>
          <p>
            I'm now pursuing graduate and entry-level opportunities in data analytics and data
            engineering, where I can apply my technical foundation, analytical approach and
            problem-solving skills to real business challenges while developing further
            expertise in modern data platforms and cloud technologies.
          </p>
        </div>
      </div>
    </section>
  )
}
