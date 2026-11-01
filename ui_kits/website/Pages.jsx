// Pages: Academy, Member wins, Pricing, FAQ (compact recreations, 2026-11-01 system).

// The Academy hero's product view: pick a credential (cert-platform LandingPage.tsx).
const CREDENTIALS = [
  { code: 'CGE-P', kind: 'Practitioner', who: 'For the engineers who build automated compliance', what: 'Frameworks, Terraform, policy as code, CI/CD, continuous monitoring and OSCAL, then a capstone you push to GitHub.', facts: [['domains', '7'], ['exam', '60 q · 90 min'], ['capstone', 'required']] },
  { code: 'CGE-AUD', kind: 'Auditor Specialty', who: 'For the auditors who evaluate it', what: 'Read pipelines, sample code-defined controls and evaluate engineered evidence. No coding background or CGE-P required.', facts: [['domains', '6'], ['exam', '50 q · 75 min'], ['capstone', 'none']] },
  { code: 'CGE-AZ', kind: 'Azure Specialty', who: 'For CGE-P holders shipping the discipline on Azure', what: 'A complete automated GRC pipeline in your own subscription: 27 short videos, six labs and a graded capstone.', facts: [['domains', '7'], ['exam', '50 q · 75 min'], ['requires', 'CGE-P']] },
];

const CGEP_TOPICS = [
  ['shield', 'GRC engineering foundations', 'Core concepts, maturity models, compliance frameworks (NIST, RMF, FedRAMP, CMMC) and the GRC engineer career path.'],
  ['wrench', 'Infrastructure as code', 'Terraform fundamentals, compliant resource design, reusable modules and version control as your evidence trail.'],
  ['clipboard-list', 'Policy as code', 'OPA/Rego policies for compliance enforcement, mapping NIST controls to executable policies and shift-left compliance.'],
  ['workflow', 'CI/CD for GRC engineers', 'Pipelines that automate security testing, policy validation and evidence collection as a byproduct of deployment.'],
  ['cloud', 'Cloud-native security and monitoring', 'Control validation, continuous monitoring dashboards, drift detection and cloud-native security services.'],
  ['file-code', 'OSCAL and continuous authorization', 'OSCAL component models, System Security Plans and the roadmap from traditional ATO to cATO.'],
  ['graduation-cap', 'Applied GRC engineering', 'End-to-end integration, portfolio projects and capstone workflows that tie all domains together.'],
];

