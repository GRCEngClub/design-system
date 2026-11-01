// Shared site components (Babel JSX + Tailwind CDN). Exposes to window.
// Each one mirrors its production twin in grcengclub/src/components/ as of 2026-11-01.
const { useState, useEffect } = React;

// Lucide line icon. 16 to 20px, stroke 1.5, takes the color of its text role.
function Icon({ name, size = 20, strokeWidth = 1.5, className = '' }) {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <i
      data-lucide={name}
      strokeWidth={strokeWidth}
      className={className}
      style={{ width: size, height: size, display: 'inline-flex' }}
    />
  );
}

// Control-ID tag: the signature detail (PipelineRun.tsx Tag).
function Tag({ children }) {
  return (
    <span className="inline-flex h-5 items-center rounded px-1.5 font-mono text-[11px] leading-4 bg-brand-gray-light text-brand-text-muted">
      {children}
    </span>
  );
}

// Navbar.tsx: solid page surface, hairline, 64px. The kit's five routes stand in for the site's.
function Navbar({ current, go }) {
  const items = [
    { id: 'academy', label: 'Academy' },
    { id: 'stories', label: 'Member wins' },
    { id: 'join', label: 'Pricing' },
    { id: 'faq', label: 'FAQ' },
  ];
  return (
    <nav className="sticky top-0 z-50 bg-brand-dark border-b border-brand-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a onClick={() => go('home')} className="flex items-center gap-3 shrink-0 cursor-pointer">
            <img src="../../assets/logo.jpeg" alt="GRC Engineering Club" className="h-10 w-10 rounded-lg object-cover" />
            <span className="text-lg font-medium hidden sm:block">GRC Engineering Club</span>
          </a>
          <div className="hidden md:flex items-center gap-6">
            {items.map((it) => (
              <a
                key={it.id}
                onClick={() => go(it.id)}
                className={`text-sm font-medium transition-colors duration-150 cursor-pointer hover:text-brand-orange ${
                  current === it.id ? 'text-brand-orange' : 'text-brand-text-muted'
                }`}
              >
                {it.label}
              </a>
            ))}
            <CTAButton size="sm" onClick={() => go('join')}>Join the Club</CTAButton>
          </div>
        </div>
      </div>
    </nav>
  );
}

// CTAButton.tsx: orange fill with dark text, or a raised surface with a hairline. No shadow.
function CTAButton({ children, variant = 'primary', size = 'md', onClick, className = '' }) {
  const base =
    'inline-flex items-center justify-center font-medium rounded-lg transition-colors duration-150 cursor-pointer active:scale-[0.98]';
  const variants = {
    primary: 'bg-brand-orange hover:bg-brand-orange-light text-brand-dark',
    secondary: 'border border-brand-gray-light text-brand-text hover:bg-brand-gray-light',
  };
  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };
  return (
    <button onClick={onClick} className={`${base} ${variants[variant]} ${sizes[size]} ${className}`}>
      {children}
    </button>
  );
}

// SectionHeading.tsx. `eyebrow` is a mono meta line, never a pill.
function SectionHeading({ title, subtitle, eyebrow, centered = true, className = '' }) {
  return (
    <div className={`${centered ? 'text-center' : ''} ${className}`}>
      {eyebrow && <p className="mb-4 font-mono text-xs text-brand-text-dim">{eyebrow}</p>}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight">{title}</h2>
      {subtitle && (
        <p className={`mt-4 text-lg md:text-xl text-brand-text-muted max-w-2xl ${centered ? 'mx-auto' : ''}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

// ContentCard.tsx: the card recipe. Icon in the secondary color, no well.
function ContentCard({ icon, title, description }) {
  return (
    <div className="bg-brand-gray rounded-xl p-6 border border-brand-gray-light hover:border-brand-text-dim/40 transition-colors duration-150">
      <div className="text-brand-text-muted mb-4"><Icon name={icon} size={20} /></div>
      <h3 className="text-base font-medium mb-1.5">{title}</h3>
      <p className="text-sm text-brand-text-muted leading-relaxed">{description}</p>
    </div>
  );
}

// StoryCard.tsx: the quote in the primary color, no quote icon, no italic.
function StoryCard({ quote, name, title }) {
  return (
    <div className="bg-brand-gray rounded-xl p-6 border border-brand-gray-light hover:border-brand-text-dim/40 transition-colors duration-150 flex flex-col">
      <p className="text-brand-text leading-relaxed mb-6 flex-1">&ldquo;{quote}&rdquo;</p>
      <div className="border-t border-brand-gray-light pt-4">
        <p className="text-sm font-medium text-brand-text-muted">{title}</p>
        <p className="text-sm text-brand-text-dim">{name}</p>
      </div>
    </div>
  );
}

// Footer.tsx: alt surface, hairline, mono meta column headings.
function Footer({ go }) {
  const columns = [
    { heading: 'Explore', links: [['academy', 'Training Academy'], ['join', 'Pricing'], [null, 'Events'], [null, 'Merch'], [null, 'All GRC guides']] },
    { heading: 'Community', links: [['stories', 'Member wins'], [null, 'Chapters'], [null, 'Directory'], [null, 'The AntiCheckbox Podcast'], [null, 'Videos']] },
    { heading: 'For organizations', links: [[null, 'For teams'], [null, 'Annual team seats ($70)'], [null, 'For universities'], [null, 'Student membership ($35)'], [null, 'Veteran membership ($35)']] },
    { heading: 'About', links: [[null, 'Leadership'], ['faq', 'FAQ'], [null, 'Contact'], [null, 'claude-grc-engineering']] },
  ];
  return (
    <footer className="bg-brand-dark-alt border-t border-brand-gray-light/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid grid-cols-2 md:grid-cols-5 gap-8">
        <div className="col-span-2 md:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <img src="../../assets/logo.jpeg" alt="" className="h-10 w-10 rounded-lg object-cover" />
            <span className="font-medium">GRC Engineering Club</span>
          </div>
          <p className="text-sm text-brand-text-muted leading-relaxed">From checkbox GRC to engineered systems.</p>
        </div>
        {columns.map((c) => (
          <div key={c.heading}>
            <p className="font-mono text-xs text-brand-text-dim mb-4">{c.heading}</p>
            <ul className="space-y-2">
              {c.links.map(([route, label]) => (
                <li key={label}>
                  <a
                    onClick={route ? () => go(route) : undefined}
                    className="text-sm text-brand-text-muted hover:text-brand-text transition-colors duration-150 cursor-pointer"
                  >
                    {label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 border-t border-brand-gray-light/50 flex flex-wrap gap-x-6 gap-y-2 text-xs text-brand-text-dim">
        <span>© 2026 GRC Eng Club, Inc.</span>
        <a className="hover:text-brand-text cursor-pointer">Privacy</a>
        <a className="hover:text-brand-text cursor-pointer">Terms</a>
        <a className="hover:text-brand-text cursor-pointer">Refunds</a>
      </div>
    </footer>
  );
}

Object.assign(window, { Icon, Tag, Navbar, CTAButton, SectionHeading, ContentCard, StoryCard, Footer });
