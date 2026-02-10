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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-charcoal-900/90 backdrop-blur-md border-b border-white/[0.06]'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-content mx-auto px-6 sm:px-10 flex items-center justify-between h-16 sm:h-20">
        <div className="flex items-center gap-2.5">
          <Bot className="w-6 h-6 text-accent" />
          <span className="text-white font-semibold text-lg tracking-tight">
            AutomateOps
          </span>
        </div>

        <a
          href="#audit"
          className="group hidden sm:inline-flex items-center gap-2 text-sm font-medium text-white/80 hover:text-white transition-colors duration-300"
        >
          Get Your Free Audit
          <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5" />
        </a>
      </div>
    </nav>
  );
}
