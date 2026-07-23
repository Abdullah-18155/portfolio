import Reveal from '../ui/Reveal'
import Card from '../ui/Card'
import SectionHeading from '../ui/SectionHeading'
import { services } from '../../data/services'

export default function Services() {
  return (
    <section id="services" className="container-page py-24 sm:py-32">
      <SectionHeading
        eyebrow="Services"
        align="center"
        title="What I can help with"
        description="Focused frontend work — the kind of scope that fits an internship, a freelance gig, or a small product team."
      />

      <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-5">
        {services.map((service, i) => (
          <Reveal key={service.title} delay={i * 80} className={i === 4 ? 'sm:col-span-2 lg:col-span-1' : ''}>
            <Card className="h-full">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-mint-light text-mint">
                <service.icon size={22} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold">{service.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate">{service.description}</p>
            </Card>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
