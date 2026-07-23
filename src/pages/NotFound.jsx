import { Link } from 'react-router-dom'
import Button from '../components/ui/Button'

export default function NotFound() {
  return (
    <section className="container-page flex min-h-screen flex-col items-center justify-center py-24 text-center">
      <span className="font-mono text-sm text-signal">404</span>
      <h1 className="mt-4 font-display text-3xl font-semibold sm:text-4xl">
        This page hasn&apos;t been built yet.
      </h1>
      <p className="mt-4 max-w-md text-slate">
        The page you&apos;re looking for doesn&apos;t exist. Let&apos;s get you back to the portfolio.
      </p>
      <Button as={Link} to="/" variant="primary" className="mt-8">
        Back to Home
      </Button>
    </section>
  )
}