function AcademyPage({ go }) {
  return (
    <div>
      <section className="px-4 sm:px-6 lg:px-8 pt-16 pb-20 sm:pt-24 sm:pb-28">
        <div className="mx-auto max-w-6xl">
          <p className="font-mono text-xs text-brand-text-dim">Training Academy · CGE-P, CGE-AUD and CGE-AZ enrollment open</p>
          <h1 className="mt-4 max-w-[18ch] text-[40px] leading-[1.04] font-medium tracking-[-0.025em] sm:text-[56px] sm:tracking-[-0.03em]">
            Certifications built by working GRC engineers
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-brand-text-muted">
            The Certified GRC Engineer family is the certification path built by practitioners. Video training,
            open-book exams and real artifacts (Terraform, pipelines, evidence), not slides and flashcards.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <CTAButton size="md" onClick={() => go('join')}>Join the Club, all certifications included</CTAButton>
            <CTAButton variant="secondary" size="md">Buy one certification, $350</CTAButton>
          </div>

          <div className="mt-14 grid gap-4 md:grid-cols-3">
            {CREDENTIALS.map((c) => (
              <div key={c.code} className="flex flex-col rounded-2xl border border-brand-gray-light bg-brand-gray p-6">
                <div className="flex items-center gap-2">
                  <Tag>{c.code}</Tag>
                  <span className="font-mono text-xs text-brand-text-dim">{c.kind}</span>
                </div>
                <h2 className="mt-4 text-lg font-medium leading-6">{c.who}</h2>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-brand-text-muted">{c.what}</p>
                <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-brand-gray-light pt-4">
                  {c.facts.map(([k, v]) => (
                    <div key={k}>
                      <dt className="font-mono text-[11px] text-brand-text-dim">{k}</dt>
                      <dd className="mt-1 text-sm font-medium tabular-nums">{v}</dd>
                    </div>
                  ))}
                </dl>
                <div className="mt-5 flex items-center justify-between gap-3 text-sm">
                  <span className="text-brand-text-dim">$350, or free with membership</span>
                  <a className="inline-flex items-center gap-1 whitespace-nowrap font-medium text-brand-orange-light hover:text-brand-orange cursor-pointer">
                    Get the {c.code} <Icon name="arrow-right" size={16} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-brand-dark-alt py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What you'll learn in the CGE-P" subtitle="Seven domains covering the full spectrum of GRC engineering." centered={false} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CGEP_TOPICS.map(([icon, title, desc], i) => (
              <div key={title} className="rounded-xl border border-brand-gray-light bg-brand-gray p-6 hover:border-brand-text-dim/40 transition-colors duration-150">
                <div className="flex items-center justify-between">
                  <Icon name={icon} size={18} className="text-brand-text-muted" />
                  <Tag>{`D${i + 1}`}</Tag>
                </div>
                <h3 className="mt-3 text-base font-medium">{title}</h3>
                <p className="mt-2 text-sm text-brand-text-muted leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

const ALL_STORIES = [
  { q: "The club membership has been the biggest ROI I've ever had. Seeing everything that's happened since I got wind of the club last fall is wild.", n: 'Dex Copeland', t: 'GRC Engineering Club member' },
  { q: 'I knocked out the OSCP in just two months. It is no joke, but putting in the work paid off.', n: 'Ethan Troy', t: 'Earned the OSCP · February 2026' },
  { q: 'I landed my first GRC role as GRC Program Analyst at Compyl. The work works.', n: 'James Robinson (J-R)', t: 'GRC Program Analyst at Compyl · January 2026' },
  { q: 'A founder of a security company tagged his CISO on my NIST to AWS mapping project.', n: 'Luigi Carpio', t: 'NIST to AWS mapping project recognized by a CISO' },
  { q: 'New role. As AJ says, the work works. My portfolio site, certifications and projects were all brought up as standouts.', n: 'Akeem', t: 'Landed a new role' },
  { q: 'I passed my AWS Cloud Practitioner exam. Cloud fluency plus GRC is a powerful combo.', n: 'Jessica Barnwell', t: 'Passed AWS Certified Cloud Practitioner · March 2026' },
];

function StoriesPage() {
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Member wins" subtitle="Real people, real roles." centered={false} />
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          {ALL_STORIES.map((s) => <StoryCard key={s.n} quote={s.q} name={s.n} title={s.t} />)}
        </div>
      </div>
    </section>
  );
}

function JoinPage() {
  const plans = [
    { name: 'Annual', price: '$70', per: 'a year', desc: 'Saves $50 and comes with the redeem link for the Academy.', lead: true, features: ['Everything in the Club', 'All certifications included', 'Hands-on AWS labs', 'Mock interviews and resume reviews', 'Live Q&A every two weeks'] },
    { name: 'Monthly', price: '$9.99', per: 'a month, locked for life', desc: 'Cancel anytime and keep access through the end of your billing period.', lead: false, features: ['Everything in the Club', 'All certifications included', 'Hands-on AWS labs', 'Mock interviews and resume reviews', 'Live Q&A every two weeks'] },
  ];
  const steps = [
    ['1', 'Join on Patreon or buy annual', 'Pick a plan and join in under two minutes.'],
    ['2', 'Get access', 'Unlock the podcast, labs, playbooks and the Training Academy.'],
    ['3', 'Start building', 'Follow the roadmap, join live sessions, level up your career.'],
  ];
  return (
    <div>
      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading eyebrow="Membership" title="Join the Club" subtitle="One membership, every course. Pick a cadence." centered={false} />
          <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl">
            {plans.map((p) => (
              <div key={p.name} className="rounded-xl border border-brand-gray-light bg-brand-gray p-8 flex flex-col">
                <p className="font-mono text-xs text-brand-text-dim">{p.name}</p>
                <div className="mt-3 flex items-baseline gap-2">
                  <span className={`text-4xl font-medium tracking-tight tabular-nums ${p.lead ? 'text-brand-orange-light' : ''}`}>{p.price}</span>
                  <span className="text-sm text-brand-text-muted">{p.per}</span>
                </div>
                <p className="mt-3 text-sm text-brand-text-muted">{p.desc}</p>
                <ul className="mt-6 space-y-2.5 flex-1">
                  {p.features.map((f) => (
                    <li key={f} className="flex items-center gap-2.5 text-sm">
                      <Icon name="check" size={16} className="text-brand-text-dim" />{f}
                    </li>
                  ))}
                </ul>
                <CTAButton variant={p.lead ? 'primary' : 'secondary'} className="mt-8 w-full">
                  {p.lead ? 'Join annual, $70 a year' : 'Join monthly, $9.99'}
                </CTAButton>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="bg-brand-dark-alt py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="How it works" centered={false} />
          <ol className="mt-10 border-t border-brand-gray-light">
            {steps.map(([n, t, d]) => (
              <li key={n} className="grid grid-cols-[44px_1fr] gap-4 py-5 border-b border-brand-gray-light">
                <Tag>{`0${n}`}</Tag>
                <div>
                  <h3 className="text-base font-medium">{t}</h3>
                  <p className="mt-1 text-sm text-brand-text-muted">{d}</p>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
    </div>
  );
}

function FAQPage() {
  const items = [
    { q: 'What is GRC engineering?', a: 'GRC engineering is the practice of building automated, scalable systems for governance, risk and compliance instead of relying on manual checklists and spreadsheets. GRC engineers use IaC, cloud-native tools, CI/CD and APIs to embed compliance directly into the technology stack.' },
    { q: 'How do I break into GRC engineering?', a: 'Start by learning the fundamentals of one cloud platform and common compliance frameworks like SOC 2, ISO 27001 or FedRAMP. Then build hands-on skills in IaC, scripting and automation. Join the Club for labs, mock interviews and a community on the same path.' },
    { q: 'Is this only about AWS?', a: 'No. AWS is the primary platform for many of the labs, and Azure and GCP are covered as well. The principles, frameworks and engineering mindset apply across all major cloud providers.' },
    { q: 'Do I need coding experience?', a: 'No. The labs start from the fundamentals and build up. You learn scripting and infrastructure as code as part of the path.' },
    { q: 'Can I cancel anytime?', a: 'Yes. Cancel at any time with no penalties, and keep access through the end of your billing period.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section className="py-16 md:py-24">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading title="Common questions" centered={false} />
        <div className="mt-10 flex flex-col gap-3">
          {items.map((it, i) => (
            <div key={i} className="bg-brand-gray rounded-xl border border-brand-gray-light hover:border-brand-text-dim/40 transition-colors duration-150 overflow-hidden">
              <button
                onClick={() => setOpen(open === i ? -1 : i)}
                className="w-full flex justify-between items-center gap-4 p-5 text-left text-base font-medium cursor-pointer"
              >
                <span>{it.q}</span>
                <Icon name="chevron-down" size={16} className={`text-brand-text-dim transition-transform duration-150 ${open === i ? 'rotate-180' : ''}`} />
              </button>
              {open === i && <p className="px-5 pb-5 text-brand-text-muted text-[15px] leading-relaxed">{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AcademyPage, StoriesPage, JoinPage, FAQPage });
