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
        padding: "120px 20px 80px"
      }}>

        <p style={{ color: "#6b7280", marginBottom: "20px" }}>
          AI for Finance • Audit • Controls
        </p>

        <h1 style={{
          fontSize: "72px",
          fontWeight: "bold",
          lineHeight: "1.05",
          marginBottom: "20px"
        }}>
          AI that understands  
          <br />
          Finance, Audit & Decisions
        </h1>

        <p style={{
          fontSize: "20px",
          color: "#9ca3af",
          maxWidth: "700px",
          marginBottom: "40px"
        }}>
          Not another chatbot.  
          A system designed to turn financial workflows into structured, actionable outputs.
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
              Explore Systems
            </button>
          </Link>

          <div style={{
            padding: "16px 28px",
            borderRadius: "12px",
            border: "1px solid #333",
            color: "#9ca3af"
          }}>
            Built for real workflows
          </div>
        </div>

      </div>

      {/* PROBLEM / VALUE */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px",
        borderTop: "1px solid #111"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "30px" }}>
          Finance teams don’t need more tools.
        </h2>

        <div style={{
          display: "grid",
          gap: "20px"
        }}>
          <p style={{ color: "#9ca3af" }}>
            They need better decisions.
          </p>

          <p style={{ color: "#9ca3af" }}>
            We transform:
          </p>

          <ul style={{ color: "#d1d5db" }}>
            <li>• Accounting standards → into actions</li>
            <li>• Audit processes → into structured outputs</li>
            <li>• Business scenarios → into decisions</li>
          </ul>
        </div>
      </div>

      {/* SYSTEMS */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "80px 20px"
      }}>

        <h2 style={{
          fontSize: "36px",
          marginBottom: "40px"
        }}>
          AI Systems
        </h2>

        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
          gap: "20px"
        }}>

          {[
            {
              title: "Audit AI Assistant",
              desc: "Identify risks, controls and audit procedures for real business scenarios.",
              link: "/tools/audit"
            },
            {
              title: "IFRS AI Advisor",
              desc: "Interpret accounting standards and generate compliant outputs.",
              link: "/tools/ifrs"
            },
            {
              title: "Excel AI Copilot",
              desc: "Turn financial problems into structured Excel logic and analysis.",
              link: "/tools/excel"
            }
          ].map((tool, i) => (
            <Link key={i} href={tool.link}>
              <div style={{
                padding: "24px",
                borderRadius: "16px",
                background: "#0b0f1a",
                border: "1px solid #1f2937",
                cursor: "pointer",
                transition: "0.3s"
              }}>
                <h3 style={{ marginBottom: "10px" }}>
                  {tool.title}
                </h3>
                <p style={{ color: "#9ca3af", fontSize: "14px" }}>
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}

        </div>

      </div>

      {/* DIFFERENTIATION */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "60px 20px",
        borderTop: "1px solid #111"
      }}>
        <h2 style={{ fontSize: "28px", marginBottom: "20px" }}>
          Why this is different
        </h2>

        <ul style={{ color: "#d1d5db", lineHeight: "1.8" }}>
          <li>❌ Not a generic AI chatbot</li>
          <li>❌ Not built for prompts</li>
          <li>✔ Built for finance workflows</li>
          <li>✔ Structured outputs (not paragraphs)</li>
          <li>✔ Designed for audit and compliance environments</li>
        </ul>
      </div>

      {/* FINAL CTA */}
      <div style={{
        textAlign: "center",
        padding: "100px 20px"
      }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          See how AI can work in finance
        </h2>

        <Link href="/tools">
          <button style={{
            padding: "16px 28px",
            borderRadius: "12px",
            background: "#111827",
            border: "1px solid #333",
            color: "white",
            cursor: "pointer"
          }}>
            Explore Systems →
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
        AI applied to finance, audit and decision-making
      </div>

    </div>
  );
}
