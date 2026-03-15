/*
 * HOME PAGE — selimaj.dev
 * Design: Glassmorphic Terminal
 * Assembles all sections: Navbar, Hero, About, Projects, Skills, Contact, Footer
 */

import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import ProjectsSection from "@/components/ProjectsSection";
import SkillsSection from "@/components/SkillsSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <div
      className="min-h-screen"
      style={{ background: "#080808", color: "#f0f0f0" }}
    >
      <Navbar />
      <HeroSection />
      <AboutSection />
      <ProjectsSection />
      <SkillsSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
