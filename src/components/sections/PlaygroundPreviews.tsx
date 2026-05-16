import { useState, useRef, useEffect } from 'react'

// ── Dynamic Form Preview ─────────────────────────────────────────
export function DynamicFormPreview() {
  const [values, setValues] = useState<Record<string, string>>({})
  const [submitted, setSubmitted] = useState(false)

  const fields = [
    { id: 'name',  label: 'Full Name', type: 'text',  placeholder: 'e.g. Roya Rastegar' },
    { id: 'email', label: 'Email',     type: 'email', placeholder: 'you@example.com' },
  ]

  const inputClass =
    'w-full bg-transparent border-0 border-b border-border-bright text-text-primary ' +
    'font-ui text-[13px] py-2 px-0 placeholder:text-text-muted outline-none ' +
    'focus:border-accent transition-colors duration-200'

  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
        Live Preview — Dynamic Form Engine
      </p>
      {fields.map((f) => (
        <div key={f.id}>
          <label className="font-mono text-[10px] text-text-secondary tracking-widest uppercase block mb-1">
            {f.label}
          </label>
          <input
            className={inputClass}
            type={f.type}
            placeholder={f.placeholder}
            value={values[f.id] ?? ''}
            onChange={(e) => setValues((p) => ({ ...p, [f.id]: e.target.value }))}
          />
        </div>
      ))}
      <div>
        <label className="font-mono text-[10px] text-text-secondary tracking-widest uppercase block mb-1">
          Role
        </label>
        <select
          className="w-full bg-bg-elevated border border-border-bright text-text-primary
                     font-ui text-[13px] px-2.5 py-2 outline-none focus:border-accent
                     transition-colors duration-200"
          value={values.role ?? ''}
          onChange={(e) => setValues((p) => ({ ...p, role: e.target.value }))}
        >
          <option value="">Select role…</option>
          <option>Frontend Developer</option>
          <option>Fullstack Developer</option>
        </select>
      </div>
      <button
        onClick={() => setSubmitted(true)}
        className="mt-2 bg-accent text-bg-base font-ui font-semibold text-[12px]
                   tracking-widest uppercase px-6 py-2.5 hover:brightness-110
                   transition-all duration-200"
        style={{ background: submitted ? '#34D399' : undefined }}
      >
        {submitted ? 'Submitted ✓' : 'Submit Form'}
      </button>
    </div>
  )
}

// ── Multi-step Wizard Preview ────────────────────────────────────
export function WizardPreview() {
  const steps = ['Personal Info', 'Skills & Stack', 'Review & Submit']
  const descs = [
    'Enter your contact details and location.',
    'Select your primary skills and experience level.',
    'Everything looks good. Click Submit to send your application.',
  ]
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)

  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
        Live Preview — Multi-step Wizard
      </p>

      {/* Progress bar */}
      <div className="w-full h-[3px] bg-border rounded-none overflow-hidden">
        <div
          className="h-full bg-accent transition-all duration-300"
          style={{ width: `${((step + 1) / steps.length) * 100}%` }}
        />
      </div>

      {/* Step tabs */}
      <div className="flex gap-1.5 flex-wrap">
        {steps.map((t, i) => (
          <span
            key={t}
            className="font-mono text-[10px] px-2.5 py-1 border transition-colors duration-200"
            style={{
              borderColor: i === step ? '#38BDF8' : '#2A3A58',
              color:       i === step ? '#38BDF8' : '#3D4F6E',
            }}
          >
            {i + 1}. {t}
          </span>
        ))}
      </div>

      {/* Step content */}
      <div className="bg-bg-elevated border border-border px-4 py-3 min-h-[60px]">
        <p className="font-ui font-semibold text-sm text-text-primary mb-1">{steps[step]}</p>
        <p className="font-ui text-xs text-text-secondary">{descs[step]}</p>
      </div>

      {/* Navigation */}
      <div className="flex gap-2">
        {step > 0 && (
          <button
            onClick={() => setStep((s) => s - 1)}
            className="border border-border-bright text-text-secondary font-ui text-[12px]
                       px-4 py-1.5 hover:border-accent hover:text-accent transition-all duration-200"
          >
            ← Back
          </button>
        )}
        {step < steps.length - 1 ? (
          <button
            onClick={() => setStep((s) => s + 1)}
            className="bg-accent text-bg-base font-ui font-semibold text-[12px] px-4 py-1.5
                       hover:brightness-110 transition-all duration-200"
          >
            Next →
          </button>
        ) : (
          <button
            onClick={() => setSubmitted(true)}
            className="font-ui font-semibold text-[12px] px-4 py-1.5 transition-all duration-200"
            style={{ background: submitted ? '#34D399' : '#38BDF8', color: '#080C14' }}
          >
            {submitted ? 'Submitted ✓' : 'Submit'}
          </button>
        )}
      </div>
    </div>
  )
}

