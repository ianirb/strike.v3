import React from 'react';
import { Check, Zap, Rocket, DollarSign } from 'lucide-react';

const PricingTier = ({ 
  name, 
  description, 
  price, 
  value, 
  features, 
  icon: Icon, 
  cta 
}: {
  name: string;
  description: string;
  price: string;
  value: string;
  features: string[];
  icon: React.ElementType;
  cta: string;
}) => (
  <div className="border border-white/10 p-8 hover:border-white/30 transition-all">
    <div className="flex items-center mb-6">
      <div className="p-4 border border-white/10 mr-4">
        <Icon className="h-8 w-8" />
      </div>
      <div>
        <h3 className="text-xl font-bold">{name}</h3>
        <p className="text-sm opacity-70">{description}</p>
      </div>
    </div>

    <div className="mb-6">
      <div className="text-3xl font-bold">{price}</div>
      <div className="text-sm opacity-50">({value} value)</div>
    </div>

    <ul className="grid grid-cols-2 gap-3 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start col-span-2">
          <Check className="h-5 w-5 mr-2 flex-shrink-0 mt-0.5" />
          <span className="opacity-70">{feature}</span>
        </li>
      ))}
    </ul>

    <a
      href="#contact"
      className="block text-center py-3 px-6 bg-white text-black hover:bg-black hover:text-white border border-white transition-colors font-medium"
    >
      {cta}
    </a>
  </div>
);

const Pricing = () => {
  return (
    <section className="py-20 bg-black text-white" id="pricing">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">Pricing</h2>
          <p className="text-xl mb-12 opacity-70">
            Choose the level of automation your business is ready for.
          </p>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <PricingTier
              name="Starter"
              description="Perfect for solo coaches getting started with automation"
              price="$500"
              value="$1,775"
              icon={Zap}
              cta="Get Started"
              features={[
                'Plug into Strike CRM',
                'Lead capture forms',
                'Missed call text-back',
                'SMS/email follow-up',
                'Payment + review automation',
                'Social media bio link setup',
                'Mobile access (LeadConnector app)',
                'Initial onboarding + training'
              ]}
            />

            <PricingTier
              name="Growth"
              description="For coaches ready to quickly scale with marketing + outreach automation"
              price="$1,700"
              value="$7,650"
              icon={Rocket}
              cta="Upgrade My Business"
              features={[
                'Everything in Starter, plus:',
                'One-week website setup',
                'High-converting funnel pages',
                'AI web chat agent (FAQ + lead capture)',
                'Social media outreach automation',
                'Personalized cold email campaigns',
                'B2B lead sourcing (gyms, events, challenges)',
                'Live call transcription + summary'
              ]}
            />

            <PricingTier
              name="Empire"
              description="For established brands or ambitious coaches who want to dominate their industry with AI"
              price="$3,500"
              value="$13,900"
              icon={DollarSign}
              cta="Build My Empire"
              features={[
                'Everything in Growth, plus:',
                'Inbound/outbound AI voice agent (Vapi AI)',
                'Custom GPT-trained assistant',
                'Social video repurposing (IG Reels, YouTube Shorts)',
                'Community AI chatbot (Telegram/FB group)',
                'AI content idea generator',
                'Market trend tracking agent',
                'Premium website redesign (if needed)'
              ]}
            />
          </div>

          <div className="bg-white/5 p-8 rounded-lg">
            <div className="flex items-center mb-4">
              <DollarSign className="h-6 w-6 mr-2" />
              <h3 className="text-xl font-bold">Transparent Pricing</h3>
            </div>
            <p className="opacity-70">
              You'll receive a clear breakdown of tech requirements, build phases, and costs—no hidden fees, no guesswork.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Pricing;