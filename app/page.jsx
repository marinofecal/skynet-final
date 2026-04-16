'use client';
import Link from 'next/link';

export default function Home() {
              const bots = [
                          { id: 'audit', name: 'AUDIT AI', icon: '🔍', tagline: 'Risk Intelligence', desc: 'Advanced compliance monitoring and risk detection' },
                          { id: 'ifrs', name: 'IFRS AI', icon: '📋', tagline: 'Compliance Engine', desc: 'Automated IFRS standard compliance tracking' },
                          { id: 'excel', name: 'EXCEL AI', icon: '📊', tagline: 'Data Forge', desc: 'Intelligent spreadsheet automation and analysis' },
                            ];

  return (
                  <main className="w-full bg-black text-white overflow-hidden">
                        <div className="fixed inset-0 -z-10">
                                <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>div>
                                <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>div>
                                <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>div>
                        </div>div>
                  
                        <section className="relative z-10 min-h-screen flex items-center justify-center px-4">
                                <div className="w-full max-w-4xl text-center">
                                          <p className="text-cyan-400 text-sm font-semibold tracking-widest mb-6">⚡ AI INTELLIGENCE PLATFORM</p>p>
                                          <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6">
                                                      <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SKYNET</span>span>
                                          </h1>h1>
                                          <p className="text-lg text-gray-300 mb-8 max-w-2xl mx-auto">Automatización financiera con IA de próxima generación</p>p>
                                          <div className="flex gap-4 justify-center flex-wrap">
                                                      <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">Comenzar</button>button>
                                                      <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-colors">Explorar</button>button>
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        <section className="relative z-10 py-24 px-4">
                                <div className="max-w-6xl mx-auto">
                                          <h2 className="text-5xl font-black text-center mb-16 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Agentes Inteligentes</h2>h2>
                                          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                                      {bots.map((bot) => (
                                            <Link key={bot.id} href={`/tools/${bot.id}`}>
                                                            <div className="group p-8 rounded-2xl bg-gray-900/30 border border-cyan-500/20 hover:border-cyan-400/60 cursor-pointer transition-all">
                                                                              <div className="text-6xl mb-4">{bot.icon}</div>div>
                                                                              <h3 className="text-2xl font-black text-cyan-400 mb-2">{bot.name}</h3>h3>
                                                                              <p className="text-sm text-gray-500 mb-3 uppercase">{bot.tagline}</p>p>
                                                                              <p className="text-gray-300 mb-4">{bot.desc}</p>p>
                                                                              <div className="text-cyan-400 font-semibold group-hover:translate-x-2 transition-transform">Acceder →</div>div>
                                                            </div>div>
                                            </Link>Link>
                                          ))}
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        <section className="relative z-10 py-24 px-4 bg-gradient-to-b from-transparent to-cyan-950/10">
                                <div className="max-w-4xl mx-auto text-center">
                                          <h2 className="text-5xl font-black mb-8 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">Transforma tu Negocio</h2>h2>
                                          <p className="text-xl text-gray-300 mb-10">Soluciones de IA empresarial diseñadas para modernizar tus operaciones financieras</p>p>
                                          <div className="flex gap-4 justify-center flex-wrap">
                                                      <button className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg hover:scale-105 transition-transform">Comenzar Ahora</button>button>
                                                      <button className="px-8 py-3 border-2 border-cyan-400 text-cyan-400 font-bold rounded-lg hover:bg-cyan-400/10 transition-colors">Contactar</button>button>
                                          </div>div>
                                </div>div>
                        </section>section>
                  
                        <footer className="relative z-10 border-t border-cyan-500/20 py-12 px-4">
                                <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
                                          <div>
                                                      <h4 className="font-black text-lg text-cyan-400 mb-4">SKYNET</h4>h4>
                                                      <p className="text-sm text-gray-500">Plataforma de IA empresarial</p>p>
                                          </div>div>
                                          <div>
                                                      <h5 className="font-bold text-cyan-400 mb-4">Producto</h5>h5>
                                                      <ul className="space-y-2 text-sm text-gray-400">
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Características</a>a></li>li>
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Precios</a>a></li>li>
                                                      </ul>ul>
                                          </div>div>
                                          <div>
                                                      <h5 className="font-bold text-cyan-400 mb-4">Empresa</h5>h5>
                                                      <ul className="space-y-2 text-sm text-gray-400">
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Sobre</a>a></li>li>
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Blog</a>a></li>li>
                                                      </ul>ul>
                                          </div>div>
                                          <div>
                                                      <h5 className="font-bold text-cyan-400 mb-4">Legal</h5>h5>
                                                      <ul className="space-y-2 text-sm text-gray-400">
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Privacidad</a>a></li>li>
                                                                    <li><a href="#" className="hover:text-cyan-400 transition">Términos</a>a></li>li>
                                                      </ul>ul>
                                          </div>div>
                                </div>div>
                                <div className="border-t border-cyan-500/20 mt-8 pt-8 text-center text-sm text-gray-500">
                                          <p>&copy; 2024 SKYNET. Todos los derechos reservados.</p>p>
                                </div>div>
                        </footer>footer>
                  </main>main>
                );
}</main>
