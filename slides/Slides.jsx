/* Slide templates for GRC Engineering Club — pulled from the course deck content.
   Retheme 2026-11-01 (unslop pass): one graphite ramp, Inter 400/500 only, mono meta,
   control-ID tags as the signature detail, orange used once per slide at most.
   Canvas is 1920x1080, so web sizes are scaled by ~1.33 (12px mono meta → 16px, 60px title → 64px). */

const { useState, useEffect } = React;

/* ============ Tokens ============ */
const ORANGE = '#E8650A';       // fills: the primary button, the one figure
const ORANGE_TEXT = '#FF8533';  // orange as text on dark
const PAGE = '#111110';
const PAGE_ALT = '#161514';
const CARD = '#1C1B19';
const RAISED = '#2B2925';       // raised surface, hairline, chip
const TEXT = '#EFE9DE';
const TEXT_2 = '#AAA398';
const META = '#8A847A';

const SANS = "'Inter', system-ui, sans-serif";
const MONO = "'JetBrains Mono', ui-monospace, 'SF Mono', Menlo, Consolas, monospace";
const TNUM = { fontVariantNumeric: 'tabular-nums' };

/* Type scale (canvas px) */
const T = {
  hero: { fontSize: 112, fontWeight: 500, lineHeight: 1.0, letterSpacing: '-0.03em', margin: 0, color: TEXT },
  title: { fontSize: 64, fontWeight: 500, lineHeight: 1.06, letterSpacing: '-0.03em', margin: 0, color: TEXT },
  lede: { fontSize: 24, fontWeight: 400, lineHeight: 1.5, color: TEXT_2 },
  cardTitle: { fontSize: 26, fontWeight: 500, lineHeight: 1.2, color: TEXT, margin: 0 },
  body: { fontSize: 18, fontWeight: 400, lineHeight: 1.55, color: TEXT_2 },
  mono: { fontFamily: MONO, fontSize: 16, fontWeight: 400, lineHeight: 1.4, color: META },
};

const slideRoot = (bg = PAGE) => ({
  width: '100%',
  height: '100%',
  background: bg,
  color: TEXT,
  fontFamily: SANS,
  padding: '72px 96px',
  boxSizing: 'border-box',
  display: 'flex',
  flexDirection: 'column',
  position: 'relative',
});

/* Eyebrow: small mono meta text, sentence case. Never uppercase, never orange. */
const Eyebrow = ({ children, style }) => (
  <div style={{ ...T.mono, marginBottom: 24, ...style }}>{children}</div>
);

/* Tag: the signature detail. Short mono text (AC-2, CM-6, D4, 01) in a 4px chip on the raised surface.
   Use where a control, domain, step number or code is named, and nowhere else. */
const Tag = ({ children, style }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', height: 28,
    padding: '0 10px', borderRadius: 4,
    background: RAISED, color: TEXT_2,
    fontFamily: MONO, fontSize: 15, fontWeight: 400, lineHeight: 1,
    ...TNUM, ...style,
  }}>{children}</span>
);

/* Chip: neutral text chip for a label that is not a code. Same recipe, 6px radius. */
const Chip = ({ children, style }) => (
  <span style={{
    display: 'inline-flex', alignItems: 'center', height: 32,
    padding: '0 12px', borderRadius: 6,
    background: RAISED, color: TEXT_2,
    fontSize: 15, fontWeight: 500, lineHeight: 1, ...style,
  }}>{children}</span>
);

const Icon = ({ name, size = 24, color = META, style }) => (
  <i data-lucide={name} strokeWidth="1.5" style={{ width: size, height: size, color, display: 'block', ...style }}></i>
);

const Wordmark = ({ size = 40 }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
    <img src="../assets/logo.jpeg" alt="" style={{ width: size, height: size, borderRadius: 8, objectFit: 'cover' }} />
    <span style={{ fontSize: 20, fontWeight: 500, color: TEXT }}>GRC Engineering Club</span>
  </div>
);

