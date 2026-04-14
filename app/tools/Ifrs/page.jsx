"use client";

import { useState } from "react";

export default function IFRSPage() {
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
          prompt: input,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch (error) {
      setOutput("Error generating response.");
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
        IFRS AI Advisor
      </h1>

      <p className="text-gray-400 mb-8 max-w-xl">
        Generate IFRS-compliant explanations, journal entries and financial reporting insights.
      </p>

      {/* SELECTOR */}
      <select className="bg-[#111] border border-gray-700 p-3 rounded mb-6">
        <option>IAS 36 – Impairment of Assets</option>
        <option>IFRS 15 – Revenue Recognition</option>
        <option>IFRS 9 – Financial Instruments</option>
      </select>

      {/* QUICK ACTIONS */}
      <div className="flex gap-3 mb-4 flex-wrap">
        <button 
          onClick={() => handleQuick("Explain IAS 36 impairment test with example")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          IAS 36 example
        </button>

        <button 
          onClick={() => handleQuick("Provide IFRS 15 revenue recognition example with journal entries")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          IFRS 15 scenario
        </button>

        <button 
          onClick={() => handleQuick("Summarize IFRS 9 financial instruments classification")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          IFRS 9 summary
        </button>
      </div>

      {/* INPUT */}
      <textarea 
        value={input}
        onChange={(e) => setInput(e.target.value)}
        className="w-full h-40 bg-[#111] border border-gray-700 p-4 rounded mb-4"
        placeholder="Ask about IFRS (e.g. impairment test, revenue recognition, journal entries...)"
      />

      {/* BUTTON */}
      <button 
        onClick={handleGenerate}
        className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500 disabled:opacity-50"
        disabled={loading}
      >
        {loading ? "Generating..." : "Generate Answer"}
      </button>

      {/* OUTPUT */}
      <div className="mt-6 p-6 bg-[#0b0f1a] border border-gray-800 rounded-xl">
        <p className="text-sm text-gray-400 mb-3">AI Output</p>

        <div className="text-sm whitespace-pre-line leading-relaxed">
          {output || "Your AI-generated answer will appear here."}
        </div>
      </div>

    </div>
  );
}
