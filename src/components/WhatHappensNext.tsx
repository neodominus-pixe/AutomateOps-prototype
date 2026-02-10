import { Phone, MessageSquare, FileCheck, ThumbsUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import { useEffect, useState } from 'react';

const steps = [
  {
    icon: Phone,
    title: 'Short intro call',
    description: "We'll schedule 30 minutes to understand your operations.",
  },
  {
    icon: MessageSquare,
    title: 'No sales pitch',
    description: 'This conversation is about understanding, not selling.',
  },
  {
    icon: FileCheck,
    title: 'Clear recommendations',
    description: "You'll receive a written summary of opportunities.",
  },
  {
    icon: ThumbsUp,
    title: 'You decide next steps',
    description: "No pressure, no follow-up unless you want it.",
  },
];

export default function WhatHappensNext() {
  const { ref, isVisible } = useScrollReveal();
  const [lineHeight, setLineHeight] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => setLineHeight(100), 500);
      return () => clearTimeout(timer);
    }
  }, [isVisible]);

  return (
    <section className="relative py-28 sm:py-40 bg-charcoal-900 overflow-hidden">
      {/* Background Decor */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-[100px]" />

      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}
      >
        <div className="text-center mb-20">
          <h2 className="text-3xl sm:text-[40px] font-bold text-white mb-4 tracking-tight">
            What Happens After You Submit
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-accent to-transparent mx-auto rounded-full mb-6" />
          <p className="text-muted text-lg max-w-xl mx-auto leading-relaxed">
            A simple, transparent process with no surprises.
          </p>
        </div>

        <div className="max-w-2xl mx-auto relative">
          {/* Animated Background Line */}
          <div className="absolute left-[21px] top-6 bottom-6 w-px bg-white/5" />
          <div
            className="absolute left-[21px] top-6 w-px bg-gradient-to-b from-accent via-accent to-transparent transition-all duration-[1500ms] ease-in-out origin-top"
            style={{ height: `${lineHeight}%`, maxHeight: 'calc(100% - 48px)' }}
          />

          <div className="space-y-0">
            {steps.map((step, i) => {
              const Icon = step.icon;
              const isLast = i === steps.length - 1;
              return (
                <div
                  key={step.title}
                  className={`flex gap-8 transition-all duration-700 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-4'
                    }`}
                  style={{
                    transitionDelay: isVisible ? `${(i * 200) + 300}ms` : '0ms'
                  }}
                >
                  <div className="flex flex-col items-center">
                    <div className="relative z-10 w-11 h-11 rounded-full bg-charcoal-900 border border-white/10 flex items-center justify-center flex-shrink-0 group-hover:border-accent/50 transition-colors duration-500">
                      <Icon className="w-5 h-5 text-accent" />
                      {/* Glow effect when visible */}
                      <div className={`absolute inset-0 rounded-full bg-accent/20 blur-md transition-opacity duration-1000 ${isVisible ? 'opacity-100' : 'opacity-0'}`} style={{ transitionDelay: `${(i * 200) + 500}ms` }} />
                    </div>
                  </div>
                  <div className={isLast ? 'pb-0' : 'pb-16'}>
                    <h3 className="text-xl font-semibold text-white mb-2">
                      {step.title}
                    </h3>
                    <p className="text-muted text-lg leading-relaxed">{step.description}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
