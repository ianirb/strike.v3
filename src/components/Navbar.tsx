import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import StrikeLogo from './StrikeLogo';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Services', href: '#services' },
    { name: 'Process', href: '#how-it-works' },
    { name: 'Pricing', href: '#pricing' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#F2F8FC] shadow-md' : 'bg-transparent'}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <a href="#" className="flex items-center">
            <StrikeLogo className="h-28 w-auto" />
          </a>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-4 lg:space-x-8">
            {navLinks.map((link, index) => (
              <a 
                key={index} 
                href={link.href} 
                className="font-medium text-sm lg:text-base hover:text-black/60 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#contact" 
              className="px-4 lg:px-6 py-2 bg-black text-[#F2F8FC] hover:bg-[#F2F8FC] hover:text-black border border-black transition-colors text-sm lg:text-base"
            >
              GET STARTED
            </a>
          </nav>
          
          {/* Mobile Menu Button */}
          <button className="md:hidden p-2" onClick={toggleMenu}>
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation */}
      {isOpen && (
        <nav className="md:hidden bg-[#F2F8FC] border-t border-black/10">
          <div className="container mx-auto px-4">
            <div className="flex flex-col space-y-4 py-4">
              {navLinks.map((link, index) => (
                <a 
                  key={index} 
                  href={link.href} 
                  className="font-medium py-2 text-base"
                  onClick={() => setIsOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a 
                href="#contact" 
                className="py-3 bg-black text-[#F2F8FC] text-center hover:bg-[#F2F8FC] hover:text-black border border-black transition-colors"
                onClick={() => setIsOpen(false)}
              >
                GET STARTED
              </a>
            </div>
          </div>
        </nav>
      )}
    </header>
  );
};

export default Navbar