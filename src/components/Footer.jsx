export default function Footer() {
  const links = [
    { label: 'Communauté', href: '#communaute' },
    { label: 'Services', href: '#services' },
    { label: 'Tarifs', href: '#tarifs' },
    { label: 'FAQ', href: '#faq' },
  ]

  const socials = [
    { label: 'Whop', href: 'https://whop.com/justonetrader' },
    { label: 'Instagram', href: 'https://www.instagram.com/justonetrader_1' },
    { label: 'Telegram', href: 'https://t.me/justonetrader_1' },
  ]

  return (
    <footer>
      {/* Top separator */}
      <div style={{ height: 1, background: 'linear-gradient(90deg, transparent, rgba(212,175,55,0.18) 40%, rgba(212,175,55,0.18) 60%, transparent)' }} />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-10 mb-10">

          {/* Brand */}
          <div>
            <img src="/logo-1.png" alt="JustOneTrader" className="h-10 w-auto object-contain mb-4"
              style={{ mixBlendMode: 'screen', filter: 'contrast(1.8) brightness(1.15)' }} />
            <p className="text-sm leading-relaxed max-w-xs" style={{ color: 'rgba(255,255,255,0.45)' }}>
              Analyses, méthode et communauté — tout le nécessaire pour trader avec structure et transparence totale.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Navigation</p>
            <ul className="space-y-2.5">
              {links.map(l => (
                <li key={l.label}>
                  <a href={l.href}
                    className="text-sm transition-colors duration-200"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Socials */}
          <div>
            <p className="text-xs font-bold tracking-widest uppercase mb-4" style={{ color: 'rgba(255,255,255,0.3)' }}>Nous retrouver</p>
            <ul className="space-y-2.5">
              {socials.map(s => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer"
                    className="text-sm transition-colors duration-200 inline-flex items-center gap-1.5"
                    style={{ color: 'rgba(255,255,255,0.55)' }}
                    onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
                    onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.55)'}
                  >
                    {s.label}
                    <span style={{ color: 'rgba(255,255,255,0.2)', fontSize: 10 }}>↗</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-8"
          style={{ borderTop: '1px solid rgba(255,255,255,0.05)' }}>
          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} JustOneTrader. Tous droits réservés.
          </p>
          <p className="text-xs text-center" style={{ color: 'rgba(255,255,255,0.15)' }}>
            Le trading comporte des risques de perte en capital. Aucun résultat n'est garanti.
          </p>
        </div>
      </div>
    </footer>
  )
}
