export default function Footer() {
  return (
    <footer style={{ borderTop: '1px solid rgba(255,255,255,0.06)' }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <span className="text-xl font-black text-white">JOT</span>
            <span className="w-1.5 h-1.5 rounded-full" style={{ background: '#10b981' }} />
            <span className="text-sm" style={{ color: 'rgba(255,255,255,0.35)' }}>
              Trading FX, Indices & Crypto
            </span>
          </div>

          <div className="flex items-center gap-6">
            <a href="https://whop.com/justonetrader" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              Whop
            </a>
            <a href="https://t.me/justonetrader_1" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              Telegram
            </a>
            <a href="https://instagram.com/justeontrader_1" target="_blank" rel="noopener noreferrer"
              className="text-sm transition-colors" style={{ color: 'rgba(255,255,255,0.4)' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.4)'}>
              Instagram
            </a>
          </div>

          <p className="text-xs" style={{ color: 'rgba(255,255,255,0.2)' }}>
            © {new Date().getFullYear()} JustOneTrader. Le trading comporte des risques de perte en capital.
          </p>
        </div>
      </div>
    </footer>
  )
}
