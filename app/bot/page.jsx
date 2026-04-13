"use client";

import { useState } from "react";

export default function BotPage() {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const runBot = async () => {
    try {
      const res = await fetch("/api/bot", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ input }),
      });

      const data = await res.json();

      console.log("API RESPONSE:", data);

      setResult(
        data.result
          ? data.result
          : JSON.stringify(data, null, 2)
      );

    } catch (err) {
      setResult("FRONT ERROR: " + err.message);
    }
  };

  return (
    <div style={{ padding: "40px", background: "black", minHeight: "100vh", color: "white" }}>
      <h1>AI Bot</h1>

      <textarea
        value={input}
        onChange={(e) => setInput(e.target.value)}
        style={{
          width: "100%",
          height: "200px",
          background: "#111",
          color: "white",
          border: "1px solid #333",
          padding: "10px",
          marginBottom: "10px"
        }}
      />

      <button onClick={runBot} style={{ marginBottom: "20px" }}>
        Run
      </button>

      <h3>Result:</h3>
      <pre style={{ whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