const FootChrome = ({ index, total }) => (
  <div style={{
    position: 'absolute', left: 96, right: 96, bottom: 40,
    display: 'flex', justifyContent: 'space-between', alignItems: 'center',
    ...T.mono, fontSize: 15,
  }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
      <img src="../assets/logo.jpeg" alt="" style={{ width: 24, height: 24, borderRadius: 4, objectFit: 'cover' }} />
      <span>GRC Engineering Club</span>
      <span style={{ color: RAISED }}>/</span>
      <span>grcengclub.com</span>
    </div>
    {typeof index === 'number' && (
      <div style={TNUM}>
        <span style={{ color: TEXT_2 }}>{String(index).padStart(2, '0')}</span>
        <span style={{ margin: '0 6px' }}>/</span>
        <span>{String(total).padStart(2, '0')}</span>
      </div>
    )}
  </div>
);

const card = (extra = {}) => ({
  background: CARD, border: `1px solid ${RAISED}`, borderRadius: 16,
  padding: 32, display: 'flex', flexDirection: 'column', boxSizing: 'border-box', ...extra,
});

/* The deck's product moment: the controls panel from a pipeline run, the kind members build in labs.
   Illustrative data, but each line is something the course teaches. Same object as the homepage hero. */
const CONTROLS = [
  ['AC-2', 'No orphaned IAM users', 'pass'],
  ['CM-6', 'Baseline tags on every resource', 'pass'],
  ['SC-7', 'No public ingress on 0.0.0.0/0', 'pass'],
  ['SC-28', 'S3 buckets encrypted at rest', 'pass'],
  ['SI-4', 'GuardDuty findings triaged', 'collecting'],
];
const ControlsPanel = ({ style }) => (
  <div style={{ ...card({ padding: 0 }), overflow: 'hidden', ...style }}>
    <div style={{
      display: 'flex', alignItems: 'center', gap: 16, height: 52, padding: '0 20px',
      borderBottom: `1px solid ${RAISED}`, ...T.mono, fontSize: 14,
    }}>
      <span style={{ display: 'flex', gap: 6 }}>
        {[0, 1, 2].map((k) => <i key={k} style={{ display: 'block', width: 10, height: 10, borderRadius: 9999, background: RAISED }} />)}
      </span>
      <span style={{ color: TEXT_2 }}>compliance-pipeline · run 412 · main</span>
      <span style={{ marginLeft: 'auto', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
        <i style={{ display: 'block', width: 7, height: 7, borderRadius: 9999, background: ORANGE }} />
        evidence stage
      </span>
    </div>
    <div style={{ padding: '8px 20px 12px' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '96px 1fr 120px', gap: 16, padding: '10px 0', borderBottom: `1px solid ${RAISED}`, ...T.mono, fontSize: 13 }}>
        <span>control</span><span>what it checks</span><span>status</span>
      </div>
      {CONTROLS.map(([id, name, status], i) => (
        <div key={id} style={{
          display: 'grid', gridTemplateColumns: '96px 1fr 120px', gap: 16, alignItems: 'center',
          height: 48, borderBottom: i < CONTROLS.length - 1 ? `1px solid ${RAISED}` : 'none',
        }}>
          <span><Tag style={{ height: 24, fontSize: 13, padding: '0 8px' }}>{id}</Tag></span>
          <span style={{ fontSize: 16, color: TEXT }}>{name}</span>
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: 8, ...T.mono, fontSize: 13, color: TEXT_2 }}>
            <i style={{ display: 'block', width: 7, height: 7, borderRadius: 9999, background: status === 'pass' ? '#4CC38A' : ORANGE }} />
            {status}
          </span>
        </div>
      ))}
    </div>
  </div>
);

/* ============ 1. Title slide ============ */
const TitleSlide = () => (
  <div style={{ ...slideRoot(PAGE), padding: '96px 120px' }} data-label="Title">
    <Wordmark size={44} />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 640px', gap: 96, alignItems: 'center' }}>
      <div>
        <Eyebrow>Certified GRC Engineer, Practitioner</Eyebrow>
        <h1 style={{ ...T.hero, fontSize: 112 }}>
          Welcome to<br />the course
        </h1>
        <p style={{ ...T.lede, fontSize: 26, marginTop: 32, maxWidth: 760 }}>
          From checkbox GRC to engineered systems. Build the skills, ship the proof, earn the cert.
        </p>
      </div>
      <ControlsPanel />
    </div>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div style={{ display: 'flex', gap: 64 }}>
        {[['Instructors', 'AJ Yawn · Abdie Mohamed'], ['Cohort', '2026'], ['Credential', 'CGE-P']].map(([k, v]) => (
          <div key={k}>
            <div style={{ ...T.mono, fontSize: 15, marginBottom: 8 }}>{k}</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: TEXT, ...TNUM }}>{v}</div>
          </div>
        ))}
      </div>
      <div style={{ ...T.mono, fontSize: 15 }}>grcengclub.com</div>
    </div>
  </div>
);

