import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import { skills } from '../../data/skills'

export default function Skills() {
  return (
    <section id="skills" className="bg-surface py-24 sm:py-32">
      <div className="container-page">
        <SectionHeading
          eyebrow="Skills"
          align="center"
          title="Tools I reach for"
          description="A working toolkit built through consistent, self‑directed practice — not just a list I copied into a resume."
        />

        <div className="mt-14 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
          {skills.map((skill, i) => (
            <Reveal key={skill.name} delay={(i % 5) * 60}>
              <div
                className="group relative flex h-full flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-6 text-center shadow-soft transition-all duration-300 hover:-translate-y-1.5 hover:shadow-card"
              >
                <div
                  className="flex h-12 w-12 items-center justify-center rounded-xl text-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{ color: skill.color, backgroundColor: `${skill.color}14` }}
                >
                  <skill.icon />
                </div>
                <div>
                  <p className="text-sm font-semibold text-ink">{skill.name}</p>
                  <p className="mt-0.5 font-mono text-[11px] uppercase tracking-wide text-slate-light">
                    {skill.level}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
