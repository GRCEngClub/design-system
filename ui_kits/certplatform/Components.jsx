/* Certplatform UI Kit — Academy surface */
/* Shares dark/orange brand system with the marketing site but has a
   product UX: dashboard, course list, lesson player, progress. */

const { useState, useEffect, useRef } = React;

/* ---- tokens ---- */
const ORANGE = '#E8650A';
const ORANGE_LIGHT = '#FF8533';
const DARK = '#0D0D0D';
const DARK_ALT = '#1A1A1A';
const GRAY = '#2A2A2A';
const GRAY_LIGHT = '#3A3A3A';
const TEXT = '#F5F5F5';
const MUTED = '#A0A0A0';

const Icon = ({ name, size = 20, color, style }) => (
  <i data-lucide={name} style={{ width: size, height: size, color, display: 'inline-block', verticalAlign: 'middle', ...style }} />
);

const AcademyButton = ({ children, variant = 'primary', onClick, size = 'md', icon, style }) => {
  const sizes = {
    sm: { padding: '8px 14px', fontSize: 13 },
    md: { padding: '12px 20px', fontSize: 15 },
    lg: { padding: '16px 28px', fontSize: 17 },
  };
  const variants = {
    primary: { background: ORANGE, color: '#fff', border: '1px solid transparent',
      boxShadow: '0 6px 18px rgba(232,101,10,0.25)' },
    secondary: { background: 'transparent', color: ORANGE, border: `1px solid ${ORANGE}` },
    ghost: { background: GRAY, color: TEXT, border: `1px solid ${GRAY_LIGHT}` },
  };
  return (
    <button onClick={onClick} style={{
      ...sizes[size], ...variants[variant],
      display: 'inline-flex', alignItems: 'center', gap: 10,
      fontWeight: 700, borderRadius: 10, cursor: 'pointer',
      fontFamily: 'inherit', transition: 'all 150ms',
      ...style,
    }}
    onMouseEnter={e => { if (variant === 'primary') e.currentTarget.style.background = ORANGE_LIGHT; }}
    onMouseLeave={e => { if (variant === 'primary') e.currentTarget.style.background = ORANGE; }}
    >
      {icon && <Icon name={icon} size={size === 'sm' ? 14 : 16} />}
      {children}
    </button>
  );
};

const Chip = ({ children, tone = 'orange' }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 6,
    padding: '5px 10px', borderRadius: 9999,
    background: tone === 'orange' ? 'rgba(232,101,10,0.12)' : 'rgba(160,160,160,0.12)',
    color: tone === 'orange' ? ORANGE : MUTED,
    fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '0.08em',
  }}>{children}</span>
);

const Avatar = ({ initials, size = 36 }) => (
  <div style={{
    width: size, height: size, borderRadius: 9999,
    background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
    display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
    color: '#fff', fontWeight: 800, fontSize: size * 0.38, flexShrink: 0,
  }}>{initials}</div>
);

/* ==== top nav for the cert platform ==== */
const AcademyNav = ({ current, go, user }) => {
  const items = [
    ['dashboard', 'Dashboard', 'layout-dashboard'],
    ['course', 'Course', 'book-open'],
    ['labs', 'Labs', 'flask-conical'],
    ['exam', 'Exam', 'clipboard-check'],
  ];
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 50,
      background: 'rgba(13,13,13,0.92)', backdropFilter: 'blur(12px)',
      borderBottom: `1px solid ${GRAY_LIGHT}50`,
    }}>
      <div style={{
        maxWidth: 1280, margin: '0 auto', padding: '0 24px', height: 64,
        display: 'flex', alignItems: 'center', gap: 40,
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, flexShrink: 0 }}>
          <img src="../../assets/logo.jpeg" alt="" style={{ width: 36, height: 36, borderRadius: 8, objectFit: 'cover' }} />
          <div style={{ whiteSpace: 'nowrap' }}>
            <div style={{ fontSize: 14, fontWeight: 800, lineHeight: 1 }}>GRC Eng Academy</div>
            <div style={{ fontSize: 10, color: ORANGE, fontWeight: 700, letterSpacing: '0.14em', textTransform: 'uppercase', marginTop: 3 }}>CGE-P Program</div>
          </div>
        </div>
        <div style={{ flex: 1, display: 'flex', gap: 6 }}>
          {items.map(([id, label, icon]) => {
            const active = current === id;
            return (
              <button key={id} onClick={() => go(id)} style={{
                display: 'inline-flex', alignItems: 'center', gap: 8,
                padding: '8px 14px', borderRadius: 8,
                background: active ? 'rgba(232,101,10,0.12)' : 'transparent',
                color: active ? ORANGE : MUTED,
                border: 'none', fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer',
              }}>
                <Icon name={icon} size={16} />
                {label}
              </button>
            );
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexShrink: 0 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, whiteSpace: 'nowrap' }}>
            <div style={{
              width: 8, height: 8, borderRadius: 9999,
              background: ORANGE, boxShadow: `0 0 0 3px rgba(232,101,10,0.2)`,
            }} />
            <span style={{ fontSize: 13, color: MUTED, fontWeight: 600 }}>Builder tier</span>
          </div>
          <Avatar initials={user || 'JR'} size={36} />
        </div>
      </div>
    </nav>
  );
};

