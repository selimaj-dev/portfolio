/*
 * CONTACT SECTION — selimaj.dev
 * Design: Glassmorphic Terminal
 * Clean contact links with glass cards
 */

import { useEffect, useRef } from "react";
import { Github, Youtube, Instagram, ExternalLink, Mail } from "lucide-react";

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

const contactLinks = [
  {
    icon: Github,
    label: "GitHub",
    handle: "@selimaj-dev",
    href: "https://github.com/selimaj-dev",
    description: "35+ repositories · 2,670 contributions/year",
  },
  {
    icon: Youtube,
    label: "YouTube",
    handle: "@SelimajDev",
    href: "https://youtube.com/@SelimajDev",
    description: "Dev content, tutorials, and builds",
  },
  {
    icon: Instagram,
    label: "Instagram",
    handle: "@selimaj.dev",
    href: "https://instagram.com/selimaj.dev",
    description: "Behind the scenes and updates",
  },
  {
    icon: ExternalLink,
    label: "Website",
    handle: "selimaj.dev",
    href: "https://selimaj.dev",
    description: "You're already here!",
  },
];

export default function ContactSection() {
  const headerRef = useReveal();
  const contentRef = useReveal(0.1);

  return (
    <section id="contact" className="py-32 relative" style={{ background: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      {/* Subtle radial glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(255,255,255,0.03) 0%, transparent 70%)",
        }}
      />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16 text-center">
          <div className="terminal-label mb-4 text-center">&gt; contact --open</div>
          <h2 className="section-heading text-4xl sm:text-5xl text-white leading-tight mb-6">
            Let's Build
            <br />
            <span className="text-white/40">Something Together</span>
          </h2>
          <p
            className="text-white/50 max-w-xl mx-auto text-base leading-relaxed"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            I'm always open to interesting projects, collaborations, or just a good conversation
            about tech. Reach out through any of the channels below.
          </p>
        </div>

        {/* Contact cards */}
        <div ref={contentRef} className="reveal">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
            {contactLinks.map((link) => {
              const Icon = link.icon;
              return (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass rounded-2xl p-6 card-hover group no-underline flex flex-col gap-4"
                >
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 glass-strong rounded-xl flex items-center justify-center">
                      <Icon size={18} className="text-white/70 group-hover:text-white transition-colors" />
                    </div>
                    <ExternalLink size={12} className="text-white/20 group-hover:text-white/50 transition-colors" />
                  </div>
                  <div>
                    <div
                      className="text-white font-semibold text-sm mb-0.5"
                      style={{ fontFamily: "'Syne', sans-serif" }}
                    >
                      {link.label}
                    </div>
                    <div className="terminal-label text-xs mb-2">{link.handle}</div>
                    <div
                      className="text-white/40 text-xs leading-relaxed"
                      style={{ fontFamily: "'DM Sans', sans-serif" }}
                    >
                      {link.description}
                    </div>
                  </div>
                </a>
              );
            })}
          </div>

          {/* Big CTA */}
          <div className="glass rounded-2xl p-10 text-center">
            <div className="terminal-label mb-4">&gt; open_to_work --status</div>
            <h3
              className="text-2xl sm:text-3xl font-bold text-white mb-4"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              Open to freelance &amp; collaboration
            </h3>
            <p
              className="text-white/50 mb-8 max-w-lg mx-auto text-sm leading-relaxed"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Looking for interesting projects, SaaS co-founders, or clients who need
              a developer who ships fast and cares about quality.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <a
                href="https://github.com/selimaj-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 bg-white text-black font-semibold rounded-xl hover:bg-white/90 transition-all duration-200 text-sm no-underline"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                View GitHub Profile
              </a>
              <a
                href="https://instagram.com/selimaj.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="px-8 py-3.5 glass border border-white/10 text-white/70 font-medium rounded-xl hover:text-white hover:border-white/20 transition-all duration-200 text-sm no-underline"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                DM on Instagram
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
