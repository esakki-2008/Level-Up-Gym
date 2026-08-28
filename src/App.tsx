import { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { WhyChooseUs } from './components/WhyChooseUs';
import { Programs } from './components/Programs';
import { MembershipCTA } from './components/MembershipCTA';
import { Trainers } from './components/Trainers';
import { Facilities } from './components/Facilities';
import { Reviews } from './components/Reviews';
import { Motivation } from './components/Motivation';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { MobileBottomBar } from './components/MobileBottomBar';

export default function App() {
  const [selectedGoal, setSelectedGoal] = useState<string>('General Fitness');

  const handleOpenEnquiry = (goal?: string) => {
    if (goal) {
      setSelectedGoal(goal);
    }
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 font-sans selection:bg-amber-500 selection:text-zinc-950 pb-16 md:pb-0">
      <Navbar onOpenEnquiry={handleOpenEnquiry} />
      <Hero onOpenEnquiry={handleOpenEnquiry} />
      <About />
      <WhyChooseUs />
      <Programs onOpenEnquiry={handleOpenEnquiry} />
      <MembershipCTA onOpenEnquiry={() => handleOpenEnquiry('Membership Plan')} />
      <Trainers onOpenEnquiry={handleOpenEnquiry} />
      <Facilities />
      <Reviews />
      <Motivation onOpenEnquiry={() => handleOpenEnquiry('Start Training')} />
      <ContactSection initialGoal={selectedGoal} />
      <Footer />
      <MobileBottomBar onOpenEnquiry={() => handleOpenEnquiry('General Membership')} />
    </div>
  );
}
