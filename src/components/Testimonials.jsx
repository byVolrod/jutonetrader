import { motion } from 'framer-motion'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Anis Messaoud',
    date: 'Février 2026',
    content: 'Il m\'a beaucoup aidé surtout le service Data Trading Pro, franchement y\'a pas plus simple. Ça aide vraiment, magnifique personne et magnifique service, je vous le recommande.',
    initial: 'A',
  },
  {
    name: 'Nelson',
    date: 'Octobre 2025',
    content: 'Franchement j\'ai jamais vu quelqu\'un d\'aussi discipliné et à l\'écoute. C\'est vraiment quelqu\'un de bon conseil et je pense sincèrement que le Discord a de l\'avenir dans le monde de la finance. C\'est le seul Discord que je recommanderai.',
    initial: 'N',
  },
  {
    name: 'Soufiane Belghali',
    date: 'Octobre 2025',
    content: 'Je le connais depuis presque deux ans maintenant. C\'est une super personne, toujours là pour aider, donner des explications ou partager des bons plans. Quelqu\'un d\'honnête, ambitieux et qui cherche vraiment à faire évoluer les gens autour de lui.',
    initial: 'S',
  },
  {
    name: 'Azedine',
    date: 'Juillet 2025',
    content: 'Les explications sont claires, structurées, et vont droit au but. Parfait pour ceux qui veulent apprendre le trading sérieusement, sans bullshit. L\'approche pédagogique est pensée pour accompagner pas à pas, même si on part de zéro.',
    initial: 'A',
  },
  {
    name: 'Adrien B.',
    date: 'Juillet 2025',
    content: 'JustOneTrader est excellent : analyses crypto claires, résumés économiques efficaces et des points réguliers sur le marché. J\'ai fait du profit en suivant leurs placements. Idéal pour progresser et apprendre sur la crypto !',
    initial: 'A',
  },
  {
    name: 'Maalot',
    date: 'Novembre 2025',
    content: 'Ça fait plus d\'un an que je le connais, il est très passionné par ce qu\'il fait et est toujours à l\'écoute s\'il y a un problème. Vous pouvez rejoindre sans risque, votre portefeuille vous remerciera.',
    initial: 'M',
  },
  {
    name: 'Le_G',
    date: 'Juillet 2025',
    content: 'Pas de vendeur de rêve, que du sérieux, très à l\'écoute et de bons conseils. Les informations sont claires. Le top pour apprendre ou bien progresser dans la crypto.',
    initial: 'L',
  },
  {
    name: 'Wahib',
    date: 'Juillet 2025',
    content: 'Super initiation, mode de fonctionnement simple, de la communication, de l\'échange. Hâte de continuer, d\'en apprendre plus et de pouvoir enfin passer à la pratique !',
    initial: 'W',
  },
]

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => <Star key={i} size={12} fill="#d4af37" color="#d4af37" />)}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section id="temoignages" className="py-16 sm:py-24 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(ellipse 70% 40% at 50% 0%, rgba(212,175,55,0.04), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

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
                Avis Whop vérifiés
              </div>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight">
                Ce qu'ils en disent.
              </h2>
            </div>
            <div className="flex items-center gap-3">
              <Stars />
              <span className="text-white font-black text-xl">5.0</span>
              <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>· 10 avis vérifiés sur Whop</span>
            </div>
          </div>
        </motion.div>

        {/* First row: 4 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4 mb-4">
          {testimonials.slice(0, 4).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i} />
          ))}
        </div>

        {/* Second row: 4 cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
          {testimonials.slice(4).map((t, i) => (
            <TestimonialCard key={t.name} t={t} i={i + 4} />
          ))}
        </div>

        <motion.div
          className="text-center mt-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
        >
          <a href="https://whop.com/justonetrader/" target="_blank" rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-sm transition-colors"
            style={{ color: 'rgba(255,255,255,0.3)' }}
            onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
            onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
          >
            Voir les 10 avis sur Whop →
          </a>
        </motion.div>
      </div>
    </section>
  )
}

function TestimonialCard({ t, i }) {
  return (
    <motion.div
      className="relative rounded-2xl p-5 flex flex-col"
      style={{ background: '#0e0e18', border: '1px solid rgba(255,255,255,0.07)' }}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: i * 0.05 }}
      whileHover={{ borderColor: 'rgba(212,175,55,0.18)', translateY: -3 }}
    >
      <div className="absolute top-4 right-4 text-5xl font-black leading-none pointer-events-none select-none"
        style={{ color: 'rgba(212,175,55,0.06)', fontFamily: 'Georgia, serif' }}>
        "
      </div>

      <div className="mb-3">
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
          <div className="text-xs" style={{ color: 'rgba(255,255,255,0.32)' }}>{t.date} · Whop</div>
        </div>
      </div>
    </motion.div>
  )
}
