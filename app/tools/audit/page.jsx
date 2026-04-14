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
1. Identified risks
2. Suggested controls
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

  const handleQuick = async (text) => {
    setInput(text);
    setLoading(true);
    setOutput("");

    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          prompt: text,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch (error) {
      setOutput("Error generating response.");
    }

    setLoading(false);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0f1c] text-white p-10">
      
      {/* HEADER */}
      <h1 className="text-4xl font-bold mb-4">
        Audit AI Assistant
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl">
        Identify risks, suggest controls and generate audit procedures for real business scenarios.
      </p>

      {/* QUICK ACTIONS */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <button 
          onClick={() => handleQuick("Revenue process: identify risks and controls for revenue recognition")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          Revenue controls
        </button>

        <button 
          onClick={() => handleQuick("Procurement process: key risks and audit procedures")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          Procurement audit
        </button>

        <button 
          onClick={() => handleQuick("Cash management: fraud risks and controls")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          Cash controls
        </button>
      </div>

      {/* INPUT */}
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-40 bg-[#111] border border-gray-700 p-4 rounded mb-4"
        placeholder="Describe an audit scenario (e.g. revenue process, procurement, controls failure...)"
      />

      {/* BUTTON */}
      <button 
        onClick={handleGenerate}
        className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Analyzing..." : "Generate Audit Analysis"}
      </button>

      {/* OUTPUT */}
      <div className="mt-6 p-6 bg-[#0b0f1a] border border-gray-800 rounded-xl">
        <p className="text-sm text-gray-400 mb-3">Audit Output</p>

        <div className="text-sm whitespace-pre-line leading-relaxed">
          {output || "Your audit analysis will appear here."}
        </div>
      </div>

    </div>
  );
}
