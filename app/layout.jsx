import './globals.css';

export const metadata = {
  title: 'SKYNET | AI Command Center',
  description: 'AI automation for audit, IFRS compliance, and financial analysis',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Syne:wght@400;500;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body style={{ background: '#000000', color: '#8a7d6a', fontFamily: "'JetBrains Mono', monospace", margin: 0, padding: 0, overflowX: 'hidden' }}>

        {/* Background */}
        <div style={{ position: 'fixed', inset: 0, zIndex: -10, background: '#000000' }}>
          <div style={{ position: 'absolute', inset: 0, backgroundImage: 'linear-gradient(rgba(232,160,32,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(232,160,32,0.03) 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
          <div style={{ position: 'absolute', top: 0, left: '30%', width: '500px', height: '500px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(232,160,32,0.04) 0%, transparent 70%)', filter: 'blur(40px)', animation: 'float 8s ease-in-out infinite' }} />
          <div style={{ position: 'absolute', bottom: 0, right: '20%', width: '400px', height: '400px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(14,165,233,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        </div>

        {/* Header */}
        <header style={{ position: 'sticky', top: 0, zIndex: 50, background: 'rgba(0,0,0,0.92)', backdropFilter: 'blur(20px)', borderBottom: '1px solid rgba(232,160,32,0.12)' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '14px 24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '24px' }}>

            {/* Logo */}
            <a href="/" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
              <div style={{ position: 'relative', width: '28px', height: '28px', flexShrink: 0 }}>
                <div style={{ position: 'absolute', inset: 0, border: '2px solid #E8A020', transform: 'rotate(45deg)', transition: 'transform 0.4s' }} />
                <div style={{ position: 'absolute', inset: '6px', background: '#E8A020', transform: 'rotate(45deg)' }} />
              </div>
              <span style={{ fontFamily: "'Syne', sans-serif", fontWeight: 800, fontSize: '1.2rem', letterSpacing: '0.12em', color: '#E8A020' }}>
                SKYNET
              </span>
            </a>

            {/* Nav */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
              <a href="/" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(232,160,32,0.45)', padding: '8px 12px', textDecoration: 'none' }}>
                HOME
              </a>
              <span style={{ color: 'rgba(232,160,32,0.15)', fontSize: '0.5rem' }}>|</span>
              {[
                { href: '/tools/audit', label: 'AUDIT AI', color: '#E8A020' },
                { href: '/tools/ifrs',  label: 'IFRS AI',  color: '#0EA5E9' },
                { href: '/tools/excel', label: 'EXCEL AI', color: '#22C55E' },
              ].map(({ href, label, color }, i, arr) => (
                <span key={href} style={{ display: 'flex', alignItems: 'center' }}>
                  <a href={href} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.6rem', letterSpacing: '0.15em', color: 'rgba(150,150,150,0.6)', padding: '8px 12px', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: color, boxShadow: `0 0 6px ${color}`, display: 'inline-block', flexShrink: 0 }} />
                    {label}
                  </a>
                  {i < arr.length - 1 && <span style={{ color: 'rgba(232,160,32,0.1)', fontSize: '0.5rem' }}>·</span>}
                </span>
              ))}
            </nav>

            {/* Right */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexShrink: 0 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '5px', height: '5px', borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 7px #22C55E', display: 'inline-block', animation: 'blink 2s ease-in-out infinite' }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.18em', color: '#22C55E' }}>3 ONLINE</span>
              </div>
              <a href="https://linkedin.com/in/crtizgar" target="_blank" rel="noreferrer" style={{
                fontFamily: "'JetBrains Mono', monospace", fontSize: '0.62rem', fontWeight: 700, letterSpacing: '0.14em',
                padding: '0.55rem 1.2rem', background: 'rgba(232,160,32,0.08)', color: '#E8A020',
                border: '1px solid rgba(232,160,32,0.4)', textDecoration: 'none',
                clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)',
              }}>
                LINKEDIN
              </a>
            </div>
          </div>
        </header>

        <main>{children}</main>

        {/* Footer */}
        <footer style={{ marginTop: '80px', borderTop: '1px solid rgba(232,160,32,0.08)', background: '#000' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '16px' }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.58rem', letterSpacing: '0.18em', color: 'rgba(232,160,32,0.3)' }}>
              SKYNET © 2025 — ALL RIGHTS RESERVED
            </span>
            <div style={{ display: 'flex', gap: '20px' }}>
              {[['AUDIT AI','#E8A020'], ['IFRS AI','#0EA5E9'], ['EXCEL AI','#22C55E']].map(([label, color]) => (
                <div key={label} style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                  <span style={{ width: '4px', height: '4px', borderRadius: '50%', background: color, display: 'inline-block' }} />
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '0.55rem', letterSpacing: '0.15em', color }}>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </footer>

      </body>
    </html>
  );
}
