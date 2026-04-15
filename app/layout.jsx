import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'SKYNET | AI Intelligence Framework',
    description: 'Next-generation AI automation for audit, compliance, and financial analysis.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Scan line effect */}
                <div className="scan-line"></div>

                {/* Fondo cyberpunk */}
                <div className="fixed inset-0 -z-20 bg-gradient-to-br from-[#05050a] via-[#0a0a15] to-[#05050a]"></div>
                <div className="fixed inset-0 -z-10 bg-cyber-grid opacity-30"></div>
                
                {/* Luces de neón flotantes */}
                <div className="fixed top-20 left-10 w-64 h-64 bg-cyan-500 rounded-full blur-[120px] opacity-20 animate-pulse"></div>
                <div className="fixed bottom-20 right-10 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-20 animate-pulse delay-1000"></div>

                {/* Header */}
                <header className="sticky top-0 z-50 glass-cyber border-b border-cyan-500/30">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        {/* Logo SKYNET */}
                        <Link href="/" className="group flex items-center space-x-3">
                            <div className="relative">
                                <div className="absolute inset-0 bg-cyan-500 rounded-xl blur-lg opacity-50 group-hover:opacity-100 transition"></div>
                                <div className="relative w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl flex items-center justify-center">
                                    <span className="text-white font-black text-xl">S</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-xl font-black tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    SKYNET
                                </div>
                                <div className="text-[8px] text-cyan-400/70 tracking-widest">AI FRAMEWORK</div>
                            </div>
                        </Link>

                        {/* Navegación futurista */}
                        <nav className="hidden md:flex space-x-8">
                            {['HOME', 'AUDIT', 'IFRS', 'EXCEL'].map((item) => (
                                <Link 
                                    key={item} 
                                    href={item === 'HOME' ? '/' : `/tools/${item.toLowerCase()}`}
                                    className="text-gray-400 hover:text-cyan-400 transition text-sm font-mono tracking-wider"
                                >
                                    {item === 'HOME' ? '▲ HOME' : `⟫ ${item}`}
                                </Link>
                            ))}
                        </nav>

                        {/* LinkedIn link - sin email */}
                        <a 
                            href="https://linkedin.com/in/crtizgar" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-4 py-2 rounded-lg border border-cyan-500/40 text-cyan-400 hover:bg-cyan-500/10 hover:border-cyan-400 transition text-sm font-mono"
                        >
                            <span>◉</span> 
                            <span>LINKEDIN</span>
                        </a>
                    </div>
                </header>

                <main className="relative z-10">
                    {children}
                </main>

                {/* Footer minimal */}
                <footer className="border-t border-cyan-500/10 py-8 mt-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-gray-600 text-xs font-mono">
                            SKYNET — Intelligent Automation Framework
                        </p>
                        <p className="text-gray-700 text-[10px] mt-1">
                            Next.js · Tailwind · OpenAI API
                        </p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
