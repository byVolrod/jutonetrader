import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'

export default function CTA() {
  return (
    <section className="py-16 sm:py-24">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="relative rounded-3xl overflow-hidden text-center"
          style={{ background: '#1c1c1c', border: '1px solid rgba(212,175,55,0.2)' }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-48 blur-3xl pointer-events-none"
            style={{ background: 'rgba(212,175,55,0.07)' }} />
          <div className="absolute top-0 left-0 right-0 h-px"
            style={{ background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.5), transparent)' }} />

          <div className="relative px-8 sm:px-16 py-14">
            <h2 className="text-3xl sm:text-4xl font-black mb-4 leading-tight">
              Prêt à trader
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}> avec méthode ?</span>
            </h2>

            <p className="text-base mb-8 max-w-md mx-auto" style={{ color: 'rgba(255,255,255,0.65)' }}>
              Rejoins +135 traders qui progressent chaque jour. Commence gratuitement, sans engagement.
            </p>

            <motion.a
              href="https://whop.com/justonetrader"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2.5 font-black px-8 py-4 rounded-xl text-sm"
              style={{ background: 'linear-gradient(90deg, #d4af37, #e8c94a)', color: '#0a0a0f', boxShadow: '0 0 50px rgba(212,175,55,0.2)' }}
              whileHover={{ scale: 1.04, boxShadow: '0 0 70px rgba(212,175,55,0.35)' }}
              whileTap={{ scale: 0.97 }}
            >
              Accéder à la communauté
              <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
            </motion.a>

            <p className="text-xs mt-6" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Plan gratuit disponible · Annulable à tout moment · Noté 5.0★ sur Whop
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
