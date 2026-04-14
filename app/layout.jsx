import './globals.css'
import { Inter } from 'next/font/google'
import Link from 'next/link'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'SKYNET | AI Automation Framework',
    description: 'Intelligent automation for audit, IFRS compliance, and financial analysis.',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Fondo SKYNET */}
                <div className="fixed inset-0 -z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[120px] opacity-10"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[120px] opacity-10"></div>
                    {/* FIXED: using CSS class instead of inline SVG */}
                    <div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
                </div>

                {/* Header */}
                <header className="sticky top-0 z-50 glass-dark border-b border-cyan-500/20">
                    <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
                        <div className="flex items-center space-x-3">
                            <div className="relative">
                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-xl rotate-45"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-black text-xl -rotate-45">S</span>
                                </div>
                            </div>
                            <div>
                                <h1 className="text-2xl font-bold tracking-tight bg-gradient-to-r from-cyan-400 to-purple-400 bg-clip-text text-transparent">
                                    SKYNET
                                </h1>
                                <p className="text-[10px] text-cyan-400/70 tracking-widest">AI AUTOMATION FRAMEWORK</p>
                            </div>
                        </div>

                        <nav className="flex space-x-6">
                            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">HOME</Link>
                            <Link href="/tools/audit" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">AUDIT</Link>
                            <Link href="/tools/ifrs" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">IFRS</Link>
                            <Link href="/tools/excel" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium">EXCEL</Link>
                        </nav>

                        <a 
                            href="https://linkedin.com/in/marinofecal" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/10 transition text-sm font-mono"
                        >
                            ◉ BUILT BY @MARINOFECAL
                        </a>
                    </div>
                </header>

                <main className="relative z-10">
                    {children}
                </main>

                <footer className="relative z-10 border-t border-cyan-500/10 py-8 mt-20">
                    <div className="max-w-7xl mx-auto px-6 text-center">
                        <p className="text-gray-500 text-sm font-mono">SKYNET — Intelligent Automation Framework</p>
                        <p className="text-gray-600 text-xs mt-2">Built with Next.js • Tailwind CSS • OpenAI API</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
