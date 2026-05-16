import { cn } from '../../utils/cn'

type BadgeVariant = 'default' | 'accent' | 'amber' | 'success' | 'featured'

interface BadgeProps {
  children: React.ReactNode
  variant?: BadgeVariant
  className?: string
  hoverable?: boolean
}

const variantClasses: Record<BadgeVariant, string> = {
  default:  'border-border-bright text-text-secondary bg-bg-elevated',
  accent:   'border-accent/40 text-accent bg-bg-elevated',
  amber:    'border-amber/40 text-amber bg-bg-elevated',
  success:  'border-success/40 text-success bg-bg-elevated',
  featured: 'border-amber text-amber bg-transparent',
}

/**
 * Monospace tag used for tech stack chips, skill levels, status badges, etc.
 */
export function Badge({
  children,
  variant = 'default',
  className,
  hoverable = false,
}: BadgeProps) {
  return (
    <span
      className={cn(
        'inline-block font-mono text-[11px] leading-none px-2.5 py-1 border',
        'transition-all duration-200',
        variantClasses[variant],
        hoverable && 'cursor-default hover:border-accent hover:text-accent',
        className
      )}
    >
      {children}
    </span>
  )
}
