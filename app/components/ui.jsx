export function SlantedMotif({ className = "", size = "md" }) {
  const h = size === "sm" ? "h-3 w-1" : size === "lg" ? "h-6 w-2" : "h-4 w-1.5";
  return (
    <div className={`inline-flex items-center gap-1 shrink-0 ${className}`} aria-hidden="true">
      <span className={`${h} -skew-x-[22deg] rounded-[1px] bg-[#C6F52B] transition-transform duration-300`} />
      <span className={`${h} -skew-x-[22deg] rounded-[1px] bg-[#C6F52B] transition-transform duration-300`} />
      <span className={`${h} -skew-x-[22deg] rounded-[1px] bg-[#C6F52B] transition-transform duration-300`} />
    </div>
  );
}

export function SectionTag({ text, className = "" }) {
  return (
    <div className={`inline-flex items-center gap-2.5 text-xs font-bold uppercase tracking-[0.2em] text-[#C6F52B] ${className}`}>
      <SlantedMotif />
      <span>{text}</span>
    </div>
  );
}

export function SectionTitle({ tag, title, subtitle, className = "" }) {
  return (
    <div className={`space-y-3 ${className}`}>
      {tag && <SectionTag text={tag} />}
      <h2 className="font-display text-3xl font-extrabold uppercase tracking-tight text-white sm:text-4xl md:text-5xl">
        {title}
      </h2>
      {subtitle && (
        <p className="max-w-2xl text-sm leading-relaxed text-[#B3B3B3]">
          {subtitle}
        </p>
      )}
      <div className="flex items-center gap-3 pt-1">
        <div className="h-[2px] w-14 bg-[#C6F52B]" />
        <div className="h-[2px] w-4 bg-[#262626]" />
      </div>
    </div>
  );
}

export function Signature({ className = "" }) {
  return (
    <span
      className={`font-script text-3xl sm:text-4xl md:text-5xl text-[#C6F52B] select-none drop-shadow-[0_2px_12px_rgba(198,245,43,0.45)] ${className}`}
    >
      Mohammed Ajmal
    </span>
  );
}

export function TechPill({ children, className = "" }) {
  return (
    <li
      className={`tech-pill inline-flex items-center gap-2 rounded-full border border-[#262626] bg-[#141414] px-4 py-2 text-xs font-medium uppercase tracking-wider text-[#CCCCCC] transition-all duration-300 hover:border-[#C6F52B] hover:bg-[#C6F52B] hover:text-[#0D0D0D] hover:shadow-[0_0_15px_rgba(198,245,43,0.35)] cursor-default ${className}`}
    >
      <span className="h-1.5 w-1.5 rounded-full bg-[#C6F52B]" />
      <span>{children}</span>
    </li>
  );
}

export function AbstractLetterform({ text, className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute select-none font-display font-black leading-none text-white/[0.04] ${className}`}
    >
      {text}
    </div>
  );
}

export function EdgeMotif({ className = "" }) {
  return (
    <div aria-hidden="true" className={`pointer-events-none flex flex-col gap-2.5 ${className}`}>
      <div className="h-10 w-1.5 -skew-y-[22deg] bg-[#C6F52B]/20" />
      <div className="h-10 w-1.5 -skew-y-[22deg] bg-[#C6F52B]/50" />
      <div className="h-10 w-1.5 -skew-y-[22deg] bg-[#C6F52B]" />
    </div>
  );
}

export function XMarks({ className = "" }) {
  return (
    <div
      aria-hidden="true"
      className={`grid grid-cols-3 gap-x-3 gap-y-1 font-mono text-sm leading-none text-[#C6F52B]/40 ${className}`}
    >
      {Array.from({ length: 6 }, (_, i) => (
        <span key={i}>+</span>
      ))}
    </div>
  );
}
