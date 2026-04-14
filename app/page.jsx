import Link from "next/link";

export default function Home() {
  const tools = [
    {
      title: "Audit AI Assistant",
      desc: "Identify risks, controls and audit procedures for real business scenarios.",
      link: "/tools/audit",
    },
    {
      title: "IFRS AI Advisor",
      desc: "Interpret accounting standards and generate compliant outputs.",
      link: "/tools/ifrs",
    },
    {
      title: "Excel AI Copilot",
      desc: "Turn financial problems into structured Excel logic and analysis.",
      link: "/tools/excel",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        background:
          "radial-gradient(circle at 50% 0%, #0a0f1c 0%, #05070f 40%, black 100%)",
        color: "white",
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* HERO */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "120px 20px 80px" }}>
        <p style={{ color: "#6b7280", marginBottom: "20px", fontSize: "14px" }}>
          AI for Finance • Audit • Controls
        </p>

        <h1
          style={{
            fontSize: "72px",
            fontWeight: "700",
            lineHeight: "1.05",
            marginBottom: "20px",
          }}
        >
          AI that understands <br /> Finance, Audit & Decisions
        </h1>

        <p
          style={{
            fontSize: "20px",
            color: "#9ca3af",
            maxWidth: "700px",
            marginBottom: "40px",
          }}
        >
          Not another chatbot. A system designed to turn financial workflows into
          structured, actionable outputs.
        </p>

        <div style={{ display: "flex", gap: "16px" }}>
          <Link href="/tools">
            <button
              style={{
                padding: "16px 28px",
                borderRadius: "12px",
                background: "linear-gradient(to right, #3b82f6, #8b5cf6)",
                border: "none",
                color: "white",
                fontSize: "16px",
                cursor: "pointer",
              }}
            >
              Explore Systems
            </button>
          </Link>

          <div
            style={{
              padding: "16px 28px",
              borderRadius: "12px",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "#9ca3af",
            }}
          >
            Built for real workflows
          </div>
        </div>
      </section>

      {/* VALUE */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2
          style={{
            fontSize: "40px",
            fontWeight: "600",
            marginBottom: "20px",
          }}
        >
          Finance teams don’t need more tools.
        </h2>

        <p style={{ color: "#9ca3af", marginBottom: "20px" }}>
          They need better decisions.
        </p>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Accounting standards → into actions",
            "Audit processes → structured outputs",
            "Business scenarios → decisions",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                color: "#d1d5db",
                fontSize: "15px",
              }}
            >
              <div
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#6366f1",
                }}
              />
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* SYSTEMS */}
      <section style={{ maxWidth: "1100px", margin: "0 auto", padding: "100px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "40px" }}>AI Systems</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "20px",
          }}
        >
          {tools.map((tool, i) => (
            <Link key={i} href={tool.link}>
              <div
                style={{
                  padding: "26px",
                  borderRadius: "18px",
                  background: "linear-gradient(145deg, #0b0f1a, #0a0f1c)",
                  border: "1px solid rgba(255,255,255,0.08)",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.6)",
                  cursor: "pointer",
                  transition: "all 0.25s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-5px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <h3 style={{ fontSize: "18px", marginBottom: "10px" }}>
                  {tool.title}
                </h3>

                <p style={{ color: "#9ca3af", fontSize: "14px", lineHeight: "1.6" }}>
                  {tool.desc}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* DIFFERENT */}
      <section
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "100px 20px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
        }}
      >
        <h2 style={{ fontSize: "32px", marginBottom: "20px" }}>
          Why this is different
        </h2>

        <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
          {[
            "Not a generic AI chatbot",
            "Not built for prompts",
            "Built for finance workflows",
            "Structured outputs (not paragraphs)",
            "Designed for audit and compliance environments",
          ].map((item, i) => (
            <div
              key={i}
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                color: "#d1d5db",
              }}
            >
              <span style={{ color: "#8b5cf6" }}>✔</span>
              {item}
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section style={{ textAlign: "center", padding: "120px 20px" }}>
        <h2 style={{ fontSize: "36px", marginBottom: "20px" }}>
          See how AI can work in finance
        </h2>

        <Link href="/tools">
          <button
            style={{
              padding: "16px 28px",
              borderRadius: "12px",
              background: "#111827",
              border: "1px solid rgba(255,255,255,0.1)",
              color: "white",
              cursor: "pointer",
            }}
          >
            Explore Systems →
          </button>
        </Link>
      </section>

      {/* FOOTER */}
      <footer
        style={{
          textAlign: "center",
          padding: "40px",
          borderTop: "1px solid rgba(255,255,255,0.05)",
          color: "#6b7280",
          fontSize: "14px",
        }}
      >
        AI applied to finance, audit and decision-making
      </footer>
    </div>
  );
}
