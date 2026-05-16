import { useState, useCallback } from 'react'
import { motion } from 'framer-motion'
import { Copy, RotateCcw, Check } from 'lucide-react'
import toast from 'react-hot-toast'
import { SectionHeader } from '../ui/SectionHeader'
import { cn } from '../../utils/cn'
import { snippets } from '../../data/snippets'
import type { CodeToken } from '../../types'
import {
  DynamicFormPreview,
  WizardPreview,
  RtkQueryPreview,
  DebouncePreview,
} from './PlaygroundPreviews'

// ── Map snippet id → React preview component ────────────────────
const PREVIEWS: Record<string, React.FC> = {
  'dynamic-form':      DynamicFormPreview,
  'multi-step-wizard': WizardPreview,
  'rtk-query':         RtkQueryPreview,
  'use-debounce':      DebouncePreview,
}

// ── Token type → Tailwind class ─────────────────────────────────
function tokenClass(t: CodeToken['t']): string {
  const map: Record<CodeToken['t'], string> = {
    kw:   'text-purple-400',
    fn:   'text-blue-400',
    str:  'text-green-400',
    cmt:  'text-text-muted italic',
    tag:  'text-accent',
    prop: 'text-orange-400',
    n:    'text-text-primary',
    br:   '',
  }
  return map[t] ?? ''
}

// ── Syntax-highlighted code with line numbers ───────────────────
function CodeView({ tokens }: { tokens: CodeToken[] }) {
  let lineNum = 1

  return (
    <pre className="font-mono text-[12.5px] leading-relaxed p-5 overflow-auto max-h-[500px]">
      <code>
        <span className="text-text-muted text-xs w-7 inline-block text-right mr-4 select-none">
          {lineNum}
        </span>
        {tokens.map((token, i) => {
          if (token.t === 'br') {
            lineNum++
            const num = lineNum
            return (
              <span key={i}>
                {'\n'}
                <span className="text-text-muted text-xs w-7 inline-block text-right mr-4 select-none">
                  {num}
                </span>
              </span>
            )
          }
          return (
            <span key={i} className={tokenClass(token.t)}>
              {token.v}
            </span>
          )
        })}
      </code>
    </pre>
  )
}

// ── Terminal-style pane header ──────────────────────────────────
function PaneHeader({ title }: { title: string }) {
  return (
    <div className="flex items-center gap-2.5 px-4 py-2.5 bg-bg-elevated border-b border-border">
      <div className="flex gap-1.5" aria-hidden="true">
        <div className="w-2.5 h-2.5 rounded-full bg-danger/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-amber/70" />
        <div className="w-2.5 h-2.5 rounded-full bg-success/70" />
      </div>
      <span className="font-mono text-[11px] text-text-muted tracking-wider">{title}</span>
    </div>
  )
}

// ── Main section ────────────────────────────────────────────────
export function Playground() {
  const [activeId, setActiveId] = useState(snippets[0].id)
  const [copied, setCopied]     = useState(false)
  const [resetKey, setResetKey] = useState(0)

  const active     = snippets.find((s) => s.id === activeId) ?? snippets[0]
  const PreviewComponent = PREVIEWS[activeId] ?? DynamicFormPreview

  const handleCopy = useCallback(async () => {
    const code = active.tokens.map((t) => (t.t === 'br' ? '\n' : t.v)).join('')
    try {
      await navigator.clipboard.writeText(code)
      setCopied(true)
      toast.success('Code copied!', { duration: 2000 })
      setTimeout(() => setCopied(false), 2000)
    } catch {
      toast.error('Copy failed — select manually.')
    }
  }, [active.tokens])

  const handleReset = () => {
    setResetKey((k) => k + 1)
    toast('Preview reset', { icon: '↺', duration: 1500 })
  }

  return (
    <section
      id="playground"
      className="relative bg-bg-surface border-y border-border py-[120px] px-[5vw]"
      aria-label="Live Code Playground"
    >
      <div className="max-w-container mx-auto">
        <SectionHeader eyebrow="Lab: Active Logic" title="Live Code Playground" sectionNum="05" />

        <p className="font-body text-base text-text-secondary mb-8 max-w-xl">
          Real patterns from my production work. Browse snippets — previews are fully interactive.
        </p>

        {/* Snippet selector tabs */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-5">
          <div className="flex flex-wrap gap-1.5" role="tablist" aria-label="Select code snippet">
            {snippets.map((s) => (
              <button
                key={s.id}
                role="tab"
                aria-selected={activeId === s.id}
                onClick={() => { setActiveId(s.id); setResetKey((k) => k + 1) }}
                className={cn(
                  'font-mono text-[11px] tracking-wider px-4 py-2 border transition-all duration-200',
                  activeId === s.id
                    ? 'border-accent text-accent bg-accent/10'
                    : 'border-border-bright text-text-secondary hover:border-accent hover:text-accent'
                )}
              >
                {s.label}
              </button>
            ))}
          </div>

          {/* Actions */}
          <div className="flex gap-2">
            <button
              onClick={handleCopy}
              aria-label="Copy code"
              className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider
                         border border-border-bright text-text-secondary px-3 py-1.5
                         hover:border-accent hover:text-accent transition-all duration-200"
            >
              {copied ? <Check size={12} /> : <Copy size={12} />}
              {copied ? 'Copied' : 'Copy'}
            </button>
            <button
              onClick={handleReset}
              aria-label="Reset preview"
              className="flex items-center gap-1.5 font-mono text-[11px] tracking-wider
                         border border-border-bright text-text-secondary px-3 py-1.5
                         hover:border-accent hover:text-accent transition-all duration-200"
            >
              <RotateCcw size={12} />
              Reset
            </button>
          </div>
        </div>

        {/* Description */}
        <p className="font-mono text-[11px] text-text-muted mb-4 tracking-wider">
          // {active.description}
        </p>

        {/* Split pane */}
        <motion.div
          key={activeId}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-px bg-border border border-border"
        >
          {/* Editor */}
          <div className="bg-bg-base flex flex-col min-h-[420px]">
            <PaneHeader title="App.tsx" />
            <CodeView tokens={active.tokens} />
          </div>

          {/* Preview — proper React component, no dangerouslySetInnerHTML */}
          <div className="bg-bg-base flex flex-col">
            <PaneHeader title="Preview" />
            <div className="flex-1 p-6 overflow-auto">
              <PreviewComponent key={resetKey} />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
