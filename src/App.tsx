import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import Credibility from './components/Credibility';
import LeadMagnet from './components/LeadMagnet';
import WhatHappensNext from './components/WhatHappensNext';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

import ROICalculator from './components/ROICalculator';
import LogicPath from './components/LogicPath';

function App() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="min-h-screen relative bg-charcoal-900">
      {/* Global Cursor Glow */}
      <div
        className="fixed inset-0 pointer-events-none z-[1] transition-opacity duration-300"
        style={{
          background: `radial-gradient(800px circle at ${mousePos.x}px ${mousePos.y}px, rgba(74, 158, 255, 0.04), transparent 80%)`,
        }}
      />

      <LogicPath />

      <div className="relative z-10">
        <Navbar />
        <Hero />
        <WhoItsFor />
        <HowItWorks />
        <ROICalculator />
        <Credibility />
        <LeadMagnet />
        <WhatHappensNext />
        <FinalCTA />
        <Footer />
      </div>
    </div>
  );
}

export default App;
