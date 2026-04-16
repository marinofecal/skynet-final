'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUICK_PROMPTS = [
  'Calculate weighted average cost of capital (WACC)',
  'Build a dynamic cash flow forecast with scenarios',
  'XLOOKUP with multiple criteria across sheets',
  'Power Query to clean and merge monthly P&L files',
];

export default function ExcelAI() {
  const [form, setForm] = useState({ problem: '', columns: '', goal: '' });
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!form.problem.trim() || loading) return;
    setLoading(true);
    setResponse('');

    const prompt = `You are a senior financial analyst and Excel/spreadsheet expert with deep knowledge of financial modeling, Power Query, and VBA.

USER PROBLEM: ${form.problem}
AVAILABLE DATA / COLUMNS: ${form.columns || 'Not specified'}
GOAL: ${form.goal || 'Not specified'}

Provide a structured, practical solution:
1. SOLUTION OVERVIEW — What approach you'll use and why
2. FORMULA(S) — Exact Excel formula(s) with syntax
3. STEP-BY-STEP LOGIC — How to implement it, cell by cell
4. EXAMPLE — Concrete example with sample numbers
5. ALTERNATIVE APPROACH — If a simpler or more robust method exists
6. PRO TIPS — Performance optimization, error handling, edge cases

Be specific, use correct Excel syntax, and make it immediately usable.`;

    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt }),
      });
      const data = await res.json();
      setResponse(data.result);
    } catch {
      setResponse('// ERROR: Connection to neural network failed. Please retry.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen px-6 py-16 max-w-5xl mx-auto">

      {/* ── BACK ── */}
      <Link href="/" className="section-label hover:text-white transition mb-10 inline-flex items-center gap-2">
        ← RETURN TO BASE
      </Link>

      {/* ── AGENT HEADER ── */}
      <div className="flex items-start justify-between mt-8 mb-12">
        <div>
          <div className="section-label mb-3" style={{ color: 'var(--muted)' }}>AGT-03 / ACTIVE</div>
          <h1
            className="display-heading mb-2"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', color: 'white' }}
          >
            EXCEL AI
          </h1>
          <div className="section-label" style={{ color: 'var(--green)' }}>DATA FORGE</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--muted)', marginTop: '0.75rem', maxWidth: '400px', lineHeight: 1.9 }}>
            Financial formula generation, Power Query automation, and spreadsheet engineering.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="display-heading"
            style={{ fontSize: '5rem', color: 'var(--green)', fontFamily: 'var(--font-display)', lineHeight: 1, opacity: 0.7 }}
          >
            ◰
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot" style={{ background: 'var(--green)', boxShadow: '0 0 8px var(--green)' }} />
            <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.6rem' }}>ONLINE</span>
          </div>
        </div>
      </div>

      {/* ── QUICK PROMPTS ── */}
      <div className="mb-6">
        <div className="section-label mb-3" style={{ color: 'var(--muted)' }}>// QUICK LOAD</div>
        <div className="flex flex-wrap gap-2">
          {QUICK_PROMPTS.map((prompt) => (
            <button
              key={prompt}
              onClick={() => setForm({ ...form, problem: prompt })}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--green)',
                border: '1px solid rgba(57,255,20,0.2)',
                background: 'rgba(57,255,20,0.04)',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.borderColor = 'rgba(57,255,20,0.6)'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(57,255,20,0.2)'}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* ── FORM ── */}
      <div
        className="p-6 mb-6"
        style={{ background: 'var(--card)', border: '1px solid rgba(57,255,20,0.18)', position: 'relative' }}
      >
        <div style={{ position: 'absolute', top: '-1px', left: '-1px', width: '14px', height: '14px', borderTop: '2px solid var(--green)', borderLeft: '2px solid var(--green)' }} />
        <div style={{ position: 'absolute', bottom: '-1px', right: '-1px', width: '14px', height: '14px', borderBottom: '2px solid var(--green)', borderRight: '2px solid var(--green)' }} />

        <div className="section-label mb-6" style={{ color: 'var(--green)' }}>// DEFINE YOUR PROBLEM</div>

        <form onSubmit={handleSubmit} className="flex flex-col gap-5">

          <div>
            <label className="section-label mb-2 block" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              01 / PROBLEM OR QUESTION *
            </label>
            <textarea
              name="problem"
              className="terminal-input"
              style={{ borderColor: 'rgba(57,255,20,0.2)', color: 'var(--green)', caretColor: 'var(--green)' }}
              rows={3}
              placeholder="// Describe your financial problem or Excel challenge..."
              value={form.problem}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="section-label mb-2 block" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              02 / AVAILABLE COLUMNS / DATA STRUCTURE (optional)
            </label>
            <textarea
              name="columns"
              className="terminal-input"
              style={{ borderColor: 'rgba(57,255,20,0.15)', color: 'var(--green)', caretColor: 'var(--green)' }}
              rows={2}
              placeholder="// e.g. Revenue, COGS, EBITDA, Date, Region, Product..."
              value={form.columns}
              onChange={handleChange}
            />
          </div>

          <div>
            <label className="section-label mb-2 block" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              03 / DESIRED OUTPUT / GOAL (optional)
            </label>
            <textarea
              name="goal"
              className="terminal-input"
              style={{ borderColor: 'rgba(57,255,20,0.15)', color: 'var(--green)', caretColor: 'var(--green)' }}
              rows={2}
              placeholder="// What do you want the formula or model to produce?"
              value={form.goal}
              onChange={handleChange}
            />
          </div>

          <div className="flex items-center justify-between">
            <div className="section-label" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              ENGINE: LLaMA 3.3 70B · GROQ CLOUD
            </div>
            <button
              type="submit"
              disabled={loading || !form.problem.trim()}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '0.65rem 1.6rem',
                border: '1px solid var(--green)',
                background: 'transparent',
                color: 'var(--green)',
                cursor: loading || !form.problem.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !form.problem.trim() ? 0.4 : 1,
                transition: 'all 0.2s',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              }}
            >
              {loading ? '// GENERATING...' : '⟫ GENERATE SOLUTION'}
            </button>
          </div>
        </form>
      </div>

      {/* ── LOADING ── */}
      {loading && (
        <div className="p-6" style={{ background: 'var(--card)', border: '1px solid rgba(57,255,20,0.12)' }}>
          <div className="section-label mb-4" style={{ color: 'var(--green)' }}>// BUILDING FORMULA LOGIC</div>
          <div className="flex gap-3 items-center">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                style={{ width: '4px', height: '24px', background: 'var(--green)', animation: `blink 1s ease-in-out ${i * 0.15}s infinite`, opacity: 0.7 }}
              />
            ))}
            <span className="section-label" style={{ color: 'var(--muted)', marginLeft: '8px' }}>
              OPTIMIZING SOLUTION...
            </span>
          </div>
        </div>
      )}

      {/* ── RESPONSE ── */}
      {response && !loading && (
        <div style={{ border: '1px solid rgba(57,255,20,0.18)', overflow: 'hidden' }}>
          <div
            className="px-6 py-3 flex justify-between items-center"
            style={{ borderBottom: '1px solid rgba(57,255,20,0.1)', background: 'rgba(57,255,20,0.02)' }}
          >
            <div className="section-label" style={{ color: 'var(--green)' }}>// SOLUTION GENERATED</div>
            <div className="flex items-center gap-2">
              <span className="status-dot" />
              <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.58rem' }}>READY TO USE</span>
            </div>
          </div>
          <div className="response-terminal" style={{ borderLeft: '3px solid var(--green)', color: '#86efac' }}>
            {response}
          </div>
        </div>
      )}

    </div>
  );
}
