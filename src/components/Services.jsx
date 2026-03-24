import { motion } from 'framer-motion'
import { Zap, Target, BookOpen, Users } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Analyses en temps réel',
    description: 'Entrée, stop-loss, take-profit, directement dans Discord avec le contexte. Chaque alerte est justifiée.',
    tag: 'Live',
    color: '#d4af37',
  },
  {
    icon: BookOpen,
    title: 'Analyse AT & Fondamentale',
    description: 'On combine technique et macro pour comprendre pourquoi le marché bouge, pas juste comment.',
    tag: 'Méthode',
    color: '#10b981',
  },
  {
    icon: Target,
    title: 'Gestion du risque',
    description: 'Chaque setup a une gestion de position adaptée. Durer en trading, c\'est d\'abord maîtriser son risque.',
    tag: 'Risk',
    color: '#d4af37',
  },
  {
    icon: Users,
    title: 'Communauté active',
    description: 'Un Discord où chaque membre partage, challenge et progresse. Des traders sérieux, pas de bruit.',
    tag: 'Discord',
    color: '#10b981',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-16 sm:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <motion.div
          className="text-center max-w-2xl mx-auto mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            Ce qu'on offre
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            Tout ce qu'il faut
            <br />
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              pour progresser.
            </span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative rounded-2xl p-6 cursor-default overflow-hidden flex flex-col"
              style={{ background: '#0e0e18', border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ borderColor: `${s.color}28`, y: -4, transition: { duration: 0.2 } }}
            >
              <div className="absolute -bottom-2 -right-1 text-[6rem] font-black pointer-events-none select-none leading-none"
                style={{ color: 'rgba(255,255,255,0.022)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              <div className="flex items-start justify-between mb-5">
                <div className="w-11 h-11 rounded-xl flex items-center justify-center"
                  style={{ background: `${s.color}12` }}>
                  <s.icon size={19} style={{ color: s.color }} />
                </div>
                <span className="text-xs font-bold px-2.5 py-1 rounded-full"
                  style={{ background: `${s.color}10`, color: s.color, border: `1px solid ${s.color}25` }}>
                  {s.tag}
                </span>
              </div>

              <h3 className="text-white font-bold text-base mb-2.5">{s.title}</h3>
              <p className="text-sm leading-relaxed flex-1" style={{ color: 'rgba(255,255,255,0.42)' }}>{s.description}</p>

              <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}60, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
