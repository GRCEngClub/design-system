/* Certplatform UI Kit — Academy surface (Babel JSX + Tailwind CDN).
   Mirrors cert-platform/frontend as of 2026-11-01: components/NavBar.tsx and
   pages/learner/Dashboard.tsx. Production is the source of truth. */

const { useState, useEffect, useRef } = React;

/* ---- tokens (same hexes as tailwind.config.js; for the rare inline style) ---- */
const ORANGE = '#E8650A';
const ORANGE_LIGHT = '#FF8533';
const DARK = '#111110';
const DARK_ALT = '#161514';
const GRAY = '#1C1B19';
const GRAY_LIGHT = '#2B2925';
const TEXT = '#EFE9DE';
const MUTED = '#AAA398';
const DIM = '#8A847A';

// Lucide line icon, stroke 1.5, in the color of its text role.
const Icon = ({ name, size = 20, strokeWidth = 1.5, className = '', style }) => {
  useEffect(() => { if (window.lucide) window.lucide.createIcons(); });
  return (
    <i
      data-lucide={name}
      strokeWidth={strokeWidth}
      className={className}
      style={{ width: size, height: size, display: 'inline-flex', verticalAlign: 'middle', ...style }}
    />
  );
};

// Primary: orange fill, dark text, no shadow. Secondary: raised surface + hairline.
const AcademyButton = ({ children, variant = 'primary', onClick, size = 'md', icon, className = '', disabled }) => {
  const sizes = { sm: 'h-8 px-3 text-xs', md: 'h-10 px-5 text-sm', lg: 'h-12 px-6 text-sm' };
  const variants = {
    primary: 'bg-brand-orange text-brand-dark hover:bg-brand-orange-light',
    secondary: 'border border-brand-gray-light bg-brand-gray-light/60 text-brand-text hover:bg-brand-gray-light',
    ghost: 'border border-brand-gray-light bg-brand-gray text-brand-text hover:bg-brand-gray-light',
    disabled: 'bg-brand-gray text-brand-text-muted cursor-default',
  };
  const v = disabled ? 'disabled' : variant;
  return (
    <button
      onClick={disabled ? undefined : onClick}
      className={`inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors duration-150 ${disabled ? '' : 'active:scale-[0.98] cursor-pointer'} ${sizes[size]} ${variants[v]} ${className}`}
    >
      {icon && <Icon name={icon} size={16} />}
      {children}
    </button>
  );
};

// Control-ID tag: CGE-P, D4, AC-2. The old orange uppercase Chip renders as this now.
const Tag = ({ children, className = '' }) => (
  <span className={`inline-flex h-5 w-fit items-center rounded bg-brand-gray-light px-1.5 font-mono text-[11px] leading-4 text-brand-text-muted ${className}`}>
    {children}
  </span>
);
const Chip = Tag;

// NavBar.tsx Avatar: raised surface, hairline, initials at 500.
const Avatar = ({ initials, size = 32 }) => (
  <div
    className="inline-flex flex-shrink-0 items-center justify-center rounded-full border border-brand-gray-light bg-brand-gray-light text-sm font-medium text-brand-text-muted"
    style={{ width: size, height: size }}
    aria-hidden
  >
    {initials}
  </div>
);

