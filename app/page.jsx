'use client';

import Link from "next/link";

export default function Home() {
    const bots = [
        {
            id: "audit",
            name: "AUDIT AI",
            tagline: "Sentinel Protocol",
            description: "Autonomous risk assessment and audit procedure generation with real-time analysis.",
            icon: "🔍",
            gradient: "from-cyan-500 to-blue-600",
            capabilities: ["Risk Analysis", "Control Mapping", "Audit Planning"],
            link: "/tools/audit",
            stats: "99.9% accuracy"
        },
        {
            id: "ifrs",
            name: "IFRS AI",
            tagline: "Compliance Engine",
            description: "Accounting standards interpreter with intelligent documentation and compliance checking.",
            icon: "📊",
            gradient: "from-purple-500 to-pink-600",
            capabilities: ["Standards Mapping", "Compliance Check", "Smart Reports"],
            link: "/tools/ifrs",
            stats: "IFRS 1-17 ready"
        },
        {
            id: "excel",
            name: "EXCEL AI",
            tagline: "Data Forge",
            description: "Convert complex financial logic into production-ready Excel formulas instantly.",
            icon: "⚡",
            gradient: "from-emerald-500 to-teal-600",
            capabilities: ["Formula Generation", "Data Analysis", "Optimization"],
            link: "/tools/excel",
            stats: "<1ms response"
        }
    ];

    return (
        <div>
            {/* Hero - Impactante y espacioso */}
            <section className="relative min-h-[90vh] flex items-center px-8 overflow-hidden">
                <div className="max-w-7xl mx-auto w-full">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left */}
                        <div className="animate-slide-up">
                            <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-8">
                                <span className="relative flex h-2 w-2">
                                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                    <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                                </span>
                                <span className="text-cyan-400 text-xs font-mono tracking-wider">SYSTEM ACTIVE</span>
                            </div>

                            <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black tracking-tighter leading-[1.1] mb-6">
                                <span className="bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                                    SKYNET
                                </span>
                            </h1>
                            
                            <p className="text-2xl text-gray-300 mb-6 font-light tracking-wide">
                                AI Intelligence Framework
                            </p>
                            
                            <p className="text-gray-400 mb-10 leading-relaxed text-lg max-w-lg">
                                Next-generation automation for audit, compliance, and financial analysis.
                                Built to demonstrate advanced AI integration capabilities.
                            </p>

                            {/* Stats cards */}
                            <div className="flex gap-6 mb-12">
                                <div className="glass-premium rounded-xl p-4 text-center min-w-[100px]">
                                    <div className="text-3xl font-black text-cyan-400">3</div>
                                    <div className="text-[10px] text-gray-500 font-mono mt-1">AI MODULES</div>
                                </div>
                                <div className="glass-premium rounded-xl p-4 text-center min-w-[100px]">
                                    <div className="text-3xl font-black text-cyan-400">&lt;1s</div>
                                    <div className="text-[10px] text-gray-500 font-mono mt-1">RESPONSE</div>
                                </div>
                                <div className="glass-premium rounded-xl p-4 text-center min-w-[100px]">
                                    <div className="text-3xl font-black text-cyan-400">24/7</div>
                                    <div className="text-[10px] text-gray-500 font-mono mt-1">AVAILABLE</div>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <a 
                                    href="#bots" 
                                    className="group px-8 py-4 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-xl font-bold text-white hover:shadow-[0_0_30px_rgba(0,212,255,0.4)] transition-all duration-300 inline-flex items-center gap-2"
                                >
                                    EXPLORE BOTS 
                                    <span className="group-hover:translate-x-1 transition">→</span>
                                </a>
                            </div>
                        </div>

                        {/* Right - Orbital visual */}
                        <div className="hidden lg:flex justify-center items-center relative">
                            <div className="relative w-96 h-96">
                                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-full blur-[80px] opacity-30 animate-glow-pulse"></div>
                                <div className="absolute inset-10 bg-gradient-to-br from-cyan-400/20 to-purple-500/20 rounded-full animate-float-slow"></div>
                                <div className="absolute inset-20 flex items-center justify-center">
                                    <div className="text-center">
                                        <div className="text-7xl mb-2">🧠</div>
                                        <div className="text-cyan-400 text-xs font-mono">NEURAL CORE</div>
                                    </div>
                                </div>
                                {/* Orbital rings */}
                                <div className="absolute -inset-4 border border-cyan-500/30 rounded-full animate-spin-slow" style={{ animationDuration: '20s' }}></div>
                                <div className="absolute -inset-8 border border-purple-500/20 rounded-full animate-spin-slow" style={{ animationDuration: '25s', animationDirection: 'reverse' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Bots Section - Tarjetas que respiran */}
            <section id="bots" className="py-28 px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-5">
                            <span className="text-cyan-400 text-xs font-mono tracking-wider">⟫ AVAILABLE MODULES ⟪</span>
                        </div>
                        <h2 className="text-5xl sm:text-6xl font-bold mb-5 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
                            Intelligent Bots
                        </h2>
                        <p className="text-gray-400 max-w-2xl mx-auto text-lg">
                            Production-ready AI agents for real-world financial operations
                        </p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        {bots.map((bot) => (
                            <Link key={bot.id} href={bot.link}>
                                <div className="group relative">
                                    {/* Background glow on hover */}
                                    <div className={`absolute -inset-0.5 bg-gradient-to-r ${bot.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur-xl transition duration-500`}></div>
                                    
                                    {/* Card */}
                                    <div className="relative glass-premium rounded-2xl p-8 cursor-pointer transition-all duration-500 group-hover:-translate-y-2 group-hover:border-cyan-500/50 h-full">
                                        {/* Icon */}
                                        <div className="text-7xl mb-6 group-hover:scale-110 transition-transform duration-300">
                                            {bot.icon}
                                        </div>
                                        
                                        {/* Title */}
                                        <h3 className="text-2xl font-bold text-white mb-1 tracking-tight">{bot.name}</h3>
                                        <p className="text-cyan-400 text-xs font-mono mb-4 tracking-wider">{bot.tagline}</p>
                                        
                                        {/* Description */}
                                        <p className="text-gray-400 text-sm mb-6 leading-relaxed">{bot.description}</p>
                                        
                                        {/* Stats badge */}
                                        <div className="inline-block px-2 py-1 rounded bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 text-[9px] font-mono mb-4">
                                            {bot.stats}
                                        </div>
                                        
                                        {/* Capabilities */}
                                        <div className="flex flex-wrap gap-2 mb-6">
                                            {bot.capabilities.map((cap, i) => (
                                                <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-gray-800/80 text-gray-300 font-mono">
                                                    {cap}
                                                </span>
                                            ))}
                                        </div>
                                        
                                        {/* CTA */}
                                        <div className="flex items-center gap-2 text-cyan-400 text-sm font-mono group-hover:gap-3 transition-all duration-300 pt-4 border-t border-white/10">
                                            <span>LAUNCH BOT</span>
                                            <span className="text-lg group-hover:translate-x-1 transition">→</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tech Stack - Elegante */}
            <section className="py-20 px-8">
                <div className="max-w-4xl mx-auto">
                    <div className="glass-premium rounded-2xl p-10 text-center border border-cyan-500/20">
                        <div className="inline-flex items-center gap-2 mb-6">
                            <span className="text-cyan-400 text-2xl">⚡</span>
                            <span className="text-gray-400 font-mono text-sm">BUILT WITH MODERN TECH</span>
                        </div>
                        <div className="flex flex-wrap justify-center gap-3">
                            {['Next.js 14', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'TypeScript'].map((tech) => (
                                <span key={tech} className="px-4 py-2 rounded-lg bg-gray-800/40 text-gray-300 text-sm font-mono border border-white/5">
                                    {tech}
                                </span>
                            ))}
                        </div>
                        <p className="text-gray-600 text-xs mt-8">
                            Active development · Production ready · AI-driven architecture
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
}
