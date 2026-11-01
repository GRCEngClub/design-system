// Page: Home. Mirrors grcengclub/src/pages/Home.tsx (2026-11-01): the hero with the
// pipeline run, then the alternating page / alt sections in production order.
// The member globe, events and Patreon sections are left out of the kit.
const HOME_BENEFITS = [
  { icon: 'zap', title: 'An engineering mindset', desc: 'Move from checkbox GRC to building automated systems.' },
  { icon: 'target', title: 'A clear career path', desc: 'A structured roadmap from where you are to where you want to be.' },
  { icon: 'trending-up', title: 'Real outcomes', desc: 'Members land roles, build portfolios and level up every month.' },
  { icon: 'shield', title: 'A crew', desc: 'Builders who push each other forward every week.' },
];

const HOME_CONTENT_TYPES = [
  { icon: 'mic', title: 'Private podcast', desc: 'Weekly episodes on GRC engineering concepts, career strategy and what is changing in the industry.' },
  { icon: 'message-circle', title: 'Live Q&A', desc: 'Live sessions every two weeks where you get direct answers to your toughest GRC questions.' },
  { icon: 'flask-conical', title: 'Hands-on labs', desc: 'Build real AWS compliance infrastructure: Config rules, Lambda automation, dashboards.' },
  { icon: 'users', title: 'Mock interviews', desc: 'Practice with real GRC interview scenarios and get specific feedback on your resume.' },
  { icon: 'book-open', title: 'Playbooks', desc: 'Step-by-step guides for LinkedIn positioning, portfolio building and career moves.' },
  { icon: 'monitor-play', title: 'Live builder sessions', desc: 'Members build real projects together: deploying infrastructure, automating pipelines, learning by doing.' },
];

const HOME_VIDEOS = [
  { id: 'UE5imcusMPw', title: 'GRC engineer salary: $70K to $330K+ (2026 data)', type: 'Clip' },
  { id: 'PnRE8gqadrM', title: 'The "lead auditor" scam, niche domination and why GRC budgets are shrinking', type: 'Full episode' },
  { id: '9Dc14mbJJCU', title: 'GRC certifications ranked for 2026: which ones matter?', type: 'Clip' },
  { id: 'q8_DB4CvoSE', title: 'Day in the life of a GRC engineer (2026)', type: 'Clip' },
];

