'use client';

import { useState } from 'react';
import Link from 'next/link';

function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#4ba3d8">$1</strong>')
    .replace(/\*(.+?)\*/g, '<code style="background:rgba(75,163,216,.1);color:#4ba3d8;padding:1px">$1</code>');
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
      elements.push(<div key={i} style={{ height: '0.5rem' }} />);
      i++;
      continue;
    }

    // TABLE
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      const rows = tableLines.map((l) => {
        return l
          .split('|')
          .filter((cell) => cell.trim())
          .map((cell) => cell.trim());
      });

      elements.push(
        <div key={'t' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '10px' }}>
          <table style={{ borderCollapse: 'collapse', width: '100%', fontSize: '0.72rem' }}>
            <tbody>
              {rows.map((row, idx) => (
                <tr key={idx} style={{ display: 'flex', gap: '10px', marginBottom: '8px' }}>
                  {row.map((cell, cellIdx) => (
                    <td
                      key={cellIdx}
                      style={{
                        padding: '8px 12px',
                        color: '#d8d8d8',
                        border: '1px solid #404040',
                        flex: 1,
                      }}
                    >
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
      continue;
    }

    // BULLET
    if (/^[\+\-]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[\+\-]\s/, '');
      elements.push(
        <div key={'n' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '10px' }}>
          <span style={{ color: '#4ba3d8', flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▪</span>
          <span dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++;
      continue;
    }

    // Default paragraph
    elements.push(
      <p
        key={'p' + i}
        style={{
          fontSize: '0.85rem',
          lineHeight: '1.6',
          marginBottom: '12px',
          color: '#b8b8b8',
          margin: '0 0 12px 0',
        }}
        dangerouslySetInnerHTML={{
          __html: parseInline(trimmed),
        }}
      />
    );
    i++;
  }

  return (
    <div>
      {elements.map((el) => el)}
    </div>
  );
}

export default function IFRSPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const quickLoads = [
    'IFRS 15 revenue recognition for a SaaS company with multi-element arrangements',
    'IFRS 16 lease classification and right-of-use asset measurement for a 5-year office lease',
    'IFRS 9 expected credit loss provisioning for trade receivables portfolio',
    'IFRS 17 measurement approach selection — PAA vs GMM for general insurance',
  ];

  const handleQuickLoad = (text) => {
    document.querySelector('textarea').value = text;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    const input = textarea.value.trim();

    if (!input) {
      setError('Please describe an IFRS scenario');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/bot/route', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, bot: 'ifrs' }),
      });

      if (!res.ok) throw new Error('Failed to analyze standard');

      const reader = res.body.getReader();
      const decoder = new TextDecoder();
      let text = '';

      while (true) {
        const { done, value } = await reader.read();
        if (done) break;
        text += decoder.decode(value);
        setResponse(text);
      }
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      {/* Back Link */}
      <Link href="/">
        <a style={{ color: '#3a5a7a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
          ← RETURN TO BASE
        </a>
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#3a5a7a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-02 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          IFRS AI
        </h1>
        <p style={{ color: '#4ba3d8', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          COMPLIANCE ENGINE
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          Your IFRS technical expert. Revenue recognition, lease accounting, credit loss, measurement approach—Big 4 standard guidance in minutes.
        </p>
      </div>

      {/* Status Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            background: '#4ba3d8',
            borderRadius: '50%',
            display: 'inline-block',
          }}
        ></span>
        <span style={{ color: '#4ba3d8', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      {/* Quick Load */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#3a5a7a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // QUICK LOAD
        </h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {quickLoads.map((load, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickLoad(load)}
              style={{
                background: 'transparent',
                border: '1px solid #404040',
                color: '#4ba3d8',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#4ba3d8')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#404040')}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#3a5a7a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // IFRS SCENARIO
        </h3>
        <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '12px' }}>
          GROQ LLaMA 3.3 70B · 4096 TOKENS
        </p>
        <textarea
          placeholder="// Describe the accounting scenario, transaction, or IFRS standard to analyze..."
          style={{
            width: '100%',
            minHeight: '150px',
            background: '#0a0a0a',
            border: '1px solid #333',
            color: '#aaa',
            padding: '16px',
            fontSize: '0.9rem',
            fontFamily: 'monospace',
            marginBottom: '16px',
            boxSizing: 'border-box',
          }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'transparent',
            border: '1px solid #4ba3d8',
            color: '#4ba3d8',
            padding: '12px 24px',
            fontSize: '0.85rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '700',
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? 'ANALYZING...' : '⟫ ANALYZE STANDARD'}
        </button>
      </form>

      {/* Error */}
      {error && (
        <div
          style={{
            background: 'rgba(220,53,69,0.1)',
            border: '1px solid #dc3545',
            color: '#ff6b6b',
            padding: '16px',
            marginBottom: '20px',
            fontSize: '0.85rem',
          }}
        >
          {error}
        </div>
      )}

      {/* Response */}
      {response && (
        <div style={{ background: '#0a0a0a', border: '1px solid #333', padding: '24px' }}>
          <ReportRenderer text={response} />
        </div>
      )}
    </main>
  );
}
