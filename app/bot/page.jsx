"use client";
import { useState } from "react";

export default function BotPage() {
  const [input, setInput] = useState("");
  const [output, setOutput] = useState("");

  async function run() {
    const res = await fetch("/api/bot", {
      method: "POST",
      body: JSON.stringify({ input })
    });

    const data = await res.json();
    setOutput(data.result);
  }

  return (
    <main style={{ padding: "40px" }}>
      <h1>AI Bot</h1>

      <textarea
        rows={10}
        style={{ width: "100%" }}
        value={input}
        onChange={(e) => setInput(e.target.value)}
      />

      <button onClick={run}>Run</button>

      <pre>{output}</pre>
    </main>
  );
}
