'use client';

import { useState } from 'react';
import Link from 'next/link';

export default function AuditBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setResponse('');
    // Simulación de respuesta de IA (luego conectar a API real)
    setTimeout(() => {
      setResponse(`
╔══════════════════════════════════════════════════╗
║  AUDIT ANALYSIS REPORT                          ║
╠══════════════════════════════════════════════════╣
║  Scenario: ${input.slice(0, 50)}...
║  Risk Level: MODERATE
║  Priority: HIGH
║
║  RECOMMENDED CONTROLS:
║  • Implement automated monitoring
║  • Quarterly review required
║  • Segregation of duties review
║  • Documentation for compliance
║
║  STATUS: COMPLETE
╚══════════════════════════════════════════════════╝
      `);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="mb-10">
          <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition text-sm font-mono inline-flex items-center gap-1">
            ← BACK TO HOME
          </Link>
          <div className="flex items-center gap-5 mt-5">
            <div className="text-7xl">🔍</div>
            <div>
              <h1 className="text-4xl font-bold">AUDIT AI</h1>
              <p className="text-cyan-400 font-mono text-sm tracking-wider">SENTINEL PROTOCOL</p>
            </div>
          </div>
          <p className="text-gray-400 mt-4 max-w-2xl">
            Autonomous risk assessment and audit procedure generation with real‑time analysis.
          </p>
        </div>

        <div className="glass-card rounded-2xl p-6 mb-8">
          <form onSubmit={handleSubmit}>
            <textarea
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Describe the business process or area to audit (e.g., 'Procurement to payment cycle')..."
              className="w-full p-4 rounded-xl bg-gray-900/60 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition resize-none font-mono text-sm"
              rows={4}
            />
            <button
              type="submit"
              disabled={loading}
              className="mt-5 px-6 py-2.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition disabled:opacity-50"
            >
              {loading ? 'PROCESSING...' : '⟫ EXECUTE AUDIT'}
            </button>
          </form>
        </div>

        {response && (
          <div className="glass-card rounded-2xl p-6 animate-fade-slide-up">
            <pre className="text-cyan-400 whitespace-pre-wrap font-mono text-xs leading-relaxed">
              {response}
            </pre>
          </div>
        )}

        <div className="mt-8 p-4 rounded-xl bg-cyan-500/5 border border-cyan-500/20 text-center">
          <p className="text-xs text-gray-500 font-mono">
            AI‑powered audit simulation · Connect to OpenAI API for production
          </p>
        </div>
      </div>
    </div>
  );
}