/* ============ 2. Section divider (chapter opener) ============ */
const SectionSlide = () => (
  <div style={{ ...slideRoot(PAGE_ALT), padding: '120px' }} data-label="Section — Chapter 01">
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <div style={{
        fontSize: 200, fontWeight: 500, lineHeight: 0.9, letterSpacing: '-0.04em',
        color: ORANGE_TEXT, marginBottom: 40, ...TNUM,
      }}>01</div>
      <Eyebrow style={{ marginBottom: 16 }}>Chapter 1 of 7</Eyebrow>
      <h1 style={T.hero}>Foundations</h1>
      <p style={{ ...T.lede, fontSize: 28, marginTop: 28, maxWidth: 1200 }}>
        Core GRC engineering concepts and the maturity model that separates teams doing the work from teams running audits.
      </p>
    </div>
    <FootChrome index={2} total={12} />
  </div>
);

/* ============ 3. Problem / three cards ============ */
const ProblemSlide = () => {
  const items = [
    ['Manual evidence collection', 'Teams spend hours gathering screenshots and exporting logs to prove controls are operating.'],
    ['Point-in-time assessments', 'Compliance is verified at a single moment, missing drift and changes between audit cycles.'],
    ['Documentation is not reality', 'What is documented in policies rarely reflects what is actually deployed and enforced.'],
  ];
  return (
    <div style={slideRoot(PAGE)} data-label="The GRC problem">
      <Eyebrow>The problem</Eyebrow>
      <h2 style={{ ...T.title, maxWidth: 1400 }}>Traditional GRC breaks in three predictable ways</h2>
      <p style={{ ...T.lede, marginTop: 20, maxWidth: 1100 }}>
        Every one of them is solved with engineering, not process.
      </p>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48, marginBottom: 56, alignContent: 'start' }}>
        {items.map(([title, body], i) => (
          <div key={i} style={card({ padding: 36, minHeight: 480 })}>
            <div><Tag>{String(i + 1).padStart(2, '0')}</Tag></div>
            <h3 style={{ ...T.cardTitle, fontSize: 30, marginTop: 40 }}>{title}</h3>
            <p style={{ ...T.body, fontSize: 20, marginTop: 14, marginBottom: 0 }}>{body}</p>
          </div>
        ))}
      </div>
      <FootChrome index={3} total={12} />
    </div>
  );
};

/* ============ 4. Approach / before → after ============ */
const ApproachSlide = () => {
  const rows = [
    ['Infrastructure as code', 'Compliance by default'],
    ['Policy as code', 'Automated enforcement'],
    ['CI/CD integration', 'Continuous evidence'],
  ];
  return (
    <div style={slideRoot(PAGE_ALT)} data-label="GRC engineering approach">
      <Eyebrow>The approach</Eyebrow>
      <h2 style={T.title}>GRC engineering</h2>
      <p style={{ ...T.lede, marginTop: 20, maxWidth: 1200 }}>
        Shift from manual documentation to automated, code-driven compliance. Every control has an owner, a pipeline, and a receipt.
      </p>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', gap: 16, marginTop: 40, marginBottom: 56 }}>
        {rows.map(([lhs, rhs], i) => (
          <div key={i} style={{
            display: 'grid', gridTemplateColumns: '1fr 64px 1fr', alignItems: 'center', gap: 24,
            background: CARD, border: `1px solid ${RAISED}`, borderRadius: 16,
            padding: '32px 40px',
          }}>
            <div style={{ fontSize: 32, fontWeight: 400, color: TEXT_2 }}>{lhs}</div>
            <Icon name="arrow-right" size={28} style={{ margin: '0 auto' }} />
            <div style={{ fontSize: 32, fontWeight: 500, color: TEXT }}>{rhs}</div>
          </div>
        ))}
      </div>
      <FootChrome index={4} total={12} />
    </div>
  );
};

