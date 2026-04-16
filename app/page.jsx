'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const BOTS = [
  {
    id: 'audit',
    code: '01',
    name: 'AUDIT AI',
    sub: 'SENTINEL PROTOCOL',
    icon: '⬡',
    desc: 'Real-time risk detection, control mapping, and audit documentation across P2P, R2R, and O2C cycles.',
    tags: ['RISK SCORING', 'CONTROL MAPPING', 'SOX/COSO'],
    color: 'var(--cyan)',
  },
  {
    id: 'ifrs',
    code: '02',
    name: 'IFRS AI',
    sub: 'COMPLIANCE ENGINE',
    icon: '◈',
    desc: 'Automated IFRS 9, 15, 16, 17 interpretation. Standard gap analysis, disclosure checklists, and policy generation.',
    tags: ['IFRS 9/15/16/17', 'DISCLOSURE', 'GAP ANALYSIS'],
    color: 'var(--purple)',
  },
  {
    id: 'excel',
    code: '03',
    name: 'EXCEL AI',
    sub: 'DATA FORGE',
    icon: '◰',
    desc: 'Transform financial problems into formula logic. XLOOKUP, dynamic arrays, Power Query, and VBA automation.',
    tags: ['FORMULAS', 'POWER QUERY', 'VBA'],
    color: 'var(--green)',
  },
];

const STATS = [
  { value: '3', label: 'AI AGENTS ACTIVE' },
  { value: '15+', label: 'YRS FINANCE EXP' },
  { value: '∞', label: 'QUERIES / MONTH' },
  { value: '99%', label: 'UPTIME SLA' },
];

