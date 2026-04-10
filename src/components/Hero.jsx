import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Star, BarChart2 } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'
import AnimatedNumber from './AnimatedNumber'

// Floating preview cards shown on the right
function PreviewCard({ delay, children, style = {} }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay }}
      style={{
        background: 'rgba(28,28,28,0.9)',
        border: '1px solid rgba(255,255,255,0.1)',
        borderRadius: 14,
        backdropFilter: 'blur(12px)',
        padding: '14px 16px',
        ...style,
      }}
    >
      {children}
    </motion.div>
  )
}

export default function Hero() {
  const { memberCount } = useWhopStats()

  return (
    <section id="accueil" className="relative min-h-[92vh] flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/3 w-[700px] h-[400px] rounded-full blur-[140px]"
          style={{ background: 'rgba(212,175,55,0.06)' }} />
        <div className="absolute bottom-0 right-0 w-[400px] h-[300px] rounded-full blur-[120px]"
          style={{ background: 'rgba(16,185,129,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* LEFT — Text */}
          <div>
            <motion.div
              className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
              Méthode · Analyses · Communauté
            </motion.div>

            <motion.h1
              className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.08] mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
            >
              Arrête de trader
              <br />dans le vide.
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Rejoins une méthode.
              </span>
            </motion.h1>

            <motion.p
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg mt-2 sm:mt-4"
              style={{ color: 'rgba(255,255,255,0.68)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Analyses justifiées, technique + fondamentale, résultats partagés en transparence totale. Une vraie communauté — pas un groupe Telegram de plus.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-10"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.3 }}
            >
              <motion.a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 font-bold rounded-xl px-8 py-4 text-sm transition-all"
                style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 40px rgba(212,175,55,0.22)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(212,175,55,0.4)' }}
                whileTap={{ scale: 0.97 }}
              >
                Commencer gratuitement
                <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a href="#communaute"
                className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                style={{ color: 'rgba(255,255,255,0.55)' }}
                onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
              >
                Voir la communauté ↓
              </a>
            </motion.div>

            <motion.div
              className="flex flex-wrap items-center gap-4 text-xs"
              style={{ color: 'rgba(255,255,255,0.5)' }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.5 }}
            >
              <span className="flex items-center gap-1.5">
                <span className="pulse-dot w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <AnimatedNumber value={memberCount} prefix="+" className="font-semibold text-white" duration={2000} /> membres actifs
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Noté <span className="font-semibold text-white">5.0</span><span style={{ color: '#d4af37' }}>★</span> sur Whop</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Sans engagement</span>
            </motion.div>
          </div>

          {/* MOBILE stats band — visible only below lg */}
          <motion.div
            className="lg:hidden grid grid-cols-3 gap-3 mt-2"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {[
              { value: `+${memberCount}`, label: 'membres actifs', color: '#10b981' },
              { value: '5.0★', label: 'note sur Whop', color: '#d4af37' },
              { value: '100%', label: 'transparent', color: '#d4af37' },
            ].map((s) => (
              <div key={s.label} className="flex flex-col items-center text-center rounded-2xl py-3 px-2"
                style={{ background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.07)' }}>
                <span className="text-lg font-black" style={{ color: s.color }}>{s.value}</span>
                <span className="text-[10px] mt-0.5 leading-tight" style={{ color: 'rgba(255,255,255,0.5)' }}>{s.label}</span>
              </div>
            ))}
          </motion.div>

          {/* RIGHT — Floating preview cards */}
          <div className="hidden lg:block relative h-[480px]">
            {/* Glow behind cards */}
            <div className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.07), transparent 70%)' }} />

            {/* Card 1 — Analyse partagée (top-left) */}
            <PreviewCard delay={0.4} style={{ position: 'absolute', top: 0, left: 0, width: 248 }}>
              <div className="flex items-center gap-2 mb-2.5">
                <BarChart2 size={12} style={{ color: '#d4af37' }} />
                <span className="text-xs font-bold tracking-wide" style={{ color: '#d4af37' }}>Analyse partagée</span>
              </div>
              <div className="text-white font-black text-[15px] mb-2">EURUSD — Haussier</div>
              <div className="flex flex-wrap gap-1 mb-2.5">
                {['Zone H4 key', 'HTF bullish', 'CPI > prev.'].map(tag => (
                  <span key={tag} className="text-[10px] px-2 py-0.5 rounded-full"
                    style={{ background: 'rgba(255,255,255,0.06)', color: 'rgba(255,255,255,0.55)' }}>
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-1.5 text-xs">
                <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: '#10b981' }} />
                <span style={{ color: '#10b981' }}>Partagé sur Discord</span>
              </div>
            </PreviewCard>

            {/* Card 4 — Macro (top-right, compact) */}
            <PreviewCard delay={0.5} style={{ position: 'absolute', top: 0, right: 0, width: 200 }}>
              <div className="text-[10px] font-semibold uppercase tracking-widest mb-2" style={{ color: 'rgba(255,255,255,0.4)' }}>Macro semaine</div>
              <div className="text-sm font-bold text-white mb-1.5">NFP · CPI · FOMC</div>
              <div className="flex items-center gap-1.5">
                <span style={{ color: '#d4af37' }}>⚡</span>
                <span className="text-xs font-semibold" style={{ color: '#d4af37' }}>Bias haussier USD</span>
              </div>
            </PreviewCard>

            {/* Card 2 — Performance (middle-right) */}
            <PreviewCard delay={0.62} style={{ position: 'absolute', top: 160, right: 0, width: 214 }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-[10px] font-semibold uppercase tracking-widest" style={{ color: 'rgba(255,255,255,0.4)' }}>Cette semaine</span>
                <TrendingUp size={13} style={{ color: '#10b981' }} />
              </div>
              <div className="text-[28px] font-black leading-none mb-1" style={{ color: '#10b981' }}>+5.2R</div>
              <div className="flex items-center justify-between text-[11px] mb-3" style={{ color: 'rgba(255,255,255,0.45)' }}>
                <span>3 gagnants · 1 perdant</span>
                <span className="font-semibold" style={{ color: '#10b981' }}>75%</span>
              </div>
              <div className="h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '75%', background: 'linear-gradient(90deg, #10b981, #34d399)' }} />
              </div>
            </PreviewCard>

            {/* Card 3 — Community (bottom-left) */}
            <PreviewCard delay={0.76} style={{ position: 'absolute', bottom: 0, left: 0, width: 238 }}>
              <div className="flex items-center gap-2 mb-3">
                <Users size={12} style={{ color: '#d4af37' }} />
                <span className="text-xs font-bold text-white">Communauté active</span>
              </div>
              <div className="flex items-center gap-2.5 mb-2.5">
                <div className="flex -space-x-2">
                  {['A','N','S','M','L'].map((l, i) => (
                    <div key={i} className="w-7 h-7 rounded-full flex items-center justify-center text-[10px] font-black"
                      style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#141414', border: '2px solid rgba(20,20,20,0.9)' }}>
                      {l}
                    </div>
                  ))}
                </div>
                <div>
                  <div className="text-xs font-bold text-white"><AnimatedNumber value={memberCount} prefix="+" duration={2000} /> membres</div>
                  <div className="text-[10px]" style={{ color: 'rgba(255,255,255,0.4)' }}>rejoignent chaque mois</div>
                </div>
              </div>
              <div className="flex items-center gap-1 pt-2" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                {[...Array(5)].map((_,i) => <Star key={i} size={10} fill="#d4af37" color="#d4af37" />)}
                <span className="text-[11px] ml-1 font-bold text-white">5.0</span>
                <span className="text-[11px]" style={{ color: 'rgba(255,255,255,0.35)' }}>· Whop verified</span>
              </div>
            </PreviewCard>
          </div>

        </div>
      </div>
    </section>
  )
}
