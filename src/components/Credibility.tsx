import { Clock, Zap, Building2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const stats = [
  {
    icon: Clock,
    value: '8+',
    label: 'Years building systems and analyzing data flows',
  },
  {
    icon: Zap,
    value: '200+',
    label: 'Automations running in production environments',
  },
  {
    icon: Building2,
    value: 'Multi-Industry',
    label: 'From manufacturing to professional services',
  },
];

export default function Credibility() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 sm:py-32 bg-charcoal-800">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-3xl sm:text-[32px] font-semibold text-white text-center mb-4">
          Proven Track Record
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-16 leading-relaxed">
          Real experience building systems that work in the real world.
        </p>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="text-center p-8 sm:p-10 rounded-2xl bg-charcoal-700/30 border border-white/[0.06] transition-all duration-500 hover:border-white/[0.1]"
                style={{ transitionDelay: isVisible ? `${i * 120}ms` : '0ms' }}
              >
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mx-auto mb-6">
                  <Icon className="w-6 h-6 text-accent" />
                </div>
                <div className="text-3xl sm:text-4xl font-bold text-white mb-3">
                  {stat.value}
                </div>
                <p className="text-muted leading-relaxed text-sm sm:text-base">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-16 flex flex-wrap items-center justify-center gap-10 sm:gap-16 opacity-30">
          {['Manufacturing', 'Finance', 'Healthcare', 'Professional Services'].map(
            (industry) => (
              <span
                key={industry}
                className="text-sm sm:text-base font-medium text-white/60 tracking-wider uppercase"
              >
                {industry}
              </span>
            )
          )}
        </div>
      </div>
    </section>
  );
}
