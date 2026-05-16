import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, GitFork, Link2, Send } from 'lucide-react'
import toast from 'react-hot-toast'
import { SectionHeader } from '../ui/SectionHeader'
import { Button } from '../ui/Button'
import { cn } from '../../utils/cn'
import { SITE_META, SOCIAL_LINKS } from '../../utils/constants'
import type { ContactFormValues } from '../../types'

// ── Validation schema ───────────────────────────────────────────
const schema = z.object({
  name:    z.string().min(2,  'Name must be at least 2 characters'),
  email:   z.string().email('Please enter a valid email address'),
  subject: z.string().min(3,  'Subject is required'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
})

// ── Contact info cards ──────────────────────────────────────────
const contactItems = [
  { icon: Mail,    label: 'Email',    value: SITE_META.email,    href: `mailto:${SITE_META.email}` },
  { icon: Phone,   label: 'Phone',   value: SITE_META.phone,    href: `tel:${SITE_META.phone}` },
  { icon: MapPin,  label: 'Location', value: SITE_META.location, href: undefined },
  { icon: GitFork,  label: 'GitHub',   value: 'github.com/RoyaRastegar', href: SOCIAL_LINKS.github },
  { icon: Link2,    label: 'LinkedIn', value: 'linkedin.com/in/roya-rastegar', href: SOCIAL_LINKS.linkedin },
]

// ── Reusable form field ─────────────────────────────────────────
function Field({
  label, error, className, children,
}: { label: string; error?: string; className?: string; children: React.ReactNode }) {
  return (
    <div className={cn('flex flex-col gap-1.5', className)}>
      <label className="font-mono text-[10px] text-text-secondary tracking-widest uppercase">
        {label}
      </label>
      {children}
      {error && (
        <span className="font-mono text-[10px] text-danger">{error}</span>
      )}
    </div>
  )
}

// ── Bottom-border-only input style ──────────────────────────────
const inputClass = cn(
  'w-full bg-transparent border-0 border-b border-border-bright',
  'text-text-primary font-ui text-sm py-2.5 px-0',
  'placeholder:text-text-muted outline-none',
  'focus:border-accent transition-colors duration-200',
)

// ── Main component ──────────────────────────────────────────────
export function Contact() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({ resolver: zodResolver(schema) })

  const onSubmit = async (_data: ContactFormValues) => {
    // Simulate API call (replace with EmailJS or backend endpoint)
    await new Promise((r) => setTimeout(r, 1000))
    toast.success("Message sent! I'll get back to you soon.", { duration: 4000 })
    reset()
  }

  return (
    <section id="contact" className="relative px-[5vw] py-[120px] max-w-container mx-auto" aria-label="Contact">
      <SectionHeader eyebrow="Initiate Connection" title="Let's Build Something Together" sectionNum="07" />

      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.4fr] gap-12 lg:gap-20">
        {/* Left — contact info */}
        <div className="flex flex-col gap-4">
          {/* Availability badge */}
          <div className="flex items-center gap-2 font-mono text-[11px] text-success border border-success/40 px-4 py-3 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-success animate-pulse" aria-hidden="true" />
            Available for freelance &amp; full-time roles
          </div>

          {contactItems.map(({ icon: Icon, label, value, href }) => (
            <motion.div
              key={label}
              whileHover={{ borderColor: '#38BDF8' }}
              className="flex items-start gap-4 p-4 bg-bg-surface border border-border
                         transition-colors duration-300 group"
            >
              <Icon size={17} className="text-accent mt-0.5 flex-shrink-0" aria-hidden="true" />
              <div>
                <p className="font-mono text-[10px] text-text-muted tracking-widest uppercase mb-0.5">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    target={href.startsWith('http') ? '_blank' : undefined}
                    rel="noopener noreferrer"
                    className="font-ui text-[13px] text-text-secondary hover:text-accent transition-colors duration-200"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="font-ui text-[13px] text-text-secondary">{value}</p>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Right — contact form */}
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
            <Field label="Name" error={errors.name?.message}>
              <input
                {...register('name')}
                className={inputClass}
                placeholder="Your full name"
                autoComplete="name"
              />
            </Field>
            <Field label="Email" error={errors.email?.message}>
              <input
                {...register('email')}
                type="email"
                className={inputClass}
                placeholder="you@example.com"
                autoComplete="email"
              />
            </Field>
          </div>

          <Field label="Subject" error={errors.subject?.message} className="mb-6">
            <input
              {...register('subject')}
              className={inputClass}
              placeholder="What's this about?"
            />
          </Field>

          <Field label="Message" error={errors.message?.message} className="mb-8">
            <textarea
              {...register('message')}
              rows={5}
              className={cn(
                'w-full bg-bg-elevated border border-border-bright',
                'text-text-primary font-ui text-sm p-3 mt-1',
                'placeholder:text-text-muted outline-none resize-y',
                'focus:border-accent transition-colors duration-200',
              )}
              placeholder="Tell me about your project or opportunity..."
            />
          </Field>

          <Button
            type="submit"
            variant="primary"
            size="md"
            className="w-full justify-center"
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              <>Sending…</>
            ) : (
              <><Send size={14} />Send Message</>
            )}
          </Button>
        </form>
      </div>
    </section>
  )
}
