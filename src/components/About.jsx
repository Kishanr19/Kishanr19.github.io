import { useReveal } from '../hooks/useReveal.js'

export default function About() {
  const ref = useReveal()

  return (
    <section id="about" className="scroll-mt-20 py-24 px-6 border-t border-base-border">
      <div ref={ref} className="reveal max-w-content mx-auto">
        <h2 className="font-display font-semibold text-2xl tracking-tight mb-8">About</h2>
        <div className="max-w-2xl space-y-4 text-ink-soft leading-relaxed">
          <p>
            I'm a BSc Computer Science graduate (2:1) from the University of Essex, with a
            background in data analytics, database development and automation, supported by
            professional experience and continued independent technical projects.
          </p>
          <p>
            As a Data Analytics Assistant at the University of Essex, I worked with operational
            datasets, investigated data inconsistencies and supported management reporting using
            Excel, SQL and Python. My work involved improving data accuracy, streamlining
            recurring processes and translating technical findings into actionable information
            for stakeholders, strengthening both my analytical capabilities and understanding of
            how data supports operational decision-making.
          </p>
          <p>
            Since graduating, I've continued building practical data engineering capabilities
            through independent projects involving automated Python ETL pipelines, REST API
            integration, PostgreSQL database modelling, SQLAlchemy and data validation. Beyond
            using these technologies, I've focused on understanding how data moves between
            systems, how to structure it effectively and how to maintain its reliability for
            downstream analysis.
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
