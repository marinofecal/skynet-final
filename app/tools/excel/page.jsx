'use client';

import { useState } from 'react';
import Link from 'next/link';

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

    // CODE BLOCKS
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      if (i < lines.length) i++;

      elements.push(
        <pre
          key={'code' + i}
          style={{
            background: 'rgba(100,208,123,.08)',
            border: '1px solid #2d5a3d',
            color: '#64d07b',
            padding: '12px',
            fontSize: '0.85rem',
            overflow: 'auto',
            marginBottom: '12px',
            fontFamily: 'monospace',
            borderRadius: '4px',
          }}
        >
          {codeLines.join('\n')}
        </pre>
      );
      continue;
    }

    // TABLES
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      const tableLines = [];
      while (i < lines.length && lines[i].trim().startsWith('|')) {
        tableLines.push(lines[i].trim());
        i++;
      }

      // Filter out separator lines (|----|----|)
      const rows = tableLines
        .filter(l => !/^\|[\s\-:|]+\|$/.test(l))
        .map(l => l.split('|').filter(c => c.trim() !== '').map(c => c.trim()));

      if (rows.length > 0) {
        elements.push(
          <div
            key={'table' + i}
            style={{
              overflowX: 'auto',
              marginBottom: '16px',
              border: '1px solid #2d5a3d',
              borderRadius: '4px',
            }}
          >
            <table
              style={{
                width: '100%',
                borderCollapse: 'collapse',
                fontSize: '0.8rem',
                color: '#64d07b',
              }}
            >
              <tbody>
                {rows.map((row, rowIdx) => (
                  <tr
                    key={rowIdx}
                    style={{
                      background: rowIdx === 0 ? 'rgba(100,208,123,.15)' : 'rgba(100,208,123,.02)',
                      borderBottom: '1px solid #2d5a3d',
                    }}
                  >
                    {row.map((cell, cellIdx) => (
                      <td
                        key={cellIdx}
                        style={{
                          padding: '10px 12px',
                          textAlign: cellIdx === 0 ? 'left' : 'center',
                          borderRight: cellIdx < row.length - 1 ? '1px solid #2d5a3d' : 'none',
                          fontWeight: rowIdx === 0 ? '700' : '400',
                          fontFamily: 'monospace',
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
      }
      continue;
    }

    // HEADERS
    if (/^\d+\.\s/.test(trimmed)) {
      elements.push(
        <h3
          key={'h' + i}
          style={{
            fontSize: '1rem',
            fontWeight: '700',
            color: '#64d07b',
            marginTop: '20px',
            marginBottom: '10px',
            borderBottom: '1px solid #404040',
            paddingBottom: '8px',
          }}
        >
          {trimmed}
        </h3>
      );
      i++;
      continue;
    }

    // BULLETS
    if (/^[-•*]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[-•*]\s/, '');
      elements.push(
        <div key={'bullet' + i} style={{ display: 'flex', gap: '10px', marginLeft: '16px', marginBottom: '6px' }}>
          <span style={{ color: '#64d07b', flexShrink: 0, marginTop: '2px' }}>▪</span>
          <span style={{ fontSize: '0.85rem', color: '#b8b8b8' }}>{content}</span>
        </div>
      );
      i++;
      continue;
    }

    // DEFAULT
    elements.push(
      <p
        key={'p' + i}
        style={{
          fontSize: '0.85rem',
          lineHeight: '1.6',
          marginBottom: '8px',
          color: '#b8b8b8',
        }}
      >
        {trimmed}
      </p>
    );
    i++;
  }

  return <div>{elements.map((el) => el)}</div>;
}

export default function ExcelPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const quickLoads = [
    'Build a dynamic 3-statement financial model with scenario analysis',
    'XLOOKUP with multiple criteria to consolidate monthly P&L data',
    'Power Query: clean and merge 5 years of transaction data',
    'WACC sensitivity table varying cost of equity and debt',
  ];

  const handleQuickLoad = (idx) => {
    const textarea = document.querySelectorAll('textarea')[0];
    textarea.value = quickLoads[idx];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textareas = document.querySelectorAll('textarea');
    const problem = textareas[0].value.trim();
    const columns = textareas[1].value.trim();
    const output = textareas[2].value.trim();

    if (!problem) {
      setError('Please describe your Excel challenge');
      return;
    }

    const prompt = `Problem: ${problem}\nColumns: ${columns || 'Not specified'}\nDesired Output: ${output || 'Not specified'}`;

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, bot: 'excel' }),
      });

      if (!res.ok) throw new Error('Failed to generate solution');

      const data = await res.json();
      let text = data.result || '';

      // Clean up escaped characters
      text = text.replace(/\\n/g, '\n').replace(/\\"/g, '"');

      setResponse(text);
    } catch (err) {
      setError(err.message || 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  return (
    <main style={{ padding: '60px 40px', maxWidth: '1000px', margin: '0 auto' }}>
      <Link href="/">
        <a style={{ color: '#3a7a3a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
          ← RETURN TO BASE
        </a>
      </Link>

      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#3a7a3a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-03 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          EXCEL AI
        </h1>
        <p style={{ color: '#64d07b', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          DATA FORGE
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          3-statement models, sensitivity analysis, XLOOKUP consolidations, and dynamic dashboards—complete with step-by-step implementation.
        </p>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span style={{ width: '8px', height: '8px', background: '#64d07b', borderRadius: '50%', display: 'inline-block' }}></span>
        <span style={{ color: '#64d07b', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#3a7a3a', fontSize: '0.8rem', marginBottom: '16px' }}>// QUICK LOAD</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {quickLoads.map((load, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickLoad(idx)}
              style={{
                background: 'transparent',
                border: '1px solid #404040',
                color: '#64d07b',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#64d07b')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#404040')}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#3a7a3a', fontSize: '0.8rem', marginBottom: '16px' }}>// DEFINE YOUR PROBLEM</h3>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            01 / PROBLEM OR QUESTION *
          </label>
          <textarea
            placeholder="// Describe your Excel challenge..."
            style={{ width: '100%', minHeight: '120px', background: '#0a0a0a', border: '1px solid #333', color: '#aaa', padding: '16px', fontSize: '0.9rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            02 / COLUMNS / DATA STRUCTURE (optional)
          </label>
          <textarea
            placeholder="// e.g. Date, Revenue, COGS..."
            style={{ width: '100%', minHeight: '80px', background: '#0a0a0a', border: '1px solid #333', color: '#aaa', padding: '16px', fontSize: '0.9rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            03 / DESIRED OUTPUT (optional)
          </label>
          <textarea
            placeholder="// What should the formula produce?"
            style={{ width: '100%', minHeight: '80px', background: '#0a0a0a', border: '1px solid #333', color: '#aaa', padding: '16px', fontSize: '0.9rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          style={{
            background: 'transparent',
            border: '1px solid #64d07b',
            color: '#64d07b',
            padding: '12px 24px',
            fontSize: '0.85rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '700',
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? 'GENERATING...' : '⟫ GENERATE SOLUTION'}
        </button>
      </form>

      {error && (
        <div style={{ background: 'rgba(220,53,69,0.1)', border: '1px solid #dc3545', color: '#ff6b6b', padding: '16px', marginBottom: '20px', fontSize: '0.85rem' }}>
          {error}
        </div>
      )}

      {response && (
        <div style={{ background: '#0a0a0a', border: '1px solid #333', padding: '24px' }}>
          <ReportRenderer text={response} />
        </div>
      )}
    </main>
  );
}
