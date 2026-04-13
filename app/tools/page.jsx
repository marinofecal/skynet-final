export default function ToolsPage() {
  return (
    <div style={{
      background: "#0a0a0a",
      color: "white",
      minHeight: "100vh",
      padding: "60px",
      fontFamily: "Arial"
    }}>
      
      <h1 style={{ fontSize: "36px", marginBottom: "10px" }}>
        AI Systems for Finance
      </h1>

      <p style={{ opacity: 0.6, marginBottom: "40px" }}>
        Internal tools for analysis, reporting and decision-making
      </p>

      <div style={{ display: "flex", gap: "20px" }}>

        <a href="/tools/excel" style={card}>
          <h3>Excel AI</h3>
          <p>Explain formulas & data structures</p>
        </a>

        <a href="/bot" style={card}>
          <h3>IFRS / Audit</h3>
          <p>Generate financial reports</p>
        </a>

      </div>
    </div>
  );
}

const card = {
  padding: "20px",
  border: "1px solid #222",
  borderRadius: "10px",
  width: "220px",
  textDecoration: "none",
  color: "white",
  transition: "0.2s"
};
