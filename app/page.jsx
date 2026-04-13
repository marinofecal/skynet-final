export default function Home() {
  return (
    <main style={{
      minHeight: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      textAlign: "center",
      padding: "40px"
    }}>

      <h1 style={{
        fontSize: "64px",
        fontWeight: "600",
        marginBottom: "20px"
      }}>
        Skynet Intelligence
      </h1>

      <p style={{
        color: "#aaa",
        maxWidth: "600px",
        marginBottom: "60px"
      }}>
        AI agents for finance, audit and compliance.
        Built for professionals who want leverage, not more work.
      </p>

      <div style={{
        display: "flex",
        gap: "40px"
      }}>

        <a href="/bots" style={card}>
          <h2>Bots</h2>
          <p>Execute AI workflows</p>
        </a>

        <a href="/resources" style={card}>
          <h2>Resources</h2>
          <p>Guides & automation</p>
        </a>

      </div>

    </main>
  );
}

const card = {
  background: "#111",
  padding: "40px",
  borderRadius: "12px",
  width: "260px",
  textDecoration: "none",
  color: "white",
  border: "1px solid #222",
  transition: "0.2s"
};
