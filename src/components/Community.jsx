import { motion } from 'framer-motion'
import { Hash, MessageSquare } from 'lucide-react'

const screenshots = [
  {
    src: '/jot-trades.png',
    channel: 'jot-trades',
    label: 'Trades en temps réel',
    desc: 'Positions partagées en live avec entrée, résultat et analyse.',
  },
  {
    src: '/analyse-technique.png',
    channel: 'analyse-technique',
    label: 'Analyses graphiques',
    desc: 'Chaque setup est expliqué — structure, zone d\'entrée, SL, TP.',
  },
  {
    src: '/analyse-live.jpg',
    channel: 'analyse-live',
    label: 'Sessions live',
    desc: 'Analyses en direct avec partage d\'écran devant la communauté.',
  },
  {
    src: '/analyse-fondamentales.png',
    channel: 'analyse-fondamentale',
    label: 'Weekly & Daily FX Recap',
    desc: 'Analyses macro et fondamentales publiées chaque semaine.',
  },
  {
    src: '/profits.png',
    channel: 'forex-profits',
    label: 'Résultats des membres',
    desc: 'Les membres partagent leurs gains. La preuve par les faits.',
  },
]

function Card({ item, i }) {
  return (
    <motion.div
      className="rounded-2xl overflow-hidden group"
      style={{
        border: '1px solid rgba(255,255,255,0.07)',
        background: '#0e0e18',
      }}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.08 }}
      whileHover={{ borderColor: 'rgba(212,175,55,0.2)', transition: { duration: 0.2 } }}
    >
      {/* Title bar */}
      <div className="flex items-center gap-2.5 px-4 py-3"
        style={{ background: 'rgba(0,0,0,0.3)', borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
        <Hash size={14} style={{ color: 'rgba(255,255,255,0.3)' }} />
        <span className="text-sm font-semibold text-white">{item.channel}</span>
      </div>

      {/* Image */}
      <div className="relative overflow-hidden" style={{ height: 200 }}>
        <img
          src={item.src}
          alt={item.label}
          className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.04]"
        />
        <div className="absolute inset-0 pointer-events-none"
          style={{ background: 'linear-gradient(to top, #0e0e18 0%, transparent 60%)' }} />
      </div>

      {/* Caption */}
      <div className="px-4 py-3.5 flex items-center gap-3">
        <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
          style={{ background: 'rgba(212,175,55,0.1)' }}>
          <MessageSquare size={14} style={{ color: '#d4af37' }} />
        </div>
        <div>
          <div className="text-white font-semibold text-sm">{item.label}</div>
          <p className="text-xs leading-relaxed mt-0.5" style={{ color: 'rgba(255,255,255,0.4)' }}>{item.desc}</p>
        </div>
      </div>
    </motion.div>
  )
}

export default function Community() {
  return (
    <section id="communaute" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 70% 50% at 50% 50%, rgba(88,101,242,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <motion.div
          className="max-w-2xl mb-10"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(88,101,242,0.35)', background: 'rgba(88,101,242,0.07)', color: '#a5b4fc' }}>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#a5b4fc', animation: 'pulse 2s infinite' }} />
            Discord actif
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-4">
            La communauté
            <br />
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              en action.
            </span>
          </h2>
          <p className="text-lg" style={{ color: 'rgba(255,255,255,0.45)' }}>
            84 membres, des analyses quotidiennes, des trades commentés en direct. La preuve par l'image.
          </p>
        </motion.div>

        {/* Grid: 5 cards in one row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {screenshots.map((item, i) => (
            <Card key={item.channel} item={item} i={i} />
          ))}
        </div>

      </div>
    </section>
  )
}