function HomePage({ go }) {
  return (
    <div>
      {/* Hero: headline, two actions, and the product view rising from the bottom edge */}
      <section className="relative flex min-h-[calc(100vh-4rem)] flex-col overflow-hidden">
        <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 md:pt-24">
          <h1 className="max-w-[16ch] text-[40px] leading-[1.04] font-medium tracking-[-0.025em] sm:text-[56px] sm:tracking-[-0.03em] lg:text-[68px]">
            From checkbox GRC to engineered systems
          </h1>
          <p className="mt-5 max-w-xl text-lg leading-7 text-brand-text-muted">
            GRC Engineering Club is a community for GRC engineers and the people becoming one.
            Hands-on cloud labs, a private podcast, live Q&amp;A, local chapters and the Training Academy.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <CTAButton size="md" onClick={() => go('join')}>Join the Club</CTAButton>
            <CTAButton variant="secondary" size="md" onClick={() => go('academy')}>See what you get</CTAButton>
            <span className="text-sm text-brand-text-dim">$70 a year, or $9.99 a month locked for life</span>
          </div>
        </div>
        <div className="mt-14 flex flex-1 items-end md:mt-[72px]">
          <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <PipelineRun />
          </div>
        </div>
      </section>

      {/* Flagship project */}
      <section className="bg-brand-dark-alt py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="mb-4 font-mono text-xs text-brand-text-dim">Flagship open-source project</p>
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight">GRC engineering in Claude Code</h2>
              <p className="mt-3 font-mono text-sm text-brand-text-muted">GRCEngClub/claude-grc-engineering</p>
              <p className="mt-4 text-base md:text-lg text-brand-text-muted leading-relaxed">
                The official open-source GRC toolkit for Claude Code. Pull evidence, crosswalk across 1,468 SCF controls mapped to 249 frameworks, generate prioritized gap reports, and produce OSCAL artifacts.
              </p>
            </div>
            <div className="flex flex-col gap-3 shrink-0">
              <CTAButton size="md">
                <span className="flex items-center gap-2">Explore the project <Icon name="arrow-right" size={16} /></span>
              </CTAButton>
              <CTAButton variant="secondary" size="md">Star on GitHub</CTAButton>
            </div>
          </div>
        </div>
      </section>

      {/* Academy */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-[1fr_auto] gap-8 items-center">
            <div>
              <p className="mb-4 font-mono text-xs text-brand-text-dim">Training Academy · two certifications, more coming</p>
              <h2 className="text-2xl md:text-4xl font-medium tracking-tight">Certifications built by working GRC engineers</h2>
              <p className="mt-4 text-base md:text-lg text-brand-text-muted leading-relaxed">
                Earn the CGE-P Practitioner or the CGE-AUD Auditor Specialty credential today, and watch for new credentials taught by guest instructors.
              </p>
            </div>
            <CTAButton size="md" onClick={() => go('academy')}>
              <span className="flex items-center gap-2">Explore the Academy <Icon name="arrow-right" size={16} /></span>
            </CTAButton>
          </div>
        </div>
      </section>

      {/* What is GRC engineering? */}
      <section className="bg-brand-dark-alt py-20 md:py-28">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-mono text-xs text-brand-text-dim">Definition</p>
          <h2 className="text-3xl md:text-4xl font-medium tracking-tight">What is GRC engineering?</h2>
          <p className="mt-6 text-base md:text-lg text-brand-text-muted leading-relaxed max-w-3xl">
            GRC engineering is the practice of building automated, scalable systems for governance, risk and compliance.
            It replaces manual checklists and spreadsheets with infrastructure as code, cloud-native tools and continuous
            monitoring. GRC engineers embed controls directly into the technology stack so organizations stay audit-ready
            by design, not by heroic last-minute effort.
          </p>
          <a className="mt-8 inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-light font-medium transition-colors duration-150 cursor-pointer">
            New here? Start with the free GRC Engineering 101 guide <Icon name="arrow-right" size={16} />
          </a>
        </div>
      </section>

      {/* What members get */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What members get" subtitle="Everything you need to move from compliance analyst to GRC engineer." centered={false} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-8">
            {HOME_BENEFITS.map((b) => (
              <div key={b.title}>
                <div className="text-brand-text-muted mb-3"><Icon name={b.icon} size={20} /></div>
                <h3 className="text-base font-medium mb-1.5">{b.title}</h3>
                <p className="text-brand-text-muted text-sm leading-relaxed">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What's inside */}
      <section className="bg-brand-dark-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="What's inside" subtitle="Six pillars for your skills, portfolio and career." centered={false} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {HOME_CONTENT_TYPES.map((ct) => (
              <ContentCard key={ct.title} icon={ct.icon} title={ct.title} description={ct.desc} />
            ))}
          </div>
        </div>
      </section>

      {/* Member wins */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Member wins" subtitle="Real people, real roles." centered={false} />
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <StoryCard quote="The club membership has been the biggest ROI I've ever had. Seeing everything that's happened since I got wind of the club last fall is wild." name="Dex Copeland" title="GRC Engineering Club member" />
            <StoryCard quote="I landed my first GRC role as GRC Program Analyst at Compyl. The work works. Put in the reps, stay consistent, and the results show up." name="James Robinson (J-R)" title="GRC Program Analyst at Compyl" />
            <StoryCard quote="A founder of a security company tagged his CISO on my NIST to AWS mapping project. Then the CISO reached out to me directly." name="Luigi Carpio" title="NIST to AWS mapping project recognized by a CISO" />
          </div>
          <div className="mt-10 text-center">
            <a onClick={() => go('stories')} className="inline-flex items-center gap-2 text-brand-orange hover:text-brand-orange-light font-medium transition-colors duration-150 cursor-pointer">
              See all member stories <Icon name="arrow-right" size={18} />
            </a>
          </div>
        </div>
      </section>

      {/* Popular on YouTube */}
      <section className="bg-brand-dark-alt py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Popular on YouTube" subtitle="Free videos on GRC engineering, careers and compliance automation." centered={false} />
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOME_VIDEOS.map((v) => (
              <a key={v.id} className="group relative rounded-xl overflow-hidden border border-brand-gray-light hover:border-brand-text-dim/40 transition-colors duration-150 cursor-pointer">
                <div className="relative">
                  <img src={`https://i.ytimg.com/vi/${v.id}/mqdefault.jpg`} alt="" className="w-full aspect-video object-cover" />
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-150">
                    <div className="w-12 h-12 rounded-full bg-brand-orange text-brand-dark flex items-center justify-center">
                      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5 ml-0.5"><path d="M8 5v14l11-7z" /></svg>
                    </div>
                  </div>
                </div>
                <div className="p-3 bg-brand-gray">
                  <span className="inline-block text-xs text-brand-text-dim bg-brand-gray-light/40 px-2 py-0.5 rounded mb-2 font-mono">{v.type}</span>
                  <p className="text-sm font-medium line-clamp-2">{v.title}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 md:py-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="mb-4 font-mono text-xs text-brand-text-dim">Membership</p>
          <h2 className="text-3xl md:text-5xl font-medium tracking-tight">Ready to build?</h2>
          <p className="mt-4 text-lg text-brand-text-muted max-w-2xl">
            A clear path forward and a crew to build it with. Stop scrolling, start engineering.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-x-4 gap-y-3">
            <CTAButton size="md" onClick={() => go('join')}>Join annual, $70 a year</CTAButton>
            <CTAButton variant="secondary" size="md" onClick={() => go('join')}>Join monthly, $9.99</CTAButton>
          </div>
          <p className="mt-4 text-sm text-brand-text-dim max-w-2xl">
            Annual saves $50. The monthly price is locked for life, cancel anytime.
          </p>
        </div>
      </section>
    </div>
  );
}

window.HomePage = HomePage;
