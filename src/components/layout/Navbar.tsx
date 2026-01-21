"use client";

import { cn } from "@/lib/utils";
import { CoffeeIcon, Github, Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { motion } from "motion/react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/pricing", label: "Hire Me" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 glass-card border-b">
      <nav className="container mx-auto px-6 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <img
            className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
            src="/logo.png"
            alt="Logo"
          />
          <span className="font-semibold text-foreground group-hover:text-accent transition-colors">
            selimaj.dev
          </span>
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
          {navLinks.map((link) => {
            const isActive = pathname === link.href;

            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-medium transition-colors hover:text-accent relative py-2",
                    isActive ? "text-accent" : "text-muted-foreground",
                  )}
                >
                  {link.label}
                  {isActive && (
                    <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-accent rounded-full" />
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="hidden md:flex items-center gap-4">
          <motion.li
            animate={{ y: [0, -3, 0] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            <a href="https://ko-fi.com/X8X01OX1WR" target="_blank">
              <motion.span
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <CoffeeIcon />
              </motion.span>
            </a>
          </motion.li>
          <a
            href="https://github.com/selimaj-dev"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <Github />
          </a>
          <Link
            href="/pricing"
            className="bg-accent text-accent-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-accent/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground p-2"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden glass-card border-t animate-fade-in">
          <ul className="container mx-auto px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={cn(
                    "block text-sm font-medium transition-colors",
                    location.pathname === link.href
                      ? "text-accent"
                      : "text-muted-foreground",
                  )}
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="https://github.com/selimaj-dev"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github />
              </Link>
            </li>

            <motion.li
              animate={{ y: [0, -3, 0] }}
              transition={{ repeat: Infinity, duration: 3 }}
            >
              <a href="https://ko-fi.com/X8X01OX1WR" target="_blank">
                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <CoffeeIcon />
                </motion.span>
              </a>
            </motion.li>
          </ul>
        </div>
      )}
    </header>
  );
}
