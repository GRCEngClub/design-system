// Page: Academy + Stories + Join + FAQ (compact recreations)

function AcademyPage({ go }) {
  return (
    <div>
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(232,101,10,.10), transparent 50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 24px', position: 'relative' }}>
          <div style={{ maxWidth: 820 }}>
            <span style={{ display: 'inline-block', fontSize: 12, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.08em', color: '#E8650A', background: 'rgba(232,101,10,.10)', padding: '8px 14px', borderRadius: 9999, marginBottom: 22 }}>Launching April 2026</span>
            <h1 style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 72px)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1.05, color: '#fff' }}>
              GRC Engineering Club<span style={{ color: '#E8650A' }}> Academy</span>
            </h1>
            <p style={{ marginTop: 22, fontSize: 21, color: '#A0A0A0', lineHeight: 1.55 }}>
              The first certification built <span style={{ color: '#fff', fontWeight: 600 }}>by GRC engineers, for GRC engineers.</span><br />
              From frameworks to hands-on implementation.
            </p>
            <div style={{ marginTop: 32, display: 'flex', gap: 14 }}>
              <CTAButton size="lg" onClick={() => go('join')}>Join the Club</CTAButton>
              <CTAButton size="lg" variant="secondary">Learn More →</CTAButton>
            </div>
          </div>
        </div>
      </section>

      <section style={{ background: '#1A1A1A', padding: '64px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <div style={{ width: 56, height: 56, borderRadius: 9999, background: 'rgba(232,101,10,.10)', color: '#E8650A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
            <Icon name="graduation-cap" size={32} />
          </div>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>Introducing the CGE-P</h2>
          <p style={{ marginTop: 8, color: '#E8650A', fontWeight: 600, fontSize: 17 }}>Certified GRC Engineer — Practitioner</p>
          <p style={{ marginTop: 22, fontSize: 16.5, color: '#A0A0A0', lineHeight: 1.7 }}>
            The CGE-P is the first certification designed specifically for GRC engineers. It covers
            everything from GRC frameworks and cloud compliance to hands-on implementation and automation —
            the skills you actually need to build modern compliance programs.
          </p>
          <div style={{ marginTop: 32, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 18 }}>
            {[['Study Guide', 'Comprehensive materials to prep early'], ['Exam Blueprint', 'Know exactly what to expect'], ['Free for Members', 'Full course + exam included']].map(([t, d]) => (
              <div key={t} style={{ padding: 16 }}>
                <p style={{ color: '#E8650A', fontWeight: 700, fontSize: 16, margin: 0 }}>{t}</p>
                <p style={{ color: '#A0A0A0', fontSize: 13, marginTop: 6 }}>{d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="What You'll Learn" subtitle="Seven domains covering the full spectrum of GRC engineering." />
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <ContentCard icon="shield" title="GRC Engineering Foundations" description="Core concepts, maturity models, NIST/RMF/FedRAMP/CMMC, and the GRC Engineer career path." />
            <ContentCard icon="wrench" title="Infrastructure as Code" description="Terraform fundamentals, compliant resource design, reusable modules, version control as evidence." />
            <ContentCard icon="clipboard-check" title="Policy-as-Code" description="OPA/Rego policies for compliance enforcement, mapping NIST controls to executable policies." />
            <ContentCard icon="cog" title="CI/CD for GRC Engineers" description="Build pipelines that automate security testing, policy validation, and evidence collection." />
            <ContentCard icon="cloud" title="Cloud-Native Security & Monitoring" description="Control validation, continuous monitoring dashboards, drift detection, cloud-native security." />
            <ContentCard icon="bar-chart-3" title="OSCAL & Continuous Authorization" description="OSCAL component models, System Security Plans, transformation roadmap from ATO to cATO." />
          </div>
        </div>
      </section>
    </div>
  );
}

const ALL_STORIES = [
  { q: "The club membership has been the biggest ROI I've ever had. Like, this is absolutely insane.", n: "Dex Copeland", t: "GRC Engineering Club Member" },
  { q: "I knocked out the OSCP in just two months. It is no joke — but putting in the work paid off.", n: "Ethan Troy", t: "Earned OSCP Certification — Feb 12, 2026" },
  { q: "I landed my first GRC role as GRC Program Analyst at Compyl. THE WORK WORKS.", n: "James Robinson (J-R)", t: "GRC Program Analyst at Compyl — Jan 13, 2026" },
  { q: "A founder of a security company tagged his CISO on my NIST to AWS mapping project.", n: "Luigi Carpio", t: "NIST to AWS Mapping Project Recognized by a CISO" },
  { q: "New role who dis! As AJ says, THE WORK WORKS. My portfolio site, certifications, and projects were all brought up as standouts.", n: "Akeem", t: "Landed a New Role" },
  { q: "I passed my AWS Cloud Practitioner exam! Cloud fluency + GRC is a powerful combo.", n: "Jessica Barnwell", t: "Passed AWS Certified Cloud Practitioner — Mar 11, 2026" },
];

function StoriesPage() {
  return (
    <div>
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="Member Stories" subtitle="Real people. Real results. Real career transformations." />
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {ALL_STORIES.map(s => <StoryCard key={s.n} quote={s.q} name={s.n} title={s.t} />)}
          </div>
        </div>
      </section>
    </div>
  );
}

function JoinPage() {
  const tiers = [
    { name: 'Practitioner', desc: 'For those who want to learn and stay sharp.', features: ['Weekly private podcast', 'Community access', 'Playbooks and guides', 'Content archive access'], hl: false },
    { name: 'Builder', desc: 'For those ready to build, practice, and land roles.', features: ['Everything in Practitioner', 'Hands-on AWS labs', 'Mock interviews', 'Resume & LinkedIn reviews', 'Live Q&A sessions', 'Priority access'], hl: true },
  ];
  return (
    <div>
      <section style={{ padding: '64px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="Join the Club" subtitle="Pick your path. Start building today." />
        </div>
      </section>
      <section style={{ paddingBottom: 80 }}>
        <div style={{ maxWidth: 880, margin: '0 auto', padding: '0 24px', display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {tiers.map(t => (
            <div key={t.name} style={{ borderRadius: 12, padding: 32, border: t.hl ? '1px solid #E8650A' : '1px solid #3A3A3A', background: t.hl ? 'linear-gradient(180deg, rgba(232,101,10,.10), transparent)' : '#2A2A2A' }}>
              {t.hl && <span style={{ display: 'inline-block', fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: '.07em', color: '#E8650A', background: 'rgba(232,101,10,.10)', padding: '5px 12px', borderRadius: 9999, marginBottom: 14 }}>Most Popular</span>}
              <h3 style={{ margin: 0, fontSize: 24, fontWeight: 700, color: '#fff' }}>{t.name}</h3>
              <p style={{ color: '#A0A0A0', marginTop: 8, marginBottom: 24 }}>{t.desc}</p>
              <ul style={{ listStyle: 'none', padding: 0, margin: '0 0 24px' }}>
                {t.features.map(f => (
                  <li key={f} style={{ display: 'flex', gap: 10, padding: '6px 0', color: '#F5F5F5', fontSize: 14 }}>
                    <Icon name="check" size={18} />{f}
                  </li>
                ))}
              </ul>
              <CTAButton variant={t.hl ? 'primary' : 'secondary'} style={{ width: '100%' }}>Get Started →</CTAButton>
            </div>
          ))}
        </div>
      </section>
      <section style={{ background: '#1A1A1A', padding: '64px 24px' }}>
        <div style={{ maxWidth: 720, margin: '0 auto' }}>
          <SectionHeading title="How It Works" />
          <div style={{ marginTop: 48 }}>
            {[['1', 'Subscribe on Patreon', 'Choose your tier and join in under 2 minutes.'],
              ['2', 'Get Instant Access', 'Unlock the full content library — podcast, labs, playbooks.'],
              ['3', 'Start Building', 'Follow the roadmap, join live sessions, level up your career.']].map(([s, t, d]) => (
              <div key={s} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', padding: '14px 0' }}>
                <div style={{ width: 40, height: 40, borderRadius: 9999, background: '#E8650A', color: '#fff', fontWeight: 700, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s}</div>
                <div>
                  <h4 style={{ margin: 0, color: '#fff', fontWeight: 700, fontSize: 17 }}>{t}</h4>
                  <p style={{ margin: '4px 0 0', color: '#A0A0A0' }}>{d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

function FAQPage() {
  const items = [
    { q: 'What is GRC engineering?', a: 'GRC engineering is the practice of building automated, scalable systems for governance, risk, and compliance instead of relying on manual checklists and spreadsheets. GRC engineers use IaC, cloud-native tools, CI/CD, and APIs to embed compliance directly into the technology stack.' },
    { q: 'How do I break into GRC engineering?', a: 'Start by learning the fundamentals of cloud platforms (AWS, Azure, or GCP) and common compliance frameworks like SOC 2, ISO 27001, or FedRAMP. Then build hands-on skills in IaC, scripting, and automation. Join the Club for labs, mock interviews, and a community on the same path.' },
    { q: 'Is this only about AWS?', a: 'No — we cover AWS, Azure, and GCP. While AWS is the primary platform for many of our labs, we regularly cover Azure and GCP as well. The principles, frameworks, and engineering mindset apply across all major cloud providers.' },
    { q: 'Do I need coding experience?', a: 'No prior coding experience is required. Our labs start from the fundamentals and build up. You will learn automation, scripting, and infrastructure-as-code as part of the engineering journey.' },
    { q: 'Can I cancel anytime?', a: 'Absolutely. Your Patreon membership can be cancelled at any time with no penalties. You will retain access through the end of your billing period.' },
  ];
  const [open, setOpen] = React.useState(0);
  return (
    <section style={{ padding: '64px 24px' }}>
      <div style={{ maxWidth: 720, margin: '0 auto' }}>
        <SectionHeading title="Common Questions" />
        <div style={{ marginTop: 40, display: 'flex', flexDirection: 'column', gap: 12 }}>
          {items.map((it, i) => (
            <div key={i} style={{ background: '#2A2A2A', borderRadius: 12, border: '1px solid #3A3A3A', overflow: 'hidden' }}>
              <button onClick={() => setOpen(open === i ? -1 : i)}
                style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: 20, background: 'transparent', border: 'none', color: '#fff', fontSize: 16, fontWeight: 600, textAlign: 'left', cursor: 'pointer' }}>
                <span>{it.q}</span>
                <span style={{ color: '#E8650A', transform: open === i ? 'rotate(180deg)' : 'none', transition: 'transform 200ms' }}>▾</span>
              </button>
              {open === i && <p style={{ padding: '0 20px 20px', margin: 0, color: '#A0A0A0', lineHeight: 1.65 }}>{it.a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AcademyPage, StoriesPage, JoinPage, FAQPage });
