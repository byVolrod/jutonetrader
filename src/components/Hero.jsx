import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, Users, Star } from 'lucide-react'
import { useWhopStats } from '../hooks/useWhopStats'

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
              className="text-base sm:text-lg leading-relaxed mb-10 max-w-lg"
              style={{ color: 'rgba(255,255,255,0.68)' }}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              Signaux justifiés, analyse technique + fondamentale, résultats partagés en transparence. Une vraie communauté — pas un groupe Telegram de plus.
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
                <span className="font-semibold text-white">+{memberCount}</span> membres actifs
              </span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Noté <span className="font-semibold text-white">5.0</span><span style={{ color: '#d4af37' }}>★</span> sur Whop</span>
              <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
              <span>Sans engagement</span>
            </motion.div>
          </div>

          {/* RIGHT — Floating preview cards */}
          <div className="hidden lg:block relative h-[460px]">
            {/* Glow behind cards */}
            <div className="absolute inset-0 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'radial-gradient(ellipse at center, rgba(212,175,55,0.07), transparent 70%)' }} />

            {/* Card 1 — Live signal */}
            <PreviewCard delay={0.4} style={{ position: 'absolute', top: 20, left: 10, width: 260 }}>
              <div className="flex items-center gap-2 mb-3">
                <span className="w-2 h-2 rounded-full" style={{ background: '#10b981', boxShadow: '0 0 6px #10b981' }} />
                <span className="text-xs font-bold" style={{ color: '#10b981' }}>Signal en direct</span>
              </div>
              <div className="text-white font-black text-base mb-1">📈 EURUSD — Long</div>
              <div className="flex gap-4 text-xs" style={{ color: 'rgba(255,255,255,0.55)' }}>
                <span>Entrée <span className="text-white font-semibold">1.0842</span></span>
                <span>SL <span style={{ color: '#f87171' }}>1.0810</span></span>
                <span>TP <span style={{ color: '#10b981' }}>1.0900</span></span>
              </div>
            </PreviewCard>

            {/* Card 2 — Performance */}
            <PreviewCard delay={0.55} style={{ position: 'absolute', top: 160, right: 0, width: 220 }}>
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold" style={{ color: 'rgba(255,255,255,0.5)' }}>Cette semaine</span>
                <TrendingUp size={14} style={{ color: '#10b981' }} />
              </div>
              <div className="text-2xl font-black" style={{ color: '#10b981' }}>+5.2R</div>
              <div className="text-xs mt-1" style={{ color: 'rgba(255,255,255,0.45)' }}>3 trades gagnants / 1 perdant</div>
              <div className="mt-3 h-1 rounded-full" style={{ background: 'rgba(255,255,255,0.08)' }}>
                <div className="h-full rounded-full" style={{ width: '75%', background: 'linear-gradient(90deg, #10b981, #34d399)' }} />
              </div>
            </PreviewCard>

            {/* Card 3 — Community */}
            <PreviewCard delay={0.7} style={{ position: 'absolute', bottom: 60, left: 30, width: 240 }}>
              <div className="flex items-center gap-2 mb-3">
                <Users size={13} style={{ color: '#d4af37' }} />
                <span className="text-xs font-bold text-white">Communauté active</span>
              </div>
              <div className="flex items-center gap-2 mb-2">
                <div className="flex -space-x-1.5">
                  {['A','N','S','M','L'].map((l, i) => (
                    <div key={i} className="w-6 h-6 rounded-full flex items-center justify-center text-[10px] font-black"
                      style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#141414', border: '1.5px solid #141414' }}>
                      {l}
                    </div>
                  ))}
                </div>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.6)' }}>+{memberCount} membres</span>
              </div>
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_,i) => <Star key={i} size={10} fill="#d4af37" color="#d4af37" />)}
                <span className="text-xs ml-1 font-bold text-white">5.0</span>
                <span className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>sur Whop</span>
              </div>
            </PreviewCard>

            {/* Card 4 — Fondamentale badge */}
            <PreviewCard delay={0.85} style={{ position: 'absolute', top: 80, right: 20, width: 180 }}>
              <div className="text-xs font-semibold mb-1" style={{ color: 'rgba(255,255,255,0.5)' }}>Analyse macro</div>
              <div className="text-sm font-bold text-white">NFP + CPI cette semaine</div>
              <div className="text-xs mt-1.5" style={{ color: '#d4af37' }}>⚡ Bias haussier USD</div>
            </PreviewCard>
          </div>

        </div>
      </div>
    </section>
  )
}
