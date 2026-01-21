import { ExternalLink } from "lucide-react";
import Link from "next/link";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border bg-card/50">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <img
                className="w-8 h-8 rounded-lg bg-accent flex items-center justify-center"
                src="/logo.png"
                alt="Logo"
              />
              <span className="font-semibold text-foreground">selimaj.dev</span>
            </Link>
            <p className="text-muted-foreground text-sm max-w-sm">
              Building digital experiences with precision and passion.
              Specializing in low-level systems, modern web applications, and
              everything in between.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/pricing"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Hire Me
                </Link>
              </li>
              <li>
                <Link
                  target="_blank"
                  href="https://ko-fi.com/X8X01OX1WR"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors flex"
                >
                  Support Me on Ko-fi
                  <ExternalLink className="ml-1.5 w-4 h-4" />
                </Link>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="font-medium text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="https://github.com/selimaj-dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  GitHub
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/klesti-selimaj-7a0162343/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  LinkedIn
                </a>
              </li>
              <li>
                <a
                  href="https://www.youtube.com/@0xkleo"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  YouTube
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/selimaj.dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground hover:text-accent transition-colors"
                >
                  Instagram
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Klesti Selimaj. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Available for work
          </div>
        </div>
      </div>
    </footer>
  );
}
