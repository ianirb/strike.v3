import React from 'react';
import { Building2, Landmark, DollarSign, Briefcase, Store, Dumbbell, Film, Heart } from 'lucide-react';

const industries = [
  {
    name: 'Real Estate',
    icon: <Building2 className="h-8 w-8" />
  },
  {
    name: 'Private Lending',
    icon: <Landmark className="h-8 w-8" />
  },
  {
    name: 'Funding & Capital',
    icon: <DollarSign className="h-8 w-8" />
  },
  {
    name: 'Commercial Services',
    icon: <Briefcase className="h-8 w-8" />
  },
  {
    name: 'Small Business Ops',
    icon: <Store className="h-8 w-8" />
  },
  {
    name: 'Fitness',
    icon: <Dumbbell className="h-8 w-8" />
  },
  {
    name: 'Film & Media',
    icon: <Film className="h-8 w-8" />
  },
  {
    name: 'Healthcare',
    icon: <Heart className="h-8 w-8" />
  }
];

const Industries = () => {
  return (
    <section className="py-20 bg-black text-white" id="industries">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">Industries I Serve</h2>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
          {industries.map((industry, index) => (
            <div key={index} className="text-center group">
              <div className="border border-white/20 p-6 mb-4 inline-flex rounded-full transition-all hover:border-white/80 group-hover:scale-105">
                {industry.icon}
              </div>
              <p className="font-medium">{industry.name}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Industries;