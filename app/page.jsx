'use client';

import Link from "next/link";
import { useState } from "react";

export default function Home() {
    const [hoveredTool, setHoveredTool] = useState(null);

    const tools = [
        {
            id: "audit",
            title: "Audit AI Assistant",
            desc: "Identify risks, controls and audit procedures for real business scenarios.",
            icon: "📋",
            link: "/tools/audit",
            gradient: "from-blue-500 to-cyan-500",
            features: ["Risk Assessment", "Control Mapping", "Audit Planning"]
        },
        {
            id: "ifrs",
            title: "IFRS AI Advisor",
            desc: "Interpret accounting standards and generate compliant outputs.",
            icon: "📊",
            link: "/tools/ifrs",
            gradient: "from-purple-500 to-pink-500",
            features: ["Standards Interpretation", "Compliance Check", "Documentation"]
        },
        {
            id: "excel",
            title: "Excel AI Copilot",
            desc: "Turn financial problems into structured Excel logic and analysis.",
            icon: "🧮",
            link: "/tools/excel",
            gradient: "from-green-500 to-emerald-500",
            features: ["Formula Generation", "Data Analysis", "Optimization"]
        },
    ];

    return (
        <div className="min-h-screen">
            {/* Hero Section */}
            <section className="relative pt-20 pb-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
                    <div className="absolute bottom-20 right-10 w-72 h-72 bg-purple-500 rounded-full mix-blend-screen filter blur-3xl opacity-20 animate-pulse" />
                </div>

                <div className="max-w-4xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 mb-6 px-4 py-2 bg-slate-800/50 rounded-full border border-slate-700/50 backdrop-blur-sm">
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500" />
                        </span>
                        <span className="text-sm text-slate-300">Enterprise AI Solutions Available</span>
                    </div>

                    <h1 className="text-5xl sm:text-7xl font-bold mb-6 bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                        AI Intelligence for Finance & Compliance
                    </h1>

                    <p className="text-xl text-slate-400 mb-8 max-w-2xl mx-auto">
                        Advanced machine learning tools designed specifically for auditors, accountants, and financial professionals. Automate complex processes and enhance decision-making.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="#tools" className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
                            Explore Tools →
                        </a>
                        <button className="px-8 py-4 border border-slate-600 rounded-lg font-semibold text-slate-200 hover:bg-slate-800 transition">
                            Request Demo
                        </button>
                    </div>
                </div>
            </section>

            {/* Features Overview */}
            <section className="px-4 sm:px-6 lg:px-8 mb-20">
                <div className="max-w-6xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { icon: "⚡", title: "Lightning Fast", desc: "Real-time AI analysis with instant results" },
                            { icon: "🔒", title: "Enterprise Secure", desc: "Bank-level encryption and compliance" },
                            { icon: "📈", title: "Proven Results", desc: "Trusted by leading global firms" }
                        ].map((feature, idx) => (
                            <div key={idx} className="p-6 rounded-xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm hover:border-slate-600/50 transition">
                                <div className="text-4xl mb-4">{feature.icon}</div>
                                <h3 className="text-lg font-semibold text-white mb-2">{feature.title}</h3>
                                <p className="text-slate-400">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Tools Grid */}
            <section id="tools" className="px-4 sm:px-6 lg:px-8 pb-32">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl sm:text-5xl font-bold text-white mb-4">
                            Powerful AI Tools
                        </h2>
                        <p className="text-xl text-slate-400">
                            Choose the tool that fits your needs
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        {tools.map((tool) => (
                            <Link key={tool.id} href={tool.link}>
                                <div
                                    onMouseEnter={() => setHoveredTool(tool.id)}
                                    onMouseLeave={() => setHoveredTool(null)}
                                    className="group relative h-full cursor-pointer"
                                >
                                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition duration-300 blur-xl`} />
                                    <div className="relative h-full p-8 rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-slate-700/50 backdrop-blur-sm group-hover:border-slate-600 transition transform group-hover:scale-105 group-hover:shadow-2xl group-hover:shadow-slate-950/50">
                                        <div className="text-6xl mb-4 transform group-hover:scale-110 transition duration-300">
                                            {tool.icon}
                                        </div>
                                        <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-cyan-400 group-hover:to-purple-400 group-hover:bg-clip-text transition">
                                            {tool.title}
                                        </h3>
                                        <p className="text-slate-400 mb-6 group-hover:text-slate-300 transition">
                                            {tool.desc}
                                        </p>
                                        <div className="space-y-2 mb-6">
                                            {tool.features.map((feature, idx) => (
                                                <div key={idx} className="flex items-center gap-2 text-slate-400 group-hover:text-slate-300 transition">
                                                    <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
                                                    {feature}
                                                </div>
                                            ))}
                                        </div>
                                        <div className="flex items-center gap-2 text-cyan-400 font-semibold group-hover:gap-3 transition">
                                            Start Using →
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-20 mb-20">
                <div className="max-w-4xl mx-auto text-center p-12 rounded-2xl bg-gradient-to-r from-cyan-900/20 to-purple-900/20 border border-cyan-500/20 backdrop-blur-sm">
                    <h2 className="text-4xl font-bold text-white mb-4">
                        Ready to Transform Your Finance Team?
                    </h2>
                    <p className="text-xl text-slate-300 mb-8">
                        Join enterprise clients who are already using Skynet Intelligence to streamline their audit and compliance workflows.
                    </p>
                    <button className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg font-semibold text-white hover:shadow-lg hover:shadow-cyan-500/50 transition transform hover:scale-105">
                        Get Enterprise Access
                    </button>
                </div>
            </section>
        </div>
    );
}
