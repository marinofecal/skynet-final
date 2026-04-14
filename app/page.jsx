import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at 50% 0%, #0a0f1c, black)",
      color: "white",
      fontFamily: "Arial, sans-serif"
    }}>

      {/* HERO */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "120px 20px 60px"
      }}>

        <div style={{
          fontSize: "14px",
          color: "#6b7280",
          marginBottom: "20px"
        }}>
          AI for Finance • Audit • Controls
        </div>

        <h1 style={{
          fontSize: "72px",
          fontWeight: "bold",
          lineHeight: "1.05",
          marginBottom: "20px"
        }}>
          From Financial Data  
          <br />
          to Intelligent Decisions
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#9ca3af",
          maxWidth: "700px",
          marginBottom: "40px"
        }}>
          Build AI copilots that understand accounting, audit and business processes — not just text.
        </p>

        <div style={{ display: "flex", gap: "20px" }}>
          
          <Link href="/tools">
            <button style={{
              padding: "16px 28px",
              borderRadius: "12px",
              background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
              border: "none",
              color: "white",
              fontSize: "16px",
              cursor: "pointer"
            }}>
              View Systems
            </button>
          </Link>

          <button style={{
            padding: "16px 28px",
            borderRadius: "12px",
            border: "1px solid #333",
            background: "transparent",
            color: "white",
            fontSize: "16px"
          }}>
            How it works
          </button>

        </div>
      </div>

      {/* VALUE SECTION */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px",
        borderTop: "1px solid #111"
      }}>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
          gap: "40px"
        }}>

          <div>
            <h3>Audit Intelligence</h3>
            <p style={{ color: "#9ca3af" }}>
              Identify risks, controls and audit procedures instantly.
            </p>
          </div>

          <div>
            <h3>IFRS Understanding</h3>
            <p style={{ color: "#9ca3af" }}>
              Translate complex standards into real business decisions.
            </p>
          </div>

          <div>
            <h3>Process Automation</h3>
            <p style={{ color: "#9ca3af" }}>
              Turn financial workflows into AI-assisted systems.
            </p>
          </div>

        </div>

      </div>

      {/* SINGLE FOCUS CTA */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px",
        textAlign: "center"
      }}>

        <h2 style={{
          fontSize: "36px",
          marginBottom: "20px"
        }}>
          Explore the AI Systems
        </h2>

        <p style={{
          color: "#9ca3af",
          marginBottom: "30px"
        }}>
          Real tools built for finance, audit and compliance workflows.
        </p>

        <Link href="/tools">
          <button style={{
            padding: "14px 24px",
            borderRadius: "10px",
            background: "#111827",
            border: "1px solid #333",
            color: "white",
            cursor: "pointer"
          }}>
            Go to Tools →
          </button>
        </Link>

      </div>

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid #111",
        color: "#6b7280",
        fontSize: "14px"
      }}>
        Built for real finance, audit and control environments
      </div>

    </div>
  );
}
