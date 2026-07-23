import { useReveal } from '../../hooks/useReveal'
import { cn } from '../../lib/cn'

/**
 * Wraps children and animates them in (fade + slide-up) when scrolled into view.
 * `delay` accepts a Tailwind-safe ms value like 0, 100, 200...
 */
export default function Reveal({ children, delay = 0, className = '', as: Tag = 'div' }) {
  const [ref, visible] = useReveal()

  return (
    <Tag
      ref={ref}
      className={cn(
        'transition-all duration-700 ease-out will-change-transform',
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6',
        className,
      )}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}
