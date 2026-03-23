import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function Hero() {
  return (
    <section id="accueil" className="relative min-h-[90vh] flex items-center pt-20 pb-10 overflow-hidden">
      {/* Background effects */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[400px] rounded-full blur-[120px]"
          style={{ background: 'rgba(212,175,55,0.06)' }} />
        <div className="absolute bottom-0 left-0 w-[500px] h-[300px] rounded-full blur-[100px]"
          style={{ background: 'rgba(16,185,129,0.04)' }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-8 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981', animation: 'pulse 2s infinite' }} />
            Signaux Live · Analyses · Communauté
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="text-4xl sm:text-5xl lg:text-6xl font-black leading-[1.1] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            Arrête de trader seul.
            <br />
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Rejoins une méthode.
            </span>
          </motion.h1>

          {/* Sub */}
          <motion.p
            className="text-lg sm:text-xl leading-relaxed mb-10 max-w-xl mx-auto"
            style={{ color: 'rgba(255,255,255,0.5)' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            Analyses et prises de positions en temps réel, analyse technique et fondamentale, et une communauté de traders qui partagent tout, résultats compris.
          </motion.p>

          {/* CTA */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
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
              whileHover={{ scale: 1.04, boxShadow: '0 0 60px rgba(212,175,55,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Commencer gratuitement
              <ArrowRight size={17} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <a href="#communaute"
              className="inline-flex items-center gap-1 text-sm font-medium transition-colors"
              style={{ color: 'rgba(255,255,255,0.45)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.45)'}
            >
              Voir la communauté ↓
            </a>
          </motion.div>

          {/* Trust */}
          <motion.div
            className="flex items-center justify-center gap-4 text-xs"
            style={{ color: 'rgba(255,255,255,0.35)' }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
              100+ membres actifs
            </span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <span>Noté 5.0★ sur Whop</span>
            <span style={{ color: 'rgba(255,255,255,0.15)' }}>|</span>
            <span>Sans engagement</span>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
