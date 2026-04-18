'use client';

import { useState } from 'react';
import Link from 'next/link';

function ReportRenderer({ text }) {
  if (!text) return null;

  const cleanText = text
    .replace(/\\n/g, '\n')
    .replace(/\\"/g, '"')
    .replace(/\\t/g, '  ');

  const parseBold = (line) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: '#4db8ff', fontWeight: '700' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lines = cleanText.split('\n');
  const elements = [];
  let tableBuffer = [];
  let inTable = false;

  const flushTable = (key) => {
    if (tableBuffer.length === 0) return;
    const rows = tableBuffer.filter(
      (r) => !/^\|\s*[-:]+[-:|\s]*\|?\s*$/.test(r)
    );
    const parsedRows = rows.map((r) =>
      r.split('|')
        .map((c) => c.trim())
        .filter((c, i, arr) => !(i === 0 && c === '') && !(i === arr.length - 1 && c === ''))
    );
    if (parsedRows.length === 0) {
      tableBuffer = [];
      return;
    }
    elements.push(
      <div key={`table-${key}`} style={{ overflowX: 'auto', marginBottom: '20px' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.82rem', fontFamily: 'monospace' }}>
          <thead>
            <tr>
              {parsedRows[0].map((cell, i) => (
                <th key={i} style={{
                  border: '1px solid #1a3a5c',
                  padding: '8px 12px',
                  background: 'rgba(77,184,255,0.1)',
                  color: '#4db8ff',
                  textAlign: 'left',
                  fontWeight: '700',
                }}>
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedRows.slice(1).map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => (
                  <td key={cIdx} style={{
                    border: '1px solid #1a3a5c',
                    padding: '8px 12px',
                    color: '#cfcfcf',
                  }}>
                    {cell}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
    tableBuffer = [];
  };

  lines.forEach((line, idx) => {
    if (line.trim().startsWith('|') && line.trim().endsWith('|')) {
      tableBuffer.push(line.trim());
      inTable = true;
      return;
    } else if (inTable) {
      flushTable(idx);
      inTable = false;
    }

    const trimmed = line.trim();

    if (!trimmed) {
      elements.push(<div key={idx} style={{ height: '0.75rem' }} />);
      return;
    }

    // ### Markdown headers
    if (/^#{1,3}\s+/.test(trimmed)) {
      const content = trimmed.replace(/^#{1,3}\s+/, '');
      elements.push(
        <h2 key={idx} style={{
          color: '#4db8ff',
          fontSize: '1.15rem',
          fontWeight: '700',
          marginTop: '28px',
          marginBottom: '14px',
          paddingBottom: '8px',
          borderBottom: '1px solid #1a3a5c',
          letterSpacing: '0.5px',
        }}>
          {parseBold(content)}
        </h2>
      );
      return;
    }

    // Numbered section headers
    if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
      elements.push(
        <h2 key={idx} style={{
          color: '#4db8ff',
          fontSize: '1.1rem',
          fontWeight: '700',
          marginTop: '24px',
          marginBottom: '12px',
          paddingBottom: '6px',
          borderBottom: '1px solid #1a3a5c',
        }}>
          {parseBold(trimmed)}
        </h2>
      );
      return;
    }

    // DR / CR journal entry lines
    if (/^(DR|CR)\s+/i.test(trimmed)) {
      const isDR = /^DR\s+/i.test(trimmed);
      elements.push(
        <div key={idx} style={{
          display: 'flex',
          gap: '16px',
          marginBottom: '6px',
          paddingLeft: '16px',
          fontFamily: 'monospace',
          alignItems: 'baseline',
        }}>
          <span style={{
            color: isDR ? '#4db8ff' : '#ff6b9d',
            fontWeight: '700',
            minWidth: '32px',
            flexShrink: 0,
          }}>
            {isDR ? 'DR' : 'CR'}
          </span>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#cfcfcf', margin: 0, flex: 1 }}>
            {parseBold(trimmed.replace(/^(DR|CR)\s+/i, ''))}
          </p>
        </div>
      );
      return;
    }

    // Bullet points
    if (/^[-•*]\s+/.test(trimmed)) {
      const content = trimmed.replace(/^[-•*]\s+/, '');
      elements.push(
        <div key={idx} style={{ display: 'flex', gap: '12px', marginBottom: '8px', paddingLeft: '8px' }}>
          <span style={{ color: '#4db8ff', fontWeight: '700', flexShrink: 0 }}>▸</span>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#cfcfcf', margin: 0, flex: 1 }}>
            {parseBold(content)}
          </p>
        </div>
      );
      return;
    }

    // Regular paragraph
    elements.push(
      <p key={idx} style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#cfcfcf', marginBottom: '12px' }}>
        {parseBold(trimmed)}
      </p>
    );
  });

  if (inTable) flushTable('final');

  return <div>{elements}</div>;
}

export default function IFRSPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');

  const quickLoads = [
    'IFRS 16: Operating lease for office space - journal entries and amortization schedule',
    'IFRS 15: Revenue recognition for a multi-element software contract',
    'IAS 36: Impairment testing for a cash-generating unit with declining margins',
    'IFRS 9: Expected credit loss (ECL) model for trade receivables',
  ];

  const handleQuickLoad = (idx) => {
    setInput(quickLoads[idx]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Please describe your IFRS scenario');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, bot: 'ifrs' }),
      });

      if (!res.ok) throw new Error('Failed to analyze scenario');

      const data = await res.json();
      const text = data.result || data.response || JSON.stringify(data);
      setResponse(text);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/" style={{ color: '#1a5a8a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
        ← RETURN TO BASE
      </Link>

      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#1a5a8a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-02 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          IFRS AI
        </h1>
        <p style={{ color: '#4db8ff', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          STANDARDS ENGINE
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          Full IFRS compliance analysis, journal entries, disclosures, and technical accounting treatments—powered by AI trained on international standards.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span style={{ width: '8px', height: '8px', background: '#4db8ff', borderRadius: '50%', display: 'inline-block' }}></span>
        <span style={{ color: '#4db8ff', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#1a5a8a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // QUICK LOAD
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {quickLoads.map((load, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickLoad(idx)}
              style={{
                background: 'transparent',
                border: '1px solid #404040',
                color: '#4db8ff',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#4db8ff')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#404040')}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#1a5a8a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // DEFINE YOUR IFRS SCENARIO
        </h3>
        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            IFRS SCENARIO *
          </label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="// Describe your IFRS scenario, standard, numbers, and required treatment..."
            style={{
              width: '100%',
              minHeight: '200px',
              background: '#0a0a0a',
              border: '1px solid #333',
              color: '#aaa',
              padding: '16px',
              fontSize: '0.9rem',
              fontFamily: 'monospace',
              boxSizing: 'border-box',
            }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'transparent',
            border: '1px solid #4db8ff',
            color: '#4db8ff',
            padding: '12px 24px',
            fontSize: '0.85rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '700',
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? 'ANALYZING...' : '⟫ ANALYZE SCENARIO'}
        </button>
      </form>

      {error && (
        <div style={{
          background: 'rgba(220,53,69,0.1)',
          border: '1px solid #dc3545',
          color: '#ff6b6b',
          padding: '16px',
          marginBottom: '20px',
          fontSize: '0.85rem',
        }}>
          {error}
        </div>
      )}

      {response && (
        <div style={{ background: '#0a0a0a', border: '1px solid #333', padding: '32px' }}>
          <ReportRenderer text={response} />
        </div>
      )}
    </main>
  );
}
