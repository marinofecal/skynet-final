'use client';
import { useState } from 'react';
import Link from 'next/link';

const COLOR = '#0EA5E9';
const RGB = '14,165,233';
const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

const QUICK = [
  'IFRS 15 revenue recognition for a SaaS company with multi-element arrangements',
  'IFRS 16 lease classification and right-of-use asset measurement for a 5-year office lease',
  'IFRS 9 expected credit loss provisioning for a portfolio of trade receivables',
  'IFRS 17 measurement approach selection — PAA vs GMM for a general insurance portfolio',
];

function ReportRenderer({ text, color, rgb }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9, color: '#4a5a6a' }}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} style={{ height: '0.6rem' }} />;
        if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
          return (
            <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
              <span style={{ color, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px' }}>{trimmed.match(/^\d+/)[0]}.</span>
              <span style={{ color: `rgba(${rgb},0.85)`, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em' }}>{trimmed.replace(/^\d+\.\s+/, '')}</span>
            </div>
          );
        }
        if (/^#{1,3}\s/.test(trimmed)) {
          return <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: `rgba(${rgb},0.85)`, fontWeight: 700, fontSize: '0.78rem', borderBottom: `1px solid rgba(${rgb},0.15)`, paddingBottom: '4px' }}>{trimmed.replace(/^#+\s+/, '')}</div>;
        }
        if (/^[•\-\*]\s/.test(trimmed)) {
          const content = trimmed.replace(/^[•\-\*]\s+/, '');
          return (
            <div key={i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '2px' }}>
              <span style={{ color, flexShrink: 0 }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.+?)\*\*/g, `<strong style="color:rgba(${rgb},0.9)">$1</strong>`) }} />
            </div>
          );
        }
        if (/^(CONCLUSION|EXECUTIVE SUMMARY|RECOMMENDATION|COMPLIANCE STATUS|OPINION):?/.test(trimmed)) {
          return <div key={i} style={{ marginTop: '1.4rem', padding: '10px 14px', background: `rgba(${rgb},0.06)`, borderLeft: `3px solid ${color}`, color: `rgba(${rgb},0.85)`, fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.1em' }}>{trimmed}</div>;
        }
        return <p key={i} style={{ marginBottom: '2px' }} dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.+?)\*\*/g, `<strong style="color:rgba(${rgb},0.85)">$1</strong>`) }} />;
      })}
    </div>
  );
}