/* ============ 5. Stat slide — one big figure ============ */
const StatSlide = () => (
  <div style={slideRoot(PAGE)} data-label="The stat">
    <Eyebrow>Proof</Eyebrow>
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', marginBottom: 56 }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 96, alignItems: 'center', width: '100%' }}>
        <div>
          <div style={{
            fontSize: 280, fontWeight: 500, color: ORANGE_TEXT,
            lineHeight: 0.9, letterSpacing: '-0.04em', ...TNUM,
          }}>
            $330<span style={{ fontSize: 140 }}>K</span>
          </div>
          <div style={{ ...T.mono, marginTop: 20 }}>Highest verified salary, 2026 cohort</div>
        </div>
        <div style={{ borderLeft: `1px solid ${RAISED}`, paddingLeft: 56 }}>
          <h2 style={{ ...T.title, fontSize: 56 }}>The work works</h2>
          <p style={{ ...T.lede, marginTop: 24 }}>
            424+ members. 70,000+ LinkedIn reach. Real cloud certs, real offers, real roles. Receipts, not promises.
          </p>
          <div style={{ display: 'flex', gap: 56, marginTop: 40 }}>
            {[['424+', 'Members'], ['72%', 'First-try pass'], ['60', 'Exam questions']].map(([n, l]) => (
              <div key={l}>
                <div style={{ fontSize: 48, fontWeight: 500, color: TEXT, letterSpacing: '-0.02em', ...TNUM }}>{n}</div>
                <div style={{ ...T.mono, fontSize: 15, marginTop: 6 }}>{l}</div>
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
  <div style={slideRoot(PAGE_ALT)} data-label="Member quote">
    <Eyebrow>Member quote</Eyebrow>
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center', maxWidth: 1500, marginBottom: 56 }}>
      <blockquote style={{
        fontSize: 64, fontWeight: 500, lineHeight: 1.2, letterSpacing: '-0.025em',
        color: TEXT, margin: 0, textWrap: 'pretty',
      }}>
        “The work works. Put in the reps, stay consistent, and the results show up. I'm living proof.”
      </blockquote>
      <div style={{ marginTop: 48, display: 'flex', alignItems: 'center', gap: 20 }}>
        <div style={{
          width: 64, height: 64, borderRadius: 9999, background: RAISED,
          display: 'flex', alignItems: 'center', justifyContent: 'center',
          fontSize: 20, fontWeight: 500, color: TEXT,
        }}>JR</div>
        <div>
          <div style={{ fontSize: 24, fontWeight: 500, color: TEXT }}>James Robinson (J-R)</div>
          <div style={{ ...T.mono, fontSize: 15, marginTop: 4 }}>GRC Program Analyst at Compyl · Jan 13, 2026</div>
        </div>
      </div>
    </div>
    <FootChrome index={6} total={12} />
  </div>
);

/* ============ 7. Certification / six stat cards ============ */
const CertificationSlide = () => {
  const items = [
    ['Chapters', '7', 'Comprehensive coverage of GRC engineering concepts'],
    ['Video', '~3 hrs', 'Short lessons designed to build understanding'],
    ['Study time', '6–8 hrs', 'Reading plus hands-on work'],
    ['Labs', 'Hands-on', 'Real-world experience reinforcing concepts'],
    ['Exam', '60 Q', 'Validate your knowledge across seven domains'],
    ['Portfolio', 'IaC', 'Ship a real compliance-as-code project'],
  ];
  return (
    <div style={slideRoot(PAGE)} data-label="CGE-P certification">
      <Eyebrow>Certification</Eyebrow>
      <h2 style={T.title}>What the CGE-P covers</h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginTop: 48, marginBottom: 56 }}>
        {items.map(([label, figure, desc], i) => (
          <div key={i} style={card({ padding: 28 })}>
            <div style={{ ...T.mono, fontSize: 15 }}>{label}</div>
            <div style={{ fontSize: 56, fontWeight: 500, color: TEXT, lineHeight: 1, letterSpacing: '-0.03em', marginTop: 'auto', ...TNUM }}>{figure}</div>
            <div style={{ ...T.body, fontSize: 17, marginTop: 12 }}>{desc}</div>
          </div>
        ))}
      </div>
      <FootChrome index={7} total={12} />
    </div>
  );
};

/* ============ 8. Course roadmap (numbered rows) ============ */
const RoadmapSlide = () => {
  const chapters = [
    ['01', 'Foundations', 'Core GRC engineering concepts and the maturity model'],
    ['02', 'Infrastructure as code', 'Terraform fundamentals and compliance as code'],
    ['03', 'Policy as code', 'OPA, Rego, automated policy enforcement'],
    ['04', 'CI/CD and evidence', 'Pipelines, evidence collection, chain of custody'],
    ['05', 'Cloud-native security', 'AWS services and continuous monitoring'],
    ['06', 'OSCAL and cATO', 'Machine-readable compliance and continuous ATO'],
    ['07', 'Capstone and exam', 'Build your portfolio, earn the cert'],
  ];
  return (
    <div style={slideRoot(PAGE_ALT)} data-label="Course roadmap">
      <Eyebrow>Course structure</Eyebrow>
      <h2 style={T.title}>Course roadmap</h2>
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', gap: 8, marginTop: 40, marginBottom: 56 }}>
        {chapters.map(([n, title, desc]) => (
          <div key={n} style={{
            display: 'grid', gridTemplateColumns: '80px 440px 1fr', alignItems: 'center', gap: 24,
            padding: '16px 24px', flex: 1,
            background: CARD, border: `1px solid ${RAISED}`, borderRadius: 12,
          }}>
            <div><Tag>{n}</Tag></div>
            <div style={{ fontSize: 24, fontWeight: 500, color: TEXT }}>{title}</div>
            <div style={{ ...T.body, lineHeight: 1.4 }}>{desc}</div>
          </div>
        ))}
      </div>
      <FootChrome index={8} total={12} />
    </div>
  );
};

/* ============ 9. Code sample slide ============ */
const CodeSlide = () => (
  <div style={slideRoot(PAGE)} data-label="Terraform example">
    <Eyebrow>Policy as code</Eyebrow>
    <h2 style={T.title}>Enforce it, don't document it</h2>
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 48, marginTop: 40, marginBottom: 56, alignItems: 'start' }}>
      <div style={{ ...card({ padding: 0 }), overflow: 'hidden' }}>
        <div style={{
          display: 'flex', alignItems: 'center', gap: 16, height: 56, padding: '0 24px',
          borderBottom: `1px solid ${RAISED}`, ...T.mono, fontSize: 15,
        }}>
          <span style={{ display: 'flex', gap: 6 }}>
            {[0, 1, 2].map((k) => <i key={k} style={{ display: 'block', width: 10, height: 10, borderRadius: 9999, background: RAISED }} />)}
          </span>
          <span style={{ color: TEXT_2 }}>s3-encryption.tf</span>
          <span style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
            <Tag>SC-28</Tag>
            <Tag>SC-13</Tag>
          </span>
        </div>
        <pre style={{
          margin: 0, padding: 28, whiteSpace: 'pre-wrap', fontFamily: MONO, background: 'transparent',
          fontSize: 19, lineHeight: 1.7, color: TEXT_2, fontWeight: 400,
        }}>{`resource "aws_s3_bucket" "evidence" {
  bucket = "grc-evidence-vault"
}

resource "aws_s3_bucket_server_side_encryption_configuration" "e" {
  bucket = aws_s3_bucket.evidence.id

  rule {
    apply_server_side_encryption_by_default {
      sse_algorithm = `}<span style={{ color: ORANGE_TEXT }}>"aws:kms"</span>{`
    }
    bucket_key_enabled = `}<span style={{ color: ORANGE_TEXT }}>true</span>{`
  }
}`}</pre>
      </div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: 36, paddingTop: 16 }}>
        {[
          ['01', 'The control', 'Encryption at rest for evidence storage'],
          ['02', 'The proof', 'Terraform plan and apply, then a signed state file'],
          ['03', 'The evidence', 'Posted to the compliance vault on every merge to main'],
        ].map(([n, k, v]) => (
          <div key={n} style={{ display: 'grid', gridTemplateColumns: '64px 1fr', gap: 20, alignItems: 'start' }}>
            <Tag>{n}</Tag>
            <div>
              <div style={{ ...T.mono, fontSize: 15 }}>{k}</div>
              <div style={{ fontSize: 26, fontWeight: 500, color: TEXT, marginTop: 6, lineHeight: 1.3 }}>{v}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <FootChrome index={9} total={12} />
  </div>
);

/* ============ 10. Comparison / old vs new ============ */
const ComparisonSlide = () => {
  const rows = [
    ['Evidence', 'Screenshots in a folder', 'API-pulled, hash-signed, timestamped'],
    ['Cadence', 'Once a year at audit time', 'Continuous, every merge to main'],
    ['Proof', 'PDFs and Word docs', 'Terraform state and OSCAL components'],
    ['Owner', 'GRC team in a silo', 'The engineers shipping the system'],
  ];
  const cols = { display: 'grid', gridTemplateColumns: '240px 1fr 1fr', gap: 32, alignItems: 'center' };
  return (
    <div style={slideRoot(PAGE)} data-label="Checkbox vs engineered">
      <Eyebrow>The shift</Eyebrow>
      <h2 style={T.title}>Checkbox vs engineered</h2>
      <div style={{ ...card({ padding: 0 }), flex: 1, marginTop: 40, marginBottom: 56, overflow: 'hidden' }}>
        <div style={{ ...cols, padding: '20px 32px', borderBottom: `1px solid ${RAISED}`, ...T.mono, fontSize: 15 }}>
          <div>Dimension</div>
          <div>Traditional GRC</div>
          <div style={{ color: ORANGE_TEXT }}>GRC engineering</div>
        </div>
        {rows.map(([dim, old, nu], i) => (
          <div key={dim} style={{
            ...cols, padding: '0 32px', flex: 1, minHeight: 96,
            borderBottom: i < rows.length - 1 ? `1px solid ${RAISED}` : 'none',
          }}>
            <div style={{ fontSize: 22, fontWeight: 500, color: TEXT }}>{dim}</div>
            <div style={{ fontSize: 22, color: TEXT_2, lineHeight: 1.4 }}>{old}</div>
            <div style={{ fontSize: 22, fontWeight: 500, color: TEXT, lineHeight: 1.4 }}>{nu}</div>
          </div>
        ))}
      </div>
      <FootChrome index={10} total={12} />
    </div>
  );
};

/* ============ 11. Three pillars ============ */
const PillarsSlide = () => {
  const pillars = [
    { icon: 'hammer', title: 'Automate', body: 'Infrastructure and policy as code. Controls ship with the system, not a spreadsheet.' },
    { icon: 'file-check-2', title: 'Evidence', body: 'Machine-verifiable receipts. OSCAL, signed artifacts, audit-ready by default.' },
    { icon: 'git-branch', title: 'Continuous', body: 'Every merge is an audit event. No more point-in-time theater.' },
  ];
  return (
    <div style={slideRoot(PAGE_ALT)} data-label="Three pillars">
      <Eyebrow>The framework</Eyebrow>
      <h2 style={T.title}>Three pillars of GRC engineering</h2>
      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 48, marginBottom: 56, alignContent: 'start' }}>
        {pillars.map((p, i) => (
          <div key={p.title} style={card({ padding: 36, minHeight: 480 })}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <Icon name={p.icon} size={28} color={TEXT_2} />
              <Tag>{String(i + 1).padStart(2, '0')}</Tag>
            </div>
            <h3 style={{ ...T.cardTitle, fontSize: 40, marginTop: 48, letterSpacing: '-0.02em' }}>{p.title}</h3>
            <p style={{ ...T.body, fontSize: 20, marginTop: 16, marginBottom: 0 }}>{p.body}</p>
          </div>
        ))}
      </div>
      <FootChrome index={11} total={12} />
    </div>
  );
};

