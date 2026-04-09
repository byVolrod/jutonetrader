import { motion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  {
    title: 'Pas de biais ni de méthode',
    desc: 'Pas de biais, pas de confluence. Tu entres au feeling, sans logique ni structure.',
    glow: 'rgba(239,68,68,0.12)',
  },
  {
    title: 'Mauvaise exécution & risque',
    desc: 'Stop mal placé, sizing trop gros, timing raté. Sans R/R défini, chaque trade est un pari.',
    glow: 'rgba(239,68,68,0.12)',
  },
  {
    title: 'Psychologie non maîtrisée',
    desc: 'FOMO, revenge trading, sortie panique. Les émotions détruisent même les meilleures analyses.',
    glow: 'rgba(239,68,68,0.12)',
  },
]

export default function Problem() {
  return (
    <section className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(239,68,68,0.04), transparent)' }} />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Pourquoi 95% des traders
            <br />
            <span style={{ background: 'linear-gradient(90deg, #f87171, #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              ne deviennent jamais rentables ?
            </span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.62)' }}>
            Ce n'est pas le marché. Ce sont toujours les mêmes erreurs évitables.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl p-6 cursor-default"
              style={{ background: '#1c1c1c', border: '1px solid rgba(239,68,68,0.12)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{
                borderColor: 'rgba(239,68,68,0.4)',
                boxShadow: '0 0 40px rgba(239,68,68,0.1)',
                y: -4,
                transition: { duration: 0.2 },
              }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(239,68,68,0.08)' }}>
                <XCircle size={18} style={{ color: '#f87171' }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.65)' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution banner */}
        <motion.div
          className="rounded-2xl p-5 flex items-center justify-between gap-4 flex-wrap"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(212,175,55,0.06))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <div className="flex items-center gap-3">
            <CheckCircle size={20} style={{ color: '#10b981' }} className="shrink-0" />
            <p className="text-sm sm:text-base font-semibold text-white">
              JustOneTrader résout ces 3 problèmes avec une méthode structurée et transparente.
            </p>
          </div>
          <a
            href="https://whop.com/justonetrader"
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
            style={{ background: 'linear-gradient(135deg, #d4af37, #e8c94a)', color: '#0a0a0f' }}
          >
            Rejoindre →
          </a>
        </motion.div>
      </div>
    </section>
  )
}
