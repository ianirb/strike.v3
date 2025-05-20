import React from 'react';
import { 
  LayoutDashboard, 
  MessageSquare, 
  Globe, 
  Calendar, 
  Star, 
  Inbox, 
  CreditCard, 
  Users 
} from 'lucide-react';

const services = [
  {
    title: 'CRM & Automation Systems',
    description: 'Custom pipelines, automations, and dashboards that keep your leads organized and your workflows running 24/7.',
    icon: <LayoutDashboard className="h-8 w-8" />
  },
  {
    title: 'Smart Outreach',
    description: 'Leverage smart SMS, email, and even AI voice agents to follow up instantly, nurture leads, and close deals faster.',
    icon: <MessageSquare className="h-8 w-8" />
  },
  {
    title: 'Lead Capture & Funnel Design',
    description: 'Conversion-optimized landing pages, chatbots, and forms that feed directly into your CRM.',
    icon: <Globe className="h-8 w-8" />
  },
  {
    title: 'Appointment Booking & Calendar Sync',
    description: 'Integrated calendar systems with automated confirmations, reminders, and rescheduling flows.',
    icon: <Calendar className="h-8 w-8" />
  },
  {
    title: 'Reputation Management',
    description: 'Automated review requests, Google My Business syncing, and tools to boost local visibility.',
    icon: <Star className="h-8 w-8" />
  },
  {
    title: 'Social Messaging & Unified Inbox',
    description: 'Manage your DMs, emails, and texts from all platforms in one place—so no lead slips through the cracks.',
    icon: <Inbox className="h-8 w-8" />
  },
  {
    title: 'Contracts, Payments & Invoicing',
    description: 'Send service agreements, collect payments, and manage subscriptions seamlessly inside your CRM.',
    icon: <CreditCard className="h-8 w-8" />
  },
  {
    title: 'Onboarding & Client Portals',
    description: 'Deliver a polished onboarding experience with automated intake forms and welcome sequences.',
    icon: <Users className="h-8 w-8" />
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-[#F2F8FC]" id="services">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-16 tracking-tight">What We Do</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className="p-8 border border-black/10 hover:border-black/80 transition-all group bg-[#F2F8FC]"
            >
              <div className="mb-6 p-4 inline-block border border-black/10 group-hover:border-black/80 transition-all">
                {service.icon}
              </div>
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p className="opacity-60">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;