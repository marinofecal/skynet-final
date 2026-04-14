"use client";

import { useState } from "react";

export default function IFRSPage() {
  const [output, setOutput] = useState("");

  const handleGenerate = () => {
    setOutput("This is a sample AI-generated IFRS response based on your query.");
  };

  const handleQuick = (text) => {
    setOutput(`Generated example for: ${text}`);
  };

  return (
    <div className="min-h-screen bg-black text-white p-10">
      
      {/* TITLE */}
      <h1 className="text-3xl font-bold mb-6">
        IFRS AI Advisor
      </h1>

      {/* SELECTOR */}
      <select className="bg-[#111] border border-gray-700 p-3 rounded mb-6">
        <option>IAS 36 – Impairment of Assets</option>
        <option>IFRS 15 – Revenue Recognition</option>
        <option>IFRS 9 – Financial Instruments</option>
      </select>

      {/* QUICK ACTIONS */}
      <div className="flex gap-3 mb-4">
        <button 
          onClick={() => handleQuick("IAS 36 impairment test")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          IAS 36 example
        </button>

        <button 
          onClick={() => handleQuick("IFRS 15 revenue recognition")}
          className="bg-gray-800 px-3 py-1 rounded text-sm hover:bg-gray-700"
        >
          IFRS 15 scenario
        </button>
      </div>

      {/* INPUT */}
      <textarea 
        className="w-full h-40 bg-[#111] border border-gray-700 p-4 rounded mb-4"
        placeholder="Ask about IFRS, e.g. impairment test, revenue recognition..."
      />

      {/* BUTTON */}
      <button 
        onClick={handleGenerate}
        className="px-6 py-3 bg-blue-600 rounded hover:bg-blue-500"
      >
        Generate Answer
      </button>

      {/* OUTPUT */}
      <div className="mt-6 p-4 bg-[#111] border border-gray-800 rounded">
        <p className="text-sm text-gray-400 mb-2">AI Output</p>
        <div className="text-sm">
          {output || "Your AI-generated answer will appear here."}
        </div>
      </div>

    </div>
  );
}
