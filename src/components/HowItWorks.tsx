import { Map, Search, Wrench, Handshake } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, MouseEvent } from 'react';

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

function StepCard({ step, index, isVisible }: { step: typeof steps[0], index: number, isVisible: boolean }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const Icon = step.icon;

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass group relative rounded-2xl p-8 sm:p-10 transition-all duration-700 hover:scale-[1.02] hover:border-accent/30 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}
      style={{ transitionDelay: isVisible ? `${index * 150}ms` : '0ms' }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 rounded-2xl"
        style={{
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74, 158, 255, 0.1), transparent 40%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      <div className="flex items-center gap-4 mb-5">
        <span className="text-accent/30 text-sm font-mono font-semibold tracking-wider">
          {step.number}
        </span>
        <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center transition-colors duration-300 group-hover:bg-accent/20">
          <Icon className="w-5 h-5 text-accent" />
        </div>
      </div>
      <h3 className="text-xl font-semibold text-white mb-3">
        {step.title}
      </h3>
      <p className="text-muted leading-relaxed">{step.description}</p>
    </div>
  );
}

export default function HowItWorks() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section className="relative py-28 sm:py-40 bg-charcoal-900 overflow-hidden">
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-blue-500/5 rounded-full blur-[120px]" />

      <div
        ref={ref}
        className="max-w-content mx-auto px-6 sm:px-10"
      >
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4 tracking-tight">
            How It Works
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full mb-6" />
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            A clear, structured approach from understanding to implementation.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {steps.map((step, i) => (
            <StepCard key={step.number} step={step} index={i} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
