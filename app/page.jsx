'use client';

import Link from "next/link";

export default function Home() {
    const bots = [
        {
            id: "audit",
            name: "AUDIT AI",
            tagline: "Sentinel Protocol",
            description: "Autonomous risk assessment and audit procedure generation.",
            icon: "🔍",
            gradient: "from-cyan-500 to-blue-600",
            capabilities: ["Risk Analysis", "Control Mapping", "Audit Planning"],
            link: "/tools/audit"
        },
        {
            id: "ifrs",
            name: "IFRS AI",
            tagline: "Compliance Engine",
            description: "Accounting standards interpreter with smart documentation.",
            icon: "📊",
            gradient: "from-purple-500 to-pink-600",
            capabilities: ["Standards Mapping", "Compliance Check", "Smart Reports"],
            link: "/tools/ifrs"
        },
        {
            id: "excel",
            name: "EXCEL AI",
            tagline: "Data Forge",
            description: "Convert financial logic into production-ready formulas.",
            icon: "⚡",
            gradient: "from-emerald-500 to-teal-600",
            capabilities: ["Formula Generation", "Data Analysis", "Optimization"],
            link: "/tools/excel"
        }
    ];

    return (
        <div>
            {/* Hero Section - Impactante */}
            <section className="relative min-h-[85vh] flex items-center px-6 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Left side */}
                        <div>
                            {/* Badge */}
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                                <span className="text-cyan-400 text-xs font-mono tracking-wider">SYSTEM ACTIVE</span>
                            </div>

                            {/* Title con efecto glitch */}
                            <div className="relative">
                                <h1 className="text-7xl sm:text-8xl font-black tracking-tighter mb-4">
                                    <span className="bg-gradient-to-r from-cyan-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                        SKYNET
                                    </span>
                                </h1>
                                <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-2xl -z-10"></div>
                            </div>
                            
                            <p className="text-2xl text-gray-300 mb-6 font-light">
                                AI Intelligence Framework
                            </p>
                            
                            <p className="text-gray-400 mb-8 leading-relaxed max-w-lg">
                                Next-generation automation for audit, compliance, and financial analysis. 
                                Built to demonstrate advanced AI integration capabilities.
                            </p>

                            {/* Stats */}
                            <div className="flex gap-8 mb-10">
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400">3</div>
                                    <div className="text-xs text-gray-500 font-mono">AI MODULES</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400">&lt;1s</div>
                                    <div className="text-xs text-gray-500 font-mono">RESPONSE</div>
                                </div>
                                <div>
                                    <div className="text-3xl font-bold text-cyan-400">24/7</div>
                                    <div className="text-xs text-gray-500 font-mono">AVAILABLE</div>
                                </div>
                            </div>

                            {/* CTA */}
                            <div className="flex gap-4">
                                <a 
                                    href="#bots" 
                                    className="group relative px-8 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-semibold text-white hover:shadow-[0_0_25px_rgba(0,212,255,0.4)] transition-all"
                                >
                                    <span className="relative z-10">EXPLORE BOTS →</span>
                                </a>
                                <a 
                                    href="https://linkedin.com/in/crtizgar"
                                    target="_blank"
                                    className="px-8 py-3 border border-cyan-500/40 rounded-lg text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all font-mono text-sm"
                                >
                                    ◉ LINKEDIN
                                </a>
                            </div>
                        </div>

                        {/* Right side - Glowing orb futurista */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative w-80 h-80">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-3xl opacity-40 animate-pulse"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="w-32 h-32 bg-gradient-to-br from-cyan-400 to-purple-500 rounded-full animate-float flex items-center justify-center">
                                        <span className="text-6xl">🧠</span>
                                    </div>
                                </div>
                                <div className="absolute -top-10 -right-10 w-20 h-20 border border-cyan-500/30 rounded-full animate-ping"></div>
                                <div className="absolute -bottom-10 -left-10 w-20 h-20 border border-purple-500/30 rounded-full animate-ping delay-700"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bots Grid Section */}
            <section id="bots" className="py-24 px-6">
                <div className="max-w-7xl mx-auto">
                    {/* Section header */}
                    <div className="text-center mb-16">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
                            <span className="text-cyan-400 text-xs font-mono tracking-wider">⟫ AVAILABLE MODULES ⟪</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Intelligent Bots
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto">
                            Production-ready AI agents for real-world financial operations
                        </p>
                    </div>

                    {/* Grid */}
                    <div className="grid md:grid-cols-3 gap-6">
                        {bots.map((bot, idx) => (
                            <Link key={bot.id} href={bot.link}>
                                <div className="bot-card rounded-2xl p-6 cursor-pointer group h-full relative overflow-hidden">
                                    {/* Glow on hover */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${bot.gradient} opacity-0 group-hover:opacity-10 transition duration-500`}></div>
                                    
                                    {/* Icon */}
                                    <div className="text-6xl mb-5 group-hover:scale-110 transition-transform duration-300">
                                        {bot.icon}
                                    </div>
                                    
                                    {/* Title */}
                                    <h3 className="text-2xl font-bold text-white mb-1">{bot.name}</h3>
                                    <p className="text-cyan-400 text-xs font-mono mb-3 tracking-wider">{bot.tagline}</p>
                                    <p className="text-gray-400 text-sm mb-5 leading-relaxed">{bot.description}</p>
                                    
                                    {/* Capabilities */}
                                    <div className="flex flex-wrap gap-2 mb-5">
                                        {bot.capabilities.map((cap, i) => (
                                            <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-300 font-mono">
                                                {cap}
                                            </span>
                                        ))}
                                    </div>
                                    
                                    {/* CTA */}
                                    <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono group-hover:gap-3 transition-all">
                                        <span>LAUNCH BOT</span>
                                        <span className="text-lg">→</span>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack */}
            <section className="py-20 px-6">
                <div className="max-w-4xl mx-auto text-center">
                    <div className="p-8 rounded-2xl glass-cyber border border-cyan-500/20">
                        <h3 className="text-xl font-bold mb-4 text-cyan-400 font-mono">⚡ BUILT WITH</h3>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Next.js', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'TypeScript'].map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-lg bg-gray-800/50 text-gray-300 text-sm font-mono">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-500 text-xs mt-6">
                            Active development · Continuous improvement · AI-driven
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
