import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { education } from '../../data/education'

export function Education() {
  return (
    <section id="education" className="relative px-[5vw] py-[120px] max-w-container mx-auto" aria-label="Education and Certifications">
      <SectionHeader eyebrow="Education & Certifications" title="Academic & Professional" sectionNum="06" />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {education.map((item, i) => (
          <motion.div
            key={item.id}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-30px' }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="bg-bg-surface border border-border p-6
                       hover:border-accent transition-colors duration-300 group"
          >
            {/* Icon */}
            <div className="text-3xl mb-4" aria-hidden="true">{item.icon}</div>

            {/* Type label */}
            <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-2">
              {item.type}
            </p>

            {/* Name */}
            <h3 className="font-display font-bold text-sm text-text-primary mb-1.5 leading-snug">
              {item.name}
            </h3>

            {/* Institution */}
            <p className="font-ui text-xs text-text-secondary mb-1">{item.institution}</p>

            {/* Date */}
            <p className="font-mono text-[11px] text-text-muted">{item.date}</p>
          </motion.div>
        ))}
      </div>
    </section>
  )
}
