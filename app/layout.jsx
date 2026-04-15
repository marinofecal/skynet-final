import './globals.css'
import Link from 'next/link'

export const metadata = {
  title: 'SKYNET | AI Intelligence Framework',
  description: 'AI automation for audit, IFRS compliance, and financial analysis',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-black text-white">
        {/* Fondo fijo con efecto neón */}
        <div className="fixed inset-0 -z-10">
          <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
          <div className="absolute top-20 left-10 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-20 animate-glow"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20 animate-glow" style={{ animationDelay: '2s' }}></div>
          <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="60" height="60" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="grid" width="60" height="60" patternUnits="userSpaceOnUse"%3E%3Cpath d="M 60 0 L 0 0 0 60" fill="none" stroke="rgba(0,212,255,0.05)" stroke-width="1"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23grid)"/%3E%3C/svg%3E')] opacity-30"></div>
        </div>

        {/* Header */}
        <header className="sticky top-0 z-50 bg-black/70 backdrop-blur-md border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-lg rotate-45"></div>
              <div>
                <div className="text-xl font-bold bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">SKYNET</div>
                <div className="text-[9px] text-cyan-400/70 tracking-wider">INTELLIGENCE FRAMEWORK</div>
              </div>
            </div>
            <nav className="hidden md:flex gap-6">
              <a href="/" className="text-gray-300 hover:text-cyan-400 transition">HOME</a>
              <a href="/tools/audit" className="text-gray-300 hover:text-cyan-400 transition">AUDIT</a>
              <a href="/tools/ifrs" className="text-gray-300 hover:text-cyan-400 transition">IFRS</a>
              <a href="/tools/excel" className="text-gray-300 hover:text-cyan-400 transition">EXCEL</a>
            </nav>
            <a href="https://linkedin.com/in/crtizgar" target="_blank" className="px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-sm hover:bg-cyan-500/20 transition">
              LINKEDIN
            </a>
          </div>
        </header>

        <main>{children}</main>

        <footer className="border-t border-white/10 py-8 mt-20 text-center text-gray-500 text-sm">
          SKYNET — Intelligent Automation Framework
        </footer>
      </body>
    </html>
  )
}
