/* Slide templates for GRC Engineering Club — pulled from the course deck content */

const { useState, useEffect } = React;

/* ============ Shared primitives ============ */
const ORANGE = '#E8650A';
const ORANGE_LIGHT = '#FF8533';
const DARK = '#0D0D0D';
const DARK_ALT = '#1A1A1A';
const GRAY = '#2A2A2A';
const GRAY_LIGHT = '#3A3A3A';
const TEXT = '#F5F5F5';
const MUTED = '#A0A0A0';
const WHITE = '#FFFFFF';

const slideRoot = (bg = DARK) => ({
  width: '100%',
  height: '100%',
  background: bg,
  color: TEXT,
  fontFamily: "'Inter', system-ui, sans-serif",
  padding: '72px 96px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

const Eyebrow = ({ children, style }) => (
  <div style={{
    fontSize: 20, fontWeight: 700, color: ORANGE,
    textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 28, ...style,
  }}>{children}</div>
);

const FootChrome = ({ index, total }) => (
  <div style={{
    position: 'absolute', left: 96, right: 96, bottom: 40,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    fontSize: 16, color: MUTED, fontWeight: 500, letterSpacing: '0.02em',
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
      <img src="../assets/logo.jpeg" alt="" style={{ width: 28, height: 28, borderRadius: 6, objectFit: 'cover' }} />
      <span>GRC Engineering Club</span>
      <span style={{ opacity: 0.4 }}>/</span>
      <span>grcengclub.com</span>
    </div>
    {typeof index === 'number' && (
      <div style={{ fontVariantNumeric: 'tabular-nums' }}>
        <span style={{ color: TEXT, fontWeight: 700 }}>{String(index).padStart(2, '0')}</span>
        <span style={{ opacity: 0.4, margin: '0 6px' }}>/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    )}
  </div>
);

const Pill = ({ children, style }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', gap: 8,
    padding: '8px 16px', borderRadius: 9999,
    background: 'rgba(232,101,10,0.12)', color: ORANGE,
    fontWeight: 700, fontSize: 14, letterSpacing: '0.1em',
    textTransform: 'uppercase', ...style,
  }}>{children}</span>
);

/* ============ 1. Title slide ============ */
const TitleSlide = () => (
  <div style={{ ...slideRoot(DARK), padding: 0, overflow: 'hidden' }} data-label="Title">
    {/* subtle orange glow from upper-left */}
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(circle at 15% 20%, rgba(232,101,10,0.18) 0%, transparent 45%)`,
      pointerEvents: 'none',
    }} />
    {/* brand mark watermark */}
    <img src="../assets/brand-mark-orange.jpg" alt=""
      style={{
        position: 'absolute', right: -140, top: -60, width: 780, height: 780,
        objectFit: 'cover', borderRadius: 16, opacity: 0.35,
        maskImage: 'radial-gradient(circle at 40% 50%, black 30%, transparent 72%)',
        WebkitMaskImage: 'radial-gradient(circle at 40% 50%, black 30%, transparent 72%)',
      }} />
    <div style={{
      position: 'relative', zIndex: 1, padding: '100px 120px',
      display: 'flex', flexDirection: 'column', height: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src="../assets/logo.jpeg" alt="" style={{ width: 56, height: 56, borderRadius: 10 }} />
        <span style={{ fontSize: 20, fontWeight: 700, letterSpacing: '0.04em' }}>GRC ENGINEERING CLUB</span>
      </div>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1280 }}>
        <Eyebrow>Certified GRC Engineer — Practitioner</Eyebrow>
        <h1 style={{
          fontSize: 136, fontWeight: 900, lineHeight: 0.96, letterSpacing: '-0.03em',
          margin: 0, color: WHITE,
        }}>
          Welcome to <br/>
          <span style={{ color: ORANGE }}>the Course.</span>
        </h1>
        <p style={{ fontSize: 28, color: MUTED, marginTop: 40, maxWidth: 820, lineHeight: 1.5 }}>
          From checkbox GRC to engineered systems. Build the skills, ship the proof, earn the cert.
        </p>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
        <div style={{ display: 'flex', gap: 64 }}>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>Instructors</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: WHITE }}>AJ Yawn · Abdie Mohamed</div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>Cohort</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: WHITE }}>2026</div>
          </div>
          <div>
            <div style={{ fontSize: 13, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.15em', marginBottom: 10 }}>Credential</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: ORANGE }}>CGE-P</div>
          </div>
        </div>
        <div style={{ fontSize: 16, color: MUTED, fontWeight: 500 }}>grcengclub.com</div>
      </div>
    </div>
  </div>
);

/* ============ 2. Section divider (big chapter opener) ============ */
const SectionSlide = () => (
  <div style={{ ...slideRoot(DARK_ALT), padding: 0 }} data-label="Section — Chapter 01">
    <div style={{
      padding: '120px 120px',
      display: 'flex', flexDirection: 'column', justifyContent: 'center', height: '100%',
      borderLeft: `12px solid ${ORANGE}`,
    }}>
      <div style={{
        fontSize: 300, fontWeight: 900, lineHeight: 0.9,
        color: ORANGE, letterSpacing: '-0.05em', marginBottom: 30,
      }}>01</div>
      <Eyebrow style={{ fontSize: 22, marginBottom: 20 }}>Chapter One</Eyebrow>
      <h1 style={{ fontSize: 128, fontWeight: 900, lineHeight: 1, color: WHITE, margin: 0, letterSpacing: '-0.03em' }}>
        Foundations
      </h1>
      <p style={{ fontSize: 32, color: MUTED, marginTop: 36, maxWidth: 1200, lineHeight: 1.45 }}>
        Core GRC engineering concepts and the maturity model that separates teams doing the work from teams running audits.
      </p>
    </div>
    <FootChrome index={2} total={12} />
  </div>
);

/* ============ 3. Problem / Three-Column Content ============ */
const ProblemSlide = () => {
  const items = [
    {
      title: 'Manual evidence collection',
      body: 'Teams spend hours gathering screenshots and exporting logs to prove controls are operating.',
    },
    {
      title: 'Point-in-time assessments',
      body: 'Compliance is verified at a single moment, missing drift and changes between audit cycles.',
    },
    {
      title: 'Documentation ≠ reality',
      body: 'What is documented in policies rarely reflects what is actually deployed and enforced.',
    },
  ];
  return (
    <div style={slideRoot(DARK)} data-label="The GRC Problem">
      <Eyebrow>The Problem</Eyebrow>
      <h2 style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE, maxWidth: 1400 }}>
        The GRC Problem
      </h2>
      <p style={{ fontSize: 26, color: MUTED, marginTop: 24, maxWidth: 1100, lineHeight: 1.5 }}>
        Traditional GRC breaks in three predictable ways. Every one of them is solved with engineering, not process.
      </p>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 60 }}>
        {items.map((it, i) => (
          <div key={i} style={{
            background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16,
            padding: 40, display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              width: 64, height: 64, borderRadius: 9999,
              background: 'rgba(232,101,10,0.12)', color: ORANGE,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32, fontWeight: 900, marginBottom: 28,
            }}>{String(i + 1).padStart(2, '0')}</div>
            <h3 style={{ fontSize: 30, fontWeight: 800, color: WHITE, margin: 0, lineHeight: 1.15 }}>{it.title}</h3>
            <p style={{ fontSize: 20, color: MUTED, marginTop: 16, lineHeight: 1.55, flex: 1 }}>{it.body}</p>
          </div>
        ))}
      </div>
      <FootChrome index={3} total={12} />
    </div>
  );
};

/* ============ 4. Approach / Before → After comparison ============ */
const ApproachSlide = () => {
  const rows = [
    ['Infrastructure as Code', 'Compliance by Default'],
    ['Policy as Code', 'Automated Enforcement'],
    ['CI/CD Integration', 'Continuous Evidence'],
  ];
  return (
    <div style={slideRoot(DARK_ALT)} data-label="GRC Engineering Approach">
      <Eyebrow>The Approach</Eyebrow>
      <h2 style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
        GRC <span style={{ color: ORANGE }}>Engineering</span>
      </h2>
      <p style={{ fontSize: 26, color: MUTED, marginTop: 24, maxWidth: 1200, lineHeight: 1.5 }}>
        Shift from manual documentation to automated, code-driven compliance. Every control has an owner, a pipeline, and a receipt.
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 24, marginTop: 60 }}>
        {rows.map(([lhs, rhs], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 100px 1fr', alignItems: 'center', gap: 24,
            background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16,
            padding: '36px 48px',
          }}>
            <div style={{ fontSize: 36, fontWeight: 800, color: WHITE }}>{lhs}</div>
            <div style={{
              width: 80, height: 80, borderRadius: 9999, border: `2px solid ${ORANGE}`,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              color: ORANGE, fontSize: 36, fontWeight: 900,
            }}>→</div>
            <div style={{ fontSize: 36, fontWeight: 800, color: ORANGE }}>{rhs}</div>
          </div>
        ))}
      </div>
      <FootChrome index={4} total={12} />
    </div>
  );
};

/* ============ 5. Stat slide — big number hero ============ */
const StatSlide = () => (
  <div style={slideRoot(DARK)} data-label="The Stat">
    <Eyebrow>Proof</Eyebrow>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 100, alignItems: 'center', width: '100%' }}>
        <div>
          <div style={{
            fontSize: 380, fontWeight: 900, color: ORANGE,
            lineHeight: 0.85, letterSpacing: '-0.05em',
          }}>
            $330<span style={{ fontSize: 160 }}>K</span>
          </div>
          <div style={{ fontSize: 22, color: MUTED, fontWeight: 600, marginTop: 10, letterSpacing: '0.04em' }}>
            Highest verified salary · 2026 cohort
          </div>
        </div>
        <div style={{ borderLeft: `3px solid ${ORANGE}`, paddingLeft: 48 }}>
          <h2 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.02, color: WHITE, margin: 0, letterSpacing: '-0.025em' }}>
            The work <span style={{ color: ORANGE }}>works.</span>
          </h2>
          <p style={{ fontSize: 26, color: MUTED, marginTop: 32, lineHeight: 1.55 }}>
            424+ members. 70,000+ LinkedIn reach. Real cloud certs, real offers, real roles. Not promises — receipts.
          </p>
          <div style={{ display: 'flex', gap: 48, marginTop: 44 }}>
            {[['424+', 'members'], ['72%', 'first-try pass'], ['60', 'exam Qs']].map(([n, l]) => (
              <div key={n}>
                <div style={{ fontSize: 56, fontWeight: 900, color: WHITE, letterSpacing: '-0.02em' }}>{n}</div>
                <div style={{ fontSize: 14, color: MUTED, fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.12em', marginTop: 4 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <FootChrome index={5} total={12} />
  </div>
);

/* ============ 6. Quote slide ============ */
const QuoteSlide = () => (
  <div style={slideRoot(DARK_ALT)} data-label="Member Quote">
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1500 }}>
      <div style={{ fontSize: 240, fontWeight: 900, color: ORANGE, lineHeight: 0.7, marginBottom: -20, fontFamily: 'Georgia, serif' }}>"</div>
      <blockquote style={{
        fontSize: 68, fontWeight: 800, lineHeight: 1.18, letterSpacing: '-0.02em',
        color: WHITE, margin: 0, maxWidth: 1600, textWrap: 'pretty',
      }}>
        THE WORK WORKS. Put in the reps, stay consistent, and the results show up <span style={{ color: ORANGE }}>— I'm living proof.</span>
      </blockquote>
      <div style={{ marginTop: 60, display: 'flex', alignItems: 'center', gap: 24 }}>
        <div style={{
          width: 72, height: 72, borderRadius: 9999,
          background: `linear-gradient(135deg, ${ORANGE} 0%, ${ORANGE_LIGHT} 100%)`,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 28, fontWeight: 900, color: WHITE,
        }}>JR</div>
        <div>
          <div style={{ fontSize: 26, fontWeight: 800, color: WHITE }}>James Robinson (J-R)</div>
          <div style={{ fontSize: 18, color: MUTED, fontWeight: 500, marginTop: 4 }}>GRC Program Analyst at Compyl · Jan 13, 2026</div>
        </div>
      </div>
    </div>
    <FootChrome index={6} total={12} />
  </div>
);

/* ============ 7. Certification / Six-Card Grid ============ */
const CertificationSlide = () => {
  const items = [
    ['7', 'Chapters', 'Comprehensive coverage of GRC engineering concepts'],
    ['~3hrs', 'Video', 'Engaging content designed to build understanding'],
    ['6–8', 'Hours study', 'Thorough prep including reading + hands-on work'],
    ['Labs', 'Hands-on', 'Real-world experience reinforcing concepts'],
    ['60Q', 'Exam', 'Validate your knowledge across seven domains'],
    ['IaC', 'Portfolio', 'Ship a real compliance-as-code project'],
  ];
  return (
    <div style={slideRoot(DARK)} data-label="CGE-P Certification">
      <Eyebrow>Certification</Eyebrow>
      <h2 style={{ fontSize: 88, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
        CGE-P <span style={{ color: ORANGE }}>Certification</span>
      </h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
        {items.map(([big, label, desc], i) => (
          <div key={i} style={{
            background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16,
            padding: 32, display: 'flex', flexDirection: 'column', minHeight: 240,
          }}>
            <div style={{
              fontSize: 72, fontWeight: 900, color: ORANGE,
              lineHeight: 0.9, letterSpacing: '-0.03em',
            }}>{big}</div>
            <div style={{ fontSize: 22, fontWeight: 800, color: WHITE, marginTop: 10 }}>{label}</div>
            <div style={{ fontSize: 17, color: MUTED, lineHeight: 1.5, marginTop: 12, flex: 1 }}>{desc}</div>
          </div>
        ))}
      </div>
      <FootChrome index={7} total={12} />
    </div>
  );
};

/* ============ 8. Course Roadmap (numbered list) ============ */
const RoadmapSlide = () => {
  const chapters = [
    ['01', 'Foundations', 'Core GRC engineering concepts + maturity model'],
    ['02', 'Infrastructure as Code', 'Terraform fundamentals + compliance-as-code'],
    ['03', 'Policy as Code', 'OPA, Rego, automated policy enforcement'],
    ['04', 'CI/CD & Evidence', 'Pipelines, evidence collection, chain of custody'],
    ['05', 'Cloud-Native Security', 'AWS services + continuous monitoring'],
    ['06', 'OSCAL & cATO', 'Machine-readable compliance + continuous ATO'],
    ['07', 'Capstone & Exam', 'Build your portfolio, earn the cert'],
  ];
  return (
    <div style={slideRoot(DARK_ALT)} data-label="Course Roadmap">
      <Eyebrow>Course Structure</Eyebrow>
      <h2 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
        Course Roadmap
      </h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 12, marginTop: 44 }}>
        {chapters.map(([n, title, desc]) => (
          <div key={n} style={{
            display: 'grid', gridTemplateColumns: '120px 400px 1fr', alignItems: 'center', gap: 32,
            padding: '18px 32px',
            background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 12,
          }}>
            <div style={{ fontSize: 44, fontWeight: 900, color: ORANGE, letterSpacing: '-0.02em' }}>{n}</div>
            <div style={{ fontSize: 26, fontWeight: 800, color: WHITE }}>{title}</div>
            <div style={{ fontSize: 18, color: MUTED, lineHeight: 1.5 }}>{desc}</div>
          </div>
        ))}
      </div>
      <FootChrome index={8} total={12} />
    </div>
  );
};

/* ============ 9. Code sample slide ============ */
const CodeSlide = () => (
  <div style={slideRoot(DARK)} data-label="Terraform Example">
    <Eyebrow>Policy as Code</Eyebrow>
    <h2 style={{ fontSize: 72, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
      Enforce it. Don't document it.
    </h2>
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40, marginTop: 48 }}>
      <div style={{
        background: '#050505', border: `1px solid ${GRAY_LIGHT}`, borderRadius: 14,
        padding: 32, fontFamily: 'ui-monospace, "SF Mono", Menlo, monospace',
        fontSize: 18, lineHeight: 1.65, color: '#D8D8D8', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', gap: 8, marginBottom: 18 }}>
          <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#3A3A3A' }} />
          <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#3A3A3A' }} />
          <span style={{ width: 12, height: 12, borderRadius: 9999, background: '#3A3A3A' }} />
          <span style={{ marginLeft: 12, fontSize: 13, color: MUTED, fontFamily: "'Inter', sans-serif" }}>s3-encryption.tf</span>
        </div>
<pre style={{ margin: 0, whiteSpace: 'pre-wrap', fontFamily: 'inherit' }}>{`resource "aws_s3_bucket" "evidence" {
  bucket = "grc-evidence-vault"
}

resource "aws_s3_bucket_server_side_`}<span style={{ color: ORANGE }}>encryption</span>{`_configuration" "e" {
  bucket = aws_s3_bucket.evidence.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = "`}<span style={{ color: ORANGE_LIGHT }}>aws:kms</span>{`"
    }
    bucket_key_enabled = `}<span style={{ color: ORANGE_LIGHT }}>true</span>{`
  }
}`}</pre>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        {[
          ['The control', 'Encryption at rest for evidence storage'],
          ['The proof', 'Terraform plan + apply → signed state file'],
          ['The evidence', 'Auto-posted to the compliance vault on CI merge'],
        ].map(([k, v], i) => (
          <div key={i} style={{ display: 'flex', gap: 20, alignItems: 'flex-start', marginBottom: 28 }}>
            <div style={{
              width: 44, height: 44, borderRadius: 9999,
              background: 'rgba(232,101,10,0.12)', color: ORANGE,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 18, fontWeight: 900, flexShrink: 0,
            }}>{i + 1}</div>
            <div>
              <div style={{ fontSize: 13, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.15em' }}>{k}</div>
              <div style={{ fontSize: 26, fontWeight: 700, color: WHITE, marginTop: 4, lineHeight: 1.3 }}>{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <FootChrome index={9} total={12} />
  </div>
);

/* ============ 10. Comparison / Old vs New ============ */
const ComparisonSlide = () => {
  const rows = [
    ['Evidence', 'Screenshots in a folder', 'API-pulled, hash-signed, timestamped'],
    ['Cadence', 'Once a year at audit time', 'Continuous, every merge to main'],
    ['Proof', 'PDFs and Word docs', 'Terraform state + OSCAL components'],
    ['Owner', 'GRC team in a silo', 'The engineers shipping the system'],
  ];
  return (
    <div style={slideRoot(DARK)} data-label="Checkbox vs Engineered">
      <Eyebrow>The Shift</Eyebrow>
      <h2 style={{ fontSize: 80, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
        Checkbox vs <span style={{ color: ORANGE }}>Engineered.</span>
      </h2>
      <div style={{
        flex: 1, marginTop: 48,
        background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 16,
        overflow: 'hidden',
      }}>
        <div style={{
          display: 'grid', gridTemplateColumns: '240px 1fr 1fr',
          padding: '20px 32px', background: DARK_ALT,
          borderBottom: `1px solid ${GRAY_LIGHT}`,
        }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Dimension</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: MUTED, textTransform: 'uppercase', letterSpacing: '0.12em' }}>Traditional GRC</div>
          <div style={{ fontSize: 14, fontWeight: 700, color: ORANGE, textTransform: 'uppercase', letterSpacing: '0.12em' }}>GRC Engineering</div>
        </div>
        {rows.map(([dim, old, nu], i) => (
          <div key={dim} style={{
            display: 'grid', gridTemplateColumns: '240px 1fr 1fr',
            alignItems: 'center', padding: '28px 32px',
            borderBottom: i < rows.length - 1 ? `1px solid ${GRAY_LIGHT}` : 'none',
          }}>
            <div style={{ fontSize: 22, fontWeight: 800, color: WHITE }}>{dim}</div>
            <div style={{ fontSize: 20, color: MUTED, lineHeight: 1.4 }}>{old}</div>
            <div style={{ fontSize: 22, fontWeight: 700, color: WHITE, lineHeight: 1.35 }}>{nu}</div>
          </div>
        ))}
      </div>
      <FootChrome index={10} total={12} />
    </div>
  );
};

/* ============ 11. Three Pillars (large icon wells) ============ */
const PillarsSlide = () => {
  const pillars = [
    { icon: 'hammer', title: 'Automate', body: 'Infrastructure and policy as code. Controls ship with the system, not a spreadsheet.' },
    { icon: 'file-check-2', title: 'Evidence', body: 'Machine-verifiable receipts. OSCAL, signed artifacts, audit-ready by default.' },
    { icon: 'git-branch', title: 'Continuous', body: 'Every merge is an audit event. No more point-in-time theater.' },
  ];
  return (
    <div style={slideRoot(DARK_ALT)} data-label="Three Pillars">
      <Eyebrow>The Framework</Eyebrow>
      <h2 style={{ fontSize: 84, fontWeight: 900, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, color: WHITE }}>
        Three <span style={{ color: ORANGE }}>Pillars</span> of GRC Engineering
      </h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, marginTop: 70 }}>
        {pillars.map((p, i) => (
          <div key={p.title} style={{
            background: GRAY, border: `1px solid ${GRAY_LIGHT}`, borderRadius: 20,
            padding: '48px 40px', display: 'flex', flexDirection: 'column',
          }}>
            <div style={{
              width: 96, height: 96, borderRadius: 9999,
              background: 'rgba(232,101,10,0.12)', color: ORANGE,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              marginBottom: 36,
            }}>
              <i data-lucide={p.icon} style={{ width: 44, height: 44 }}></i>
            </div>
            <div style={{ fontSize: 16, fontWeight: 700, color: ORANGE, letterSpacing: '0.2em', textTransform: 'uppercase', marginBottom: 8 }}>
              Pillar {String(i + 1).padStart(2, '0')}
            </div>
            <h3 style={{ fontSize: 44, fontWeight: 900, color: WHITE, margin: '0 0 20px', letterSpacing: '-0.02em' }}>{p.title}</h3>
            <p style={{ fontSize: 20, color: MUTED, lineHeight: 1.55, flex: 1, margin: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>
      <FootChrome index={11} total={12} />
    </div>
  );
};

/* ============ 12. Closer — big CTA ============ */
const CloserSlide = () => (
  <div style={{ ...slideRoot(DARK), padding: 0, overflow: 'hidden' }} data-label="Closer — Ready to Build">
    <div style={{
      position: 'absolute', inset: 0,
      background: `radial-gradient(ellipse at 50% 100%, rgba(232,101,10,0.22) 0%, transparent 60%)`,
    }} />
    <div style={{
      position: 'relative', zIndex: 1, padding: '120px',
      display: 'flex', flexDirection: 'column', justifyContent: 'space-between', height: '100%',
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 18 }}>
        <img src="../assets/logo.jpeg" alt="" style={{ width: 48, height: 48, borderRadius: 10 }} />
        <span style={{ fontSize: 18, fontWeight: 700, letterSpacing: '0.04em' }}>GRC ENGINEERING CLUB</span>
      </div>
      <div>
        <Eyebrow style={{ fontSize: 22 }}>Ready to Build?</Eyebrow>
        <h1 style={{
          fontSize: 180, fontWeight: 900, lineHeight: 0.92, letterSpacing: '-0.04em',
          margin: 0, color: WHITE,
        }}>
          Stop scrolling.<br/>
          <span style={{ color: ORANGE }}>Start engineering.</span>
        </h1>
        <p style={{ fontSize: 28, color: MUTED, marginTop: 40, maxWidth: 1200, lineHeight: 1.45 }}>
          Clear path forward and a crew to build it with. Join the Club, ship the work, level up.
        </p>
        <div style={{ display: 'flex', gap: 20, marginTop: 60 }}>
          <div style={{
            padding: '24px 44px', background: ORANGE, color: WHITE,
            fontSize: 24, fontWeight: 800, borderRadius: 12,
            boxShadow: '0 16px 40px rgba(232,101,10,0.4)',
          }}>Join the Club →</div>
          <div style={{
            padding: '24px 44px', border: `2px solid ${ORANGE}`, color: ORANGE,
            fontSize: 24, fontWeight: 800, borderRadius: 12,
          }}>grcengclub.com</div>
        </div>
      </div>
      <div style={{ fontSize: 16, color: MUTED, fontWeight: 500, letterSpacing: '0.04em' }}>
        From checkbox GRC to engineered systems · © 2026 GRC Engineering Club
      </div>
    </div>
  </div>
);

Object.assign(window, {
  TitleSlide, SectionSlide, ProblemSlide, ApproachSlide, StatSlide, QuoteSlide,
  CertificationSlide, RoadmapSlide, CodeSlide, ComparisonSlide, PillarsSlide, CloserSlide,
});
