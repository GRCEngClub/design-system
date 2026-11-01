/* Cert platform — Course outline, Lesson player, Labs, Exam readiness (2026-11-01 system).
   Brand-consistent proposals on the production Dashboard recipe; the kit's
   Dashboard and NavBar are the 1:1 ports. */

const CourseOutline = ({ go }) => {
  const chapters = [
    { n: 1, title: 'GRC engineering foundations', done: 5, total: 5, lessons: [
      { n: 1, t: 'What is GRC engineering', dur: '18 min', state: 'done' },
      { n: 2, t: 'The GRC engineering maturity model', dur: '22 min', state: 'done' },
      { n: 3, t: 'Three pillars of GRC engineering', dur: '16 min', state: 'done' },
      { n: 4, t: 'Frameworks and standards landscape', dur: '24 min', state: 'done' },
      { n: 5, t: 'The GRC engineer role and career path', dur: '20 min', state: 'done' },
    ]},
    { n: 2, title: 'Infrastructure as code', done: 3, total: 5, lessons: [
      { n: 1, t: 'Introduction to IaC', dur: '19 min', state: 'done' },
      { n: 2, t: 'Terraform fundamentals', dur: '28 min', state: 'done' },
      { n: 3, t: 'IaC as compliance evidence', dur: '22 min', state: 'now' },
      { n: 4, t: 'State, drift and enforcement', dur: '20 min', state: 'todo' },
      { n: 5, t: 'IaC lab: S3 encrypted vault', dur: '45 min lab', state: 'todo' },
    ]},
    { n: 3, title: 'Policy as code', done: 0, total: 5, lessons: [
      { n: 1, t: 'Introduction to policy as code', dur: '18 min', state: 'todo' },
      { n: 2, t: 'OPA and Rego fundamentals', dur: '26 min', state: 'todo' },
      { n: 3, t: 'Authoring your first policy', dur: '24 min', state: 'todo' },
      { n: 4, t: 'Policy testing and coverage', dur: '22 min', state: 'todo' },
      { n: 5, t: 'Governance and stakeholder buy-in', dur: '18 min', state: 'todo' },
    ]},
  ];

  return (
    <div>
      <section className="border-b border-brand-gray-light/40">
        <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
          <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-text-dim">
            <Tag>CGE-P</Tag><span>Course</span>
          </div>
          <h1 className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-[40px]">Certified GRC Engineer, Practitioner</h1>
          <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-text-muted">
            Seven domains, about three hours of video, hands-on labs, a 60-question exam and an IaC portfolio capstone.
          </p>
          <div className="mt-8 grid max-w-3xl grid-cols-2 gap-2 sm:grid-cols-4">
            {[['43%', 'Complete'], ['3 / 7', 'Modules'], ['5.2 h', 'Logged'], ['Nov 4', 'Last watched']].map(([n, l]) => <StatTile key={l} value={n} label={l} />)}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-alt">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 px-4 py-10 sm:px-6 lg:px-8">
          {chapters.map((ch) => (
            <div key={ch.n} className="overflow-hidden rounded-xl border border-brand-gray-light bg-brand-gray">
              <div className="flex items-center gap-4 border-b border-brand-gray-light px-6 py-5">
                <Tag>{`D${ch.n}`}</Tag>
                <div className="flex-1">
                  <div className="text-base font-medium">{ch.title}</div>
                  <div className="mt-0.5 text-[13px] text-brand-text-muted tabular-nums">{ch.done} of {ch.total} lessons complete</div>
                </div>
                <div className="w-44"><Progress value={(ch.done / ch.total) * 100} quiet={ch.done === 0} /></div>
              </div>
              <ol>
                {ch.lessons.map((l, i) => (
                  <li key={l.n}>
                    <button
                      onClick={() => go('lesson')}
                      className={`grid w-full grid-cols-[16px_1fr_auto_16px] items-center gap-4 px-6 py-3 text-left transition-colors duration-150 hover:bg-brand-gray-light/40 cursor-pointer ${i < ch.lessons.length - 1 ? 'border-b border-brand-gray-light/50' : ''}`}
                    >
                      <span className={`grid h-4 w-4 place-items-center rounded-full border-[1.5px] ${l.state === 'done' ? 'border-emerald-400 bg-emerald-400' : l.state === 'now' ? 'border-brand-orange' : 'border-brand-gray-light'}`}>
                        {l.state === 'done' && <Icon name="check" size={11} strokeWidth={2.5} className="text-brand-dark" />}
                        {l.state === 'now' && <span className="h-1.5 w-1.5 rounded-full bg-brand-orange" />}
                      </span>
                      <span className={`text-sm ${l.state === 'todo' ? 'text-brand-text-muted' : 'text-brand-text'}`}>
                        {l.t}
                        {l.state === 'now' && <span className="ml-2 font-mono text-[11px] text-brand-orange-light">now watching</span>}
                      </span>
                      <span className="font-mono text-[11px] text-brand-text-dim">{l.dur}</span>
                      <Icon name="chevron-right" size={16} className="text-brand-text-dim" />
                    </button>
                  </li>
                ))}
              </ol>
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
  const [t, setT] = useState(320);
  const dur = 22 * 60;
  const pct = (t / dur) * 100;
  const mmss = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s) % 60).padStart(2, '0')}`;

  useEffect(() => {
    if (!playing) return;
    const id = setInterval(() => setT((x) => Math.min(dur, x + 1)), 1000);
    return () => clearInterval(id);
  }, [playing]);

  return (
    <div className="mx-auto grid max-w-7xl gap-6 px-4 py-6 sm:px-6 lg:grid-cols-[1fr_320px] lg:px-8">
      <div>
        <button onClick={() => go('course')} className="mb-4 inline-flex items-center gap-1.5 text-[13px] text-brand-text-muted hover:text-brand-text transition-colors duration-150 cursor-pointer">
          <Icon name="chevron-left" size={14} /> Back to course
        </button>
        <div className="flex items-center gap-2 font-mono text-xs text-brand-text-dim"><Tag>D2</Tag><span>Infrastructure as code · lesson 3 of 5</span></div>
        <h1 className="mt-3 mb-6 text-3xl font-medium tracking-[-0.02em]">IaC as compliance evidence</h1>

        {/* Video: a dark frame, flat controls */}
        <div className="relative aspect-video overflow-hidden rounded-xl border border-brand-gray-light bg-black">
          <div className="absolute inset-0 flex items-center justify-center">
            <button onClick={() => setPlaying((p) => !p)} className="flex h-14 w-14 items-center justify-center rounded-full bg-brand-orange text-brand-dark cursor-pointer">
              <Icon name={playing ? 'pause' : 'play'} size={22} strokeWidth={2} className={playing ? '' : 'ml-0.5'} />
            </button>
          </div>
          <div className="absolute inset-x-5 bottom-5 flex items-center gap-4">
            <span className="min-w-[88px] font-mono text-xs tabular-nums text-brand-text">
              {mmss(t)} <span className="text-brand-text-dim">/ {mmss(dur)}</span>
            </span>
            <div className="relative h-1 flex-1 rounded-sm bg-brand-gray-light">
              <div className="absolute inset-y-0 left-0 rounded-sm bg-brand-orange" style={{ width: `${pct}%` }} />
            </div>
            <div className="flex gap-3 text-brand-text-muted">
              <Icon name="volume-2" size={18} /><Icon name="subtitles" size={18} /><Icon name="maximize-2" size={18} />
            </div>
          </div>
        </div>

        <div className="mt-6 grid gap-5 md:grid-cols-2">
          <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-6">
            <p className="font-mono text-xs text-brand-text-dim">About this lesson</p>
            <p className="mt-3 text-[15px] leading-relaxed text-brand-text-muted">
              How Terraform state and signed plan output become machine-verifiable compliance evidence: plan, apply, signed artifact, evidence vault, control mapping.
            </p>
            <div className="mt-4 flex gap-5 text-[13px] text-brand-text-muted">
              <span className="inline-flex items-center gap-1.5"><Icon name="clock" size={14} className="text-brand-text-dim" /> 22 min</span>
              <span className="inline-flex items-center gap-1.5"><Icon name="flask-conical" size={14} className="text-brand-text-dim" /> 1 lab</span>
              <span className="inline-flex items-center gap-1.5"><Icon name="file-text" size={14} className="text-brand-text-dim" /> Transcript</span>
            </div>
          </div>
          <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-6">
            <p className="font-mono text-xs text-brand-text-dim">Resources</p>
            <ul className="mt-2">
              {[
                ['file-code', 's3-evidence-vault.tf', 'Starter Terraform module'],
                ['file-text', 'Evidence mapping worksheet', 'PDF · 4 pages'],
                ['github', 'Lab repo', 'grc-eng-club/iac-evidence-lab'],
              ].map(([icon, title, sub]) => (
                <li key={title} className="flex items-center gap-3 border-b border-brand-gray-light/50 py-3 last:border-0">
                  <Icon name={icon} size={16} className="text-brand-text-dim" />
                  <div className="flex-1">
                    <div className="text-sm font-medium">{title}</div>
                    <div className="text-xs text-brand-text-dim">{sub}</div>
                  </div>
                  <Icon name="arrow-up-right" size={14} className="text-brand-text-dim" />
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-6 flex justify-between gap-3">
          <AcademyButton variant="secondary" icon="chevron-left">Previous lesson</AcademyButton>
          <AcademyButton icon="check" onClick={() => go('labs')}>Mark complete and continue</AcademyButton>
        </div>
      </div>

      {/* Sidebar */}
      <aside className="space-y-5">
        <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-5">
          <Progress value={60} label="D2 · Infrastructure as code" lead />
          <p className="mt-2 text-xs text-brand-text-dim">3 of 5 lessons</p>
        </div>
        <div className="overflow-hidden rounded-xl border border-brand-gray-light bg-brand-gray">
          <div className="border-b border-brand-gray-light px-5 py-3 text-sm font-medium">Up next in this domain</div>
          {[['4', 'State, drift and enforcement', '20 min'], ['5', 'IaC lab: S3 encrypted vault', '45 min lab']].map(([n, title, d]) => (
            <div key={n} className="flex items-center gap-3 border-b border-brand-gray-light/50 px-5 py-3 last:border-0">
              <span className="font-mono text-xs text-brand-text-dim tabular-nums">{n}</span>
              <div className="flex-1">
                <div className="text-sm">{title}</div>
                <div className="font-mono text-[11px] text-brand-text-dim">{d}</div>
              </div>
            </div>
          ))}
        </div>
        <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-5">
          <p className="font-mono text-xs text-brand-text-dim">Discussion</p>
          <p className="mt-1 text-sm font-medium">24 comments on this lesson</p>
          <div className="mt-3 flex">
            {['AJ', 'EM', 'DK', 'LC'].map((i, idx) => (
              <div key={i} style={{ marginLeft: idx ? -8 : 0 }}><Avatar initials={i} size={28} /></div>
            ))}
          </div>
          <AcademyButton size="sm" variant="secondary" icon="message-circle" className="mt-4 w-full">Join the thread</AcademyButton>
        </div>
      </aside>
    </div>
  );
};

/* ==== Labs list ==== */
const LabsPage = () => {
  const labs = [
    { d: 'D2', t: 'S3 encrypted evidence vault', tags: ['Terraform', 'AWS'], time: '45 min', status: 'in-progress' },
    { d: 'D2', t: 'Drift detection pipeline', tags: ['Terraform', 'CI/CD'], time: '60 min', status: 'locked' },
    { d: 'D3', t: 'Authoring an OPA policy', tags: ['OPA', 'Rego'], time: '50 min', status: 'locked' },
    { d: 'D3', t: 'Policy tests with Conftest', tags: ['OPA', 'Testing'], time: '40 min', status: 'locked' },
    { d: 'D4', t: 'Evidence-as-code pipeline', tags: ['GitHub Actions'], time: '55 min', status: 'locked' },
    { d: 'D5', t: 'AWS Config and GuardDuty baseline', tags: ['AWS', 'Monitoring'], time: '50 min', status: 'locked' },
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <p className="font-mono text-xs text-brand-text-dim">Hands-on</p>
      <h1 className="mt-3 text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-[40px]">Labs</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-text-muted">
        Ship real compliance as code. Every lab gives you a repo, a runbook and a graded checklist that becomes part of your CGE-P portfolio.
      </p>
      <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {labs.map((l) => {
          const locked = l.status === 'locked';
          const active = l.status === 'in-progress';
          return (
            <div key={l.t} className={`flex flex-col rounded-xl border border-brand-gray-light bg-brand-gray p-6 transition-colors duration-150 ${locked ? '' : 'hover:border-brand-text-dim/50'}`}>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag>{l.d}</Tag>
                  {active && <span className="font-mono text-[11px] text-brand-orange-light">in progress</span>}
                </div>
                {locked && <Icon name="lock" size={16} className="text-brand-text-dim" />}
              </div>
              <h3 className={`mt-4 text-base font-medium leading-[22px] ${locked ? 'text-brand-text-muted' : ''}`}>{l.t}</h3>
              <div className="mt-3 flex flex-wrap gap-1.5">
                {l.tags.map((t) => <Tag key={t}>{t}</Tag>)}
              </div>
              <div className="mt-5 flex flex-1 items-end justify-between">
                <span className="inline-flex items-center gap-1.5 text-[13px] text-brand-text-dim"><Icon name="clock" size={14} /> {l.time}</span>
                {active && <AcademyButton size="sm">Resume <Icon name="arrow-right" size={14} /></AcademyButton>}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

/* ==== Exam readiness ==== */
const ExamPage = () => {
  const domains = [
    ['D1', 'GRC engineering foundations', 90],
    ['D2', 'Infrastructure as code', 55],
    ['D3', 'Policy as code', 12],
    ['D4', 'CI/CD for GRC engineers', 0],
    ['D5', 'Cloud-native security and monitoring', 0],
    ['D6', 'OSCAL and continuous authorization', 0],
    ['D7', 'Applied GRC engineering', 0],
  ];
  return (
    <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8 lg:py-12">
      <div className="flex flex-wrap items-center gap-2 font-mono text-xs text-brand-text-dim"><Tag>CGE-P</Tag><span>Certification</span></div>
      <h1 className="mt-4 text-3xl font-medium leading-[1.1] tracking-[-0.02em] md:text-[40px]">Exam readiness</h1>
      <p className="mt-3 max-w-xl text-[15px] leading-relaxed text-brand-text-muted">
        60 questions, 90 minutes, open book, 72% to pass. Unlocks when all seven domains are complete.
      </p>

      <div className="mt-10 grid gap-6 lg:grid-cols-[1.4fr_1fr]">
        <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-6">
          <h2 className="text-[15px] font-medium">Readiness by domain</h2>
          <ol className="mt-4 border-t border-brand-gray-light">
            {domains.map(([d, t, v]) => (
              <li key={d} className="grid grid-cols-[44px_1fr_140px_44px] items-center gap-3 border-b border-brand-gray-light py-3 text-sm">
                <Tag>{d}</Tag>
                <span className={v === 0 ? 'text-brand-text-muted' : 'text-brand-text'}>{t}</span>
                <div className="h-1 overflow-hidden rounded-sm bg-brand-gray-light">
                  <div className={`h-full rounded-sm ${v >= 72 ? 'bg-brand-orange' : 'bg-brand-text-dim'}`} style={{ width: `${v}%` }} />
                </div>
                <span className={`text-right font-mono text-[11px] tabular-nums ${v >= 72 ? 'text-brand-orange-light' : 'text-brand-text-dim'}`}>{v}%</span>
              </li>
            ))}
          </ol>
          <p className="mt-3 text-xs text-brand-text-dim">A domain reads as ready at 72%, the same bar as the exam.</p>
        </div>
        <div className="space-y-5">
          <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-6">
            <p className="font-mono text-xs text-brand-text-dim">Mock exam</p>
            <h3 className="mt-1 text-base font-medium">Take a practice run</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">Timed 60-question mock from the same question bank. Opens at 60% of the course.</p>
            <AcademyButton className="mt-5 w-full" icon="lock" disabled>Opens at 60%</AcademyButton>
          </div>
          <div className="rounded-xl border border-brand-gray-light bg-brand-gray p-6">
            <p className="font-mono text-xs text-brand-text-dim">Your capstone</p>
            <h3 className="mt-1 text-base font-medium">Ship a real IaC portfolio</h3>
            <p className="mt-2 text-sm leading-relaxed text-brand-text-muted">Pick a control. Automate it. Prove it. Submit your repo and runbook when you are ready.</p>
            <AcademyButton className="mt-5 w-full" icon="upload">Submit capstone</AcademyButton>
          </div>
        </div>
      </div>
    </div>
  );
};

Object.assign(window, { CourseOutline, LessonPlayer, LabsPage, ExamPage });
