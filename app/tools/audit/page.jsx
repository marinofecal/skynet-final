'use client';
import { useState } from 'react';
import Link from 'next/link';

const A = '#E8A020';
const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

const QUICK = [
  'Assess internal controls over the P2P cycle for a mid-size manufacturing company',
  'Evaluate segregation of duties in accounts payable with 5 staff members',
  'Review IT general controls and access management for SOX Section 404 compliance',
  'Risk assessment on revenue recognition under IFRS 15 for a SaaS company',
];

function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#c4983a">$1</strong>')
    .replace(/`(.+?)`/g, '<code style="background:rgba(232,160,32,0.1);color:#E8A020;padding:1px 5px">$1</code>');
}

function ReportRenderer({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  const elements = [];
  let i = 0;

  while (i < lines.length) {
    const line = lines[i];
    const trimmed = line.trim();

    if (!trimmed) {
      elements.push(<div key={'e' + i} style={{ height: '0.5rem' }} />);
      i++; continue;
    }

    // TABLE
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }
      const rows = tableLines.filter(r => !/^\|[\s\-|]+\|$/.test(r));
      if (rows.length > 0) {
        const parsed = rows.map(r =>
          r.split('|').filter((_, idx, arr) => idx > 0 && idx < arr.length - 1).map(c => c.trim())
        );
        const headers = parsed[0];
        const body = parsed.slice(1);
        elements.push(
          <div key={'t' + i} style={{ overflowX: 'auto', margin: '16px 0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: MONO, fontSize: '0.72rem' }}>
              <thead>
                <tr style={{ borderBottom: '2px solid rgba(232,160,32,0.3)' }}>
                  {headers.map((h, hi) => (
                    <th key={hi} style={{ padding: '8px 12px', textAlign: 'left', color: A, fontWeight: 700, letterSpacing: '0.1em', background: 'rgba(232,160,32,0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid rgba(232,160,32,0.07)' }}>
                    {row.map((cell, ci) => {
                      const ratingColor = cell === 'High' ? '#ff4444' : cell === 'Medium' ? '#E8A020' : cell === 'Low' ? '#22C55E' : null;
                      return (
                        <td key={ci} style={{ padding: '8px 12px', color: ratingColor || '#7a6a4a', background: ri % 2 === 0 ? 'rgba(232,160,32,0.02)' : 'transparent' }}>
                          {ratingColor
                            ? <span style={{ padding: '2px 8px', border: '1px solid ' + ratingColor + '40', background: ratingColor + '12', fontWeight: 700 }}>{cell}</span>
                            : cell}
                        </td>
                      );
                    })}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // NUMBERED SECTION
    if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
      elements.push(
        <div key={'n' + i} style={{ marginTop: '1.6rem', marginBottom: '0.6rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
          <span style={{ color: A, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px', flexShrink: 0 }}>{trimmed.match(/^\d+/)[0]}.</span>
          <span style={{ color: '#d4a84a', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.08em', borderBottom: '1px solid rgba(232,160,32,0.15)', paddingBottom: '4px', flex: 1 }}>
            {trimmed.replace(/^\d+\.\s+/, '')}
          </span>
        </div>
      );
      i++; continue;
    }

    // ## HEADING
    if (/^#{1,3}\s/.test(trimmed)) {
      elements.push(
        <div key={'h' + i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: '#d4a84a', fontWeight: 700, fontSize: '0.8rem', borderBottom: '1px solid rgba(232,160,32,0.12)', paddingBottom: '4px' }}>
          {trimmed.replace(/^#+\s+/, '')}
        </div>
      );
      i++; continue;
    }

    // CAPS BLOCK
    if (/^(CONCLUSION|EXECUTIVE SUMMARY|AUDIT INTELLIGENCE REPORT|AUDIT OPINION)/i.test(trimmed) && trimmed === trimmed.toUpperCase()) {
      elements.push(
        <div key={'c' + i} style={{ marginTop: '1.6rem', padding: '12px 16px', background: 'rgba(232,160,32,0.07)', borderLeft: '3px solid ' + A, color: '#d4a84a', fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.12em' }}>
          {trimmed}
        </div>
      );
      i++; continue;
    }

    // BULLET
    if (/^[•\-\*]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[•\-\*]\s+/, '');
      elements.push(
        <div key={'b' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color: A, flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▸</span>
          <span style={{ color: '#7a6a4a' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // SUB-BULLET +
    if (/^\+\s/.test(trimmed) || /^\s{3,}[-•]/.test(line)) {
      const content = trimmed.replace(/^[\+\-•]\s+/, '');
      elements.push(
        <div key={'s' + i} style={{ display: 'flex', gap: '8px', marginLeft: '28px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color: 'rgba(232,160,32,0.35)', flexShrink: 0, fontSize: '0.6rem', marginTop: '3px' }}>·</span>
          <span style={{ color: '#5a4d30', fontSize: '0.75rem' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // FINDING header
    if (/^(finding\s+\d+|▸\s*finding)/i.test(trimmed)) {
      elements.push(
        <div key={'f' + i} style={{ marginTop: '1rem', marginBottom: '4px', padding: '6px 12px', background: 'rgba(232,160,32,0.05)', borderLeft: '2px solid rgba(232,160,32,0.4)', color: '#c4983a', fontWeight: 700, fontSize: '0.74rem' }}
          dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
      );
      i++; continue;
    }

    // DEFAULT
    elements.push(
      <p key={'p' + i} style={{ color: '#7a6a4a', marginBottom: '3px' }}
        dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
    );
    i++;
  }

  return <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9 }}>{elements}</div>;
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

Produce a formal AUDIT INTELLIGENCE REPORT using this EXACT structure:

EXECUTIVE SUMMARY
2-3 sentences summarizing overall risk posture and key findings.

1. SCOPE & METHODOLOGY
• Audit universe covered
• Standards applied (COSO, IIA, SOX, ISO 31000)
• Assessment approach

2. RISK ASSESSMENT MATRIX
Use a markdown table with these exact columns:
| Risk Name | Likelihood | Impact | Rating |
| --- | --- | --- | --- |
Include minimum 5 risks. Use only High, Medium, or Low.

3. CONTROL ENVIRONMENT EVALUATION
• Preventive controls: status and gaps
• Detective controls: status and gaps
• Corrective controls: recommendations

4. KEY AUDIT FINDINGS
For each finding use exactly:
▸ Finding [N]: [Title]
+ Condition: [what exists]
+ Criteria: [what standard requires]
+ Cause: [root cause]
+ Effect: [business impact]
Include minimum 4 findings.

5. REGULATORY & COMPLIANCE CONSIDERATIONS
• Applicable regulations
• Compliance gaps identified

6. PRIORITIZED RECOMMENDATIONS
• Priority 1 (Immediate — 0-30 days): [action]
• Priority 2 (Short-term — 30-90 days): [action]
• Priority 3 (Medium-term — 90-180 days): [action]

CONCLUSION
Overall audit opinion: Satisfactory / Needs Improvement / Unsatisfactory. Include next steps.

Minimum 600 words. Be specific and professional.`,
          prompt: 'Conduct a formal internal audit assessment for:\n\n' + input,
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

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#2a2218', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setInput(q)}
                style={{ fontFamily: MONO, fontSize: '0.62rem', color: 'rgba(232,160,32,0.55)', border: '1px solid rgba(232,160,32,0.15)', background: 'rgba(232,160,32,0.03)', padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(232,160,32,0.5)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(232,160,32,0.15)'}>
                {q}
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.15)', padding: '24px', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid ' + A, borderLeft: '2px solid ' + A }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid ' + A, borderRight: '2px solid ' + A }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(232,160,32,0.5)' }}>// AUDIT SCENARIO</span>
            <span style={{ fontFamily: MONO, fontSize: '0.55rem', color: '#2a2218' }}>GROQ LLaMA 3.3 70B · 4096 TOKENS</span>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={6}
              placeholder="// Describe the process, department, or control environment to audit..."
              style={{ width: '100%', background: '#02010a', border: '1px solid rgba(232,160,32,0.12)', color: A, fontFamily: MONO, fontSize: '0.78rem', padding: '14px', outline: 'none', resize: 'vertical', caretColor: A, lineHeight: 1.8 }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="submit" disabled={loading || !input.trim()}
                style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.75rem 2rem', background: 'rgba(232,160,32,0.1)', color: A, border: ' 1px solid rgba(232,160,32,' + (loading ? '0.2' : '0.5') + ')', cursor: loading ? 'not-allowed' : 'pointer', opacity: !input.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ EXECUTE AUDIT'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.12)', padding: '28px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: A, marginBottom: '16px' }}>// COMPILING AUDIT REPORT</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: A, animation: 'blink 1s ease-in-out ' + (i*0.12) + 's infinite', height: (12+i*4) + 'px', opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#3a3020', marginLeft: '12px' }}>PROCESSING — MAY TAKE 15 SECONDS</span>
            </div>
          </div>
        )}

        {response && !loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(232,160,32,0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: 'rgba(232,160,32,0.04)', borderBottom: '1px solid rgba(232,160,32,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: A }}>// AUDIT INTELLIGENCE REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#22C55E' }}>COMPLETE</span>
              </div>
            </div>
            <div style={{ padding: '32px 36px' }}>
              <ReportRenderer text={response} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
