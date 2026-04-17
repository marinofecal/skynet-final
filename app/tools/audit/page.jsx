'use client';
import { useState } from 'react';
import Link from 'next/link';

const A = '#E8A020';
const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

const QUICK = [
  'Assess internal controls over the P2P (Purchase-to-Pay) cycle for a mid-size manufacturing company',
  'Evaluate segregation of duties risks in the accounts payable department with 5 staff members',
  'Review IT general controls and access management for SOX Section 404 compliance',
  'Perform risk assessment on the revenue recognition process under IFRS 15 for a SaaS company',
];

function ReportRenderer({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9, color: '#7a6a4a' }}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} style={{ height: '0.6rem' }} />;

        // Numbered section headers: "1." or "1. TITLE"
        if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
          return (
            <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
              <span style={{ color: A, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px' }}>{trimmed.match(/^\d+/)[0]}.</span>
              <span style={{ color: '#d4a84a', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.1em' }}>
                {trimmed.replace(/^\d+\.\s+/, '')}
              </span>
            </div>
          );
        }

        // ## or # headings
        if (/^#{1,3}\s/.test(trimmed)) {
          const text2 = trimmed.replace(/^#+\s+/, '');
          return (
            <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: '#d4a84a', fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em', borderBottom: '1px solid rgba(232,160,32,0.15)', paddingBottom: '4px' }}>
              {text2}
            </div>
          );
        }

        // Bullet: • or - or *
        if (/^[•\-\*]\s/.test(trimmed)) {
          const content = trimmed.replace(/^[•\-\*]\s+/, '');
          return (
            <div key={i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '2px' }}>
              <span style={{ color: A, flexShrink: 0, marginTop: '2px' }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: content.replace(/\*\*(.+?)\*\*/g, `<strong style="color:#c4983a">$1</strong>`) }} />
            </div>
          );
        }

        // Sub-bullet: indented
        if (/^\s{2,}[-•]/.test(line)) {
          const content = trimmed.replace(/^[-•]\s+/, '');
          return (
            <div key={i} style={{ display: 'flex', gap: '8px', marginLeft: '28px', marginBottom: '2px', color: '#5a4d30' }}>
              <span style={{ color: 'rgba(232,160,32,0.4)', flexShrink: 0 }}>·</span>
              <span>{content}</span>
            </div>
          );
        }

        // CONCLUSION or EXECUTIVE SUMMARY style caps labels
        if (/^(CONCLUSION|EXECUTIVE SUMMARY|RECOMMENDATION|SUMMARY|RISK RATING|STATUS):?/.test(trimmed)) {
          return (
            <div key={i} style={{ marginTop: '1.4rem', padding: '10px 14px', background: 'rgba(232,160,32,0.06)', borderLeft: `3px solid ${A}`, color: '#d4a84a', fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.1em' }}>
              {trimmed}
            </div>
          );
        }

        // Bold **text** inline
        return (
          <p key={i} style={{ marginBottom: '2px' }}
            dangerouslySetInnerHTML={{ __html: trimmed.replace(/\*\*(.+?)\*\*/g, `<strong style="color:#c4983a">$1</strong>`) }}
          />
        );
      })}
    </div>
  );
}

