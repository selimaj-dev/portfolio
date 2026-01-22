"use client";

import { ArrowRight, Github, Instagram, Linkedin } from "lucide-react";
import Link from "next/link";
import { motion } from "motion/react";
import { staggerContainer, fadeInUp, slowFloat } from "@/lib/animations";

export function HeroSection() {
  return (
    <motion.section
      className="relative flex items-center justify-center overflow-hidden min-h-[40rem] h-[calc(100svh-66px)]"
      variants={staggerContainer}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-card" />
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          className="max-w-4xl mx-auto text-center"
          variants={staggerContainer}
        >
          {/* Main Heading */}
          <motion.h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6"
            variants={fadeInUp}
          >
            <span className="text-foreground">Building</span>{" "}
            <span className="text-gradient-gold">powerful</span>
            <br />
            <span className="text-foreground">digital products</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
            variants={fadeInUp}
            custom={0.2}
          >
            I'm{" "}
            <span className="text-foreground font-medium">Klesti Selimaj</span>,
            a 16-year-old software engineer with 6+ years of experience.
            Passionate about low-level systems, modern web apps, and crafting
            tools.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
            variants={fadeInUp}
            custom={0.4}
          >
            <Link
              href="/pricing"
              className="group flex items-center gap-2 bg-accent text-accent-foreground px-8 py-4 rounded-xl font-medium hover:bg-accent/90 transition-all hover:gap-3"
            >
              Work with me
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <a
              href="/about"
              rel="noopener noreferrer"
              className="flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-4 rounded-xl font-medium hover:bg-secondary/80 transition-colors"
            >
              About Me
            </a>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="flex items-center justify-center gap-6"
            variants={fadeInUp}
            custom={0.6}
          >
            <a
              href="https://github.com/selimaj-dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/klesti-selimaj-7a0162343"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://www.instagram.com/selimaj.dev"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-10 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ repeat: Infinity, duration: 1.5 }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground/30 rounded-full flex items-start justify-center p-2">
          <div className="w-1 h-2 bg-accent rounded-full animate-pulse" />
        </div>
      </motion.div>
    </motion.section>
  );
}
