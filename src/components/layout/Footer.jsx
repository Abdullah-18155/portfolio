import { FiGithub, FiLinkedin, FiMail, FiArrowUp } from 'react-icons/fi'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-line py-10">
      <div className="container-page flex flex-col items-center gap-6 sm:flex-row sm:justify-between">
        <p className="font-mono text-xs text-slate-light">
          © {year} Abdullah Abid. Built with React &amp; Tailwind CSS.
        </p>

        <div className="flex items-center gap-4">
          <a
            href="https://github.com/Abdullah-18155"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
            className="text-slate transition-colors hover:text-signal"
          >
            <FiGithub size={17} />
          </a>
          <a
            href="https://www.linkedin.com/in/abdullah-abid-abb2b1402/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
            className="text-slate transition-colors hover:text-signal"
          >
            <FiLinkedin size={17} />
          </a>
          <a href="mailto:hello.codedbyabdullah@gmail.com" aria-label="Email" className="text-slate transition-colors hover:text-signal">
            <FiMail size={17} />
          </a>
          <a
            href="#top"
            aria-label="Back to top"
            className="ml-2 flex h-9 w-9 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-ink"
          >
            <FiArrowUp size={15} />
          </a>
        </div>
      </div>
    </footer>
  )
}
