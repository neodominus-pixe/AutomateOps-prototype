import { Phone, MessageSquare, FileCheck, ThumbsUp } from 'lucide-react';
import { useScrollReveal } from '../hooks/useScrollReveal';

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

  return (
    <section className="py-28 sm:py-32 bg-charcoal-800">
      <div
        ref={ref}
        className={`max-w-content mx-auto px-6 sm:px-10 transition-all duration-700 ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
        }`}
      >
        <h2 className="text-3xl sm:text-[32px] font-semibold text-white text-center mb-4">
          What Happens After You Submit
        </h2>
        <p className="text-muted text-center max-w-xl mx-auto mb-16 leading-relaxed">
          A simple, transparent process with no surprises.
        </p>

        <div className="max-w-2xl mx-auto">
          {steps.map((step, i) => {
            const Icon = step.icon;
            const isLast = i === steps.length - 1;
            return (
              <div
                key={step.title}
                className="flex gap-6"
                style={{ transitionDelay: isVisible ? `${i * 100}ms` : '0ms' }}
              >
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 rounded-full bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-accent" />
                  </div>
                  {!isLast && (
                    <div className="w-px h-full bg-gradient-to-b from-accent/20 to-transparent my-2" />
                  )}
                </div>
                <div className={isLast ? 'pb-0' : 'pb-10'}>
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {step.title}
                  </h3>
                  <p className="text-muted leading-relaxed">{step.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
