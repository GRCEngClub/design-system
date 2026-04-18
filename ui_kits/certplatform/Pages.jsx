/* Cert platform — Course outline, Lesson player, Lab, Exam screens */

const CourseOutline = ({ go }) => {
  const chapters = [
    { n: '01', title: 'Foundations', done: 5, total: 5, lessons: [
      { n: 1, t: 'What Is GRC Engineering', dur: '18 min', done: true },
      { n: 2, t: 'GRC Engineering Maturity Model', dur: '22 min', done: true },
      { n: 3, t: 'Three Pillars of GRC Engineering', dur: '16 min', done: true },
      { n: 4, t: 'Frameworks & Standards Landscape', dur: '24 min', done: true },
      { n: 5, t: 'GRC Engineer Role & Career Path', dur: '20 min', done: true },
    ]},
    { n: '02', title: 'Infrastructure as Code', done: 3, total: 5, lessons: [
      { n: 1, t: 'Introduction to IaC', dur: '19 min', done: true },
      { n: 2, t: 'Terraform Fundamentals', dur: '28 min', done: true },
      { n: 3, t: 'IaC as Compliance Evidence', dur: '22 min', done: false, current: true },
      { n: 4, t: 'State, Drift & Enforcement', dur: '20 min', done: false },
      { n: 5, t: 'IaC Lab  - S3 Encrypted Vault', dur: '45 min lab', done: false },
    ]},
    { n: '03', title: 'Policy as Code', done: 0, total: 5, lessons: [
      { n: 1, t: 'Introduction to Policy as Code', dur: '18 min', done: false },
      { n: 2, t: 'OPA + Rego Fundamentals', dur: '26 min', done: false },
      { n: 3, t: 'Authoring Your First Policy', dur: '24 min', done: false },
      { n: 4, t: 'Policy Testing & Coverage', dur: '22 min', done: false },
      { n: 5, t: 'Governance & Stakeholder Buy-In', dur: '18 min', done: false },
    ]},
  ];

  return (
    <div>
      <section style={{ background: DARK, padding: '48px 24px 32px', borderBottom: `1px solid ${GRAY_LIGHT}50` }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <Chip>Course</Chip>
          <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.025em', margin: '16px 0 10px' }}>
            Certified GRC Engineer — Practitioner
          </h1>
          <p style={{ fontSize: 17, color: MUTED, maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
            7 chapters · ~3 hrs of video · hands-on labs · 60-question exam · IaC portfolio capstone.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginTop: 32, maxWidth: 900 }}>
            {[['32%', 'Complete'], ['8/25', 'Lessons'], ['5.2h', 'Logged'], ['6', 'Day streak']].map(([n, l]) => (
              <div key={l} style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 12, padding: '16px 18px' }}>
                <div style={{ fontSize: 26, fontWeight: 900, color: '#fff', letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: 11, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section style={{ background: DARK_ALT, padding: '40px 24px 64px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto', display: 'flex', flexDirection: 'column', gap: 20 }}>
          {chapters.map(ch => (
            <div key={ch.n} style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16, overflow: 'hidden' }}>
              <div style={{
                padding: '22px 28px', display: 'flex', alignItems: 'center', gap: 20,
                borderBottom: `1px solid ${GRAY_LIGHT}`,
              }}>
                <div style={{ fontSize: 44, fontWeight: 900, color: ORANGE, letterSpacing: '-0.03em', lineHeight: 1, minWidth: 80 }}>{ch.n}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 22, fontWeight: 800, color: '#fff', marginBottom: 4 }}>{ch.title}</div>
                  <div style={{ fontSize: 13, color: MUTED, fontWeight: 600 }}>{ch.done} of {ch.total} lessons complete</div>
                </div>
                <div style={{ width: 180 }}>
                  <Progress value={(ch.done / ch.total) * 100} size="sm" showValue={false} />
                </div>
              </div>
              <div>
                {ch.lessons.map((l, i) => (
                  <button key={l.n} onClick={() => go('lesson')} style={{
                    width: '100%', textAlign: 'left', padding: '14px 28px 14px 80px',
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: l.current ? 'rgba(232,101,10,0.08)' : 'transparent',
                    border: 'none', borderBottom: i < ch.lessons.length - 1 ? `1px solid ${GRAY_LIGHT}50` : 'none',
                    color: TEXT, fontFamily: 'inherit', cursor: 'pointer',
                  }}>
                    <div style={{
                      width: 28, height: 28, borderRadius: 9999, flexShrink: 0,
                      background: l.done ? ORANGE : l.current ? 'rgba(232,101,10,0.15)' : GRAY,
                      border: l.current ? `2px solid ${ORANGE}` : `1px solid ${GRAY_LIGHT}`,
                      color: l.done ? '#fff' : MUTED,
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      fontSize: 13, fontWeight: 800,
                    }}>
                      {l.done ? <Icon name="check" size={14} /> : l.n}
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 15, fontWeight: l.current ? 700 : 600, color: l.done ? MUTED : '#fff' }}>{l.t}</div>
                      <div style={{ fontSize: 12, color: MUTED, marginTop: 2, display: 'flex', alignItems: 'center', gap: 10 }}>
                        <span style={{ display: 'inline-flex', gap: 5, alignItems: 'center' }}>
                          <Icon name={l.dur.includes('lab') ? 'flask-conical' : 'play'} size={12} />
                          {l.dur}
                        </span>
                        {l.current && <span style={{ color: ORANGE, fontWeight: 700 }}>• Currently watching</span>}
                      </div>
                    </div>
                    <Icon name="chevron-right" size={16} color={MUTED} />
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

/* ==== Lesson / video player ==== */
const LessonPlayer = ({ go }) => {
  const [playing, setPlaying] = useState(false);
  const [t, setT] = useState(320); // seconds
  const dur = 22 * 60;
  const pct = (t / dur) * 100;
  const mmss = (s) => `${Math.floor(s/60)}:${String(Math.floor(s)%60).padStart(2,'0')}`;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT(x => Math.min(dur, x + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div style={{ background: DARK, minHeight: 'calc(100vh - 64px)' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto', padding: '24px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24 }}>
        {/* Main column */}
        <div>
          <button onClick={() => go('course')} style={{
            display: 'inline-flex', alignItems: 'center', gap: 6,
            background: 'none', border: 'none', color: MUTED,
            fontFamily: 'inherit', fontSize: 13, fontWeight: 600, cursor: 'pointer', marginBottom: 16,
          }}>
            <Icon name="chevron-left" size={14} /> Back to course
          </button>
          <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>
            Chapter 02 · Lesson 03
          </div>
          <h1 style={{ fontSize: 36, fontWeight: 900, letterSpacing: '-0.02em', margin: '8px 0 24px' }}>
            IaC as Compliance Evidence
          </h1>

          {/* Video */}
          <div style={{
            position: 'relative', aspectRatio: '16/9', background: '#000',
            borderRadius: 14, border: `1px solid ${GRAY_LIGHT}`, overflow: 'hidden',
          }}>
            <div style={{
              position: 'absolute', inset: 0,
              background: `radial-gradient(ellipse at 30% 40%, rgba(232,101,10,0.18), transparent 60%), ${DARK}`,
            }} />
            {/* "AJ" placeholder speaker */}
            <div style={{
              position: 'absolute', left: '50%', top: '42%', transform: 'translate(-50%,-50%)',
              width: 140, height: 140, borderRadius: '50%',
              background: `linear-gradient(135deg, ${ORANGE}, ${ORANGE_LIGHT})`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 48, fontWeight: 900, color: '#fff',
              boxShadow: '0 20px 50px rgba(232,101,10,0.35)',
            }}>AJ</div>
            <div style={{
              position: 'absolute', bottom: 24, left: 24, right: 24,
              display: 'flex', alignItems: 'center', gap: 14,
            }}>
              <button onClick={() => setPlaying(p => !p)} style={{
                width: 56, height: 56, borderRadius: '50%', border: 'none', cursor: 'pointer',
                background: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center',
                boxShadow: '0 6px 18px rgba(0,0,0,0.4)',
              }}>
                <Icon name={playing ? 'pause' : 'play'} size={22} color="#000" />
              </button>
              <div style={{ fontSize: 13, color: '#fff', fontWeight: 700, fontVariantNumeric: 'tabular-nums', minWidth: 90 }}>
                {mmss(t)} <span style={{ color: 'rgba(255,255,255,0.5)' }}>/ {mmss(dur)}</span>
              </div>
              <div style={{ flex: 1, height: 4, background: 'rgba(255,255,255,0.2)', borderRadius: 9999, position: 'relative' }}>
                <div style={{ position: 'absolute', inset: 0, right: `${100 - pct}%`, background: ORANGE, borderRadius: 9999 }} />
                <div style={{
                  position: 'absolute', left: `${pct}%`, top: '50%', transform: 'translate(-50%,-50%)',
                  width: 14, height: 14, borderRadius: '50%', background: ORANGE,
                  boxShadow: '0 0 0 4px rgba(232,101,10,0.25)',
                }} />
              </div>
              <div style={{ display: 'flex', gap: 8, color: '#fff' }}>
                <Icon name="volume-2" size={18} />
                <Icon name="subtitles" size={18} />
                <Icon name="maximize-2" size={18} />
              </div>
            </div>
          </div>

          {/* Description + transcript */}
          <div style={{ marginTop: 28, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
            <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 14, padding: 22 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>About this lesson</div>
              <p style={{ fontSize: 15, color: MUTED, lineHeight: 1.6, margin: 0 }}>
                How Terraform state + signed plan output become machine-verifiable compliance evidence.
                You'll learn the exact pipeline: plan → apply → signed artifact → evidence vault → control mapping.
              </p>
              <div style={{ display: 'flex', gap: 20, marginTop: 18, fontSize: 13, color: MUTED }}>
                <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="clock" size={14} /> 22 min</span>
                <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="flask-conical" size={14} /> 1 lab</span>
                <span style={{ display: 'inline-flex', gap: 6, alignItems: 'center' }}><Icon name="file-text" size={14} /> Transcript</span>
              </div>
            </div>
            <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 14, padding: 22 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Resources</div>
              {[
                ['file-code-2', 's3-evidence-vault.tf', 'Starter Terraform module'],
                ['file-text',   'Evidence mapping worksheet', 'PDF · 4 pages'],
                ['github',      'Lab repo', 'grc-eng-club/iac-evidence-lab'],
              ].map(([icon, t, s]) => (
                <div key={t} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 0', borderBottom: `1px solid ${GRAY_LIGHT}50` }}>
                  <div style={{
                    width: 32, height: 32, borderRadius: 8,
                    background: 'rgba(232,101,10,0.12)', color: ORANGE,
                    display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0,
                  }}><Icon name={icon} size={16} /></div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t}</div>
                    <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{s}</div>
                  </div>
                  <Icon name="arrow-up-right" size={14} color={MUTED} />
                </div>
              ))}
            </div>
          </div>

          <div style={{ marginTop: 28, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
            <AcademyButton variant="ghost" icon="chevron-left">Previous lesson</AcademyButton>
            <AcademyButton variant="primary" icon="check" onClick={() => go('labs')}>
              Mark complete & continue
            </AcademyButton>
          </div>
        </div>

        {/* Sidebar */}
        <div>
          <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 14, padding: 18, marginBottom: 20 }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: 10 }}>Chapter 02 progress</div>
            <Progress value={60} size="sm" showValue={false} />
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 8, fontSize: 12, color: MUTED, fontWeight: 600 }}>
              <span>3 of 5 lessons</span>
              <span style={{ color: ORANGE }}>60%</span>
            </div>
          </div>
          <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 14, overflow: 'hidden' }}>
            <div style={{ padding: '14px 18px', borderBottom: `1px solid ${GRAY_LIGHT}`, fontSize: 14, fontWeight: 800 }}>Up next in this chapter</div>
            {[
              ['4', 'State, Drift & Enforcement', '20 min'],
              ['5', 'IaC Lab  - S3 Encrypted Vault', '45 min lab'],
            ].map(([n, t, d]) => (
              <div key={n} style={{ padding: '14px 18px', display: 'flex', gap: 12, alignItems: 'center', borderBottom: `1px solid ${GRAY_LIGHT}50` }}>
                <div style={{ width: 28, height: 28, borderRadius: 9999, background: DARK, border: `1px solid ${GRAY_LIGHT}`, color: MUTED, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 12, fontWeight: 700, flexShrink: 0 }}>{n}</div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: 14, fontWeight: 700, color: '#fff' }}>{t}</div>
                  <div style={{ fontSize: 12, color: MUTED, marginTop: 2 }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
          <div style={{ background: GRAY, border: `1px solid ${ORANGE}`, borderRadius: 14, padding: 18, marginTop: 20,
            backgroundImage: 'linear-gradient(180deg, rgba(232,101,10,0.08), transparent)',
          }}>
            <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Discussion</div>
            <div style={{ fontSize: 14, fontWeight: 700, color: '#fff', margin: '6px 0 10px' }}>24 comments on this lesson</div>
            <div style={{ display: 'flex', marginBottom: 12 }}>
              {['AJ', 'EM', 'DK', 'LC'].map((i, idx) => (
                <div key={i} style={{ marginLeft: idx ? -8 : 0 }}>
                  <Avatar initials={i} size={28} />
                </div>
              ))}
            </div>
            <AcademyButton size="sm" variant="secondary" icon="message-circle" style={{ width: '100%', justifyContent: 'center' }}>Join the thread</AcademyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

/* ==== Labs list ==== */
const LabsPage = () => {
  const labs = [
    { ch: '02', t: 'S3 Encrypted Evidence Vault', tags: ['Terraform', 'AWS'], time: '45 min', status: 'in-progress' },
    { ch: '02', t: 'Drift Detection Pipeline', tags: ['Terraform', 'CI/CD'], time: '60 min', status: 'locked' },
    { ch: '03', t: 'Authoring an OPA Policy', tags: ['OPA', 'Rego'], time: '50 min', status: 'locked' },
    { ch: '03', t: 'Policy Tests with Conftest', tags: ['OPA', 'Testing'], time: '40 min', status: 'locked' },
    { ch: '04', t: 'Evidence-as-Code Pipeline', tags: ['GitHub Actions'], time: '55 min', status: 'locked' },
    { ch: '05', t: 'AWS Config + GuardDuty Baseline', tags: ['AWS', 'Monitoring'], time: '50 min', status: 'locked' },
  ];
  return (
    <div style={{ background: DARK, minHeight: 'calc(100vh - 64px)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Chip>Hands-on</Chip>
        <h1 style={{ fontSize: 44, fontWeight: 900, letterSpacing: '-0.025em', margin: '14px 0 10px' }}>Labs</h1>
        <p style={{ fontSize: 17, color: MUTED, maxWidth: 720, lineHeight: 1.6, margin: 0 }}>
          Ship real compliance-as-code. Every lab gives you a repo, a runbook, and a graded checklist that becomes part of your CGE-P portfolio.
        </p>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 36 }}>
          {labs.map((l, i) => {
            const isLocked = l.status === 'locked';
            const isActive = l.status === 'in-progress';
            return (
              <div key={i} style={{
                background: GRAY,
                border: `1px solid ${isActive ? ORANGE : GRAY_LIGHT}`,
                borderRadius: 16, padding: 22, position: 'relative',
                opacity: isLocked ? 0.55 : 1,
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                  <Chip tone={isActive ? 'orange' : 'gray'}>Chapter {l.ch}</Chip>
                  {isLocked && <Icon name="lock" size={16} color={MUTED} />}
                  {isActive && <Chip>In progress</Chip>}
                </div>
                <div style={{ fontSize: 20, fontWeight: 800, color: '#fff', lineHeight: 1.25, marginBottom: 14 }}>{l.t}</div>
                <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap', marginBottom: 16 }}>
                  {l.tags.map(t => (
                    <span key={t} style={{
                      fontSize: 11, fontWeight: 700, color: MUTED,
                      padding: '3px 8px', borderRadius: 6,
                      background: DARK, border: `1px solid ${GRAY_LIGHT}`,
                    }}>{t}</span>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 13, color: MUTED, display: 'inline-flex', alignItems: 'center', gap: 6 }}>
                    <Icon name="clock" size={14} /> {l.time}
                  </span>
                  {isActive ? <AcademyButton size="sm" icon="arrow-right">Resume</AcademyButton> : null}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

/* ==== Exam readiness ==== */
const ExamPage = () => {
  const domains = [
    ['Foundations', 90],
    ['Infrastructure as Code', 55],
    ['Policy as Code', 12],
    ['CI/CD & Evidence', 0],
    ['Cloud-Native Security', 0],
    ['OSCAL & cATO', 0],
    ['Capstone Readiness', 0],
  ];
  return (
    <div style={{ background: DARK, minHeight: 'calc(100vh - 64px)', padding: '48px 24px' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>
        <Chip>Certification</Chip>
        <h1 style={{ fontSize: 48, fontWeight: 900, letterSpacing: '-0.025em', margin: '14px 0 10px' }}>
          CGE-P Exam <span style={{ color: ORANGE }}>Readiness</span>
        </h1>
        <p style={{ fontSize: 18, color: MUTED, maxWidth: 820, lineHeight: 1.6, margin: 0 }}>
          60 questions. 72% to pass. Unlocked when all chapters are complete and your capstone is submitted.
        </p>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24, marginTop: 36 }}>
          <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16, padding: 28 }}>
            <div style={{ fontSize: 20, fontWeight: 800, marginBottom: 20 }}>Readiness by domain</div>
            {domains.map(([t, v]) => (
              <div key={t} style={{ marginBottom: 18 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 14, color: '#fff', fontWeight: 600, marginBottom: 8 }}>
                  <span>{t}</span>
                  <span style={{ color: v >= 72 ? ORANGE : MUTED, fontWeight: 700 }}>{v}%</span>
                </div>
                <div style={{ height: 6, background: DARK, borderRadius: 9999, overflow: 'hidden', border: `1px solid ${GRAY_LIGHT}` }}>
                  <div style={{ width: `${v}%`, height: '100%', background: v >= 72 ? ORANGE : `linear-gradient(90deg, ${ORANGE}, ${ORANGE_LIGHT})` }} />
                </div>
              </div>
            ))}
          </div>
          <div>
            <div style={{ background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16, padding: 28, marginBottom: 20 }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Mock exam</div>
              <div style={{ fontSize: 22, fontWeight: 900, margin: '6px 0 14px' }}>Take a practice run</div>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.55, margin: '0 0 18px' }}>
                Timed 60-question mock using the same question bank. Locked until you've completed 60% of the course.
              </p>
              <AcademyButton size="md" variant="ghost" icon="lock" style={{ width: '100%', justifyContent: 'center' }}>Unlock at 60%</AcademyButton>
            </div>
            <div style={{ background: GRAY, border: `1px solid ${ORANGE}`, borderRadius: 16, padding: 28,
              backgroundImage: 'linear-gradient(180deg, rgba(232,101,10,0.12), transparent)',
            }}>
              <div style={{ fontSize: 12, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Your capstone</div>
              <div style={{ fontSize: 22, fontWeight: 900, margin: '6px 0 14px' }}>Ship a real IaC portfolio</div>
              <p style={{ fontSize: 14, color: MUTED, lineHeight: 1.55, margin: '0 0 18px' }}>
                Pick a control. Automate it. Prove it. Submit your repo + runbook when you're ready.
              </p>
              <AcademyButton size="md" icon="upload" style={{ width: '100%', justifyContent: 'center' }}>Submit capstone</AcademyButton>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { CourseOutline, LessonPlayer, LabsPage, ExamPage });
