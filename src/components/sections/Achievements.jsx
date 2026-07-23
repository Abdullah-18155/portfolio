import { HiOutlineFolderOpen, HiOutlineAcademicCap, HiOutlineCode } from 'react-icons/hi'
import { useReveal } from '../../hooks/useReveal'
import { useCounter } from '../../hooks/useCounter'

const stats = [
  { icon: HiOutlineFolderOpen, value: 4, suffix: '+', label: 'Projects Completed' },
  { icon: HiOutlineAcademicCap, value: 13, suffix: '+', label: 'Technologies Learned' },
  { icon: HiOutlineCode, value: 4, suffix: '+', label: 'GitHub Repositories' },
]

function Stat({ icon: Icon, value, suffix, label, active }) {
  const count = useCounter(value, active)
  return (
    <div className="flex flex-col items-center gap-3 px-6 py-8 text-center">
      <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-signal">
        <Icon size={24} />
      </div>
      <p className="font-display text-4xl font-bold text-white sm:text-5xl">
        {count}
        <span className="text-signal">{suffix}</span>
      </p>
      <p className="font-mono text-xs uppercase tracking-wide text-white/50">{label}</p>
    </div>
  )
}

export default function Achievements() {
  const [ref, visible] = useReveal({ threshold: 0.4 })

  return (
    <section className="container-page py-4">
      <div
        ref={ref}
        className="grid grid-cols-1 divide-y divide-white/10 rounded-3xl bg-ink sm:grid-cols-3 sm:divide-x sm:divide-y-0"
      >
        {stats.map((stat) => (
          <Stat key={stat.label} {...stat} active={visible} />
        ))}
      </div>
    </section>
  )
}
