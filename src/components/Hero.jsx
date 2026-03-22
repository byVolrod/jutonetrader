import { motion } from 'framer-motion'
import { ArrowRight, ChevronRight, TrendingUp, Star, ShieldCheck } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="relative overflow-hidden">
      {/* Backgrounds */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_-10%,rgba(212,175,55,0.12),transparent)]" />
      <div className="absolute top-0 right-0 w-[700px] h-[700px] rounded-full blur-[130px] pointer-events-none" style={{ background: 'rgba(212,175,55,0.035)' }} />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] rounded-full blur-[120px] pointer-events-none" style={{ background: 'rgba(16,185,129,0.03)' }} />
      <div className="absolute inset-0 pointer-events-none" style={{ backgroundImage: 'linear-gradient(rgba(255,255,255,0.012) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.012) 1px, transparent 1px)', backgroundSize: '80px 80px' }} />

      <div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-28 pb-16">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

            {/* Left — Text */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Badge */}
              <motion.div
                className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-7 text-xs font-semibold tracking-widest uppercase"
                style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.06)', color: '#d4af37' }}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
              >
                Forex &nbsp;•&nbsp; Indices &nbsp;•&nbsp; Crypto
              </motion.div>

              <h1 className="font-black leading-[1.06] mb-6" style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3.25rem)' }}>
                Anticipe les marchés,
                <br />
                <span style={{ background: 'linear-gradient(90deg, #d4af37 0%, #fef08a 50%, #d4af37 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  ne les subis plus.
                </span>
              </h1>

              <p className="text-lg leading-relaxed mb-9 max-w-lg" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Signaux Forex, Indices et Crypto en temps réel. Analyse technique et fondamentale, gestion du risque — et une communauté de traders qui progressent ensemble, sans bullshit.
              </p>

              <div className="flex flex-wrap items-center gap-4 mb-10">
                <motion.a
                  href="https://whop.com/justonetrader"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 font-bold text-dark rounded-xl px-7 py-3.5 transition-all"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', boxShadow: '0 0 40px rgba(212,175,55,0.22), inset 0 1px 0 rgba(255,255,255,0.15)', color: '#0a0a0f' }}
                  whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(212,175,55,0.35)' }}
                  whileTap={{ scale: 0.97 }}
                >
                  Accéder à la communauté
                  <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
                </motion.a>
                <a
                  href="#methode"
                  className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
                  style={{ color: 'rgba(255,255,255,0.45)' }}
                  onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
                >
                  Mon parcours <ChevronRight size={15} />
                </a>
              </div>

              {/* Trust line */}
              <div className="flex items-center gap-3 pt-7" style={{ borderTop: '1px solid rgba(255,255,255,0.07)' }}>
                <div className="flex -space-x-2">
                  {['#d4af37', '#10b981', '#a5b4fc', '#e8c94a'].map((c, i) => (
                    <div key={i} className="w-7 h-7 rounded-full border-2 flex items-center justify-center text-[10px] font-bold"
                      style={{ background: `${c}20`, borderColor: '#0a0a0f', color: c }}>
                      {['M', 'K', 'S', 'A'][i]}
                    </div>
                  ))}
                </div>
                <p className="text-xs" style={{ color: 'rgba(255,255,255,0.4)' }}>
                  <span className="text-white font-semibold">84+ traders</span> ont déjà rejoint la communauté — notée <span style={{ color: '#d4af37' }}>5.0★</span> sur Whop
                </p>
              </div>
            </motion.div>

            {/* Right — Photo */}
            <motion.div
              className="relative hidden lg:block"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            >
              {/* Outer glow */}
              <div className="absolute -inset-6 rounded-[2.5rem] blur-3xl" style={{ background: 'rgba(212,175,55,0.07)' }} />

              <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ aspectRatio: '3/4', border: '1px solid rgba(255,255,255,0.09)' }}>
                <img
                  src="/founder.jpg"
                  alt="JustOneTrader — Trader Forex Indices Crypto"
                  className="w-full h-full object-cover" style={{ objectPosition: '60% 30%' }}
                  onError={e => {
                    e.target.style.display = 'none'
                    e.target.nextElementSibling.style.display = 'flex'
                  }}
                />
                {/* Fallback */}
                <div className="absolute inset-0 items-center justify-center flex-col gap-4"
                  style={{ display: 'none', background: 'linear-gradient(160deg, #141420, #0d0d15)' }}>
                  <div className="text-8xl font-black" style={{ color: 'rgba(212,175,55,0.1)', letterSpacing: '-4px' }}>JOT</div>
                </div>

                {/* Bottom gradient */}
                <div className="absolute inset-0 pointer-events-none" style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.85) 0%, rgba(10,10,15,0.2) 40%, transparent 65%)' }} />

                {/* Bottom info card */}
                <div className="absolute bottom-5 left-5 right-5">
                  <div className="rounded-2xl p-4 flex items-center gap-3"
                    style={{ background: 'rgba(10,10,15,0.72)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.09)' }}>
                    <div className="w-9 h-9 rounded-xl flex items-center justify-center shrink-0"
                      style={{ background: 'rgba(16,185,129,0.18)' }}>
                      <TrendingUp size={17} style={{ color: '#10b981' }} />
                    </div>
                    <div className="flex-1">
                      <div className="text-white font-semibold text-sm">JustOneTrader</div>
                      <div className="text-xs" style={{ color: 'rgba(255,255,255,0.38)' }}>Trader · 3 mentors actifs</div>
                    </div>
                    <div className="flex gap-0.5">
                      {[...Array(5)].map((_, i) => <Star key={i} size={10} fill="#d4af37" color="#d4af37" />)}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  )
}
