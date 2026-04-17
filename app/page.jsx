'use client';
import Link from 'next/link';
import { useState, useEffect } from 'react';

const A = '#E8A020';
const B = '#0EA5E9';
const C = '#22C55E';

const BOTS = [
  { id: 'audit', code: '01', name: 'AUDIT AI',  sub: 'SENTINEL PROTOCOL', icon: '⬡', desc: 'Risk detection, control mapping, and audit documentation for P2P, R2R, and O2C cycles.', tags: ['RISK SCORING','CONTROL MAPPING','SOX / COSO'], color: A, rgb: '232,160,32' },
  { id: 'ifrs',  code: '02', name: 'IFRS AI',   sub: 'COMPLIANCE ENGINE',  icon: '◈', desc: 'IFRS 9, 15, 16, 17 interpretation. Gap analysis, disclosure checklists, and policy generation.', tags: ['IFRS 9/15/16/17','DISCLOSURE','GAP ANALYSIS'], color: B, rgb: '14,165,233' },
  { id: 'excel', code: '03', name: 'EXCEL AI',  sub: 'DATA FORGE',         icon: '◰', desc: 'Financial formula generation, Power Query automation, and spreadsheet engineering.', tags: ['FORMULAS','POWER QUERY','VBA'], color: C, rgb: '34,197,94' },
];

const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

function TypewriterText({ text, speed = 28 }) {
  const [d, setD] = useState('');
  useEffect(() => {
    setD(''); let i = 0;
    const iv = setInterval(() => { if (i < text.length) { setD(text.slice(0, ++i)); } else clearInterval(iv); }, speed);
    return () => clearInterval(iv);
  }, [text]);
  return <span>{d}<span style={{ color: A, animation: 'cursor-blink 1s steps(1) infinite' }}>█</span></span>;
}

