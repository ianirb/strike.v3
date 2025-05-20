import React, { useState, useEffect } from 'react';

const Hero = () => {
  const connectorTypes = [
    'Nutritionists',
    'Private Instructors',
    'Personal Trainers',
    'Online Coaches',
    'Health & Wellness Coaches',
    'Pilates Instructors',
    'Physical Therapists',
    'Life Coaches',
    'Influencers'
  ];
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % connectorTypes.length);
        setIsTransitioning(false);
      }, 200);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="min-h-[90vh] flex flex-col justify-center relative font-['Space_Grotesk'] px-4 sm:px-6 lg:px-8 bg-[#F2F8FC]">
      <div className="container mx-auto py-16 md:py-24">
        <div className="max-w-4xl">
          <p className="text-black font-bold mb-4 tracking-wide text-sm sm:text-base">WINNING AI INTEGRATIONS</p>
          
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-bold mb-6 tracking-tight">
            Full Service
            <br />
            Digital Marketing
            <br />
            <span className="text-black whitespace-normal sm:whitespace-nowrap">
              <span className="font-bold text-[#38b6ff]">for</span>{' '}
              <span 
                className={`inline-block min-w-[12ch] sm:min-w-[20ch] transform text-[#38b6ff] ${
                  isTransitioning 
                    ? 'opacity-0 translate-y-2' 
                    : 'opacity-100 translate-y-0'
                } transition-all duration-200 ease-in-out`}
              >
                {connectorTypes[currentIndex]}
              </span>
            </span>
          </h1>

          <div className="max-w-2xl border-l-4 border-black/20 pl-6 mb-12 relative before:content-[''] before:absolute before:left-[-4px] before:top-0 before:w-1 before:h-1/3 before:bg-black before:animate-pulse">
            <p className="text-base sm:text-lg md:text-xl text-black/70">
              Picture your business running 24/7—booking appointments, nurturing leads, and answering questions—while you focus on growth. That's the reality our AI systems create.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#contact" 
              className="group flex items-center justify-center bg-black text-[#F2F8FC] px-6 sm:px-8 py-4 font-medium tracking-wide transition-all hover:bg-[#F2F8FC] hover:text-black border border-black text-sm sm:text-base"
            >
              Get Started
            </a>
            <a 
              href="#services" 
              className="group flex items-center justify-center bg-[#F2F8FC] text-black px-6 sm:px-8 py-4 font-medium tracking-wide transition-all hover:bg-black hover:text-[#F2F8FC] border border-black text-sm sm:text-base"
            >
              View Services
            </a>
          </div>
        </div>
      </div>
      
      <div className="absolute right-0 bottom-0 hidden lg:block">
        <div className="relative">
          <div className="absolute inset-0 bg-black/5 transform rotate-6"></div>
          <div className="w-64 h-64 border-2 border-black/20 relative z-10 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-black/10 to-transparent"></div>
            <div className="absolute bottom-0 right-0 w-1/2 h-1/2 bg-black/5 transform translate-x-1/4 translate-y-1/4"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;