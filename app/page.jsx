import Image from "next/image";
import {
  profile,
  coreSkills,
  skillGroups,
  tools,
  experience,
  campaigns,
  education,
  certifications,
  strengths,
} from "../lib/data";
import {
  SlantedMotif,
  SectionTag,
  SectionTitle,
  Signature,
  TechPill,
  AbstractLetterform,
  EdgeMotif,
  XMarks,
} from "./components/ui";
import ContactForm from "./components/ContactForm";
import Reveal from "./components/Reveal";
import { LogoMarquee, LogoGrid, CertBadge, contactIcons } from "./components/Logos";

const nav = [
  ["About", "#about"],
  ["Skills", "#skills"],
  ["Tools", "#tools"],
  ["Experience", "#experience"],
  ["Campaigns", "#campaigns"],
  ["Education", "#education"],
  ["Contact", "#contact"],
];

export default function Home() {
  return (
    <div className="relative min-h-screen bg-[#0D0D0D] text-white">
      {/* Edge Motifs on canvas borders */}
      <div className="fixed right-3 top-1/3 z-10 hidden xl:block">
        <EdgeMotif />
      </div>
      <div className="fixed left-3 bottom-1/4 z-10 hidden xl:block">
        <EdgeMotif />
      </div>

      {/* Navigation Header */}
      <header className="sticky top-0 z-50 border-b border-[#262626] bg-[#0D0D0D]/90 backdrop-blur-md">
        <nav className="mx-auto flex max-w-7xl items-center justify-between gap-4 px-4 py-3.5 sm:px-6 lg:px-8">
          <a href="#about" className="group flex items-center gap-2.5">
            <SlantedMotif size="sm" />
            <span className="font-display text-lg font-black uppercase tracking-wider text-white transition-colors group-hover:text-[#C6F52B]">
              M. Ajmal
            </span>
            <span className="hidden rounded bg-[#181818] px-2 py-0.5 font-mono text-[10px] uppercase tracking-wider text-[#C6F52B] sm:inline-block border border-[#262626]">
              Performance
            </span>
          </a>

          <ul className="flex items-center gap-5 overflow-x-auto text-xs font-semibold uppercase tracking-widest text-[#B3B3B3]">
            {nav.map(([label, href]) => (
              <li key={href} className="shrink-0">
                <a
                  href={href}
                  className="link-sweep py-1 transition-colors hover:text-[#C6F52B]"
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          <div className="hidden sm:block">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg border border-[#C6F52B] bg-[#C6F52B]/10 px-4 py-2 text-xs font-bold uppercase tracking-wider text-[#C6F52B] transition-all duration-300 hover:bg-[#C6F52B] hover:text-[#0D0D0D] hover:shadow-[0_0_18px_rgba(198,245,43,0.4)]"
            >
              <span>Let&apos;s Talk</span>
              <span className="text-sm">→</span>
            </a>
          </div>
        </nav>
      </header>

      <main className="relative flex flex-col gap-24 px-4 py-8 sm:px-6 sm:py-14 md:gap-32 lg:px-8">
        {/* =========================================================================
            HERO / ABOUT ME SECTION (Two-Column Split Layout based on Prototype Spec)
           ========================================================================= */}
        <section
          id="about"
          className="relative mx-auto w-full max-w-7xl pt-4 scroll-mt-24 lg:pt-8"
        >
          {/* Abstract background typography watermark */}
          <AbstractLetterform
            text="AJMAL"
            className="-left-6 -top-12 text-[clamp(6rem,18vw,16rem)] opacity-[0.035]"
          />

          <div className="relative grid items-center gap-12 lg:grid-cols-12 lg:gap-14">
            {/* ----------------- LEFT COLUMN (~55%) ----------------- */}
            <div className="space-y-7 lg:col-span-7">
              {/* Breadcrumb / Tag */}
              <Reveal>
                <div className="inline-flex items-center gap-2.5 rounded-full border border-[#262626] bg-[#141414] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C6F52B]">
                  <SlantedMotif size="sm" />
                  <span>ABOUT ME</span>
                </div>
              </Reveal>

              {/* Hero Text Group */}
              <Reveal delay={100} className="space-y-2">
                <h1 className="font-display text-[clamp(3.5rem,9vw,6.5rem)] font-extrabold uppercase leading-[0.95] tracking-tight text-white">
                  Hello!
                </h1>
                <h2 className="font-display text-[clamp(1.75rem,4.5vw,3rem)] font-bold tracking-tight text-[#C6F52B] glow-text-neon">
                  I&apos;m {profile.name}
                </h2>
                <div className="pt-2">
                  <h3 className="font-display text-sm font-semibold uppercase tracking-[0.18em] text-white sm:text-base">
                    DIGITAL MARKETING &amp; PERFORMANCE MARKETER
                  </h3>
                  <div className="mt-3 flex items-center gap-2">
                    <div className="h-[2px] w-20 bg-[#C6F52B]" />
                    <div className="h-[2px] w-4 bg-[#262626]" />
                  </div>
                </div>
              </Reveal>

              {/* Bio Paragraphs */}
              <Reveal delay={200} className="space-y-4 text-sm leading-relaxed text-[#B3B3B3] sm:text-base">
                {profile.summary.map((p, i) => (
                  <p key={i}>{p}</p>
                ))}
              </Reveal>

              {/* Value Proposition Grid (3 Columns) */}
              <Reveal delay={300}>
                <div className="grid grid-cols-1 gap-4 pt-2 sm:grid-cols-3">
                  {/* Column 1 */}
                  <div className="val-prop-card group rounded-xl border border-[#262626] bg-[#141414] p-4 transition-all duration-300 hover:border-[#C6F52B]">
                    <div className="mb-3 text-[#C6F52B]">
                      <svg
                        className="val-prop-icon h-7 w-7 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      PERFORMANCE
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#8E8E8E]">
                      High-ROI Meta &amp; Google Ads campaigns focused on customer acquisition.
                    </p>
                  </div>

                  {/* Column 2 */}
                  <div className="val-prop-card group rounded-xl border border-[#262626] bg-[#141414] p-4 transition-all duration-300 hover:border-[#C6F52B]">
                    <div className="mb-3 text-[#C6F52B]">
                      <svg
                        className="val-prop-icon h-7 w-7 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      STRATEGIC FOCUS
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#8E8E8E]">
                      Full-funnel planning, audience targeting, and continuous optimization.
                    </p>
                  </div>

                  {/* Column 3 */}
                  <div className="val-prop-card group rounded-xl border border-[#262626] bg-[#141414] p-4 transition-all duration-300 hover:border-[#C6F52B]">
                    <div className="mb-3 text-[#C6F52B]">
                      <svg
                        className="val-prop-icon h-7 w-7 transition-transform duration-300"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="1.8"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M3 3v18h18" />
                        <path d="m19 9-5 5-4-4-3 3" />
                      </svg>
                    </div>
                    <h4 className="font-display text-xs font-bold uppercase tracking-wider text-white">
                      ANALYTICS &amp; DATA
                    </h4>
                    <p className="mt-1 text-[11px] leading-relaxed text-[#8E8E8E]">
                      Rigorous tracking with GA4, GTM, Meta Pixel, and measurable reporting.
                    </p>
                  </div>
                </div>
              </Reveal>

              {/* Quick Contact Badges */}
              <Reveal delay={400} className="pt-2">
                <div className="flex flex-wrap items-center gap-3 text-xs">
                  <a
                    href={profile.phoneHref}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#262626] bg-[#141414] px-3.5 py-2 text-[#CCCCCC] transition-all hover:border-[#C6F52B] hover:text-white"
                  >
                    {contactIcons.whatsapp}
                    <span>{profile.phone}</span>
                  </a>
                  <a
                    href={`mailto:${profile.email}`}
                    className="inline-flex items-center gap-2 rounded-lg border border-[#262626] bg-[#141414] px-3.5 py-2 text-[#CCCCCC] transition-all hover:border-[#C6F52B] hover:text-white"
                  >
                    {contactIcons.email}
                    <span>{profile.email}</span>
                  </a>
                  <a
                    href={profile.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-lg border border-[#262626] bg-[#141414] px-3.5 py-2 text-[#CCCCCC] transition-all hover:border-[#C6F52B] hover:text-white"
                  >
                    {contactIcons.linkedin}
                    <span>LinkedIn</span>
                  </a>
                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#262626] bg-[#141414] px-3.5 py-2 text-[#CCCCCC]">
                    {contactIcons.location}
                    <span>{profile.location}</span>
                  </div>
                </div>
              </Reveal>
            </div>

            {/* ----------------- RIGHT COLUMN (~45%) ----------------- */}
            <div className="relative lg:col-span-5">
              <Reveal delay={200}>
                <div className="relative mx-auto w-full max-w-md lg:max-w-none">
                  {/* Coordinate Header */}
                  <div className="mb-2 flex items-center justify-between font-mono text-[10px] tracking-wider text-[#C6F52B]/70">
                    <span className="flex items-center gap-1.5">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#C6F52B]" />
                      PORTFOLIO SPEC // V2.0
                    </span>
                    <span>13.0827° N, 80.2707° E</span>
                  </div>

                  {/* Angular Geometric Sci-Fi Frame (2px Neon Border with Top-Right and Bottom-Left Notches) */}
                  <div className="cyber-notch-lg group relative bg-[#C6F52B] p-[2px] transition-all duration-500 hover:shadow-[0_0_35px_rgba(198,245,43,0.35)]">
                    <div className="cyber-notch-lg relative overflow-hidden bg-[#141414]">
                      {/* Corner crosshairs */}
                      <span className="pointer-events-none absolute left-3 top-3 z-20 font-mono text-xs text-[#C6F52B]/80">
                        +
                      </span>
                      <span className="pointer-events-none absolute bottom-3 right-3 z-20 font-mono text-xs text-[#C6F52B]/80">
                        +
                      </span>

                      {/* Status badge in frame */}
                      <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-[#262626] bg-[#0D0D0D]/90 px-3 py-1 text-[10px] font-bold uppercase tracking-widest text-white backdrop-blur-md">
                        <span className="pulse-neon h-2 w-2 rounded-full bg-[#C6F52B]" />
                        <span>Available for Roles</span>
                      </div>

                      {/* Portrait Image with Hover Zoom */}
                      <div className="relative aspect-[3/4] w-full overflow-hidden bg-[#181818]">
                        <Image
                          src="/Profile.webp"
                          alt="Portrait of Mohammed Ajmal A"
                          fill
                          priority
                          sizes="(max-width: 768px) 100vw, 45vw"
                          className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                        />
                        {/* Gradient shade at bottom */}
                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0D0D0D] via-transparent to-transparent opacity-60" />
                      </div>
                    </div>
                  </div>

                  {/* Signature Overlay - Overlapping bottom-right corner */}
                  <div className="absolute -bottom-6 -right-3 z-30 sm:-bottom-8 sm:-right-5">
                    <div className="relative rounded-xl border border-[#262626] bg-[#0D0D0D]/95 px-5 py-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.8)] backdrop-blur-md">
                      <Signature />
                      <span className="block text-right font-mono text-[9px] uppercase tracking-widest text-[#B3B3B3]">
                        Verified Signature
                      </span>
                    </div>
                  </div>
                </div>
              </Reveal>
            </div>
          </div>
        </section>

        {/* Marquee Banner */}
        <section className="relative w-full border-y border-[#262626] bg-[#121212]/60 py-2">
          <LogoMarquee />
        </section>

        {/* =========================================================================
            SKILLS SECTION
           ========================================================================= */}
        <section id="skills" className="relative mx-auto w-full max-w-7xl scroll-mt-24">
          <AbstractLetterform
            text="SKILLS"
            className="-right-10 top-0 text-[clamp(6rem,16vw,14rem)] opacity-[0.03]"
          />

          <Reveal>
            <SectionTitle
              tag="CORE SKILLS"
              title="Marketing & Growth Capabilities"
              subtitle="Comprehensive skill set spanning paid advertising execution, conversion optimization, campaign tracking, and strategic analysis."
            />
          </Reveal>

          {/* Core Skills Pills */}
          <Reveal delay={150} className="mt-8">
            <ul className="flex flex-wrap gap-2.5">
              {coreSkills.map((s) => (
                <TechPill key={s}>{s}</TechPill>
              ))}
            </ul>
          </Reveal>

          {/* Skill Groups */}
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {skillGroups.map((g, i) => (
              <Reveal key={g.title} delay={i * 120}>
                <div className="tech-card group relative h-full rounded-2xl p-6">
                  {/* Top neon accent line */}
                  <div className="mb-4 flex items-center justify-between">
                    <span className="font-mono text-xs font-bold text-[#C6F52B]">
                      0{i + 1} //
                    </span>
                    <SlantedMotif size="sm" />
                  </div>
                  <h3 className="font-display text-xl font-bold uppercase tracking-wide text-white group-hover:text-[#C6F52B]">
                    {g.title}
                  </h3>
                  <div className="my-3 h-[1px] w-full bg-[#262626]" />
                  <ul className="space-y-2 text-xs leading-relaxed text-[#B3B3B3]">
                    {g.items.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="h-1 w-1 rounded-full bg-[#C6F52B]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            TOOLS & PLATFORMS SECTION
           ========================================================================= */}
        <section id="tools" className="relative mx-auto w-full max-w-7xl scroll-mt-24">
          <Reveal>
            <SectionTitle
              tag="TOOLS & PLATFORMS"
              title="Tech Stack & Software Ecosystem"
              subtitle="Industry-standard tools and platforms leveraged for high-impact campaigns, tracking, and performance reporting."
            />
          </Reveal>

          <Reveal delay={150} className="mt-8">
            <LogoGrid />
          </Reveal>

          {/* Tools Breakdown Table */}
          <Reveal delay={250} className="mt-10">
            <div className="rounded-2xl border border-[#262626] bg-[#141414] p-6 sm:p-8">
              <h3 className="font-display text-sm font-bold uppercase tracking-wider text-[#C6F52B]">
                Functional Breakdown
              </h3>
              <dl className="mt-6 grid gap-x-8 gap-y-4 text-xs sm:grid-cols-2">
                {tools.map((t) => (
                  <div
                    key={t.label}
                    className="flex flex-col gap-1 border-b border-[#262626] pb-3 sm:flex-row sm:items-center sm:gap-4"
                  >
                    <dt className="w-36 shrink-0 font-bold uppercase tracking-wider text-white">
                      {t.label}
                    </dt>
                    <dd className="text-[#B3B3B3]">{t.value}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </section>

        {/* =========================================================================
            PROFESSIONAL EXPERIENCE SECTION
           ========================================================================= */}
        <section id="experience" className="relative mx-auto w-full max-w-7xl scroll-mt-24">
          <AbstractLetterform
            text="TVS"
            className="-left-10 top-10 text-[clamp(6rem,16vw,14rem)] opacity-[0.03]"
          />

          <Reveal>
            <SectionTitle
              tag="CAREER TIMELINE"
              title="Professional Experience"
              subtitle="Demonstrated history in performance marketing, paid campaigns, and digital growth at MyTVS."
            />
          </Reveal>

          <div className="relative mt-12 pl-6 sm:pl-10">
            {/* Vertical timeline guide wire */}
            <div className="absolute left-[11px] top-4 bottom-4 w-[2px] bg-[#262626] sm:left-[15px]" />

            <div className="space-y-12">
              {experience.map((job, i) => (
                <Reveal key={job.role + job.period} delay={i * 150} className="relative">
                  {/* Glowing neon pulse dot */}
                  <span className="pulse-neon absolute -left-[30px] top-1.5 h-4 w-4 rounded-full border-2 border-[#0D0D0D] bg-[#C6F52B] sm:-left-[39px]" />

                  <div className="tech-card rounded-2xl p-6 sm:p-8">
                    <div className="flex flex-wrap items-center justify-between gap-3">
                      <span className="font-mono text-xs font-bold uppercase tracking-widest text-[#C6F52B]">
                        {job.period}
                      </span>
                      <div className="flex items-center gap-2 rounded-md border border-[#2E2E2E] bg-[#1C1C1C] px-3 py-1 text-xs font-bold text-white">
                        <span className="rounded bg-[#C6F52B] px-1.5 py-0.5 font-mono text-[9px] font-black text-[#0D0D0D]">
                          TVS
                        </span>
                        <span>{job.company}</span>
                        <span className="text-[#666]">•</span>
                        <span className="text-[#A0A0A0]">{job.place}</span>
                      </div>
                    </div>

                    <h3 className="mt-3 font-display text-2xl font-bold uppercase text-white sm:text-3xl">
                      {job.role}
                    </h3>

                    <ul className="mt-4 space-y-2.5 text-xs sm:text-sm leading-relaxed text-[#B3B3B3]">
                      {job.points.map((p, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <span className="mt-1 text-[#C6F52B]">▹</span>
                          <span>{p}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* =========================================================================
            SELECTED CAMPAIGNS SECTION
           ========================================================================= */}
        <section id="campaigns" className="relative mx-auto w-full max-w-7xl scroll-mt-24">
          <Reveal>
            <SectionTitle
              tag="SELECTED INITIATIVES"
              title="Campaign Highlights"
              subtitle="Practical experience across diverse market segments and campaign objectives."
            />
          </Reveal>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {campaigns.map((c, i) => (
              <Reveal key={c.title} delay={i * 120}>
                <div className="tech-card group relative flex h-full flex-col justify-between rounded-2xl p-6 sm:p-8">
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-4xl font-extrabold text-[#262626] transition-colors group-hover:text-[#C6F52B]/40">
                        0{i + 1}
                      </span>
                      <SlantedMotif size="sm" />
                    </div>
                    <h3 className="mt-4 font-display text-xl font-bold uppercase text-white group-hover:text-[#C6F52B]">
                      {c.title}
                    </h3>
                    <p className="mt-3 text-sm leading-relaxed text-[#B3B3B3]">
                      {c.text}
                    </p>
                  </div>
                  <div className="mt-6 flex items-center gap-2 font-mono text-[10px] uppercase tracking-wider text-[#C6F52B]/70">
                    <span>STATUS // DELIVERED</span>
                    <span>•</span>
                    <span>METRICS DRIVEN</span>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </section>

        {/* =========================================================================
            EDUCATION & CERTIFICATIONS SECTION
           ========================================================================= */}
        <section id="education" className="relative mx-auto w-full max-w-7xl scroll-mt-24">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Left: Education & Strengths */}
            <div>
              <Reveal>
                <SectionTitle tag="ACADEMICS" title="Education" />
              </Reveal>

              <div className="mt-8 space-y-6">
                {education.map((e, idx) => (
                  <Reveal key={e.degree} delay={idx * 150}>
                    <div className="tech-card rounded-xl p-5">
                      <h3 className="font-display text-xl font-bold uppercase text-white">
                        {e.degree}
                      </h3>
                      <p className="mt-1 text-sm font-semibold text-[#C6F52B]">{e.school}</p>
                      <p className="mt-1 font-mono text-xs text-[#888888]">{e.note}</p>
                    </div>
                  </Reveal>
                ))}
              </div>

              {/* Strengths */}
              <Reveal delay={200} className="mt-10">
                <h3 className="font-display text-lg font-bold uppercase tracking-wider text-white">
                  Core Strengths
                </h3>
                <div className="mt-3 h-[1px] w-12 bg-[#C6F52B]" />
                <ul className="mt-4 flex flex-wrap gap-2">
                  {strengths.map((s) => (
                    <TechPill key={s}>{s}</TechPill>
                  ))}
                </ul>
              </Reveal>
            </div>

            {/* Right: Certifications */}
            <div>
              <Reveal>
                <SectionTitle tag="CREDENTIALS" title="Certifications" />
              </Reveal>

              <ul className="mt-8 space-y-3">
                {certifications.map((c, idx) => (
                  <Reveal key={c} delay={idx * 60}>
                    <CertBadge label={c}>{c}</CertBadge>
                  </Reveal>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* =========================================================================
            CONTACT / FOOTER SECTION
           ========================================================================= */}
        <section
          id="contact"
          className="relative mx-auto w-full max-w-4xl text-center scroll-mt-24"
        >
          <Reveal>
            <div className="inline-flex items-center gap-2.5 rounded-full border border-[#262626] bg-[#141414] px-4 py-1.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C6F52B]">
              <SlantedMotif size="sm" />
              <span>GET IN TOUCH</span>
            </div>

            <p className="mx-auto mt-6 max-w-2xl text-sm leading-relaxed text-[#B3B3B3]">
              {profile.objective}
            </p>

            <h2 className="mt-8 font-display text-[clamp(2.5rem,7vw,5rem)] font-extrabold uppercase leading-none text-white">
              Thank You
            </h2>
            <p className="mt-2 font-script text-3xl text-[#C6F52B] md:text-5xl">
              Let&apos;s work together
            </p>

            <ContactForm />

            {/* Action Buttons */}
            <div className="mt-8 flex flex-wrap justify-center gap-3">
              <a
                href={`mailto:${profile.email}`}
                className="rounded-xl bg-[#C6F52B] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-[#0D0D0D] transition-all duration-300 hover:bg-[#d5ff48] hover:shadow-[0_0_20px_rgba(198,245,43,0.5)]"
              >
                Email Me
              </a>
              <a
                href={profile.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl border border-[#262626] bg-[#141414] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#C6F52B] hover:text-[#C6F52B]"
              >
                LinkedIn Profile
              </a>
              <a
                href={profile.phoneHref}
                className="rounded-xl border border-[#262626] bg-[#141414] px-7 py-3.5 text-xs font-bold uppercase tracking-widest text-white transition-all duration-300 hover:border-[#C6F52B] hover:text-[#C6F52B]"
              >
                Call / WhatsApp
              </a>
            </div>

            <div className="mt-12 flex justify-center">
              <XMarks />
            </div>

            <div className="mt-8 border-t border-[#262626] pt-8">
              <p className="font-mono text-xs uppercase tracking-[0.25em] text-[#666666]">
                Digital Marketing Portfolio • {profile.name} • Chennai, India
              </p>
            </div>
          </Reveal>
        </section>
      </main>
    </div>
  );
}
