/*
  GRC Engineering Club — white-background PowerPoint template builder.

  Produces, next to this file:
    GRC-Engineering-Club_Slides-Light.pptx  (12 sample slides on 5 brand layouts)
    GRC-Engineering-Club_Slides-Light.potx  (same deck as a PowerPoint template)

  Run:  npm install && npm run build
  The 12 slides mirror ../Slides.jsx (the dark HTML set) one for one.

  Retheme 2026-11-01 (unslop pass): one neutral ramp, Inter regular only (pptxgenjs has no weight 500,
  so hierarchy is size and color), Consolas for meta and tags, control-ID tags as the signature detail,
  orange used once per slide at most, no shadows, no wells, no tracking on labels.
*/
const path = require("path");
const fs = require("fs");
const pptxgen = require("pptxgenjs");
const sharp = require("sharp");
const React = require("react");
const { renderToStaticMarkup } = require("react-dom/server");
const Lu = require("react-icons/lu");
const { applyTheme } = require("./apply_theme.js");

const OUT = path.join(__dirname, "GRC-Engineering-Club_Slides-Light.pptx");
const LOGO = path.join(__dirname, "..", "..", "assets", "logo.jpeg");

/* ---------- Theme: light tokens (see ../../colors_and_type.css, .grc-light) ---------- */
const THEME = {
  name: "GRC Engineering Club Light",
  headFontFace: "Inter",
  bodyFontFace: "Inter",
  colors: {
    dk1: "171717", // text1  — headings
    lt1: "FFFFFF", // bg1    — page
    dk2: "525252", // text2  — body
    lt2: "F5F5F5", // bg2    — alt section, secondary button
    accent1: "E8650A", // brand orange: the one figure, the primary button
    accent2: "C45200", // orange as text on white (AA contrast)
    accent3: "737373", // meta text, icons
    accent4: "EFEFEF", // neutral chip / tag surface
    accent5: "E5E5E5", // borders, hairlines
    accent6: "111110", // dark text on the orange button
    hlink: "C45200",
    folHlink: "C45200",
  },
};

const pres = new pptxgen();
pres.layout = "LAYOUT_WIDE"; // 13.333 x 7.5
pres.theme = { headFontFace: THEME.headFontFace, bodyFontFace: THEME.bodyFontFace };
pres.author = "GRC Engineering Club";
pres.company = "GRC Engineering Club";
pres.title = "GRC Engineering Club — Light Slide Templates";
const C = pres.SchemeColor;
const W = 13.333, H = 7.5, MX = 0.7, CW = W - MX * 2;
const HEX = THEME.colors;
const MONO = "Consolas";
const PASS = "4CC38A"; // toned green for a passing status dot (semantic only)

/* ---------- Lucide icons → PNG (meta color, 1.5 stroke, no wells) ---------- */
async function icon(name, color = "#737373") {
  const Cmp = Lu[name];
  if (!Cmp) throw new Error(`No Lucide icon ${name}`);
  const svg = renderToStaticMarkup(React.createElement(Cmp, { size: 256, color, strokeWidth: 1.5 }));
  const buf = await sharp(Buffer.from(svg)).png().toBuffer();
  return "image/png;base64," + buf.toString("base64");
}

/* ---------- Shared pieces ---------- */
// Eyebrow: small mono meta text, sentence case. Never uppercase, never tracked, never orange.
const eyebrowOpts = (extra = {}) => ({
  fontSize: 11, fontFace: MONO, color: C.accent3, margin: 0, valign: "top", ...extra,
});
const monoOpts = (extra = {}) => ({ fontFace: MONO, color: C.accent3, margin: 0, ...extra });
const footerObjects = () => [
  { image: { x: MX, y: 6.95, w: 0.26, h: 0.26, path: LOGO, rounding: false } },
  { text: { text: "GRC Engineering Club   /   grcengclub.com",
    options: { x: MX + 0.36, y: 6.95, w: 6, h: 0.26, fontSize: 9, ...monoOpts({ valign: "middle" }) } } },
];
const slideNumber = { x: W - MX - 1.0, y: 6.95, w: 1.0, h: 0.26, fontSize: 9, fontFace: MONO, color: HEX.accent3, align: "right", margin: 0 };
const wordmark = () => [
  { image: { x: MX, y: 0.6, w: 0.44, h: 0.44, path: LOGO } },
  { text: { text: "GRC Engineering Club", options: { x: MX + 0.58, y: 0.6, w: 5, h: 0.44, fontSize: 12, color: C.text1, margin: 0, valign: "middle" } } },
];

