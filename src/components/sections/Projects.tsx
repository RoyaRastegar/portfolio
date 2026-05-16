import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'
import { ProjectCard } from '../ui/ProjectCard'
import { projects } from '../../data/projects'
import { cn } from '../../utils/cn'
import type { ProjectCategory } from '../../types'

type FilterTab = 'all' | ProjectCategory

const TABS: { id: FilterTab; label: string }[] = [
  { id: 'all',       label: 'All'       },
  { id: 'frontend',  label: 'Frontend'  },
  { id: 'fullstack', label: 'Fullstack' },
  { id: 'backend',   label: 'Backend'   },
]

export function Projects() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>('all')

  const filtered = activeFilter === 'all'
    ? projects
    : projects.filter((p) => p.category === activeFilter)

  return (
    <section id="projects" className="relative px-[5vw] py-[120px] max-w-container mx-auto" aria-label="Projects">
      <SectionHeader eyebrow="Case Studies" title="Featured Projects" />

      {/* Filter tabs */}
      <div
        className="flex border border-border-bright mb-10 w-fit"
        role="tablist"
        aria-label="Filter projects by category"
      >
        {TABS.map((tab) => (
          <button
            key={tab.id}
            role="tab"
            aria-selected={activeFilter === tab.id}
            onClick={() => setActiveFilter(tab.id)}
            className={cn(
              'font-mono text-[11px] tracking-widest uppercase px-5 py-2.5',
              'border-r border-border-bright last:border-r-0',
              'transition-all duration-200',
              activeFilter === tab.id
                ? 'bg-accent text-bg-base font-bold'
                : 'text-text-secondary hover:bg-accent/10 hover:text-accent'
            )}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Grid — single column since each card is wide (screenshot + content) */}
      <motion.div
        layout
        className="flex flex-col gap-6"
      >
        <AnimatePresence mode="popLayout">
          {filtered.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </AnimatePresence>
      </motion.div>

      {filtered.length === 0 && (
        <p className="font-mono text-sm text-text-muted text-center py-12">
          No projects in this category yet.
        </p>
      )}
    </section>
  )
}