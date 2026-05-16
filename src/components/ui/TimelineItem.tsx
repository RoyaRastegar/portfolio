import { useState } from 'react'
import { motion } from 'framer-motion'
import { ChevronDown, ChevronUp, MapPin, Calendar } from 'lucide-react'
import { Badge } from './Badge'
import type { ExperienceItem } from '../../types'

interface TimelineItemProps {
  item: ExperienceItem
  index: number
}

/**
 * Single timeline entry with:
 *   - glowing cyan dot connector
 *   - role, company, period, location
 *   - tech stack chips
 *   - collapsible bullet points
 */
export function TimelineItem({ item, index }: TimelineItemProps) {
  const [expanded, setExpanded] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true, margin: '-40px' }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="relative pl-10 pb-12 last:pb-0"
    >
      {/* Vertical dashed line */}
      <div
        className="absolute left-[5px] top-4 bottom-0 w-px"
        style={{ borderLeft: '2px dashed #2A3A58' }}
        aria-hidden="true"
      />

      {/* Glowing dot */}
      <div
        className="absolute left-0 top-1 w-3 h-3 rounded-full bg-accent"
        style={{ boxShadow: '0 0 0 4px rgba(56,189,248,0.15), 0 0 12px rgba(56,189,248,0.3)' }}
        aria-hidden="true"
      />

      {/* Meta row */}
      <div className="flex flex-wrap items-center gap-3 mb-1">
        <span className="flex items-center gap-1 font-mono text-[11px] text-accent">
          <Calendar size={11} />
          {item.period}
        </span>
        <span className="flex items-center gap-1 font-mono text-[11px] text-text-muted">
          <MapPin size={11} />
          {item.location}
        </span>
      </div>

      {/* Role */}
      <h3 className="font-display font-bold text-xl text-text-primary mb-0.5">
        {item.role}
      </h3>

      {/* Company */}
      <p className="font-ui text-sm text-text-secondary mb-4">{item.company}</p>

      {/* Tech stack */}
      <div className="flex flex-wrap gap-1.5 mb-4">
        {item.techStack.map((tech) => (
          <Badge key={tech} hoverable>
            {tech}
          </Badge>
        ))}
      </div>

      {/* Toggle button */}
      <button
        onClick={() => setExpanded((p) => !p)}
        aria-expanded={expanded}
        className="flex items-center gap-1.5 font-mono text-[11px] text-accent
                   tracking-wider uppercase hover:opacity-70 transition-opacity duration-200 mb-3"
      >
        {expanded ? <ChevronUp size={12} /> : <ChevronDown size={12} />}
        {expanded ? 'Hide details' : 'Show details'}
      </button>

      {/* Bullet points */}
      <motion.ul
        initial={false}
        animate={{ height: expanded ? 'auto' : 0, opacity: expanded ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        className="overflow-hidden space-y-2"
        aria-label={`Details for ${item.role} at ${item.company}`}
      >
        {item.bullets.map((bullet, i) => (
          <li
            key={i}
            className="relative pl-5 font-body text-[15px] text-text-secondary leading-relaxed"
          >
            <span
              className="absolute left-0 top-[0.4em] text-accent font-mono text-xs"
              aria-hidden="true"
            >
              —
            </span>
            {bullet}
          </li>
        ))}
      </motion.ul>
    </motion.div>
  )
}
