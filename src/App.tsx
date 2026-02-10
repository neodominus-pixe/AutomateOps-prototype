import Navbar from './components/Navbar';
import Hero from './components/Hero';
import WhoItsFor from './components/WhoItsFor';
import HowItWorks from './components/HowItWorks';
import Credibility from './components/Credibility';
import LeadMagnet from './components/LeadMagnet';
import WhatHappensNext from './components/WhatHappensNext';
import FinalCTA from './components/FinalCTA';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <WhoItsFor />
      <HowItWorks />
      <Credibility />
      <LeadMagnet />
      <WhatHappensNext />
      <FinalCTA />
      <Footer />
    </div>
  );
}

export default App;