export default function IFRSBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: `You are a Big 4 technical accounting partner specializing in IFRS, with extensive experience advising listed companies, insurance groups, and financial institutions.

Produce a formal IFRS COMPLIANCE REPORT with this mandatory structure:

EXECUTIVE SUMMARY
(2-3 sentences: applicable standards, key compliance requirements, overall assessment)

1. APPLICABLE STANDARDS & SCOPE
• Which IFRS standards apply and why
• Interaction between standards if relevant
• Effective dates and transition requirements

2. RECOGNITION & MEASUREMENT REQUIREMENTS
• Specific criteria that must be met
• Measurement basis and methodology
• Step-by-step application to the scenario

3. JOURNAL ENTRIES & CALCULATIONS
• Key accounting entries required
• Measurement examples with illustrative numbers where relevant

4. DISCLOSURE REQUIREMENTS
• Mandatory disclosures under applicable standards
• Specific paragraph references (e.g., IFRS 15.114-122)
• Suggested disclosure language

5. COMMON PITFALLS & TECHNICAL ISSUES
• Frequent misapplication errors
• Areas requiring significant judgment
• Industry-specific considerations

6. COMPLIANCE CHECKLIST
• ☐ Item 1
• ☐ Item 2
(minimum 8 checkpoints)

CONCLUSION
Technical accounting opinion with compliance rating and key action items.

Be authoritative, cite specific standard paragraphs where relevant, minimum 500 words.`,
          prompt: `Provide a formal IFRS technical analysis for:\n\n${input}`,
        }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch {
      setResponse('ERROR: Connection failed. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ minHeight: '100vh', background: '#000', padding: '60px 24px' }}>
      <div style={{ maxWidth: '960px', margin: '0 auto' }}>

        <Link href="/" style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: `rgba(${RGB},0.35)`, textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>
          ← RETURN TO BASE
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '24px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.22em', color: '#1a2530', marginBottom: '10px' }}>AGT-02 / ACTIVE</div>
            <h1 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.95, marginBottom: '8px' }}>IFRS AI</h1>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: COLOR, marginBottom: '12px' }}>COMPLIANCE ENGINE</div>
            <p style={{ fontFamily: MONO, fontSize: '0.74rem', color: '#2a3d4a', maxWidth: '420px', lineHeight: 1.9 }}>
              Formal IFRS technical reports — standard interpretation, disclosure requirements, and compliance checklists at Big 4 standard.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '4rem', color: COLOR, lineHeight: 1, opacity: 0.6 }}>◈</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: COLOR, boxShadow: `0 0 8px ${COLOR}`, animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: COLOR }}>ONLINE</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#1a2530', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setInput(q)} style={{ fontFamily: MONO, fontSize: '0.62rem', color: `rgba(${RGB},0.5)`, border: `1px solid rgba(${RGB},0.15)`, background: `rgba(${RGB},0.03)`, padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = `rgba(${RGB},0.5)`}
                onMouseLeave={e => e.target.style.borderColor = `rgba(${RGB},0.15)`}>
                {q.length > 55 ? q.slice(0, 55) + '...' : q}
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: '#05030c', border: `1px solid rgba(${RGB},0.15)`, padding: '24px', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: `2px solid ${COLOR}`, borderLeft: `2px solid ${COLOR}` }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: `2px solid ${COLOR}`, borderRight: `2px solid ${COLOR}` }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: `rgba(${RGB},0.45)` }}>// IFRS SCENARIO</span>
            <span style={{ fontFamily: MONO, fontSize: '0.55rem', color: '#1a2530' }}>ENGINE: GROQ LLaMA 3.3 70B · 4096 TOKENS</span>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea value={input} onChange={e => setInput(e.target.value)} rows={5}
              placeholder="// Describe the accounting scenario, transaction, or IFRS standard to analyze..."
              style={{ width: '100%', background: '#02010a', border: `1px solid rgba(${RGB},0.12)`, color: COLOR, fontFamily: MONO, fontSize: '0.78rem', padding: '14px', outline: 'none', resize: 'vertical', caretColor: COLOR, lineHeight: 1.8 }} />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="submit" disabled={loading || !input.trim()} style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.7rem 1.8rem', background: `rgba(${RGB},0.08)`, color: COLOR, border: `1px solid rgba(${RGB},${loading ? '0.2' : '0.5'})`, cursor: loading ? 'not-allowed' : 'pointer', opacity: !input.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ ANALYZE STANDARD'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ background: '#05030c', border: `1px solid rgba(${RGB},0.12)`, padding: '24px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: COLOR, marginBottom: '16px' }}>// CROSS-REFERENCING IFRS DATABASE</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: COLOR, animation: `blink 1s ease-in-out ${i * 0.12}s infinite`, height: `${12 + i * 4}px`, opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#1a2530', marginLeft: '12px' }}>PARSING STANDARDS — FULL REPORT IN PROGRESS</span>
            </div>
          </div>
        )}

        {response && !loading && (
          <div style={{ background: '#05030c', border: `1px solid rgba(${RGB},0.15)`, overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: `rgba(${RGB},0.04)`, borderBottom: `1px solid rgba(${RGB},0.1)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: COLOR }}>// IFRS COMPLIANCE REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#22C55E' }}>COMPLETE</span>
              </div>
            </div>
            <div style={{ padding: '32px' }}>
              <ReportRenderer text={response} color={COLOR} rgb={RGB} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
