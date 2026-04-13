"use client";
import { useState } from "react";

export default function ExcelAI() {
  const [form, setForm] = useState({
    problem: "",
    columns: "",
    goal: ""
  });

  const [result, setResult] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function run() {
    setResult("Analyzing...");

    const prompt = `
You are an expert financial analyst and Excel specialist.

USER PROBLEM:
${form.problem}

AVAILABLE DATA (columns):
${form.columns}

GOAL:
${form.goal}

TASK:
Provide a structured answer including:

1. Explanation of the problem
2. Best Excel formula(s)
3. Step-by-step logic
4. Example with numbers
5. Alternative approach (if relevant)

Keep it practical and business-oriented.
`;

    const res = await fetch("/api/bot", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ input: prompt }),
    });

    const data = await res.json();
    setResult(data.result || data.error);
  }

  return (
    <main style={{
      background: "#0a0a0a",
      color: "#fff",
      minHeight: "100vh",
      padding: "60px",
      maxWidth: "900px",
      margin: "auto",
      fontFamily: "system-ui"
    }}>
      
      <h1>Excel AI Assistant</h1>

      <p style={{ color: "#aaa", marginTop: "10px" }}>
        Turn business problems into Excel solutions.
      </p>

      <div style={{ marginTop: "30px", display: "grid", gap: "10px" }}>
        
        <textarea
          name="problem"
          placeholder="Describe your problem (e.g. I need to calculate profit margin...)"
          onChange={handleChange}
          rows={3}
        />

        <textarea
          name="columns"
          placeholder="List your columns (e.g. Revenue, Costs, Profit...)"
          onChange={handleChange}
          rows={2}
        />

        <textarea
          name="goal"
          placeholder="What do you want to achieve?"
          onChange={handleChange}
          rows={2}
        />

      </div>

      <button onClick={run} style={{
        marginTop: "20px",
        background: "#4ea1ff",
        color: "#000",
        padding: "10px 20px",
        borderRadius: "6px",
        border: "none",
        fontWeight: "bold"
      }}>
        Generate Solution
      </button>

      <pre style={{
        marginTop: "30px",
        background: "#111",
        padding: "20px",
        borderRadius: "8px",
        whiteSpace: "pre-wrap"
      }}>
        {result}
      </pre>

    </main>
  );
}
