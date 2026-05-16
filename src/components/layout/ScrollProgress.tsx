import { useScrollProgress } from '../../hooks/useScrollProgress'

/**
 * Thin 2px accent-colored progress bar fixed at the very top of the viewport.
 * Grows from 0% to 100% as the user scrolls.
 */
export function ScrollProgress() {
  const progress = useScrollProgress()

  return (
    <div
      role="progressbar"
      aria-label="Page scroll progress"
      aria-valuenow={Math.round(progress)}
      aria-valuemin={0}
      aria-valuemax={100}
      className="fixed top-0 left-0 h-[2px] bg-accent z-[9999] transition-none"
      style={{ width: `${progress}%` }}
    />
  )
}
