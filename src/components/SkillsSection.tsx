/*
 * SKILLS SECTION — selimaj.dev
 * Design: Glassmorphic Terminal
 * Flowing chip layout with category grouping
 */

import { useEffect, useRef } from "react";

function useReveal(threshold = 0.1) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("visible");
          observer.disconnect();
        }
      },
      { threshold }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [threshold]);
  return ref;
}

const CODE_VISUAL = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439135967/RkRL4wd7YzNoLyaN7suWbR/code-visual-96fdFEYLcFy2ct3UAAmiG6.webp";

interface SkillCategory {
  label: string;
  terminalLabel: string;
  skills: { name: string; level?: "expert" | "proficient" | "learning" }[];
}

const skillCategories: SkillCategory[] = [
  {
    label: "Languages",
    terminalLabel: "languages/",
    skills: [
      { name: "Rust", level: "expert" },
      { name: "TypeScript", level: "expert" },
      { name: "JavaScript", level: "expert" },
      { name: "Java", level: "proficient" },
      { name: "Python", level: "proficient" },
      { name: "C#", level: "proficient" },
      { name: "Shell / Bash", level: "proficient" },
      { name: "Go", level: "learning" },
    ],
  },
  {
    label: "Frontend",
    terminalLabel: "frontend/",
    skills: [
      { name: "React", level: "expert" },
      { name: "Next.js", level: "expert" },
      { name: "Tailwind CSS", level: "expert" },
      { name: "Framer Motion", level: "proficient" },
      { name: "WebSockets", level: "expert" },
      { name: "Vite", level: "expert" },
    ],
  },
  {
    label: "Backend & Systems",
    terminalLabel: "backend/",
    skills: [
      { name: "Node.js", level: "expert" },
      { name: "Express", level: "expert" },
      { name: "Linux", level: "expert" },
      { name: "Docker", level: "proficient" },
      { name: "TUI / CLI", level: "expert" },
      { name: "Low-level Systems", level: "expert" },
      { name: "WebAssembly", level: "proficient" },
    ],
  },
  {
    label: "Tools & Platforms",
    terminalLabel: "tools/",
    skills: [
      { name: "Git / GitHub", level: "expert" },
      { name: "Kali Linux", level: "proficient" },
      { name: "Neovim", level: "proficient" },
      { name: "PostgreSQL", level: "proficient" },
      { name: "Redis", level: "proficient" },
      { name: "Figma", level: "proficient" },
      { name: "Solana / Web3", level: "proficient" },
    ],
  },
];

const levelColors: Record<string, string> = {
  expert: "rgba(255,255,255,0.12)",
  proficient: "rgba(255,255,255,0.06)",
  learning: "rgba(255,255,255,0.03)",
};

const levelBorders: Record<string, string> = {
  expert: "rgba(255,255,255,0.2)",
  proficient: "rgba(255,255,255,0.1)",
  learning: "rgba(255,255,255,0.06)",
};

export default function SkillsSection() {
  const headerRef = useReveal();
  const contentRef = useReveal(0.05);

  return (
    <section id="skills" className="py-32 relative" style={{ background: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <div className="terminal-label mb-4">&gt; cat skills.json</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-heading text-4xl sm:text-5xl text-white leading-tight">
              Tech I Work
              <br />
              <span className="text-white/40">With</span>
            </h2>
            <div className="flex items-center gap-4 terminal-label text-xs">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full inline-block bg-white/50" />
                Expert
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full inline-block bg-white/25" />
                Proficient
              </span>
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full inline-block bg-white/10" />
                Learning
              </span>
            </div>
          </div>
        </div>

        <div ref={contentRef} className="reveal">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Left: skill categories */}
            <div className="lg:col-span-2 space-y-8">
              {skillCategories.map((cat) => (
                <div key={cat.label}>
                  <div className="flex items-center gap-3 mb-4">
                    <span className="terminal-label text-xs">{cat.terminalLabel}</span>
                    <div className="flex-1 h-px bg-white/5" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <span
                        key={skill.name}
                        className="skill-chip"
                        style={{
                          background: skill.level ? levelColors[skill.level] : undefined,
                          borderColor: skill.level ? levelBorders[skill.level] : undefined,
                        }}
                      >
                        {skill.name}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Right: code visual + interests */}
            <div className="space-y-4">
              {/* Code visual */}
              <div className="glass rounded-2xl overflow-hidden">
                <img
                  src={CODE_VISUAL}
                  alt="Code visualization"
                  className="w-full h-48 object-cover opacity-70"
                />
                <div className="p-4">
                  <div className="terminal-label text-xs mb-1">$ git log --oneline</div>
                  <div
                    className="text-white/50 text-xs leading-relaxed"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    <div>214 commits this month</div>
                    <div>2,670 contributions/year</div>
                    <div>35+ repositories</div>
                  </div>
                </div>
              </div>

              {/* Interests */}
              <div className="glass rounded-2xl p-5">
                <div className="terminal-label text-xs mb-4">&gt; interests/</div>
                <div className="space-y-3">
                  {[
                    { icon: "🔐", label: "Hacking & Security" },
                    { icon: "🖥️", label: "Low-level Systems" },
                    { icon: "🎨", label: "UI/UX Design" },
                    { icon: "🚀", label: "SaaS & Startups" },
                    { icon: "🦀", label: "Rust Ecosystem" },
                    { icon: "🐧", label: "Linux & Open Source" },
                  ].map((item) => (
                    <div
                      key={item.label}
                      className="flex items-center gap-3 text-sm text-white/60"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      <span className="text-base">{item.icon}</span>
                      {item.label}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
