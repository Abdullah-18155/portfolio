import { useEffect, useState } from 'react'
import { HiOutlineMenu, HiOutlineX } from 'react-icons/hi'
import { cn } from '../../lib/cn'

const links = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Journey', href: '#journey' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-50 transition-all duration-300',
        scrolled ? 'py-3' : 'py-5',
      )}
    >
      <div className="container-page">
        <div
          className={cn(
            'flex items-center justify-between rounded-full px-4 py-2.5 transition-all duration-300',
            scrolled ? 'bg-white/80 backdrop-blur-md border border-line shadow-soft' : 'bg-transparent',
          )}
        >
          <a href="#top" className="flex items-center gap-2 font-display font-semibold text-ink">
            <span className="tracking-tighter flex h-8 w-8 items-center justify-center rounded-lg bg-ink font-[consolas] text-signal">
              {'</>'}
            </span>
            Abdullah<span className="text-signal">.</span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-slate transition-colors hover:text-ink"
              >
                {link.label}
              </a>
            ))}
          </nav>

          <a
            href="#contact"
            className="hidden md:inline-flex items-center rounded-full bg-ink px-5 py-2 text-sm font-semibold text-white transition-all hover:bg-signal hover:-translate-y-0.5"
          >
            Let&apos;s talk
          </a>

          <button
            className="md:hidden flex h-9 w-9 items-center justify-center rounded-full text-ink"
            onClick={() => setOpen((v) => !v)}
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
          >
            {open ? <HiOutlineX size={22} /> : <HiOutlineMenu size={22} />}
          </button>
        </div>

        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-out',
            open ? 'max-h-96 opacity-100 mt-2' : 'max-h-0 opacity-0',
          )}
        >
          <div className="rounded-2xl border border-line bg-white p-4 shadow-card flex flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="rounded-lg px-3 py-2.5 text-sm font-medium text-slate hover:bg-surface hover:text-ink"
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-1 rounded-lg bg-ink px-3 py-2.5 text-center text-sm font-semibold text-white"
            >
              Let&apos;s talk
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