function card(slide, x, y, w, h, opts = {}) {
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.12,
    fill: { color: opts.fill || C.background1 },
    line: { color: C.accent5, width: 1 },
    objectName: opts.name || "Card",
  });
}
function text(slide, t, o) {
  slide.addText(t, { isTextBox: true, margin: 0, ...o });
}
// Tag: the signature detail. Short mono text (AC-2, CM-6, 01) in a small 4px-radius chip on the neutral chip surface.
// Use where a control, domain, step number or code is named, and nowhere else.
function tag(slide, x, y, t, opts = {}) {
  const h = 0.24, w = opts.w || 0.2 + t.length * 0.085;
  slide.addShape(pres.ShapeType.roundRect, {
    x, y, w, h, rectRadius: 0.04,
    fill: { color: C.accent4 }, line: { color: C.accent4, width: 0 },
    objectName: opts.name ? `${opts.name} chip` : "Tag chip",
  });
  text(slide, t, { x, y, w, h, fontSize: 10, fontFace: MONO, color: C.text2, align: "center", valign: "middle", objectName: opts.name || "Tag" });
  return w;
}
function dot(slide, cx, cy, color, name) {
  const d = 0.08;
  slide.addShape(pres.ShapeType.ellipse, { x: cx - d / 2, y: cy - d / 2, w: d, h: d, fill: { color }, line: { color, width: 0 }, objectName: name || "Status dot" });
}
function hairline(slide, x, y, w, name) {
  slide.addShape(pres.ShapeType.line, { x, y, w, h: 0, line: { color: C.accent5, width: 0.75 }, objectName: name || "Hairline" });
}

/* The deck's product moment: the controls panel from a pipeline run (same object as the homepage hero). */
const CONTROLS = [
  ["AC-2", "No orphaned IAM users", "pass"],
  ["CM-6", "Baseline tags on every resource", "pass"],
  ["SC-7", "No public ingress on 0.0.0.0/0", "pass"],
  ["SC-28", "S3 buckets encrypted at rest", "pass"],
  ["SI-4", "GuardDuty findings triaged", "collecting"],
];
function controlsPanel(slide, x, y, w) {
  const head = 0.42, pad = 0.2, colHead = 0.3, rowH = 0.4;
  const h = head + 0.08 + colHead + CONTROLS.length * rowH + 0.1;
  card(slide, x, y, w, h, { name: "Controls panel" });
  hairline(slide, x, y + head, w, "Panel header rule");
  [0, 1, 2].forEach((k) => dot(slide, x + pad + 0.06 + k * 0.12, y + head / 2, HEX.accent5, `Window dot ${k + 1}`));
  text(slide, "compliance-pipeline · run 412 · main", { x: x + pad + 0.5, y, w: 3.2, h: head, fontSize: 9, ...monoOpts({ color: C.text2, valign: "middle" }), objectName: "Panel title" });
  dot(slide, x + w - pad - 0.95, y + head / 2, HEX.accent1, "Stage dot");
  text(slide, "evidence stage", { x: x + w - pad - 0.85, y, w: 0.85, h: head, fontSize: 9, ...monoOpts({ valign: "middle" }), objectName: "Panel stage" });
  const cx = [x + pad, x + pad + 0.8, x + w - pad - 0.9];
  const cy = y + head + 0.08;
  ["control", "what it checks", "status"].forEach((t, i) => text(slide, t, { x: cx[i], y: cy, w: 1.5, h: colHead, fontSize: 8, ...monoOpts({ valign: "middle" }), objectName: `Column ${i + 1}` }));
  hairline(slide, x + pad, cy + colHead, w - pad * 2, "Column rule");
  CONTROLS.forEach(([id, name, status], i) => {
    const ry = cy + colHead + i * rowH;
    tag(slide, cx[0], ry + (rowH - 0.24) / 2, id, { name: `Control ${id}` });
    text(slide, name, { x: cx[1], y: ry, w: cx[2] - cx[1] - 0.1, h: rowH, fontSize: 10, color: C.text1, valign: "middle", objectName: `Check ${i + 1}` });
    dot(slide, cx[2] + 0.04, ry + rowH / 2, status === "pass" ? PASS : HEX.accent1, `Status dot ${i + 1}`);
    text(slide, status, { x: cx[2] + 0.14, y: ry, w: 0.8, h: rowH, fontSize: 8, ...monoOpts({ color: C.text2, valign: "middle" }), objectName: `Status ${i + 1}` });
    if (i < CONTROLS.length - 1) hairline(slide, x + pad, ry + rowH, w - pad * 2, `Row rule ${i + 1}`);
  });
  return h;
}

