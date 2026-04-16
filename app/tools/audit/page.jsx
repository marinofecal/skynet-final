'use client';
import { useState } from 'react';
import Link from 'next/link';

const QUICK_PROMPTS = [
  'Evaluate P2P cycle controls for a mid-size company',
  'Identify key risks in revenue recognition process',
  'Assess IT general controls for SOX compliance',
  'Review segregation of duties in accounts payable',
];

export default function AuditBot() {
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
          prompt: `You are a senior internal audit and risk management expert with 15+ years of experience in GRC, SOX, COSO, and internal controls frameworks.

Analyze the following scenario and provide a structured response including:
1. RISK ASSESSMENT — Identify key risks (rate each: Critical/High/Medium/Low)
2. CONTROL EVALUATION — Map relevant controls (preventive, detective, corrective)
3. AUDIT FINDINGS — List potential findings with impact
4. RECOMMENDATIONS — Prioritized action items
5. REGULATORY LENS — Relevant standards (SOX, COSO, IIA, ISO 31000)

Be precise, professional, and actionable. Use structured formatting.

SCENARIO: ${input}`,
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
          <div className="section-label mb-3" style={{ color: 'var(--muted)' }}>AGT-01 / ACTIVE</div>
          <h1
            className="display-heading mb-2"
            style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontFamily: 'var(--font-display)', color: 'white' }}
          >
            AUDIT AI
          </h1>
          <div className="section-label" style={{ color: 'var(--cyan)' }}>SENTINEL PROTOCOL</div>
          <p style={{ fontFamily: 'var(--font-mono)', fontSize: '0.76rem', color: 'var(--muted)', marginTop: '0.75rem', maxWidth: '400px', lineHeight: 1.9 }}>
            Risk detection, control assessment, and audit documentation engine.
          </p>
        </div>
        <div className="flex flex-col items-end gap-2">
          <div
            className="display-heading"
            style={{ fontSize: '5rem', color: 'var(--cyan)', fontFamily: 'var(--font-display)', lineHeight: 1, opacity: 0.7 }}
          >
            ⬡
          </div>
          <div className="flex items-center gap-2">
            <span className="status-dot" />
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
              onClick={() => { setInput(prompt); setCharCount(prompt.length); }}
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                color: 'var(--cyan)',
                border: '1px solid rgba(0,229,255,0.2)',
                background: 'rgba(0,229,255,0.04)',
                padding: '0.4rem 0.8rem',
                cursor: 'pointer',
                transition: 'all 0.2s',
              }}
              onMouseEnter={e => e.target.style.borderColor = 'rgba(0,229,255,0.6)'}
              onMouseLeave={e => e.target.style.borderColor = 'rgba(0,229,255,0.2)'}
            >
              {prompt}
            </button>
          ))}
        </div>
      </div>

      {/* ── INPUT TERMINAL ── */}
      <div className="bracket-card p-6 mb-6">
        <div className="flex justify-between items-center mb-4">
          <div className="section-label">// AUDIT SCENARIO INPUT</div>
          <div className="section-label" style={{ color: 'var(--muted)' }}>{charCount} CHARS</div>
        </div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="terminal-input mb-4"
            rows={5}
            placeholder="// Describe the process, control environment, or risk scenario to audit..."
            value={input}
            onChange={handleInput}
          />
          <div className="flex items-center justify-between">
            <div className="section-label" style={{ color: 'var(--muted)', fontSize: '0.6rem' }}>
              ENGINE: LLaMA 3.3 70B · GROQ CLOUD
            </div>
            <button type="submit" className="btn-execute" disabled={loading || !input.trim()}>
              {loading ? '// PROCESSING...' : '⟫ EXECUTE AUDIT'}
            </button>
          </div>
        </form>
      </div>

      {/* ── RESPONSE ── */}
      {loading && (
        <div className="bracket-card p-6">
          <div className="section-label mb-4" style={{ color: 'var(--cyan)' }}>// ANALYZING SCENARIO</div>
          <div className="flex gap-3 items-center">
            {[0, 1, 2, 3, 4].map(i => (
              <div
                key={i}
                style={{
                  width: '4px',
                  height: '24px',
                  background: 'var(--cyan)',
                  animation: `blink 1s ease-in-out ${i * 0.15}s infinite`,
                  opacity: 0.7,
                }}
              />
            ))}
            <span className="section-label" style={{ color: 'var(--muted)', marginLeft: '8px' }}>
              NEURAL NETWORK PROCESSING...
            </span>
          </div>
        </div>
      )}

      {response && !loading && (
        <div className="bracket-card p-0 overflow-hidden">
          <div
            className="px-6 py-3 flex justify-between items-center"
            style={{ borderBottom: '1px solid rgba(0,229,255,0.1)', background: 'rgba(0,229,255,0.03)' }}
          >
            <div className="section-label" style={{ color: 'var(--cyan)' }}>// AUDIT REPORT GENERATED</div>
            <div className="flex items-center gap-2">
              <span className="status-dot" style={{ background: 'var(--green)', boxShadow: '0 0 6px var(--green)' }} />
              <span className="section-label" style={{ color: 'var(--green)', fontSize: '0.58rem' }}>COMPLETE</span>
            </div>
          </div>
          <div className="response-terminal" style={{ borderLeft: '3px solid var(--cyan)' }}>
            {response}
          </div>
        </div>
      )}

    </div>
  );
}
