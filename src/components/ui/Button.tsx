import { type ButtonHTMLAttributes, forwardRef } from 'react'
import { cn } from '../../utils/cn'

type ButtonVariant = 'primary' | 'outline' | 'ghost'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: 'sm' | 'md' | 'lg'
  href?: string // renders as <a> when provided
}

const variantClasses: Record<ButtonVariant, string> = {
  primary: [
    'bg-accent text-bg-base font-semibold',
    'hover:brightness-110 hover:-translate-y-0.5',
    'active:translate-y-0',
  ].join(' '),
  outline: [
    'border border-border-bright text-text-primary',
    'hover:border-accent hover:text-accent hover:-translate-y-0.5',
  ].join(' '),
  ghost: [
    'border border-border text-text-secondary',
    'hover:border-accent hover:text-accent hover:bg-accent/10',
  ].join(' '),
}

const sizeClasses = {
  sm: 'text-xs px-4 py-2 tracking-widest',
  md: 'text-sm px-7 py-3.5 tracking-widest',
  lg: 'text-sm px-9 py-4 tracking-widest',
}

/**
 * Sharp-edged button matching the Precision Engineering design system.
 * No border-radius — every button is perfectly rectangular.
 */
export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'outline', size = 'md', className, children, href, ...props }, ref) => {
    const base = cn(
      'inline-flex items-center justify-center gap-2',
      'font-ui font-semibold uppercase transition-all duration-200',
      'cursor-pointer select-none',
      variantClasses[variant],
      sizeClasses[size],
      className
    )

    if (href) {
      return (
        <a href={href} className={base} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )
    }

    return (
      <button ref={ref} className={base} {...props}>
        {children}
      </button>
    )
  }
)

Button.displayName = 'Button'
