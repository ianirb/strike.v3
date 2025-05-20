import React, { useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Services from './components/Services';
import HowItWorks from './components/HowItWorks';
import Pricing from './components/Pricing';
import ContactForm from './components/ContactForm';
import Slogan from './components/Slogan';
import Footer from './components/Footer';

function App() {
  useEffect(() => {
    // Update the title
    document.title = 'Strike to Scale';
  }, []);

  return (
    <div className="font-sans text-black">
      <Navbar />
      <Hero />
      <Services />
      <HowItWorks />
      <Pricing />
      <ContactForm />
      <Slogan />
      <Footer />
    </div>
  );
}

export default App;