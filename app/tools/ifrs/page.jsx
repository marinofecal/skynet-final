'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUICK_PROMPTS = [
  'IFRS 15 revenue recognition for SaaS subscription model',
  'IFRS 16 lease classification — short-term vs right-of-use',
  'IFRS 9 expected credit loss model for trade receivables',
  'IFRS 17 insurance contract measurement approaches',
];

export default function IFRSBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);
  const [charCount, setCharCount] = useState(0);

  const handleInput = (e) => {
    setInput(e.target.value);
    setCharCount(e.target.value.length);
  };

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
          prompt: `You are a senior IFRS technical expert and accounting standards specialist with deep knowledge of all current IFRS standards.

Analyze the following accounting scenario or question and provide:
1. APPLICABLE STANDARDS — Which IFRS standards apply and why
2. KEY REQUIREMENTS — Recognition, measurement, and classification criteria
3. DISCLOSURE OBLIGATIONS — Required disclosures under the standard
4. PRACTICAL GUIDANCE — Step-by-step application to the scenario
5. COMPLIANCE CHECKLIST — Key checkpoints to verify compliance
6. COMMON PITFALLS — Frequent mistakes and how to avoid them

Be technically precise. Reference specific paragraphs where relevant. Use structured formatting.

SCENARIO / QUESTION: ${input}`,
        }),
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
          <div className="section-label mb-3" style={{ color: 'var(--muted)' }}>AGT-02 / ACTIVE</div>
          <h1
            className="display-heading mb-2"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', color: 'white' }}
          >
            IFRS AI
          </h1>
          <div className="section-label" style={{ color: 'var(--purple)' }}>COMPLIANCE ENGINE</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--muted)', marginTop: '0.75rem', maxWidth: '400px', lineHeight: 1.9 }}>
            IFRS standard interpretation, gap analysis, and disclosure generation.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="display-heading"
            style={{ fontSize: '5rem', color: 'var(--purple)', fontFamily: 'var(--font-display)', lineHeight: 1, opacity: 0.7 }}
          >
            ◈
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot" style={{ background: 'var(--purple)', boxShadow: '0 0 8px var(--purple)' }} />
            <span className="section-label" style={{ color: 'var(--purple)', fontSize: '0.6rem' }}>ONLINE</span>
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
              onClick={() => { setInput(prompt); setCharCount(prompt.length); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--purple)',
                border: '1px solid rgba(168,85,247,0.2)',
                background: 'rgba(168,85,247,0.04)',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.borderColor = 'rgba(168,85,247,0.6)'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(168,85,247,0.2)'}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* ── INPUT TERMINAL ── */}
      <div
        className="p-6 mb-6"
        style={{ background: 'var(--card)', border: '1px solid rgba(168,85,247,0.2)', position: 'relative' }}
      >
        <div
          style={{
            position: 'absolute', top: '-1px', left: '-1px',
            width: '14px', height: '14px',
            borderTop: '2px solid var(--purple)',
            borderLeft: '2px solid var(--purple)',
          }}
        />
        <div
          style={{
            position: 'absolute', bottom: '-1px', right: '-1px',
            width: '14px', height: '14px',
            borderBottom: '2px solid var(--purple)',
            borderRight: '2px solid var(--purple)',
          }}
        />
        <div className="flex justify-between items-center mb-4">
          <div className="section-label" style={{ color: 'var(--purple)' }}>// IFRS SCENARIO INPUT</div>
          <div className="section-label" style={{ color: 'var(--muted)' }}>{charCount} CHARS</div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="terminal-input mb-4"
            style={{ borderColor: 'rgba(168,85,247,0.25)', color: 'var(--purple)', caretColor: 'var(--purple)' }}
            rows={5}
            placeholder="// Describe the accounting scenario, IFRS question, or standard to analyze..."
            value={input}
            onChange={handleInput}
          />
          <div className="flex items-center justify-between">
            <div className="section-label" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              ENGINE: LLaMA 3.3 70B · GROQ CLOUD
            </div>
            <button
              type="submit"
              disabled={loading || !input.trim()}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.72rem',
                fontWeight: 700,
                letterSpacing: '0.12em',
                padding: '0.65rem 1.6rem',
                border: '1px solid var(--purple)',
                background: 'transparent',
                color: 'var(--purple)',
                cursor: loading || !input.trim() ? 'not-allowed' : 'pointer',
                opacity: loading || !input.trim() ? 0.4 : 1,
                transition: 'all 0.2s',
                clipPath: 'polygon(0 0, calc(100% - 10px) 0, 100% 10px, 100% 100%, 0 100%)',
              }}
            >
              {loading ? '// PROCESSING...' : '⟫ ANALYZE STANDARD'}
            </button>
          </div>
        </form>
      </div>

      {/* ── LOADING ── */}
      {loading && (
        <div className="p-6" style={{ background: 'var(--card)', border: '1px solid rgba(168,85,247,0.15)' }}>
          <div className="section-label mb-4" style={{ color: 'var(--purple)' }}>// CROSS-REFERENCING IFRS DATABASE</div>
          <div className="flex gap-3 items-center">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '24px',
                  background: 'var(--purple)',
                  animation: `blink 1s ease-in-out ${i * 0.15}s infinite`,
                  opacity: 0.7,
                }}
              />
            ))}
            <span className="section-label" style={{ color: 'var(--muted)', marginLeft: '8px' }}>
              PARSING STANDARDS...
            </span>
          </div>
        </div>
      )}

      {/* ── RESPONSE ── */}
      {response && !loading && (
        <div style={{ border: '1px solid rgba(168,85,247,0.2)', overflow: 'hidden' }}>
          <div
            className="px-6 py-3 flex justify-between items-center"
            style={{ borderBottom: '1px solid rgba(168,85,247,0.12)', background: 'rgba(168,85,247,0.03)' }}
          >
            <div className="section-label" style={{ color: 'var(--purple)' }}>// COMPLIANCE REPORT GENERATED</div>
            <div className="flex items-center gap-2">
              <span className="status-dot" style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
              <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.58rem' }}>COMPLETE</span>
            </div>
          </div>
          <div
            className="response-terminal"
            style={{ borderLeft: '3px solid var(--purple)', color: '#b094f0' }}
          >
            {response}
          </div>
        </div>
      )}

    </div>
  );
}
