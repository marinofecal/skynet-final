'use client';

import { useState } from 'react';
import Link from 'next/link';

function ReportRenderer({ text }) {
  if (!text) return null;

  // Clean escaped characters
  const cleanText = text.replace(/\\n/g, '\n').replace(/\\"/g, '"');

  // Parse bold text (**text**)
  const parseBold = (line) => {
    const parts = line.split(/(\*\*[^*]+\*\*)/g);
    return parts.map((part, i) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return (
          <strong key={i} style={{ color: '#ffb347', fontWeight: '700' }}>
            {part.slice(2, -2)}
          </strong>
        );
      }
      return <span key={i}>{part}</span>;
    });
  };

  const lines = cleanText.split('\n');
  const elements = [];

  lines.forEach((line, idx) => {
    const trimmed = line.trim();

    // Empty line
    if (!trimmed) {
      elements.push(<div key={idx} style={{ height: '0.75rem' }} />);
      return;
    }

    // Numbered section header (e.g., "1. Audit Planning")
    if (/^\d+\.\s+[A-Z]/.test(trimmed)) {
      elements.push(
        <h2
          key={idx}
          style={{
            color: '#ffb347',
            fontSize: '1.15rem',
            fontWeight: '700',
            marginTop: '28px',
            marginBottom: '14px',
            paddingBottom: '8px',
            borderBottom: '1px solid #3a2a1a',
            letterSpacing: '0.5px',
          }}
        >
          {parseBold(trimmed)}
        </h2>
      );
      return;
    }

    // Executive Summary or main section headers (e.g., "Executive summary:")
    if (/^(Executive summary|Summary|Conclusion|Recommendations?|Findings?|Overview):/i.test(trimmed)) {
      const [heading, ...rest] = trimmed.split(':');
      elements.push(
        <div key={idx} style={{ marginTop: '20px', marginBottom: '12px' }}>
          <h3
            style={{
              color: '#ffb347',
              fontSize: '1rem',
              fontWeight: '700',
              marginBottom: '8px',
              textTransform: 'uppercase',
              letterSpacing: '1px',
            }}
          >
            {heading}
          </h3>
          <p
            style={{
              fontSize: '0.9rem',
              lineHeight: '1.7',
              color: '#cfcfcf',
              margin: 0,
            }}
          >
            {parseBold(rest.join(':').trim())}
          </p>
        </div>
      );
      return;
    }

    // Headers with colon at end (e.g., "Key Controls:")
    if (/^[A-Z][A-Za-z\s&]+:$/.test(trimmed) && trimmed.length < 60) {
      elements.push(
        <h3
          key={idx}
          style={{
            color: '#e89b3a',
            fontSize: '0.95rem',
            fontWeight: '700',
            marginTop: '18px',
            marginBottom: '10px',
            textTransform: 'uppercase',
            letterSpacing: '0.5px',
          }}
        >
          {trimmed.replace(':', '')}
        </h3>
      );
      return;
    }

    // Bullet points (- or • or *)
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
          <span style={{ color: '#ffb347', fontWeight: '700', flexShrink: 0 }}>
            ▸
          </span>
          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: '1.6',
              color: '#cfcfcf',
              margin: 0,
              flex: 1,
            }}
          >
            {parseBold(content)}
          </p>
        </div>
      );
      return;
    }

    // Numbered list items (e.g., "1) Something" or "1. Something" without capital start)
    if (/^\d+[\.\)]\s+/.test(trimmed) && !/^\d+\.\s+[A-Z]/.test(trimmed)) {
      const content = trimmed.replace(/^\d+[\.\)]\s+/, '');
      elements.push(
        <div
          key={idx}
          style={{
            display: 'flex',
            gap: '12px',
            marginBottom: '10px',
            paddingLeft: '8px',
          }}
        >
          <span style={{ color: '#ffb347', fontWeight: '700', flexShrink: 0 }}>
            {trimmed.match(/^\d+/)[0]}.
          </span>
          <p
            style={{
              fontSize: '0.88rem',
              lineHeight: '1.6',
              color: '#cfcfcf',
              margin: 0,
              flex: 1,
            }}
          >
            {parseBold(content)}
          </p>
        </div>
      );
      return;
    }

    // Regular paragraph
    elements.push(
      <p
        key={idx}
        style={{
          fontSize: '0.88rem',
          lineHeight: '1.7',
          color: '#cfcfcf',
          marginBottom: '12px',
        }}
      >
        {parseBold(trimmed)}
      </p>
    );
  });

  return <div>{elements}</div>;
}

export default function AuditPage() {
  const [loading, setLoading] = useState(false);
  const [response, setResponse] = useState('');
  const [error, setError] = useState('');
  const [input, setInput] = useState('');

  const quickLoads = [
    'Assess internal controls for the P2P (Procure-to-Pay) cycle in a manufacturing company',
    'Evaluate revenue recognition risks under IFRS 15 for a SaaS company',
    'Design audit procedures for inventory valuation at year-end',
    'Identify key controls for cash and treasury management in a multinational',
  ];

  const handleQuickLoad = (idx) => {
    setInput(quickLoads[idx]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) {
      setError('Please describe your audit challenge');
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
      {/* Back Link */}
      <Link href="/" style={{ color: '#7a5a3a', textDecoration: 'none', marginBottom: '40px', display: 'inline-block' }}>
        ← RETURN TO BASE
      </Link>

      {/* Header */}
      <div style={{ marginBottom: '60px' }}>
        <p style={{ color: '#7a5a3a', fontSize: '0.8rem', marginBottom: '8px' }}>AGT-01 / ACTIVE</p>
        <h1 style={{ fontSize: '3.5rem', fontWeight: '900', margin: '0 0 8px 0', color: '#fff' }}>
          AUDIT AI
        </h1>
        <p style={{ color: '#ffb347', fontSize: '0.9rem', fontWeight: '700', margin: '0 0 16px 0' }}>
          RISK ASSESSMENT
        </p>
        <p style={{ color: '#888', fontSize: '1rem', lineHeight: '1.6', maxWidth: '600px', margin: '0' }}>
          Comprehensive audit procedures, internal control assessments, risk identification, and IFRS-compliant reporting—built for modern audit professionals.
        </p>
      </div>

      {/* Status Badge */}
      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '40px' }}>
        <span
          style={{
            width: '8px',
            height: '8px',
            background: '#ffb347',
            borderRadius: '50%',
            display: 'inline-block',
          }}
        ></span>
        <span style={{ color: '#ffb347', fontSize: '0.8rem' }}>ONLINE</span>
      </div>

      {/* Quick Load */}
      <div style={{ marginBottom: '40px' }}>
        <h3 style={{ color: '#7a5a3a', fontSize: '0.8rem', marginBottom: '16px' }}>
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
                color: '#ffb347',
                padding: '12px 16px',
                fontSize: '0.75rem',
                cursor: 'pointer',
                textAlign: 'left',
                transition: 'all 0.2s',
              }}
              onMouseEnter={(e) => (e.target.style.borderColor = '#ffb347')}
              onMouseLeave={(e) => (e.target
