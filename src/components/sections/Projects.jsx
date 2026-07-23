import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { projects } from '../../data/projects'

function ProjectPreview({ project }) {
  return (
    <div
      className="relative flex aspect-[16/9] w-full flex-col overflow-hidden rounded-xl"
      style={{ background: `linear-gradient(135deg, ${project.theme.from}, ${project.theme.to})` }}
    >
      <div className="flex items-center gap-1.5 bg-black/15 px-3 py-2">
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
        <span className="h-2 w-2 rounded-full bg-white/40" />
      </div>
      <div className='overflow-y-auto no-scrollbar '>

        <img src={project.image} alt="" className='p-1 object-full rounded-2xl' />
      </div>
    </div>
  )
}

export default function Projects() {
  return (
    <section id="projects" className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Projects"
        align="center"
        title="Things I've built"
        description="Four projects I shipped to practice real product thinking — not just tutorials followed to completion. You can scroll through the projects if they exceed the available height."
      />

      <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
        {projects.map((project, i) => (
          <Reveal key={project.name} delay={(i % 2) * 100}>
            <Card glow className="h-full p-4 sm:p-5">
              <ProjectPreview project={project} />

              <div className="mt-5 flex items-start justify-between gap-3">
                <div>
                  <span className="font-mono text-[11px] uppercase tracking-wide text-signal">
                    {project.tag}
                  </span>
                  <h3 className="mt-1 font-display text-xl font-semibold">{project.name}</h3>
                </div>
              </div>

              <p className="mt-3 text-sm leading-relaxed text-slate">{project.description}</p>

              <div className="mt-4 flex flex-wrap gap-2">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-full bg-surface px-3 py-1 font-mono text-[11px] text-ink/70"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="mt-6 flex items-center gap-3">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex flex-1 items-center justify-center gap-2 rounded-full border border-line px-4 py-2.5 text-sm font-semibold text-ink transition-all hover:-translate-y-0.5 hover:border-ink"
                >
                  <FiGithub /> Code
                </a>
                {project.demo ? (
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-full bg-ink px-4 py-2.5 text-sm font-semibold text-white transition-all hover:-translate-y-0.5 hover:bg-signal"
                  >
                    <FiExternalLink /> Live Demo
                  </a>
                ) : (
                  <span className="inline-flex flex-1 cursor-not-allowed items-center justify-center gap-2 rounded-full bg-surface px-4 py-2.5 text-sm font-medium text-slate-light">
                    Demo soon
                  </span>
                )}
              </div>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
