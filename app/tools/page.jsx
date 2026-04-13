export default function ToolsPage() {
  return (
    <div style={{ padding: 40, background: "black", color: "white", minHeight: "100vh" }}>
      <h1>AI Tools</h1>

      <p>Select a tool:</p>

      <ul>
        <li><a href="/tools/excel">Excel AI</a></li>
        <li><a href="/bot">IFRS / Audit Bot</a></li>
      </ul>
    </div>
  );
}
