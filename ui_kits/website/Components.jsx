// Shared site components (Babel JSX). Exposes to window.
const { useState, useEffect } = React;

function Icon({ name, size = 20, ...rest }) {
  // Lazy mount lucide
  React.useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return <i data-lucide={name} style={{ width: size, height: size, display: 'inline-flex' }} {...rest}></i>;
}

function ReviewBanner() {
  const reviews = [
    '"This community shows up every time" — Princess Okoro',
    '"THE WORK WORKS. Put in the reps." — James Robinson',
    '"The biggest ROI I\'ve ever had" — Dex Copeland',
    '"My portfolio site, certs, and projects were standouts in interviews." — Akeem',
  ];
  const [i, setI] = useState(0);
  useEffect(() => { const t = setInterval(() => setI(p => (p + 1) % reviews.length), 5000); return () => clearInterval(t); }, []);
  return (
    <div style={{ background: '#f97316', color: '#fff', padding: '8px 16px', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 10, fontSize: 12 }}>
      <b style={{ textTransform: 'uppercase', letterSpacing: '.08em', fontSize: 11 }}>Member Reviews</b>
      <span style={{ opacity: .55 }}>|</span>
      <span>{reviews[i]}</span>
    </div>
  );
}

function Navbar({ current, go }) {
  const items = [
    { id: 'home', label: 'Home' },
    { id: 'academy', label: 'Academy' },
    { id: 'stories', label: 'Member Stories' },
    { id: 'join', label: 'Join' },
    { id: 'faq', label: 'FAQ' },
  ];
  return (
    <nav style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(13,13,13,.95)', backdropFilter: 'blur(8px)', borderBottom: '1px solid rgba(58,58,58,.5)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <a onClick={() => go('home')} style={{ display: 'flex', alignItems: 'center', gap: 12, cursor: 'pointer' }}>
          <img src="../../assets/logo.jpeg" alt="" style={{ width: 40, height: 40, borderRadius: 8, objectFit: 'cover' }} />
          <span style={{ color: '#fff', fontWeight: 700, fontSize: 16 }}>GRC Engineering Club</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 24 }}>
          {items.map(it => (
            <a key={it.id} onClick={() => go(it.id)}
               style={{ cursor: 'pointer', fontSize: 13.5, fontWeight: 500, color: current === it.id ? '#E8650A' : '#A0A0A0', transition: 'color 200ms' }}>
              {it.label}
            </a>
          ))}
          <CTAButton size="sm" onClick={() => go('join')}>Join the Club</CTAButton>
        </div>
      </div>
    </nav>
  );
}

function CTAButton({ children, variant = 'primary', size = 'md', onClick, style }) {
  const sizes = {
    sm: { padding: '8px 16px', fontSize: 13 },
    md: { padding: '12px 24px', fontSize: 15 },
    lg: { padding: '16px 32px', fontSize: 17 },
  };
  const variants = {
    primary: { background: '#E8650A', color: '#fff', border: 'none', boxShadow: '0 8px 24px rgba(232,101,10,.25)' },
    secondary: { background: 'transparent', color: '#E8650A', border: '2px solid #E8650A' },
  };
  const [hov, setHov] = useState(false);
  const hover = hov ? (variant === 'primary' ? { background: '#FF8533', boxShadow: '0 12px 32px rgba(232,101,10,.35)' } : { background: '#E8650A', color: '#fff' }) : {};
  return (
    <button onClick={onClick} onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontWeight: 700, borderRadius: 8, cursor: 'pointer', transition: 'all 200ms', ...sizes[size], ...variants[variant], ...hover, ...style }}>
      {children}
    </button>
  );
}

function SectionHeading({ title, subtitle, eyebrow }) {
  return (
    <div style={{ textAlign: 'center', maxWidth: 720, margin: '0 auto' }}>
      {eyebrow && <div style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#E8650A', background: 'rgba(232,101,10,.1)', padding: '6px 14px', borderRadius: 9999, marginBottom: 16 }}>{eyebrow}</div>}
      <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 48px)', fontWeight: 800, letterSpacing: '-.02em', lineHeight: 1.1, color: '#fff' }}>{title}</h2>
      {subtitle && <p style={{ marginTop: 16, fontSize: 18, color: '#A0A0A0', lineHeight: 1.6 }}>{subtitle}</p>}
    </div>
  );
}

