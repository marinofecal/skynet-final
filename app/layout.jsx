import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'], variable: '--font-inter' })

export const metadata = {
  title: 'SKYNET | AI Intelligence Framework',
  description: 'Next-generation AI automation for audit, IFRS compliance, and financial analysis.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.variable}>
      <body>
        {/* Fondo principal con capas */}
        <div className="fixed inset-0 -z-30 bg-black" />
        <div className="fixed inset-0 -z-20 bg-cyber-grid opacity-40" />
        <div className="fixed inset-0 -z-10 bg-gradient-to-tr from-black via-slate-950/50 to-black" />
        
        {/* Orbes de neón animados */}
        <div className="fixed top-1/4 left-1/4 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[130px] opacity-15 animate-glow-pulse" />
        <div className="fixed bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[130px] opacity-15 animate-glow-pulse" style={{ animationDelay: '2s' }} />

        {/* Header */}
        <header className="sticky top-0 z-50 glass-premium border-b border-cyan-500/30">
          <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
            <Link href="/" className="group flex items-center gap-4">
              <div className="relative">
                <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-60 group-hover:opacity-100 transition" />
                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl rotate-45 group-hover:rotate-90 transition duration-500" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-white font-black text-xl -rotate-45">S</span>
                </div>
              </div>
              <div>
                <div className="text-xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                  SKYNET
                </div>
                <div className="text-[9px] text-cyan-400/70 tracking-[0.3em]">INTELLIGENCE FRAMEWORK</div>
              </div>
            </Link>

            <nav className="hidden md:flex gap-8">
              {['HOME', 'AUDIT', 'IFRS', 'EXCEL'].map((item) => (
                <Link
                  key={item}
                  href={item === 'HOME' ? '/' : `/tools/${item.toLowerCase()}`}
                  className="text-sm font-medium text-gray-300 hover:text-cyan-400 transition tracking-wide"
                >
                  {item}
                </Link>
              ))}
            </nav>

            <a
              href="https://linkedin.com/in/crtizgar"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all text-sm font-medium"
            >
              <span className="w-2 h-2 bg-emerald-400 rounded-full animate-pulse" />
              LINKEDIN
            </a>
          </div>
        </header>

        <main className="relative z-10">{children}</main>

        <footer className="border-t border-white/5 py-8 mt-32">
          <div className="max-w-7xl mx-auto px-6 text-center">
            <p className="text-gray-600 text-sm">SKYNET — Intelligent Automation Framework</p>
            <p className="text-gray-700 text-xs mt-1">Next.js · Tailwind CSS · OpenAI API</p>
          </div>
        </footer>
      </body>
    </html>
  )
}
