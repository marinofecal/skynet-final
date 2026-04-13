"use client";
import { useState } from "react";

export default function IFRS() {
  const [form, setForm] = useState({
    client: "",
    revenue: "",
    otherIncome: "",
    expenses: "",
    depreciation: "",
    interest: ""
  });

  const [result, setResult] = useState("");

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  async function run() {
    const prompt = `
CLIENT: ${form.client}

REVENUE: ${form.revenue}
OTHER_INCOME: ${form.otherIncome}
EXPENSES: ${form.expenses}
DEPRECIATION: ${form.depreciation}
INTEREST: ${form.interest}

TASK:
Generate an IFRS financial report including:
- Executive Summary
- Income Statement
- Key Ratios
- Risk Analysis
- Recommendations
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
      margin: "auto"
    }}>
      <h1>IFRS Financial Report Generator</h1>

      <div style={{ marginTop: "30px" }}>
        <input name="client" placeholder="Client name" onChange={handleChange} />
        <input name="revenue" placeholder="Revenue" onChange={handleChange} />
        <input name="otherIncome" placeholder="Other income" onChange={handleChange} />
        <input name="expenses" placeholder="Expenses" onChange={handleChange} />
        <input name="depreciation" placeholder="Depreciation" onChange={handleChange} />
        <input name="interest" placeholder="Interest" onChange={handleChange} />
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
        Generate Report
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
