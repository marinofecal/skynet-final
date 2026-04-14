import Link from "next/link";

export default function ToolsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-black to-[#0a0f1c] text-white px-10 py-16">
      
      {/* HEADER */}
      <div className="max-w-6xl mx-auto mb-16">
        <h1 className="text-5xl font-bold mb-4 tracking-tight">
          AI Systems for Finance & Compliance
        </h1>
        <p className="text-gray-400 text-lg max-w-2xl">
          Enterprise-grade AI copilots for reporting, audit, IFRS interpretation and financial workflows.
        </p>
      </div>

      {/* GRID */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
        
        <ToolCard 
          title="Excel AI Copilot"
          description="Automate financial models, analysis and reporting workflows"
          link="/tools/excel"
        />

        <ToolCard 
          title="IFRS AI Advisor"
          description="Interpret accounting standards and generate compliant outputs"
          link="/tools/ifrs"
        />

        <ToolCard 
          title="Audit AI Assistant"
          description="Support internal controls, audit testing and documentation"
          link="/tools/audit"
        />

      </div>
    </div>
  );
}

function ToolCard({ title, description, link }) {
  return (
    <Link href={link}>
      <div className="group cursor-pointer rounded-2xl p-[1px] bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 hover:scale-105 transition">
        
        <div className="bg-[#0b0f1a] rounded-2xl p-6 h-full">
          <h2 className="text-xl font-semibold mb-3 group-hover:text-cyan-400">
            {title}
          </h2>
          <p className="text-gray-400 text-sm">
            {description}
          </p>
        </div>

      </div>
    </Link>
  );
}
