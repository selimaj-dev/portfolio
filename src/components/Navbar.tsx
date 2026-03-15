/*
 * NAVBAR — selimaj.dev
 * Design: Glassmorphic Terminal
 * Glass effect: backdrop-blur + rgba background
 * Becomes more opaque on scroll
 */

import { useEffect, useState } from "react";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setMenuOpen(false);
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "navbar-glass-solid" : "navbar-glass"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between h-16">
        {/* Logo */}
        <a
          href="#"
          onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: "smooth" }); }}
          className="flex items-center gap-2 group"
        >
          <span
            className="text-white font-bold text-lg tracking-tight"
            style={{ fontFamily: "'Syne', sans-serif" }}
          >
            selimaj<span className="text-white/40">.dev</span>
          </span>
        </a>

        {/* Desktop nav links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="px-4 py-2 text-sm text-white/60 hover:text-white transition-colors duration-200 rounded-lg hover:bg-white/5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/selimaj-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="ml-3 px-4 py-2 text-sm font-medium text-black bg-white rounded-lg hover:bg-white/90 transition-all duration-200"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            GitHub
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
          <span className={`block w-5 h-0.5 bg-white/70 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-64 opacity-100" : "max-h-0 opacity-0"
        }`}
        style={{ background: "rgba(8,8,8,0.95)", borderTop: "1px solid rgba(255,255,255,0.06)" }}
      >
        <div className="px-6 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="text-left px-3 py-3 text-sm text-white/60 hover:text-white transition-colors rounded-lg hover:bg-white/5"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              {link.label}
            </button>
          ))}
          <a
            href="https://github.com/selimaj-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 px-3 py-3 text-sm font-medium text-black bg-white rounded-lg text-center hover:bg-white/90 transition-all"
            style={{ fontFamily: "'DM Sans', sans-serif" }}
          >
            GitHub
          </a>
        </div>
      </div>
    </nav>
  );
}