/* ==== NavBar.tsx: 56px bar, 32px tabs, active tab is a raised surface step ==== */
const AcademyNav = ({ current, go, user }) => {
  const items = [
    ['dashboard', 'Dashboard', 'layout-dashboard'],
    ['course', 'Course', 'book-open'],
    ['labs', 'Labs', 'flask-conical'],
    ['exam', 'Exam', 'clipboard-check'],
    [null, 'Tools', 'wrench'],
    [null, 'Events', 'calendar-days'],
    [null, 'Help', 'life-buoy'],
  ];
  return (
    <nav className="sticky top-0 z-40 border-b border-brand-gray-light/40 bg-brand-dark">
      <div className="mx-auto flex h-14 max-w-7xl items-center gap-6 px-4 sm:px-6 lg:px-8">
        <a onClick={() => go('dashboard')} className="flex flex-shrink-0 items-center gap-2.5 cursor-pointer">
          <img src="../../assets/logo.jpeg" alt="" className="h-8 w-8 rounded-md object-cover" />
          <div className="hidden whitespace-nowrap text-sm font-medium leading-none sm:block">GRC Eng Academy</div>
        </a>
        <div className="hidden flex-1 items-center gap-0.5 md:flex">
          {items.map(([id, label, icon]) => {
            const active = id && current === id;
            return (
              <button
                key={label}
                onClick={id ? () => go(id) : undefined}
                className={`inline-flex h-8 items-center gap-2 rounded-lg px-2.5 text-sm font-medium transition-colors duration-150 cursor-pointer ${
                  active ? 'bg-brand-gray-light text-brand-text' : 'text-brand-text-muted hover:bg-brand-gray-light/60 hover:text-brand-text'
                }`}
              >
                <Icon name={icon} size={16} />
                {label}
              </button>
            );
          })}
        </div>
        <div className="hidden flex-shrink-0 items-center gap-5 md:flex">
          <div className="flex items-center gap-2 whitespace-nowrap">
            <span className="h-2 w-2 rounded-full bg-brand-orange ring-4 ring-brand-orange/20" aria-hidden />
            <span className="text-xs font-medium text-brand-text-muted">Builder tier</span>
          </div>
          <button className="flex items-center gap-2 rounded-lg px-2 py-1.5 text-sm text-brand-text-muted transition-colors duration-150 hover:text-brand-text cursor-pointer">
            <Avatar initials={user || 'MR'} />
            <Icon name="chevron-down" size={16} />
          </button>
        </div>
      </div>
    </nav>
  );
};

/* ==== flat progress bar: 4px, raised track, orange fill (or meta color when quiet) ==== */
const Progress = ({ value, label, showValue = true, quiet = false, lead = false }) => (
  <div>
    {label && (
      <div className="mb-2 flex justify-between text-[13px] text-brand-text-muted">
        <span>{label}</span>
        {showValue && (
          <span className={`tabular-nums ${lead ? 'font-medium text-brand-orange-light' : ''}`}>{Math.round(value)}%</span>
        )}
      </div>
    )}
    <div className="h-1 w-full overflow-hidden rounded-sm bg-brand-gray-light">
      <div className={`h-full rounded-sm ${quiet ? 'bg-brand-text-dim' : 'bg-brand-orange'}`} style={{ width: `${value}%` }} />
    </div>
  </div>
);

/* ==== Dashboard.tsx helpers ==== */
const StatTile = ({ value, label }) => (
  <div className="rounded-lg border border-brand-gray-light bg-brand-dark p-3">
    <p className="text-[22px] font-medium leading-none tabular-nums">{value}</p>
    <p className="mt-1.5 text-xs text-brand-text-dim">{label}</p>
  </div>
);

// Conic-gradient donut: the single sanctioned inline style in the Dashboard.
const ProgressRing = ({ value }) => {
  const v = Math.min(100, Math.max(0, value));
  return (
    <div
      className="flex h-[72px] w-[72px] flex-shrink-0 items-center justify-center rounded-full"
      style={{ background: `conic-gradient(${ORANGE} 0% ${v}%, ${GRAY_LIGHT} ${v}% 100%)` }}
      role="img"
      aria-label={`${v} percent complete`}
    >
      <div className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-gray">
        <span className="text-[15px] font-medium tabular-nums">{v}%</span>
      </div>
    </div>
  );
};

// The moment: the CGE-P path drawn as seven domains.
const CGEP_DOMAINS = [
  { title: 'GRC engineering foundations', len: '52 min', state: 'done' },
  { title: 'Infrastructure as code', len: '1 h 10', state: 'done' },
  { title: 'Policy as code', len: '58 min', state: 'done' },
  { title: 'CI/CD for GRC engineers', len: '14 of 46 min', state: 'now' },
  { title: 'Cloud-native security and monitoring', len: '1 h 04', state: 'todo' },
  { title: 'OSCAL and continuous authorization', len: '49 min', state: 'todo' },
  { title: 'Applied GRC engineering', len: '41 min', state: 'todo' },
];

