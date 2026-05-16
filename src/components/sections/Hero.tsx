import { motion } from 'framer-motion'
import { useTypewriter } from '../../hooks/useTypewriter'
import { Button } from '../ui/Button'
import { SITE_META } from '../../utils/constants'

const SKILL_CHIPS = [
  'React.js', 'TypeScript', 'Node.js', 'Next.js',
  'Redux', 'Tailwind CSS', 'Micro-frontend', 'RTK Query',
]

/** Stagger config for hero elements */
const stagger = {
  container: { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.2 } } },
  item: {
    hidden: { opacity: 0, y: 24 },
    show:   { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
  },
}

/**
 * Hero section:
 *   - Subtle animated grid background
 *   - Typewriter effect on surname
 *   - Staggered reveal of all elements
 *   - CTA buttons + skill chips
 */
export function Hero() {
  const { displayed, done } = useTypewriter('RASTEGAR', 80, 600)

  const scrollTo = (id: string) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center px-[5vw] pt-[80px]"
      aria-label="Hero"
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <div
          className="absolute inset-0 opacity-[0.07]"
          style={{
            backgroundImage:
              'linear-gradient(#1E2A40 1px, transparent 1px), linear-gradient(90deg, #1E2A40 1px, transparent 1px)',
            backgroundSize: '60px 60px',
          }}
        />
        {/* Radial glow */}
        <div
          className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 70%)' }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-container w-full mx-auto">
        <motion.div
          variants={stagger.container}
          initial="hidden"
          animate="show"
          className="max-w-5xl"
        >
          {/* Eyebrow */}
          <motion.div
            variants={stagger.item}
            className="flex items-center gap-3 font-mono text-sm text-text-secondary mb-5"
          >
            <span className="w-10 h-px bg-accent flex-shrink-0" aria-hidden="true" />
            Hi, I'm
          </motion.div>

          {/* Name — two lines: ROYA / RASTEGARKANGACHER */}
          <motion.h1
            variants={stagger.item}
            className="font-display font-black text-text-primary mb-4 leading-[1.05]"
          >
            <span className="block" style={{ fontSize: 'clamp(2.5rem, 8vw, 5.5rem)', letterSpacing: '-0.02em' }}>
              ROYA
            </span>
            <span
              className="block text-accent"
              style={{ fontSize: 'clamp(1rem, 4.8vw, 4rem)', letterSpacing: '-0.02em', wordBreak: 'break-all' }}
            >
              {displayed}
              {!done && (
                <span className="inline-block w-[3px] h-[0.85em] bg-accent ml-0.5 align-middle animate-blink" aria-hidden="true" />
              )}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={stagger.item}
            className="font-display text-[clamp(1.2rem,2.5vw,1.8rem)] text-text-secondary mb-6 font-normal"
          >
            {SITE_META.title}
          </motion.p>

          {/* Bio */}
          <motion.p
            variants={stagger.item}
            className="font-body text-lg text-text-secondary leading-relaxed max-w-xl mb-10"
          >
            {SITE_META.bio}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={stagger.item} className="flex flex-wrap gap-4 mb-14">
            <Button
              variant="primary"
              size="md"
              onClick={() => scrollTo('projects')}
            >
              View My Work
            </Button>
            <Button
              variant="outline"
              size="md"
              onClick={() => scrollTo('contact')}
            >
              Contact Me
            </Button>
          </motion.div>

          {/* Skill chips */}
          <motion.div
            variants={stagger.item}
            className="flex flex-wrap gap-2"
            aria-label="Key skills"
          >
            {SKILL_CHIPS.map((chip) => (
              <span
                key={chip}
                className="font-mono text-[11px] text-text-secondary border border-border-bright
                           px-2.5 py-1 bg-bg-elevated hover:text-accent hover:border-accent
                           transition-all duration-200 cursor-default"
              >
                {chip}
              </span>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
        aria-hidden="true"
      >
        <span className="font-mono text-[10px] text-text-muted tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}
          className="w-px h-8 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  )
}