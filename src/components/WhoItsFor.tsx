import { Check, X } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, MouseEvent } from 'react';

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

function Card({ children, type }: { children: React.ReactNode, type: 'positive' | 'negative' }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  const accentColor = type === 'positive' ? 'rgba(74, 158, 255, 0.4)' : 'rgba(239, 68, 68, 0.2)';
  const borderColor = type === 'positive' ? 'border-accent/20' : 'border-white/10';

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass relative overflow-hidden rounded-2xl p-8 sm:p-10 transition-all duration-500 hover:scale-[1.01] hover:border-white/20 ${borderColor} ${type === 'positive' ? 'border-l-2 border-l-accent/40' : 'border-l-2 border-l-white/20'}`}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, ${accentColor}, transparent 40%)`,
          opacity: isHovered ? 0.15 : 0
        }}
      />
      {children}
    </div>
  );
}

export default function WhoItsFor() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-28 sm:py-40 bg-charcoal-900 overflow-hidden">
      {/* Section Background Decoration */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute -top-24 left-[10%] w-64 h-64 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute -bottom-24 right-[10%] w-96 h-96 bg-purple-500/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="grid md:grid-cols-2 gap-8 lg:gap-16">
          <Card type="positive">
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
          </Card>

          <Card type="negative">
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
          </Card>
        </div>
      </div>
    </section>
  );
}
