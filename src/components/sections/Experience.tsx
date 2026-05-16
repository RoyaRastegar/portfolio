import { SectionHeader } from '../ui/SectionHeader'
import { experience } from '../../data/experience'
import { FaBriefcase } from "react-icons/fa";
/**
 * Experience section — 3-column grid of flip cards.
 * Front: icon + role + period + company
 * Back:  bullet points (job details)
 * Flip triggered by hover (CSS only, no JS needed)
 */
export function Experience() {
  return (
    <section
      id="experience"
      className="relative px-[5vw] py-[120px] max-w-container mx-auto"
      aria-label="Work Experience"
    >
      <SectionHeader eyebrow="Career Timeline" title="Work Experience"  />

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {experience.map((item) => (
          <div
            key={item.id}
            className="flip-card"
            style={{ height: '320px', perspective: '1200px' }}
          >
            <div className="flip-card-inner" style={{
              position: 'relative',
              width: '100%',
              height: '100%',
              transformStyle: 'preserve-3d',
              transition: 'transform 0.65s cubic-bezier(0.4, 0.2, 0.2, 1)',
            }}>

              {/* ── FRONT ─────────────────────────────────── */}
              <div
                className="absolute inset-0 flex flex-col items-center justify-center
                           text-center p-7 bg-bg-surface border border-border"
                style={{ backfaceVisibility: 'hidden', WebkitBackfaceVisibility: 'hidden' }}
              >
                {/* Briefcase icon circle */}
                <div className="w-14 h-14 rounded-full bg-bg-elevated border border-border-bright
                                flex items-center justify-center mb-5">
                  <FaBriefcase size={22} className="text-accent" />
                </div>

                {/* Role */}
                <h3 className="font-display font-bold text-lg text-text-primary mb-2 leading-snug">
                  {item.role}
                </h3>

                {/* Period */}
                <p className="font-mono text-[12px] text-accent mb-3">{item.period}</p>

                {/* Company */}
                <p className="font-ui text-sm text-text-secondary leading-snug mb-5">
                  {item.company}
                  <span className="block font-mono text-[11px] text-text-secondary mt-1">
                    {item.location}
                  </span>
                </p>

                {/* Hint */}
                <p className="font-body italic text-[13px] text-text-muted">
                  Hover to see details
                </p>
              </div>

              {/* ── BACK ──────────────────────────────────── */}
              <div
                className="absolute inset-0 flex flex-col p-6 overflow-y-auto
                           bg-bg-elevated border border-accent/40"
                style={{
                  backfaceVisibility: 'hidden',
                  WebkitBackfaceVisibility: 'hidden',
                  transform: 'rotateY(180deg)',
                }}
              >
                {/* Back header */}
                <div className="flex items-center gap-2 mb-5 pb-3 border-b border-border">
                  <span className="font-ui font-bold text-base text-text-primary">
                    Job Details
                  </span>
                  <span className="font-mono text-[10px] text-accent">↓</span>
                </div>

                {/* Bullets */}
                <ul className="space-y-3 flex-1">
                  {item.bullets.map((bullet, i) => (
                    <li key={i} className="flex gap-2.5">
                      <span className="mt-[6px] w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                      <span className="font-body text-[13px] text-text-secondary leading-relaxed">
                        {bullet}
                      </span>
                    </li>
                  ))}
                </ul>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-border">
                  {item.techStack.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono text-[10px] px-2 py-0.5
                                 border border-accent/30 text-accent bg-bg-surface"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        ))}
      </div>

      {/* Flip card CSS — pure CSS hover flip */}
      <style>{`
        .flip-card:hover .flip-card-inner {
          transform: rotateY(180deg);
        }
        @media (hover: none) {
          .flip-card .flip-card-inner {
            transform: none !important;
          }
        }
      `}</style>
    </section>
  )
}