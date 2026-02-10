import { ArrowRight } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

export default function FinalCTA() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 sm:py-36 bg-charcoal-900 relative overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal-900 via-transparent to-charcoal-900" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-accent/[0.03] blur-3xl" />
      </div>

      <div
        ref={ref}
        className={`relative z-10 max-w-content mx-auto px-6 sm:px-10 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white leading-tight mb-6 max-w-2xl mx-auto">
          Ready to see what's possible with your current operations?
        </h2>
        <p className="text-muted text-lg mb-12 max-w-lg mx-auto leading-relaxed">
          Start with a free audit. No commitments, no pressure — just clarity.
        </p>

        <a
          href="#audit"
          className="group inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-10 py-5 rounded-lg transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-xl hover:shadow-accent/25"
        >
          Request Your Free Automation Audit
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
