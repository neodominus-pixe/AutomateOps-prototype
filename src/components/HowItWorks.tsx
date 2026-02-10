import { Map, Search, Wrench, Handshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const steps = [
  {
    number: '01',
    icon: Map,
    title: 'Understand Your Current System',
    description:
      'We map out how work actually flows through your business—not how you think it should work.',
  },
  {
    number: '02',
    icon: Search,
    title: 'Identify Bottlenecks and Waste',
    description:
      'We pinpoint where time gets lost, where data gets stuck, and where manual handoffs create delays.',
  },
  {
    number: '03',
    icon: Wrench,
    title: 'Design Practical Automations',
    description:
      'We create solutions that fit your existing operations and can be implemented without disrupting your business.',
  },
  {
    number: '04',
    icon: Handshake,
    title: 'Decide Together What Makes Sense',
    description:
      'You get clear recommendations and decide what to implement, when, and how much to invest.',
  },
];

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 sm:py-32 bg-charcoal-900">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-3xl sm:text-[32px] font-semibold text-white text-center mb-4">
          How It Works
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-16 leading-relaxed">
          A clear, structured approach from understanding to implementation.
        </p>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="group relative bg-charcoal-700/30 border border-white/[0.06] rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:bg-charcoal-700/50 hover:border-white/[0.1]"
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="flex items-center gap-4 mb-5">
                  <span className="text-accent/30 text-sm font-mono font-semibold tracking-wider">
                    {step.number}
                  </span>
                  <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/15">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
