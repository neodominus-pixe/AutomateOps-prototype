import { Check, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

const forYou = [
  'Your business has real operations with measurable workflows',
  'Your team spends hours on repetitive manual tasks',
  'You want to understand automation opportunities before making decisions',
  "You're looking for practical solutions, not experimental technology",
];

const notForYou = [
  "You're expecting magic buttons that solve everything instantly",
  "You're running hobby projects or early-stage experiments",
  "You want quick fixes without understanding the underlying systems",
  "You're not ready to examine how your current processes actually work",
];

export default function WhoItsFor() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="py-28 sm:py-32 bg-charcoal-800">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <div className="bg-charcoal-700/50 border border-white/[0.06] rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-[28px] font-semibold text-white mb-8">
              This Is For You If...
            </h3>
            <ul className="space-y-5">
              {forYou.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-accent/15 flex items-center justify-center mt-0.5">
                    <Check className="w-3.5 h-3.5 text-accent" />
                  </span>
                  <span className="text-muted leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-charcoal-700/50 border border-white/[0.06] rounded-2xl p-8 sm:p-10">
            <h3 className="text-2xl sm:text-[28px] font-semibold text-white mb-8">
              This Isn't For You If...
            </h3>
            <ul className="space-y-5">
              {notForYou.map((item) => (
                <li key={item} className="flex items-start gap-4">
                  <span className="flex-shrink-0 w-6 h-6 rounded-full bg-white/[0.06] flex items-center justify-center mt-0.5">
                    <X className="w-3.5 h-3.5 text-muted" />
                  </span>
                  <span className="text-muted/70 leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
