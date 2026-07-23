import Reveal from './Reveal'

export default function SectionHeading({ eyebrow, title, description, align = 'left' }) {
  const isCenter = align === 'center'
  return (
    <div className={isCenter ? 'text-center mx-auto max-w-2xl' : 'max-w-2xl'}>
      <Reveal>
        <span className="eyebrow">{eyebrow}</span>
      </Reveal>
      <Reveal delay={80}>
        <h2 className="mt-4 text-3xl sm:text-4xl font-semibold text-balance">{title}</h2>
      </Reveal>
      {description && (
        <Reveal delay={140}>
          <p className="mt-4 text-slate leading-relaxed">{description}</p>
        </Reveal>
      )}
    </div>
  )
}
