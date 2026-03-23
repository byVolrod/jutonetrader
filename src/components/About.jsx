import { motion } from 'framer-motion'
const milestones = [
  { year: '2021', label: 'Passion finance' },
  { year: '2024', label: 'Mentor crypto' },
  { year: '2025', label: 'Mentors AT & AF' },
  { year: '2026', label: 'Communauté JOT' },
]

export default function About() {
  return (
    <section id="parcours" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse 50% 60% at 30% 50%, rgba(212,175,55,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          {/* Photo side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="absolute -inset-4 rounded-3xl blur-3xl pointer-events-none"
              style={{ background: 'rgba(212,175,55,0.06)' }} />
            <div className="relative rounded-2xl overflow-hidden"
              style={{ border: '1px solid rgba(255,255,255,0.08)', aspectRatio: '4/5', maxHeight: 520 }}>
              <img
                src="/founder.jpg"
                alt="Fondateur de JustOneTrader"
                className="w-full h-full object-cover"
                style={{ objectPosition: '60% 30%' }}
                loading="lazy"
                draggable="false"
              />
              <div className="absolute inset-0 pointer-events-none"
                style={{ background: 'linear-gradient(to top, rgba(10,10,15,0.8) 0%, transparent 50%)' }} />

              {/* Timeline overlay */}
              <div className="absolute bottom-0 left-0 right-0 px-5 pb-6 pt-16"
                style={{ background: 'linear-gradient(to top, rgba(10,10,15,1) 55%, transparent)' }}>
                {/* Timeline line + dots */}
                <div className="relative">
                  {/* Track */}
                  <div className="absolute left-0 right-0 h-px" style={{ top: 6, background: 'rgba(212,175,55,0.2)' }} />
                  {/* Progress fill */}
                  <div className="absolute left-0 h-px" style={{ top: 6, width: '75%', background: 'linear-gradient(90deg, #d4af37, rgba(212,175,55,0.3))' }} />

                  <div className="flex justify-between relative">
                    {milestones.map((m, i) => {
                      const isDone = i < 3
                      return (
                        <motion.div
                          key={m.year}
                          className="flex flex-col items-center"
                          style={{ minWidth: 0 }}
                          initial={{ opacity: 0, y: 10 }}
                          whileInView={{ opacity: 1, y: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.3 + i * 0.12 }}
                        >
                          {/* Dot */}
                          <div className="w-3 h-3 rounded-full mb-3 flex-shrink-0"
                            style={{
                              background: isDone ? '#d4af37' : 'rgba(212,175,55,0.25)',
                              border: isDone ? '2px solid rgba(212,175,55,0.5)' : '1px solid rgba(212,175,55,0.2)',
                              boxShadow: isDone ? '0 0 8px rgba(212,175,55,0.4)' : 'none',
                            }} />
                          {/* Year */}
                          <div className="text-sm font-black leading-none mb-1"
                            style={{ color: isDone ? '#d4af37' : 'rgba(212,175,55,0.4)' }}>
                            {m.year}
                          </div>
                          {/* Label */}
                          <div className="text-xs text-center leading-snug"
                            style={{ color: isDone ? 'rgba(255,255,255,0.6)' : 'rgba(255,255,255,0.25)', whiteSpace: 'nowrap' }}>
                            {m.label}
                          </div>
                        </motion.div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Qui suis-je
            </div>

            <h2 className="text-3xl sm:text-4xl font-black leading-tight mb-6">
              Un trader en progression,
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                pas un vendeur de rêve.
              </span>
            </h2>

            <div className="space-y-4 mb-8">
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Passionné de finance depuis <strong className="text-white">2021</strong>, j'ai tout testé : copytrading, DCA, investissements passifs. En <strong className="text-white">2024</strong>, je me forme sérieusement avec un premier mentor en crypto, puis en <strong className="text-white">2025</strong> avec deux mentors spécialisés en analyse technique et fondamentale.
              </p>
              <p className="text-base leading-relaxed" style={{ color: 'rgba(255,255,255,0.55)' }}>
                Aujourd'hui, je partage chaque trade, chaque analyse, chaque résultat, gagnant ou perdant, en toute transparence avec la communauté. Pas de faux screenshots, pas de résultats triés. Juste la réalité d'un trader qui progresse et qui documente tout.
              </p>
            </div>

            {/* Stats row */}
            <div className="flex items-center gap-6">
              {[
                { value: '5+', label: 'Ans dans la finance', color: '#d4af37' },
                { value: '3', label: 'Mentors', color: '#10b981' },
                { value: '84+', label: 'Membres', color: '#d4af37' },
              ].map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.4 + i * 0.08 }}
                >
                  <div className="text-2xl font-black" style={{ color: s.color }}>{s.value}</div>
                  <div className="text-xs mt-0.5" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