const DomainRows = ({ domains }) => (
  <ol className="mt-4 border-t border-brand-gray-light">
    {domains.map((m, i) => (
      <li key={m.title} className="grid h-9 grid-cols-[16px_44px_1fr_auto] items-center gap-2.5 border-b border-brand-gray-light text-sm">
        <span
          className={`grid h-4 w-4 place-items-center rounded-full border-[1.5px] ${
            m.state === 'done' ? 'border-emerald-400 bg-emerald-400' : m.state === 'now' ? 'border-brand-orange' : 'border-brand-gray-light'
          }`}
          aria-label={m.state === 'done' ? 'Complete' : m.state === 'now' ? 'In progress' : 'Not started'}
        >
          {m.state === 'done' && <Icon name="check" size={11} strokeWidth={2.5} className="text-brand-dark" />}
          {m.state === 'now' && <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />}
        </span>
        <Tag>{`D${i + 1}`}</Tag>
        <span className={`truncate ${m.state === 'todo' ? 'text-brand-text-muted' : 'text-brand-text'}`}>{m.title}</span>
        <span className={`font-mono text-[11px] ${m.state === 'now' ? 'text-brand-orange-light' : 'text-brand-text-dim'}`}>{m.len}</span>
      </li>
    ))}
  </ol>
);

const CourseProgressCard = ({ title, desc, pct, primary, domains, foot, onClick }) => (
  <a
    onClick={onClick}
    className={`flex flex-col rounded-xl border border-brand-gray-light bg-brand-gray p-6 transition-colors duration-150 hover:border-brand-text-dim/50 cursor-pointer ${domains ? 'sm:col-span-2' : ''}`}
  >
    <div className="flex items-start justify-between gap-3">
      <h3 className="text-base font-medium leading-[22px]">{title}</h3>
      {typeof pct === 'number' ? (
        <span className={`flex-shrink-0 text-sm tabular-nums ${primary ? 'font-medium text-brand-orange' : 'text-brand-text-muted'}`}>{pct}%</span>
      ) : (
        <span className="flex-shrink-0 font-mono text-xs text-brand-text-dim whitespace-nowrap">{pct}</span>
      )}
    </div>
    {desc && <p className="mt-1.5 line-clamp-2 text-sm text-brand-text-muted">{desc}</p>}
    {domains && <DomainRows domains={domains} />}
    {typeof pct === 'number' && !domains && (
      <div className="mt-4 h-1 overflow-hidden rounded-sm bg-brand-gray-light">
        <div className={`h-full rounded-sm ${primary ? 'bg-brand-orange' : 'bg-brand-text-dim'}`} style={{ width: `${pct}%` }} />
      </div>
    )}
    {foot && (
      <div className={`${domains ? 'mt-3' : 'mt-2'} flex justify-between text-xs text-brand-text-dim`}>
        <span>{foot[0]}</span><span>{foot[1]}</span>
      </div>
    )}
  </a>
);

const RailCard = ({ icon, title, children, link, onClick }) => (
  <a onClick={onClick} className={`block rounded-xl border border-brand-gray-light bg-brand-gray p-6 ${link ? 'transition-colors duration-150 hover:border-brand-text-dim/50 cursor-pointer' : ''}`}>
    <div className="mb-3 flex items-center gap-2">
      <Icon name={icon} size={16} className="text-brand-text-dim" />
      <h2 className="text-[15px] font-medium">{title}</h2>
    </div>
    {children}
    {link && (
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-brand-orange">
        {link} <Icon name="arrow-right" size={16} />
      </span>
    )}
  </a>
);

