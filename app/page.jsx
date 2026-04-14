'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [hoveredTool, setHoveredTool] = useState(null);

    const tools = [
        {
            id: "audit",
            title: "AUDIT AI",
            subtitle: "SENTINEL PROTOCOL",
            desc: "Neural risk assessment & autonomous audit execution",
            icon: "🔍",
            link: "/tools/audit",
            gradient: "from-cyan-500 to-blue-600",
            features: ["REAL-TIME SCAN", "RISK MATRIX", "AUTO-REPORT"]
        },
        {
            id: "ifrs",
            title: "IFRS CORE",
            subtitle: "COMPLIANCE ENGINE",
            desc: "Quantum interpretation of global accounting standards",
            icon: "⚡",
            link: "/tools/ifrs",
            gradient: "from-purple-600 to-pink-600",
            features: ["STANDARDS AI", "COMPLIANCE CHECK", "SMART DOCS"]
        },
        {
            id: "excel",
            title: "EXCEL FORGE",
            subtitle: "DATA WEAPON",
            desc: "Turn complex data into tactical financial intelligence",
            icon: "📊",
            link: "/tools/excel",
            gradient: "from-emerald-500 to-teal-600",
            features: ["FORMULA CANNON", "DATA MINING", "OPTIMIZATION"]
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20 overflow-hidden">
                {/* Efecto de fondo */}
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-600 rounded-full blur-[130px] opacity-10 animate-pulse delay-700"></div>
                </div>

                <div className="max-w-6xl mx-auto text-center relative z-10">
                    {/* Badge futurista */}
                    <div className="inline-flex items-center gap-3 mb-8 px-5 py-2 bg-black/50 rounded-full border border-cyan-500/30 backdrop-blur-xl shadow-[0_0_20px_rgba(6,182,212,0.2)]">
                        <span className="relative flex h-3 w-3">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
                        </span>
                        <span className="text-sm font-mono text-cyan-400 tracking-wider">▲ SYSTEM ONLINE ▲</span>
                        <span className="text-xs text-cyan-500/70 font-mono">v.4.0</span>
                    </div>

                    {/* SKYNET gigante */}
                    <div className="relative mb-6">
                        <h1 className="text-7xl sm:text-8xl lg:text-9xl font-black font-mono tracking-wider bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-500 bg-clip-text text-transparent animate-pulse">
                            SKYNET
                        </h1>
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent blur-2xl"></div>
                    </div>

                    {/* Tagline */}
                    <p className="text-xl sm:text-2xl lg:text-3xl font-mono text-gray-300 mb-6 tracking-wider">
                        Neural Enterprise Intelligence
                    </p>
                    
                    {/* Descripción - Corregida para que los > estén bien espaciados */}
                    <p className="text-base sm:text-lg text-gray-400 mb-12 max-w-3xl mx-auto font-mono leading-relaxed">
                        <span className="text-cyan-400">⟫</span> INITIALIZING NEXT-GEN AI PROTOCOLS FOR FINANCIAL DOMINANCE. <span className="text-cyan-400">⟫</span> AUTONOMOUS AUDIT, QUANTUM COMPLIANCE, NEURAL DATA FORGE.
                    </p>

                    {/* Botones CTA - Separados correctamente */}
                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a href="#tools" className="group relative px-8 sm:px-10 py-4 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-mono font-bold text-white tracking-wider overflow-hidden">
                            <span className="relative z-10">⟫ INITIALIZE SYSTEMS ⟪</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                        </a>
                        <button className="px-8 sm:px-10 py-4 border-2 border-cyan-500/50 rounded-lg font-mono text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition-all duration-300 tracking-wider">
                            ⟫ REQUEST ACCESS ⟪
                        </button>
                    </div>

                    {/* Stats futuristas */}
                    <div className="grid grid-cols-3 gap-8 mt-20 pt-10 border-t border-cyan-500/20 max-w-2xl mx-auto">
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 font-mono">99.9%</div>
                            <div className="text-xs text-gray-500 font-mono tracking-wider">UPTIME</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 font-mono">&lt;1ms</div>
                            <div className="text-xs text-gray-500 font-mono tracking-wider">LATENCY</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl font-bold text-cyan-400 font-mono">256bit</div>
                            <div className="text-xs text-gray-500 font-mono tracking-wider">ENCRYPTION</div>
                        </div>
                    </div>
                </div>

                {/* Scroll indicator */}
                <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-cyan-500/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-cyan-500 rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Tools Grid Section */}
            <section id="tools" className="px-4 sm:px-6 lg:px-8 py-32 relative">
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyan-500/5 to-transparent"></div>
                <div className="max-w-7xl mx-auto relative">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center gap-2 mb-4 px-4 py-1 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                            <span className="text-cyan-400 text-xs font-mono tracking-wider">▲ NEURAL WEAPONS ARSENAL ▲</span>
                        </div>
                        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black font-mono bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4 tracking-wider">
                            DEPLOY AI UNITS
                        </h2>
                        <p className="text-gray-400 font-mono max-w-2xl mx-auto text-sm">
                            Select your tactical AI module. Each unit is optimized for maximum efficiency in financial operations.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tools.map((tool) => (
                            <Link key={tool.id} href={tool.link}>
                                <div
                                    onMouseEnter={() => setHoveredTool(tool.id)}
                                    onMouseLeave={() => setHoveredTool(null)}
                                    className="group relative cursor-pointer"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-20 rounded-2xl transition duration-500 blur-xl`} />
                                    
                                    <div className="relative p-6 sm:p-8 rounded-2xl bg-black/50 border border-gray-800 backdrop-blur-xl group-hover:border-cyan-500/50 transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_0_40px_rgba(6,182,212,0.3)]">
                                        <div className="text-6xl sm:text-7xl mb-6 transform group-hover:scale-110 transition duration-500">{tool.icon}</div>
                                        <h3 className="text-xl sm:text-2xl font-black text-white font-mono mb-2 tracking-wider">{tool.title}</h3>
                                        <p className="text-xs text-cyan-400 font-mono mb-4 tracking-wider">{tool.subtitle}</p>
                                        <p className="text-gray-400 mb-6 text-sm leading-relaxed">{tool.desc}</p>
                                        
                                        <div className="space-y-2 mb-8">
                                            {tool.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-gray-500 font-mono group-hover:text-gray-300 transition">
                                                    <span className="text-cyan-400">⟫</span>
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        
                                        <div className="flex items-center justify-between pt-4 border-t border-gray-800">
                                            <span className="text-cyan-400 font-mono text-sm tracking-wider group-hover:translate-x-2 transition">DEPLOY UNIT →</span>
                                            <span className="text-[10px] text-gray-600 font-mono">v.1.0</span>
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Final */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-20 sm:py-32">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 blur-3xl"></div>
                <div className="max-w-5xl mx-auto text-center relative">
                    <div className="p-8 sm:p-12 rounded-2xl bg-black/40 backdrop-blur-xl border border-cyan-500/30 shadow-[0_0_50px_rgba(6,182,212,0.2)]">
                        <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-cyan-500/10 rounded-full border border-cyan-500/30">
                            <span className="text-cyan-400 text-xs font-mono animate-pulse tracking-wider">● CONNECTION ESTABLISHED</span>
                        </div>
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black font-mono text-white mb-6 tracking-wider">
                            READY TO JOIN<br/>THE NETWORK?
                        </h2>
                        <p className="text-lg sm:text-xl text-gray-400 mb-10 max-w-2xl mx-auto font-mono">
                            Access the most advanced neural enterprise intelligence platform on the planet.
                        </p>
                        <button className="group relative px-8 sm:px-12 py-4 sm:py-5 bg-gradient-to-r from-cyan-600 to-blue-700 rounded-lg font-mono font-bold text-white tracking-wider text-base sm:text-lg overflow-hidden">
                            <span className="relative z-10">⟫ INITIALIZE SKYNET ACCESS ⟪</span>
                            <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                        </button>
                        <p className="text-xs text-gray-500 mt-6 font-mono">* Enterprise security protocols active. 256-bit encryption.</p>
                    </div>
                </div>
            </section>
        </div>
    );
}
