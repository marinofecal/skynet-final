import './globals.css';

export const metadata = {
      title: "Skynet Intelligence - AI for Finance & Compliance",
      description: "Enterprise-grade AI solutions for auditing, IFRS compliance, and financial analysis.",
};

export default function RootLayout({ children }) {
      return (
              <html lang="en">
                    <head>
                            <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Space+Mono:wght@400;700&display=swap" rel="stylesheet" />
                    </head>head>
                    <body className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-slate-100 antialiased">
                            <nav className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/80 border-b border-slate-700/50 shadow-lg">
                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                  <div className="flex justify-between items-center h-16">
                                                                <div className="flex items-center space-x-3">
                                                                                <div className="w-10 h-10 bg-gradient-to-br from-cyan-400 to-blue-600 rounded-lg flex items-center justify-center shadow-lg">
                                                                                                  <span className="text-white font-bold text-lg">⚡</span>span>
                                                                                </div>div>
                                                                                <h1 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                                                                                                  Skynet Intelligence
                                                                                </h1>h1>
                                                                </div>div>
                                                                <p className="text-slate-400 text-sm">Enterprise AI Solutions</p>p>
                                                  </div>div>
                                      </div>div>
                            </nav>nav>
                    
                            <main className="min-h-screen">
                                {children}
                            </main>main>
                    
                            <footer className="bg-slate-950 border-t border-slate-700/50 mt-20 py-12">
                                      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                                                  <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                                                                <div>
                                                                                <h3 className="text-cyan-400 font-bold mb-4">Skynet Intelligence</h3>h3>
                                                                                <p className="text-slate-400 text-sm">Advanced AI tools for modern finance and compliance.</p>p>
                                                                </div>div>
                                                                <div>
                                                                                <h3 className="text-cyan-400 font-bold mb-4">Features</h3>h3>
                                                                                <ul className="space-y-2 text-slate-400 text-sm">
                                                                                                  <li><a href="/tools/audit" className="hover:text-cyan-400 transition">Audit AI Assistant</a>a></li>li>
                                                                                                  <li><a href="/tools/ifrs" className="hover:text-cyan-400 transition">IFRS Advisor</a>a></li>li>
                                                                                                  <li><a href="/tools/excel" className="hover:text-cyan-400 transition">Excel Copilot</a>a></li>li>
                                                                                </ul>ul>
                                                                </div>div>
                                                                <div>
                                                                                <h3 className="text-cyan-400 font-bold mb-4">Enterprise</h3>h3>
                                                                                <p className="text-slate-400 text-sm">Custom solutions for your organization.</p>p>
                                                                </div>div>
                                                  </div>div>
                                                  <div className="border-t border-slate-700/50 pt-8 text-center text-slate-500 text-sm">
                                                                <p>&copy; 2025 Skynet Intelligence. All rights reserved.</p>p>
                                                  </div>div>
                                      </div>div>
                            </footer>footer>
                    </body>body>
              </html>html>
            );
}</html>
