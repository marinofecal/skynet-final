'use client';

import Link from "next/link";

export default function Home() {
    const bots = [
        {
            id: "audit",
            name: "AUDIT AI",
            codename: "SENTINEL",
            description: "Autonomous risk assessment and audit procedure generator.",
            capabilities: ["Risk Analysis", "Control Mapping", "Audit Planning"],
            icon: "🔍",
            color: "from-cyan-500 to-blue-600",
            link: "/tools/audit"
        },
        {
            id: "ifrs",
            name: "IFRS AI",
            codename: "COMPLIANCE",
            description: "Accounting standards interpreter with automatic documentation.",
            capabilities: ["Standards Mapping", "Compliance Check", "Smart Reports"],
            icon: "📊",
            color: "from-purple-500 to-pink-600",
            link: "/tools/ifrs"
        },
        {
            id: "excel",
            name: "EXCEL AI",
            codename: "FORGE",
            description: "Convert financial logic into production-ready Excel formulas.",
            capabilities: ["Formula Gen", "Data Analysis", "Optimization"],
            icon: "⚡",
            color: "from-emerald-500 to-teal-600",
            link: "/tools/excel"
        }
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-[90vh] flex items-center px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="max-w-3xl">
                        {/* Badge */}
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-6">
                            <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                            <span className="text-cyan-400 text-xs font-mono">SYSTEM STATUS: OPERATIONAL</span>
                        </div>

                        {/* Title */}
                        <h1 className="text-6xl sm:text-7xl lg:text-8xl font-black tracking-tight mb-6">
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                SKYNET
                            </span>
                            <br />
                            <span className="text-white">AI Automation</span>
                        </h1>

                        {/* Description */}
                        <p className="text-xl text-gray-400 mb-8 max-w-2xl leading-relaxed">
                            Intelligent automation framework for audit, compliance, and financial analysis.
                            Built to demonstrate advanced AI integration capabilities.
                        </p>

                        {/* Stats */}
                        <div className="flex gap-8 mb-12">
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">3</div>
                                <div className="text-xs text-gray-500">AI MODULES</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">&lt;1s</div>
                                <div className="text-xs text-gray-500">RESPONSE</div>
                            </div>
                            <div>
                                <div className="text-2xl font-bold text-cyan-400">24/7</div>
                                <div className="text-xs text-gray-500">AVAILABLE</div>
                            </div>
                        </div>

                        {/* CTA */}
                        <div className="flex gap-4">
                            <a href="#bots" className="px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold hover:shadow-[0_0_25px_rgba(0,212,255,0.3)] transition">
                                EXPLORE BOTS →
                            </a>
                            <a 
                                href="https://linkedin.com/in/marinofecal"
                                target="_blank"
                                className="px-8 py-3 border border-gray-700 rounded-lg hover:border-cyan-500 transition"
                            >
                                LinkedIn Profile
                            </a>
                        </div>
                    </div>
                </div>

                {/* Glow effect */}
                <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[100px] opacity-20 -z-10"></div>
            </section>

            {/* Bots Grid Section */}
            <section id="bots" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/20 mb-4">
                            <span className="text-cyan-400 text-xs font-mono">▲ AVAILABLE MODULES ▲</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4">
                            Intelligent Bots
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Production-ready AI agents designed for real-world financial operations.
                            Each bot specializes in a critical domain.
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {bots.map((bot) => (
                            <Link key={bot.id} href={bot.link}>
                                <div className="glass-card rounded-2xl p-6 cursor-pointer group h-full">
                                    {/* Icon */}
                                    <div className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                                        {bot.icon}
                                    </div>

                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-1">{bot.name}</h3>
                                    <p className="text-cyan-400 text-sm font-mono mb-3">{bot.codename}</p>
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">{bot.description}</p>

                                    {/* Capabilities */}
                                    <div className="flex flex-wrap gap-2 mb-4">
                                        {bot.capabilities.map((cap, idx) => (
                                            <span key={idx} className="text-xs px-2 py-1 rounded-full bg-gray-800 text-gray-300">
                                                {cap}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Link */}
                                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono group-hover:gap-3 transition-all">
                                        <span>LAUNCH BOT</span>
                                        <span>→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack Section */}
            <section className="py-24 px-6 border-t border-cyan-500/10">
                <div className="max-w-7xl mx-auto text-center">
                    <h3 className="text-2xl font-bold mb-8">Built With Modern AI Stack</h3>
                    <div className="flex flex-wrap justify-center gap-4">
                        {['Next.js', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'TypeScript'].map((tech) => (
                            <span key={tech} className="px-4 py-2 rounded-full glass-dark text-sm">
                                {tech}
                            </span>
                        ))}
                    </div>
                    <div className="mt-12 p-6 rounded-2xl glass-dark max-w-2xl mx-auto">
                        <p className="text-gray-400 text-sm">
                            ⚡ Each bot demonstrates practical AI integration — from prompt engineering to production deployment.
                            <br />
                            <span className="text-cyan-400">Active development · Continuous improvement</span>
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
