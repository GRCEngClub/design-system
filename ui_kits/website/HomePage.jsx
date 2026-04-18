// Page: Home — recreates grcengclub.com/ key sections
function HomePage({ go }) {
  return (
    <div>
      {/* Hero */}
      <section style={{ position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(232,101,10,.10), transparent 50%)' }} />
        <div style={{ maxWidth: 1280, margin: '0 auto', padding: '120px 24px', position: 'relative' }}>
          <div style={{ maxWidth: 800 }}>
            <h1 style={{ margin: 0, fontSize: 'clamp(40px, 6vw, 76px)', fontWeight: 900, letterSpacing: '-.02em', lineHeight: 1.05, color: '#fff' }}>
              GRC Engineering<span style={{ color: '#E8650A' }}> Club</span>
            </h1>
            <p style={{ marginTop: 24, fontSize: 22, color: '#A0A0A0', lineHeight: 1.55 }}>
              Not just a book club. <span style={{ color: '#fff', fontWeight: 600 }}>A movement.</span><br />
              From checkbox GRC to engineered systems.
            </p>
            <div style={{ marginTop: 36, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <CTAButton size="lg" onClick={() => go('join')}>Join the Club</CTAButton>
              <CTAButton size="lg" variant="secondary" onClick={() => go('academy')}>See What You Get →</CTAButton>
            </div>
            <a style={{ marginTop: 18, display: 'inline-flex', gap: 6, alignItems: 'center', color: '#A0A0A0', fontSize: 13, fontWeight: 500, cursor: 'pointer' }}>
              New to GRC engineering? Start with our free 101 guide →
            </a>
          </div>
        </div>
      </section>

      {/* What is GRC Engineering? */}
      <section style={{ background: '#1A1A1A', padding: '80px 24px' }}>
        <div style={{ maxWidth: 880, margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ margin: 0, fontSize: 36, fontWeight: 800, letterSpacing: '-.02em', color: '#fff' }}>What is GRC Engineering?</h2>
          <p style={{ marginTop: 22, fontSize: 17, color: '#A0A0A0', lineHeight: 1.7 }}>
            GRC engineering is the practice of building automated, scalable systems for governance,
            risk, and compliance — replacing manual checklists with infrastructure-as-code, cloud-native tools,
            and continuous monitoring. GRC engineers embed compliance controls directly into technology stacks
            so organizations stay audit-ready by design, not by heroic last-minute effort.
          </p>
          <a style={{ marginTop: 24, display: 'inline-flex', gap: 6, color: '#E8650A', fontWeight: 600, cursor: 'pointer' }}>
            Read the complete GRC Engineering 101 guide →
          </a>
        </div>
      </section>

      {/* What Members Get */}
      <section style={{ background: '#1A1A1A', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="What Members Get" subtitle="Everything you need to transition from compliance analyst to GRC engineer." />
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {[
              { icon: 'zap', title: 'Engineering Mindset', desc: 'Move from checkbox GRC to building automated systems.' },
              { icon: 'target', title: 'Clear Career Path', desc: 'Structured roadmap from where you are to where you want to be.' },
              { icon: 'trending-up', title: 'Real Outcomes', desc: 'Members land roles, build portfolios, and level up consistently.' },
              { icon: 'shield', title: 'Community & Crew', desc: 'A crew of builders who push each other forward every week.' },
            ].map(b => (
              <div key={b.title} style={{ textAlign: 'center', padding: 24 }}>
                <div style={{ width: 48, height: 48, borderRadius: 9999, background: 'rgba(232,101,10,.10)', color: '#E8650A', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', marginBottom: 16 }}>
                  <Icon name={b.icon} size={24} />
                </div>
                <h3 style={{ margin: '0 0 8px', fontSize: 17, fontWeight: 700, color: '#fff' }}>{b.title}</h3>
                <p style={{ margin: 0, color: '#A0A0A0', fontSize: 13.5 }}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Types */}
      <section style={{ padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="What's Inside" subtitle="Six content pillars designed to build your skills, portfolio, and career." />
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <ContentCard icon="mic" title="Private Podcast" description="Weekly episodes breaking down GRC engineering concepts, career strategies, and industry trends." />
            <ContentCard icon="message-circle" title="Live Q&A" description="Bi-weekly live sessions where you get direct answers to your toughest GRC questions." />
            <ContentCard icon="flask-conical" title="Hands-On Labs" description="Build real AWS compliance infrastructure — Config rules, Lambda automation, dashboards." />
            <ContentCard icon="users" title="Mock Interviews" description="Practice with real GRC interview scenarios and get actionable feedback on your resume." />
            <ContentCard icon="book-open" title="Playbooks" description="Step-by-step guides for LinkedIn branding, portfolio building, and career positioning." />
            <ContentCard icon="monitor-play" title="Live Builder Sessions" description="Members build real projects together — deploying infra, automating pipelines, learning by doing." />
          </div>
        </div>
      </section>

      {/* Member Wins */}
      <section style={{ background: '#1A1A1A', padding: '80px 24px' }}>
        <div style={{ maxWidth: 1280, margin: '0 auto' }}>
          <SectionHeading title="Member Wins" subtitle="Real people. Real results. Real career transformations." />
          <div style={{ marginTop: 48, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            <StoryCard quote="The club membership has been the biggest ROI I've ever had. Like, this is absolutely insane, seeing everything that's happened since I got wind of the club last Fall." name="Dex Copeland" title="GRC Engineering Club Member" />
            <StoryCard quote="I landed my first GRC role as GRC Program Analyst at Compyl. THE WORK WORKS. Put in the reps, stay consistent, and the results show up — I'm living proof." name="James Robinson (J-R)" title="GRC Program Analyst at Compyl  - Jan 13, 2026" />
            <StoryCard quote="A founder of a security company tagged his CISO on my NIST to AWS mapping project. Then the CISO reached out to me directly." name="Luigi Carpio" title="NIST to AWS Mapping Project Recognized by a CISO" />
          </div>
          <div style={{ marginTop: 36, textAlign: 'center' }}>
            <a onClick={() => go('stories')} style={{ color: '#E8650A', fontWeight: 600, cursor: 'pointer' }}>See all member stories →</a>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section style={{ padding: '96px 24px', textAlign: 'center' }}>
        <h2 style={{ margin: 0, fontSize: 'clamp(28px, 4vw, 56px)', fontWeight: 900, letterSpacing: '-.02em', color: '#fff' }}>Ready to Build?</h2>
        <p style={{ marginTop: 16, fontSize: 19, color: '#A0A0A0', maxWidth: 600, margin: '16px auto 36px' }}>
          Clear path forward and a crew to build it with. Stop scrolling, start engineering.
        </p>
        <CTAButton size="lg" onClick={() => go('join')}>Join the Club</CTAButton>
      </section>
    </div>
  );
}

window.HomePage = HomePage;
