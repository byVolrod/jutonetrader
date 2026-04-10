import { useState, useEffect } from 'react'

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -200, y: -200 })
  const [ring, setRing] = useState({ x: -200, y: -200 })
  const [hovering, setHovering] = useState(false)

  useEffect(() => {
    // Only on pointer-fine devices (mouse, not touch)
    if (window.matchMedia('(pointer: coarse)').matches) return

    let rafId
    let target = { x: -200, y: -200 }

    const onMove = (e) => {
      target = { x: e.clientX, y: e.clientY }
      setPos({ x: e.clientX, y: e.clientY })
    }

    // Smooth ring follow with RAF
    const lerp = (a, b, t) => a + (b - a) * t
    let cur = { x: -200, y: -200 }
    const animate = () => {
      cur.x = lerp(cur.x, target.x, 0.12)
      cur.y = lerp(cur.y, target.y, 0.12)
      setRing({ x: cur.x, y: cur.y })
      rafId = requestAnimationFrame(animate)
    }
    rafId = requestAnimationFrame(animate)

    const onOver = (e) => {
      if (e.target.closest('a, button, [role="button"]')) setHovering(true)
      else setHovering(false)
    }

    window.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseover', onOver)

    return () => {
      window.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseover', onOver)
      cancelAnimationFrame(rafId)
    }
  }, [])

  // Don't render on touch devices
  if (typeof window !== 'undefined' && window.matchMedia('(pointer: coarse)').matches) return null

  return (
    <>
      {/* Trailing ring */}
      <div
        style={{
          position: 'fixed',
          left: ring.x,
          top: ring.y,
          width: hovering ? 40 : 28,
          height: hovering ? 40 : 28,
          border: `1.5px solid rgba(212,175,55,${hovering ? 0.7 : 0.45})`,
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.25s ease, height 0.25s ease, border-color 0.2s ease',
        }}
      />
      {/* Dot */}
      <div
        style={{
          position: 'fixed',
          left: pos.x,
          top: pos.y,
          width: hovering ? 6 : 4,
          height: hovering ? 6 : 4,
          background: '#d4af37',
          borderRadius: '50%',
          transform: 'translate(-50%, -50%)',
          pointerEvents: 'none',
          zIndex: 99999,
          transition: 'width 0.2s ease, height 0.2s ease',
          boxShadow: hovering ? '0 0 8px rgba(212,175,55,0.8)' : 'none',
        }}
      />
    </>
  )
}