export default function Home() {
  return (
    <div style={{ minHeight: '100vh', background: '#000000' }}>

      {/* HERO */}
      <section style={{ maxWidth: '1200px', margin: '0 auto', padding: '80px 24px 60px' }}>

        <div style={{ display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap', gap: '12px', marginBottom: '60px' }}>
          <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(232,160,32,0.45)' }}>
            SYS:INIT → <span style={{ color: C }}>READY</span>
          </span>
          <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: '#2a2218' }}>BRUSSELS · GRC / IFRS / FP&A</span>
        </div>

        <div style={{ marginBottom: '40px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(232,160,32,0.4)', marginBottom: '20px' }}>
            ⚡ AI-POWERED FINANCIAL INTELLIGENCE
          </div>
          <h1 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(4rem, 11vw, 9rem)', lineHeight: 0.9, letterSpacing: '-0.02em', marginBottom: '20px' }}>
            <span style={{ color: A, display: 'block' }}>SKYNET</span>
            <span style={{ display: 'block', fontSize: '28%', fontWeight: 500, letterSpacing: '0.3em', color: 'rgba(232,160,32,0.28)', marginTop: '12px' }}>
              AUDIT · IFRS · EXCEL
            </span>
          </h1>
          <p style={{ fontFamily: MONO, fontSize: '0.85rem', color: '#5a4d3a', maxWidth: '500px', lineHeight: 2 }}>
            <TypewriterText text="AI automation for finance professionals. Built by a senior GRC/IFRS expert — not a developer." />
          </p>
        </div>

        {/* CTAs */}
        <div style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', marginBottom: '56px' }}>
          <a href="#agents" style={{
            fontFamily: MONO, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em',
            padding: '0.8rem 2rem', background: 'rgba(232,160,32,0.1)', color: A,
            border: '1px solid rgba(232,160,32,0.5)', textDecoration: 'none',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
          }}>
            LAUNCH AGENTS →
          </a>
          <a href="https://linkedin.com/in/crtizgar" target="_blank" rel="noreferrer" style={{
            fontFamily: MONO, fontSize: '0.72rem', fontWeight: 700, letterSpacing: '0.16em',
            padding: '0.8rem 2rem', background: 'transparent', color: 'rgba(232,160,32,0.38)',
            border: '1px solid rgba(232,160,32,0.18)', textDecoration: 'none',
            clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
          }}>
            VIEW PROFILE
          </a>
        </div>

        {/* 2 stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 180px)', border: '1px solid rgba(232,160,32,0.1)', background: 'rgba(232,160,32,0.02)', overflow: 'hidden', width: 'fit-content' }}>
          {[['3','AI AGENTS ACTIVE'],['15+','YRS FINANCE EXP']].map(([v, l], i) => (
            <div key={l} style={{ padding: '24px 28px', textAlign: 'center', borderRight: i === 0 ? '1px solid rgba(232,160,32,0.08)' : 'none' }}>
              <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '2.6rem', color: A, lineHeight: 1 }}>{v}</div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: 'rgba(232,160,32,0.35)', marginTop: '8px' }}>{l}</div>
            </div>
          ))}
        </div>
      </section>

      {/* AGENTS */}
      <section id="agents" style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 24px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginBottom: '36px' }}>
          <div style={{ width: '32px', height: '1px', background: A }} />
          <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.22em', color: 'rgba(232,160,32,0.45)' }}>DEPLOYED AGENTS</span>
          <div style={{ flex: 1, height: '1px', background: 'rgba(232,160,32,0.08)' }} />
          <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: C }}>● 3 ONLINE</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '20px' }}>
          {BOTS.map((bot) => (
            <Link key={bot.id} href={`/tools/${bot.id}`} style={{ textDecoration: 'none' }}>
              <div
                style={{ background: '#05030c', border: `1px solid rgba(${bot.rgb},0.15)`, padding: '32px', cursor: 'pointer', display: 'flex', flexDirection: 'column', height: '100%', position: 'relative', transition: 'all 0.3s ease' }}
                onMouseEnter={e => { e.currentTarget.style.borderColor = bot.color; e.currentTarget.style.boxShadow = `0 0 30px rgba(${bot.rgb},0.07)`; e.currentTarget.style.transform = 'translateY(-4px)'; }}
                onMouseLeave={e => { e.currentTarget.style.borderColor = `rgba(${bot.rgb},0.15)`; e.currentTarget.style.boxShadow = 'none'; e.currentTarget.style.transform = 'translateY(0)'; }}
              >
                {/* Corner brackets */}
                <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: `2px solid ${bot.color}`, borderLeft: `2px solid ${bot.color}` }} />
                <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: `2px solid ${bot.color}`, borderRight: `2px solid ${bot.color}` }} />

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '20px' }}>
                  <span style={{ fontSize: '2.6rem', color: bot.color, lineHeight: 1, opacity: 0.8 }}>{bot.icon}</span>
                  <div style={{ textAlign: 'right' }}>
                    <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#2a2218' }}>AGT-{bot.code}</div>
                    <div style={{ width: 6, height: 6, borderRadius: '50%', background: bot.color, boxShadow: `0 0 7px ${bot.color}`, marginTop: 6, marginLeft: 'auto', animation: 'blink 2s ease-in-out infinite' }} />
                  </div>
                </div>

                <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '1.6rem', color: '#fff', marginBottom: '4px', letterSpacing: '-0.02em' }}>{bot.name}</div>
                <div style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.18em', color: bot.color, marginBottom: '14px' }}>{bot.sub}</div>
                <p style={{ fontFamily: MONO, fontSize: '0.74rem', color: '#4a3d2a', lineHeight: 1.9, flex: 1, marginBottom: '20px' }}>{bot.desc}</p>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '20px' }}>
                  {bot.tags.map(t => (
                    <span key={t} style={{ fontFamily: MONO, fontSize: '0.52rem', fontWeight: 700, letterSpacing: '0.1em', padding: '4px 8px', border: `1px solid rgba(${bot.rgb},0.22)`, color: bot.color, background: `rgba(${bot.rgb},0.05)`, whiteSpace: 'nowrap' }}>{t}</span>
                  ))}
                </div>

                <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.15em', color: bot.color }}>INITIALIZE AGENT →</div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section style={{ borderTop: '1px solid rgba(232,160,32,0.08)', background: '#02010a', padding: '64px 24px' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'grid', gridTemplateColumns: '1fr 280px', gap: '48px', alignItems: 'start' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.22em', color: 'rgba(232,160,32,0.3)', marginBottom: '16px' }}>// WHO BUILT THIS</div>
            <h2 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#fff', marginBottom: '16px', lineHeight: 1.1 }}>
              Finance Professional.<br /><span style={{ color: A }}>AI Builder.</span>
            </h2>
            <p style={{ fontFamily: MONO, fontSize: '0.77rem', color: '#4a3d2a', lineHeight: 2, maxWidth: '460px' }}>
              15+ years spanning external audit (EC, BDO), internal controls (GHX Europe), and FP&A.
              Now building AI systems that automate the workflows I spent a decade doing manually.
              CISRCP · DORATPro · AML/KYC · MBA Finance.
            </p>
          </div>
          <div>
            {[['DOMAIN','GRC / FP&A / IFRS'],['CERTS','CISRCP · DORA · AML'],['ENGINE','GROQ LLaMA 3.3 70B'],['DEPLOY','VERCEL EDGE']].map(([l, v]) => (
              <div key={l} style={{ display: 'flex', justifyContent: 'space-between', padding: '12px 0', borderBottom: '1px solid rgba(232,160,32,0.07)', fontFamily: MONO, fontSize: '0.7rem', gap: '16px' }}>
                <span style={{ color: '#2a2218' }}>{l}</span>
                <span style={{ color: A }}>{v}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
