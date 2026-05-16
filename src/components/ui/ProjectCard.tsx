import { useRef, useState } from 'react'
import { motion, useSpring, useTransform, MotionValue } from 'framer-motion'
import { GitFork, Monitor } from 'lucide-react'
import type { Project } from '../../types'

interface ProjectCardProps {
  project: Project
  index: number
}

const GRADIENTS: Record<string, string> = {
  'etiqa-insurance':    'linear-gradient(135deg, #0f2940 0%, #1a4a6e 50%, #0e3558 100%)',
  'shopping-platform':  'linear-gradient(135deg, #1a0a2e 0%, #3d1560 50%, #1a0a2e 100%)',
  'car-rental':         'linear-gradient(135deg, #0a2818 0%, #1a5c35 50%, #0a2818 100%)',
  'pet-management':     'linear-gradient(135deg, #2a1a0a 0%, #6b3a10 50%, #2a1a0a 100%)',
  'real-time-chat':     'linear-gradient(135deg, #0a1a2e 0%, #1a3a6e 50%, #0a1a2e 100%)',
  'notes-app':          'linear-gradient(135deg, #1a1a0a 0%, #4a4a10 50%, #1a1a0a 100%)',
  'ecommerce-checkout': 'linear-gradient(135deg, #2a0a0a 0%, #6b1010 50%, #2a0a0a 100%)',
  'exam-platform':      'linear-gradient(135deg, #0a0a2a 0%, #1a1a6b 50%, #0a0a2a 100%)',
}

// ── Floating particle that drifts on the preview panel ──────────
function Particle({ x, y, size, delay }: { x: string; y: string; size: number; delay: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-accent/20 pointer-events-none"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{ y: [0, -18, 0], opacity: [0.2, 0.6, 0.2] }}
      transition={{ duration: 3 + delay, repeat: Infinity, delay, ease: 'easeInOut' }}
    />
  )
}

// ── Sheen sweep layer (light glare moving on hover) ──────────────
function Sheen({ rotateY }: { rotateY: MotionValue<number> }) {
  const opacity = useTransform(rotateY, [-12, 0, 12], [0.15, 0, 0.15])
  const x       = useTransform(rotateY, [-12, 12], ['-30%', '130%'])
  return (
    <motion.div
      className="absolute inset-0 pointer-events-none z-10"
      style={{ opacity }}
    >
      <motion.div
        className="absolute top-0 bottom-0 w-1/3"
        style={{
          x,
          background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.06), transparent)',
        }}
      />
    </motion.div>
  )
}

