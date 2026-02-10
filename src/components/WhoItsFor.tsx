import { Check, X, Code, Cpu, Database, Share2, Terminal } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useState, MouseEvent, useEffect } from 'react';

const forYou = [
  'Measurable operational workflows',
  'Repetitive manual team tasks',
  'Practical ROI-driven automation',
  'Process-first technical implementation',
];

const notForYou = [
  'Instant "magic button" expectations',
  'Hobby projects / early-stage experiments',
  'Quick fixes without system understanding',
  'Resistance to process examination',
];

const integrationIcons = [
  { icon: Cpu, name: 'OpenAI' },
  { icon: Share2, name: 'Zapier' },
  { icon: Database, name: 'Airtable' },
  { icon: Terminal, name: 'Slack' },
];

function BentoCard({ children, className, delay = 0 }: { children: React.ReactNode, className: string, delay?: number }) {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className={`glass relative overflow-hidden rounded-3xl p-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
        } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-500"
        style={{
          background: `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74, 158, 255, 0.15), transparent 40%)`,
          opacity: isHovered ? 1 : 0
        }}
      />
      {children}
    </div>
  );
}

export default function WhoItsFor() {
  const [offset, setOffset] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setOffset((prev) => (prev + 1) % 100);
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative py-28 sm:py-40 bg-charcoal-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="max-w-content mx-auto px-6 sm:px-10">
        <div className="text-center mb-16">
          <div className="inline-block px-3 py-1 rounded-full border border-accent/20 bg-accent/5 mb-4">
            <span className="text-xs font-mono font-medium text-accent tracking-[0.2em] uppercase">
              Target Profile // Selection
            </span>
          </div>
          <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4 tracking-tight">
            Who This Is For
          </h2>
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            We work with businesses that value technical precision over hype.
          </p>
        </div>

        <div className="grid grid-cols-12 gap-6 auto-rows-[minmax(180px,_auto)]">
          {/* Primary Tile (Large) */}
          <BentoCard className="col-span-12 lg:col-span-8 row-span-2 flex flex-col justify-between" delay={0}>
            <div>
              <div className="w-12 h-12 rounded-2xl bg-accent/10 flex items-center justify-center mb-6 border border-accent/20">
                <Check className="w-6 h-6 text-accent" />
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-6">
                Engineered for Growth
              </h3>
              <p className="text-muted text-lg mb-8 max-w-lg">
                Your business is ready for automation when your operations are stable enough to be optimized, but complex enough to require a system.
              </p>
              <ul className="grid sm:grid-cols-2 gap-4">
                {forYou.map((item) => (
                  <li key={item} className="flex items-center gap-3">
                    <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-accent" />
                    </div>
                    <span className="text-sm text-white/80 font-medium">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-12 h-px bg-gradient-to-r from-accent/30 to-transparent" />
          </BentoCard>

          {/* Technical Tile (Medium) */}
          <BentoCard className="col-span-12 lg:col-span-4 row-span-1 bg-accent/5 border-accent/20" delay={150}>
            <div className="flex items-center gap-3 mb-4">
              <Code className="w-5 h-5 text-accent" />
              <span className="text-xs font-mono text-accent uppercase tracking-widest">Logic: Build_04</span>
            </div>
            <div className="space-y-2 font-mono text-[11px] text-accent/60 leading-tight">
              <div className="flex gap-2"><span className="text-accent/30">01</span><span>const workflow = await System.optimize(ops);</span></div>
              <div className="flex gap-2"><span className="text-accent/30">02</span><span>if (workflow.efficiency &lt; target) &#123;</span></div>
              <div className="flex gap-2"><span className="text-accent/30">03</span><span>  return new AutomationSet(ops.frictionPoints);</span></div>
              <div className="flex gap-2"><span className="text-accent/30">04</span><span>&#125;</span></div>
            </div>
            <h4 className="text-lg font-semibold text-white mt-6 mb-2">Technical Precision</h4>
            <p className="text-sm text-muted">No low-code fluff. We build robust, scalable logic layers.</p>
          </BentoCard>

          {/* Integrations Tile (Small/Medium) */}
          <BentoCard className="col-span-12 lg:col-span-4 row-span-1 overflow-hidden" delay={300}>
            <div className="flex items-center justify-between mb-6">
              <span className="text-xs font-mono text-white/40 uppercase tracking-widest">Integrations</span>
              <div className="flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1 h-1 rounded-full bg-accent/40 animate-pulse" style={{ animationDelay: `${i * 200}ms` }} />)}
              </div>
            </div>
            <div className="flex gap-4 items-center">
              {integrationIcons.map((item, i) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.name}
                    className="w-12 h-12 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-transform duration-500 hover:scale-110 hover:border-accent/40 group"
                    style={{ transform: `translateY(${Math.sin((offset + i * 25) / 10) * 5}px)` }}
                  >
                    <Icon className="w-6 h-6 text-white/40 group-hover:text-accent transition-colors" />
                  </div>
                );
              })}
            </div>
            <p className="text-sm text-muted mt-6 italic">Connecting your existing tech stack seamlessly.</p>
          </BentoCard>

          {/* Negative Tile (Medium) */}
          <BentoCard className="col-span-12 lg:col-span-12 row-span-1 mt-6" delay={450}>
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
              <div className="max-w-md">
                <div className="flex items-center gap-3 mb-4">
                  <X className="w-5 h-5 text-red-500/60" />
                  <h3 className="text-xl font-bold text-white">This Isn't For Everyone</h3>
                </div>
                <p className="text-muted leading-relaxed">
                  We specialize in practical solutions for established systems. We aren't the right fit for projects that ignore the underlying friction.
                </p>
              </div>
              <div className="grid sm:grid-cols-2 gap-x-12 gap-y-4">
                {notForYou.map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <X className="w-4 h-4 text-white/20" />
                    <span className="text-sm text-white/40">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </BentoCard>
        </div>
      </div>
    </section>
  );
}

