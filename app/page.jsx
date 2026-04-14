'use client';

import { useEffect, useState } from 'react';

export default function Home() {
      const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
          setIsVisible(true);
  }, []);

  return (
          <main className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-black overflow-hidden">
              {/* Animated Background Elements */}
                <div className="fixed inset-0 pointer-events-none">
                        <div className="absolute top-20 left-10 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl animate-pulse"></div>div>
                        <div className="absolute bottom-20 right-10 w-80 h-80 bg-orange-600/15 rounded-full blur-3xl animate-pulse delay-1000"></div>div>
                        <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-orange-400/10 rounded-full blur-3xl"></div>div>
                </div>div>
          
              {/* Content */}
                <div className="relative z-10">
                    {/* Navigation Bar */}
                        <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
                                  <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                                              <div className="text-3xl font-black bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent font-['Space_Grotesk']">
                                                            SKYNET
                                              </div>div>
                                              <div className="hidden md:flex gap-8 text-sm text-gray-300">
                                                            <a href="#features" className="hover:text-orange-400 transition-colors">Features</a>a>
                                                            <a href="#audit" className="hover:text-orange-400 transition-colors">Audit</a>a>
                                                            <a href="#docs" className="hover:text-orange-400 transition-colors">Docs</a>a>
                                              </div>div>
                                  </div>div>
                        </nav>nav>
                
                    {/* Hero Section */}
                        <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
                                  <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                              <div className="text-center space-y-6 mb-12">
                                                            <div className="inline-block">
                                                                            <span className="px-4 py-2 rounded-full bg-gradient-to-r from-orange-500/30 to-red-500/30 border border-orange-500/50 text-orange-300 text-sm font-medium font-['Space_Grotesk']">
                                                                                              AI for Finance • Audit • Controls
                                                                            </span>span>
                                                            </div>div>
                                              
                                                            <h1 className="text-6xl md:text-8xl font-black text-white leading-tight font-['Space_Grotesk']">
                                                                            AI that understands
                                                                            <span className="block bg-gradient-to-r from-orange-400 via-orange-500 to-red-500 bg-clip-text text-transparent">
                                                                                              Finance & Decisions
                                                                            </span>span>
                                                            </h1>h1>
                                              
                                                            <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed font-['Inter']">
                                                                            Enterprise-grade AI system designed to turn financial workflows into structured, actionable outputs.
                                                            </p>p>
                                              
                                                            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                                                            <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-orange-500 to-orange-600 text-white font-bold hover:shadow-xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 font-['Space_Grotesk']">
                                                                                              Explore Skynet
                                                                            </button>button>
                                                                            <button className="px-8 py-4 rounded-lg border-2 border-orange-500/50 text-orange-400 font-bold hover:bg-orange-500/10 transition-all font-['Space_Grotesk']">
                                                                                              Learn More
                                                                            </button>button>
                                                            </div>div>
                                              </div>div>
                                  </div>div>
                        
                            {/* Features Grid */}
                                  <section id="features" className="mt-24 grid md:grid-cols-3 gap-8">
                                      {features.map((feature, index) => (
                            <div
                                                key={index}
                                                className={`group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-orange-500/30 hover:border-orange-500/80 transition-all duration-300 hover:shadow-lg hover:shadow-orange-500/20 transform hover:scale-105 ${
                                                                      isVisible ? 'opacity-100' : 'opacity-0'
                                                }`}
                                                style={{ transitionDelay: `${index * 100}ms` }}
                                              >
                                            <div className="text-4xl mb-4">{feature.icon}</div>div>
                                            <h3 className="text-lg font-bold text-white mb-2 font-['Space_Grotesk']">{feature.title}</h3>h3>
                                            <p className="text-gray-400 text-sm font-['Inter']">{feature.description}</p>p>
                            </div>div>
                          ))}
                                  </section>section>
                        
                            {/* Audit Section */}
                                  <section id="audit" className="mt-32 py-16">
                                              <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-orange-500/30 p-12 backdrop-blur-sm">
                                                            <h2 className="text-4xl font-black text-white mb-6 font-['Space_Grotesk']">
                                                                            Audit AI/Controls
                                                            </h2>h2>
                                                            <p className="text-gray-300 text-lg mb-8 max-w-2xl font-['Inter']">
                                                                            Identify risks and audit controls. Transform financial data into actionable intelligence.
                                                            </p>p>
                                                            <div className="grid md:grid-cols-2 gap-6">
                                                                {auditFeatures.map((item, idx) => (
                                <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-orange-500/20 hover:border-orange-500/60 transition-colors">
                                                    <p className="text-white font-bold font-['Space_Grotesk']">{item}</p>p>
                                </div>div>
                              ))}
                                                            </div>div>
                                              </div>div>
                                  </section>section>
                        
                            {/* CTA Section */}
                                  <section className="mt-32 text-center py-16">
                                              <h2 className="text-4xl font-black text-white mb-6 font-['Space_Grotesk']">
                                                            Ready to Deploy Skynet?
                                              </h2>h2>
                                              <button className="px-10 py-5 rounded-lg bg-gradient-to-r from-orange-500 to-red-600 text-white font-black text-lg hover:shadow-2xl hover:shadow-orange-500/50 transition-all transform hover:scale-105 font-['Space_Grotesk']">
                                                            Get Started Now
                                              </button>button>
                                  </section>section>
                        </section>section>
                
                    {/* Footer */}
                        <footer className="border-t border-orange-500/20 mt-32 py-12 px-4">
                                  <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm font-['Inter']">
                                              <p>© 2026 Skynet. Powered by Intelligence.</p>p>
                                  </div>div>
                        </footer>footer>
                </div>div>
          </main>main>
        );
}

const features = [
    {
            icon: '🤖',
            title: 'AI Intelligence',
            description: 'Advanced ML models trained on financial data for precise analysis.'
    },
    {
            icon: '📊',
            title: 'Real-time Analytics',
            description: 'Dashboard with real-time data visualization and reporting.'
    },
    {
            icon: '🔒',
            title: 'Enterprise Security',
            description: 'Bank-level security and compliance with all major standards.'
    },
    {
            icon: '⚡',
            title: 'Lightning Fast',
            description: 'Process millions of records in seconds with optimization.'
    },
    {
            icon: '🎯',
            title: 'Precision Controls',
            description: 'Automated control testing and risk identification.'
    },
    {
            icon: '🚀',
            title: 'Scalable Solution',
            description: 'Grows with your organization from startup to enterprise.'
    }
    ];

const auditFeatures = [
      '✓ Automated control testing and validation',
      '✓ Risk scoring and prioritization',
      '✓ Compliance monitoring dashboards',
      '✓ Exception reporting and alerts',
      '✓ Continuous audit capabilities',
      '✓ Integration with accounting systems'
    ];</main>
