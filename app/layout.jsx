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
                {/* Fondo dinámico */}
                <div className="fixed inset-0 -z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-[#010105] via-[#05050f] to-[#010105]"></div>
                    <div className="absolute inset-0 grid-elegant"></div>
                    <div className="absolute top-0 left-1/3 w-[500px] h-[500px] bg-cyan-500 rounded-full blur-[150px] opacity-15 animate-glow-pulse"></div>
                    <div className="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-purple-600 rounded-full blur-[150px] opacity-10 animate-glow-pulse" style={{ animationDelay: '2s' }}></div>
                </div>

                {/* Header minimal pero impactante */}
                <header className="sticky top-0 z-50 glass-premium border-b border-cyan-500/20">
                    <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
                        <Link href="/" className="group flex items-center gap-4">
                            <div className="relative">
                                <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-purple-600 rounded-2xl rotate-45 group-hover:rotate-90 transition duration-500"></div>
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <span className="text-white font-black text-2xl -rotate-45">S</span>
                                </div>
                            </div>
                            <div>
                                <div className="text-2xl font-black tracking-tighter bg-gradient-to-r from-cyan-400 via-white to-purple-400 bg-clip-text text-transparent">
                                    SKYNET
                                </div>
                                <div className="text-[9px] text-cyan-400/60 tracking-[0.3em]">INTELLIGENCE FRAMEWORK</div>
                            </div>
                        </Link>

                        <nav className="hidden md:flex gap-10">
                            <Link href="/" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium tracking-wide">HOME</Link>
                            <Link href="/tools/audit" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium tracking-wide">AUDIT</Link>
                            <Link href="/tools/ifrs" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium tracking-wide">IFRS</Link>
                            <Link href="/tools/excel" className="text-gray-300 hover:text-cyan-400 transition text-sm font-medium tracking-wide">EXCEL</Link>
                        </nav>

                        <a 
                            href="https://linkedin.com/in/crtizgar" 
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-2 px-5 py-2.5 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 hover:bg-cyan-500/20 transition-all text-sm font-medium"
                        >
                            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                            LINKEDIN
                        </a>
                    </div>
                </header>

                <main className="relative z-10">
                    {children}
                </main>

                <footer className="border-t border-white/5 py-10 mt-32">
                    <div className="max-w-7xl mx-auto px-8 text-center">
                        <p className="text-gray-600 text-sm font-light">SKYNET — Intelligent Automation Framework</p>
                        <p className="text-gray-700 text-xs mt-2">Powered by Next.js · Tailwind CSS · OpenAI</p>
                    </div>
                </footer>
            </body>
        </html>
    )
}
