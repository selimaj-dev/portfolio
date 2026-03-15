/*
 * FOOTER — selimaj.dev
 * Design: Glassmorphic Terminal
 * Minimal footer with branding and links
 */

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="py-10 relative"
      style={{
        background: "#080808",
        borderTop: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
          {/* Brand */}
          <div className="flex items-center gap-3">
            <span
              className="text-white font-bold text-base tracking-tight"
              style={{ fontFamily: "'Syne', sans-serif" }}
            >
              selimaj<span className="text-white/30">.dev</span>
            </span>
            <span className="text-white/20 text-xs">·</span>
            <span className="terminal-label text-xs">Klesti Selimaj</span>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6">
            {[
              { label: "GitHub", href: "https://github.com/selimaj-dev" },
              { label: "YouTube", href: "https://youtube.com/@SelimajDev" },
              { label: "Instagram", href: "https://instagram.com/selimaj.dev" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-label text-xs hover:text-white/70 transition-colors"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="terminal-label text-xs">
            © {year} selimaj.dev
          </div>
        </div>
      </div>
    </footer>
  );
}
