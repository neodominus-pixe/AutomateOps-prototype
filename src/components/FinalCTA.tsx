import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 sm:py-48 bg-charcoal-900 relative overflow-hidden">
      {/* Dramatic Background Decoration */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/10 rounded-full blur-[160px] animate-mesh" />
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-content mx-auto px-6 sm:px-10 text-center transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <h2 className="text-3xl sm:text-5xl lg:text-[56px] font-bold text-white leading-[1.1] mb-8 max-w-3xl mx-auto tracking-tight">
          Ready to see what's possible with your operations?
        </h2>
        <p className="text-muted text-lg sm:text-xl mb-12 max-w-xl mx-auto leading-relaxed font-light">
          Start with a free audit. No commitments, no pressure — just clarity.
        </p>

        <a
          href="#audit"
          className="group relative inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(74,158,255,0.4)] animate-breathe"
        >
          Request Your Free Automation Audit
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