/* ============ 12. Closer ============ */
const CloserSlide = () => (
  <div style={{ ...slideRoot(PAGE), padding: '96px 120px' }} data-label="Closer — ready to build">
    <Wordmark size={44} />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <Eyebrow>Ready to build</Eyebrow>
      <h1 style={{ ...T.hero, fontSize: 128 }}>
        Stop scrolling,<br />start engineering
      </h1>
      <p style={{ ...T.lede, fontSize: 28, marginTop: 36, maxWidth: 1100 }}>
        A clear path forward and a crew to build it with. Join the Club, ship the work, level up.
      </p>
      <div style={{ display: 'flex', gap: 16, marginTop: 48 }}>
        <div style={{
          height: 64, padding: '0 36px', display: 'inline-flex', alignItems: 'center', gap: 12,
          background: ORANGE, color: PAGE, fontSize: 22, fontWeight: 500, borderRadius: 10,
        }}>Join the Club <Icon name="arrow-right" size={22} color={PAGE} /></div>
        <div style={{
          height: 64, padding: '0 36px', display: 'inline-flex', alignItems: 'center',
          background: RAISED, border: `1px solid ${RAISED}`, color: TEXT,
          fontSize: 22, fontWeight: 500, borderRadius: 10, boxSizing: 'border-box',
        }}>grcengclub.com</div>
      </div>
    </div>
    <div style={{ ...T.mono, fontSize: 15 }}>
      From checkbox GRC to engineered systems · © 2026 GRC Engineering Club
    </div>
  </div>
);

Object.assign(window, {
  TitleSlide, SectionSlide, ProblemSlide, ApproachSlide, StatSlide, QuoteSlide,
  CertificationSlide, RoadmapSlide, CodeSlide, ComparisonSlide, PillarsSlide, CloserSlide,
});
