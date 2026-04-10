import { useState, useEffect, useRef } from 'react'

function easeOutExpo(t) {
  return t === 1 ? 1 : 1 - Math.pow(2, -10 * t)
}

/**
 * Animated counter — triggers when element enters viewport.
 * @param {number} end       Final value
 * @param {object} options
 *   duration  ms           Animation duration (default 1800)
 *   decimals  number       Decimal places (default 0)
 *   delay     ms           Delay before starting (default 0)
 */
export function useCounter(end, { duration = 1800, decimals = 0, delay = 0 } = {}) {
  const [value, setValue] = useState(0)
  const [triggered, setTriggered] = useState(false)
  const ref = useRef(null)

  useEffect(() => {
    const el = ref.current
    if (!el) return
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setTriggered(true) },
      { threshold: 0.15 }
    )
    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!triggered || !end) return
    let rafId
    const timeout = setTimeout(() => {
      let startTime = null
      const step = (ts) => {
        if (!startTime) startTime = ts
        const elapsed = ts - startTime
        const progress = Math.min(elapsed / duration, 1)
        const current = easeOutExpo(progress) * end
        setValue(decimals > 0 ? parseFloat(current.toFixed(decimals)) : Math.floor(current))
        if (progress < 1) rafId = requestAnimationFrame(step)
        else setValue(end)
      }
      rafId = requestAnimationFrame(step)
    }, delay)

    return () => { clearTimeout(timeout); cancelAnimationFrame(rafId) }
  }, [triggered, end, duration, decimals, delay])

  return { value, ref }
}
