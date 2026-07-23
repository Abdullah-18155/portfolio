import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { timeline } from '../../data/timeline'

export default function Timeline() {
  return (
    <section id="journey" className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Learning Journey"
          title="How I got here"
          description="Self‑taught, one layer at a time — each step feeding directly into the next project."
        />

        <div className="relative mt-14">
          <div className="absolute left-[15px] top-2 bottom-2 w-px bg-line sm:left-1/2" aria-hidden="true" />

          <ol className="space-y-8">
            {timeline.map((item, i) => {
              const isLeft = i % 2 === 0
              return (
                <li key={item.title} className="relative sm:grid sm:grid-cols-2 sm:gap-10">
                  <Reveal
                    delay={i * 80}
                    className={
                      isLeft
                        ? 'pl-10 sm:col-start-1 sm:pl-0 sm:pr-10 sm:text-right'
                        : 'pl-10 sm:col-start-2 sm:pl-10'
                    }
                  >
                    <div
                      className={`rounded-2xl border bg-white p-5 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card ${item.current ? 'border-signal' : 'border-line'
                        }`}
                    >
                      <span className="font-mono text-[11px] uppercase tracking-wide text-signal">
                        {item.label}
                      </span>
                      <h3 className="mt-1 font-display text-lg font-semibold">{item.title}</h3>
                      <p className="mt-2 text-sm leading-relaxed text-slate">{item.description}</p>
                    </div>
                  </Reveal>

                  <span
                    className={`absolute left-[9px] top-16 h-3.5 w-3.5 rounded-full border-2 border-white shadow-soft sm:left-1/2 sm:-translate-x-1/2 ${item.current ? 'bg-signal' : 'bg-ink'
                      }`}
                    aria-hidden="true"
                  />
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}
