'use client';
import Link from 'next/link';

export default function Home() {
          const bots = [
                  { id: 'audit', name: 'AUDIT AI', icon: '🔍', tagline: 'Risk Intelligence', desc: 'Análisis autónomo de riesgos con IA avanzada' },
                  { id: 'ifrs', name: 'IFRS AI', icon: '📊', tagline: 'Compliance Engine', desc: 'Normalización contable automática' },
                  { id: 'excel', name: 'EXCEL AI', icon: '⚙️', tagline: 'Data Forge', desc: 'Integración y transformación de datos' },
                    ];

  return (
              <main className="relative w-full overflow-hidden bg-black">
                    <div className="fixed inset-0 z-0">
                            <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>div>
                            <div className="absolute top-1/3 right-0 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse" style={{animationDelay: '1s'}}></div>div>
                            <div className="absolute bottom-0 left-1/2 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl animate-pulse" style={{animationDelay: '0.5s'}}></div>div>
                    </div>div>
              
                    <section className="relative z-10 min-h-screen flex items-center justify-center px-4 pt-20">
                            <div className="w-full max-w-6xl text-center">
                                      <div className="mb-8 inline-block">
                                                  <div className="px-4 py-2 rounded-full border border-cyan-500/30 bg-cyan-500/5 backdrop-blur-sm">
                                                                <p className="text-cyan-400 text-sm font-semibold tracking-widest">⚡ AI INTELLIGENCE PLATFORM</p>p>
                                                  </div>div>
                                      </div>div>
                            
                                      <h1 className="text-7xl md:text-8xl font-black tracking-tighter mb-6">
                                                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">SKYNET</span>span>
                                      </h1>h1>
                                      <div className="h-1 w-32 bg-gradient-to-r from-cyan-400 to-purple-400 mx-auto rounded-full mb-8"></div>div>
                            
                                      <p className="text-xl md:text-2xl text-gray-300 font-light max-w-3xl mx-auto leading-relaxed mb-10">
                                                  Plataforma empresarial de IA para auditoría, cumplimiento y análisis financiero de próxima generación
                                      </p>p>
                            
                                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                  <button className="group relative px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-bold rounded-lg overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
                                                                <span className="relative z-10">Comenzar Ahora</span>span>
                                                  </button>button>
                                                  <button className="px-8 py-4 border-2 border-cyan-400/50 text-cyan-400 font-bold rounded-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                                                                Explorar
                                                  </button>button>
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>div>
              
                    <section className="relative z-10 py-20 px-4">
                            <div className="max-w-6xl mx-auto">
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
                                              {[
                      { value: '3M+', label: 'Transacciones', icon: '📈' },
                      { value: '<100ms', label: 'Respuesta', icon: '⚡' },
                      { value: '99.99%', label: 'Uptime', icon: '🛡️' }
                                  ].map((stat, i) => (
                                                        <div key={i} className="group text-center">
                                                                        <div className="text-6xl font-black mb-3 text-transparent bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text">{stat.icon} {stat.value}</div>div>
                                                                        <p className="text-gray-400 text-lg">{stat.label}</p>p>
                                                        </div>div>
                                                      ))}
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>div>
              
                    <section className="relative z-10 py-24 px-4">
                            <div className="max-w-6xl mx-auto">
                                      <h2 className="text-6xl font-black mb-16 text-center">
                                                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Agentes Inteligentes</span>span>
                                      </h2>h2>
                            
                                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                              {bots.map((bot) => (
                                    <Link key={bot.id} href={`/tools/${bot.id}`}>
                                                    <div className="group relative h-full cursor-pointer">
                                                                      <div className="absolute -inset-0.5 bg-gradient-to-r from-cyan-600 to-blue-600 rounded-2xl opacity-0 group-hover:opacity-75 blur transition-opacity duration-500"></div>div>
                                                                      <div className="relative h-full px-8 py-10 bg-gradient-to-b from-gray-900/50 to-black/50 rounded-2xl border border-cyan-500/20 backdrop-blur-xl overflow-hidden transition-all duration-300 group-hover:border-cyan-400/60">
                                                                                          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>div>
                                                                                          <div className="text-6xl mb-6 group-hover:scale-110 transition-transform duration-300">{bot.icon}</div>div>
                                                                                          <h3 className="text-2xl font-black mb-2 text-cyan-400 group-hover:text-cyan-300 transition-colors">{bot.name}</h3>h3>
                                                                                          <p className="text-sm uppercase tracking-widest text-gray-500 mb-4">{bot.tagline}</p>p>
                                                                                          <p className="text-gray-300 text-base leading-relaxed mb-6">{bot.desc}</p>p>
                                                                                          <div className="flex items-center text-cyan-400 font-semibold opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                                                                                                <span>Acceder</span>span>
                                                                                                                <span className="ml-2">→</span>span>
                                                                                                  </div>div>
                                                                      </div>div>
                                                    </div>div>
                                    </Link>Link>
                                  ))}
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>div>
              
                    <section className="relative z-10 py-24 px-4">
                            <div className="max-w-6xl mx-auto">
                                      <h2 className="text-6xl font-black mb-16 text-center">
                                                  <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">Capacidades</span>span>
                                      </h2>h2>
                                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                              {[
                      { icon: '⚡', title: 'Velocidad Extrema', desc: 'Procesamiento <100ms' },
                      { icon: '🔒', title: 'Seguridad Enterprise', desc: 'E2E y cumplimiento normativo' },
                      { icon: '📊', title: 'Analytics Avanzado', desc: 'Reportes y visualizaciones' },
                      { icon: '🔄', title: 'Integración Nativa', desc: 'SAP, Oracle, Salesforce' },
                      { icon: '🎯', title: 'Precisión 99.99%', desc: 'IFRS, GAAP conforme' },
                      { icon: '🚀', title: 'Escalabilidad', desc: 'Startups a Fortune 500' }
                                  ].map((feature, i) => (
                                                        <div key={i} className="group p-8 rounded-2xl border border-cyan-500/20 bg-gradient-to-br from-gray-900/30 to-black/30 backdrop-blur-sm hover:border-cyan-400/60 transition-all duration-300">
                                                                        <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>div>
                                                                        <h3 className="text-xl font-black mb-3 text-cyan-400">{feature.title}</h3>h3>
                                                                        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{feature.desc}</p>p>
                                                        </div>div>
                                                      ))}
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <div className="relative z-10 h-px bg-gradient-to-r from-transparent via-cyan-500/30 to-transparent"></div>div>
              
                    <section className="relative z-10 py-24 px-4">
                            <div className="max-w-4xl mx-auto text-center">
                                      <h2 className="text-6xl font-black mb-6">
                                                  <span className="bg-gradient-to-r from-cyan-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">Transforma tu Negocio</span>span>
                                      </h2>h2>
                                      <p className="text-xl text-gray-400 mb-10 max-w-2xl mx-auto">
                                                  Automatiza operaciones financieras con SKYNET Intelligence
                                      </p>p>
                                      <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                                  <button className="px-10 py-5 bg-gradient-to-r from-cyan-500 to-blue-500 text-black font-black rounded-lg text-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl hover:shadow-cyan-500/50">
                                                                Solicitar Demo
                                                  </button>button>
                                                  <button className="px-10 py-5 border-2 border-cyan-400/50 text-cyan-400 font-black rounded-lg text-lg hover:border-cyan-400 hover:bg-cyan-400/10 transition-all duration-300">
                                                                Documentación
                                                  </button>button>
                                      </div>div>
                            </div>div>
                    </section>section>
              
                    <footer className="relative z-10 border-t border-cyan-500/20 py-12 px-4 mt-24">
                            <div className="max-w-6xl mx-auto">
                                      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-8">
                                                  <div>
                                                                <h4 className="text-white font-black mb-4">SKYNET</h4>h4>
                                                                <p className="text-gray-500 text-sm">IA para finanzas del futuro</p>p>
                                                  </div>div>
                                                  <div>
                                                                <h5 className="text-cyan-400 font-bold mb-4">Producto</h5>h5>
                                                                <ul className="space-y-2 text-gray-500 text-sm">
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Características</a>a></li>li>
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Precios</a>a></li>li>
                                                                </ul>ul>
                                                  </div>div>
                                                  <div>
                                                                <h5 className="text-cyan-400 font-bold mb-4">Empresa</h5>h5>
                                                                <ul className="space-y-2 text-gray-500 text-sm">
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">About</a>a></li>li>
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Blog</a>a></li>li>
                                                                </ul>ul>
                                                  </div>div>
                                                  <div>
                                                                <h5 className="text-cyan-400 font-bold mb-4">Legal</h5>h5>
                                                                <ul className="space-y-2 text-gray-500 text-sm">
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Privacidad</a>a></li>li>
                                                                                <li><a href="#" className="hover:text-cyan-400 transition-colors">Términos</a>a></li>li>
                                                                </ul>ul>
                                                  </div>div>
                                      </div>div>
                                      <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-600 text-sm">
                                                  <p>2026 SKYNET. Intelligence for the Future.</p>p>
                                      </div>div>
                            </div>div>
                    </footer>footer>
              </main>main>
            );
}</main>
