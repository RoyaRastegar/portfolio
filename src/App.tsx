import { Toaster } from 'react-hot-toast'

// ── Layout ────────────────────────────────────────────────────────
import { Header }         from './components/layout/Header'
import { Footer }         from './components/layout/Footer'
import { ScrollProgress } from './components/layout/ScrollProgress'

// ── Sections (one per page area) ─────────────────────────────────
import { Hero }       from './components/sections/Hero'
import { About }      from './components/sections/About'
import { Skills }     from './components/sections/Skills'
import { Experience } from './components/sections/Experience'
import { Projects }   from './components/sections/Projects'
import { Playground } from './components/sections/Playground'
import { Education }  from './components/sections/Education'
import { Contact }    from './components/sections/Contact'

/**
 * App.tsx — root composition layer.
 *
 * Responsibility: assemble layout + sections in order.
 * No logic, no state here — every section owns its own data and state.
 *
 * Page order:
 *   Hero → About → Skills → Experience → Projects
 *   → Playground → Education → Contact → Footer
 */
export default function App() {
  return (
    <>
      {/* Thin cyan scroll-progress bar at the very top */}
      <ScrollProgress />

      {/* Sticky top nav with active-section highlighting */}
      <Header />

      {/* ── Main content ──────────────────────────────────────── */}
      <main id="main-content">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Playground />
        <Education />
        <Contact />
      </main>

      <Footer />

      {/* Toast notifications (react-hot-toast) */}
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: '#141B2D',
            color:      '#E2E8F4',
            border:     '1px solid #2A3A58',
            fontFamily: '"JetBrains Mono", monospace',
            fontSize:   '12px',
            borderRadius: '0',
          },
          success: {
            iconTheme: { primary: '#34D399', secondary: '#141B2D' },
          },
          error: {
            iconTheme: { primary: '#F87171', secondary: '#141B2D' },
          },
        }}
      />
    </>
  )
}
