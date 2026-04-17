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

    // Code blocks (```...```)
    if (trimmed.startsWith('```')) {
      const codeLines = [];
      i++;
      while (i < lines.length && !lines[i].trim().startsWith('```')) {
        codeLines.push(lines[i]);
        i++;
      }
      i++; // skip closing ```

      elements.push(
        <pre
          key={'code' + i}
          style={{
            background: 'rgba(100,150,200,.08)',
            border: '1px solid #2d5a7d',
            color: '#64a7d7',
            padding: '12px',
            fontSize: '0.8rem',
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

    // Table rows (|...|)
    if (trimmed.startsWith('|') && trimmed.endsWith('|')) {
      elements.push(
        <div
          key={'table' + i}
          style={{
            background: 'rgba(100,150,200,.05)',
            border: '1px solid #2d5a7d',
            padding: '8px 12px',
            marginBottom: '8px',
            fontFamily: 'monospace',
            fontSize: '0.75rem',
            color: '#64a7d7',
          }}
        >
          {trimmed}
        </div>
      );
      i++;
      continue;
    }

    // Headers (numbered sections)
    if (/^\d+\.\s/.test(trimmed)) {
      elements.push(
        <h3
          key={'h' + i}
          style={{
            fontSize: '1rem',
            fontWeight: '700',
            color: '#64a7d7',
            marginTop: '16px',
            marginBottom: '12px',
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

    // BULLET points (-, •, *)
    if (/^[-•*]\s/.test(trimmed)) {
      const content = trimmed.replace(/^[-•*]\s/, '');
      elements.push(
        <div key={'bullet' + i} style={{ display: 'flex', gap: '10px', marginLeft: '16px', marginBottom: '8px' }}>
          <span style={{ color: '#64a7d7', flexShrink: 0, marginTop: '2px', fontSize: '0.65rem' }}>▪</span>
          <span style={{ fontSize: '0.85rem', color: '#b8b8b8' }}>
            {content.split(/(\*\*[^*]+\*\*)/).map((part, idx) =>
              part.startsWith('**') && part.endsWith('**') ? (
                <strong key={idx} style={{ color: '#64a7d7' }}>{part.slice(2, -2)}</strong>
              ) : (
                part
              )
            )}
          </span>
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
        }}
      >
        {trimmed.split(/(\*\*[^*]+\*\*)/).map((part, idx) =>
          part.startsWith('**') && part.endsWith('**') ? (
            <strong key={idx} style={{ color: '#64a7d7' }}>{part.slice(2, -2)}</strong>
          ) : (
            part
          )
        )}
      </p>
    );
    i++;
  }

  return <div>{elements.map((el) => el)}</div>;
}

export default function IFRSPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');

  const quickLoads = [
    'IFRS 15: Revenue recognition for a SaaS subscription business with multi-year contracts',
    'IFRS 16: Lease accounting for operating leases and its impact on the balance sheet',
    'IAS 37: Provision recognition for pending litigation and warranty claims',
    'IFRS 9: Impairment of financial assets and expected credit loss calculations',
  ];

  const handleQuickLoad = (idx) => {
    document.querySelector('textarea').value = quickLoads[idx];
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const textarea = document.querySelector('textarea');
    const input = textarea.value.trim();

    if (!input) {
      setError('Please describe your IFRS accounting scenario');
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

      if (!res.ok) throw new Error('Failed to analyze IFRS scenario');

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
        <a style={{ color: '#4a6a7a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
          ← RETURN TO BASE
        </a>
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#4a6a7a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-02 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          IFRS AI
        </h1>
        <p style={{ color: '#64a7d7', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          COMPLIANCE ENGINE
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          Revenue recognition (IFRS 15), lease accounting (IFRS 16), provisions (IAS 37), and financial statement impact analysis.
        </p>
      </div>

      {/* Status Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            background: '#64a7d7',
            borderRadius: '50%',
            display: 'inline-block',
          }}
        ></span>
        <span style={{ color: '#64a7d7', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      {/* Quick Load */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#4a6a7a', fontSize: '0.8rem', marginBottom: '16px' }}>
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
                color: '#64a7d7',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#64a7d7')}
              onMouseLeave={(e) => (e.target.style.borderColor = '#404040')}
            >
              {load}
            </button>
          ))}
        </div>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#4a6a7a', fontSize: '0.8rem', marginBottom: '16px' }}>
          // ACCOUNTING SCENARIO
        </h3>
        <p style={{ color: '#666', fontSize: '0.75rem', marginBottom: '12px' }}>
          GROQ LLaMA 3.3 70B · IFRS SPECIALIST
        </p>

        <textarea
          placeholder="// Describe your IFRS accounting challenge or scenario..."
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
            border: '1px solid #64a7d7',
            color: '#64a7d7',
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
