'use client';

import { useState } from "react";
import Link from "next/link";

export default function IFRSBot() {
    const [input, setInput] = useState("");
    const [response, setResponse] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!input.trim()) return;
        
        setLoading(true);
        setResponse("");
        
        setTimeout(() => {
            setResponse(`
╔══════════════════════════════════════════════════╗
║  IFRS COMPLIANCE REPORT                          ║
╠══════════════════════════════════════════════════╣
║  Standard: ${input.slice(0, 35)}...
║  Status: COMPLIANT
║  Effective Date: Current Period
║
║  REQUIREMENTS SUMMARY:
║  • Recognition criteria: MET
║  • Measurement guidance: APPLICABLE
║  • Disclosure requirements: COMPLETE
║  • Transition provisions: REVIEWED
║
║  RECOMMENDATION: Proceed with implementation
║  Risk Level: LOW
╚══════════════════════════════════════════════════╝
            `);
            setLoading(false);
        }, 1500);
    };

    return (
        <div className="min-h-screen py-12 px-8">
            <div className="max-w-5xl mx-auto">
                <div className="mb-8">
                    <Link href="/" className="text-cyan-400 hover:text-cyan-300 transition text-sm font-mono inline-flex items-center gap-1">
                        ← BACK TO HOME
                    </Link>
                    <div className="flex items-center gap-4 mt-4">
                        <div className="text-6xl">📊</div>
                        <div>
                            <h1 className="text-4xl font-bold">IFRS AI</h1>
                            <p className="text-cyan-400 font-mono text-sm">COMPLIANCE ENGINE</p>
                        </div>
                    </div>
                    <p className="text-gray-400 mt-4 max-w-2xl">
                        Accounting standards interpreter with intelligent documentation and compliance checking.
                    </p>
                </div>

                <div className="glass-card rounded-2xl p-6 mb-6">
                    <form onSubmit={handleSubmit}>
                        <textarea
                            value={input}
                            onChange={(e) => setInput(e.target.value)}
                            placeholder="Enter IFRS standard or accounting scenario (e.g., IFRS 15 Revenue Recognition)..."
                            className="w-full p-4 rounded-xl bg-gray-900/50 border border-gray-700 text-white placeholder-gray-500 focus:outline-none focus:border-cyan-500 transition resize-none font-mono text-sm"
                            rows={4}
                        />
                        <button
                            type="submit"
                            disabled={loading}
                            className="mt-4 px-6 py-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg font-semibold hover:shadow-[0_0_20px_rgba(168,85,247,0.3)] transition disabled:opacity-50"
                        >
                            {loading ? "PROCESSING..." : "⟫ ANALYZE STANDARD"}
                        </button>
                    </form>
                </div>

                {response && (
                    <div className="glass-card rounded-2xl p-6 animate-slide-up">
                        <pre className="text-purple-400 whitespace-pre-wrap font-mono text-xs leading-relaxed">
                            {response}
                        </pre>
                    </div>
                )}

                <div className="mt-8 p-4 rounded-xl bg-purple-500/5 border border-purple-500/20 text-center">
                    <p className="text-xs text-gray-500 font-mono">
                        AI-powered IFRS compliance simulation · Connect to OpenAI API for production
                    </p>
                </div>
            </div>
        </div>
    );
}
