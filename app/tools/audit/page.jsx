'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function AuditBot() {
  const [input, setInput] = useState('');
  const [response, setResponse] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLoading(true);
    setTimeout(() => {
      setResponse(`🔍 AUDIT ANALYSIS\nScenario: ${input}\nRisk Level: MODERATE\nControls: Implement monitoring, quarterly review, segregation of duties.\nStatus: COMPLETE`);
      setLoading(false);
    }, 1500);
  };

  return (
    <div className="min-h-screen py-12 px-6">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-cyan-400 hover:text-cyan-300">← BACK</Link>
        <div className="flex items-center gap-4 mt-4 mb-6">
          <div className="text-6xl">🔍</div>
          <div><h1 className="text-4xl font-bold">AUDIT AI</h1><p className="text-cyan-400 text-sm">SENTINEL PROTOCOL</p></div>
        </div>
        <div className="bg-white/5 rounded-2xl p-6 border border-cyan-500/30 mb-6">
          <form onSubmit={handleSubmit}>
            <textarea className="w-full p-3 rounded-lg bg-black/50 border border-gray-700 text-white" rows={4} placeholder="Describe the area to audit..." value={input} onChange={(e) => setInput(e.target.value)} />
            <button className="mt-4 px-6 py-2 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold" disabled={loading}>{loading ? 'PROCESSING...' : 'EXECUTE AUDIT'}</button>
          </form>
        </div>
        {response && <div className="bg-white/5 rounded-2xl p-6 border border-cyan-500/30 whitespace-pre-wrap font-mono text-sm">{response}</div>}
      </div>
    </div>
  );
}
