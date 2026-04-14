import Link from "next/link";

export default function Home() {
  return (
    <div style={{
      minHeight: "100vh",
      background: "radial-gradient(circle at top, #0a0f1c, black)",
      color: "white",
      fontFamily: "Arial, sans-serif",
    }}>

      {/* HERO */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "120px 20px 80px",
        textAlign: "center"
      }}>

        <h1 style={{
          fontSize: "64px",
          fontWeight: "bold",
          lineHeight: "1.1",
          marginBottom: "20px"
        }}>
          AI Systems for Finance & Audit
        </h1>

        <p style={{
          color: "#9ca3af",
          fontSize: "18px",
          maxWidth: "700px",
          margin: "0 auto 40px"
        }}>
          Build, test and deploy AI copilots for financial reporting, audit and compliance workflows.
        </p>

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
            Explore AI Systems
          </button>
        </Link>

      </div>

      {/* FEATURES */}
      <div style={{
        maxWidth: "1100px",
        margin: "0 auto",
        padding: "40px 20px 100px",
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
        gap: "20px"
      }}>

        {[
          {
            title: "IFRS AI Advisor",
            desc: "Interpret accounting standards and generate compliant outputs",
            link: "/tools/ifrs"
          },
          {
            title: "Audit AI Assistant",
            desc: "Identify risks, controls and audit procedures",
            link: "/tools/audit"
          },
          {
            title: "Excel AI Copilot",
            desc: "Turn business problems into Excel solutions",
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

      {/* FOOTER */}
      <div style={{
        textAlign: "center",
        padding: "40px",
        borderTop: "1px solid #1f2937",
        color: "#6b7280",
        fontSize: "14px"
      }}>
        AI applied to finance, audit and compliance workflows
      </div>

    </div>
  );
}
