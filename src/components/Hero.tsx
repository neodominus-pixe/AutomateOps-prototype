import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-charcoal-900 via-charcoal-900 to-charcoal-800" />
      <div className="absolute inset-0 opacity-[0.03]" style={{
        backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)',
        backgroundSize: '40px 40px',
      }} />

      <div className="relative z-10 max-w-content mx-auto px-10 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl lg:text-[48px] font-bold text-white leading-[1.15] tracking-tight max-w-4xl mx-auto">
            Your operations run on manual work, disconnected tools, and wasted hours.
          </h1>

          <p className="mt-8 text-lg sm:text-xl text-muted max-w-2xl mx-auto leading-relaxed font-light">
            AI isn't magic—it's a system. We build practical automations that eliminate friction and connect your workflows so your team can focus on what actually matters.
          </p>

          <div className="mt-12">
            <a
              href="#audit"
              className="group inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20"
            >
              Request an Automation Audit
              <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce-slow">
        <div className="w-6 h-10 border-2 border-white/20 rounded-full flex items-start justify-center p-1.5">
          <div className="w-1.5 h-3 bg-white/40 rounded-full animate-scroll-indicator" />
        </div>
      </div>
    </section>
  );
}
