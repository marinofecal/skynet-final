'use client';
import Link from 'next/link';

export default function Home() {
    const bots = [
      { id: 'audit', name: 'AUDIT AI', tagline: 'SENTINEL PROTOCOL', desc: 'Evaluación de riesgos autónoma y generación de procedimientos de auditoría' },
      { id: 'ifrs', name: 'IFRS AI', tagline: 'COMPLIANCE ENGINE', desc: 'Interpretación de normas contables y generación de informes de cumplimiento' },
      { id: 'excel', name: 'EXCEL AI', tagline: 'DATA FORGE', desc: 'Conversión lógica financiera con análisis predictivo' },
        ];

  return (
        <div className="min-h-screen bg-gradient-to-br from-blue-950 via-slate-900 to-black">
          {/* Hero Section */}
              <section className="hero">
                      <div className="container mx-auto px-4 py-20 md:py-32">
                                <div className="hero-content">
                                            <div className="mb-6">
                                                          <span className="badge">AI INTELLIGENCE FRAMEWORK</span>span>
                                            </div>div>
                                            <h1 className="text-5xl md:text-7xl font-bold mb-6">
                                                          <span className="text-white">SKYNET</span>span>
                                                          <br />
                                                          <span className="bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">Intelligence Framework</span>span>
                                            </h1>h1>
                                            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl leading-relaxed">
                                                          Automatización de última generación para auditoría, cumplimiento IFRS y análisis financiero con inteligencia artificial avanzada.
                                            </p>p>
                                            <div className="flex flex-wrap gap-4">
                                                          <button className="btn btn-primary btn-lg">Explorar Bots</button>button>
                                                          <button className="btn btn-secondary btn-lg">Documentación</button>button>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Stats Section */}
              <section className="py-16 border-t border-cyan-500/20">
                      <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                            <div className="text-center">
                                                          <div className="text-4xl font-bold text-cyan-400 mb-2">3</div>div>
                                                          <p className="text-gray-400">MÓDULOS INTELIGENTES</p>p>
                                            </div>div>
                                            <div className="text-center">
                                                          <div className="text-4xl font-bold text-cyan-400 mb-2">&lt;1s</div>div>
                                                          <p className="text-gray-400">TIEMPO DE RESPUESTA</p>p>
                                            </div>div>
                                            <div className="text-center">
                                                          <div className="text-4xl font-bold text-cyan-400 mb-2">24/7</div>div>
                                                          <p className="text-gray-400">DISPONIBILIDAD</p>p>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Bots Section */}
              <section className="py-20">
                      <div className="container mx-auto px-4">
                                <div className="mb-16">
                                            <h2 className="text-4xl md:text-5xl font-bold mb-4 text-white">
                                                          Intelligent Bots
                                            </h2>h2>
                                            <p className="text-xl text-gray-400">
                                                          Agentes de IA listos para producción en operaciones financieras del mundo real
                                            </p>p>
                                </div>div>
                      
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                                  {bots.map((bot) => (
                        <Link key={bot.id} href={`/tools/${bot.id}`}>
                                        <div className="card cursor-pointer group h-full">
                                                          <div className="card-header mb-6">
                                                                              <div className="w-12 h-12 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center text-2xl">
                                                                                                    🤖
                                                                              </div>div>
                                                                              <div>
                                                                                                    <h3 className="card-title text-2xl">{bot.name}</h3>h3>
                                                                                                    <p className="card-subtitle text-sm font-semibold text-cyan-400">{bot.tagline}</p>p>
                                                                              </div>div>
                                                          </div>div>
                                                          <p className="card-body mb-6 text-base">
                                                            {bot.desc}
                                                          </p>p>
                                                          <div className="flex items-center text-cyan-400 group-hover:text-cyan-300 transition-colors">
                                                                              <span className="font-semibold">Acceder</span>span>
                                                                              <span className="ml-2">→</span>span>
                                                          </div>div>
                                        </div>div>
                        </Link>Link>
                      ))}
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Features Section */}
              <section className="py-20 border-t border-cyan-500/20">
                      <div className="container mx-auto px-4">
                                <h2 className="text-4xl md:text-5xl font-bold mb-16 text-white">
                                            Características Principales
                                </h2>h2>
                                
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                                            <div>
                                                          <div className="flex items-start gap-4 mb-6">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">⚡</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Procesamiento Ultra-Rápido</h3>h3>
                                                                                            <p className="text-gray-400">Análisis y generación de reportes en menos de 1 segundo</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            
                                                          <div className="flex items-start gap-4 mb-6">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">🔒</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Seguridad Empresarial</h3>h3>
                                                                                            <p className="text-gray-400">Cifrado end-to-end y cumplimiento de regulaciones internacionales</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            
                                                          <div className="flex items-start gap-4">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">📊</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Analytics Avanzado</h3>h3>
                                                                                            <p className="text-gray-400">Visualizaciones interactivas y reportes predictivos</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            </div>div>
                                
                                            <div>
                                                          <div className="flex items-start gap-4 mb-6">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">🔄</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Integración Continua</h3>h3>
                                                                                            <p className="text-gray-400">Compatible con sistemas ERP y plataformas contables</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            
                                                          <div className="flex items-start gap-4 mb-6">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">🎯</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Precisión IFRS</h3>h3>
                                                                                            <p className="text-gray-400">100% conforme con normas internacionales de contabilidad</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            
                                                          <div className="flex items-start gap-4">
                                                                          <div className="w-12 h-12 bg-cyan-500/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                                                            <span className="text-cyan-400 font-bold">🚀</span>span>
                                                                          </div>div>
                                                                          <div>
                                                                                            <h3 className="text-xl font-bold mb-2">Escalable</h3>h3>
                                                                                            <p className="text-gray-400">Desde startups hasta empresas Fortune 500</p>p>
                                                                          </div>div>
                                                          </div>div>
                                            </div>div>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* CTA Section */}
              <section className="py-20 border-t border-cyan-500/20">
                      <div className="container mx-auto px-4 text-center">
                                <h2 className="text-4xl md:text-5xl font-bold mb-6 text-white">
                                            ¿Listo para transformar tu negocio?
                                </h2>h2>
                                <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
                                            Comienza a utilizar SKYNET Intelligence Framework hoy y experimenta la próxima generación de automatización financiera.
                                </p>p>
                                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                                            <button className="btn btn-primary btn-lg">Comenzar Ahora</button>button>
                                            <button className="btn btn-secondary btn-lg">Ver Demostración</button>button>
                                </div>div>
                      </div>div>
              </section>section>
        
          {/* Footer */}
              <footer className="border-t border-cyan-500/20 py-12 mt-20">
                      <div className="container mx-auto px-4">
                                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
                                            <div>
                                                          <h4 className="font-bold text-white mb-4">SKYNET</h4>h4>
                                                          <p className="text-gray-400 text-sm">Intelligence Framework para el futuro de las finanzas</p>p>
                                            </div>div>
                                            <div>
                                                          <h5 className="font-semibold text-white mb-4">Producto</h5>h5>
                                                          <ul className="space-y-2 text-gray-400 text-sm">
                                                                          <li><Link href="#" className="hover:text-cyan-400">Características</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Precios</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Documentación</Link>Link></li>li>
                                                          </ul>ul>
                                            </div>div>
                                            <div>
                                                          <h5 className="font-semibold text-white mb-4">Empresa</h5>h5>
                                                          <ul className="space-y-2 text-gray-400 text-sm">
                                                                          <li><Link href="#" className="hover:text-cyan-400">Acerca de</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Blog</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Contacto</Link>Link></li>li>
                                                          </ul>ul>
                                            </div>div>
                                            <div>
                                                          <h5 className="font-semibold text-white mb-4">Legal</h5>h5>
                                                          <ul className="space-y-2 text-gray-400 text-sm">
                                                                          <li><Link href="#" className="hover:text-cyan-400">Privacidad</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Términos</Link>Link></li>li>
                                                                          <li><Link href="#" className="hover:text-cyan-400">Cookies</Link>Link></li>li>
                                                          </ul>ul>
                                            </div>div>
                                </div>div>
                                <div className="border-t border-cyan-500/20 pt-8 text-center text-gray-500 text-sm">
                                            <p>&copy; 2026 SKYNET Intelligence Framework. Todos los derechos reservados.</p>p>
                                </div>div>
                      </div>div>
              </footer>footer>
        </div>div>
      );
}</div>
