import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Login() {
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/home');
  };

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0a0a0f 0%, #0e0e18 50%, #0a0a14 100%)',
      fontFamily: '"Inter", sans-serif',
      position: 'relative',
      overflow: 'hidden',
      padding: '20px',
    }}>
      {/* Background overlay */}
      <div style={{
        position: 'absolute', inset: 0,
        backgroundImage: "url('https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?w=1600&q=60&auto=format')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.12,
        pointerEvents: 'none',
      }} />

      {/* Gold glow */}
      <div style={{
        position: 'absolute',
        top: '30%', left: '50%', transform: 'translateX(-50%)',
        width: 600, height: 300,
        borderRadius: '50%',
        background: 'rgba(212,175,55,0.06)',
        filter: 'blur(80px)',
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: 1000,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid rgba(212,175,55,0.2)',
        background: 'rgba(14,14,24,0.85)',
        backdropFilter: 'blur(16px)',
        borderRadius: 16,
        position: 'relative',
        zIndex: 1,
        overflow: 'hidden',
      }}>

        {/* Left column — Branding */}
        <div className="auth-left" style={{
          width: 480,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '48px 44px',
          borderRight: '1px solid rgba(255,255,255,0.07)',
          background: 'rgba(0,0,0,0.2)',
        }}>
          {/* Logo */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 32 }}>
              <span style={{ fontSize: 28, fontWeight: 900, color: '#ffffff', letterSpacing: '-0.5px' }}>JOT</span>
              <span style={{
                width: 8, height: 8, borderRadius: '50%',
                background: '#10b981',
                boxShadow: '0 0 8px #10b981',
                display: 'inline-block',
              }} />
            </div>
            <div style={{ fontSize: 28, fontWeight: 800, lineHeight: 1.25, marginBottom: 12 }}>
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #fef08a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                Arrête de trader seul.
              </span>
              <br />
              <span style={{ color: '#ffffff' }}>Rejoins une méthode.</span>
            </div>
            <p style={{ color: 'rgba(255,255,255,0.4)', fontSize: 14, lineHeight: 1.6 }}>
              Analyses en temps réel, gestion du risque, communauté de traders sérieux.
            </p>
          </div>

          {/* Dashboard image */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '32px 0' }}>
            <img
              src="/dashboard.jpg"
              alt="JustOneTrader Dashboard"
              style={{ width: '100%', borderRadius: 12, objectFit: 'cover', border: '1px solid rgba(255,255,255,0.08)', display: 'block' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* Stats */}
          <div style={{ display: 'flex', gap: 24 }}>
            {[
              { value: '+135', label: 'Membres' },
              { value: '5.0★', label: 'Sur Whop' },
              { value: '3', label: 'Marchés' },
            ].map(s => (
              <div key={s.label}>
                <div style={{ color: '#d4af37', fontWeight: 900, fontSize: 18 }}>{s.value}</div>
                <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 11 }}>{s.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Right column — Form */}
        <div style={{
          flex: 1,
          padding: '48px 48px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {/* Title */}
          <div style={{ marginBottom: 32 }}>
            <div style={{ color: 'rgba(255,255,255,0.4)', fontSize: 13, marginBottom: 6 }}>Bienvenue sur</div>
            <div style={{ fontSize: 28, fontWeight: 900, marginBottom: 4 }}>
              <span style={{ color: '#ffffff' }}>Just</span>
              <span style={{ background: 'linear-gradient(90deg, #d4af37, #e8c94a)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>OneTrader</span>
            </div>
            <div style={{ color: 'rgba(255,255,255,0.35)', fontSize: 13 }}>Connecte-toi à ton espace membre</div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
              Adresse e-mail
            </label>
            <input
              type="email"
              placeholder="email@exemple.com"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '0 14px',
                width: '100%',
                height: 42,
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: '"Inter", sans-serif',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', color: 'rgba(255,255,255,0.5)', fontSize: 12, fontWeight: 600, marginBottom: 6 }}>
              Mot de passe
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              style={{
                background: 'rgba(255,255,255,0.04)',
                color: '#ffffff',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 10,
                padding: '0 14px',
                width: '100%',
                height: 42,
                fontSize: 14,
                outline: 'none',
                boxSizing: 'border-box',
                fontFamily: '"Inter", sans-serif',
                transition: 'border-color 0.2s',
              }}
              onFocus={e => e.target.style.borderColor = 'rgba(212,175,55,0.5)'}
              onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
            />
          </div>

          {/* Stay logged in + Forgot */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, color: 'rgba(255,255,255,0.4)', fontSize: 12, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 13, height: 13, accentColor: '#d4af37' }} />
              Rester connecté
            </label>
            <a href="#" style={{ color: '#d4af37', fontSize: 13, textDecoration: 'none' }}>Mot de passe oublié ?</a>
          </div>

          {/* Login button */}
          <button
            onClick={handleLogin}
            style={{
              width: '100%',
              height: 44,
              background: 'linear-gradient(135deg, #d4af37, #e8c94a)',
              color: '#0a0a0f',
              fontSize: 14,
              fontWeight: 700,
              border: 'none',
              borderRadius: 10,
              cursor: 'pointer',
              fontFamily: '"Inter", sans-serif',
              marginBottom: 20,
              boxShadow: '0 0 30px rgba(212,175,55,0.2)',
              transition: 'box-shadow 0.2s, transform 0.1s',
            }}
            onMouseEnter={e => { e.currentTarget.style.boxShadow = '0 0 50px rgba(212,175,55,0.4)'; e.currentTarget.style.transform = 'translateY(-1px)'; }}
            onMouseLeave={e => { e.currentTarget.style.boxShadow = '0 0 30px rgba(212,175,55,0.2)'; e.currentTarget.style.transform = 'translateY(0)'; }}
          >
            Se connecter
          </button>

          {/* Footer links */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12 }}>
              Un problème ? <a href="https://t.me/justonetrader_1" target="_blank" rel="noopener noreferrer" style={{ color: '#d4af37', textDecoration: 'none' }}>Contactez-nous</a>
            </div>
            <a href="https://whop.com/justonetrader" target="_blank" rel="noopener noreferrer"
              style={{ color: 'rgba(255,255,255,0.3)', fontSize: 12, textDecoration: 'none' }}
              onMouseEnter={e => e.currentTarget.style.color = '#d4af37'}
              onMouseLeave={e => e.currentTarget.style.color = 'rgba(255,255,255,0.3)'}
            >
              Pas encore membre →
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) { .auth-left { display: none !important; } }
      `}</style>
    </div>
  );
}
