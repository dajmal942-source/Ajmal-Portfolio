import {
  SiMeta,
  SiGoogleads,
  SiGoogleanalytics,
  SiGoogletagmanager,
  SiGooglesearchconsole,
  SiHubspot,
  SiGooglesheets,
  SiGooglegemini,
  SiClaude,
  SiGmail,
  SiWhatsapp,
} from "react-icons/si";
import { FaFileExcel, FaLinkedin, FaLocationDot } from "react-icons/fa6";

// Brands missing from the icon set are drawn as monogram tiles.
function Mono({ text, bg, fg = "#fff" }) {
  return (
    <span
      aria-hidden
      className="grid h-full w-full place-items-center rounded text-[0.6em] font-black leading-none"
      style={{ background: bg, color: fg }}
    >
      {text}
    </span>
  );
}

export const toolLogos = [
  { name: "Meta Ads", icon: <SiMeta />, color: "#0866ff" },
  { name: "Google Ads", icon: <SiGoogleads />, color: "#4285f4" },
  { name: "GA4", icon: <SiGoogleanalytics />, color: "#e37400" },
  { name: "Search Console", icon: <SiGooglesearchconsole />, color: "#458cf5" },
  { name: "Tag Manager", icon: <SiGoogletagmanager />, color: "#4285f4" },
  { name: "HubSpot", icon: <SiHubspot />, color: "#ff7a59" },
  { name: "Canva", icon: <Mono text="Ca" bg="linear-gradient(135deg,#00c4cc,#7d2ae8)" />, color: "#7d2ae8" },
  { name: "CapCut", icon: <Mono text="CC" bg="#222" />, color: "#ffffff" },
  { name: "Premiere Pro", icon: <Mono text="Pr" bg="#00005b" fg="#9999ff" />, color: "#9999ff" },
  { name: "Google Sheets", icon: <SiGooglesheets />, color: "#0f9d58" },
  { name: "Excel", icon: <FaFileExcel />, color: "#217346" },
  { name: "ChatGPT", icon: <Mono text="GPT" bg="#10a37f" />, color: "#10a37f" },
  { name: "Claude", icon: <SiClaude />, color: "#d97757" },
  { name: "Gemini", icon: <SiGooglegemini />, color: "#8e75b2" },
];

export const certLogos = {
  "HubSpot Academy": { icon: <SiHubspot />, color: "#ff7a59" },
  "Meta Blueprint": { icon: <SiMeta />, color: "#0866ff" },
  "Google Skillshop": { icon: <SiGoogleads />, color: "#4285f4" },
  "Google Analytics": { icon: <SiGoogleanalytics />, color: "#e37400" },
  "Google Tag Manager": { icon: <SiGoogletagmanager />, color: "#4285f4" },
  "Meta Pixel": { icon: <SiMeta />, color: "#0866ff" },
};

export const contactIcons = {
  email: <SiGmail className="text-[#EA4335]" />,
  linkedin: <FaLinkedin className="text-[#0A66C2]" />,
  whatsapp: <SiWhatsapp className="text-[#25D366]" />,
  location: <FaLocationDot className="text-[#C6F52B]" />,
};

function LogoChip({ logo }) {
  return (
    <li
      className="logo-chip flex shrink-0 items-center gap-3 rounded-full border border-[#262626] bg-[#141414] px-5 py-2.5 transition-all duration-300 hover:border-[#C6F52B] hover:shadow-[0_0_15px_rgba(198,245,43,0.2)]"
      style={{ "--brand": logo.color }}
    >
      <span className="logo-icon h-6 w-6 text-xl text-[#B3B3B3] transition-all duration-300 hover:text-[var(--brand)]">
        {logo.icon}
      </span>
      <span className="text-xs font-semibold uppercase tracking-wider text-white">
        {logo.name}
      </span>
    </li>
  );
}

/** Infinite scrolling strip of tool logos */
export function LogoMarquee({ reverse = false }) {
  return (
    <div className="marquee relative w-full overflow-hidden py-3" aria-label="Tools and platforms">
      <ul className={`marquee-track flex w-max gap-4 ${reverse ? "marquee-reverse" : ""}`}>
        {[...toolLogos, ...toolLogos].map((l, i) => (
          <LogoChip key={l.name + i} logo={l} />
        ))}
      </ul>
    </div>
  );
}

/** Static grid of tool logos with neon hover effects */
export function LogoGrid() {
  return (
    <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-4">
      {toolLogos.map((l) => (
        <li
          key={l.name}
          className="group flex flex-col items-center justify-center gap-3 rounded-xl border border-[#262626] bg-[#141414] p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#C6F52B] hover:shadow-[0_8px_25px_-5px_rgba(198,245,43,0.2)]"
        >
          <span className="grid h-12 w-12 place-items-center text-3xl text-[#888888] transition-all duration-300 group-hover:scale-110 group-hover:text-white">
            {l.icon}
          </span>
          <span className="text-xs font-bold uppercase tracking-wider text-[#CCCCCC] group-hover:text-[#C6F52B]">
            {l.name}
          </span>
        </li>
      ))}
    </ul>
  );
}

export function CertBadge({ label, children }) {
  const key = Object.keys(certLogos).find((k) => label.startsWith(k));
  const logo = key ? certLogos[key] : null;
  return (
    <li className="group flex items-center gap-3.5 rounded-xl border border-[#262626] bg-[#141414] p-3.5 transition-all duration-300 hover:border-[#C6F52B] hover:shadow-[0_0_18px_rgba(198,245,43,0.15)]">
      <span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg border border-[#2E2E2E] bg-[#1A1A1A] text-xl text-[#B3B3B3] transition-colors group-hover:border-[#C6F52B] group-hover:text-[#C6F52B]">
        {logo ? logo.icon : <span className="font-mono text-sm text-[#C6F52B]">+</span>}
      </span>
      <span className="text-sm font-medium text-white transition-colors group-hover:text-white">
        {children}
      </span>
    </li>
  );
}