/* ---------- Layouts ---------- */
async function defineLayouts() {
  // Title layout: wordmark, eyebrow/title/subtitle placeholders on the left, calm space on the right for the product moment.
  pres.defineSlideMaster({
    title: "TITLE_LIGHT",
    background: { color: HEX.lt1 },
    objects: [
      ...wordmark(),
      { placeholder: { options: { name: "eyebrow", type: "body", x: MX, y: 2.0, w: 6.8, h: 0.35, ...eyebrowOpts() }, text: "Eyebrow" } },
      { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.4, w: 6.8, h: 2.2, fontSize: 54, color: C.text1, margin: 0, valign: "top", charSpacing: -2, lineSpacingMultiple: 0.95 }, text: "Deck title" } },
      { placeholder: { options: { name: "body", type: "body", x: MX, y: 4.7, w: 6.4, h: 1.0, fontSize: 18, color: C.text2, margin: 0, valign: "top" }, text: "Subtitle" } },
      { text: { text: "grcengclub.com", options: { x: W - MX - 3, y: 6.85, w: 3, h: 0.3, fontSize: 10, ...monoOpts({ align: "right" }) } } },
    ],
  });

  // Section divider: light-gray page, one big chapter number (the slide's one bright element).
  pres.defineSlideMaster({
    title: "SECTION_LIGHT",
    background: { color: HEX.lt2 },
    objects: [
      { placeholder: { options: { name: "number", type: "body", x: MX, y: 1.0, w: 7, h: 2.2, fontSize: 150, color: C.accent1, margin: 0, valign: "top", charSpacing: -6 }, text: "01" } },
      { placeholder: { options: { name: "eyebrow", type: "body", x: MX, y: 3.35, w: 8, h: 0.35, ...eyebrowOpts() }, text: "Eyebrow" } },
      { placeholder: { options: { name: "title", type: "title", x: MX, y: 3.75, w: 11.5, h: 1.3, fontSize: 54, color: C.text1, margin: 0, valign: "top", charSpacing: -2 }, text: "Section title" } },
      { placeholder: { options: { name: "body", type: "body", x: MX, y: 5.15, w: 10.5, h: 1.2, fontSize: 18, color: C.text2, margin: 0, valign: "top" }, text: "Section summary" } },
      ...footerObjects(),
    ],
    slideNumber,
  });

  // Content layouts: eyebrow + title at the top, footer chrome. White and light-gray variants alternate.
  for (const [name, bg] of [["CONTENT_LIGHT", HEX.lt1], ["CONTENT_ALT_LIGHT", HEX.lt2]]) {
    pres.defineSlideMaster({
      title: name,
      background: { color: bg },
      objects: [
        { placeholder: { options: { name: "eyebrow", type: "body", x: MX, y: 0.55, w: 8, h: 0.3, ...eyebrowOpts() }, text: "Eyebrow" } },
        { placeholder: { options: { name: "title", type: "title", x: MX, y: 0.9, w: CW, h: 0.9, fontSize: 36, color: C.text1, margin: 0, valign: "top", charSpacing: -1 }, text: "Slide title" } },
        ...footerObjects(),
      ],
      slideNumber,
    });
  }

  // Closer: white page, wordmark, closing line and two actions. No glow.
  pres.defineSlideMaster({
    title: "CLOSER_LIGHT",
    background: { color: HEX.lt1 },
    objects: [
      ...wordmark(),
      { placeholder: { options: { name: "eyebrow", type: "body", x: MX, y: 1.85, w: 8, h: 0.35, ...eyebrowOpts() }, text: "Eyebrow" } },
      { placeholder: { options: { name: "title", type: "title", x: MX, y: 2.25, w: 11.8, h: 2.3, fontSize: 60, color: C.text1, margin: 0, valign: "top", charSpacing: -2, lineSpacingMultiple: 0.95 }, text: "Closing line" } },
      { placeholder: { options: { name: "body", type: "body", x: MX, y: 4.65, w: 9, h: 0.8, fontSize: 18, color: C.text2, margin: 0, valign: "top" }, text: "Supporting line" } },
      { text: { text: "From checkbox GRC to engineered systems  ·  © 2026 GRC Engineering Club", options: { x: MX, y: 6.85, w: 9, h: 0.3, fontSize: 9, ...monoOpts() } } },
    ],
  });
}

