import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { MapPin } from 'lucide-react'
import { SectionHeader } from '../ui/SectionHeader'
import { SITE_META } from '../../utils/constants'
import MyPic from '../../../public/me.jpg'
const STATS = [
  { num: '6+', label: 'Years Exp' },
  { num: '4',  label: 'Companies' },
  { num: '3',  label: 'Countries' },
  { num: '1', label: 'Projects'  },
]

const BIO_PARAGRAPHS = [
  "I'm a FullStack Developer with 6+ years of experience crafting high-performance web applications using React, TypeScript, and Node.js.",
  "I specialise in micro-frontend architecture, dynamic form engines, and complex multi-step workflows — the kind of engineering challenges that require both technical precision and deep UX empathy.",
  "From government payment systems in Tehran to commercial insurance platforms in Kuala Lumpur, I've shipped production features across 4 companies, 3 countries, and countless late-night debugging sessions.",
]

export function About() {
  const { ref, inView } = useInView({ threshold: 0.15, triggerOnce: true })

  return (
    <section id="about" className="relative px-[5vw] py-[120px] max-w-container mx-auto" aria-label="About Me">
      <SectionHeader eyebrow="About Me" title="Engineering Narrative" />

      <div ref={ref} className="grid grid-cols-1 lg:grid-cols-[1fr_1.8fr] gap-12 lg:gap-20 items-start">
        {/* Photo placeholder */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative"
        >
          <div
            className="w-full aspect-[4/5] bg-bg-surface border border-border
                       flex items-center justify-center relative overflow-hidden"
            role="img"
            aria-label="Roya RastegarKangacher — profile photo placeholder"
          >
            <img src={MyPic} alt="Roya RastegarKangacher" className="w-full h-full object-cover" />
          </div>
        </motion.div>

        {/* Text content */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={inView ? { opacity: 1, x: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          {/* Status badges */}
          <div className="flex flex-wrap items-center gap-3 mb-6">
            <span className="flex items-center gap-2 font-mono text-[11px] text-success border border-success/40 px-3 py-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
              Open to Opportunities
            </span>
            <span className="flex items-center gap-1.5 font-mono text-[11px] text-text-secondary">
              <MapPin size={11} />
              {SITE_META.location}
            </span>
          </div>

          {/* Bio */}
          <div className="space-y-4 mb-8">
            {BIO_PARAGRAPHS.map((para, i) => (
              <p key={i} className="font-body text-lg text-text-secondary leading-[1.75]">
                {para}
              </p>
            ))}
          </div>

          {/* Stats row */}
          <div
            className="grid grid-cols-2 sm:grid-cols-4 gap-px bg-border"
            role="list"
            aria-label="Career statistics"
          >
            {STATS.map(({ num, label }) => (
              <div
                key={label}
                role="listitem"
                className="bg-bg-base px-4 py-5 text-center"
              >
                <span className="block font-display font-black text-3xl text-accent mb-1">
                  {num}
                </span>
                <span className="block font-mono text-[10px] text-text-muted tracking-widest uppercase">
                  {label}
                </span>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
