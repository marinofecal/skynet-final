'use client';

import { useState } from 'react';
import Link from 'next/link';

function ReportRenderer({ text }) {
  if (!text) return null;

  const cleanText = text.replace(/\\n/g, '\n').replace(/\\"/g, '"');

  const parseBold = (line) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: '#64d07b', fontWeight: '700' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lines = cleanText.split('\n');
  const elements = [];
  let inCodeBlock = false;
  let codeBuffer = [];
  let tableBuffer = [];
  let inTable = false;

  const flushTable = (key) => {
    if (tableBuffer.length === 0) return;
    const rows = tableBuffer.filter(
      (r) => !/^\|\s*[-:]+[-:|\s]*\|?\s*$/.test(r)
    );
    const parsedRows = rows.map((r) =>
      r.split('|').map((c) => c.trim()).filter((c, i, arr) => !(i === 0 && c === '') && !(i === arr.length - 1 && c === ''))
    );
    if (parsedRows.length === 0) {
      tableBuffer = [];
      return;
    }
    elements.push(
      <div key={`table-${key}`} style={{ overflowX: 'auto', marginBottom: '16px' }}>
        <table
          style={{
            width: '100%',
            borderCollapse: 'collapse',
            fontSize: '0.82rem',
            fontFamily: 'monospace',
          }}
        >
          <thead>
            <tr>
              {parsedRows[0].map((cell, i) => (
                <th
                  key={i}
                  style={{
                    border: '1px solid #2d5a3d',
                    padding: '8px 12px',
                    background: 'rgba(100,208,123,0.1)',
                    color: '#64d07b',
                    textAlign: 'left',
                    fontWeight: '700',
                  }}
                >
                  {cell}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {parsedRows.slice(1).map((row, rIdx) => (
              <tr key={rIdx}>
                {row.map((cell, cIdx) => (
                  <td
                    key={cIdx}
                    style={{
                      border: '1px solid #2d5a3d',
                      padding: '8px 12px',
                      color: '#cfcfcf',
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
    tableBuffer = [];
  };

  lines.forEach((line, idx) => {
    // Code block detection
    if (line.trim().startsWith('```')) {
      if (inCodeBlock) {
        elements.push(
          <pre
            key={`code-${idx}`}
            style={{
              background: 'rgba(50,200,100,.05)',
              border: '1px solid #2d5a3d',
              color: '#64d07b',
              padding: '12px 16px',
              fontSize: '0.82rem',
              overflow: 'auto',
              marginBottom: '16px',
              fontFamily: 'monospace',
              whiteSpace: 'pre-wrap',
            }}
          >
            {codeBuffer.join('\n')}
          </pre>
        );
        codeBuffer = [];
        inCodeBlock = false;
      } else {
        inCodeBlock = true;
      }
      return;
    }

    if (inCodeBlock) {
      codeBuffer.push(line);
      return;
    }

    // Table detection
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
      elements.push(<div key={idx} style={{ height: '0.5rem' }} />);
      return;
    }

    // Section headers (### or numbered sections like "1. FORMULA SECTION")
    if (/^#{1,3}\s+/.test(trimmed) || /^\d+\.\s+[A-Z\s]+:?$/.test(trimmed)) {
      const content = trimmed.replace(/^#{1,3}\s+/, '');
      elements.push(
        <h2
          key={idx}
          style={{
            color: '#64d07b',
            fontSize: '1.1rem',
            fontWeight: '700',
            marginTop: '24px',
            marginBottom: '12px',
            paddingBottom: '6px',
            borderBottom: '1px solid #2d5a3d',
            letterSpacing: '0.5px',
          }}
        >
          {content}
        </h2>
      );
      return;
    }

    // Bullet points
    if (/^[-•*]\s+/.test(trimmed)) {
      const content = trimmed.replace(/^[-•*]\s+/, '');
      elements.push(
        <div
          key={idx}
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '8px',
            paddingLeft: '8px',
          }}
        >
          <span style={{ color: '#64d07b', fontWeight: '700', flexShrink: 0 }}>▸</span>
          <p style={{ fontSize: '0.88rem', lineHeight: '1.6', color: '#cfcfcf', margin: 0, flex: 1 }}>
            {parseBold(content)}
          </p>
        </div>
      );
      return;
    }

    elements.push(
      <p
        key={idx}
        style={{ fontSize: '0.88rem', lineHeight: '1.7', color: '#cfcfcf', marginBottom: '12px' }}
      >
        {parseBold(trimmed)}
      </p>
    );
  });

  if (inTable) flushTable('final');

  return <div>{elements}</div>;
}

export default function ExcelPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [problem, setProblem] = useState('');
  const [columns, setColumns] = useState('');
  const [output, setOutput] = useState('');

  const quickLoads = [
    'Build a dynamic 3-statement financial model with scenario analysis',
    'XLOOKUP with multiple criteria to consolidate monthly P&L data',
    'Power Query: clean and merge 5 years of transaction data',
    'WACC sensitivity table varying cost of equity and debt',
  ];

  const handleQuickLoad = (idx) => {
    setProblem(quickLoads[idx]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!problem.trim()) {
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
      <Link href="/" style={{ color: '#3a7a3a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
        ← RETURN TO BASE
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
        <h3 style={{ color: '#3a7a3a', fontSize: '0.8rem', marginBottom: '16px' }}>
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
        <h3 style={{ color: '#3a7a3a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // DEFINE YOUR PROBLEM
        </h3>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            01 / PROBLEM OR QUESTION *
          </label>
          <textarea
            value={problem}
            onChange={(e) => setProblem(e.target.value)}
            placeholder="// Describe your Excel challenge or financial modelling problem..."
            style={{ width: '100%', minHeight: '120px', background: '#0a0a0a', border: '1px solid #333', color: '#aaa', padding: '16px', fontSize: '0.9rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            02 / COLUMNS / DATA STRUCTURE (optional)
          </label>
          <textarea
            value={columns}
            onChange={(e) => setColumns(e.target.value)}
            placeholder="// e.g. Date, Revenue, COGS, EBITDA, Region..."
            style={{ width: '100%', minHeight: '80px', background: '#0a0a0a', border: '1px solid #333', color: '#aaa', padding: '16px', fontSize: '0.9rem', fontFamily: 'monospace', boxSizing: 'border-box' }}
          />
        </div>

        <div style={{ marginBottom: '24px' }}>
          <label style={{ color: '#888', fontSize: '0.75rem', display: 'block', marginBottom: '8px' }}>
            03 / DESIRED OUTPUT (optional)
          </label>
          <textarea
            value={output}
            onChange={(e) => setOutput(e.target.value)}
            placeholder="// What should the formula or model produce?"
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
        <div style={{ background: '#0a0a0a', border: '1px solid #333', padding: '32px' }}>
          <ReportRenderer text={response} />
        </div>
      )}
    </main>
  );
}
