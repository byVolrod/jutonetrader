import { motion } from 'framer-motion'
import { XCircle, CheckCircle } from 'lucide-react'

const problems = [
  {
    title: 'Aucune stratégie claire',
    desc: 'Trading à l\'instinct, entrées aléatoires, aucune cohérence dans les résultats.',
  },
  {
    title: 'Gestion du risque absente',
    desc: 'Positions trop grandes, stop-loss mal placés. Des comptes brûlés en quelques trades.',
  },
  {
    title: 'Psychologie non maîtrisée',
    desc: 'FOMO, revenge trading, panique sur les pertes. Les émotions détruisent les performances.',
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
            La réalité du trading
            <br />
            <span style={{ background: 'linear-gradient(90deg, #f87171, #fca5a5)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              sans méthode.
            </span>
          </h2>
          <p className="text-base" style={{ color: 'rgba(255,255,255,0.4)' }}>
            95% des traders perdent leur capital à cause des mêmes erreurs.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {problems.map((p, i) => (
            <motion.div
              key={p.title}
              className="rounded-2xl p-6"
              style={{ background: '#0e0e18', border: '1px solid rgba(239,68,68,0.12)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-4"
                style={{ background: 'rgba(239,68,68,0.08)' }}>
                <XCircle size={18} style={{ color: '#f87171' }} />
              </div>
              <h3 className="text-white font-bold text-base mb-2">{p.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.4)' }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Solution banner */}
        <motion.div
          className="rounded-2xl p-5 flex items-center justify-center gap-3 text-center"
          style={{
            background: 'linear-gradient(135deg, rgba(16,185,129,0.08), rgba(212,175,55,0.06))',
            border: '1px solid rgba(16,185,129,0.2)',
          }}
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
        >
          <CheckCircle size={20} style={{ color: '#10b981' }} className="shrink-0" />
          <p className="text-sm sm:text-base font-semibold text-white">
            JustOneTrader résout ces 3 problèmes avec une méthode structurée et transparente.
          </p>
        </motion.div>

      </div>
    </section>
  )
}
