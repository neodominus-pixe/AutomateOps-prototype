import { ArrowRight, FileText, Compass, ListChecks, ShieldCheck } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const valuePoints = [
  { icon: ShieldCheck, text: 'No obligation or sales pressure' },
  { icon: FileText, text: 'Clear documentation of findings' },
  { icon: ListChecks, text: 'Practical next steps you can implement' },
  { icon: Compass, text: "Honest assessment of what's worth automating" },
];

export default function LeadMagnet() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="audit" className="py-28 sm:py-40 bg-charcoal-900 relative overflow-hidden">
      {/* Dramatic Background Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[120px] animate-mesh" />

      <div
        ref={ref}
        className={`relative z-10 max-w-4xl mx-auto px-6 sm:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="glass rounded-[32px] p-8 sm:p-16 text-center border-accent/20">
          <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full mb-8 border border-accent/20">
            <Compass className="w-4 h-4" />
            Free Offer
          </div>

          <h2 className="text-3xl sm:text-[42px] font-bold text-white mb-6 tracking-tight">
            Free Automation Audit
          </h2>
          <p className="text-muted max-w-2xl mx-auto mb-12 leading-relaxed text-lg sm:text-xl font-light">
            We'll review your current workflows and identify specific automation
            opportunities. You'll get actionable recommendations whether you work
            with us or not.
          </p>

          <div className="grid sm:grid-cols-2 gap-6 mb-12 text-left max-w-2xl mx-auto">
            {valuePoints.map((point) => {
              const Icon = point.icon;
              return (
                <div key={point.text} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                    <Icon className="w-3.5 h-3.5 text-accent" />
                  </div>
                  <span className="text-muted/90 text-sm sm:text-base leading-relaxed">
                    {point.text}
                  </span>
                </div>
              );
            })}
          </div>

          <a
            href="#audit"
            className="group relative inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-10 py-5 rounded-xl transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(74,158,255,0.4)] animate-breathe"
          >
            Request Your Free Audit
            <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
        </div>
      </div>
    </section>
  );
}
