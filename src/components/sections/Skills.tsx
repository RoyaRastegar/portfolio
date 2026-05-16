import { motion } from 'framer-motion'
import { SectionHeader } from '../ui/SectionHeader'

interface Skill {
  name: string
  color: string
  svg: React.ReactNode
}

const SKILLS: Skill[] = [
  {
    name: 'React.js',
    color: '#61DAFB',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="12" cy="12" r="2.05" fill="#61DAFB"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(60 12 12)"/>
        <ellipse cx="12" cy="12" rx="10" ry="3.8" stroke="#61DAFB" strokeWidth="1.1" fill="none" transform="rotate(120 12 12)"/>
      </svg>
    ),
  },
  {
    name: 'TypeScript',
    color: '#3178C6',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#3178C6"/>
        <path d="M9 10.5H7V9h6v1.5h-2V16H9v-5.5z" fill="white"/>
        <path d="M14.5 14.2c0 .7.6 1.1 1.3 1.1.7 0 1.1-.4 1.1-.9 0-.5-.4-.8-1.2-1-.9-.3-1.5-.7-1.5-1.5 0-.9.8-1.5 1.9-1.5 1.1 0 1.9.6 1.9 1.5H16.5c0-.4-.3-.7-.7-.7-.4 0-.7.2-.7.5 0 .3.3.5.9.7 1 .3 1.7.7 1.7 1.8 0 1-.8 1.7-2.1 1.7-1.2 0-2-.7-2-1.7h1.4z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'JavaScript',
    color: '#F7DF1E',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <rect x="2" y="2" width="20" height="20" rx="2" fill="#F7DF1E"/>
        <path d="M8.1 17.2c.3.5.7.9 1.5.9.9 0 1.4-.4 1.4-1.2v-5.1h1.7v5.1c0 1.7-1 2.6-2.9 2.6-1.5 0-2.4-.8-2.8-1.7l1.1-.6z" fill="#323330"/>
        <path d="M14 17.1c.4.7 1 1.1 1.8 1.1.8 0 1.2-.4 1.2-.9 0-.6-.5-.9-1.3-1.2l-.5-.2c-1.3-.5-2.1-1.2-2.1-2.6 0-1.3 1-2.3 2.6-2.3 1.1 0 1.9.4 2.5 1.4l-1.1.7c-.3-.5-.6-.7-1.1-.7s-.8.3-.8.7c0 .5.3.7 1.1 1l.5.2c1.5.6 2.3 1.3 2.3 2.8 0 1.6-1.3 2.5-3 2.5-1.7 0-2.7-.8-3.2-1.9l1.1-.6z" fill="#323330"/>
      </svg>
    ),
  },
  {
    name: 'Next.js',
    color: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="12" cy="12" r="10" fill="black"/>
        <path d="M7 7.5h1.5v6.2l7-8.2h1.5v9H15.5V8.3l-7 8.2H7V7.5z" fill="white"/>
      </svg>
    ),
  },
  {
    name: 'Redux',
    color: '#764ABC',
    svg: (
      <svg viewBox="0 0 24 24" fill="#764ABC" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M16.4 15.6c.4-.5.7-1.3.7-2.1 0-1.6-.9-2.9-2.5-3.3l-.6-.1V9c0-1.1-.9-2-2-2s-2 .9-2 2v.2l-.5.1C7.8 9.7 7 11 7 12.6c0 .8.2 1.5.6 2.1-.6.4-1 1.1-1 1.9 0 1.3 1 2.3 2.3 2.3.4 0 .8-.1 1.1-.3.5.5 1.3.8 2.1.8s1.6-.3 2.1-.8c.3.2.7.3 1.1.3 1.3 0 2.3-1 2.3-2.3 0-.8-.4-1.5-1.2-1.9v-.1zM12 3.5c1 0 1.8.5 2.3 1.3-1.4.4-2.4 1.7-2.4 3.2v1c-.5 0-1-.1-1.5-.2V8c0-2.5 1.1-4.5 1.6-4.5zm-3 9.1c0-1.2.7-2.2 1.8-2.7.4-.2.8-.3 1.2-.3s.8.1 1.2.3c1.1.5 1.8 1.5 1.8 2.7 0 .9-.4 1.7-1 2.2L13.5 17c-.4.4-1 .7-1.5.7s-1.1-.3-1.5-.7l-.5-.5c-.6-.5-1-1.3-1-2.2v-.4z"/>
      </svg>
    ),
  },
  {
    name: 'Tailwind CSS',
    color: '#06B6D4',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M12 6c-2.7 0-4.4 1.35-5 4.05.9-1.35 1.95-1.8 3.15-1.35.685.171 1.174.668 1.716 1.219C12.813 10.88 13.695 12 16 12c2.7 0 4.4-1.35 5-4.05-.9 1.35-1.95 1.8-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C15.187 7.12 14.305 6 12 6zM7 12c-2.7 0-4.4 1.35-5 4.05.9-1.35 1.95-1.8 3.15-1.35.685.171 1.174.668 1.716 1.219C7.813 16.88 8.695 18 11 18c2.7 0 4.4-1.35 5-4.05-.9 1.35-1.95 1.8-3.15 1.35-.685-.171-1.174-.668-1.716-1.219C10.187 13.12 9.305 12 7 12z" fill="#06B6D4"/>
      </svg>
    ),
  },
  {
    name: 'Node.js',
    color: '#339933',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M12 2L3 7v10l9 5 9-5V7L12 2zm0 2.3l6.5 3.7v7.4L12 19.1 5.5 15.4V7.9L12 4.3zM12 8l-4 2.3v4.4L12 17l4-2.3v-4.4L12 8zm0 1.7l2.5 1.45v2.7L12 15.3l-2.5-1.45v-2.7L12 9.7z" fill="#339933"/>
      </svg>
    ),
  },
  {
    name: 'HTML5',
    color: '#E34F26',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm13 4H7.5l.2 2.5h9l-.6 6.5L12 16.3l-4.1-1.3-.3-3h2.4l.1 1.5 1.9.5 1.9-.5.2-2.5H7.3L6.7 6h10.6l-.3 2.3-.3-2.3z" fill="#E34F26"/>
      </svg>
    ),
  },
  {
    name: 'CSS3',
    color: '#1572B6',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M4 2l1.5 17L12 21l6.5-2L20 2H4zm12.9 4l-.3 2.5H7.4L7.6 11h9l-.6 6.5L12 19l-4-1.5-.3-3h2.4l.1 1.5 1.8.6 1.8-.6.2-2.5H7.2L6.6 6h10.3z" fill="#1572B6"/>
      </svg>
    ),
  },
  {
    name: 'Vite',
    color: '#646CFF',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M21.5 3.5L12.5 21l-2-9.5L2.5 9l19-5.5z" fill="#646CFF"/>
        <path d="M12.5 21L10.5 11.5 2.5 9l10 12z" fill="#BD34FE"/>
      </svg>
    ),
  },
  {
    name: 'Express.js',
    color: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M3 8.5h18M3 12h14M3 15.5h10" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" fill="none"/>
      </svg>
    ),
  },
  {
    name: 'RTK Query',
    color: '#764ABC',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <circle cx="12" cy="12" r="9" stroke="#764ABC" strokeWidth="1.5" fill="none"/>
        <circle cx="12" cy="12" r="2.5" fill="#764ABC"/>
        <path d="M12 8v2M12 14v2M8 12H6M18 12h-2M9.5 9.5l-1.4-1.4M15.9 15.9l-1.4-1.4M9.5 14.5l-1.4 1.4M15.9 8.1l-1.4 1.4" stroke="#764ABC" strokeWidth="1.5" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    name: 'Git',
    color: '#F05032',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M22.2 11.2L12.8 1.8a1.3 1.3 0 00-1.8 0L9 3.8l2.3 2.3c.5-.2 1.1-.1 1.5.3.4.4.5 1 .3 1.5l2.2 2.2c.5-.2 1.1-.1 1.5.3.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.4-.4-.5-1-.3-1.5L12 8.8v6c.2.1.4.3.6.5.6.6.6 1.6 0 2.2-.6.6-1.6.6-2.2 0-.6-.6-.6-1.6 0-2.2.2-.2.5-.4.8-.5V8.6c-.3-.1-.6-.3-.8-.5-.4-.4-.5-1-.3-1.5L7.8 4.3 1.8 10.2a1.3 1.3 0 000 1.8l9.4 9.4a1.3 1.3 0 001.8 0l9.2-9.2a1.3 1.3 0 000-1.8v-.2z" fill="#F05032"/>
      </svg>
    ),
  },
  {
    name: 'PostgreSQL',
    color: '#336791',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <ellipse cx="12" cy="7" rx="7" ry="3.5" fill="#336791"/>
        <path d="M5 7v5c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5V7" stroke="#336791" strokeWidth="2" fill="none"/>
        <path d="M5 12v5c0 1.9 3.1 3.5 7 3.5s7-1.6 7-3.5v-5" stroke="#336791" strokeWidth="2" fill="none"/>
        <ellipse cx="12" cy="7" rx="7" ry="3.5" fill="none" stroke="#6EA5D9" strokeWidth="1"/>
      </svg>
    ),
  },
  {
    name: 'Angular',
    color: '#DD0031',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M12 2L2 6l1.5 12.5L12 22l8.5-3.5L22 6 12 2zm0 2.2l7 10.6H16l-1.2-2.8H9.2L8 14.8H5L12 4.2zm0 3.8L9.7 12h4.6L12 8z" fill="#DD0031"/>
      </svg>
    ),
  },
  {
    name: 'GitHub Actions',
    color: '#FFFFFF',
    svg: (
      <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" width="52" height="52">
        <path d="M12 2A10 10 0 002 12c0 4.42 2.87 8.17 6.84 9.5.5.08.66-.23.66-.5v-1.69c-2.77.6-3.36-1.34-3.36-1.34-.46-1.16-1.11-1.47-1.11-1.47-.91-.62.07-.6.07-.6 1 .07 1.53 1.03 1.53 1.03.87 1.52 2.34 1.07 2.91.83.09-.65.35-1.09.63-1.34-2.22-.25-4.55-1.11-4.55-4.92 0-1.11.38-2 1.03-2.71-.1-.25-.45-1.29.1-2.64 0 0 .84-.27 2.75 1.02.79-.22 1.65-.33 2.5-.33.85 0 1.71.11 2.5.33 1.91-1.29 2.75-1.02 2.75-1.02.55 1.35.2 2.39.1 2.64.65.71 1.03 1.6 1.03 2.71 0 3.82-2.34 4.66-4.57 4.91.36.31.69.92.69 1.85V21c0 .27.16.59.67.5C19.14 20.16 22 16.42 22 12A10 10 0 0012 2z" fill="#FFFFFF"/>
      </svg>
    ),
  },
]

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.045 } },
}

