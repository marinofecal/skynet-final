export default function ToolsPage() {
  const tools = [
    { name: "IFRS Generator", path: "/tools/ifrs" },
    { name: "Audit Analyzer", path: "/tools/audit" },
    { name: "Excel AI", path: "/tools/excel" },
  ];

  return (
    <main style={{ padding: "40px", background: "#000", color: "#fff", minHeight: "100vh" }}>
      <h1>AI Tools</h1>

      {tools.map((tool) => (
        <div key={tool.path} style={{ marginTop: "20px" }}>
          <a href={tool.path} style={{ color: "#4ea1ff", fontSize: "20px" }}>
            {tool.name}
          </a>
        </div>
      ))}
    </main>
  );
}
