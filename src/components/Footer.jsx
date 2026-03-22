import { motion } from 'framer-motion'
import { Instagram, Send, ExternalLink, ArrowUpRight } from 'lucide-react'

const nav = [
  { label: 'Accueil', href: '#accueil' },
  { label: 'Parcours', href: '#methode' },
  { label: 'Performances', href: '#performances' },
  { label: 'Services', href: '#services' },
  { label: 'Tarifs', href: '#tarifs' },
  { label: 'Avis', href: '#temoignages' },
  { label: 'FAQ', href: '#faq' },
]

const socials = [
  { icon: ExternalLink, label: 'Whop', sub: 'Rejoindre la communauté', href: 'https://whop.com/justonetrader' },
  { icon: Instagram, label: 'Instagram', sub: '@justonetrader_1', href: 'https://instagram.com/justonetrader_1' },
  { icon: Send, label: 'Telegram', sub: '@justonetrader_1', href: 'https://t.me/justonetrader_1' },
]

export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)', background: 'rgba(255,255,255,0.015)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid md:grid-cols-12 gap-10 mb-12">

          {/* Brand */}
          <div className="md:col-span-5">
            <a href="#accueil" className="text-3xl font-black tracking-tight text-white inline-block mb-4">
              JOT
            </a>
            <p className="text-sm leading-relaxed max-w-xs mb-6" style={{ color: 'rgba(255,255,255,0.4)' }}>
              Anticipe les marchés, ne les subis plus. Trading FX, Indices & Crypto avec une méthode rigoureuse et une transparence totale.
            </p>
            <a
              href="https://whop.com/justonetrader"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm font-semibold px-5 py-2.5 rounded-xl transition-all"
              style={{ background: 'rgba(212,175,55,0.1)', color: '#d4af37', border: '1px solid rgba(212,175,55,0.2)' }}
              onMouseEnter={e => e.currentTarget.style.background = 'rgba(212,175,55,0.18)'}
              onMouseLeave={e => e.currentTarget.style.background = 'rgba(212,175,55,0.1)'}
            >
              Rejoindre JustOneTrader
              <ArrowUpRight size={15} />
            </a>
          </div>

          {/* Nav */}
          <div className="md:col-span-3">
            <h4 className="text-white font-semibold text-sm mb-5">Navigation</h4>
            <ul className="space-y-3">
              {nav.map(link => (
                <li key={link.href}>
                  <a href={link.href} className="text-sm transition-colors"
                    style={{ color: 'rgba(255,255,255,0.4)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div className="md:col-span-4">
            <h4 className="text-white font-semibold text-sm mb-5">Nous rejoindre</h4>
            <div className="space-y-3">
              {socials.map(s => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 rounded-xl transition-all group"
                  style={{ border: '1px solid rgba(255,255,255,0.06)' }}
                  onMouseEnter={e => { e.currentTarget.style.borderColor = 'rgba(212,175,55,0.2)'; e.currentTarget.style.background = 'rgba(212,175,55,0.04)' }}
                  onMouseLeave={e => { e.currentTarget.style.borderColor = 'rgba(255,255,255,0.06)'; e.currentTarget.style.background = 'transparent' }}
                >
                  <div className="w-8 h-8 rounded-lg flex items-center justify-center shrink-0 transition-colors"
                    style={{ background: 'rgba(255,255,255,0.05)' }}>
                    <s.icon size={15} style={{ color: 'rgba(255,255,255,0.5)' }} />
                  </div>
                  <div>
                    <div className="text-white text-sm font-medium">{s.label}</div>
                    <div className="text-xs" style={{ color: 'rgba(255,255,255,0.35)' }}>{s.sub}</div>
                  </div>
                  <ArrowUpRight size={13} className="ml-auto opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: '#d4af37' }} />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8" style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.25)' }}>
            © {new Date().getFullYear()} JustOneTrader. Tous droits réservés.
          </p>
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.2)' }}>
            ⚠️ Le trading comporte des risques. Les performances passées ne garantissent pas les résultats futurs.
          </p>
        </div>
      </div>
    </footer>
  )
}
