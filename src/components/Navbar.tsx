import { Bot, ArrowRight } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${scrolled
          ? 'bg-charcoal-900/80 backdrop-blur-xl border-b border-white/[0.08] h-16 sm:h-20'
          : 'bg-transparent h-20 sm:h-24'
        }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-10 flex items-center justify-between h-full">
        <div className="flex items-center gap-3 group cursor-pointer">
          <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center border border-accent/20 transition-all duration-500 group-hover:bg-accent/20 group-hover:scale-110">
            <Bot className="w-6 h-6 text-accent" />
          </div>
          <span className="text-white font-bold text-xl tracking-tight transition-all duration-500 group-hover:tracking-widest">
            AutomateOps
          </span>
        </div>

        <div className="hidden md:flex items-center gap-10">
          {['How It Works', 'Audit', 'Process'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(/ /g, '-')}`}
              className="text-sm font-medium text-white/60 hover:text-white transition-all duration-300 hover:tracking-widest uppercase"
            >
              {item}
            </a>
          ))}
        </div>

        <a
          href="#audit"
          className="group inline-flex items-center gap-2.5 bg-white/5 hover:bg-white/10 text-white text-sm font-semibold px-5 py-2.5 rounded-full border border-white/10 transition-all duration-300 hover:scale-[1.05]"
        >
          <span>Get Your Free Audit</span>
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
        </a>
      </div>
    </nav>
  );
}
