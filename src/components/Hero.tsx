import { ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Hero() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const opacity = Math.max(0, 1 - scrollY / 600);
  const parallaxY = scrollY * 0.3;

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Mesh Gradient Background */}
      <div className="absolute inset-0 z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] bg-accent/20 rounded-full blur-[120px] animate-mesh" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[60%] h-[60%] bg-teal-500/10 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-5s' }} />
        <div className="absolute top-[20%] right-[10%] w-[40%] h-[40%] bg-purple-500/10 rounded-full blur-[120px] animate-mesh" style={{ animationDelay: '-10s' }} />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute top-[15%] left-[10%] w-64 h-64 border border-white/5 rounded-full animate-float" />
        <div className="absolute bottom-[20%] right-[15%] w-96 h-96 border border-white/5 rounded-full animate-float" style={{ animationDelay: '-3s', animationDuration: '15s' }} />
        <div className="absolute top-[40%] right-[25%] w-32 h-32 border border-white/5 rotate-45 animate-float" style={{ animationDelay: '-7s', animationDuration: '12s' }} />
      </div>

      {/* Background Grid */}
      <div 
        className="absolute inset-0 opacity-[0.06] z-0" 
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
          backgroundSize: '40px 40px',
          transform: `translateY(${scrollY * 0.1}px)`,
        }} 
      />

      <div 
        className="relative z-10 max-w-content mx-auto px-10 text-center"
        style={{ opacity, transform: `translateY(${parallaxY}px)` }}
      >
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] tracking-tight max-w-4xl mx-auto drop-shadow-2xl">
            Your operations run on manual work, disconnected tools, and{' '}
            <span className="text-gradient inline-block">wasted hours.</span>
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
            AI isn't magic—it's a system. We build practical automations that eliminate friction and connect your workflows so your team can focus on what actually matters.
          </p>

          <div className="mt-12">
            <a
              href="#audit"
              className="group relative inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(74,158,255,0.4)] animate-breathe"
            >
              Request an Automation Audit
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div 
        className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce-slow"
        style={{ opacity: Math.max(0, 1 - scrollY / 200) }}
      >
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