/* ==== Dashboard.tsx ==== */
const Dashboard = ({ go }) => {
  const done = CGEP_DOMAINS.filter((d) => d.state === 'done').length;
  const pct = Math.round((done / CGEP_DOMAINS.length) * 100);
  return (
    <div>
      {/* HERO */}
      <section className="border-b border-brand-gray-light/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="grid gap-8 lg:grid-cols-[1fr_400px] lg:items-center">
            <div>
              <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-text-dim">
                <Tag>CGE-P</Tag>
                <span>Certified GRC Engineer, Practitioner</span>
              </div>
              <h1 className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-[40px]">
                <span className="tabular-nums text-brand-orange">{pct}%</span> to the exam
              </h1>
              <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-text-muted">
                Three of seven domains done. Finish CI/CD for GRC engineers and the two after it, then the 60-question open-book exam unlocks.
              </p>
              <div className="mt-6 flex flex-wrap items-center gap-x-4 gap-y-3">
                <AcademyButton size="lg" onClick={() => go('lesson')}>
                  Continue module 4 <Icon name="arrow-right" size={16} />
                </AcademyButton>
                <a onClick={() => go('exam')} className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange-light hover:text-brand-orange cursor-pointer">
                  Exam readiness
                </a>
              </div>
            </div>

            {/* Progress card */}
            <div className="rounded-2xl border border-brand-gray-light bg-brand-gray p-6">
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="font-mono text-xs text-brand-text-dim">Your path</p>
                  <p className="mt-0.5 text-base font-medium">CGE-P certification</p>
                </div>
                <ProgressRing value={pct} />
              </div>
              <div className="mt-4 grid grid-cols-3 gap-2">
                <StatTile value={String(done)} label="Modules done" />
                <StatTile value={String(CGEP_DOMAINS.length - done)} label="Modules left" />
                <StatTile value="2" label="Courses" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAIN */}
      <div className="bg-brand-dark-alt">
        <div className="mx-auto max-w-7xl px-4 py-14 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center justify-between gap-3 rounded-xl border border-brand-gray-light bg-brand-gray p-4 text-sm">
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-brand-orange ring-4 ring-brand-orange/20" aria-hidden />
              <span><span className="font-medium">Patreon member, active.</span> Free enrollment in every course. Membership re-checked hourly.</span>
            </div>
          </div>

          <div className="grid gap-10 lg:grid-cols-[1fr_340px]">
            <section>
              <div className="mb-4 flex items-end justify-between">
                <div>
                  <p className="font-mono text-xs text-brand-text-dim">Your path</p>
                  <h2 className="mt-1 text-xl font-medium tracking-[-0.01em]">My courses</h2>
                </div>
                <a onClick={() => go('course')} className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange hover:text-brand-orange-light cursor-pointer">
                  Browse catalog <Icon name="arrow-right" size={16} />
                </a>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <CourseProgressCard
                  title="Certified GRC Engineer, Practitioner (CGE-P)"
                  desc="Seven domains, hands-on labs and a 60-question exam. Capstone required for the credential."
                  pct={pct}
                  primary
                  domains={CGEP_DOMAINS}
                  foot={['3 of 7 modules · last watched yesterday', 'Exam unlocks after D7']}
                  onClick={() => go('course')}
                />
                <CourseProgressCard
                  title="Certified GRC Engineer, Azure Specialty (CGE-AZ)"
                  desc="Ship the whole discipline on Azure. 27 short videos, six labs, a 50-question exam and a graded capstone."
                  pct={0}
                  foot={['0 of 7 modules', 'Requires CGE-P']}
                />
                <CourseProgressCard title="Certified GRC Engineer, Associate (CGE-A)" desc="The entry credential for people moving into GRC engineering. Enrollment opens on launch." pct="Coming soon" />
                <CourseProgressCard title="Certified GRC Engineer, AWS Specialty (CGE-AWS)" desc="The same pipeline, built and graded on AWS." pct="Coming soon" />
              </div>
            </section>

            <aside className="space-y-6">
              <RailCard icon="award" title="Certifications">
                <p className="text-sm text-brand-text-muted">Complete a course to earn your CGE-P credential. Issued automatically when the capstone passes review.</p>
              </RailCard>
              <RailCard icon="clock" title="CPE">
                <div className="flex justify-between text-[13px] text-brand-text-muted">
                  <span>Total CPE, trailing year</span><span className="font-medium tabular-nums text-brand-text">0 of 30</span>
                </div>
                <div className="mt-2 h-1 overflow-hidden rounded-sm bg-brand-gray-light"><div className="h-full w-0 bg-brand-orange" /></div>
                <p className="mt-2.5 text-xs text-brand-text-dim">Your first renewal is CPE-free. Club articles and live sessions count once you hold a credential.</p>
              </RailCard>
              <RailCard icon="flask-conical" title="Hands-on labs" link="Open labs" onClick={() => go('labs')}>
                <p className="text-sm text-brand-text-muted">Ship real compliance-as-code. Start with the one-time setup guide, then every lab becomes part of your CGE-P portfolio.</p>
              </RailCard>
              <RailCard icon="file-text" title="Member tools" link="Open tools">
                <p className="text-sm text-brand-text-muted">Fill-in builders that turn a framework requirement into a real artifact. Start with AI system documentation.</p>
              </RailCard>
            </aside>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, {
  ORANGE, ORANGE_LIGHT, DARK, DARK_ALT, GRAY, GRAY_LIGHT, TEXT, MUTED, DIM,
  AcademyNav, AcademyButton, Tag, Chip, Avatar, Progress, StatTile, ProgressRing, DomainRows, CGEP_DOMAINS, Dashboard, Icon,
});
