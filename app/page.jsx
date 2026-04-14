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
                      <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/20 rounded-full blur-3xl animate-pulse"></div>div>
                      <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>div>
                      <div className="absolute top-1/2 left-1/2 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl"></div>div>
              </div>div>
        
          {/* Content */}
              <div className="relative z-10">
                {/* Navigation Bar */}
                      <nav className="backdrop-blur-md bg-white/5 border-b border-white/10 sticky top-0 z-50">
                                <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
                                            <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                                                          Skynet Intelligence
                                            </div>div>
                                            <div className="hidden md:flex gap-8 text-sm text-gray-300">
                                                          <a href="#features" className="hover:text-white transition-colors">Features</a>a>
                                                          <a href="#audit" className="hover:text-white transition-colors">Audit</a>a>
                                                          <a href="#pricing" className="hover:text-white transition-colors">Pricing</a>a>
                                            </div>div>
                                </div>div>
                      </nav>nav>
              
                {/* Hero Section */}
                      <section className="px-4 py-20 md:py-32 max-w-6xl mx-auto">
                                <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
                                            <div className="text-center space-y-6 mb-12">
                                                          <div className="inline-block">
                                                                          <span className="px-4 py-2 rounded-full bg-gradient-to-r from-blue-500/30 to-purple-500/30 border border-blue-500/50 text-blue-300 text-sm font-medium">
                                                                                            AI for Finance • Audit • Controls
                                                                          </span>span>
                                                          </div>div>
                                            
                                                          <h1 className="text-5xl md:text-7xl font-bold text-white leading-tight">
                                                                          AI that understands
                                                                          <span className="block bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                                                                                            Finance, Audit & Decisions
                                                                          </span>span>
                                                          </h1>h1>
                                            
                                                          <p className="text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
                                                                          Not another chatbot. A system designed to turn financial workflows into structured, actionable outputs.
                                                          </p>p>
                                            
                                                          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                                                                          <button className="px-8 py-4 rounded-lg bg-gradient-to-r from-blue-600 to-blue-500 text-white font-semibold hover:shadow-xl hover:shadow-blue-500/50 transition-all transform hover:scale-105">
                                                                                            Explore Systems
                                                                          </button>button>
                                                                          <button className="px-8 py-4 rounded-lg border border-white/20 text-white font-semibold hover:bg-white/5 transition-all">
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
                                          className={`group p-6 rounded-xl bg-gradient-to-br from-white/5 to-white/0 border border-white/10 hover:border-blue-500/50 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/20 transform hover:scale-105 ${
                                                              isVisible ? 'opacity-100' : 'opacity-0'
                                          }`}
                                          style={{ transitionDelay: `${index * 100}ms` }}
                                        >
                                        <div className="text-4xl mb-4">{feature.icon}</div>div>
                                        <h3 className="text-lg font-bold text-white mb-2">{feature.title}</h3>h3>
                                        <p className="text-gray-400 text-sm">{feature.description}</p>p>
                        </div>div>
                      ))}
                                </section>section>
                      
                        {/* Audit Section */}
                                <section id="audit" className="mt-32 py-16">
                                            <div className="rounded-2xl bg-gradient-to-br from-slate-800/50 to-slate-900/50 border border-white/10 p-12 backdrop-blur-sm">
                                                          <h2 className="text-4xl font-bold text-white mb-6">
                                                                          Audit AI/Controls
                                                          </h2>h2>
                                                          <p className="text-gray-300 text-lg mb-8 max-w-2xl">
                                                                          Identify risks and audit controls. Turn financial data into actionable intelligence.
                                                          </p>p>
                                                          <div className="grid md:grid-cols-2 gap-6">
                                                            {auditFeatures.map((item, idx) => (
                            <div key={idx} className="bg-slate-800/50 rounded-lg p-4 border border-white/5 hover:border-purple-500/50 transition-colors">
                                                <p className="text-white font-semibold">{item}</p>p>
                            </div>div>
                          ))}
                                                          </div>div>
                                            </div>div>
                                </section>section>
                      
                        {/* CTA Section */}
                                <section className="mt-32 text-center py-16">
                                            <h2 className="text-4xl font-bold text-white mb-6">
                                                          Ready to Transform Your Finance Operations?
                                            </h2>h2>
                                            <button className="px-10 py-5 rounded-lg bg-gradient-to-r from-purple-600 to-pink-600 text-white font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all transform hover:scale-105">
                                                          Get Started Now
                                            </button>button>
                                </section>section>
                      </section>section>
              
                {/* Footer */}
                      <footer className="border-t border-white/10 mt-32 py-12 px-4">
                                <div className="max-w-6xl mx-auto text-center text-gray-400 text-sm">
                                            <p>© 2026 Skynet Intelligence. All rights reserved.</p>p>
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
        description: 'Advanced ML models trained on financial data for precise analysis and insights.'
  },
  {
        icon: '📊',
        title: 'Real-time Analytics',
        description: 'Dashboard with real-time data visualization and reporting capabilities.'
  },
  {
        icon: '🔒',
        title: 'Enterprise Security',
        description: 'Bank-level security and compliance with all major standards.'
  },
  {
        icon: '⚡',
        title: 'Lightning Fast',
        description: 'Process millions of records in seconds with our optimized infrastructure.'
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
