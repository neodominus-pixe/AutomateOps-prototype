import { Bot } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="py-10 bg-charcoal-900 border-t border-white/[0.06]">
      <div className="max-w-content mx-auto px-6 sm:px-10 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <Bot className="w-5 h-5 text-accent" />
          <span className="text-white font-medium text-sm">AutomateOps</span>
        </div>
        <p className="text-muted/60 text-sm">
          &copy; {new Date().getFullYear()} AutomateOps. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
