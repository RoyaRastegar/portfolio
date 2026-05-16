import { ArrowUp, GitFork, Link2, Mail } from 'lucide-react'
import { SOCIAL_LINKS, SITE_META } from '../../utils/constants'
import { NAV_LINKS } from '../../utils/constants'

export function Footer() {
  return (
    <footer className="bg-bg-surface border-t border-border">
      <div className="max-w-container mx-auto px-[5vw] py-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          {/* Brand */}
          <div>
            <p className="font-display font-bold text-base text-text-primary">
              {SITE_META.name}
            </p>
            <p className="font-mono text-[11px] text-text-muted mt-1">
              {SITE_META.title}
            </p>
          </div>

          {/* Nav links */}
          <nav className="flex flex-wrap gap-5" aria-label="Footer navigation">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => {
                  const id = link.href.replace('#', '')
                  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
                }}
                className="font-ui text-xs text-text-secondary hover:text-accent
                           transition-colors duration-200 uppercase tracking-wider"
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Social + back to top */}
          <div className="flex items-center gap-4">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub profile"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <GitFork size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn profile"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <Link2 size={18} />
            </a>
            <a
              href={SOCIAL_LINKS.email}
              aria-label="Send email"
              className="text-text-secondary hover:text-accent transition-colors duration-200"
            >
              <Mail size={18} />
            </a>

            <button
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
              aria-label="Back to top"
              className="border border-border-bright text-text-secondary p-1.5
                         hover:border-accent hover:text-accent transition-all duration-200"
            >
              <ArrowUp size={16} />
            </button>
          </div>
        </div>

        {/* Credit */}
        <div className="mt-8 pt-6 border-t border-border">
          <p className="font-mono text-[11px] text-text-muted text-center">
            Built with React 18, TypeScript & Tailwind CSS — by Roya RastegarKangacher · {new Date().getFullYear()}
          </p>
        </div>
      </div>
    </footer>
  )
}
