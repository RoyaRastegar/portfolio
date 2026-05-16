import { useState, useEffect } from 'react'

/**
 * Types out a string character by character.
 * Returns the currently displayed string.
 */
export function useTypewriter(text: string, speed = 80, startDelay = 600) {
  const [displayed, setDisplayed] = useState('')
  const [done, setDone] = useState(false)

  useEffect(() => {
    setDisplayed('')
    setDone(false)
    let i = 0

    const start = setTimeout(() => {
      const interval = setInterval(() => {
        if (i < text.length) {
          setDisplayed(text.slice(0, i + 1))
          i++
        } else {
          clearInterval(interval)
          setDone(true)
        }
      }, speed)
      return () => clearInterval(interval)
    }, startDelay)

    return () => clearTimeout(start)
  }, [text, speed, startDelay])

  return { displayed, done }
}
