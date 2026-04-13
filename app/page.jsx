export default function Home() {
  return (
    <main style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "80px 40px",
      fontFamily: "system-ui"
    }}>
      
      <div style={{ maxWidth: 900 }}>
        <h1 style={{
          fontSize: 48,
          fontWeight: 600,
          marginBottom: 20
        }}>
          AI for Finance, Audit & Compliance
        </h1>

        <p style={{
          fontSize: 18,
          color: "#aaa",
          marginBottom: 40
        }}>
          Practical AI tools designed to automate real workflows:
          reporting, audit analysis and financial insights.
        </p>

        <div style={{ display: "flex", gap: 20 }}>
          <a href="/tools">
            <button style={{
              padding: "12px 24px",
              background: "white",
              color: "black",
              border: "none",
              cursor: "pointer"
            }}>
              Explore Tools
            </button>
          </a>
        </div>
      </div>

    </main>
  );
}
