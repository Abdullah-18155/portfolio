import { cn } from '../../lib/cn'

export default function Card({ children, className = '', glow = false, as: Tag = 'div', ...props }) {
  return (
    <Tag
      {...props}
      className={cn(
        'group relative rounded-2xl border border-line bg-white p-6 shadow-soft transition-all duration-300 ease-out',
        'hover:-translate-y-1 hover:shadow-card hover:border-transparent',
        glow && 'hover:shadow-glow',
        className,
      )}
    >
      {children}
    </Tag>
  )
}