const item = {
  hidden: { opacity: 0, y: 20 },
  show:   { opacity: 1, y: 0, transition: { duration: 0.4 } },
}

export function Skills() {
  return (
    <section
      id="skills"
      className="relative px-[5vw] py-[120px] max-w-container mx-auto"
      aria-label="Skills and Technologies"
    >
      <SectionHeader
        eyebrow="Skills & Technologies"
        title="Technical Arsenal"
      />

      <p className="font-mono text-[11px] text-text-muted tracking-widest uppercase mb-10">
        Technologies I work with on a daily basis
      </p>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: '-60px' }}
        className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-6 xl:grid-cols-8 gap-4"
      >
        {SKILLS.map((skill) => (
          <motion.div
            key={skill.name}
            variants={item}
            whileHover={{
              scale: 1.1,
              transition: { type: 'spring', stiffness: 300, damping: 20 },
            }}
            className="group relative flex flex-col items-center justify-center gap-4
                       p-5 aspect-square cursor-default"
            style={{
              background: '#0E1420',
              borderRadius: '16px',
              border: '1px solid #1E2A40',
              transition: 'border-color 0.3s, box-shadow 0.3s',
            }}
            onMouseEnter={e => {
              const el = e.currentTarget
              el.style.borderColor = skill.color
              el.style.boxShadow = `0 0 20px ${skill.color}33, 0 8px 32px rgba(0,0,0,0.4)`
            }}
            onMouseLeave={e => {
              const el = e.currentTarget
              el.style.borderColor = '#1E2A40'
              el.style.boxShadow = 'none'
            }}
          >
            {/* Icon */}
            <div className="flex items-center justify-center
                            transition-all duration-300 group-hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.2)]">
              {skill.svg}
            </div>

            {/* Name */}
            <span className="font-ui font-semibold text-[11px] text-text-secondary
                             group-hover:text-text-primary tracking-wide text-center
                             leading-tight transition-colors duration-300">
              {skill.name}
            </span>
          </motion.div>
        ))}
      </motion.div>
    </section>
  )
}