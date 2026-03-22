import { motion } from 'framer-motion'
import { Check, Sparkles } from 'lucide-react'

const plans = [
  {
    name: 'JOT — TRADING',
    emoji: '📈',
    price: 'Gratuit',
    period: '',
    description: 'Accès immédiat. Zéro engagement. Testez la méthode et rejoignez la communauté.',
    features: [
      'Accès au salon communauté Discord',
      'Analyses de marché générales',
      'Contenu éducatif Forex & Indices',
    ],
    cta: 'Commencer gratuitement',
    popular: false,
  },
  {
    name: 'JOT — DTP',
    emoji: '🏦',
    price: '24,99€',
    period: '/mois',
    description: 'Pour les traders qui veulent structure, discipline et signaux exclusifs.',
    features: [
      'Tout du plan Gratuit',
      'Signaux DTP exclusifs avec contexte',
      'Analyses techniques approfondies',
      'Support prioritaire',
    ],
    cta: 'Choisir DTP',
    popular: false,
  },
  {
    name: 'JOT — CRYPTO',
    emoji: '₿',
    price: '39,99€',
    period: '/mois',
    description: 'Bitcoin, altcoins, on-chain — les marchés crypto analysés en profondeur.',
    features: [
      'Tout du plan DTP',
      'Signaux Crypto exclusifs temps réel',
      'Analyses on-chain & fondamentales',
      'Alertes Bull/Bear market',
    ],
    cta: 'Choisir Crypto',
    popular: false,
  },
  {
    name: 'JOT — PREMIUM',
    emoji: '💎',
    price: '59,99€',
    period: '/mois',
    description: 'L\'accès total. Coaching, signaux tous marchés — la formule des traders qui performent.',
    features: [
      'Tous les signaux Forex, Indices & Crypto',
      'Coaching personnalisé individuel',
      'Setups exclusifs pre-market quotidiens',
      'Analyses fondamentales hebdomadaires',
      'Accès VIP prioritaire & support 24/7',
    ],
    cta: 'Devenir Premium',
    popular: true,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" className="py-14 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0" style={{ background: 'radial-gradient(ellipse 60% 50% at 50% 100%, rgba(212,175,55,0.05), transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            Nos offres
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-4">
            Commencez
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> gratuitement.</span>
          </h2>
          <p className="text-base max-w-lg mx-auto" style={{ color: 'rgba(255,255,255,0.45)' }}>
            Un plan pour chaque étape de votre progression.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 xl:grid-cols-4 gap-5">
          {plans.map((plan, i) => (
            <motion.div
              key={plan.name}
              className="relative flex flex-col rounded-2xl p-6"
              style={{
                background: plan.popular
                  ? 'linear-gradient(160deg, rgba(212,175,55,0.09), #0e0e18 60%)'
                  : '#0e0e18',
                border: plan.popular
                  ? '1px solid rgba(212,175,55,0.35)'
                  : '1px solid rgba(255,255,255,0.07)',
              }}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
            >
              {plan.popular && (
                <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 flex items-center gap-1.5 text-xs font-black px-4 py-1.5 rounded-full whitespace-nowrap"
                  style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', color: '#0a0a0f' }}>
                  <Sparkles size={10} />
                  MEILLEURE OFFRE
                </div>
              )}

              {/* Plan name */}
              <div className="mb-5">
                <div className="flex items-center gap-2 mb-2">
                  <span>{plan.emoji}</span>
                  <span className="text-white font-bold text-sm tracking-wide">{plan.name}</span>
                </div>
                <p className="text-xs leading-relaxed" style={{ color: 'rgba(255,255,255,0.38)' }}>{plan.description}</p>
              </div>

              {/* Price */}
              <div className="mb-6 pb-5" style={{ borderBottom: '1px solid rgba(255,255,255,0.06)' }}>
                <span className="text-3xl font-black text-white">{plan.price}</span>
                <span className="text-sm ml-1" style={{ color: 'rgba(255,255,255,0.35)' }}>{plan.period}</span>
              </div>

              {/* Features */}
              <ul className="space-y-2.5 mb-8 flex-1">
                {plan.features.map(f => (
                  <li key={f} className="flex items-start gap-2.5 text-xs">
                    <Check size={12} className="mt-0.5 shrink-0" style={{ color: plan.popular ? '#d4af37' : '#10b981' }} />
                    <span style={{ color: 'rgba(255,255,255,0.55)' }}>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href="https://whop.com/justonetrader"
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center font-bold py-3 rounded-xl text-sm transition-all"
                style={plan.popular
                  ? { background: 'linear-gradient(90deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 30px rgba(212,175,55,0.2)' }
                  : { background: 'rgba(255,255,255,0.05)', color: 'rgba(255,255,255,0.75)', border: '1px solid rgba(255,255,255,0.1)' }
                }
                onMouseEnter={e => { if (!plan.popular) e.currentTarget.style.borderColor = 'rgba(212,175,55,0.35)' }}
                onMouseLeave={e => { if (!plan.popular) e.currentTarget.style.borderColor = 'rgba(255,255,255,0.1)' }}
              >
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