// ── RTK Query States Preview ─────────────────────────────────────
export function RtkQueryPreview() {
  const states = [
    {
      icon: '⏳',
      label: 'isLoading: true',
      sub: 'Fetching from API…',
      color: '#7A8BAD',
      border: '#1E2A40',
    },
    {
      icon: '✅',
      label: 'data: [{ id:1, title:"Post title…" }]',
      sub: 'Cached · auto-refetch on focus',
      color: '#34D399',
      border: '#1E2A40',
    },
    {
      icon: '❌',
      label: 'error: { status: 404, message: "Not found" }',
      sub: 'Retry with exponential back-off',
      color: '#F87171',
      border: 'rgba(248,113,113,0.25)',
    },
  ]

  return (
    <div className="space-y-2">
      <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
        Live Preview — RTK Query States
      </p>
      {states.map((s) => (
        <div
          key={s.label}
          className="flex items-start gap-3 px-3 py-2.5 bg-bg-elevated"
          style={{ border: `1px solid ${s.border}` }}
        >
          <span className="text-base mt-0.5">{s.icon}</span>
          <div>
            <p className="font-mono text-[11px]" style={{ color: s.color }}>{s.label}</p>
            <p className="font-ui text-[11px] text-text-muted mt-0.5">{s.sub}</p>
          </div>
        </div>
      ))}
    </div>
  )
}

// ── useDebounce Hook Preview ─────────────────────────────────────
export function DebouncePreview() {
  const [raw, setRaw]       = useState('')
  const [debounced, setDeb] = useState('')
  const [status, setStatus] = useState('— waiting for input —')
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)

  const handleInput = (val: string) => {
    setRaw(val)
    setStatus('⏳ Debouncing…')
    if (timerRef.current) clearTimeout(timerRef.current)
    timerRef.current = setTimeout(() => {
      setDeb(val)
      setStatus(`✓ API called with: "${val}"`)
    }, 400)
  }

  useEffect(() => () => { if (timerRef.current) clearTimeout(timerRef.current) }, [])

  return (
    <div className="space-y-3">
      <p className="font-mono text-[10px] text-accent tracking-widest uppercase mb-3">
        Live Preview — useDebounce(400ms)
      </p>
      <input
        className="w-full bg-transparent border-0 border-b border-border-bright
                   text-text-primary font-ui text-[13px] py-2 px-0
                   placeholder:text-text-muted outline-none focus:border-accent
                   transition-colors duration-200"
        placeholder="Type something to search…"
        value={raw}
        onChange={(e) => handleInput(e.target.value)}
      />
      <div className="space-y-1.5">
        <div className="bg-bg-elevated border border-border px-3 py-2">
          <p className="font-mono text-[9px] text-text-muted tracking-widest uppercase">
            Raw value (every keystroke)
          </p>
          <p className="font-mono text-[12px] text-text-secondary mt-1 min-h-[16px]">
            {raw || '(empty)'}
          </p>
        </div>
        <div className="bg-bg-elevated border border-border px-3 py-2">
          <p className="font-mono text-[9px] text-accent tracking-widest uppercase">
            Debounced (API call fires here)
          </p>
          <p className="font-mono text-[12px] text-accent mt-1 min-h-[16px]">
            {debounced || '(empty)'}
          </p>
        </div>
        <p className="font-mono text-[10px] text-text-muted">{status}</p>
      </div>
    </div>
  )
}
