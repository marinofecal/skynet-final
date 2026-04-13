"use client";

import { useState } from "react";

export default function BotPage() {
  const [prompt, setPrompt] = useState("");
  const [result, setResult] = useState("");

  const runBot = async () => {
    setResult("Loading...");

    const res = await fetch("/api/bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ prompt })
    });

    const data = await res.json();
    setResult(data.result || data.error);
  };

  return (
    <div style={{ padding: 40, background: "black", minHeight: "100vh", color: "white" }}>
      <h1 style={{ fontSize: 32, marginBottom: 20 }}>AI Financial Bot</h1>

      <textarea
        value={prompt}
        onChange={(e) => setPrompt(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          padding: 15,
          background: "#111",
          color: "white",
          border: "1px solid #333"
        }}
        placeholder={`CLIENT: OILI

REVENUE: 50000
OTHER_INCOME: 1800
EXPENSES: 18000
DEPRECIATION: 9000
INTEREST: 1500

TASK: Generate IFRS report`}
      />

      <button
        onClick={runBot}
        style={{
          marginTop: 15,
          padding: "10px 20px",
          background: "white",
          color: "black",
          cursor: "pointer"
        }}
      >
        Run
      </button>

      <pre style={{ marginTop: 30, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
