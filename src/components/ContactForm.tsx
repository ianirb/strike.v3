import React, { useEffect } from 'react';

const ContactForm = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://link.striketoscale.com/js/form_embed.js';
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="py-20 bg-[#F2F8FC]" id="contact">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 tracking-tight text-center">Book a Call</h2>
          
          <iframe 
            src="https://link.striketoscale.com/widget/booking/o4TMhhyurL6DA3KBLtxt" 
            style={{ width: '100%', border: 'none', overflow: 'hidden', height: '800px' }} 
            scrolling="no" 
            id="o4TMhhyurL6DA3KBLtxt_1747165382367"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactForm