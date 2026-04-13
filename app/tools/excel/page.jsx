"use client";

import { useState } from "react";

export default function ExcelAI() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  async function run() {
    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setResult(data.result || data.error);
    } catch (err) {
      setResult("Error connecting to API");
    }
  }

  return (
    <main style={{ padding: 40, background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>Excel AI Assistant</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        style={{ width: "100%", marginTop: 20 }}
        placeholder="Describe your Excel problem..."
      />

      <button onClick={run} style={{ marginTop: 20 }}>
        Run
      </button>

      <pre style={{ marginTop: 20, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </main>
  );
}
