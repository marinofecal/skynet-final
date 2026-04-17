'use client';

import { useState } from 'react';
import Link from 'next/link';

function parseInline(text) {
  return text
    .replace(/\*\*(.+?)\*\*/g, '<strong style="color:#c4983a">$1</strong>')
    .replace(/\*(.+?)\*/g, '<code style="background:rgba(232,160,20,.1);color:#E8A020;padding:1px">$1</code>');
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

    // BULLET
    if (/^[\+\-]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[\+\-]\s/, '');
      elements.push(
        <div key={'n' + i} style={{ display: 'flex', gap: '10px', marginLeft: '8px', marginBottom: '10px' }}>
          <span style={{ color: '#888', flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▪</span>
          <span dangerouslySetInnerHTML={{ __html: parseInline(content) }} />
        </div>
      );
      i++;
      continue;
    }

    // SUB-BULLET
    if (/^\+\s/.test(trimmed) || /^\s{3,}\+\s/.test(line)) {
      const content = trimmed.replace(/^\+\s/, '');
      elements.push(
        <div key={'s' + i} style={{ display: 'flex', gap: '8px', marginLeft: '28px', marginBottom: '8px' }}>
          <span style={{ color: 'rgba(232,160,32,0.35)', flexShrink: 0, marginTop: '2px', fontSize: '0.6rem', letterSpacing: '1px' }}>
            ▴
          </span>
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
        dangerouslySetInnerHTML={{ __html: parseInline(trimmed) }}
      />
    );
    i++;
  }

  return <div>{elements.map((el) => el)}</div>;
}

export default function AuditPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const quickLoads = [
    'Assess internal controls over the P2P cycle for a mid-size manufacturing company',
    'Evaluate segregation of duties in accounts payable with 5 staff members',
    'Review IT general controls and access management for SOX Section 404 compliance',
    'Risk assessment on revenue recognition under IFRS 15 for a SaaS company',
  ];

  const handleQuickLoad = (text) => {
    document.querySelector('textarea').value = text;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    const input = textarea.value.trim();

    if (!input) {
      setError('Please describe an audit scenario');
      return;
    }

    setLoading(true);
    setError('');
    setResponse('');

    try {
      const res = await fetch('/api/bot', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt: input, bot: 'audit' }),
      });

      if (!res.ok) throw new Error('Failed to execute audit');

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
        <a style={{ color: '#7a6a4a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
          ← RETURN TO BASE
        </a>
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#7a6a4a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-01 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          AUDIT AI
        </h1>
        <p style={{ color: '#c4983a', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          SENTINEL PROTOCOL
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          Identify control gaps in P2P, R2R, O2C in minutes—not weeks. Risk assessment, control mapping, and audit documentation at Big 4 standard.
        </p>
      </div>

      {/* Status Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            background: '#00c850',
            borderRadius: '50%',
            display: 'inline-block',
          }}
        ></span>
        <span style={{ color: '#00c850', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      {/* Quick Load */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#7a6a4a', fontSize: '0.8rem', marginBottom: '16px' }}>// QUICK LOAD</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
          {quickLoads.map((load, idx) => (
            <button
              key={idx}
              onClick={() => handleQuickLoad(load)}
              style={{
                background: 'transparent',
                border: '1px solid #404040',
                color: '#c4983a',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#c4983a')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#404040')}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#7a6a4a', fontSize: '0.8rem', marginBottom: '16px' }}>// AUDIT SCENARIO</h3>
        <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '12px' }}>GROQ LLaMA 3.3 70B · 4096 TOKENS</p>

        <textarea
          placeholder="// Describe the process, department, or control environment to audit..."
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
            border: '1px solid #c4983a',
            color: '#c4983a',
            padding: '12px 24px',
            fontSize: '0.85rem',
            cursor: loading ? 'not-allowed' : 'pointer',
            fontWeight: '700',
            opacity: loading ? 0.5 : 1,
          }}
        >
          {loading ? 'EXECUTING...' : '⟫ EXECUTE AUDIT'}
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
