import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Plus, Minus } from 'lucide-react'

const faqs = [
  {
    q: 'C\'est quoi JustOneTrader ?',
    a: 'JustOneTrader est une communauté de traders et d\'investisseurs réunie autour d\'une approche rigoureuse des marchés financiers — Forex, Indices et Crypto. Analyses en temps réel, trades commentés, suivi de portefeuille et accompagnement personnalisé. La particularité ? Une transparence totale sur chaque décision, chaque résultat, chaque étape du parcours.',
  },
  {
    q: 'Je suis débutant en trading, c\'est fait pour moi ?',
    a: 'Oui. Le plan gratuit est conçu pour ceux qui commencent. Chaque signal est accompagné d\'une explication structurée : zone d\'entrée, stop-loss, take-profit et raisonnement. Pas de jargon inutile — juste ce qu\'il faut pour comprendre et agir. La communauté Discord est bienveillante et accessible à tout moment.',
  },
  {
    q: 'Comment fonctionnent les signaux de trading Forex ?',
    a: 'Les signaux arrivent directement dans votre salon Discord privé. Chaque alerte inclut le contexte de marché (analyse technique + fondamentale), le point d\'entrée, le stop-loss, les objectifs de prise de profits et la taille de position recommandée. Rien n\'est envoyé sans justification.',
  },
  {
    q: 'Quel plan choisir pour débuter ?',
    a: 'Commencez par le plan gratuit pour découvrir la méthode et l\'ambiance. Si vous tradez la crypto, JOT - CRYPTO est fait pour vous. Pour un accès complet à tous les marchés (Forex, Indices, Crypto) avec coaching personnalisé, JOT - PREMIUM est le meilleur investissement.',
  },
  {
    q: 'Puis-je changer de plan à tout moment ?',
    a: 'Oui, sans engagement. Vous pouvez upgrader, downgrader ou annuler votre abonnement à tout moment depuis votre espace Whop. Aucun frais caché, aucune mauvaise surprise.',
  },
  {
    q: 'Les résultats sont-ils garantis ?',
    a: 'Non — et tout trader honnête vous dira la même chose. Le trading comporte des risques de perte en capital. Ce que JustOneTrader garantit : des analyses rigoureuses, des setups justifiés, une gestion du risque transparente et un accompagnement sincère dans votre progression. Nos performances sont enregistrées en temps réel sur Pilot, accessibles à tous les membres.',
  },
]

function FaqItem({ faq, isOpen, onToggle, index }) {
  return (
    <div
      className="rounded-2xl overflow-hidden transition-colors duration-200"
      style={{
        background: isOpen ? 'rgba(212,175,55,0.03)' : '#0e0e18',
        border: isOpen ? '1px solid rgba(212,175,55,0.22)' : '1px solid rgba(255,255,255,0.07)',
      }}
    >
      <button onClick={onToggle} className="w-full flex items-center justify-between p-5 text-left gap-4">
        <div className="flex items-center gap-3">
          <span className="text-xs font-black tabular-nums shrink-0"
            style={{ color: isOpen ? '#d4af37' : 'rgba(255,255,255,0.18)' }}>
            {String(index + 1).padStart(2, '0')}
          </span>
          <span className="text-white font-medium text-sm sm:text-base">{faq.q}</span>
        </div>
        <div className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-colors"
          style={{ background: isOpen ? 'rgba(212,175,55,0.15)' : 'rgba(255,255,255,0.05)' }}>
          {isOpen
            ? <Minus size={13} style={{ color: '#d4af37' }} />
            : <Plus size={13} style={{ color: 'rgba(255,255,255,0.45)' }} />}
        </div>
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.22 }}
            className="overflow-hidden"
          >
            <p className="px-5 pb-5 pl-14 text-sm leading-relaxed" style={{ color: 'rgba(255,255,255,0.5)' }}>
              {faq.a}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState(0)

  return (
    <section id="faq" className="py-14 sm:py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="inline-flex items-center gap-2 rounded-full px-4 py-1.5 mb-5 text-xs font-semibold tracking-widest uppercase"
            style={{ border: '1px solid rgba(212,175,55,0.3)', background: 'rgba(212,175,55,0.05)', color: '#d4af37' }}>
            FAQ
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black mb-3">
            Vos questions,
            <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> nos réponses.</span>
          </h2>
          <p className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
            Une question sans réponse ? Contactez-nous sur <a href="https://t.me/justonetrader_1" target="_blank" rel="noopener noreferrer" className="underline" style={{ color: '#d4af37' }}>Telegram</a>.
          </p>
        </motion.div>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <motion.div
              key={faq.q}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
            >
              <FaqItem
                faq={faq}
                index={i}
                isOpen={openIdx === i}
                onToggle={() => setOpenIdx(openIdx === i ? null : i)}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
