import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'SKYNET | Neural Enterprise Intelligence',
    description: 'Next-generation AI platform for financial dominance',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Fondo Matrix/Cyberpunk */}
                <div className="fixed inset-0 -z-20">
                    <div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950 to-black"></div>
                    <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500 rounded-full blur-[150px] opacity-20 animate-pulse"></div>
                    <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-purple-600 rounded-full blur-[150px] opacity-20 animate-pulse delay-1000"></div>
                    <div className="absolute top-1/2 left-1/2 w-96 h-96 bg-blue-600 rounded-full blur-[150px] opacity-10 animate-pulse delay-700"></div>
                    <div className="absolute inset-0 bg-grid-pattern opacity-50"></div>
                </div>

                {/* Navbar SKYNET */}
                <nav className="sticky top-0 z-50 backdrop-blur-2xl bg-black/60 border-b border-cyan-500/30 shadow-[0_0_30px_rgba(6,182,212,0.15)]">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-20">
                            {/* Logo SKYNET */}
                            <div className="flex items-center space-x-3 group cursor-pointer">
                                <div className="relative">
                                    <div className="absolute inset-0 bg-cyan-500 rounded-lg blur-md opacity-50 group-hover:opacity-100 transition duration-300"></div>
                                    <div className="relative w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-black text-2xl font-mono">S</span>
                                    </div>
                                </div>
                                <div>
                                    <span className="text-2xl font-black bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent font-mono tracking-wider">
                                        SKYNET
                                    </span>
                                    <div className="text-[10px] text-cyan-400/80 font-mono tracking-widest">NEURAL NETWORK v4.0</div>
                                </div>
                            </div>

                            {/* Menú futurista */}
                            <div className="hidden md:flex space-x-1">
                                {['CORE', 'WEAPONS', 'SENTINEL', 'LABS', 'ACCESS'].map((item) => (
                                    <a key={item} href="#" className="relative px-5 py-2 text-gray-400 hover:text-cyan-400 transition group font-mono text-sm tracking-wider">
                                        <span className="relative z-10">{item}</span>
                                        <span className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-500/10 to-cyan-500/0 opacity-0 group-hover:opacity-100 transition rounded-lg"></span>
                                    </a>
                                ))}
                            </div>

                            {/* Botón MAINFRAME */}
                            <button className="relative px-6 py-2.5 rounded-full bg-gradient-to-r from-cyan-600 to-blue-700 text-white font-mono text-sm font-bold tracking-wider hover:shadow-[0_0_25px_rgba(6,182,212,0.6)] transition-all duration-300 hover:scale-105 overflow-hidden group">
                                <span className="relative z-10 flex items-center gap-2">
                                    <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
                                    ACCESS MAINFRAME
                                </span>
                                <span className="absolute inset-0 bg-gradient-to-r from-cyan-400 to-blue-500 opacity-0 group-hover:opacity-100 transition duration-300"></span>
                            </button>
                        </div>
                    </div>
                    
                    {/* Barra de estado futurista */}
                    <div className="h-px bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
                    <div className="flex justify-between items-center px-8 py-1 bg-black/30 text-[10px] font-mono">
                        <span className="text-cyan-400">▲ SYSTEM STATUS: OPERATIONAL</span>
                        <span className="text-gray-500">ENCRYPTION: 256-BIT QUANTUM</span>
                        <span className="text-cyan-400">NEURAL LINK: ACTIVE</span>
                    </div>
                </nav>

                {/* Contenido principal */}
                <main className="relative z-10">
                    {children}
                </main>

                {/* Footer SKYNET */}
                <footer className="relative z-10 mt-32 border-t border-cyan-500/20 bg-black/80 backdrop-blur-xl">
                    <div className="absolute inset-0 bg-gradient-to-t from-cyan-500/5 to-transparent"></div>
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 relative">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                            <div>
                                <div className="flex items-center space-x-2 mb-4">
                                    <div className="w-8 h-8 bg-gradient-to-br from-cyan-500 to-blue-700 rounded-lg flex items-center justify-center">
                                        <span className="text-white font-bold text-sm font-mono">S</span>
                                    </div>
                                    <div>
                                        <span className="text-lg font-bold text-white font-mono tracking-wider">SKYNET</span>
                                        <p className="text-[8px] text-cyan-400 font-mono">© 2026 NEURAL ENTERPRISE</p>
                                    </div>
                                </div>
                                <p className="text-gray-500 text-xs font-mono leading-relaxed">
                                    Next-generation AI platform for financial dominance.
                                </p>
                                <div className="mt-4 p-2 bg-cyan-500/5 border border-cyan-500/20 rounded">
                                    <p className="text-[8px] text-cyan-400 font-mono">API STATUS: ████████ 100%</p>
                                </div>
                            </div>
                            
                            <div>
                                <h4 className="text-cyan-400 font-mono text-xs mb-4 tracking-wider flex items-center gap-2">
                                    <span>▲</span> NEURAL LINKS
                                </h4>
                                <ul className="space-y-2 text-gray-500 text-xs font-mono">
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> SYSTEM STATUS
                                    </li>
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> API DOCS
                                    </li>
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> NETWORK MAP
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-cyan-400 font-mono text-xs mb-4 tracking-wider flex items-center gap-2">
                                    <span>▲</span> RESOURCES
                                </h4>
                                <ul className="space-y-2 text-gray-500 text-xs font-mono">
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> SECURITY PROTOCOL
                                    </li>
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> COMPLIANCE
                                    </li>
                                    <li className="hover:text-cyan-400 transition cursor-pointer flex items-center gap-2">
                                        <span className="text-cyan-400">⟫</span> SUPPORT
                                    </li>
                                </ul>
                            </div>
                            
                            <div>
                                <h4 className="text-cyan-400 font-mono text-xs mb-4 tracking-wider flex items-center gap-2">
                                    <span>▲</span> CONNECTION
                                </h4>
                                <div className="flex space-x-3 mb-4">
                                    {['IN', 'GH', 'DC', 'X'].map((social) => (
                                        <div key={social} className="w-10 h-10 border border-cyan-500/30 rounded-lg flex items-center justify-center hover:border-cyan-500 hover:shadow-[0_0_15px_cyan] transition-all cursor-pointer group bg-black/50">
                                            <span className="text-gray-400 group-hover:text-cyan-400 text-xs font-mono font-bold">{social}</span>
                                        </div>
                                    ))}
                                </div>
                                <div className="mt-4 p-3 bg-cyan-500/5 border border-cyan-500/20 rounded-lg">
                                    <p className="text-[9px] text-cyan-400 font-mono tracking-wider">● NEURAL SYNC: ACTIVE</p>
                                    <p className="text-[8px] text-gray-600 font-mono mt-1">UPTIME: 99.99%</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
