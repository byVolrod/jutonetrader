import { motion } from 'framer-motion'
import { Zap, Target, BookOpen, Users } from 'lucide-react'

const services = [
  {
    icon: Zap,
    title: 'Signaux en temps réel',
    description: 'Entrée précise, stop-loss et take-profit directement dans votre Discord privé — avec le contexte de marché. Chaque alerte est justifiée, jamais lancée à l\'aveugle.',
    tag: 'Live',
    color: '#d4af37',
  },
  {
    icon: Target,
    title: 'Gestion du risque',
    description: 'Chaque setup intègre une gestion de position adaptée à votre capital. Parce que durer en trading, c\'est d\'abord une question de risque maîtrisé.',
    tag: 'Risk',
    color: '#10b981',
  },
  {
    icon: BookOpen,
    title: 'Analyse AT & AF',
    description: 'Analyse technique structurelle et fondamentale macro combinées. Comprenez pourquoi le marché bouge — pas seulement comment il bouge.',
    tag: 'Méthode',
    color: '#d4af37',
  },
  {
    icon: Users,
    title: 'Communauté de traders',
    description: 'Un Discord actif où chaque membre partage, challenge et progresse. Pas de place pour la médiocrité — juste des traders sérieux qui veulent performer.',
    tag: 'Discord',
    color: '#10b981',
  },
]

export default function Services() {
  return (
    <section id="services" className="py-14 sm:py-20">
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
                Ce qu'on offre
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Trader avec méthode,
                <br />
                <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  pas au feeling.
                </span>
              </h2>
            </div>
            <p className="text-base lg:max-w-xs lg:text-right" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Chaque outil est conçu pour vous donner un avantage réel sur les marchés Forex, Indices et Crypto.
            </p>
          </div>
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              className="group relative rounded-2xl p-6 cursor-default transition-all duration-300 overflow-hidden flex flex-col"
              style={{ background: '#0e0e18', border: '1px solid rgba(255,255,255,0.07)' }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              whileHover={{ borderColor: `${s.color}28`, y: -4 }}
            >
              {/* Ghost number */}
              <div className="absolute -bottom-2 -right-1 text-[6rem] font-black pointer-events-none select-none leading-none"
                style={{ color: 'rgba(255,255,255,0.022)' }}>
                {String(i + 1).padStart(2, '0')}
              </div>

              {/* Top row: icon + tag */}
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

              {/* Bottom accent line on hover */}
              <div className="mt-5 h-px w-0 group-hover:w-full transition-all duration-500"
                style={{ background: `linear-gradient(90deg, ${s.color}60, transparent)` }} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
