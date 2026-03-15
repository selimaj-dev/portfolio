/*
 * HERO SECTION — selimaj.dev
 * Design: Glassmorphic Terminal
 * Full-viewport dark hero with animated background image, typewriter effect, and glass CTA
 */

import { useEffect, useState } from "react";

const HERO_BG = "https://d2xsxph8kpxj0f.cloudfront.net/310519663439135967/RkRL4wd7YzNoLyaN7suWbR/hero-bg-G3393XyTzqxu3D4dR63od8.webp";

const typewriterPhrases = [
  "Software Developer.",
  "Entrepreneur.",
  "SaaS Builder.",
  "Systems Programmer.",
  "Open Source Contributor.",
];

function useTypewriter(phrases: string[], speed = 60, pause = 1800) {
  const [display, setDisplay] = useState("");
  const [phraseIdx, setPhraseIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = phrases[phraseIdx];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && charIdx < current.length) {
      timeout = setTimeout(() => setCharIdx((c) => c + 1), speed);
    } else if (!deleting && charIdx === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && charIdx > 0) {
      timeout = setTimeout(() => setCharIdx((c) => c - 1), speed / 2);
    } else if (deleting && charIdx === 0) {
      setDeleting(false);
      setPhraseIdx((i) => (i + 1) % phrases.length);
    }

    setDisplay(current.slice(0, charIdx));
    return () => clearTimeout(timeout);
  }, [charIdx, deleting, phraseIdx, phrases, speed, pause]);

  return display;
}

export default function HeroSection() {
  const typed = useTypewriter(typewriterPhrases);

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{ background: "#080808" }}
    >
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${HERO_BG})`,
          opacity: 0.55,
        }}
      />

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-[#080808]" />
      <div className="absolute inset-0 bg-linear-to-r from-[#080808]/60 via-transparent to-[#080808]/60" />

      {/* Animated glow orb */}
      <div
        className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-150 h-150 rounded-full pointer-events-none"
        style={{
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 70%)",
          animation: "float 6s ease-in-out infinite",
        }}
      />

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
        {/* Terminal label */}
        <div className="inline-flex items-center gap-2 mb-8 px-4 py-2 glass rounded-full">
          <span className="w-2 h-2 rounded-full bg-white/60 inline-block" />
          <span className="terminal-label text-xs">
            &gt; klesti@selimaj.dev ~ $
          </span>
        </div>

        {/* Main heading */}
        <h1
          className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-none tracking-tight fade-in-up"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          Klesti
          <br />
          <span className="text-white/30">Selimaj</span>
        </h1>

        {/* Typewriter subtitle */}
        <div
          className="text-xl sm:text-2xl md:text-3xl font-medium text-white/70 mb-4 h-10 fade-in-up delay-200"
          style={{ fontFamily: "'Syne', sans-serif" }}
        >
          {typed}
          <span className="cursor-blink text-white/50 ml-0.5">|</span>
        </div>

        {/* Description */}
        <p
          className="text-base sm:text-lg text-white/45 max-w-2xl mx-auto mb-12 leading-relaxed fade-in-up delay-400"
          style={{ fontFamily: "'DM Sans', sans-serif" }}
        >
          16 years old · 6 years of experience · Albania
          <br />
          Passionate about low-level systems, hacking, UI/UX, and making cool tools.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 fade-in-up delay-500">
          <button
            onClick={() => {
              document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 text-sm"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            View Projects
          </button>
          <button
            onClick={() => {
              document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="px-8 py-3.5 glass text-white/80 font-medium rounded-xl hover:text-white hover:border-white/20 transition-all duration-200 text-sm border border-white/10"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            Get in Touch
          </button>
        </div>

        {/* Stats row */}
        <div className="mt-20 flex flex-row flex-wrap items-center justify-center gap-6 sm:gap-12 fade-in-up delay-700">
          {[
            { value: "6+", label: "Years Experience" },
            { value: "97+", label: "Repositories" },
            { value: "2,670+", label: "Contributions / Year" },
            { value: "#2", label: "National GitHub user" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div
                className="text-3xl font-bold text-white"
                style={{ fontFamily: "'Syne', sans-serif" }}
              >
                {stat.value}
              </div>
              <div className="terminal-label mt-1">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-0 fade-in-up delay-800" style={{animationFillMode:'forwards'}}>
        <div className="w-px h-8 bg-linear-to-b from-white/30 to-transparent" />
        <span className="terminal-label text-xs">scroll</span>
      </div>
    </section>
  );
}
