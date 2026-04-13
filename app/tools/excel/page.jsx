"use client";

import { useState } from "react";

export default function ExcelPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  async function run() {
    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();
      setResult(data.result || data.error);
    } catch (err) {
      setResult("Error connecting to API");
    }
  }

  return (
    <main style={{
      background: "#0a0a0a",
      color: "#fff",
      minHeight: "100vh",
      padding: "60px"
    }}>
      <h1>Excel AI Assistant</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        rows={10}
        style={{
          width: "100%",
          marginTop: 20,
          background: "#111",
          color: "#fff",
          padding: "10px"
        }}
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