function ContentCard({ icon, title, description }) {
  const [hov, setHov] = useState(false);
  return (
    <div onMouseEnter={() => setHov(true)} onMouseLeave={() => setHov(false)}
      style={{ background: '#2A2A2A', borderRadius: 12, padding: 24, border: `1px solid ${hov ? 'rgba(232,101,10,.5)' : '#3A3A3A'}`, transition: 'border-color 300ms' }}>
      <div style={{ color: '#E8650A', marginBottom: 16 }}><Icon name={icon} size={32} /></div>
      <h3 style={{ margin: '0 0 8px', fontSize: 20, fontWeight: 700, color: '#fff' }}>{title}</h3>
      <p style={{ margin: 0, color: '#A0A0A0', lineHeight: 1.6, fontSize: 14.5 }}>{description}</p>
    </div>
  );
}

function StoryCard({ quote, name, title }) {
  return (
    <div style={{ background: '#2A2A2A', borderRadius: 12, padding: 24, border: '1px solid #3A3A3A', display: 'flex', flexDirection: 'column' }}>
      <div style={{ color: '#E8650A', marginBottom: 14 }}><Icon name="quote" size={28} /></div>
      <p style={{ flex: 1, color: '#F5F5F5', fontStyle: 'italic', lineHeight: 1.6, marginBottom: 18, fontSize: 14.5 }}>"{quote}"</p>
      <div style={{ borderTop: '1px solid #3A3A3A', paddingTop: 14 }}>
        <p style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 14 }}>{name}</p>
        <p style={{ margin: '2px 0 0', color: '#A0A0A0', fontSize: 12.5 }}>{title}</p>
      </div>
    </div>
  );
}

function Footer({ go }) {
  const linkStyle = { display: 'block', color: '#A0A0A0', fontSize: 13, textDecoration: 'none', padding: '4px 0', cursor: 'pointer' };
  const heading = { fontWeight: 700, fontSize: 12, textTransform: 'uppercase', letterSpacing: '.08em', color: '#A0A0A0', marginBottom: 14 };
  return (
    <footer style={{ background: '#1A1A1A', borderTop: '1px solid rgba(58,58,58,.3)', padding: '48px 24px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
        <div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 14 }}>
            <img src="../../assets/logo.jpeg" alt="" style={{ width: 40, height: 40, borderRadius: 8 }} />
            <span style={{ color: '#fff', fontWeight: 700 }}>GRC Engineering Club</span>
          </div>
          <p style={{ color: '#A0A0A0', fontSize: 13, lineHeight: 1.6, margin: 0 }}>From checkbox GRC to engineered systems. Join the movement.</p>
        </div>
        <div>
          <div style={heading}>Site</div>
          <a style={linkStyle} onClick={() => go('academy')}>Academy</a>
          <a style={linkStyle} onClick={() => go('stories')}>Member Stories</a>
          <a style={linkStyle} onClick={() => go('faq')}>FAQ</a>
          <a style={linkStyle} onClick={() => go('join')}>Join</a>
        </div>
        <div>
          <div style={heading}>Patreon</div>
          <a style={linkStyle}>Club Home</a>
          <a style={linkStyle}>Posts</a>
          <a style={linkStyle}>Collections</a>
          <a style={linkStyle}>Community Chat</a>
        </div>
        <div>
          <div style={heading}>Connect</div>
          <a style={linkStyle}>YouTube</a>
          <a style={linkStyle}>LinkedIn</a>
          <a style={linkStyle}>AJYawn.com</a>
        </div>
      </div>
      <div style={{ borderTop: '1px solid rgba(58,58,58,.3)', maxWidth: 1280, margin: '32px auto 0', paddingTop: 20 }}>
        <p style={{ color: '#A0A0A0', fontSize: 11, margin: 0 }}>© 2026 GRC Engineering Club. All rights reserved.</p>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, ReviewBanner, Navbar, CTAButton, SectionHeading, ContentCard, StoryCard, Footer });
