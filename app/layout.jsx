import './globals.css';

export const metadata = {
  title: 'SKYNET | AI Command Center',
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
            style={{ background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 70%)', filter: 'blur(60px)' }}
          />
        </div>

        {/* ── HEADER ── */}
        <header
          className="sticky top-0 z-50"
          style={{
            borderBottom: '1px solid rgba(0,229,255,0.15)',
            background: 'rgba(0,0,0,0.90)',
            backdropFilter: 'blur(20px)',
          }}
        >
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center gap-6">

            {/* LOGO */}
            <a href="/" className="flex items-center gap-3 group shrink-0">
              <div className="relative w-8 h-8">
                <div
                  className="absolute inset-0 border-2 rotate-45 transition-all duration-500 group-hover:rotate-[90deg]"
                  style={{ borderColor: 'var(--cyan)' }}
                />
                <div
                  className="absolute inset-[5px] rotate-45"
                  style={{ background: 'var(--cyan)' }}
                />
              </div>
              <span
                className="display-heading text-xl tracking-widest"
                style={{ color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}
              >
                SKYNET
              </span>
            </a>

            {/* NAV — bots clearly separated */}
            <nav className="flex items-center gap-1">

              <a
                href="/"
                className="section-label px-3 py-2 transition-all hover:text-white"
                style={{ fontSize: '0.62rem', letterSpacing: '0.18em' }}
              >
                HOME
              </a>

              <span style={{ color: 'rgba(0,229,255,0.2)', fontSize: '0.5rem', padding: '0 2px' }}>|</span>

              {/* BOT LINKS */}
              {[
                { href: '/tools/audit', label: 'AUDIT AI', color: 'var(--cyan)' },
                { href: '/tools/ifrs',  label: 'IFRS AI',  color: 'var(--purple)' },
                { href: '/tools/excel', label: 'EXCEL AI', color: 'var(--green)' },
              ].map(({ href, label, color }, i, arr) => (
                <div key={href} className="flex items-center">
                  <a
                    href={href}
                    className="flex items-center gap-1.5 px-3 py-2 transition-all group"
                    style={{ fontSize: '0.62rem', letterSpacing: '0.15em', fontFamily: 'var(--font-mono)' }}
                  >
                    <span
                      style={{
                        width: '5px',
                        height: '5px',
                        borderRadius: '50%',
                        background: color,
                        boxShadow: `0 0 6px ${color}`,
                        display: 'inline-block',
                        flexShrink: 0,
                      }}
                    />
                    <span
                      className="text-gray-400 group-hover:text-white transition-colors"
                      style={{ fontWeight: 600 }}
                    >
                      {label}
                    </span>
                  </a>
                  {i < arr.length - 1 && (
                    <span style={{ color: 'rgba(0,229,255,0.15)', fontSize: '0.5rem' }}>·</span>
                  )}
                </div>
              ))}
            </nav>

            {/* RIGHT: status + CTA */}
            <div className="flex items-center gap-4 shrink-0">
              <div className="hidden lg:flex items-center gap-2">
                <span className="status-dot" />
                <span className="section-label" style={{ fontSize: '0.58rem', color: 'var(--green)' }}>
                  3 AGENTS ONLINE
                </span>
              </div>
              <a
                href="https://linkedin.com/in/crtizgar"
                target="_blank"
                rel="noreferrer"
                className="btn-execute"
                style={{ fontSize: '0.65rem', padding: '0.55rem 1.2rem' }}
              >
                LINKEDIN
              </a>
            </div>

          </div>
        </header>

        <main>{children}</main>

        {/* ── FOOTER ── */}
        <footer className="mt-32" style={{ borderTop: '1px solid rgba(0,229,255,0.08)' }}>
          <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="relative w-5 h-5">
                <div className="absolute inset-0 border rotate-45" style={{ borderColor: 'var(--cyan)', opacity: 0.6 }} />
                <div className="absolute inset-[3px] rotate-45" style={{ background: 'var(--cyan)', opacity: 0.6 }} />
              </div>
              <span className="section-label" style={{ fontSize: '0.6rem' }}>
                SKYNET © 2025 — ALL RIGHTS RESERVED
              </span>
            </div>
            <div className="flex items-center gap-6">
              {[
                { label: 'AUDIT AI', color: 'var(--cyan)' },
                { label: 'IFRS AI',  color: 'var(--purple)' },
                { label: 'EXCEL AI', color: 'var(--green)' },
              ].map(({ label, color }) => (
                <div key={label} className="flex items-center gap-1.5">
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: color, boxShadow: `0 0 5px ${color}`, display: 'inline-block' }} />
                  <span className="section-label" style={{ fontSize: '0.55rem', color }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
