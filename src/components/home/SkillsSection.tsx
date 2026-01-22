"use client";

import { motion } from "motion/react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const skills = [
  {
    category: "Languages",
    items: [
      { name: "Rust", level: 90 },
      { name: "TypeScript", level: 95 },
      { name: "JavaScript", level: 95 },
      { name: "Python", level: 80 },
      { name: "Go", level: 75 },
      { name: "Java", level: 80 },
    ],
  },
  {
    category: "Web Development",
    items: [
      { name: "React", level: 95 },
      { name: "Next.js", level: 85 },
      { name: "Tailwind CSS", level: 80 },
      { name: "Motion", level: 80 },
    ],
  },
  {
    category: "Systems & Tools",
    items: [
      { name: "Linux", level: 85 },
      { name: "Docker", level: 65 },
      { name: "Git", level: 95 },
      { name: "TUI Development", level: 90 },
    ],
  },
];

const stats = [
  { label: "Years Experience", value: "6+" },
  { label: "GitHub Followers", value: "32" },
  { label: "Open Source Projects", value: "80+" },
  { label: "Technologies Mastered", value: "15+" },
];

export function SkillsSection() {
  return (
    <motion.section
      className="py-24 bg-background"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div className="max-w-2xl mb-16" variants={fadeInUp}>
          <span className="text-accent text-sm font-medium uppercase tracking-wider">
            Expertise
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mt-2 mb-4">
            Technical Experience
          </h2>
          <p className="text-muted-foreground">
            From low-level systems programming to modern web development, I have
            many years of experience.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              className="text-center p-6 glass-card rounded-2xl hover-lift"
              variants={fadeInUp}
              custom={index * 0.1}
            >
              <div className="text-3xl md:text-4xl font-bold text-gradient-gold mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
}
