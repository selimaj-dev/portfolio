"use client";

import { BookOpen, ExternalLink, Github, Star } from "lucide-react";
import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const projects = [
  {
    name: "Axiom Chat",
    description: "A modern, feature-rich chat application built for teams.",
    tech: ["TypeScript", "Real-time", "WebSockets"],
    stars: 1,
    github: "https://github.com/AxiomChat/axiom",
    website: "https://vxchat.netlify.app/",
    featured: true,
  },
  {
    name: "DockShip",
    description: "A powerful self-hosted Deployment Platform for modern teams.",
    tech: ["TypeScript", "Docker", "React"],
    stars: 1,
    github: "https://github.com/orus-dev/dockship",
    docs: "https://github.com/orus-dev/dockship/wiki",
    featured: true,
  },
  {
    name: "OSUI",
    description:
      "A TUI library written in Rust for building beautiful terminal interfaces.",
    tech: ["Rust", "TUI", "Systems"],
    stars: 8,
    github: "https://github.com/osui-rs/osui",
    docs: "https://osui.netlify.app/",
    featured: true,
  },
  {
    name: "Linear Linux",
    description:
      "Linux support for linear.app - bringing seamless project management to Linux users.",
    tech: ["JavaScript", "Electron", "Linux"],
    stars: 23,
    github: "https://github.com/selimaj-dev/linear-linux",
    featured: false,
  },
  {
    name: "Saturn Client",
    description:
      "A Minecraft client full of customizability and free cosmetics.",
    tech: ["Java", "Minecraft", "Gaming"],
    stars: 3,
    github: "https://github.com/saturnclientmc/saturnclient",
    featured: false,
  },
  {
    name: "Drift",
    description: "An organized productivity app to get rid of distractions.",
    tech: ["TypeScript", "Productivity", "Focus"],
    stars: 1,
    github: "https://github.com/orus-dev/drift",
    featured: false,
  },
];

export function ProjectsSection() {
  return (
    <motion.section
      className="py-24 bg-card/50"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div className="max-w-2xl mb-16" variants={fadeInUp}>
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Portfolio
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Featured Projects
          </h2>
          <p className="text-muted-foreground">
            A selection of my open-source work and personal projects that
            showcase my skills in systems programming, web development, and
            tooling.
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.article
              key={project.name}
              className={"group glass-card rounded-2xl p-6 hover-lift"}
              variants={fadeInUp}
              custom={index * 0.1}
            >
              {/* Header */}
              <div className="flex items-start justify-between mb-4">
                <div className="flex items-center gap-2">
                  {project.featured && (
                    <span className="px-2 py-1 text-xs font-medium bg-accent/10 text-accent rounded-full">
                      Featured
                    </span>
                  )}
                </div>
                <div className="flex items-center gap-1 text-muted-foreground">
                  <Star className="w-4 h-4" />
                  <span className="text-sm">{project.stars}</span>
                </div>
              </div>

              {/* Content */}
              <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-accent transition-colors">
                {project.name}
              </h3>
              <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((tech) => (
                  <span
                    key={tech}
                    className="px-2 py-1 text-xs font-mono bg-secondary text-secondary-foreground rounded"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Actions */}
              <div className="flex items-center gap-4">
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  <Github className="w-4 h-4" />
                  Source
                </a>
                {project.website && (
                  <a
                    href={project.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <ExternalLink className="w-4 h-4" />
                    View
                  </a>
                )}
                {project.docs && (
                  <a
                    href={project.docs}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    <BookOpen className="w-4 h-4" />
                    Docs
                  </a>
                )}
              </div>
            </motion.article>
          ))}
        </div>

        {/* View All CTA */}
        <motion.div
          className="text-center mt-12"
          variants={fadeInUp}
          custom={0.8}
        >
          <a
            href="https://github.com/selimaj-dev?tab=repositories"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 text-accent hover:text-accent/80 font-medium transition-colors"
          >
            View all projects on GitHub
            <ExternalLink className="w-4 h-4" />
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
}
