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
    desc: 'Risk detection, control mapping, and audit documentation for P2P, R2R, and O2C cycles.',
    tags: ['RISK SCORING', 'CONTROL MAPPING', 'SOX / COSO'],
    color: '#00e5ff',
    rgb: '0,229,255',
  },
  {
    id: 'ifrs',
    code: '02',
    name: 'IFRS AI',
    sub: 'COMPLIANCE ENGINE',
    icon: '◈',
    desc: 'IFRS 9, 15, 16, 17 interpretation. Gap analysis, disclosure checklists, and policy generation.',
    tags: ['IFRS 9/15/16/17', 'DISCLOSURE', 'GAP ANALYSIS'],
    color: '#a855f7',
    rgb: '168,85,247',
  },
  {
    id: 'excel',
    code: '03',
    name: 'EXCEL AI',
    sub: 'DATA FORGE',
    icon: '◰',
    desc: 'Financial formula generation, Power Query automation, and spreadsheet engineering.',
    tags: ['FORMULAS', 'POWER QUERY', 'VBA'],
    color: '#39ff14',
    rgb: '57,255,20',
  },
];

function TypewriterText({ text, speed = 30 }) {
  const [displayed, setDisplayed] = useState('');
  useEffect(() => {
    setDisplayed('');
    let i = 0;
    const iv = setInterval(() => {
      if (i < text.length) { setDisplayed(text.slice(0, i + 1)); i++; }
      else clearInterval(iv);
    }, speed);
    return () => clearInterval(iv);
  }, [text, speed]);
  return (
    <span>
      {displayed}
      <span style={{ color: '#00e5ff', animation: 'cursor-blink 1s steps(1) infinite' }}>█</span>
    </span>
  );
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#000' }}>

      {/* ══ HERO ══════════════════════════════════════════ */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px' }}>

        {/* Status bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '60px', flexWrap: 'wrap', gap: '12px' }}>
          <div className="section-label">
            SYS:INIT → <span style={{ color: '#39ff14' }}>READY</span>
          </div>
          <div className="section-label" style={{ color: '#4a5568' }}>
            BRUSSELS · GRC / IFRS / FP&A
          </div>
        </div>

        {/* Main title */}
        <div style={{ marginBottom: '40px' }}>
          <div className="section-label" style={{ marginBottom: '20px' }}>
            ⚡ AI-POWERED FINANCIAL INTELLIGENCE
          </div>
          <h1
            className="display-heading"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 11vw, 9rem)',
              lineHeight: 0.9,
              letterSpacing: '-0.02em',
              marginBottom: '20px',
            }}
          >
            <span style={{ color: '#00e5ff', display: 'block' }}>SKYNET</span>
            <span style={{
              display: 'block',
              fontSize: '28%',
              fontWeight: 500,
              letterSpacing: '0.3em',
              color: 'rgba(0,229,255,0.45)',
              marginTop: '12px',
            }}>
              AUDIT · IFRS · EXCEL
            </span>
          </h1>

          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.86rem', color: '#4a5568', maxWidth: '500px', lineHeight: 2 }}>
            <TypewriterText text="AI automation for finance professionals. Built by a senior GRC/IFRS expert — not a developer." />
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href="#agents" className="btn-primary">LAUNCH AGENTS →</a>
          <a href="https://linkedin.com/in/crtizgar" target="_blank" rel="noreferrer" className="btn-execute">
            VIEW PROFILE
          </a>
        </div>

        {/* Stats — only 2 */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(2, minmax(0, 200px))',
          border: '1px solid rgba(0,229,255,0.1)',
          background: 'rgba(0,229,255,0.02)',
          overflow: 'hidden',
          width: 'fit-content',
        }}>
          {[
            { value: '3', label: 'AI AGENTS ACTIVE' },
            { value: '15+', label: 'YRS FINANCE EXP' },
          ].map(({ value, label }, i) => (
            <div
              key={label}
              style={{
                padding: '28px 32px',
                textAlign: 'center',
                borderRight: i === 0 ? '1px solid rgba(0,229,255,0.08)' : 'none',
              }}
            >
              <div
                className="display-heading"
                style={{ fontSize: '2.8rem', color: '#00e5ff', fontFamily: 'var(--font-display)', lineHeight: 1 }}
              >
                {value}
              </div>
              <div className="section-label" style={{ marginTop: '8px', fontSize: '0.56rem' }}>{label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ══ AGENTS ════════════════════════════════════════ */}
      <section id="agents" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>

        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <div style={{ width: '32px', height: '1px', background: '#00e5ff' }} />
          <div className="section-label">DEPLOYED AGENTS</div>
          <div style={{ flex: 1, height: '1px', background: 'rgba(0,229,255,0.1)' }} />
          <div className="section-label" style={{ color: '#39ff14' }}>● 3 ONLINE</div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {BOTS.map((bot) => (
            <Link key={bot.id} href={`/tools/${bot.id}`} style={{ textDecoration: 'none' }}>
              <div
                style={{
                  background: '#05050f',
                  border: `1px solid rgba(${bot.rgb},0.18)`,
                  padding: '32px',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  height: '100%',
                  position: 'relative',
                  transition: 'all 0.3s ease',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.borderColor = bot.color;
                  e.currentTarget.style.boxShadow = `0 0 32px ${bot.color}12`;
                  e.currentTarget.style.transform = 'translateY(-4px)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.borderColor = `rgba(${bot.rgb},0.18)`;
                  e.currentTarget.style.boxShadow = 'none';
                  e.currentTarget.style.transform = 'translateY(0)';
                }}
              >
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '14px', borderTop: `2px solid ${bot.color}`, borderLeft: `2px solid ${bot.color}` }} />
                <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '14px', height: '14px', borderBottom: `2px solid ${bot.color}`, borderRight: `2px solid ${bot.color}` }} />

                {/* Icon + code */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <div style={{ fontSize: '2.8rem', color: bot.color, lineHeight: 1, opacity: 0.85 }}>{bot.icon}</div>
                  <div style={{ textAlign: 'right' }}>
                    <div className="section-label" style={{ color: '#4a5568', fontSize: '0.58rem' }}>AGT-{bot.code}</div>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: bot.color, boxShadow: `0 0 7px ${bot.color}`, marginTop: '6px', marginLeft: 'auto', animation: 'blink 2s ease-in-out infinite' }} />
                  </div>
                </div>

                <div className="display-heading" style={{ fontSize: '1.6rem', color: 'white', fontFamily: 'var(--font-display)', marginBottom: '4px' }}>
                  {bot.name}
                </div>
                <div className="section-label" style={{ color: bot.color, marginBottom: '14px' }}>{bot.sub}</div>

                <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.74rem', color: '#4a5568', lineHeight: 1.9, flex: 1, marginBottom: '20px' }}>
                  {bot.desc}
                </p>

                {/* Tags — cada una separada */}
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {bot.tags.map(tag => (
                    <span
                      key={tag}
                      style={{
                        fontFamily: 'var(--font-mono)',
                        fontSize: '0.54rem',
                        fontWeight: 700,
                        letterSpacing: '0.1em',
                        padding: '4px 8px',
                        border: `1px solid rgba(${bot.rgb},0.25)`,
                        color: bot.color,
                        background: `rgba(${bot.rgb},0.06)`,
                        whiteSpace: 'nowrap',
                      }}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="section-label" style={{ color: bot.color, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  INITIALIZE AGENT <span>→</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ══ ABOUT ═════════════════════════════════════════ */}
      <section style={{
        borderTop: '1px solid rgba(0,229,255,0.08)',
        background: '#02020a',
        padding: '64px 24px',
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>
          <div>
            <div className="section-label" style={{ marginBottom: '16px' }}>// WHO BUILT THIS</div>
            <h2
              className="display-heading"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontFamily: 'var(--font-display)', color: 'white', marginBottom: '16px', lineHeight: 1.1 }}
            >
              Finance Professional.<br />
              <span style={{ color: '#00e5ff' }}>AI Builder.</span>
            </h2>
            <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.78rem', color: '#4a5568', lineHeight: 2, maxWidth: '460px' }}>
              15+ years spanning external audit (EC, BDO), internal controls (GHX Europe), and FP&A.
              Now building AI systems that automate the workflows I spent a decade doing manually.
              CISRCP · DORATPro · AML/KYC · MBA Finance.
            </p>
          </div>
          <div>
            {[
              { label: 'DOMAIN', value: 'GRC / FP&A / IFRS' },
              { label: 'CERTS', value: 'CISRCP · DORA · AML' },
              { label: 'ENGINE', value: 'GROQ LLaMA 3.3 70B' },
              { label: 'DEPLOY', value: 'VERCEL EDGE' },
            ].map(({ label, value }) => (
              <div key={label} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(0,229,255,0.07)', fontFamily: 'var(--font-mono)', fontSize: '0.72rem', gap: '16px' }}>
                <span style={{ color: '#4a5568' }}>{label}</span>
                <span style={{ color: '#00e5ff' }}>{value}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
