import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
    title: 'AI Business Suite',
    description: 'Transform your business with cutting-edge AI',
}

export default function RootLayout({ children }) {
    return (
        <html lang="en">
            <body className={inter.className}>
                {/* Fondo futurista */}
                <div className="fixed inset-0 -z-10">
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900"></div>
                    <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20"></div>
                    <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/10 via-purple-500/10 to-pink-500/10 animate-gradient-x"></div>
                </div>

                {/* Navbar futurista */}
                <nav className="sticky top-0 z-50 backdrop-blur-xl bg-black/30 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex justify-between items-center h-16">
                            <div className="flex items-center space-x-2">
                                <div className="w-8 h-8 bg-gradient-to-r from-cyan-400 to-purple-500 rounded-lg rotate-45 animate-spin-slow"></div>
                                <span className="text-xl font-bold bg-gradient-to-r from-cyan-400 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                                    AI Business
                                </span>
                            </div>
                            <div className="hidden md:flex space-x-8">
                                <a href="#" className="text-gray-300 hover:text-white transition">Dashboard</a>
                                <a href="#" className="text-gray-300 hover:text-white transition">Analytics</a>
                                <a href="#" className="text-gray-300 hover:text-white transition">Tools</a>
                                <a href="#" className="text-gray-300 hover:text-white transition">Audit</a>
                                <a href="#" className="text-gray-300 hover:text-white transition">Reports</a>
                            </div>
                            <button className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-purple-600 rounded-lg text-white font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all">
                                Launch AI
                            </button>
                        </div>
                    </div>
                </nav>

                {/* Contenido principal */}
                <main className="relative z-10">
                    {children}
                </main>

                {/* Footer futurista */}
                <footer className="border-t border-white/10 backdrop-blur-sm bg-black/20 mt-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                            <div>
                                <h3 className="text-white font-bold mb-4">AI Business Suite</h3>
                                <p className="text-gray-400 text-sm">Enterprise AI solutions</p>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">Products</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>AI Analytics</li>
                                    <li>Automation</li>
                                    <li>Compliance</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">Resources</h4>
                                <ul className="space-y-2 text-gray-400 text-sm">
                                    <li>Documentation</li>
                                    <li>API Reference</li>
                                    <li>Support</li>
                                </ul>
                            </div>
                            <div>
                                <h4 className="text-white font-semibold mb-4">Connect</h4>
                                <div className="flex space-x-4">
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-all cursor-pointer">
                                        <span>in</span>
                                    </div>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-all cursor-pointer">
                                        <span>🐦</span>
                                    </div>
                                    <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-cyan-500/20 transition-all cursor-pointer">
                                        <span>📧</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </footer>
            </body>
        </html>
    )
}
