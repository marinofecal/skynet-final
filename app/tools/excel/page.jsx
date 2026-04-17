'use client';
import { useState } from 'react';
import Link from 'next/link';

const C = '#22C55E';
const RGB = '34,197,94';
const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

const QUICK = [
  'Build a dynamic 3-statement financial model with scenario analysis',
  'XLOOKUP with multiple criteria to consolidate monthly P&L data',
  'Power Query: clean and merge 5 years of transaction data',
  'WACC sensitivity table varying cost of equity and debt',
];

function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#8fdc7a">$1</strong>')
    .replace(/`(.+?)`/g, '<code style="background:rgba(34,197,94,0.12);color:#22C55E;padding:2px 6px;border-radius:2px;font-size:0.74rem">$1</code>');
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
                <tr style={{ borderBottom: '2px solid rgba(34,197,94,0.3)' }}>
                  {headers.map((h, hi) => (
                    <th key={hi} style={{ padding: '8px 12px', textAlign: 'left', color: C, fontWeight: 700, letterSpacing: '0.08em', background: 'rgba(34,197,94,0.06)', whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {body.map((row, ri) => (
                  <tr key={ri} style={{ borderBottom: '1px solid rgba(34,197,94,0.08)' }}>
                    {row.map((cell, ci) => (
                      <td key={ci} style={{ padding: '8px 12px', color: '#5a7a5a', background: ri % 2 === 0 ? 'rgba(34,197,94,0.02)' : 'transparent' }}>
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

    // FORMULA LINE (starts with =)
    if (/^=/.test(trimmed)) {
      elements.push(
        <div key={'code' + i} style={{ background: '#010a06', border: '1px solid rgba(34,197,94,0.25)', borderLeft: '3px solid ' + C, padding: '10px 14px', margin: '6px 0', color: C, fontSize: '0.76rem', fontFamily: MONO, overflowX: 'auto', whiteSpace: 'pre' }}>
          {trimmed}
        </div>
      );
      i++; continue;
    }

    // NUMBERED SECTION
    if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
      elements.push(
        <div key={'n' + i} style={{ marginTop: '1.6rem', marginBottom: '0.6rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
          <span style={{ color: C, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px', flexShrink: 0 }}>{trimmed.match(/^\d+/)[0]}.</span>
          <span style={{ color: '#8fdc7a', fontWeight: 700, fontSize: '0.8rem', letterSpacing: '0.06em', borderBottom: '1px solid rgba(34,197,94,0.15)', paddingBottom: '4px', flex: 1 }}>
            {trimmed.replace(/^\d+\.\s+/, '')}
          </span>
        </div>
      );
      i++; continue;
    }

    // ## HEADING
    if (/^#{1,3}\s/.test(trimmed)) {
      elements.push(
        <div key={'h' + i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: '#8fdc7a', fontWeight: 700, fontSize: '0.8rem', borderBottom: '1px solid rgba(34,197,94,0.12)', paddingBottom: '4px' }}>
          {trimmed.replace(/^#+\s+/, '')}
        </div>
      );
      i++; continue;
    }

    // CAPS BLOCK
    if (/^(CONCLUSION|EXECUTIVE SUMMARY|PRO TIP|ALTERNATIVE|OUTPUT|BEST PRACTICES)/i.test(trimmed) && trimmed === trimmed.toUpperCase()) {
      elements.push(
        <div key={'c' + i} style={{ marginTop: '1.6rem', padding: '12px 16px', background: 'rgba(34,197,94,0.08)', borderLeft: '3px solid ' + C, color: '#8fdc7a', fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.1em' }}>
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
          <span style={{ color: C, flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▸</span>
          <span style={{ color: '#5a7a5a' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // SUB-BULLET or numbered inside section
    if (/^\d+\.\s/.test(trimmed) && !/[A-Z]{3,}/.test(trimmed)) {
      const content = trimmed.replace(/^\d+\.\s+/, '');
      elements.push(
        <div key={'nb' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '3px', alignItems: 'flex-start' }}>
          <span style={{ color: C, flexShrink: 0, fontSize: '0.7rem', fontWeight: 700, minWidth: '20px' }}>{trimmed.match(/^\d+/)[0]}.</span>
          <span style={{ color: '#5a7a5a' }} dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++; continue;
    }

    // DEFAULT
    elements.push(
      <p key={'p' + i} style={{ color: '#5a7a5a', marginBottom: '3px' }}
        dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }} />
    );
    i++;
  }

  return <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9 }}>{elements}</div>;
}

export default function ExcelAI() {
  const [form, setForm] = useState({ problem: '', columns: '', goal: '' });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.problem.trim() || loading) return;
    setLoading(true);
    setResponse('');
    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          systemPrompt: `You are a senior financial modelling expert and Excel/Power Query specialist with 15+ years building models for investment banks, Big 4 firms, and Fortune 500 companies.

Produce a formal EXCEL SOLUTION REPORT with this structure:

EXECUTIVE SUMMARY
2-3 sentences: what the solution achieves and why this approach was selected.

1. SOLUTION ARCHITECTURE
• Approach rationale and methodology
• Tools and functions used
• Performance considerations

2. FORMULA SOLUTION
Complete formulas with exact syntax. Each formula on its own line starting with =
Example:
=IF($B$1="Base",D5*1.1,IF($B$1="Upside",D5*1.15,D5*1.05))
=XLOOKUP(A2,Table1[ID],Table1[Value],0,0)
Explain each argument.

3. STEP-BY-STEP IMPLEMENTATION
Numbered steps with cell references and validation.

4. WORKED EXAMPLE
Use markdown tables to show sample input and expected output:
| Column | Value |
| --- | --- |
Include concrete numbers.

5. POWER QUERY / VBA ALTERNATIVE (if applicable)
When to use and key steps.

6. PERFORMANCE & BEST PRACTICES
• Optimization for large datasets
• Common errors and how to avoid
• Dynamic range best practices

CONCLUSION
Summary and next steps.

Show complete copy-paste ready formulas. Minimum 500 words.`,
          prompt: 'Provide a formal Excel solution report for:\n\nProblem: ' + form.problem + '\nData columns: ' + (form.columns || 'Not specified') + '\nDesired output: ' + (form.goal || 'Not specified'),
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

        <Link href="/" style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: 'rgba(34,197,94,0.35)', textDecoration: 'none', display: 'inline-block', marginBottom: '40px' }}>
          ← RETURN TO BASE
        </Link>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginTop: '24px', marginBottom: '48px' }}>
          <div>
            <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.22em', color: '#102010', marginBottom: '10px' }}>AGT-03 / ACTIVE</div>
            <h1 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.95, marginBottom: '8px' }}>EXCEL AI</h1>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: C, marginBottom: '12px' }}>DATA FORGE</div>
            <p style={{ fontFamily: MONO, fontSize: '0.74rem', color: '#2a4a2a', maxWidth: '420px', lineHeight: 1.9 }}>
              Formal Excel solution reports — complete formulas, step-by-step implementation, and financial modelling best practices.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '4rem', color: C, lineHeight: 1, opacity: 0.6 }}>◰</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: C, boxShadow: '0 0 8px ' + C, animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: C }}>ONLINE</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#102010', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setForm({ ...form, problem: q })}
                style={{ fontFamily: MONO, fontSize: '0.62rem', color: 'rgba(34,197,94,0.5)', border: '1px solid rgba(34,197,94,0.15)', background: 'rgba(34,197,94,0.03)', padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
                onMouseEnter={e => e.target.style.borderColor = 'rgba(34,197,94,0.5)'}
                onMouseLeave={e => e.target.style.borderColor = 'rgba(34,197,94,0.15)'}>
                {q}
              </button>
            ))}
          </div>
        </div>

        <div style={{ background: '#05030c', border: '1px solid rgba(34,197,94,0.15)', padding: '24px', marginBottom: '24px', position: 'relative' }}>
          <div style={{ position: 'absolute', top: -1, left: -1, width: 14, height: 14, borderTop: '2px solid ' + C, borderLeft: '2px solid ' + C }} />
          <div style={{ position: 'absolute', bottom: -1, right: -1, width: 14, height: 14, borderBottom: '2px solid ' + C, borderRight: '2px solid ' + C }} />
          <div style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: 'rgba(34,197,94,0.45)', marginBottom: '16px' }}>// DEFINE YOUR PROBLEM</div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>01 / PROBLEM OR QUESTION *</div>
              <textarea
                value={form.problem}
                onChange={e => setForm({ ...form, problem: e.target.value })}
                rows={4}
                placeholder="// Describe your Excel challenge or financial modelling problem..."
                style={{ width: '100%', background: '#02010a', border: '1px solid rgba(34,197,94,0.12)', color: C, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: C, lineHeight: 1.8 }}
              />
            </div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>02 / COLUMNS / DATA STRUCTURE (optional)</div>
              <textarea
                value={form.columns}
                onChange={e => setForm({ ...form, columns: e.target.value })}
                rows={2}
                placeholder="// e.g. Date, Revenue, COGS, EBITDA, Region..."
                style={{ width: '100%', background: '#02010a', border: '1px solid rgba(34,197,94,0.08)', color: C, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: C, lineHeight: 1.8 }}
              />
            </div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>03 / DESIRED OUTPUT (optional)</div>
              <textarea
                value={form.goal}
                onChange={e => setForm({ ...form, goal: e.target.value })}
                rows={2}
                placeholder="// What should the formula or model produce?"
                style={{ width: '100%', background: '#02010a', border: '1px solid rgba(34,197,94,0.08)', color: C, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: C, lineHeight: 1.8 }}
              />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" disabled={loading || !form.problem.trim()}
                style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.75rem 2rem', background: 'rgba(34,197,94,0.08)', color: C, border: '1px solid rgba(34,197,94,' + (loading ? '0.2' : '0.5') + ')', cursor: loading ? 'not-allowed' : 'pointer', opacity: !form.problem.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ GENERATE SOLUTION'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(34,197,94,0.12)', padding: '28px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: C, marginBottom: '16px' }}>// BUILDING SOLUTION ARCHITECTURE</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: C, animation: 'blink 1s ease-in-out ' + (i*0.12) + 's infinite', height: (12+i*4) + 'px', opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#102010', marginLeft: '12px' }}>OPTIMIZING — MAY TAKE 15 SECONDS</span>
            </div>
          </div>
        )}

        {response && !loading && (
          <div style={{ background: '#05030c', border: '1px solid rgba(34,197,94,0.15)', overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: 'rgba(34,197,94,0.04)', borderBottom: '1px solid rgba(34,197,94,0.1)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: C }}>// EXCEL SOLUTION REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: C }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: C }}>READY TO USE</span>
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