function TypewriterText({ text, speed = 40, className = '' }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const interval = setInterval(() => {
      if (i < text.length) {
        setDisplayed(text.slice(0, i + 1));
        i++;
      } else {
        clearInterval(interval);
      }
    }, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return (
    <span className={className}>
      {displayed}
      <span style={{ color: 'var(--cyan)', animation: 'cursor-blink 1s steps(1) infinite' }}>█</span>
    </span>
  );
}

export default function Home() {
  const [activeBot, setActiveBot] = useState(null);

  return (
    <div className="relative min-h-screen">

      {/* ── HERO ──────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-12 pb-24 max-w-7xl mx-auto">

        {/* Top row: coordinates */}
        <div className="flex justify-between items-center mb-16 animate-fade-up" style={{ animationDelay: '0.1s', opacity: 0 }}>
          <div className="section-label">
            SYS:INIT → <span style={{ color: 'var(--green)' }}>READY</span>
          </div>
          <div className="section-label hidden sm:block">
            LAT:50.8503°N — LON:4.3517°E — BRUSSELS
          </div>
        </div>

        {/* Main headline */}
        <div className="max-w-5xl">
          <div className="section-label mb-6 animate-fade-up" style={{ animationDelay: '0.2s', opacity: 0 }}>
            ⚡ NEXT-GENERATION FINANCIAL INTELLIGENCE
          </div>

          <h1
            className="display-heading mb-6 animate-fade-up"
            style={{
              fontSize: 'clamp(4rem, 12vw, 10rem)',
              animationDelay: '0.3s',
              opacity: 0,
              fontFamily: 'var(--font-display)',
            }}
          >
            <span style={{ color: 'var(--cyan)' }}>NEURAL</span>
            <br />
            <span style={{ color: 'white' }}>FINANCE</span>
            <br />
            <span style={{
              WebkitTextStroke: '1px rgba(0,229,255,0.4)',
              color: 'transparent',
            }}>
              COMMAND
            </span>
          </h1>

          <p
            className="animate-fade-up"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.9rem',
              color: 'var(--muted)',
              maxWidth: '520px',
              lineHeight: 1.8,
              animationDelay: '0.5s',
              opacity: 0,
            }}
          >
            <TypewriterText
              text="AI-powered audit, IFRS compliance, and financial automation. Built by a finance professional for finance professionals."
              speed={25}
            />
          </p>

          {/* CTA row */}
          <div className="flex flex-wrap gap-4 mt-10 animate-fade-up" style={{ animationDelay: '0.7s', opacity: 0 }}>
            <a href="#agents" className="btn-primary">LAUNCH AGENTS →</a>
            <a
              href="https://linkedin.com/in/crtizgar"
              target="_blank"
              rel="noreferrer"
              className="btn-execute"
            >
              VIEW PROFILE
            </a>
          </div>
        </div>

        {/* Stats row */}
        <div
          className="grid grid-cols-2 md:grid-cols-4 gap-px mt-20 animate-fade-up"
          style={{
            border: '1px solid rgba(0,229,255,0.1)',
            animationDelay: '0.9s',
            opacity: 0,
          }}
        >
          {STATS.map(({ value, label }) => (
            <div
              key={label}
              className="flex flex-col items-center justify-center py-6 px-4"
              style={{ borderRight: '1px solid rgba(0,229,255,0.08)', background: 'rgba(0,229,255,0.02)' }}
            >
              <div
                className="display-heading"
                style={{ fontSize: '2.5rem', color: 'var(--cyan)', fontFamily: 'var(--font-display)' }}
              >
                {value}
              </div>
              <div className="section-label mt-1" style={{ fontSize: '0.55rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ── AGENTS GRID ───────────────────────────────── */}
      <section id="agents" className="px-6 pb-32 max-w-7xl mx-auto">

        <div className="flex items-center gap-4 mb-12">
          <div style={{ width: '40px', height: '1px', background: 'var(--cyan)' }} />
          <div className="section-label">DEPLOYED AGENTS</div>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,229,255,0.12)' }} />
          <div className="section-label" style={{ color: 'var(--green)' }}>3 ONLINE</div>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {BOTS.map((bot, i) => (
            <Link key={bot.id} href={`/tools/${bot.id}`}>
              <div
                className="bracket-card rounded-none p-8 cursor-pointer group h-full flex flex-col"
                style={{ animationDelay: `${i * 0.15}s` }}
                onMouseEnter={() => setActiveBot(bot.id)}
                onMouseLeave={() => setActiveBot(null)}
              >
                {/* Header row */}
                <div className="flex justify-between items-start mb-6">
                  <div
                    className="display-heading"
                    style={{ fontSize: '3.5rem', color: bot.color, fontFamily: 'var(--font-display)', opacity: 0.9 }}
                  >
                    {bot.icon}
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="section-label" style={{ color: 'var(--muted)' }}>AGT-{bot.code}</span>
                    <span className="status-dot" style={{ background: bot.color, boxShadow: `0 0 8px ${bot.color}` }} />
                  </div>
                </div>

                {/* Name */}
                <div
                  className="display-heading mb-1 glitch"
                  data-text={bot.name}
                  style={{ fontSize: '1.8rem', color: 'white', fontFamily: 'var(--font-display)' }}
                >
                  {bot.name}
                </div>
                <div className="section-label mb-4" style={{ color: bot.color }}>{bot.sub}</div>

                {/* Description */}
                <p
                  className="flex-1 mb-6"
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.78rem',
                    color: 'var(--muted)',
                    lineHeight: 1.8,
                  }}
                >
                  {bot.desc}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {bot.tags.map(tag => (
                    <span
                      key={tag}
                      className="section-label px-2 py-1"
                      style={{
                        fontSize: '0.55rem',
                        border: `1px solid ${bot.color}30`,
                        color: bot.color,
                        background: `${bot.color}08`,
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div
                  className="flex items-center gap-2 section-label group-hover:gap-4 transition-all"
                  style={{ color: bot.color }}
                >
                  <span>INITIALIZE AGENT</span>
                  <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── ABOUT STRIP ───────────────────────────────── */}
      <section
        className="px-6 py-20"
        style={{ borderTop: '1px solid rgba(0,229,255,0.08)', borderBottom: '1px solid rgba(0,229,255,0.08)', background: 'rgba(0,229,255,0.015)' }}
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-12 items-start">
          <div className="flex-1">
            <div className="section-label mb-4">// WHO BUILT THIS</div>
            <h2
              className="display-heading mb-4"
              style={{ fontSize: '2.5rem', fontFamily: 'var(--font-display)', color: 'white' }}
            >
              Finance Professional.<br />
              <span style={{ color: 'var(--cyan)' }}>AI Builder.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8rem', color: 'var(--muted)', lineHeight: 2, maxWidth: '480px' }}>
              15+ years spanning external audit (EC, BDO), internal controls (GHX Europe), and FP&A. 
              Now building AI systems that automate the workflows I spent a decade doing manually.
              CISRCP · DORATPro · AML/KYC · MBA Finance
            </p>
          </div>
          <div className="flex flex-col gap-3 min-w-[280px]">
            {[
              { label: 'DOMAIN', value: 'GRC / FP&A / IFRS' },
              { label: 'CERTIFICATIONS', value: 'CISRCP · DORA · AML' },
              { label: 'DEPLOYMENT', value: 'VERCEL EDGE NETWORK' },
              { label: 'AI ENGINE', value: 'GROQ LLaMA 3.3 70B' },
            ].map(({ label, value }) => (
              <div
                key={label}
                className="flex justify-between items-center py-3 px-4"
                style={{ borderBottom: '1px solid rgba(0,229,255,0.08)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem' }}
              >
                <span style={{ color: 'var(--muted)' }}>{label}</span>
                <span style={{ color: 'var(--cyan)' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
