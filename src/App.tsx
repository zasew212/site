/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { 
  ArrowRight, 
  CheckCircle2, 
  Github, 
  Layers, 
  Layout, 
  Zap, 
  Smartphone, 
  Globe, 
  ShieldCheck,
  Menu,
  X
} from "lucide-react";
import { useState } from "react";

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const features = [
    {
      title: "Lightning Fast",
      description: "Optimized for speed and performance right out of the box.",
      icon: <Zap className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Responsive Design",
      description: "Looks beautiful on every device, from mobile to desktop.",
      icon: <Smartphone className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Modern Stack",
      description: "Built with React 19, Tailwind CSS 4, and Framer Motion.",
      icon: <Layers className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Global Reach",
      description: "Ready for internationalization and worldwide deployment.",
      icon: <Globe className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Secure by Default",
      description: "Enterprise-grade security patterns for your peace of mind.",
      icon: <ShieldCheck className="w-6 h-6 text-emerald-500" />,
    },
    {
      title: "Customizable UI",
      description: "Easily adapt the design to match your brand identity.",
      icon: <Layout className="w-6 h-6 text-emerald-500" />,
    },
  ];

  return (
    <div className="min-h-screen font-sans">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 glass border-b border-zinc-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                <Layers className="text-white w-5 h-5" />
              </div>
              <span className="font-display font-bold text-xl tracking-tight">Showcase</span>
            </div>
            
            {/* Desktop Nav */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#features" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">Features</a>
              <a href="#about" className="text-sm font-medium text-zinc-600 hover:text-emerald-600 transition-colors">About</a>
              <button className="bg-zinc-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-zinc-800 transition-all shadow-md active:scale-95">
                Get Started
              </button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="p-2 text-zinc-600">
                {isMenuOpen ? <X /> : <Menu />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Nav */}
        {isMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="md:hidden glass border-b border-zinc-200 p-4 space-y-4"
          >
            <a href="#features" className="block text-base font-medium text-zinc-600" onClick={() => setIsMenuOpen(false)}>Features</a>
            <a href="#about" className="block text-base font-medium text-zinc-600" onClick={() => setIsMenuOpen(false)}>About</a>
            <button className="w-full bg-zinc-900 text-white px-5 py-3 rounded-xl text-base font-medium">
              Get Started
            </button>
          </motion.div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full -z-10">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-emerald-100/50 blur-[120px] rounded-full" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-blue-100/50 blur-[120px] rounded-full" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 text-emerald-700 text-xs font-bold uppercase tracking-wider mb-6 border border-emerald-100">
              <Zap className="w-3 h-3" /> New Version 2.0 is here
            </span>
            <h1 className="font-display text-5xl md:text-7xl font-bold text-zinc-900 tracking-tight mb-8 max-w-4xl mx-auto leading-[1.1]">
              Build your next big idea <span className="text-emerald-600">faster than ever</span>
            </h1>
            <p className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed">
              A premium template designed for developers who care about speed, 
              aesthetics, and user experience. Start your journey today.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <button className="w-full sm:w-auto bg-emerald-600 text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-emerald-700 transition-all shadow-lg shadow-emerald-200 active:scale-95 flex items-center justify-center gap-2">
                Start Building <ArrowRight className="w-5 h-5" />
              </button>
              <button className="w-full sm:w-auto bg-white text-zinc-900 border border-zinc-200 px-8 py-4 rounded-full text-lg font-semibold hover:bg-zinc-50 transition-all active:scale-95 flex items-center justify-center gap-2">
                <Github className="w-5 h-5" /> View on GitHub
              </button>
            </div>
          </motion.div>

          {/* Mockup Preview */}
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 relative max-w-5xl mx-auto"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-zinc-200 bg-white p-2">
              <img 
                src="https://picsum.photos/seed/app/1200/800" 
                alt="App Preview" 
                className="rounded-xl w-full h-auto"
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="font-display text-3xl md:text-5xl font-bold text-zinc-900 mb-6">
              Everything you need to succeed
            </h2>
            <p className="text-lg text-zinc-600">
              We've carefully crafted every detail to ensure your application 
              stands out in a crowded market.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -5 }}
                className="p-8 rounded-2xl border border-zinc-100 bg-zinc-50/50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all"
              >
                <div className="w-12 h-12 rounded-xl bg-white shadow-sm flex items-center justify-center mb-6 border border-zinc-100">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
                <p className="text-zinc-600 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof / Stats */}
      <section className="py-20 bg-zinc-900 text-white overflow-hidden relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2">10k+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Active Users</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2">99.9%</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Uptime</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2">24/7</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Support</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold font-display mb-2">150+</div>
              <div className="text-zinc-400 text-sm uppercase tracking-widest font-semibold">Templates</div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-emerald-600 rounded-3xl p-8 md:p-16 text-center text-white relative overflow-hidden shadow-2xl shadow-emerald-200">
            <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 blur-3xl rounded-full -mr-32 -mt-32" />
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-black/10 blur-3xl rounded-full -ml-32 -mb-32" />
            
            <h2 className="font-display text-3xl md:text-5xl font-bold mb-8 relative z-10">
              Ready to transform your workflow?
            </h2>
            <p className="text-emerald-50 text-lg mb-10 max-w-2xl mx-auto relative z-10">
              Join thousands of developers who are already building the future with Showcase.
              No credit card required.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 relative z-10">
              <button className="w-full sm:w-auto bg-white text-emerald-600 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-50 transition-all shadow-lg active:scale-95">
                Get Started Now
              </button>
              <button className="w-full sm:w-auto bg-emerald-700 text-white border border-emerald-500/30 px-8 py-4 rounded-full text-lg font-bold hover:bg-emerald-800 transition-all active:scale-95">
                Contact Sales
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-50 border-t border-zinc-200 pt-20 pb-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
            <div className="col-span-2">
              <div className="flex items-center gap-2 mb-6">
                <div className="w-8 h-8 bg-emerald-500 rounded-lg flex items-center justify-center">
                  <Layers className="text-white w-5 h-5" />
                </div>
                <span className="font-display font-bold text-xl tracking-tight">Showcase</span>
              </div>
              <p className="text-zinc-500 max-w-xs mb-6">
                Making the web a more beautiful place, one component at a time.
              </p>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-300 transition-colors cursor-pointer">
                  <Github className="w-5 h-5" />
                </div>
                <div className="w-10 h-10 rounded-full bg-zinc-200 flex items-center justify-center text-zinc-600 hover:bg-zinc-300 transition-colors cursor-pointer">
                  <Globe className="w-5 h-5" />
                </div>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Product</h4>
              <ul className="space-y-4 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Features</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Integrations</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Pricing</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Changelog</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Company</h4>
              <ul className="space-y-4 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">About Us</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Careers</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Blog</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Contact</a></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-zinc-900 mb-6 uppercase text-xs tracking-widest">Legal</h4>
              <ul className="space-y-4 text-zinc-600 text-sm">
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Privacy Policy</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Terms of Service</a></li>
                <li><a href="#" className="hover:text-emerald-600 transition-colors">Cookie Policy</a></li>
              </ul>
            </div>
          </div>
          
          <div className="pt-8 border-t border-zinc-200 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-zinc-500 text-sm">
              © 2026 Showcase Inc. All rights reserved.
            </p>
            <div className="flex items-center gap-2 text-zinc-400 text-sm">
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
              System Status: All systems operational
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
