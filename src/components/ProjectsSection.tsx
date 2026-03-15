/*
 * PROJECTS SECTION — selimaj.dev
 * Design: Glassmorphic Terminal
 * Masonry-style grid with glass cards, language badges, and star counts
 */

import { useEffect, useRef } from "react";
import { ExternalLink, Star, GitFork } from "lucide-react";

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

const LANG_COLORS: Record<string, string> = {
  TypeScript: "#3178c6",
  Rust: "#ce422b",
  Java: "#b07219",
  JavaScript: "#f1e05a",
  Python: "#3572A5",
  Shell: "#89e051",
  "C#": "#178600",
};

interface Project {
  name: string;
  org?: string;
  description: string;
  language: string;
  stars: number;
  forks?: number;
  href: string;
  featured?: boolean;
  tag?: string;
}

const projects: Project[] = [
  {
    name: "osui",
    org: "osui-rs",
    description: "A TUI library written in Rust — build terminal UIs with a component-based approach.",
    language: "Rust",
    stars: 7,
    href: "https://github.com/osui-rs/osui",
    featured: true,
    tag: "Library",
  },
  {
    name: "saturnclient",
    org: "saturnclientmc",
    description: "Saturn Client — a Minecraft client full of customizability and free cosmetics.",
    language: "Java",
    stars: 7,
    forks: 2,
    href: "https://github.com/saturnclientmc/saturnclient",
    featured: true,
    tag: "Game Client",
  },
  {
    name: "dev-run",
    org: "orus-dev",
    description: "DevRun — a community-driven competitive programming platform inspired by speedrunning.",
    language: "TypeScript",
    stars: 3,
    href: "https://github.com/orus-dev/dev-run",
    featured: true,
    tag: "Platform",
  },
  {
    name: "linear-linux",
    description: "Linux support for linear.app — bringing the popular project management tool to Linux.",
    language: "JavaScript",
    stars: 27,
    forks: 5,
    href: "https://github.com/selimaj-dev/linear-linux",
    featured: true,
    tag: "Tool",
  },
  {
    name: "dockship",
    org: "orus-dev",
    description: "A powerful self-hosted deployment platform for managing your applications.",
    language: "TypeScript",
    stars: 1,
    href: "https://github.com/orus-dev/dockship",
    tag: "DevOps",
  },
  {
    name: "axiom",
    org: "AxiomChat",
    description: "A modern real-time chat application built with TypeScript.",
    language: "TypeScript",
    stars: 1,
    href: "https://github.com/AxiomChat/axiom",
    tag: "App",
  },
  {
    name: "nexa-trade",
    org: "nexa-sol",
    description: "The Solana trading terminal supercharged by AI — trade smarter.",
    language: "TypeScript",
    stars: 1,
    href: "https://github.com/nexa-sol/nexa-trade",
    tag: "FinTech",
  },
  {
    name: "osmium",
    description: "A TUI component-based game engine built on top of OSUI.",
    language: "Rust",
    stars: 1,
    href: "https://github.com/selimaj-dev/osmium",
    tag: "Engine",
  },
  {
    name: "spark",
    description: "AI documentation generator that takes context from your repository's source code.",
    language: "Python",
    stars: 2,
    href: "https://github.com/selimaj-dev/spark",
    tag: "AI Tool",
  },
  {
    name: "flux",
    description: "A tool and library for using multiple languages in one codebase seamlessly.",
    language: "Rust",
    stars: 1,
    href: "https://github.com/selimaj-dev/flux",
    tag: "Tool",
  },
  {
    name: "session-rs",
    description: "A lightweight async WebSocket protocol library for Rust.",
    language: "Rust",
    stars: 1,
    href: "https://github.com/selimaj-dev/session-rs",
    tag: "Library",
  },
  {
    name: "tailwind-motlib",
    description: "A motion and stagger animation library for Tailwind CSS.",
    language: "TypeScript",
    stars: 0,
    href: "https://github.com/selimaj-dev/tailwind-motlib",
    tag: "Library",
  },
];

function ProjectCard({ project, delay }: { project: Project; delay: number }) {
  const langColor = LANG_COLORS[project.language] || "#888";

  return (
    <a
      href={project.href}
      target="_blank"
      rel="noopener noreferrer"
      className="block glass rounded-2xl p-6 card-hover group no-underline"
      style={{ animationDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-start justify-between mb-3">
        <div className="flex-1 min-w-0">
          {project.tag && (
            <span className="terminal-label text-xs inline-block mb-2 px-2 py-0.5 rounded-full border border-white/10 bg-white/5">
              {project.tag}
            </span>
          )}
          <h3
            className="text-white font-semibold text-base leading-tight truncate"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            {project.org ? (
              <span className="text-white/40">{project.org}/</span>
            ) : null}
            {project.name}
          </h3>
        </div>
        <ExternalLink
          size={14}
          className="text-white/20 group-hover:text-white/60 transition-colors ml-3 mt-1 shrink-0"
        />
      </div>

      {/* Description */}
      <p
        className="text-white/50 text-sm leading-relaxed mb-5 line-clamp-2"
        style={{ fontFamily: "'DM Sans', sans-serif" }}
      >
        {project.description}
      </p>

      {/* Footer */}
      <div className="flex items-center gap-4">
        <span className="lang-badge">
          <span
            className="lang-dot"
            style={{ backgroundColor: langColor }}
          />
          {project.language}
        </span>
        <span className="lang-badge">
          <Star size={11} className="text-white/40" />
          {project.stars}
        </span>
        {project.forks !== undefined && (
          <span className="lang-badge">
            <GitFork size={11} className="text-white/40" />
            {project.forks}
          </span>
        )}
      </div>
    </a>
  );
}

export default function ProjectsSection() {
  const headerRef = useReveal();
  const gridRef = useReveal(0.05);

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-32 relative" style={{ background: "#080808" }}>
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        {/* Header */}
        <div ref={headerRef} className="reveal mb-16">
          <div className="terminal-label mb-4">&gt; ls projects/</div>
          <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <h2 className="section-heading text-4xl sm:text-5xl text-white leading-tight">
              Things I've <span className="text-white/40">Built</span>
            </h2>
            <a
              href="https://github.com/selimaj-dev?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/40 hover:text-white transition-colors terminal-label"
            >
              View all 35+ repos →
            </a>
          </div>
        </div>

        {/* Featured projects (larger cards) */}
        <div ref={gridRef} className="reveal">
          <div className="terminal-label mb-4 text-xs">// featured</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
            {featured.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 80} />
            ))}
          </div>

          {/* Rest of projects (smaller grid) */}
          <div className="terminal-label mb-4 text-xs mt-8">// more projects</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3">
            {rest.map((project, i) => (
              <ProjectCard key={project.name} project={project} delay={i * 60} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
