import { motion } from 'framer-motion'
import { Star } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#d4af37" color="#d4af37" />)}
    </div>
  )
}

function getInitial(username) {
  return (username ?? '?').charAt(0).toUpperCase()
}

function TestimonialCard({ t }) {
  return (
    <div
      className="relative rounded-2xl p-5 shrink-0"
      style={{
        background: '#1c1c1c',
        border: '1px solid rgba(255,255,255,0.07)',
        width: 300,
        height: 280,
        marginRight: 16,
        display: 'grid',
        gridTemplateRows: 'auto 1fr auto',
      }}
    >
      <div className="absolute top-4 right-4 text-5xl font-black leading-none pointer-events-none select-none"
        style={{ color: 'rgba(212,175,55,0.06)', fontFamily: 'Georgia, serif' }}>
        "
      </div>

      {/* Stars — row 1 */}
      <div className="mb-3">
        <Stars />
      </div>

      {/* Text — row 2, scrollable, author always visible */}
      <div style={{ overflowY: 'auto', scrollbarWidth: 'none', msOverflowStyle: 'none', paddingRight: 2 }}>
        <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.72)' }}>
          "{t.description}"
        </p>
      </div>

      {/* Author — row 3, always at bottom */}
      <div className="flex items-center gap-3 pt-4 mt-3" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
        <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0"
          style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#141414' }}>
          {getInitial(t.username)}
        </div>
        <div className="flex-1 min-w-0">
          <div className="text-white font-semibold text-sm truncate">{t.username ?? 'Membre Whop'}</div>
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.52)' }}>Whop · Vérifié</div>
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
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5">
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
              <Stars />
              <span className="text-white font-black text-xl">5.0</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.58)' }}>· {reviewCount} avis vérifiés sur Whop</span>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Single row — scrolls left */}
      <div className="overflow-hidden" style={{ maskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)', WebkitMaskImage: 'linear-gradient(90deg, transparent, black 6%, black 94%, transparent)' }}>
        <div className="flex marquee-left" style={{ width: 'max-content' }}>
          {allCards.map((t, i) => <TestimonialCard key={i} t={t} />)}
        </div>
      </div>

      <motion.div
        className="text-center mt-10"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
      >
        <a href="https://whop.com/justonetrader/" target="_blank" rel="noopener noreferrer"
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
