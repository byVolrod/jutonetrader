import { motion } from 'framer-motion'
import { Flame, BookOpen, TrendingUp, Users, Bitcoin } from 'lucide-react'

const timeline = [
  {
    icon: Flame,
    year: '2021',
    title: 'La passion commence',
    desc: 'Découverte de la finance et des marchés financiers. Exploration de toutes les approches : copytrading, investissements passifs, DCA crypto.',
  },
  {
    icon: Bitcoin,
    year: 'Nov 2024',
    title: 'Investissement crypto',
    desc: 'Début de l\'investissement en crypto avec un mentor spécialisé. Apprentissage des cycles de marché, de l\'on-chain et des fondamentaux crypto.',
  },
  {
    icon: BookOpen,
    year: 'Mai 2025',
    title: '1er mentor trading — Analyse technique',
    desc: 'Début du trading sérieux avec un premier mentor spécialisé en analyse technique. Apprentissage des bases structurelles du marché.',
  },
  {
    icon: Users,
    year: 'Jan 2026',
    title: '2ème mentor trading — Fondamentale & Technique',
    desc: 'Élargissement de la méthode avec un second mentor combinant analyse fondamentale et technique pour une vision complète des marchés.',
  },
  {
    icon: TrendingUp,
    year: 'Aujourd\'hui',
    title: 'De breakeven à rentable',
    desc: 'En progression constante avec 93% de winrate. Je partage chaque setup et chaque analyse en toute transparence avec la communauté.',
  },
]

const pillars = [
  { value: '5+', label: 'Ans de passion', color: '#d4af37' },
  { value: '3', label: 'Mentors actifs', color: '#10b981' },
  { value: '93%', label: 'Win rate', color: '#d4af37' },
]

export default function About() {
  return (
    <section id="methode" className="py-14 sm:py-20 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-5 gap-12 xl:gap-20 items-start">

          {/* Left — Text block */}
          <motion.div
            className="lg:col-span-2 lg:sticky lg:top-28"
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-6 text-xs font-semibold tracking-widest uppercase"
              style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
              Mon parcours
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-5">
              La transparence
              <br />
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                avant tout.
              </span>
            </h2>

            <p className="text-base leading-relaxed mb-8" style={{ color: 'rgba(255,255,255,0.55)' }}>
              Passionné de finance depuis <strong className="text-white">2021</strong>, j'ai tout exploré — copytrading, investissements passifs, DCA. En <strong className="text-white">novembre 2024</strong> je démarre l'investissement crypto avec un mentor dédié, puis en <strong className="text-white">mai 2025</strong> je me lance dans le trading avec un 1er mentor en analyse technique, et en <strong className="text-white">janvier 2026</strong> mon 2ème mentor en fondamentale & technique.
            </p>

            {/* Key stats */}
            <div className="space-y-3">
              {pillars.map((p, i) => (
                <motion.div
                  key={p.label}
                  className="flex items-center gap-4 rounded-2xl p-4"
                  style={{ background: '#12121a', border: '1px solid rgba(255,255,255,0.06)' }}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.08 }}
                >
                  <div className="text-2xl font-black w-14 shrink-0" style={{ color: p.color }}>{p.value}</div>
                  <div className="w-px h-8 shrink-0" style={{ background: 'rgba(255,255,255,0.06)' }} />
                  <div className="text-sm font-medium" style={{ color: 'rgba(255,255,255,0.6)' }}>{p.label}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right — Timeline */}
          <motion.div
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div className="relative">
              {/* Vertical line */}
              <div className="absolute left-4 top-4 bottom-4 w-px"
                style={{ background: 'linear-gradient(to bottom, rgba(212,175,55,0.5), rgba(212,175,55,0.03))' }} />

              <div className="space-y-5">
                {timeline.map((item, i) => (
                  <motion.div
                    key={item.year}
                    className="relative flex gap-5 pl-12"
                    initial={{ opacity: 0, x: 16 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  >
                    {/* Icon dot */}
                    <div className="absolute left-0 w-9 h-9 rounded-full flex items-center justify-center shrink-0"
                      style={{
                        background: i === timeline.length - 1 ? 'rgba(212,175,55,0.18)' : '#12121a',
                        border: `1px solid ${i === timeline.length - 1 ? 'rgba(212,175,55,0.5)' : 'rgba(255,255,255,0.08)'}`,
                        boxShadow: i === timeline.length - 1 ? '0 0 12px rgba(212,175,55,0.2)' : 'none',
                      }}>
                      <item.icon size={15} style={{ color: i === timeline.length - 1 ? '#d4af37' : 'rgba(255,255,255,0.3)' }} />
                    </div>

                    <div className="rounded-2xl p-4 flex-1 transition-all"
                      style={{
                        background: i === timeline.length - 1 ? 'rgba(212,175,55,0.04)' : '#12121a',
                        border: `1px solid ${i === timeline.length - 1 ? 'rgba(212,175,55,0.18)' : 'rgba(255,255,255,0.06)'}`,
                      }}>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="text-xs font-bold px-2.5 py-0.5 rounded-full"
                          style={{ background: 'rgba(212,175,55,0.1)', color: '#d4af37' }}>
                          {item.year}
                        </span>
                        <span className="text-white font-semibold text-sm">{item.title}</span>
                      </div>
                      <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.45)' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  )
}
