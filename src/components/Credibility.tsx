import { Clock, Zap, Building2 } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const stats = [
  {
    icon: Clock,
    value: 8,
    suffix: '+',
    label: 'Years building systems and analyzing data flows',
  },
  {
    icon: Zap,
    value: 200,
    suffix: '+',
    label: 'Automations running in production environments',
  },
  {
    icon: Building2,
    value: 12,
    suffix: '',
    prefix: 'Across ',
    label: 'Industries from manufacturing to professional services',
  },
];

function CountUp({ value, isVisible, prefix = '', suffix = '' }: { value: number, isVisible: boolean, prefix?: string, suffix?: string }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = value;
    if (start === end) return;

    let totalMiliseconds = 2000;
    let incrementTime = (totalMiliseconds / end);

    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);

    return () => clearInterval(timer);
  }, [isVisible, value]);

  return <>{prefix}{count}{suffix}</>;
}

export default function Credibility() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-28 sm:py-40 bg-charcoal-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/5 to-transparent" />

      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4 tracking-tight">
            Proven Track Record
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full mb-6" />
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            Real experience building systems that work in the real world.
          </p>
        </div>

        <div className="grid sm:grid-cols-3 gap-6 lg:gap-8">
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={stat.label}
                className="glass relative text-center p-8 sm:p-12 rounded-[24px] transition-all duration-700 hover:scale-[1.02] hover:border-accent/30"
                style={{ transitionDelay: isVisible ? `${i * 150}ms` : '0ms' }}
              >
                <div className="w-14 h-14 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-8 border border-accent/20">
                  <Icon className="w-7 h-7 text-accent" />
                </div>
                <div className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
                  <CountUp value={stat.value} isVisible={isVisible} prefix={stat.prefix} suffix={stat.suffix} />
                </div>
                <p className="text-muted/80 leading-relaxed text-sm sm:text-base font-medium uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            );
          })}
        </div>

        <div className="mt-20 flex flex-wrap items-center justify-center gap-10 sm:gap-20">
          {['Manufacturing', 'Finance', 'Healthcare', 'Professional Services'].map(
            (industry, i) => (
              <span
                key={industry}
                className={`text-sm sm:text-base font-semibold text-white/20 tracking-[0.2em] uppercase transition-all duration-1000 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                  }`}
                style={{ transitionDelay: isVisible ? `${(i * 100) + 600}ms` : '0ms' }}
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
