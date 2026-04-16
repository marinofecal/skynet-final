import './globals.css';

export const metadata = {
  title: 'SKYNET | Neural Command Center',
  description: 'AI automation for audit, IFRS compliance, and financial analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="bg-black text-white">

        {/* ── GLOBAL BACKGROUND ── */}
        <div className="fixed inset-0 -z-10 bg-grid">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-black to-slate-950" />
          <div
            className="absolute top-0 left-1/3 w-[600px] h-[600px] rounded-full animate-float"
            style={{ background: 'radial-gradient(circle, rgba(0,229,255,0.06) 0%, transparent 70%)', filter: 'blur(40px)' }}
          />
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[500px] rounded-full"
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)', filter: 'blur(60px)', animationDelay: '3s' }}
          />
        </div>

        {/* ── HEADER ── */}
        <header className="sticky top-0 z-50" style={{ borderBottom: '1px solid rgba(0,229,255,0.12)', background: 'rgba(0,0,0,0.85)', backdropFilter: 'blur(20px)' }}>
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-3 group">
              <div className="relative w-9 h-9">
                <div className="absolute inset-0 border-2 rotate-45 transition-all group-hover:rotate-[90deg] duration-500" style={{ borderColor: 'var(--cyan)' }} />
                <div className="absolute inset-[6px] rotate-45" style={{ background: 'var(--cyan)' }} />
              </div>
              <div>
                <div className="display-heading text-lg tracking-wider" style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}>
                  SKYNET
                </div>
                <div className="section-label" style={{ fontSize: '0.55rem' }}>NEURAL COMMAND CENTER</div>
              </div>
            </a>

            {/* NAV */}
            <nav className="hidden md:flex items-center gap-1">
              {[
                { href: '/', label: 'HOME' },
                { href: '/tools/audit', label: 'AUDIT' },
                { href: '/tools/ifrs', label: 'IFRS' },
                { href: '/tools/excel', label: 'EXCEL' },
              ].map(({ href, label }) => (
                <a
                  key={href}
                  href={href}
                  className="px-4 py-2 section-label transition-all hover:text-white"
                  style={{ fontSize: '0.65rem', letterSpacing: '0.2em' }}
                >
                  {label}
                </a>
              ))}
            </nav>

            {/* STATUS + CTA */}
            <div className="flex items-center gap-4">
              <div className="hidden sm:flex items-center gap-2">
                <span className="status-dot" />
                <span className="section-label" style={{ fontSize: '0.6rem' }}>SYSTEMS ONLINE</span>
              </div>
              <a
                href="https://linkedin.com/in/crtizgar"
                target="_blank"
                rel="noreferrer"
                className="btn-execute text-xs"
              >
                LINKEDIN
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer className="mt-32" style={{ borderTop: '1px solid rgba(0,229,255,0.1)' }}>
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <span className="section-label" style={{ fontSize: '0.6rem' }}>
              SKYNET INTELLIGENCE © 2025 — ALL RIGHTS RESERVED
            </span>
            <div className="flex items-center gap-2">
              <span className="status-dot" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
              <span className="section-label" style={{ fontSize: '0.6rem', color: 'var(--green)' }}>
                ALL SYSTEMS OPERATIONAL
              </span>
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
