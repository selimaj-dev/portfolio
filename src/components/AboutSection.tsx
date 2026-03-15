/*
 * ABOUT SECTION — selimaj.dev
 * Design: Glassmorphic Terminal
 * Asymmetric layout: text left, abstract visual right
 */

import { EarthIcon, LayersIcon, TargetIcon, ZapIcon } from "lucide-react";
import { useEffect, useRef } from "react";

const ABOUT_VISUAL =
  "/logo.png";

function useReveal() {
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
      { threshold: 0.15 },
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);
  return ref;
}

const highlights = [
  { Icon: ZapIcon, label: "Currently", value: "Grinding on SaaS products" },
  { Icon: LayersIcon, label: "Fav Stack", value: "Rust · TypeScript · Linux" },
  { Icon: TargetIcon, label: "Focus", value: "Low-level systems & UI/UX" },
  { Icon: EarthIcon, label: "Based in", value: "Albania" },
];

export default function AboutSection() {
  const ref1 = useReveal();
  const ref2 = useReveal();

  return (
    <section
      id="about"
      className="py-32 relative"
      style={{ background: "#080808" }}
    >
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Section label */}
        <div className="terminal-label mb-4">&gt; about.me</div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Text */}
          <div ref={ref1} className="reveal">
            <h2 className="section-heading text-4xl sm:text-5xl text-white mb-8 leading-tight">
              Building the future,
              <br />
              <span className="text-white/40">one commit at a time.</span>
            </h2>

            <div
              className="space-y-4 text-white/60 leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <p>
                I'm{" "}
                <strong className="text-white font-semibold">
                  Klesti Selimaj
                </strong>{" "}
                — a 16-year-old software developer and entrepreneur from Albania
                with 6 years of hands-on experience. I started coding at 10 and
                never stopped.
              </p>
              <p>
                My passion lies in{" "}
                <strong className="text-white/80">
                  low-level systems programming
                </strong>
                , building developer tools, and crafting polished user
                experiences. I work primarily in{" "}
                <strong className="text-white/80">Rust</strong> and{" "}
                <strong className="text-white/80">TypeScript</strong>, and I'm
                deeply interested in hacking, Linux internals, and TUI
                applications.
              </p>
              <p>
                Beyond code, I'm building towards a successful SaaS product —
                combining my technical depth with an entrepreneurial mindset to
                create tools that developers actually want to use.
              </p>
            </div>

            {/* Highlights grid */}
            <div className="mt-10 grid grid-cols-2 gap-3">
              {highlights.map((h) => (
                <div key={h.label} className="glass rounded-xl p-4 card-hover">
                  <div className="flex items-center gap-3">
                    <div className="text-lg">{<h.Icon />}</div>
                    <div>
                      <div className="terminal-label text-xs mb-0.5">
                        {h.label}
                      </div>
                      <div
                        className="text-sm text-white/80 font-medium"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {h.value}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Social links */}
            <div className="mt-8 flex flex-wrap gap-3">
              {[
                {
                  label: "GitHub",
                  href: "https://github.com/selimaj-dev",
                  icon: "⌥",
                },
                {
                  label: "YouTube",
                  href: "https://youtube.com/@SelimajDev",
                  icon: "▶",
                },
                {
                  label: "Instagram",
                  href: "https://instagram.com/selimaj.dev",
                  icon: "◈",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="skill-chip hover:no-underline"
                >
                  <span className="text-white/40">{s.icon}</span>
                  {s.label}
                </a>
              ))}
            </div>
          </div>

          {/* Right: Visual */}
          <div ref={ref2} className="reveal flex justify-center lg:justify-end">
            <div className="relative w-full max-w-md">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 rounded-2xl blur-3xl opacity-20"
                style={{
                  background:
                    "radial-gradient(circle, rgba(255,255,255,0.15) 0%, transparent 70%)",
                }}
              />
              <div className="relative glass rounded-2xl overflow-hidden float-anim">
                <img
                  src={ABOUT_VISUAL}
                  alt="Abstract tech visualization"
                  className="w-full h-auto object-cover"
                  style={{ aspectRatio: "1/1" }}
                />
                {/* Overlay with terminal text */}
                <div
                  className="absolute bottom-0 left-0 right-0 p-5"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(8,8,8,0.9) 0%, transparent 100%)",
                  }}
                >
                  <div className="terminal-label text-xs">
                    <span className="text-white/30">$</span>{" "}
                    <span className="text-white/60">whoami</span>
                  </div>
                  <div
                    className="text-white/80 text-sm mt-1"
                    style={{ fontFamily: "'JetBrains Mono', monospace" }}
                  >
                    Klesti Selimaj
                  </div>
                  <div className="terminal-label text-xs mt-0.5">
                    uid=1000(klesti) groups=dev,entrepreneur
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
