import { useRef } from 'react'
import { motion } from 'framer-motion'
import { Hash, MessageSquare, ChevronLeft, ChevronRight } from 'lucide-react'

const screenshots = [
  {
    src: '/analyse-technique.png',
    channel: 'analyse-technique',
    label: 'Analyses graphiques',
    desc: 'Chaque setup est expliqué — structure, zone d\'entrée, SL, TP. Rien n\'est laissé au hasard.',
  },
  {
    src: '/jot-trades.png',
    channel: 'jot-trades',
    label: 'Trades en temps réel',
    desc: 'Les positions sont partagées en live avec entrée, résultat et analyse post-trade.',
  },
  {
    src: '/analyse-fondamentales.png',
    channel: 'analyse-fondamentale',
    label: 'Weekly & Daily FX Recap',
    desc: 'Analyses macro et fondamentales publiées chaque semaine — contexte, drivers, biais directionnels.',
  },
  {
    src: '/profits.png',
    channel: 'forex-profits',
    label: 'Résultats des membres',
    desc: 'Les membres partagent leurs gains. La preuve que la méthode fonctionne.',
  },
  {
    src: '/analyse-live.jpg',
    channel: 'analyse-live',
    label: 'Sessions live',
    desc: 'Analyses en direct avec partage d\'écran devant les membres de la communauté.',
  },
]

export default function Community() {
  const scrollRef = useRef(null)

  const scroll = (dir) => {
    const el = scrollRef.current
    if (!el) return
    el.scrollBy({ left: dir * 420, behavior: 'smooth' })
  }

  return (
    <section id="communaute" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(88,101,242,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(88,101,242,0.35)', background: 'rgba(88,101,242,0.07)', color: '#a5b4fc' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#a5b4fc', animation: 'pulse 2s infinite' }} />
            Discord actif
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            La communauté
            <br />
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              en action.
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            84 membres, des analyses quotidiennes, des trades commentés en direct. La preuve par l'image.
          </p>
        </motion.div>

        {/* Carousel + nav buttons */}
        <div className="relative mb-10">
          {/* Left arrow */}
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hidden lg:flex"
            style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            <ChevronLeft size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
          </button>

          {/* Right arrow */}
          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 z-10 w-10 h-10 rounded-full flex items-center justify-center transition-all hidden lg:flex"
            style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.1)' }}
            onMouseEnter={e => e.currentTarget.style.borderColor = 'rgba(212,175,55,0.4)'}
            onMouseLeave={e => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)'}
          >
            <ChevronRight size={18} style={{ color: 'rgba(255,255,255,0.6)' }} />
          </button>

          {/* Scroll container */}
          <div
            ref={scrollRef}
            className="flex gap-4 overflow-x-auto pb-2"
            style={{
              scrollSnapType: 'x mandatory',
              scrollbarWidth: 'none',
              msOverflowStyle: 'none',
            }}
          >
            {screenshots.map((item, i) => (
              <motion.div
                key={item.channel}
                className="rounded-2xl overflow-hidden shrink-0"
                style={{
                  width: 'clamp(280px, 45vw, 420px)',
                  scrollSnapAlign: 'start',
                  border: '1px solid rgba(255,255,255,0.07)',
                  background: '#0e0e18',
                }}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                {/* Title bar */}
                <div className="flex items-center gap-2.5 px-4 py-3"
                  style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                  <Hash size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
                  <span className="text-sm font-semibold text-white">{item.channel}</span>
                </div>

                {/* Image */}
                <div className="relative overflow-hidden" style={{ height: 240 }}>
                  <img
                    src={item.src}
                    alt={item.label}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 pointer-events-none"
                    style={{ background: 'linear-gradient(to top, #0e0e18 0%, transparent 60%)' }} />
                </div>

                {/* Caption */}
                <div className="px-4 py-4 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <MessageSquare size={14} style={{ color: '#d4af37' }} />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">{item.label}</div>
                    <p className="text-xs leading-relaxed mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Dot indicators */}
          <div className="flex justify-center gap-2 mt-5">
            {screenshots.map((_, i) => (
              <button
                key={i}
                className="rounded-full transition-all duration-300"
                style={{ width: 6, height: 6, background: 'rgba(255,255,255,0.2)' }}
                onMouseEnter={e => e.currentTarget.style.background = '#d4af37'}
                onMouseLeave={e => e.currentTarget.style.background = 'rgba(255,255,255,0.2)'}
                onClick={() => scrollRef.current?.scrollTo({ left: i * 436, behavior: 'smooth' })}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  )
}
