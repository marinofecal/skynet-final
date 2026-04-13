export default function ToolsPage() {
  return (
    <div style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: 40
    }}>
      <h1 style={{ fontSize: 32, marginBottom: 30 }}>
        Tools
      </h1>

      <div style={{ display: "grid", gap: 20 }}>
        <a href="/tools/ifrs">IFRS Report Generator</a>
        <a href="/tools/audit">Audit Evidence Intelligence</a>
        <a href="/tools/excel">Excel → Financial Report</a>
        <a href="/tools/variance">Variance Analysis AI</a>
      </div>
    </div>
  );
}
