import { HiOutlineRefresh, HiOutlineCode, HiOutlineDeviceMobile, HiOutlineCube } from 'react-icons/hi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Card from '../ui/Card'

const pillars = [
  {
    icon: HiOutlineRefresh,
    title: 'Continuous learning',
    description: 'I treat every new concept — a hook, a pattern, a tool — as something worth actually understanding, not just copying.',
  },
  {
    icon: HiOutlineCode,
    title: 'Clean code',
    description: 'Readable, consistent, and componentized. Code that the next developer — or future me — can pick up without guessing.',
  },
  {
    icon: HiOutlineDeviceMobile,
    title: 'Responsive by default',
    description: 'Every layout I ship is designed mobile‑first and tested across breakpoints before I call it done.',
  },
  {
    icon: HiOutlineCube,
    title: 'Component‑based thinking',
    description: 'I break interfaces into small, reusable pieces — it keeps projects maintainable as they grow.',
  },
]

export default function About() {
  return (
    <section id="about" className="container-page py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-16 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <SectionHeading
          eyebrow="About Me"
          title="Frontend development is where I focus my energy."
          description="I build real-world projects to sharpen my skills, not just to check a box — and I'm actively looking for an internship or junior role where I can keep growing alongside a team."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {pillars.map((pillar, i) => (
            <Reveal key={pillar.title} delay={i * 90}>
              <Card className="h-full">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-signal-light text-signal">
                  <pillar.icon size={22} />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold">{pillar.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-slate">{pillar.description}</p>
              </Card>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
