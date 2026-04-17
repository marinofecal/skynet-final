'use client';
import { useState } from 'react';
import Link from 'next/link';

const COLOR = '#22C55E';
const RGB = '34,197,94';
const MONO = "'JetBrains Mono', monospace";
const SYNE = "'Syne', sans-serif";

const QUICK = [
  'Build a dynamic 3-statement financial model (P&L, Balance Sheet, Cash Flow) with scenario analysis',
  'XLOOKUP with multiple criteria to consolidate monthly P&L data from 12 regional sheets',
  'Power Query: clean and merge 5 years of transaction data with dynamic date filtering',
  'Calculate WACC with sensitivity table varying cost of equity and debt across 25 scenarios',
];

function ReportRenderer({ text }) {
  if (!text) return null;
  const lines = text.split('\n');
  return (
    <div style={{ fontFamily: MONO, fontSize: '0.78rem', lineHeight: 1.9, color: '#3a5a3a' }}>
      {lines.map((line, i) => {
        const trimmed = line.trim();
        if (!trimmed) return <div key={i} style={{ height: '0.6rem' }} />;
        if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
          return (
            <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', display: 'flex', gap: '10px', alignItems: 'baseline' }}>
              <span style={{ color: COLOR, fontWeight: 700, fontSize: '0.72rem', minWidth: '20px' }}>{trimmed.match(/^\d+/)[0]}.</span>
              <span style={{ color: `rgba(${RGB},0.85)`, fontWeight: 700, fontSize: '0.78rem', letterSpacing: '0.08em' }}>{trimmed.replace(/^\d+\.\s+/, '')}</span>
            </div>
          );
        }
        if (/^#{1,3}\s/.test(trimmed)) {
          return <div key={i} style={{ marginTop: '1.4rem', marginBottom: '0.5rem', color: `rgba(${RGB},0.85)`, fontWeight: 700, fontSize: '0.78rem', borderBottom: `1px solid rgba(${RGB},0.15)`, paddingBottom: '4px' }}>{trimmed.replace(/^#+\s+/, '')}</div>;
        }
        // Code blocks (=FORMULA or =function)
        if (/^=/.test(trimmed) || /^```/.test(trimmed)) {
          return <div key={i} style={{ background: '#01080a', border: `1px solid rgba(${RGB},0.2)`, borderLeft: `3px solid ${COLOR}`, padding: '10px 14px', margin: '6px 0', color: COLOR, fontSize: '0.76rem', fontFamily: MONO, overflowX: 'auto' }}>{trimmed.replace(/^```\w*/, '').replace(/```$/, '')}</div>;
        }
        if (/^[•\-\*]\s/.test(trimmed)) {
          const content = trimmed.replace(/^[•\-\*]\s+/, '');
          return (
            <div key={i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '2px' }}>
              <span style={{ color: COLOR, flexShrink: 0 }}>▸</span>
              <span dangerouslySetInnerHTML={{ __html: content.replace(/`(.+?)`/g, `<code style="background:rgba(${RGB},0.08);color:${COLOR};padding:1px 5px;font-size:0.74rem">$1</code>`).replace(/\*\*(.+?)\*\*/g, `<strong style="color:rgba(${RGB},0.9)">$1</strong>`) }} />
            </div>
          );
        }
        if (/^(CONCLUSION|EXECUTIVE SUMMARY|PRO TIP|ALTERNATIVE|OUTPUT):?/.test(trimmed)) {
          return <div key={i} style={{ marginTop: '1.4rem', padding: '10px 14px', background: `rgba(${RGB},0.06)`, borderLeft: `3px solid ${COLOR}`, color: `rgba(${RGB},0.85)`, fontWeight: 700, fontSize: '0.76rem', letterSpacing: '0.1em' }}>{trimmed}</div>;
        }
        return <p key={i} style={{ marginBottom: '2px' }} dangerouslySetInnerHTML={{ __html: trimmed.replace(/`(.+?)`/g, `<code style="background:rgba(${RGB},0.08);color:${COLOR};padding:1px 5px;font-size:0.74rem">$1</code>`).replace(/\*\*(.+?)\*\*/g, `<strong style="color:rgba(${RGB},0.85)">$1</strong>`) }} />;
      })}
    </div>
  );
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

Produce a formal EXCEL SOLUTION REPORT with this mandatory structure:

EXECUTIVE SUMMARY
(2-3 sentences: what the solution achieves and why this approach was selected)

1. SOLUTION ARCHITECTURE
• Approach rationale and methodology
• Tools and functions used (Excel / Power Query / VBA)
• Performance and scalability considerations

2. FORMULA SOLUTION
• Complete formula(s) with exact syntax
• Each formula on its own line starting with =
• Explanation of each argument

3. STEP-BY-STEP IMPLEMENTATION
• Numbered implementation steps
• Cell references and range names to use
• Validation and error handling

4. WORKED EXAMPLE
• Concrete example with sample data
• Expected input → expected output
• Edge cases handled

5. POWER QUERY / VBA ALTERNATIVE (if applicable)
• When to use this alternative
• Key steps or code snippet

6. PERFORMANCE & BEST PRACTICES
• How to optimize for large datasets
• Common errors and how to avoid them
• Dynamic range and table best practices

CONCLUSION
Summary of recommended approach and next steps for implementation.

Always show complete, copy-paste ready formulas. Minimum 400 words.`,
          prompt: `Provide a formal Excel solution report for:\n\nProblem: ${form.problem}\nData columns available: ${form.columns || 'Not specified'}\nDesired output: ${form.goal || 'Not specified'}`,
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
            <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.22em', color: '#102010', marginBottom: '10px' }}>AGT-03 / ACTIVE</div>
            <h1 style={{ fontFamily: SYNE, fontWeight: 800, fontSize: 'clamp(2.5rem, 5vw, 4rem)', color: '#fff', lineHeight: 0.95, marginBottom: '8px' }}>EXCEL AI</h1>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: COLOR, marginBottom: '12px' }}>DATA FORGE</div>
            <p style={{ fontFamily: MONO, fontSize: '0.74rem', color: '#2a4a2a', maxWidth: '420px', lineHeight: 1.9 }}>
              Formal Excel solution reports — complete formulas, step-by-step implementation, and financial modelling best practices.
            </p>
          </div>
          <div style={{ textAlign: 'right' }}>
            <div style={{ fontFamily: SYNE, fontWeight: 800, fontSize: '4rem', color: COLOR, lineHeight: 1, opacity: 0.6 }}>◰</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px', justifyContent: 'flex-end', marginTop: '8px' }}>
              <div style={{ width: 6, height: 6, borderRadius: '50%', background: COLOR, boxShadow: `0 0 8px ${COLOR}`, animation: 'blink 2s ease-in-out infinite' }} />
              <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.18em', color: COLOR }}>ONLINE</span>
            </div>
          </div>
        </div>

        <div style={{ marginBottom: '20px' }}>
          <div style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.2em', color: '#102010', marginBottom: '10px' }}>// QUICK LOAD</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
            {QUICK.map(q => (
              <button key={q} onClick={() => setForm({ ...form, problem: q })} style={{ fontFamily: MONO, fontSize: '0.62rem', color: `rgba(${RGB},0.5)`, border: `1px solid rgba(${RGB},0.15)`, background: `rgba(${RGB},0.03)`, padding: '5px 10px', cursor: 'pointer', transition: 'all 0.2s' }}
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
          <div style={{ fontFamily: MONO, fontSize: '0.58rem', letterSpacing: '0.2em', color: `rgba(${RGB},0.45)`, marginBottom: '16px' }}>// DEFINE YOUR PROBLEM</div>

          <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>01 / PROBLEM OR QUESTION *</div>
              <textarea value={form.problem} onChange={e => setForm({ ...form, problem: e.target.value })} rows={4}
                placeholder="// Describe your Excel challenge or financial modelling problem..."
                style={{ width: '100%', background: '#02010a', border: `1px solid rgba(${RGB},0.12)`, color: COLOR, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: COLOR, lineHeight: 1.8 }} />
            </div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>02 / COLUMNS / DATA STRUCTURE (optional)</div>
              <textarea value={form.columns} onChange={e => setForm({ ...form, columns: e.target.value })} rows={2}
                placeholder="// e.g. Date, Revenue, COGS, EBITDA, Region, Product..."
                style={{ width: '100%', background: '#02010a', border: `1px solid rgba(${RGB},0.08)`, color: COLOR, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: COLOR, lineHeight: 1.8 }} />
            </div>
            <div>
              <div style={{ fontFamily: MONO, fontSize: '0.54rem', letterSpacing: '0.18em', color: '#102010', marginBottom: '6px' }}>03 / DESIRED OUTPUT (optional)</div>
              <textarea value={form.goal} onChange={e => setForm({ ...form, goal: e.target.value })} rows={2}
                placeholder="// What should the formula or model produce?"
                style={{ width: '100%', background: '#02010a', border: `1px solid rgba(${RGB},0.08)`, color: COLOR, fontFamily: MONO, fontSize: '0.78rem', padding: '12px', outline: 'none', resize: 'vertical', caretColor: COLOR, lineHeight: 1.8 }} />
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <button type="submit" disabled={loading || !form.problem.trim()} style={{ fontFamily: MONO, fontSize: '0.68rem', fontWeight: 700, letterSpacing: '0.14em', padding: '0.7rem 1.8rem', background: `rgba(${RGB},0.08)`, color: COLOR, border: `1px solid rgba(${RGB},${loading ? '0.2' : '0.5'})`, cursor: loading ? 'not-allowed' : 'pointer', opacity: !form.problem.trim() ? 0.3 : 1, clipPath: 'polygon(0 0, calc(100% - 8px) 0, 100% 8px, 100% 100%, 0 100%)' }}>
                {loading ? '// GENERATING REPORT...' : '⟫ GENERATE SOLUTION'}
              </button>
            </div>
          </form>
        </div>

        {loading && (
          <div style={{ background: '#05030c', border: `1px solid rgba(${RGB},0.12)`, padding: '24px' }}>
            <div style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.2em', color: COLOR, marginBottom: '16px' }}>// BUILDING SOLUTION ARCHITECTURE</div>
            <div style={{ display: 'flex', gap: '4px', alignItems: 'flex-end' }}>
              {[0,1,2,3,4,5,6].map(i => (
                <div key={i} style={{ width: '3px', background: COLOR, animation: `blink 1s ease-in-out ${i * 0.12}s infinite`, height: `${12 + i * 4}px`, opacity: 0.6 }} />
              ))}
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', color: '#102010', marginLeft: '12px' }}>OPTIMIZING — FULL REPORT IN PROGRESS</span>
            </div>
          </div>
        )}

        {response && !loading && (
          <div style={{ background: '#05030c', border: `1px solid rgba(${RGB},0.15)`, overflow: 'hidden' }}>
            <div style={{ padding: '14px 24px', background: `rgba(${RGB},0.04)`, borderBottom: `1px solid rgba(${RGB},0.1)`, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontFamily: MONO, fontSize: '0.6rem', letterSpacing: '0.18em', color: COLOR }}>// EXCEL SOLUTION REPORT</span>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{ width: 5, height: 5, borderRadius: '50%', background: COLOR }} />
                <span style={{ fontFamily: MONO, fontSize: '0.55rem', letterSpacing: '0.15em', color: COLOR }}>READY TO USE</span>
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
