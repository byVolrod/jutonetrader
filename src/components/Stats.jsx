import { motion } from 'framer-motion'

const stats = [
  { value: '+104', label: 'Membres actifs', sublabel: 'Communauté en croissance' },
  { value: '5.0★', label: 'Note moyenne', sublabel: 'Sur 13 avis vérifiés', gold: true },
  { value: '3', label: 'Marchés couverts', sublabel: 'FX • Indices • Crypto' },
  { value: '24/7', label: 'Disponibilité', sublabel: 'Signaux & support' },
]

export default function Stats() {
  return (
    <section className="relative py-14 overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'linear-gradient(180deg, transparent, rgba(212,175,55,0.03) 50%, transparent)' }} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px rounded-2xl overflow-hidden" style={{ border: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.04)' }}>
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              className="flex flex-col items-center justify-center py-8 px-4 text-center"
              style={{ background: '#141414' }}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              <div className="text-3xl sm:text-4xl font-black mb-1" style={{ color: s.gold ? '#d4af37' : '#ffffff' }}>{s.value}</div>
              <div className="text-white font-semibold text-sm mb-0.5">{s.label}</div>
              <div className="text-xs" style={{ color: 'rgba(255,255,255,0.58)' }}>{s.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
