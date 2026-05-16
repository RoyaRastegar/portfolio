import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { X, Download } from 'lucide-react'
import { NAV_LINKS, SITE_META } from '../../utils/constants'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
}

/**
 * Full-screen overlay mobile navigation.
 * Locks body scroll when open. Links smooth-scroll to sections.
 */
export function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [isOpen])

  const handleNavClick = (href: string) => {
    onClose()
    // Small delay lets the menu close before scrolling
    setTimeout(() => {
      const id = href.replace('#', '')
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    }, 300)
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.25 }}
          className="fixed inset-0 bg-bg-base z-[998] flex flex-col items-center justify-center"
          role="dialog"
          aria-modal="true"
          aria-label="Mobile navigation"
        >
          {/* Close button */}
          <button
            onClick={onClose}
            className="absolute top-5 right-6 text-text-secondary hover:text-accent
                       transition-colors duration-200 p-2"
            aria-label="Close navigation menu"
          >
            <X size={28} />
          </button>

          {/* Nav links */}
          <nav className="flex flex-col items-center gap-8">
            {NAV_LINKS.map((link, i) => (
              <motion.button
                key={link.href}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ delay: i * 0.06 }}
                onClick={() => handleNavClick(link.href)}
                className="font-display text-3xl font-bold text-text-primary
                           hover:text-accent transition-colors duration-200"
              >
                {link.label}
              </motion.button>
            ))}

            <motion.a
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ delay: NAV_LINKS.length * 0.06 }}
              href={SITE_META.cvUrl}
              download="fullStack-roya-rastegar-cv.pdf"
              target="_blank"
              rel="noopener noreferrer"
              onClick={onClose}
              className="flex items-center gap-2 font-mono text-sm text-accent
                         border border-accent px-6 py-3 mt-4
                         hover:bg-accent/10 transition-colors duration-200"
            >
              <Download size={14} />
              Download CV
            </motion.a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  )
}