/* ==== progress bar ==== */
const Progress = ({ value, label, showValue = true, size = 'md' }) => {
  const h = size === 'sm' ? 4 : 8;
  return (
    <div>
      {label && (
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 13, color: MUTED, fontWeight: 600, marginBottom: 8 }}>
          <span>{label}</span>
          {showValue && <span style={{ color: ORANGE, fontWeight: 700 }}>{Math.round(value)}%</span>}
        </div>
      )}
      <div style={{ width: '100%', height: h, background: GRAY, borderRadius: 9999, overflow: 'hidden' }}>
        <div style={{
          width: `${value}%`, height: '100%',
          background: `linear-gradient(90deg, ${ORANGE}, ${ORANGE_LIGHT})`,
          borderRadius: 9999, transition: 'width 400ms',
        }} />
      </div>
    </div>
  );
};

/* ==== dashboard / home ==== */
const Dashboard = ({ go, progress }) => {
  const chapters = [
    { id: 1, title: 'Foundations', lessons: 5, done: 5, eyebrow: 'Chapter 01' },
    { id: 2, title: 'Infrastructure as Code', lessons: 5, done: 3, eyebrow: 'Chapter 02' },
    { id: 3, title: 'Policy as Code', lessons: 5, done: 0, eyebrow: 'Chapter 03' },
    { id: 4, title: 'CI/CD & Evidence', lessons: 4, done: 0, eyebrow: 'Chapter 04' },
  ];
  return (
    <div>
      {/* Hero */}
      <section style={{ background: DARK, padding: '64px 24px 48px', borderBottom: `1px solid ${GRAY_LIGHT}50` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 420px', gap: 48, alignItems: 'center' }}>
            <div>
              <Chip>Welcome back, James</Chip>
              <h1 style={{
                fontSize: 52, fontWeight: 900, lineHeight: 1.05, letterSpacing: '-0.025em',
                margin: '20px 0 16px', color: '#fff',
              }}>
                You're <span style={{ color: ORANGE }}>32%</span> of the way <br /> to CGE-P.
              </h1>
              <p style={{ fontSize: 18, color: MUTED, lineHeight: 1.6, maxWidth: 620, margin: 0 }}>
                Pick up where you left off — Chapter 02, Lesson 03: <i>IaC as Compliance Evidence.</i>
              </p>
              <div style={{ display: 'flex', gap: 12, marginTop: 28 }}>
                <AcademyButton size="lg" icon="play" onClick={() => go('course')}>Resume Chapter 02</AcademyButton>
                <AcademyButton size="lg" variant="secondary" onClick={() => go('course')}>View roadmap</AcademyButton>
              </div>
            </div>
            {/* Progress card */}
            <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 20, padding: 28 }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 18 }}>
                <div>
                  <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Your path</div>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginTop: 4 }}>CGE-P Certification</div>
                </div>
                <div style={{
                  width: 72, height: 72, borderRadius: '50%',
                  background: `conic-gradient(${ORANGE} 0% 32%, ${GRAY_LIGHT} 32% 100%)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                }}>
                  <div style={{
                    width: 56, height: 56, borderRadius: '50%', background: GRAY,
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    fontSize: 18, fontWeight: 900, color: '#fff',
                  }}>32%</div>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 14, marginBottom: 22 }}>
                {[['8', 'Lessons done'], ['25', 'Lessons left'], ['5.2h', 'Time logged']].map(([n, l]) => (
                  <div key={l} style={{ background: DARK, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 10, padding: '12px 14px' }}>
                    <div style={{ fontSize: 22, fontWeight: 900, color: '#fff', lineHeight: 1 }}>{n}</div>
                    <div style={{ fontSize: 11, color: MUTED, marginTop: 4, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{l}</div>
                  </div>
                ))}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 13, color: MUTED }}>
                <Icon name="flame" size={16} color={ORANGE} />
                <span><b style={{ color: '#fff' }}>6-day</b> streak — keep it going.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Chapters grid */}
      <section style={{ padding: '48px 24px', background: DARK_ALT }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 28 }}>
            <div>
              <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Your course</div>
              <h2 style={{ fontSize: 32, fontWeight: 900, margin: '4px 0 0', letterSpacing: '-0.02em' }}>Chapters</h2>
            </div>
            <button onClick={() => go('course')} style={{ background: 'none', border: 'none', color: MUTED, fontFamily: 'inherit', fontSize: 14, fontWeight: 600, cursor: 'pointer', display: 'inline-flex', gap: 6, alignItems: 'center' }}>
              View all <Icon name="arrow-right" size={14} />
            </button>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16 }}>
            {chapters.map(c => {
              const pct = (c.done / c.lessons) * 100;
              const complete = pct === 100;
              const active = c.done > 0 && !complete;
              return (
                <button key={c.id} onClick={() => go('course')} style={{
                  textAlign: 'left', background: GRAY,
                  border: `1px solid ${active ? ORANGE : GRAY_LIGHT}`,
                  borderRadius: 16, padding: 20, cursor: 'pointer',
                  fontFamily: 'inherit', color: TEXT, transition: 'all 200ms',
                }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                    <div style={{ fontSize: 11, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>{c.eyebrow}</div>
                    {complete && (
                      <div style={{ color: ORANGE }}><Icon name="check-circle-2" size={18} /></div>
                    )}
                  </div>
                  <div style={{ fontSize: 19, fontWeight: 800, color: '#fff', marginBottom: 16, lineHeight: 1.25 }}>{c.title}</div>
                  <Progress value={pct} size="sm" />
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10, fontSize: 12, color: MUTED, fontWeight: 600 }}>
                    <span>{c.done}/{c.lessons} lessons</span>
                    <span style={{ color: active ? ORANGE : MUTED }}>{active ? 'In progress' : complete ? 'Complete' : 'Not started'}</span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Activity + Next up */}
      <section style={{ padding: '48px 24px 64px', background: DARK }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 24 }}>
          <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16, padding: 28 }}>
            <h3 style={{ fontSize: 20, fontWeight: 800, margin: '0 0 18px' }}>Recent activity</h3>
            {[
              { icon: 'check-circle-2', title: 'Completed  - Foundations · Lesson 5', when: '2 days ago', orange: true },
              { icon: 'flask-conical',   title: 'Started Lab  - Terraform + S3 encryption', when: '3 days ago' },
              { icon: 'message-circle',  title: 'Posted in community  - OSCAL component question', when: '5 days ago' },
              { icon: 'award',           title: 'Earned badge  - Foundations Complete', when: '6 days ago', orange: true },
            ].map((a, i) => (
              <div key={i} style={{
                display: 'flex', alignItems: 'center', gap: 14,
                padding: '14px 0',
                borderBottom: i < 3 ? `1px solid ${GRAY_LIGHT}` : 'none',
              }}>
                <div style={{
                  width: 36, height: 36, borderRadius: 9999,
                  background: a.orange ? 'rgba(232,101,10,0.12)' : 'rgba(255,255,255,0.05)',
                  color: a.orange ? ORANGE : MUTED,
                  display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                }}>
                  <Icon name={a.icon} size={18} />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 15, fontWeight: 600, color: '#fff' }}>{a.title}</div>
                  <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{a.when}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: GRAY, border: `1px solid ${ORANGE}`, borderRadius: 16, padding: 28,
            backgroundImage: 'linear-gradient(180deg, rgba(232,101,10,0.08), transparent)',
          }}>
            <Chip>Up next</Chip>
            <h3 style={{ fontSize: 22, fontWeight: 900, margin: '12px 0 8px', lineHeight: 1.2 }}>
              IaC as Compliance Evidence
            </h3>
            <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.5, margin: '0 0 20px' }}>
              How Terraform state + signed plans become machine-verifiable evidence. 22 min video + a hands-on lab.
            </p>
            <div style={{ display: 'flex', gap: 16, fontSize: 12, color: MUTED, marginBottom: 20 }}>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={14}/> 22 min</span>
              <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="flask-conical" size={14}/> 1 lab</span>
            </div>
            <AcademyButton size="md" icon="play" style={{ width: '100%', justifyContent: 'center' }} onClick={() => go('course')}>
              Resume lesson
            </AcademyButton>
          </div>
        </div>
      </section>
    </div>
  );
};

Object.assign(window, { AcademyNav, AcademyButton, Chip, Avatar, Progress, Dashboard, Icon });
