import { motion } from 'framer-motion'
import { ArrowRight, TrendingUp, ShieldCheck, Users } from 'lucide-react'

const proof = [
  { icon: TrendingUp, label: '93% win rate', sub: 'Sur 3 mois de trading réel' },
  { icon: ShieldCheck, label: 'Transparence totale', sub: 'Chaque trade tracé sur Pilot' },
  { icon: Users, label: '84+ membres actifs', sub: 'Notés 5.0★ sur Whop' },
]

export default function CTA() {
  return (
    <section className="py-14 sm:py-20">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden"
          style={{ background: '#0e0e18', border: '1px solid rgba(212,175,55,0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {/* Background glows */}
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 blur-3xl pointer-events-none"
            style={{ background: 'rgba(212,175,55,0.07)' }} />
          <div className="absolute bottom-0 right-0 w-64 h-64 blur-3xl pointer-events-none"
            style={{ background: 'rgba(16,185,129,0.04)' }} />

          {/* Top accent line */}
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />

          <div className="relative px-8 sm:px-16 pt-14 pb-10 text-center">
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.25)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Rejoindre JustOneTrader
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4 leading-tight">
              Assez de rater
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a, #d4af37)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                les meilleures opportunités.
              </span>
            </h2>

            <p className="text-base mb-10 max-w-lg mx-auto leading-relaxed" style={{ color: 'rgba(255,255,255,0.48)' }}>
              Rejoignez une communauté de traders sérieux. Accédez aux signaux Forex, Indices et Crypto en temps réel — avec une méthode qui a fait ses preuves.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
              <motion.a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-2.5 font-black px-8 py-4 rounded-xl transition-all text-sm"
                style={{ background: 'linear-gradient(90deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 50px rgba(212,175,55,0.2)' }}
                whileHover={{ scale: 1.04, boxShadow: '0 0 70px rgba(212,175,55,0.35)' }}
                whileTap={{ scale: 0.97 }}
              >
                Accéder à la communauté
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.a>
              <a
                href="https://t.me/justonetrader_1"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm font-medium px-6 py-4 rounded-xl transition-all"
                style={{ color: 'rgba(255,255,255,0.5)', border: '1px solid rgba(255,255,255,0.08)' }}
                onMouseEnter={e => { e.currentTarget.style.color = 'white'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.18)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'rgba(255,255,255,0.5)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)' }}
              >
                Une question ? Telegram →
              </a>
            </div>

            {/* Proof strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-8"
              style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
              {proof.map((p, i) => (
                <div key={i} className="flex items-center gap-3 justify-center sm:justify-start">
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0"
                    style={{ background: 'rgba(212,175,55,0.1)' }}>
                    <p.icon size={14} style={{ color: '#d4af37' }} />
                  </div>
                  <div className="text-left">
                    <div className="text-white font-bold text-sm">{p.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.3)' }}>{p.sub}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
