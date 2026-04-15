'use client';
import Link from 'next/link';

export default function Home() {
  const bots = [
    { id: 'audit', name: 'AUDIT AI', tagline: 'SENTINEL PROTOCOL', desc: 'Autonomous risk assessment and audit procedure generation with real-time analysis.', icon: '🔍', badge: '99.9% ACCURACY', capabilities: ['Risk Analysis', 'Control Mapping', 'Audit Planning'], link: '/tools/audit', gradient: 'from-cyan-500 to-blue-600' },
    { id: 'ifrs', name: 'IFRS AI', tagline: 'COMPLIANCE ENGINE', desc: 'Accounting standards interpreter with intelligent documentation and compliance checking.', icon: '📊', badge: 'IFRS 1-17 READY', capabilities: ['Standards Mapping', 'Compliance Check', 'Smart Reports'], link: '/tools/ifrs', gradient: 'from-purple-500 to-pink-600' },
    { id: 'excel', name: 'EXCEL AI', tagline: 'DATA FORGE', desc: 'Convert complex financial logic into production-ready Excel formulas instantly.', icon: '⚡', badge: '<1ms RESPONSE', capabilities: ['Formula Generation', 'Data Analysis', 'Optimization'], link: '/tools/excel', gradient: 'from-emerald-500 to-teal-600' },
  ];

  return (
    <div>
      {/* Hero */}
      <section className="min-h-[85vh] flex items-center px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-6">
                <span className="w-2 h-2 bg-cyan-500 rounded-full animate-pulse"></span>
                <span className="text-cyan-400 text-xs font-mono">SYSTEM ONLINE</span>
              </div>
              <h1 className="text-7xl sm:text-8xl font-black tracking-tighter mb-4 bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">SKYNET</h1>
              <p className="text-2xl text-gray-300 mb-4">AI Intelligence Framework</p>
              <p className="text-gray-400 mb-8 max-w-lg">Next-generation automation for audit, compliance, and financial analysis. Built to demonstrate advanced AI integration.</p>
              <div className="flex gap-4 mb-8">
                <div className="bg-white/5 rounded-xl p-3 text-center w-24"><div className="text-2xl font-bold text-cyan-400">3</div><div className="text-[10px] text-gray-500">MODULES</div></div>
                <div className="bg-white/5 rounded-xl p-3 text-center w-24"><div className="text-2xl font-bold text-cyan-400">&lt;1s</div><div className="text-[10px] text-gray-500">RESPONSE</div></div>
                <div className="bg-white/5 rounded-xl p-3 text-center w-24"><div className="text-2xl font-bold text-cyan-400">24/7</div><div className="text-[10px] text-gray-500">AVAILABLE</div></div>
              </div>
              <a href="#bots" className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-lg font-bold hover:shadow-[0_0_25px_cyan] transition">EXPLORE BOTS →</a>
            </div>
            <div className="hidden lg:flex justify-center">
              <div className="relative w-80 h-80">
                <div className="absolute inset-0 bg-cyan-500 rounded-full blur-3xl opacity-30 animate-pulse"></div>
                <div className="absolute inset-10 bg-gradient-to-br from-cyan-500/20 to-purple-500/20 rounded-full animate-float flex items-center justify-center">
                  <span className="text-7xl">🧠</span>
                </div>
                <div className="absolute -inset-4 border border-cyan-500/30 rounded-full animate-spin-slow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bots */}
      <section id="bots" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 mb-4">
              <span className="text-cyan-400 text-xs font-mono">⟫ AVAILABLE MODULES ⟪</span>
            </div>
            <h2 className="text-5xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">Intelligent Bots</h2>
            <p className="text-gray-400 max-w-2xl mx-auto">Production-ready AI agents for real-world financial operations</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {bots.map((bot) => (
              <Link key={bot.id} href={bot.link}>
                <div className="group relative bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-500 hover:scale-105 transition-all duration-300 cursor-pointer">
                  <div className={`absolute inset-0 bg-gradient-to-br ${bot.gradient} opacity-0 group-hover:opacity-10 rounded-2xl transition`}></div>
                  <div className="text-6xl mb-4">{bot.icon}</div>
                  <h3 className="text-2xl font-bold mb-1">{bot.name}</h3>
                  <p className="text-cyan-400 text-xs font-mono mb-3">{bot.tagline}</p>
                  <p className="text-gray-400 text-sm mb-4">{bot.desc}</p>
                  <span className="inline-block px-2 py-1 rounded-full bg-cyan-500/20 text-cyan-400 text-[10px] font-mono mb-4">{bot.badge}</span>
                  <div className="flex flex-wrap gap-2 mb-6">
                    {bot.capabilities.map((c, i) => <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-gray-800 text-gray-300">{c}</span>)}
                  </div>
                  <div className="flex items-center gap-2 text-cyan-400 font-mono text-sm group-hover:gap-3 transition">LAUNCH BOT <span>→</span></div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Tech */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto text-center bg-white/5 rounded-2xl p-8 border border-cyan-500/20">
          <div className="text-2xl mb-4">⚡</div>
          <h3 className="text-xl font-bold mb-4">BUILT WITH MODERN TECH</h3>
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            {['Next.js 14', 'Tailwind CSS', 'OpenAI API', 'Vercel', 'TypeScript'].map(t => <span key={t} className="px-3 py-1 rounded-lg bg-gray-800 text-sm">{t}</span>)}
          </div>
          <p className="text-gray-500 text-sm">Active development · Production ready · AI-driven architecture</p>
        </div>
      </section>
    </div>
  );
}
