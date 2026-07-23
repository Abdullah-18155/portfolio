import { useState } from 'react'
import { cn } from '../../lib/cn'

const variants = {
  primary:
    'bg-ink text-white shadow-soft hover:shadow-lift hover:-translate-y-0.5 hover:bg-signal',
  secondary:
    'bg-white text-ink border border-line hover:border-ink hover:-translate-y-0.5 shadow-soft',
  ghost: 'text-ink hover:text-signal',
}

export default function Button({
  as = 'a',
  variant = 'primary',
  className = '',
  children,
  icon: Icon,
  ...props
}) {
  const [ripples, setRipples] = useState([])
  const Tag = as

  const handleClick = (e) => {
    if (variant !== 'ghost') {
      const rect = e.currentTarget.getBoundingClientRect()
      const size = Math.max(rect.width, rect.height) * 2
      const x = e.clientX - rect.left - size / 2
      const y = e.clientY - rect.top - size / 2
      const id = Date.now()
      setRipples((prev) => [...prev, { id, x, y, size }])
      setTimeout(() => {
        setRipples((prev) => prev.filter((r) => r.id !== id))
      }, 650)
    }
    props.onClick?.(e)
  }

  return (
    <Tag
      {...props}
      onClick={handleClick}
      className={cn(
        'relative inline-flex items-center justify-center gap-2 overflow-hidden rounded-full px-6 py-3 text-sm font-semibold transition-all duration-300 ease-out',
        variants[variant],
        className,
      )}
    >
      {Icon && <Icon className="text-base" aria-hidden="true" />}
      <span className="relative z-10">{children}</span>
      {ripples.map((r) => (
        <span
          key={r.id}
          className="pointer-events-none absolute rounded-full bg-white/30 animate-ripple"
          style={{
            left: r.x,
            top: r.y,
            width: r.size,
            height: r.size,
          }}
        />
      ))}
    </Tag>
  )
}