export function ProjectCard({ project, index }: ProjectCardProps) {
  const cardRef = useRef<HTMLDivElement>(null)
  const [hovered, setHovered] = useState(false)

  // Framer Motion spring values for ultra-smooth tilt
  const rawX    = useSpring(0, { stiffness: 200, damping: 20 })
  const rawY    = useSpring(0, { stiffness: 200, damping: 20 })
  const rawZ    = useSpring(1, { stiffness: 150, damping: 18 })
  const rawTY   = useSpring(0, { stiffness: 150, damping: 18 }) // translateY (lift)

  const rotateX  = useTransform(rawX, v => `${v}deg`)
  const rotateY  = useTransform(rawY, v => `${v}deg`)
  const scale    = useTransform(rawZ, v => v)
  const translateY = useTransform(rawTY, v => `${v}px`)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = cardRef.current
    if (!card) return
    const rect = card.getBoundingClientRect()
    const cx = rect.left + rect.width / 2
    const cy = rect.top + rect.height / 2
    const dx = (e.clientX - cx) / (rect.width / 2)   // -1 to 1
    const dy = (e.clientY - cy) / (rect.height / 2)  // -1 to 1
    rawX.set(dy * -10)  // tilt up/down max 10deg
    rawY.set(dx * 10)   // tilt left/right max 10deg
  }

  const handleMouseEnter = () => {
    setHovered(true)
    rawZ.set(1.04)   // scale up — card comes forward
    rawTY.set(-10)   // lift up 10px — floating off the page
  }

  const handleMouseLeave = () => {
    setHovered(false)
    rawX.set(0)
    rawY.set(0)
    rawZ.set(1)
    rawTY.set(0)
  }

  const gradient = GRADIENTS[project.id] ?? 'linear-gradient(135deg, #0f1c2e 0%, #1a3a58 100%)'

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        scale,
        translateY,
        transformStyle: 'preserve-3d',
        perspective: '1200px',
        // Glow shadow grows as card lifts toward viewer
        boxShadow: hovered
          ? '0 30px 60px rgba(0,0,0,0.5), 0 0 40px rgba(56,189,248,0.12), 0 0 0 1px rgba(56,189,248,0.3)'
          : '0 4px 20px rgba(0,0,0,0.3), 0 0 0 1px rgba(30,42,64,1)',
        transition: hovered ? undefined : 'box-shadow 0.5s ease',
      }}
      className="bg-bg-surface cursor-default relative p-6 md:p-8
                 grid grid-cols-1 md:grid-cols-[1fr_1.2fr] gap-8 md:gap-12 items-center"
    >
      {/* Sheen sweep on tilt */}
      <Sheen rotateY={rawY} />

      {/* ── LEFT: Screenshot preview panel ──────────── */}
      <div
        className="relative overflow-hidden min-h-[200px] md:min-h-[260px] rounded-lg"
        style={{
          background: project.image ? undefined : gradient,
          transform: 'translateZ(8px)',
          boxShadow: hovered
            ? '0 20px 48px rgba(0,0,0,0.6), 0 0 0 1px rgba(56,189,248,0.2)'
            : '0 8px 32px rgba(0,0,0,0.4)',
          transition: 'box-shadow 0.4s ease',
        }}
      >
        {/* Real project screenshot */}
        {project.image && (
          <img
            src={project.image}
            alt={`${project.title} screenshot`}
            className="absolute inset-0 w-full h-full object-fill object-top"
          />
        )}
        {/* Floating particles — visible on hover */}
        <motion.div
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.4 }}
        >
          <Particle x="15%" y="20%" size={4} delay={0}   />
          <Particle x="70%" y="60%" size={3} delay={0.8} />
          <Particle x="40%" y="75%" size={5} delay={1.4} />
          <Particle x="85%" y="25%" size={3} delay={0.3} />
        </motion.div>

        {/* Mock browser chrome — only shown when no real image */}
        {!project.image && (
          <div className="absolute top-4 left-4 right-4">
          <div className="bg-black/40 px-3 py-2 flex items-center gap-1.5">
            <div className="w-2 h-2 rounded-full bg-red-400/80" />
            <div className="w-2 h-2 rounded-full bg-yellow-400/80" />
            <div className="w-2 h-2 rounded-full bg-green-400/80" />
            <div className="flex-1 mx-2 bg-black/30 px-2 py-0.5">
              <p className="font-mono text-[9px] text-white/40 truncate">
                {project.liveUrl && project.liveUrl !== '#'
                  ? project.liveUrl
                  : 'localhost:5173'}
              </p>
            </div>
          </div>
          <div className="bg-black/20 p-3 space-y-2">
            <div className="h-2 bg-white/10 w-3/4" />
            <div className="h-1.5 bg-white/7 w-full" />
            <div className="h-1.5 bg-white/7 w-5/6" />
            <motion.div
              className="h-6 bg-accent/30 w-1/3 mt-3"
              animate={{ opacity: hovered ? [0.3, 0.6, 0.3] : 0.3 }}
              transition={{ duration: 2, repeat: Infinity }}
            />
          </div>
          </div>
        )}

        {/* Radial glow on hover */}
        <motion.div
          className="absolute inset-0"
          animate={{ opacity: hovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          style={{
            background: 'radial-gradient(circle at 50% 50%, rgba(56,189,248,0.1) 0%, transparent 70%)',
          }}
        />

        {/* Badges */}
        {project.featured && (
          <div className="absolute bottom-3 left-3">
            <span className="font-mono text-[10px] text-amber border border-amber/50 px-2 py-0.5">
              ★ FEATURED
            </span>
          </div>
        )}
        <div className="absolute top-3 right-3">
          <span className="font-mono text-[9px] text-white/50 bg-black/40 px-2 py-0.5 uppercase tracking-wider">
            {project.category}
          </span>
        </div>
      </div>

      {/* ── RIGHT: Content ───────────────────────────── */}
      <div
        className="flex flex-col justify-between"
        style={{ transform: 'translateZ(20px)' }}
      >
        <div>
          <h3 className="font-display font-bold text-lg text-text-primary mb-3 leading-snug">
            {project.title}
          </h3>

          <p className="font-body text-[14px] text-text-secondary leading-relaxed mb-4">
            {project.description}
          </p>

          {/* Tech stack — pipe separated like the reference */}
          <div className="flex flex-wrap gap-x-0 gap-y-1 mb-5 p-3 bg-bg-elevated border border-border">
            {project.techStack.map((tech, i) => (
              <span key={tech} className="font-mono text-[11px] text-text-secondary">
                {tech}
                {i < project.techStack.length - 1 && (
                  <span className="text-text-muted mx-1.5">|</span>
                )}
              </span>
            ))}
          </div>
        </div>

        {/* CTA buttons */}
        <div className="flex gap-3 flex-wrap">
          {project.liveUrl && project.liveUrl !== '#' ? (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-ui text-[12px] font-semibold
                         text-bg-base bg-accent px-4 py-2.5
                         hover:brightness-110 transition-all duration-200"
            >
              <Monitor size={13} />
              Live View
            </a>
          ) : (
            <button
              disabled
              className="flex items-center gap-1.5 font-ui text-[12px]
                         text-text-muted border border-border px-4 py-2.5 cursor-not-allowed opacity-50"
            >
              <Monitor size={13} />
              Live View
            </button>
          )}

          {project.githubUrl && project.githubUrl !== '#' ? (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-1.5 font-ui text-[12px] font-semibold
                         text-text-primary border border-border-bright px-4 py-2.5
                         hover:border-accent hover:text-accent transition-all duration-200"
            >
              <GitFork size={13} />
              View Code
            </a>
          ) : (
            <span className="font-mono text-[11px] text-text-muted italic self-center">
              NDA protected
            </span>
          )}
        </div>
      </div>
    </motion.div>
  )
}