"use client";

import { useState } from "react";

export default function BotPage() {
  const [form, setForm] = useState({
    client: "",
    revenue: "",
    otherIncome: "",
    expenses: "",
    depreciation: "",
    interest: ""
  });

  const [result, setResult] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const runBot = async () => {
    setResult("Generating report...");

    const prompt = `
CLIENT: ${form.client}
REVENUE: ${form.revenue}
OTHER_INCOME: ${form.otherIncome}
EXPENSES: ${form.expenses}
DEPRECIATION: ${form.depreciation}
INTEREST: ${form.interest}

TASK: Generate IFRS financial report
`;

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
    <div style={{ padding: 40, background: "black", color: "white", minHeight: "100vh" }}>
      <h1>AI Financial Report Generator</h1>

      <div style={{ display: "grid", gap: 10, maxWidth: 400 }}>
        <input name="client" placeholder="Client" onChange={handleChange} />
        <input name="revenue" placeholder="Revenue" onChange={handleChange} />
        <input name="otherIncome" placeholder="Other Income" onChange={handleChange} />
        <input name="expenses" placeholder="Expenses" onChange={handleChange} />
        <input name="depreciation" placeholder="Depreciation" onChange={handleChange} />
        <input name="interest" placeholder="Interest" onChange={handleChange} />
      </div>

      <button
        onClick={runBot}
        style={{ marginTop: 20, padding: 10 }}
      >
        Generate Report
      </button>

      <pre style={{ marginTop: 30, whiteSpace: "pre-wrap" }}>
        {result}
      </pre>
    </div>
  );
}
