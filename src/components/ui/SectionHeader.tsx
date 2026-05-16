import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { cn } from '../../utils/cn'

interface SectionHeaderProps {
  eyebrow: string
  title: string
  className?: string
}

/**
 * Every section opens with:
 *   - a large faded background section number (e.g. "01")
 *   - a monospace eyebrow label
 *   - a Syne display heading
 */
export function SectionHeader({ eyebrow, title, className }: SectionHeaderProps) {
  const { ref, inView } = useInView({ threshold: 0.2, triggerOnce: true })

  return (
    <div ref={ref} className={cn('relative mb-12', className)}>
      {/* Background decorative number */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="relative z-10"
      >
        <p className="eyebrow mb-3">{eyebrow}</p>
        <h2 className="text-section font-display font-bold text-text-primary">
          {title}
        </h2>
      </motion.div>
    </div>
  )
}
