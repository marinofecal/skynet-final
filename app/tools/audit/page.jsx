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
          prompt: `You are an audit expert. Analyze:
1. Risks
2. Controls
3. Audit procedures

Scenario: ${input}`,
        }),
      });

      const data = await res.json();
      setOutput(data.result);
    } catch {
      setOutput("Error generating response.");
    }

    setLoading(false);
  };

  const buttonStyle = {
    padding: "10px 16px",
    borderRadius: "10px",
    border: "1px solid #333",
    background: "#111",
    color: "white",
    cursor: "pointer",
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(to bottom, black, #0a0f1c)",
      color: "white",
      padding: "60px 20px"
    }}>
      
      <div style={{ maxWidth: "800px", margin: "0 auto" }}>

        <h1 style={{ fontSize: "42px", marginBottom: "10px" }}>
          Audit AI Assistant
        </h1>

        <p style={{ color: "#aaa", marginBottom: "30px" }}>
          Identify risks, controls and audit procedures for real business scenarios.
        </p>

        {/* QUICK */}
        <div style={{ display: "flex", gap: "10px", marginBottom: "20px", flexWrap: "wrap" }}>
          <button style={buttonStyle} onClick={() => setInput("Revenue risks and controls")}>
            Revenue
          </button>
          <button style={buttonStyle} onClick={() => setInput("Procurement audit procedures")}>
            Procurement
          </button>
          <button style={buttonStyle} onClick={() => setInput("Cash fraud risks")}>
            Cash
          </button>
        </div>

        {/* INPUT */}
        <div style={{
          background: "#0b0f1a",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #222",
          marginBottom: "20px"
        }}>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            style={{
              width: "100%",
              height: "120px",
              background: "transparent",
              color: "white",
              border: "none",
              outline: "none"
            }}
          />

          <div style={{ textAlign: "right", marginTop: "10px" }}>
            <button
              onClick={handleGenerate}
              style={{
                padding: "12px 20px",
                borderRadius: "10px",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                border: "none",
                color: "white",
                cursor: "pointer"
              }}
            >
              {loading ? "Analyzing..." : "Generate Audit Analysis"}
            </button>
          </div>
        </div>

        {/* OUTPUT */}
        <div style={{
          background: "#0b0f1a",
          padding: "20px",
          borderRadius: "12px",
          border: "1px solid #222"
        }}>
          <p style={{ color: "#aaa", marginBottom: "10px" }}>
            Audit Output
          </p>

          <div style={{ whiteSpace: "pre-line" }}>
            {output || "Your audit analysis will appear here."}
          </div>
        </div>

      </div>
    </div>
  );
}
