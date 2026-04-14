"use client";

import { useState } from "react";

export default function AuditPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");
  const [loading, setLoading] = useState(false);

  const handleGenerate = async () => {
    if (!input) return;

    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: `You are an audit expert. Analyze this scenario and provide:
1. Risks
2. Controls
3. Audit procedures

Scenario: ${input}`,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch (error) {
      setOutput("Error generating audit response.");
    }

    setLoading(false);
  };

  const handleQuick = (text) => {
    setInput(text);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0f1c] text-white px-6 py-16">
      
      <div className="max-w-4xl mx-auto">

        {/* HEADER */}
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          Audit AI Assistant
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Identify risks, design controls and generate audit procedures for real business scenarios.
        </p>

        {/* QUICK ACTIONS */}
        <div className="flex flex-wrap gap-3 mb-6">
          {[
            "Revenue recognition process risks and controls",
            "Procurement cycle audit procedures",
            "Cash management fraud risks",
          ].map((item, i) => (
            <button
              key={i}
              onClick={() => handleQuick(item)}
              className="px-4 py-2 bg-[#111827] border border-gray-700 rounded-lg hover:border-blue-500 hover:text-blue-400 transition text-sm"
            >
              {item}
            </button>
          ))}
        </div>

        {/* INPUT CARD */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-2xl p-6 mb-6 shadow-lg">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            className="w-full h-40 bg-transparent outline-none text-sm resize-none"
            placeholder="Describe an audit scenario (e.g. revenue process, procurement, control failure...)"
          />

          <div className="flex justify-end mt-4">
            <button
              onClick={handleGenerate}
              disabled={loading}
              className="px-6 py-3 rounded-xl bg-gradient-to-r from-blue-500 to-purple-500 hover:scale-105 transition disabled:opacity-50"
            >
              {loading ? "Analyzing..." : "Generate Audit Analysis"}
            </button>
          </div>
        </div>

        {/* OUTPUT CARD */}
        <div className="bg-[#0b0f1a] border border-gray-800 rounded-2xl p-6 shadow-lg">
          <p className="text-sm text-gray-400 mb-3">
            Audit Output
          </p>

          <div className="text-sm whitespace-pre-line leading-relaxed text-gray-200">
            {output || "Your audit analysis will appear here."}
          </div>
        </div>

      </div>
    </div>
  );
}
