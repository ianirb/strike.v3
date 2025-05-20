import React from 'react';

const testimonials = [
  {
    quote: "The AI systems Irby built for our real estate firm have doubled our lead processing capacity without adding headcount.",
    author: "Sarah J.",
    company: "Premier Properties"
  },
  {
    quote: "Their AI cold callers have become our secret weapon. Consistent, tireless, and surprisingly effective.",
    author: "Michael T.",
    company: "Capital Funding Group"
  },
  {
    quote: "We've seen a 40% increase in booked appointments since implementing their automation solutions.",
    author: "David R.",
    company: "Business Solutions Inc."
  }
];

const Testimonials = () => {
  return (
    <section className="py-20 bg-[#F2F8FC]" id="success-stories">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Success Stories</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index} 
              className="border border-black/10 p-8 relative group hover:border-black/50 transition-all bg-[#F2F8FC]"
            >
              <blockquote className="mb-8 text-lg">
                "{testimonial.quote}"
              </blockquote>
              <div className="flex items-center">
                <div className="w-12 h-12 bg-black/10 rounded-full mr-4"></div>
                <div>
                  <p className="font-bold">{testimonial.author}</p>
                  <p className="text-sm opacity-60">{testimonial.company}</p>
                </div>
              </div>
              <div className="absolute -top-3 -left-3 text-5xl font-bold opacity-10 group-hover:opacity-20 transition-opacity">"</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};