import { useState } from 'react';
import { Download, Menu } from 'lucide-react';
import { cn } from '../../utils/cn';
import { NAV_LINKS, SITE_META } from '../../utils/constants';
import { useActiveSection } from '../../hooks/useActiveSection';
import { MobileMenu } from './MobileMenu';

const SECTION_IDS = NAV_LINKS.map((l) => l.href.replace('#', ''));

/**
 * Sticky top navigation:
 *   - Logo (scrolls to top)
 *   - Nav links with active-section highlighting via IntersectionObserver
 *   - Download CV button
 *   - Mobile hamburger → full-screen MobileMenu
 *   - Backdrop blur glass effect on scroll
 */
export function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const activeId = useActiveSection(SECTION_IDS);

  const scrollTo = (href: string) => {
    const id = href.replace('#', '');
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };
 
  return (
    <>
      <header
        className='fixed top-0 left-0 right-0 z-[999]'
        style={{
          backdropFilter: 'blur(12px)',
          WebkitBackdropFilter: 'blur(12px)',
          background: 'rgba(8,12,20,0.85)',
          borderBottom: '1px solid #1E2A40',
        }}
      >
        <div className='max-w-container mx-auto px-[5vw] h-[60px] flex items-center justify-between'>
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className='font-display font-black text-lg text-accent tracking-tight
                       hover:opacity-80 transition-opacity duration-200'
            aria-label='Scroll to top'
          >
            RR
          </button>

          {/* Desktop nav */}
          <nav
            className='hidden md:flex items-center gap-7'
            aria-label='Main navigation'
          >
            {NAV_LINKS.map((link) => {
              const id = link.href.replace('#', '');
              const isActive = activeId === id;
              return (
                <button
                  key={link.href}
                  onClick={() => scrollTo(link.href)}
                  className={cn(
                    'font-ui text-[13px] font-medium tracking-widest uppercase',
                    'transition-colors duration-200 relative',
                    isActive
                      ? 'text-accent'
                      : 'text-text-secondary hover:text-accent',
                  )}
                  aria-current={isActive ? 'true' : undefined}
                >
                  {link.label}
                  {/* Active underline */}
                  {isActive && (
                    <span className='absolute -bottom-[21px] left-0 right-0 h-[2px] bg-accent' />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Right actions */}
          <div className='flex items-center gap-3'>
            <a
              href={SITE_META.cvUrl}
              download="fullStack-roya-rastegar-cv.pdf"
              className="hidden md:flex items-center gap-1.5 font-mono text-[11px]
                         tracking-widest uppercase text-accent border border-accent
                         px-4 py-1.5 hover:bg-accent/10 transition-colors duration-200"
              aria-label="Download CV"
            >
              <Download size={12} />
              CV
            </a>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className='md:hidden text-text-secondary hover:text-accent
                         transition-colors duration-200 p-1'
              aria-label='Open navigation menu'
              aria-expanded={mobileOpen}
            >
              <Menu size={24} />
            </button>
          </div>
        </div>
      </header>

      <MobileMenu isOpen={mobileOpen} onClose={() => setMobileOpen(false)} />
    </>
  );
}
