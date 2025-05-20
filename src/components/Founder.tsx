import React from 'react';
import { Award, Dumbbell } from 'lucide-react';

const Founder = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <div className="relative mb-8 inline-block">
            <div className="absolute inset-0 bg-black/5 transform rotate-6"></div>
            <img 
              src="https://images.pexels.com/photos/4348798/pexels-photo-4348798.jpeg" 
              alt="Fitness professional" 
              className="w-64 h-64 object-cover relative z-10"
            />
          </div>
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="flex items-center p-2 bg-black/5 rounded-lg">
              <Award className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Certified Trainer</span>
            </div>
            <div className="flex items-center p-2 bg-black/5 rounded-lg">
              <Dumbbell className="h-5 w-5 mr-2" />
              <span className="text-sm font-medium">Fitness Expert</span>
            </div>
          </div>
          <h2 className="text-2xl font-bold mb-4">Meet Your Digital Marketing Partner</h2>
          <p className="text-lg mb-4 opacity-70">Helping fitness professionals scale their business through automation and digital marketing excellence.</p>
          <p className="opacity-70">Our team combines deep fitness industry knowledge with cutting-edge marketing expertise to help you grow your training business.</p>
        </div>
      </div>
    </section>
  );
};

export default Founder;