/* ---------- Slides (mirror ../Slides.jsx) ---------- */
async function buildSlides() {
  const TOP = 2.15; // first content row on CONTENT layouts
  const BOTTOM = 6.7;

  /* 1. Title */
  pres.addSection({ title: "Open" });
  let s = pres.addSlide({ masterName: "TITLE_LIGHT", sectionTitle: "Open" });
  s.addText("Certified GRC Engineer, Practitioner", { placeholder: "eyebrow" });
  s.addText([{ text: "Welcome to", options: { breakLine: true } }, { text: "the course" }], { placeholder: "title" });
  s.addText("From checkbox GRC to engineered systems. Build the skills, ship the proof, earn the cert.", { placeholder: "body" });
  controlsPanel(s, 8.1, 2.2, W - MX - 8.1);
  [["Instructors", "AJ Yawn · Abdie Mohamed"], ["Cohort", "2026"], ["Credential", "CGE-P"]].forEach(([k, v], i) => {
    const x = MX + i * 2.9;
    text(s, k, { x, y: 6.05, w: 2.7, h: 0.25, fontSize: 9, ...monoOpts(), objectName: `Meta label ${i + 1}` });
    text(s, v, { x, y: 6.3, w: 2.7, h: 0.35, fontSize: 14, color: C.text1, objectName: `Meta value ${i + 1}` });
  });
  s.addNotes("Title layout. Swap the eyebrow, title, subtitle and the three meta columns. The controls panel is the deck's product moment; keep it or replace it with one real object from your talk.");

  /* 2. Section */
  pres.addSection({ title: "Chapter 01" });
  s = pres.addSlide({ masterName: "SECTION_LIGHT", sectionTitle: "Chapter 01" });
  s.addText("01", { placeholder: "number" });
  s.addText("Chapter 1 of 7", { placeholder: "eyebrow" });
  s.addText("Foundations", { placeholder: "title" });
  s.addText("Core GRC engineering concepts and the maturity model that separates teams doing the work from teams running audits.", { placeholder: "body" });

  /* 3. Problem — three cards */
  s = pres.addSlide({ masterName: "CONTENT_LIGHT", sectionTitle: "Chapter 01" });
  s.addText("The problem", { placeholder: "eyebrow" });
  s.addText("Traditional GRC breaks in three predictable ways", { placeholder: "title" });
  text(s, "Every one of them is solved with engineering, not process.", { x: MX, y: 1.75, w: 9.5, h: 0.5, fontSize: 15, color: C.text2, objectName: "Lede" });
  const problems = [
    ["Manual evidence collection", "Teams spend hours gathering screenshots and exporting logs to prove controls are operating."],
    ["Point-in-time assessments", "Compliance is verified at a single moment, missing drift and changes between audit cycles."],
    ["Documentation is not reality", "What is documented in policies rarely reflects what is actually deployed and enforced."],
  ];
  {
    const gap = 0.3, cw = (CW - gap * 2) / 3, y = 2.5, h = 3.4;
    problems.forEach(([t, b], i) => {
      const x = MX + i * (cw + gap);
      card(s, x, y, cw, h, { fill: C.background2, name: `Problem card ${i + 1}` });
      tag(s, x + 0.4, y + 0.4, String(i + 1).padStart(2, "0"), { name: `Problem number ${i + 1}` });
      text(s, t, { x: x + 0.4, y: y + 1.0, w: cw - 0.8, h: 0.7, fontSize: 18, color: C.text1, valign: "top", objectName: `Problem title ${i + 1}` });
      text(s, b, { x: x + 0.4, y: y + 1.7, w: cw - 0.8, h: h - 2.1, fontSize: 14, color: C.text2, valign: "top", objectName: `Problem body ${i + 1}` });
    });
  }

  /* 4. Approach — before → after rows */
  s = pres.addSlide({ masterName: "CONTENT_ALT_LIGHT", sectionTitle: "Chapter 01" });
  s.addText("The approach", { placeholder: "eyebrow" });
  s.addText("GRC engineering", { placeholder: "title" });
  text(s, "Shift from manual documentation to automated, code-driven compliance. Every control has an owner, a pipeline, and a receipt.", { x: MX, y: 1.75, w: 10, h: 0.5, fontSize: 15, color: C.text2, objectName: "Lede" });
  const arrow = await icon("LuArrowRight");
  [["Infrastructure as code", "Compliance by default"], ["Policy as code", "Automated enforcement"], ["CI/CD integration", "Continuous evidence"]].forEach(([l, r], i) => {
    const h = 1.0, gap = 0.25, y = 2.6 + i * (h + gap);
    card(s, MX, y, CW, h, { name: `Approach row ${i + 1}` });
    text(s, l, { x: MX + 0.5, y, w: 5.0, h, fontSize: 20, color: C.text2, valign: "middle", objectName: `Before ${i + 1}` });
    s.addImage({ data: arrow, x: W / 2 - 0.15, y: y + h / 2 - 0.15, w: 0.3, h: 0.3, objectName: `Arrow ${i + 1}` });
    text(s, r, { x: W / 2 + 0.6, y, w: 5.0, h, fontSize: 20, color: C.text1, valign: "middle", objectName: `After ${i + 1}` });
  });

  /* 5. Stat */
  pres.addSection({ title: "Proof" });
  s = pres.addSlide({ masterName: "CONTENT_LIGHT", sectionTitle: "Proof" });
  s.addText("Proof", { placeholder: "eyebrow" });
  s.addText("The numbers", { placeholder: "title" });
  s.addText([{ text: "$330", options: { fontSize: 120 } }, { text: "K", options: { fontSize: 64 } }], { isTextBox: true, x: MX, y: 2.4, w: 6.2, h: 1.9, color: C.accent1, margin: 0, charSpacing: -4, valign: "bottom", objectName: "Hero stat" });
  text(s, "Highest verified salary, 2026 cohort", { x: MX, y: 4.45, w: 6, h: 0.3, fontSize: 10, ...monoOpts(), objectName: "Hero stat label" });
  const rx = 7.3, rw = W - MX - rx;
  s.addShape(pres.ShapeType.line, { x: rx - 0.4, y: 2.4, w: 0, h: 3.2, line: { color: C.accent5, width: 0.75 }, objectName: "Stat divider" });
  text(s, "The work works", { x: rx, y: 2.4, w: rw, h: 0.8, fontSize: 36, color: C.text1, charSpacing: -1, objectName: "Stat headline" });
  text(s, "424+ members. 70,000+ LinkedIn reach. Real cloud certs, real offers, real roles. Receipts, not promises.", { x: rx, y: 3.3, w: rw, h: 1.0, fontSize: 15, color: C.text2, valign: "top", objectName: "Stat body" });
  [["424+", "Members"], ["72%", "First-try pass"], ["60", "Exam questions"]].forEach(([n, l], i) => {
    const x = rx + i * 1.9;
    text(s, n, { x, y: 4.6, w: 1.8, h: 0.6, fontSize: 30, color: C.text1, objectName: `Mini stat ${i + 1}` });
    text(s, l, { x, y: 5.2, w: 1.8, h: 0.3, fontSize: 9, ...monoOpts(), objectName: `Mini stat label ${i + 1}` });
  });

  /* 6. Quote */
  s = pres.addSlide({ masterName: "CONTENT_ALT_LIGHT", sectionTitle: "Proof" });
  s.addText("Member quote", { placeholder: "eyebrow" });
  s.addText("Hear it from the crew", { placeholder: "title" });
  text(s, "“The work works. Put in the reps, stay consistent, and the results show up. I'm living proof.”", { x: MX, y: 2.6, w: 11.2, h: 1.9, fontSize: 30, color: C.text1, charSpacing: -1, valign: "top", objectName: "Quote" });
  s.addShape(pres.ShapeType.ellipse, { x: MX, y: 5.0, w: 0.6, h: 0.6, fill: { color: C.accent4 }, line: { color: C.accent4, width: 0 }, objectName: "Avatar" });
  text(s, "JR", { x: MX, y: 5.0, w: 0.6, h: 0.6, fontSize: 12, color: C.text1, align: "center", valign: "middle", objectName: "Avatar initials" });
  text(s, "James Robinson (J-R)", { x: MX + 0.8, y: 4.97, w: 6, h: 0.35, fontSize: 15, color: C.text1, valign: "middle", objectName: "Quote name" });
  text(s, "GRC Program Analyst at Compyl · Jan 13, 2026", { x: MX + 0.8, y: 5.3, w: 6, h: 0.3, fontSize: 10, ...monoOpts({ valign: "middle" }), objectName: "Quote role" });

  /* 7. Certification — six stat cards */
  pres.addSection({ title: "Certification" });
  s = pres.addSlide({ masterName: "CONTENT_LIGHT", sectionTitle: "Certification" });
  s.addText("Certification", { placeholder: "eyebrow" });
  s.addText("What the CGE-P covers", { placeholder: "title" });
  const certs = [["Chapters", "7", "Comprehensive coverage of GRC engineering concepts"], ["Video", "~3 hrs", "Short lessons designed to build understanding"], ["Study time", "6–8 hrs", "Reading plus hands-on work"], ["Labs", "Hands-on", "Real-world experience reinforcing concepts"], ["Exam", "60 Q", "Validate your knowledge across seven domains"], ["Portfolio", "IaC", "Ship a real compliance-as-code project"]];
  {
    const gap = 0.3, cw = (CW - gap * 2) / 3, y0 = TOP, h = (BOTTOM - y0 - gap) / 2;
    certs.forEach(([label, big, desc], i) => {
      const x = MX + (i % 3) * (cw + gap), y = y0 + Math.floor(i / 3) * (h + gap);
      card(s, x, y, cw, h, { fill: C.background2, name: `Cert card ${i + 1}` });
      text(s, label, { x: x + 0.35, y: y + 0.3, w: cw - 0.7, h: 0.3, fontSize: 10, ...monoOpts(), objectName: `Cert label ${i + 1}` });
      text(s, big, { x: x + 0.35, y: y + h - 1.25, w: cw - 0.7, h: 0.6, fontSize: 34, color: C.text1, charSpacing: -1, valign: "bottom", objectName: `Cert stat ${i + 1}` });
      text(s, desc, { x: x + 0.35, y: y + h - 0.6, w: cw - 0.7, h: 0.4, fontSize: 12, color: C.text2, valign: "top", objectName: `Cert desc ${i + 1}` });
    });
  }

  /* 8. Roadmap — numbered rows */
  s = pres.addSlide({ masterName: "CONTENT_ALT_LIGHT", sectionTitle: "Certification" });
  s.addText("Course structure", { placeholder: "eyebrow" });
  s.addText("Course roadmap", { placeholder: "title" });
  const chapters = [["01", "Foundations", "Core GRC engineering concepts and the maturity model"], ["02", "Infrastructure as code", "Terraform fundamentals and compliance as code"], ["03", "Policy as code", "OPA, Rego, automated policy enforcement"], ["04", "CI/CD and evidence", "Pipelines, evidence collection, chain of custody"], ["05", "Cloud-native security", "AWS services and continuous monitoring"], ["06", "OSCAL and cATO", "Machine-readable compliance and continuous ATO"], ["07", "Capstone and exam", "Build your portfolio, earn the cert"]];
  chapters.forEach(([n, t, d], i) => {
    const h = 0.56, gap = 0.1, y = TOP + i * (h + gap);
    card(s, MX, y, CW, h, { name: `Roadmap row ${i + 1}` });
    tag(s, MX + 0.3, y + (h - 0.24) / 2, n, { name: `Roadmap number ${i + 1}` });
    text(s, t, { x: MX + 1.1, y, w: 3.8, h, fontSize: 15, color: C.text1, valign: "middle", objectName: `Roadmap title ${i + 1}` });
    text(s, d, { x: MX + 5.1, y, w: CW - 5.4, h, fontSize: 13, color: C.text2, valign: "middle", objectName: `Roadmap desc ${i + 1}` });
  });

  /* 9. Code */
  pres.addSection({ title: "Policy as Code" });
  s = pres.addSlide({ masterName: "CONTENT_LIGHT", sectionTitle: "Policy as Code" });
  s.addText("Policy as code", { placeholder: "eyebrow" });
  s.addText("Enforce it, don't document it", { placeholder: "title" });
  {
    const cw = 6.3, y = TOP, h = 3.9, head = 0.42;
    card(s, MX, y, cw, h, { fill: C.background2, name: "Code panel" });
    hairline(s, MX, y + head, cw, "Code header rule");
    [0, 1, 2].forEach((k) => dot(s, MX + 0.3 + k * 0.12, y + head / 2, HEX.accent5, `Window dot ${k + 1}`));
    text(s, "s3-encryption.tf", { x: MX + 0.75, y, w: 3, h: head, fontSize: 9, ...monoOpts({ color: C.text2, valign: "middle" }), objectName: "Code filename" });
    const t2 = tag(s, MX + cw - 0.3 - 0.65, y + (head - 0.24) / 2, "SC-13", { name: "Control SC-13" });
    tag(s, MX + cw - 0.3 - t2 - 0.08 - 0.65, y + (head - 0.24) / 2, "SC-28", { name: "Control SC-28" });
    const mono = { fontFace: MONO };
    const code = [
      { text: 'resource "aws_s3_bucket" "evidence" {\n  bucket = "grc-evidence-vault"\n}\n\nresource "aws_s3_bucket_server_side_encryption_configuration" "e" {\n  bucket = aws_s3_bucket.evidence.id\n\n  rule {\n    apply_server_side_encryption_by_default {\n      sse_algorithm = ' },
      { text: '"aws:kms"', options: { color: C.accent2 } },
      { text: "\n    }\n    bucket_key_enabled = " },
      { text: "true", options: { color: C.accent2 } },
      { text: "\n  }\n}" },
    ].map((r) => ({ text: r.text, options: { ...mono, ...(r.options || {}) } }));
    s.addText(code, { isTextBox: true, x: MX + 0.3, y: y + head + 0.2, w: cw - 0.6, h: h - head - 0.4, fontSize: 11, color: C.text2, margin: 0, valign: "top", objectName: "Code" });
    const rx = MX + cw + 0.5, rw = W - MX - rx;
    [["01", "The control", "Encryption at rest for evidence storage"], ["02", "The proof", "Terraform plan and apply, then a signed state file"], ["03", "The evidence", "Posted to the compliance vault on every merge to main"]].forEach(([n, k, v], i) => {
      const ry = y + 0.1 + i * 1.2;
      tag(s, rx, ry, n, { name: `Step number ${i + 1}` });
      text(s, k, { x: rx + 0.7, y: ry, w: rw - 0.7, h: 0.24, fontSize: 9, ...monoOpts({ valign: "middle" }), objectName: `Step label ${i + 1}` });
      text(s, v, { x: rx + 0.7, y: ry + 0.3, w: rw - 0.7, h: 0.8, fontSize: 16, color: C.text1, valign: "top", objectName: `Step value ${i + 1}` });
    });
  }

  /* 10. Comparison table */
  s = pres.addSlide({ masterName: "CONTENT_ALT_LIGHT", sectionTitle: "Policy as Code" });
  s.addText("The shift", { placeholder: "eyebrow" });
  s.addText("Checkbox vs engineered", { placeholder: "title" });
  {
    const rows = [["Evidence", "Screenshots in a folder", "API-pulled, hash-signed, timestamped"], ["Cadence", "Once a year at audit time", "Continuous, every merge to main"], ["Proof", "PDFs and Word docs", "Terraform state and OSCAL components"], ["Owner", "GRC team in a silo", "The engineers shipping the system"]];
    const y = TOP, hh = 0.5, rh = (BOTTOM - y - hh) / rows.length;
    const c1 = 2.2, c2 = (CW - c1) / 2;
    card(s, MX, y, CW, BOTTOM - y, { name: "Comparison table" });
    hairline(s, MX, y + hh, CW, "Header rule");
    [["Dimension", C.accent3], ["Traditional GRC", C.accent3], ["GRC engineering", C.accent2]].forEach(([t, col], i) => {
      text(s, t, { x: MX + 0.4 + (i === 0 ? 0 : c1 + (i - 1) * c2), y, w: i === 0 ? c1 : c2 - 0.4, h: hh, fontSize: 10, fontFace: MONO, color: col, valign: "middle", objectName: `Header ${i + 1}` });
    });
    rows.forEach(([d, o, n], i) => {
      const ry = y + hh + i * rh;
      if (i > 0) hairline(s, MX + 0.4, ry, CW - 0.8, `Row rule ${i}`);
      text(s, d, { x: MX + 0.4, y: ry, w: c1, h: rh, fontSize: 15, color: C.text1, valign: "middle", objectName: `Dimension ${i + 1}` });
      text(s, o, { x: MX + 0.4 + c1, y: ry, w: c2 - 0.4, h: rh, fontSize: 15, color: C.text2, valign: "middle", objectName: `Traditional ${i + 1}` });
      text(s, n, { x: MX + 0.4 + c1 + c2, y: ry, w: c2 - 0.6, h: rh, fontSize: 15, color: C.text1, valign: "middle", objectName: `Engineered ${i + 1}` });
    });
  }

  /* 11. Pillars — line icons, no wells */
  pres.addSection({ title: "Framework" });
  s = pres.addSlide({ masterName: "CONTENT_LIGHT", sectionTitle: "Framework" });
  s.addText("The framework", { placeholder: "eyebrow" });
  s.addText("Three pillars of GRC engineering", { placeholder: "title" });
  const pillars = [["LuHammer", "Automate", "Infrastructure and policy as code. Controls ship with the system, not a spreadsheet."], ["LuFileCheck2", "Evidence", "Machine-verifiable receipts. OSCAL, signed artifacts, audit-ready by default."], ["LuGitBranch", "Continuous", "Every merge is an audit event. No more point-in-time theater."]];
  {
    const gap = 0.3, cw = (CW - gap * 2) / 3, y = TOP, h = 3.6;
    for (let i = 0; i < pillars.length; i++) {
      const [ic, t, b] = pillars[i], x = MX + i * (cw + gap);
      card(s, x, y, cw, h, { fill: C.background2, name: `Pillar card ${i + 1}` });
      s.addImage({ data: await icon(ic), x: x + 0.4, y: y + 0.4, w: 0.32, h: 0.32, objectName: `Pillar icon ${i + 1}` });
      tag(s, x + cw - 0.4 - 0.37, y + 0.44, String(i + 1).padStart(2, "0"), { name: `Pillar number ${i + 1}` });
      text(s, t, { x: x + 0.4, y: y + 1.2, w: cw - 0.8, h: 0.6, fontSize: 26, color: C.text1, charSpacing: -1, valign: "middle", objectName: `Pillar title ${i + 1}` });
      text(s, b, { x: x + 0.4, y: y + 1.9, w: cw - 0.8, h: h - 2.2, fontSize: 14, color: C.text2, valign: "top", objectName: `Pillar body ${i + 1}` });
    }
  }

  /* 12. Closer */
  pres.addSection({ title: "Close" });
  s = pres.addSlide({ masterName: "CLOSER_LIGHT", sectionTitle: "Close" });
  s.addText("Ready to build", { placeholder: "eyebrow" });
  s.addText([{ text: "Stop scrolling,", options: { breakLine: true } }, { text: "start engineering" }], { placeholder: "title" });
  s.addText("A clear path forward and a crew to build it with. Join the Club, ship the work, level up.", { placeholder: "body" });
  s.addShape(pres.ShapeType.roundRect, { x: MX, y: 5.6, w: 2.4, h: 0.6, rectRadius: 0.08, fill: { color: C.accent1 }, line: { color: C.accent1, width: 0 }, objectName: "Primary CTA" });
  text(s, "Join the Club  →", { x: MX, y: 5.6, w: 2.4, h: 0.6, fontSize: 14, color: C.accent6, align: "center", valign: "middle", objectName: "Primary CTA label" });
  s.addShape(pres.ShapeType.roundRect, { x: MX + 2.6, y: 5.6, w: 2.4, h: 0.6, rectRadius: 0.08, fill: { color: C.background2 }, line: { color: C.accent5, width: 1 }, objectName: "Secondary CTA" });
  text(s, "grcengclub.com", { x: MX + 2.6, y: 5.6, w: 2.4, h: 0.6, fontSize: 14, color: C.text1, align: "center", valign: "middle", objectName: "Secondary CTA label" });
}

/* ---------- .potx twin ---------- */
async function writePotx(pptxPath) {
  const JSZip = require(require.resolve("jszip", { paths: [require.resolve("pptxgenjs")] }));
  const zip = await JSZip.loadAsync(fs.readFileSync(pptxPath));
  const ct = await zip.file("[Content_Types].xml").async("string");
  zip.file("[Content_Types].xml", ct.replace("presentationml.presentation.main+xml", "presentationml.template.main+xml"));
  const potx = pptxPath.replace(/\.pptx$/, ".potx");
  fs.writeFileSync(potx, await zip.generateAsync({ type: "nodebuffer", compression: "DEFLATE" }));
  return potx;
}

(async () => {
  await defineLayouts();
  await buildSlides();
  await pres.writeFile({ fileName: OUT });
  await applyTheme(OUT, THEME);
  const potx = await writePotx(OUT);
  console.log("wrote", OUT, "\nwrote", potx);
})().catch((e) => { console.error(e); process.exit(1); });
