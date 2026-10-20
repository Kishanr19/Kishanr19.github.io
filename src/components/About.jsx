import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            Computer Science graduate (2:1) with experience across data analytics, business
            operations, software engineering and process automation.
          </p>
          <p>
            My experience as a Data Operations Support Analyst includes sales performance reporting,
            financial reconciliation, data validation and business intelligence. Skilled in using
            Python, SQL and Excel to analyse complex datasets, investigate discrepancies,
            automate reporting workflows and translate operational data into actionable insights
            that support business decisions.
          </p>
          <p>
            Alongside my analytical experience, I have a technical background in software
            engineering, including backend development, REST API integration, automated testing
            and application development using Java and Python. I have also developed end-to-end
            data solutions involving PostgreSQL, ETL pipelines, predictive modelling and
            interactive dashboards.
          </p>
          <p>
            I am currently seeking graduate and entry-level opportunities across data analytics,
            data engineering and software engineering, where I can contribute my analytical and
            technical skills while developing further professional expertise.
          </p>
        </div>
      </div>
    </section>
  )
}
