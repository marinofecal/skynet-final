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
  'IFRS 9 expected credit loss provisioning for trade receivables portfolio',
  'IFRS 17 measurement approach selection — PAA vs GMM for general insurance',
];

function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#5ec5f7">$1</strong>')
    .replace(/`(.+?)`/g, '<code style="background:rgba(14,165,233,0.12);color:#0EA5E9;padding:2px 6px;border-radius:2px;font-size:0.74rem">$1</code>');
}

function ReportRenderer({ text, color, rgb }) {
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
                <tr style={{ borderBottom: '2px solid rgba(' + rgb + ',0.3)' }}>
                  {headers.map((h, hi) => (
                    <th key={hi} style={{ padding: '8px 12px', textAlign: 'left', color, fontWeight: 700, letterSpacing: '0.08em', background: 'rgba(' + rgb + ',0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid rgba(' + rgb + ',0.08)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '8px 12px', color: '#5a6a7a', background: ri % 2 === 0 ? 'rgba(' + rgb + ',0.02)' : 'transparent' }}>
                        {cell}
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        );
      }
      continue;
    }

    // JOURNAL ENTRY BLOCK (Dr/Cr)
    if (/^(Dr\.|Cr\.)\s/.test(trimmed)) {
      const isDr = trimmed.startsWith('Dr.');
      elements.push(
        <div key={'j' + i} style={{ display: 'flex', gap: '12px', marginLeft: '8px', marginBottom: '2px', fontFamily: MONO, fontSize: '0.74rem' }}>
          <span style={{ color: isDr ? '#5ec5f7' : '#4a9fc7', fontWeight: 700, minWidth: '28px' }}>{isDr ? 'Dr.' : 'Cr.'}</span>
          <span style={{ color: '#4a5a6a', flex: 1 }} dangerouslySetInnerHTML={{ __html: parseInline(trimmed.replace(/^(Dr\.|Cr\.)\s/, '')) }} />
        </div>
      );
      i++; continue;
    }

    // NUMBERED SECTION
    if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
      elements.push(
        <div key={'n' + i} style={{ marginTop: '1.6rem', marginBottom: '0.6rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
          <span style={{ color, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px', flexShrink: 0 }}>{trimmed.match(/^\d+/)[0]}.</span>
          <span style={{ color: '#5ec5f7', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', borderBottom: '1px solid rgba(' + rgb + ',0.15)', paddingBottom: '4px', flex: 1 }}>
            {trimmed.replace(/^\d+\.\s+/, '')}
          </span>
        </div>
      );
      i++; continue;
    }

    // ## HEADING
    if (/^#{1,3}\s/.test(trimmed)) {
      elements.push(
        <div key={'h' + i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: '#5ec5f7', fontWeight: 700, fontSize: '0.8rem', borderBottom: '1px solid rgba(' + rgb + ',0.12)', paddingBottom: '4px' }}>
          {trimmed.replace(/^#+\s+/, '')}
        </div>
      );
      i++; continue;
    }

    // CAPS BLOCK (CONCLUSION, EXECUTIVE SUMMARY, etc.)
    if (/^(CONCLUSION|EXECUTIVE SUMMARY|COMPLIANCE STATUS|OPINION|DISCLOSURE|IFRS)/i.test(trimmed) && trimmed === trimmed.toUpperCase()) {
      elements.push(
        <div key={'c' + i} style={{ marginTop: '1.6rem', padding: '12px 16px', background: 'rgba(' + rgb + ',0.08)', borderLeft: '3px solid ' + color, color: '#5ec5f7', fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.1em' }}>
          {trimmed}
        </div>
      );
      i++; continue;
    }

    // BULLET
    if (/^[•▸\-\*]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[•▸\-\*]\s+/, '');
      elements.push(
        <div key={'b' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color, flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▸</span>
          <span style={{ color: '#4a5a6a' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // SUB-BULLET or numbered sub-item
    if (/^\+\s/.test(trimmed) || /^\s{3,}[-•]/.test(line)) {
      const content = trimmed.replace(/^[\+\-•]\s+/, '');
      elements.push(
        <div key={'s' + i} style={{ display: 'flex', gap: '8px', marginLeft: '28px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color: 'rgba(' + rgb + ',0.35)', flexShrink: 0, fontSize: '0.6rem', marginTop: '3px' }}>·</span>
          <span style={{ color: '#3a4a5a', fontSize: '0.75rem' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // PARAGRAPH REFERENCE (e.g., "IFRS 15.114-122" or "IAS 36.6")
    if (/^(IFRS|IAS)\s+\d+\.\d+/.test(trimmed)) {
      elements.push(
        <div key={'ref' + i} style={{ padding: '6px 12px', marginLeft: '8px', marginBottom: '4px', background: 'rgba(' + rgb + ',0.04)', borderLeft: '2px solid rgba(' + rgb + ',0.3)', color: '#5ec5f7', fontWeight: 600, fontSize: '0.72rem', fontFamily: MONO }}>
          {trimmed}
        </div>
      );
      i++; continue;
    }

    // CHECKLIST ITEM (☐ or ☑)
    if (/^[☐☑]\s/.test(trimmed)) {
      const isChecked = trimmed.startsWith('☑');
      const content = trimmed.replace(/^[☐☑]\s+/, '');
      elements.push(
        <div key={'check' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '4px', alignItems: 'flex-start' }}>
          <span style={{ color: isChecked ? '#22C55E' : 'rgba(' + rgb + ',0.4)', fontSize: '0.9rem', flexShrink: 0 }}>{isChecked ? '☑' : '☐'}</span>
          <span style={{ color: '#4a5a6a', fontSize: '0.75rem' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // Numbered sub-steps (1. 2. 3. inside sections)
    if (/^\d+\.\s/.test(trimmed) && !/[A-Z]{3,}/.test(trimmed)) {
      const content = trimmed.replace(/^\d+\.\s+/, '');
      elements.push(
        <div key={'nb' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color, flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, minWidth: '20px' }}>{trimmed.match(/^\d+/)[0]}.</span>
          <span style={{ color: '#4a5a6a' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // DEFAULT
    elements.push(
      <p key={'p' + i} style={{ color: '#4a5a6a', marginBottom: '3px' }}
        dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
    );
    i++;
  }

  return <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9 }}>{elements}</div>;
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

Produce a formal IFRS COMPLIANCE REPORT with this EXACT structure:

EXECUTIVE SUMMARY
2-3 sentences: applicable standards, key compliance requirements, overall assessment.

1. APPLICABLE STANDARDS & SCOPE
• Which IFRS standards apply and why
• Interaction between standards if relevant
• Effective dates and transition requirements

2. RECOGNITION & MEASUREMENT REQUIREMENTS
• Specific criteria that must be met
• Measurement basis and methodology
• Step-by-step application to the scenario

3. JOURNAL ENTRIES & CALCULATIONS
Present journal entries using this format:
Dr. [Account name] [amount]
Cr. [Account name] [amount]
Include measurement examples with illustrative numbers.

4. DISCLOSURE REQUIREMENTS
• Mandatory disclosures under applicable standards
• Specific paragraph references (e.g., IFRS 15.114-122 or IAS 36.6)
• Suggested disclosure language

5. COMMON PITFALLS & TECHNICAL ISSUES
• Frequent misapplication errors
• Areas requiring significant judgment
• Industry-specific considerations

6. COMPLIANCE CHECKLIST
Use checkboxes:
☐ Item 1
☐ Item 2
Minimum 8 checkpoints.

CONCLUSION
Technical accounting opinion with compliance rating and key action items.

Be authoritative, cite specific standard paragraphs, minimum 600 words.`,
          prompt: 'Provide a formal IFRS technical analysis for:\n\n' + input,
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

        <Link href="/" style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(' + RGB + ',0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>
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
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: COLOR, boxShadow: '0 0 8px ' + COLOR, animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: COLOR }}>ONLINE</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#1a2530', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setInput(q)}
                style={{ fontFamily: MONO, fontSize: '0.62rem', color: 'rgba(' + RGB + ',0.5)', border: '1px solid rgba(' + RGB + ',0.15)', background: 'rgba(' + RGB + ',0.03)', padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(' + RGB + ',0.5)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(' + RGB + ',0.15)'}>
                {q}
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: '#05030c', border: '1px solid rgba(' + RGB + ',0.15)', padding: '24px', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid ' + COLOR, borderLeft: '2px solid ' + COLOR }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid ' + COLOR, borderRight: '2px solid ' + COLOR }} />
          <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '12px' }}>
            <span style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(' + RGB + ',0.45)' }}>// IFRS SCENARIO</span>
            <span style={{ fontFamily: MONO, fontSize: '0.55rem', color: '#1a2530' }}>GROQ LLaMA 3.3 70B · 4096 TOKENS</span>
          </div>
          <form onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={e => setInput(e.target.value)}
              rows={6}
              placeholder="// Describe the accounting scenario, transaction, or IFRS standard to analyze..."
              style={{ width: '100%', background: '#02010a', border: '1px solid rgba(' + RGB + ',0.12)', color: COLOR, fontFamily: MONO, fontSize: '0.78rem', padding: '14px', outline: 'none', resize: 'vertical', caretColor: COLOR, lineHeight: 1.8 }}
            />
            <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '12px' }}>
              <button type="submit" disabled={loading || !input.trim()}
                style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.75rem 2rem', background: 'rgba(' + RGB + ',0.08)', color: COLOR, border: '1px solid rgba(' + RGB + ',' + (loading ? '0.2' : '0.5') + ')', cursor: loading ? 'not-allowed' : 'pointer', opacity: !input.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ ANALYZE STANDARD'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(' + RGB + ',0.12)', padding: '28px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: COLOR, marginBottom: '16px' }}>// CROSS-REFERENCING IFRS DATABASE</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: COLOR, animation: 'blink 1s ease-in-out ' + (i*0.12) + 's infinite', height: (12+i*4) + 'px', opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#1a2530', marginLeft: '12px' }}>PARSING STANDARDS — MAY TAKE 15 SECONDS</span>
            </div>
          </div>
        )}

        {response && !loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(' + RGB + ',0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: 'rgba(' + RGB + ',0.04)', borderBottom: '1px solid rgba(' + RGB + ',0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: COLOR }}>// IFRS COMPLIANCE REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: '#22C55E' }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: '#22C55E' }}>COMPLETE</span>
              </div>
            </div>
            <div style={{ padding: '32px 36px' }}>
              <ReportRenderer text={response} color={COLOR} rgb={RGB} />
            </div>
          </div>
        )}

      </div>
    </div>
  );
}
