import { motion } from 'framer-motion'
import { Star, Quote } from 'lucide-react'

const testimonials = [
  {
    name: 'Alexandre M.',
    role: 'Membre Premium',
    date: 'Mars 2026',
    content: 'Ce qui m\'a convaincu c\'est l\'honnêteté totale. Pas de faux résultats, pas de screenshots triés sur le volet. Tu vois un trader en progression réelle qui partage chaque trade, gagnant ou perdant. Les setups Forex sont précis et toujours justifiés.',
    initial: 'A',
  },
  {
    name: 'Sophie L.',
    role: 'Membre Crypto',
    date: 'Février 2026',
    content: 'Enfin une analyse crypto sérieuse. Les signaux arrivent avec le contexte fondamental et technique. On comprend pourquoi on entre en position, pas juste où. Le canal analyse-fondamentale vaut à lui seul l\'abonnement.',
    initial: 'S',
  },
  {
    name: 'Karim B.',
    role: 'Membre Premium',
    date: 'Janvier 2026',
    content: 'J\'ai testé plusieurs groupes de trading avant JOT — c\'est incomparable. La transparence sur les performances réelles Pilot, le coaching personnalisé, la communauté Discord qui challenge vraiment. Je progresse plus vite que seul.',
    initial: 'K',
  },
  {
    name: 'Romain T.',
    role: 'Membre DTP',
    date: 'Décembre 2025',
    content: 'Débutant en trading Forex, j\'avais peur de ne rien comprendre. Chaque signal est expliqué avec les niveaux d\'entrée, le SL, le TP et le raisonnement derrière. La communauté est bienveillante — les questions ne restent jamais sans réponse.',
    initial: 'R',
  },
]

function Stars({ count = 5 }) {
  return (
    <div className="flex gap-0.5">
      {[...Array(count)].map((_, i) => <Star key={i} size={12} fill="#d4af37" color="#d4af37" />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
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
                Avis vérifiés
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Ils tradent mieux.
                <br />
                <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Ils en parlent.
                </span>
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-white font-black text-xl">5.0</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>· 10 avis vérifiés sur Whop</span>
            </div>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              className="relative rounded-2xl p-5 flex flex-col"
              style={{ background: '#0e0e18', border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.07 }}
              whileHover={{ borderColor: 'rgba(212,175,55,0.18)', translateY: -3 }}
            >
              {/* Large quote mark */}
              <div className="absolute top-4 right-4 text-5xl font-black leading-none pointer-events-none select-none"
                style={{ color: 'rgba(212,175,55,0.06)', fontFamily: 'Georgia, serif' }}>
                "
              </div>

              <div className="flex items-start justify-between mb-4">
                <Stars />
              </div>

              <p className="text-sm leading-relaxed flex-1 mb-5" style={{ color: 'rgba(255,255,255,0.58)' }}>
                "{t.content}"
              </p>

              <div className="flex items-center gap-3 pt-4" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
                <div className="w-9 h-9 rounded-full flex items-center justify-center text-sm font-black shrink-0"
                  style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f' }}>
                  {t.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="text-white font-semibold text-sm truncate">{t.name}</div>
                  <div className="text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>{t.role} · {t.date}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Link */}
        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a
            href="https://whop.com/justonetrader"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            Lire tous les avis sur Whop →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
