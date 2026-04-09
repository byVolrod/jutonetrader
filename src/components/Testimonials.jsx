import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'

function StarRow() {
  return (
    <div className="flex gap-0.5 mb-3">
      {[...Array(5)].map((_, i) => (
        <Star key={i} size={12} fill="#d4af37" color="#d4af37" />
      ))}
    </div>
  )
}

function Card({ t }) {
  const initial = (t.username ?? '?').charAt(0).toUpperCase()

  return (
    <div
      className="rounded-2xl p-5 shrink-0 flex flex-col"
      style={{
        background: '#1c1c1c',
        border: '1px solid rgba(255,255,255,0.07)',
        width: 290,
        marginRight: 14,
      }}
    >
      {/* Stars */}
      <StarRow />

      {/* Quote mark decorative */}
      <div className="text-4xl font-black leading-none mb-1 select-none"
        style={{ color: 'rgba(212,175,55,0.08)', fontFamily: 'Georgia, serif', lineHeight: 1 }}>
        "
      </div>

      {/* Full text — grows the card */}
      <p className="text-sm leading-relaxed mb-4" style={{ color: 'rgba(255,255,255,0.75)' }}>
        {t.description}
      </p>

      {/* Author — always below text */}
      <div className="flex items-center gap-3 pt-3 mt-auto"
        style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-black shrink-0"
          style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#141414' }}>
          {initial}
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{t.username ?? 'Membre Whop'}</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>Whop · Vérifié</div>
        </div>
      </div>
    </div>
  )
}

export default function Testimonials() {
  const { reviews, reviewCount } = useWhopStats()
  const allCards = [...reviews, ...reviews]

  return (
    <section id="temoignages" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.04), transparent)' }} />

      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <motion.div
          className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Avis Whop vérifiés
            </div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
              Ce qu'ils en disent.
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => <Star key={i} size={14} fill="#d4af37" color="#d4af37" />)}
            </div>
            <span className="text-white font-black text-xl">5.0</span>
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>
              · {reviewCount} avis vérifiés sur Whop
            </span>
          </div>
        </motion.div>
      </div>

      {/* Marquee — mask edges, overflow hidden ONLY horizontally */}
      <div
        style={{
          overflow: 'hidden',
          maskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
          WebkitMaskImage: 'linear-gradient(90deg, transparent, black 5%, black 95%, transparent)',
        }}
      >
        <div
          className="marquee-left"
          style={{
            display: 'flex',
            alignItems: 'flex-start',
            width: 'max-content',
            paddingBottom: 8,
          }}
        >
          {allCards.map((t, i) => (
            <Card key={i} t={t} />
          ))}
        </div>
      </div>

      {/* Footer link */}
      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a
          href="https://whop.com/justonetrader/"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-sm transition-colors"
          style={{ color: 'rgba(255,255,255,0.5)' }}
          onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
          onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.5)'}
        >
          Voir tous les avis sur Whop →
        </a>
      </motion.div>
    </section>
  )
}
