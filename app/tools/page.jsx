'use client';
import Link from 'next/link';

const TOOLS = [
  {
    id: 'audit',
    code: '01',
    name: 'AUDIT AI',
    sub: 'SENTINEL PROTOCOL',
    icon: '⬡',
    desc: 'Internal controls assessment, risk scoring, and audit documentation for P2P, O2C, and R2R cycles.',
    tags: ['RISK', 'CONTROLS', 'SOX'],
    color: 'var(--cyan)',
  },
  {
    id: 'ifrs',
    code: '02',
    name: 'IFRS AI',
    sub: 'COMPLIANCE ENGINE',
    icon: '◈',
    desc: 'IFRS 9, 15, 16, 17 standard interpretation, gap analysis, and compliant disclosure generation.',
    tags: ['IFRS', 'DISCLOSURE', 'COMPLIANCE'],
    color: 'var(--purple)',
  },
  {
    id: 'excel',
    code: '03',
    name: 'EXCEL AI',
    sub: 'DATA FORGE',
    icon: '◰',
    desc: 'Financial formula generation, Power Query automation, and spreadsheet logic for business analysts.',
    tags: ['FORMULAS', 'POWER QUERY', 'VBA'],
    color: 'var(--green)',
  },
];

export default function ToolsPage() {
  return (
    <div className="min-h-screen px-6 py-16 max-w-7xl mx-auto">

      {/* Header */}
      <div className="mb-16">
        <Link href="/" className="section-label hover:text-white transition mb-8 inline-block">
          ← RETURN TO BASE
        </Link>
        <div className="flex items-center gap-4 mt-6 mb-4">
          <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
          <div className="section-label">AGENT DIRECTORY</div>
        </div>
        <h1
          className="display-heading"
          style={{ fontSize: 'clamp(3rem, 6vw, 5rem)', fontFamily: 'var(--font-display)', color: 'white' }}
        >
          AI SYSTEMS FOR
          <br />
          <span style={{ color: 'var(--cyan)' }}>FINANCE & COMPLIANCE</span>
        </h1>
        <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)', marginTop: '1rem', maxWidth: '500px', lineHeight: 1.9 }}>
          Enterprise-grade AI copilots for audit, IFRS interpretation, and financial workflow automation.
        </p>
      </div>

      {/* Grid */}
      <div className="grid md:grid-cols-3 gap-6">
        {TOOLS.map((tool) => (
          <Link key={tool.id} href={`/tools/${tool.id}`}>
            <div className="bracket-card rounded-none p-8 cursor-pointer group h-full flex flex-col">

              <div className="flex justify-between items-start mb-8">
                <div
                  className="display-heading"
                  style={{ fontSize: '4rem', color: tool.color, fontFamily: 'var(--font-display)', lineHeight: 1 }}
                >
                  {tool.icon}
                </div>
                <div className="flex flex-col items-end gap-2">
                  <span className="section-label" style={{ color: 'var(--muted)' }}>AGT-{tool.code}</span>
                  <span className="status-dot" style={{ background: tool.color, boxShadow: `0 0 8px ${tool.color}` }} />
                </div>
              </div>

              <div
                className="display-heading mb-1"
                style={{ fontSize: '1.6rem', color: 'white', fontFamily: 'var(--font-display)' }}
              >
                {tool.name}
              </div>
              <div className="section-label mb-4" style={{ color: tool.color }}>{tool.sub}</div>

              <p
                className="flex-1 mb-6"
                style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--muted)', lineHeight: 1.9 }}
              >
                {tool.desc}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {tool.tags.map(tag => (
                  <span
                    key={tag}
                    className="section-label px-2 py-1"
                    style={{
                      fontSize: '0.55rem',
                      border: `1px solid ${tool.color}28`,
                      color: tool.color,
                      background: `${tool.color}06`,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <div
                className="section-label flex items-center gap-2 group-hover:gap-4 transition-all"
                style={{ color: tool.color }}
              >
                INITIALIZE → 
              </div>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
