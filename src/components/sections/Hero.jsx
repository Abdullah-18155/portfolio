import { useMemo } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi'
import { HiOutlineDownload, HiOutlineSparkles } from 'react-icons/hi'
import Reveal from '../ui/Reveal'
import Button from '../ui/Button'
import { useTypewriter } from '../../hooks/useTypewriter'
import profile from '../../assets/profile.png'

const CODE = `const developer = {
  name: 'Abdullah Abid',
  role: 'Frontend Developer',
  stack: ['React', 'Vite', 'Tailwind'],
  focus: 'clean, accessible UI',
  openTo: 'internships',
};`

function tokenize(code) {
  const regex = /('.*?'|\bconst\b)/g
  const tokens = []
  let lastIndex = 0
  let match
  while ((match = regex.exec(code))) {
    if (match.index > lastIndex) tokens.push({ text: code.slice(lastIndex, match.index), type: 'plain' })
    tokens.push({ text: match[0], type: match[0].startsWith("'") ? 'string' : 'keyword' })
    lastIndex = match.index + match[0].length
  }
  if (lastIndex < code.length) tokens.push({ text: code.slice(lastIndex), type: 'plain' })
  return tokens
}

const tokenClass = {
  string: 'text-mint',
  keyword: 'text-signal',
  plain: 'text-white/70',
}

function CodeWindow() {
  const [typed, done] = useTypewriter(CODE, { speed: 18, startDelay: 500 })
  const tokens = useMemo(() => tokenize(CODE), [])

  let budget = typed.length
  const revealed = []
  for (const t of tokens) {
    if (budget <= 0) break
    const slice = t.text.slice(0, budget)
    revealed.push({ ...t, text: slice })
    budget -= t.text.length
  }

  return (
    <div className="rounded-2xl border border-white/10 bg-ink shadow-glow overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-white/10 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 font-mono text-[11px] text-white/40">about-me.js</span>
      </div>
      <pre className="px-5 py-5 font-mono text-[13px] leading-6 sm:text-sm sm:leading-7 whitespace-pre-wrap">
        {revealed.map((t, i) => (
          <span key={i} className={tokenClass[t.type]}>
            {t.text}
          </span>
        ))}
        <span className={done ? 'animate-blink text-signal' : 'text-signal'}>▍</span>
      </pre>
    </div>
  )
}

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-36 pb-24 sm:pt-44 sm:pb-32">
      <div
        className="pointer-events-none absolute inset-0 bg-grid mask-fade-b opacity-60"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -top-32 right-[-10%] h-[420px] w-[420px] rounded-full bg-signal/10 blur-3xl"
        aria-hidden="true"
      />

      <div className="container-page relative grid grid-cols-1 gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
        <div>
          <Reveal>
            <span className="eyebrow">
              <HiOutlineSparkles /> Open to internships &amp; junior roles
            </span>
          </Reveal>

          <Reveal delay={80}>
            <h1 className="mt-5 text-4xl font-semibold leading-[1.08] text-balance sm:text-5xl lg:text-6xl">
              Hi, I&apos;m Abdullah Abid —
              <br />
              <span className="text-signal">Frontend Developer.</span>
            </h1>
          </Reveal>

          <Reveal delay={160}>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate">
              I&apos;m a passionate frontend developer who enjoys building clean, responsive, and
              modern web applications using React and JavaScript.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Button as="a" href="#projects" variant="primary">
                View Projects
              </Button>
              <Button as="a" href="#contact" variant="secondary">
                Contact Me →
              </Button>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <div className="mt-10 flex items-center gap-4">
              <a
                href="https://github.com/Abdullah-18155"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:text-signal"
              >
                <FiGithub size={18} />
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-abid-abb2b1402/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn profile"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:text-signal"
              >
                <FiLinkedin size={18} />
              </a>
              <a
                href="mailto:hello.codedbyabdullah@gmail.com"
                aria-label="Email Abdullah"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-ink hover:text-signal"
              >
                <FiMail size={18} />
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative mx-auto w-full max-w-md">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-gradient-to-br from-signal/15 via-mint/10 to-transparent blur-2xl" />
          <div className="relative rounded-[2rem] border border-line bg-white p-3 shadow-card animate-floatSlow">
            <img
              src={profile}
              alt="Portrait of Abdullah Abid"
              className="aspect-[4/5] w-full rounded-[1.5rem] object-cover"
            />
            <div className="absolute -left-6 top-8 rounded-xl border border-line bg-white px-4 py-2.5 text-xs font-semibold text-ink shadow-soft">
              🇵🇰 Based in Pakistan
            </div>
          </div>

          <div className="relative -mt-10 ml-6 hidden sm:block sm:max-w-[19rem] lg:max-w-[20rem]">
            <CodeWindow />
          </div>
        </Reveal>
      </div>

      <Reveal delay={420}>
        <a
          href="#about"
          className="mx-auto mt-20 flex w-fit flex-col items-center gap-2 text-xs font-medium text-slate transition-colors hover:text-ink"
        >
          Scroll to explore
          <FiArrowDown className="animate-bounce" />
        </a>
      </Reveal>
    </section>
  )
}
