import { useState } from 'react'
import { FiGithub, FiLinkedin, FiMail, FiSend } from 'react-icons/fi'
import Reveal from '../ui/Reveal'
import SectionHeading from '../ui/SectionHeading'
import Button from '../ui/Button'

const CONTACT_EMAIL = 'hello.codedbyabdullah@gmail.com'

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const subject = encodeURIComponent(`Portfolio message from ${form.name || 'a visitor'}`)
    const body = encodeURIComponent(`${form.message}\n\n— ${form.name} (${form.email})`)
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
  }

  return (
    <section id="contact" className="container-page py-24 sm:py-32">
      <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
        <div>
          <SectionHeading
            eyebrow="Contact"
            title="Let's build something together."
            description="Have an internship opening, a junior role, or a small frontend project? I'd love to hear from you — I usually reply within a day."
          />

          <Reveal delay={160}>
            <div className="mt-8 flex flex-col gap-4">
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-signal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <FiMail />
                </span>
                {CONTACT_EMAIL}
              </a>
              <a
                href="https://github.com/Abdullah-18155"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-signal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <FiGithub />
                </span>
                github.com/Abdullah-18155
              </a>
              <a
                href="https://www.linkedin.com/in/abdullah-abid-abb2b1402/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm font-medium text-ink transition-colors hover:text-signal"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-surface">
                  <FiLinkedin />
                </span>
                linkedin.com/in/abdullah-abid
              </a>
            </div>
          </Reveal>
        </div>

        <Reveal delay={100}>
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-line bg-white p-6 shadow-card sm:p-8"
          >
            <div className="grid grid-cols-1 gap-5">
              <label className="block">
                <span className="text-sm font-medium text-ink">Name</span>
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  type="text"
                  placeholder="Your name"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate-light outline-none transition-all focus:border-signal focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ink">Email</span>
                <input
                  required
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 w-full rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate-light outline-none transition-all focus:border-signal focus:bg-white"
                />
              </label>

              <label className="block">
                <span className="text-sm font-medium text-ink">Message</span>
                <textarea
                  required
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  rows={4}
                  placeholder="Tell me about the role or project..."
                  className="mt-2 w-full resize-none rounded-xl border border-line bg-surface px-4 py-3 text-sm text-ink placeholder:text-slate-light outline-none transition-all focus:border-signal focus:bg-white"
                />
              </label>

              <Button as="button" type="submit" variant="primary" icon={FiSend} className="w-full">
                Send Message
              </Button>
            </div>
          </form>
        </Reveal>
      </div>
    </section>
  )
}
