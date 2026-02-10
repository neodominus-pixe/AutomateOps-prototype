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
    <section id="audit" className="py-28 sm:py-32 bg-charcoal-900 relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-accent/[0.02] to-transparent" />

      <div
        ref={ref}
        className={`relative z-10 max-w-3xl mx-auto px-6 sm:px-10 text-center transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="inline-flex items-center gap-2 bg-accent/10 text-accent text-sm font-medium px-4 py-2 rounded-full mb-8">
          <Compass className="w-4 h-4" />
          Free Offer
        </div>

        <h2 className="text-3xl sm:text-[32px] font-semibold text-white mb-4">
          Free Automation Audit
        </h2>
        <p className="text-muted max-w-xl mx-auto mb-12 leading-relaxed text-lg">
          We'll review your current workflows and identify specific automation
          opportunities. You'll get actionable recommendations whether you work
          with us or not.
        </p>

        <div className="grid sm:grid-cols-2 gap-4 mb-12 text-left max-w-lg mx-auto">
          {valuePoints.map((point) => {
            const Icon = point.icon;
            return (
              <div key={point.text} className="flex items-start gap-3">
                <Icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                <span className="text-muted text-sm leading-relaxed">
                  {point.text}
                </span>
              </div>
            );
          })}
        </div>

        <a
          href="#audit"
          className="group inline-flex items-center gap-3 bg-accent text-white font-medium text-lg px-8 py-4 rounded-lg transition-all duration-300 hover:bg-accent-hover hover:scale-[1.02] hover:shadow-lg hover:shadow-accent/20"
        >
          Request Your Free Audit
          <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </section>
  );
}
