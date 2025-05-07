import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Benefits from './components/Benefits';
import ServiceApproach from './components/ServiceApproach';
import Testimonials from './components/Testimonials';
import PracticeAreas from './components/PracticeAreas';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <div className="font-['Inter',sans-serif] text-gray-800">
      <Header />
      <Hero />
      <Benefits />
      <ServiceApproach />
      <PracticeAreas />
      <Testimonials />
      <ContactForm />
      <Footer />
    </div>
  );
}

export default App;