export default function AuditBot() {
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
          systemPrompt: `You are a Big 4 senior internal audit partner with 20+ years of experience in GRC, SOX, COSO 2013, IIA Standards, and enterprise risk management.

Produce a formal AUDIT INTELLIGENCE REPORT with the following mandatory structure:

EXECUTIVE SUMMARY
(2-3 sentences summarizing the overall risk posture and key finding)

1. SCOPE & METHODOLOGY
• Audit universe covered
• Standards applied (COSO, IIA, SOX, ISO 31000)
• Assessment approach

2. RISK ASSESSMENT MATRIX
• For each risk identified, provide: Risk name | Likelihood (H/M/L) | Impact (H/M/L) | Rating
• Minimum 4-6 risks

3. CONTROL ENVIRONMENT EVALUATION
• Preventive controls: status and gaps
• Detective controls: status and gaps
• Corrective controls: recommendations

4. KEY AUDIT FINDINGS
• Finding 1: Title, condition, criteria, cause, effect
• Finding 2: (same structure)
• Continue for all material findings

5. REGULATORY & COMPLIANCE CONSIDERATIONS
• Applicable standards and regulations
• Compliance gaps identified

6. PRIORITIZED RECOMMENDATIONS
• Priority 1 (Immediate — 0-30 days): action
• Priority 2 (Short-term — 30-90 days): action
• Priority 3 (Medium-term — 90-180 days): action

CONCLUSION
Overall audit opinion with risk rating (Satisfactory / Needs Improvement / Unsatisfactory) and next steps.

Be thorough, specific, and professional. Minimum 500 words.`,
          prompt: `Conduct a formal internal audit assessment for the following scenario:\n\n${input}`,
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

        <Link href="/" style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(232,160,32,0.4)', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>
          ← RETURN TO BASE
        </Link>

        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '24px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.22em', color: '#2a2218', marginBottom: '10px' }}>AGT-01 / ACTIVE</div>
            <h1 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.95, marginBottom: '8px' }}>AUDIT AI</h1>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: A, marginBottom: '12px' }}>SENTINEL PROTOCOL</div>
            <p style={{ fontFamily: MONO, fontSize: '0.74rem', color: '#4a3d2a', maxWidth: '420px', lineHeight: 1.9 }}>
              Formal audit intelligence reports — risk assessment, control evaluation, and prioritized recommendations at Big 4 standard.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '4rem', color: A, lineHeight: 1, opacity: 0.6 }}>⬡</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#22C55E', boxShadow: '0 0 8px #22C55E', animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: '#22C55E' }}>ONLINE</span>
            </div>
          </div>
        </div>

        {/* Quick prompts */}
        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#2a2218', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setInput(q)} style={{ fontFamily: MONO, fontSize: '0.62rem', color: 'rgba(232,160,32,0.55)', border: '1px solid rgba(232,160,32,0.15)', background: 'rgba(232,160,32,0.03)', padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(232,160,32,0.5)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(232,160,32,0.15)'}>
                {q.length > 55 ? q.slice(0, 55) + '...' : q}
              </button>
            ))}
          </div>
        </div>

        {/* Input */}
        <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.15)', padding: '24px', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: `2px solid ${A}`, borderLeft: `2px solid ${A}` }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: `2px solid ${A}`, borderRight: `2px solid ${A}` }} />

          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(232,160,32,0.5)' }}>// AUDIT SCENARIO</span>
            <span style={{ fontFamily: MONO, fontSize: '0.55rem', color: '#2a2218' }}>ENGINE: GROQ LLaMA 3.3 70B · 4096 TOKENS</span>
          </div>

          <form onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={5}
              placeholder="// Describe the process, department, or control environment to audit..."
              style={{ width: '100%', background: '#02010a', border: '1px solid rgba(232,160,32,0.12)', color: A, fontFamily: MONO, fontSize: '0.78rem', padding: '14px', outline: 'none', resize: 'vertical', caretColor: A, lineHeight: 1.8 }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="submit" disabled={loading || !input.trim()} style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.7rem 1.8rem', background: loading ? 'transparent' : 'rgba(232,160,32,0.1)', color: A, border: `1px solid rgba(232,160,32,${loading ? '0.2' : '0.5'})`, cursor: loading ? 'not-allowed' : 'pointer', opacity: !input.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ EXECUTE AUDIT'}
              </button>
            </div>
          </form>
        </div>

        {/* Loading */}
        {loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.12)', padding: '24px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: A, marginBottom: '16px' }}>// COMPILING AUDIT REPORT</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: A, animation: `blink 1s ease-in-out ${i * 0.12}s infinite`, height: `${12 + i * 4}px`, opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#3a3020', marginLeft: '12px' }}>PROCESSING — THIS MAY TAKE A MOMENT FOR A FULL REPORT</span>
            </div>
          </div>
        )}

        {/* Report output */}
        {response && !loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: 'rgba(232,160,32,0.04)', borderBottom: '1px solid rgba(232,160,32,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: A }}>// AUDIT INTELLIGENCE REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#22C55E' }}>COMPLETE</span>
              </div>
            </div>
            <div style={{ padding: '32px' }}>
              <ReportRenderer text={response} />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
