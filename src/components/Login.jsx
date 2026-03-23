import { useState } from 'react';

export default function Login() {
  const [search, setSearch] = useState('');

  return (
    <div style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: 'linear-gradient(135deg, #0d0d0d 0%, #111116 50%, #0a0a14 100%)',
      fontFamily: '"SF Pro Display", Helvetica, Arial, sans-serif',
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
        opacity: 0.18,
        pointerEvents: 'none',
      }} />

      {/* Card */}
      <div style={{
        width: '100%',
        maxWidth: 1112,
        display: 'flex',
        flexDirection: 'row',
        border: '1px solid #333333',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(4px)',
        position: 'relative',
        zIndex: 1,
      }}>

        {/* Left column — Branding */}
        <div className="auth-left" style={{
          width: 550,
          flexShrink: 0,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '40px 44px',
          borderRight: '1px solid #333333',
        }}>
          {/* Headline */}
          <div>
            <div style={{ fontSize: 30, fontWeight: 700, lineHeight: 1.25 }}>
              <span style={{ color: '#FF9800' }}>Power</span>
              <span style={{ color: '#ffffff' }}> Your Trading With</span>
            </div>
            <div style={{ fontSize: 30, fontWeight: 700, color: '#ffffff', lineHeight: 1.25 }}>
              Data That Moves Charts!
            </div>
          </div>

          {/* Dashboard image */}
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', padding: '24px 0' }}>
            <img
              src="https://i.imgur.com/QKkMJbQ.png"
              alt="PrimeMarket Terminal"
              style={{ width: '100%', objectFit: 'cover', display: 'block' }}
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
          </div>

          {/* Branding */}
          <div style={{ textAlign: 'center' }}>
            <span style={{ color: '#ffffff', fontSize: 28, fontWeight: 700 }}>PrimeMarket </span>
            <span style={{ color: '#FF9800', fontSize: 28, fontWeight: 700 }}>Terminal</span>
          </div>
        </div>

        {/* Right column — Form */}
        <div style={{
          flex: 1,
          padding: '40px 55px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          {/* Title */}
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{ color: '#ffffff', fontSize: 15, marginBottom: 4 }}>Welcome to</div>
            <div style={{ fontSize: 32, fontWeight: 700, marginBottom: 4 }}>
              <span style={{ color: '#ffffff' }}>PrimeMarket </span>
              <span style={{ color: '#FF9800' }}>Terminal</span>
            </div>
            <div style={{ color: '#aaaaaa', fontSize: 15 }}>First login to your account</div>
          </div>

          {/* Email */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', color: '#aaaaaa', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>
              Email Address
            </label>
            <input
              type="email"
              placeholder="email@example.com"
              style={{
                background: '#1a1a1a', color: '#ffffff',
                border: '1px solid #444444', borderRadius: 0,
                padding: '0 12px', width: '100%', height: 37,
                fontSize: 14, outline: 'none', boxSizing: 'border-box',
                fontFamily: '"SF Pro Display", Helvetica, Arial, sans-serif',
              }}
              onFocus={e => e.target.style.borderColor = '#FF9800'}
              onBlur={e => e.target.style.borderColor = '#444444'}
            />
          </div>

          {/* Password */}
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', color: '#aaaaaa', fontSize: 12, fontWeight: 700, marginBottom: 4 }}>
              Password
            </label>
            <input
              type="password"
              placeholder="••••••••••••"
              style={{
                background: '#1a1a1a', color: '#ffffff',
                border: '1px solid #444444', borderRadius: 0,
                padding: '0 12px', width: '100%', height: 37,
                fontSize: 14, outline: 'none', boxSizing: 'border-box',
                fontFamily: '"SF Pro Display", Helvetica, Arial, sans-serif',
              }}
              onFocus={e => e.target.style.borderColor = '#FF9800'}
              onBlur={e => e.target.style.borderColor = '#444444'}
            />
          </div>

          {/* Stay logged in + Forgot */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <label style={{ display: 'flex', alignItems: 'center', gap: 6, color: '#aaaaaa', fontSize: 12, cursor: 'pointer' }}>
              <input type="checkbox" style={{ width: 13, height: 13, accentColor: '#FF9800' }} />
              Stay logged in
            </label>
            <a href="#" style={{ color: '#FF9800', fontSize: 14, textDecoration: 'none' }}>Forgot Password?</a>
          </div>

          {/* Login button */}
          <button
            style={{
              width: '100%', height: 40, background: '#FF9800',
              color: '#ffffff', fontSize: 14, fontWeight: 600,
              border: 'none', borderRadius: 0, cursor: 'pointer',
              fontFamily: '"SF Pro Display", Helvetica, Arial, sans-serif',
              marginBottom: 16,
            }}
            onMouseEnter={e => e.currentTarget.style.background = '#e68900'}
            onMouseLeave={e => e.currentTarget.style.background = '#FF9800'}
          >
            Login
          </button>

          {/* Footer */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
            <div style={{ color: '#aaaaaa', fontSize: 12 }}>
              Having trouble? <a href="#" style={{ color: '#FF9800', textDecoration: 'none' }}>Contact Us.</a>
            </div>
            <div style={{ color: '#aaaaaa', fontSize: 12 }}>
              Language: <select style={{ background: 'transparent', color: '#aaaaaa', border: 'none', fontSize: 12, outline: 'none' }}>
                <option style={{ background: '#1a1a1a' }}>English</option>
                <option style={{ background: '#1a1a1a' }}>Français</option>
              </select>
            </div>
          </div>

          {/* Download buttons */}
          <div style={{ display: 'flex', gap: 12, justifyContent: 'center' }}>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#1a1a1a', border: '1px solid #444444',
              color: '#ffffff', padding: '8px 16px', fontSize: 13,
              cursor: 'pointer', borderRadius: 0,
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#FF9800'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#444444'}
            >
              <span>⊞</span>
              <span>
                <div style={{ fontSize: 9, color: '#aaaaaa', lineHeight: 1 }}>Download for</div>
                <div style={{ fontWeight: 600 }}>Windows</div>
              </span>
            </button>
            <button style={{
              display: 'flex', alignItems: 'center', gap: 8,
              background: '#1a1a1a', border: '1px solid #444444',
              color: '#ffffff', padding: '8px 16px', fontSize: 13,
              cursor: 'pointer', borderRadius: 0,
            }}
              onMouseEnter={e => e.currentTarget.style.borderColor = '#FF9800'}
              onMouseLeave={e => e.currentTarget.style.borderColor = '#444444'}
            >
              <span></span>
              <span>
                <div style={{ fontSize: 9, color: '#aaaaaa', lineHeight: 1 }}>Download for</div>
                <div style={{ fontWeight: 600 }}>MacOS</div>
              </span>
            </button>
          </div>
        </div>
      </div>

      <style>{`
        @import url('https://fonts.cdnfonts.com/css/sf-pro-display');
        * { border-radius: 0 !important; box-sizing: border-box; }
        @media (max-width: 768px) { .auth-left { display: none !important; } }
      `}</style>
    </div>
  );
}
