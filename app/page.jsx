export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "#fff",
      minHeight: "100vh",
      padding: "80px 40px",
      fontFamily: "system-ui"
    }}>
      
      <h1 style={{ fontSize: "56px", marginBottom: "20px" }}>
        Skynet Intelligence
      </h1>

      <p style={{ fontSize: "20px", color: "#aaa", maxWidth: "600px" }}>
        AI tools for finance, audit and compliance professionals.
        Turn raw data into structured decisions.
      </p>

      <div style={{ marginTop: "40px" }}>
        <a href="/tools" style={{
          background: "#4ea1ff",
          color: "#000",
          padding: "12px 24px",
          borderRadius: "8px",
          textDecoration: "none",
          fontWeight: "bold"
        }}>
          Explore Tools →
        </a>
      </div>

      <div style={{ marginTop: "80px" }}>
        <h2 style={{ marginBottom: "20px" }}>Core Tools</h2>

        <ul style={{ lineHeight: "2" }}>
          <li>IFRS Financial Report Generator</li>
          <li>Audit Risk Analyzer</li>
          <li>Excel AI Assistant</li>
        </ul>
      </div>

    </main>
  );
}
