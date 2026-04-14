import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center px-6">
      
      <div className="text-center max-w-3xl">
        
        <h1 className="text-6xl font-bold mb-6">
          AI for Finance, Risk & Compliance
        </h1>

        <p className="text-gray-400 mb-10 text-lg">
          Building intelligent systems to automate reporting, controls and decision-making in enterprise environments.
        </p>

        <Link href="/tools">
          <button className="px-8 py-4 rounded-xl bg-gradient-to-r from-purple-500 to-blue-500 hover:scale-105 transition">
            Explore AI Systems
          </button>
        </Link>

      </div>
    </div>
  );
}
