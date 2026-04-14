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
          prompt: `
You are an IFRS expert.

Provide a structured answer including:

1. EXPLANATION
2. ACCOUNTING TREATMENT
3. JOURNAL ENTRIES (if applicable)
4. PRACTICAL INSIGHT

Scenario:
${input}
          `,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch {
      setOutput("Error generating response.");
    }

    setLoading(false);
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "black",
      color: "white",
      padding: "60px"
    }}>
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        IFRS AI Advisor
      </h1>

      <p style={{ color: "#aaa", marginBottom: "20px" }}>
        Generate IFRS-compliant explanations and accounting treatments.
      </p>

      {/* QUICK CASES */}
      <div style={{ marginBottom: "20px" }}>
        <button onClick={() => setInput("IFRS 15 revenue recognition example with journal entries")}>
          IFRS 15
        </button>

        <button onClick={() => setInput("IAS 36 impairment test example")}>
          IAS 36
        </button>

        <button onClick={() => setInput("IFRS 9 financial instruments classification example")}>
          IFRS 9
        </button>
      </div>

      {/* INPUT */}
      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Describe IFRS scenario..."
        style={{
          width: "100%",
          height: "120px",
          marginBottom: "20px"
        }}
      />

      <button onClick={handleGenerate}>
        {loading ? "Generating..." : "Generate Answer"}
      </button>

      {/* OUTPUT */}
      <div style={{ marginTop: "40px" }}>
        <h3>AI Output</h3>

        <div style={{ whiteSpace: "pre-line", marginTop: "10px" }}>
          {output || "No response"}
        </div>
      </div>
    </div>
  );
}
