import React from 'react';
import { MessageSquare, Mail, Phone } from 'lucide-react';

const HowItWorks = () => {
  return (
    <section className="py-20 bg-[#F2F8FC]" id="how-it-works">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-3xl font-bold mb-4 tracking-tight">We'll Show You How It's Done</h2>
        <div className="text-lg mb-16 max-w-3xl opacity-70 space-y-4">
          <p>
            You don't need to figure out funnels, automations, or workflows on your own—we've already built the system for you.
          </p>
          <p>
            With the Strike to Scale CRM, our done-for-you client management platform built specifically for coaches and consultants, we plug you into a ready-to-go automation machine.
          </p>
          <p>
            We'll tailor everything to your brand, walk you through how it works, and provide ongoing support—so you can focus on developing your clients while your business runs like a machine.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="bg-[#F2F8FC] rounded-3xl shadow-2xl p-6 max-w-md mx-auto">
              <div className="flex gap-2 mb-6">
                {['Email', 'SMS', 'IG', 'FB', 'WhatsApp'].map((tab, index) => (
                  <button
                    key={index}
                    className={`px-3 py-1 text-sm rounded-full transition-all ${
                      index === 0
                        ? 'bg-black text-[#F2F8FC]'
                        : 'bg-black/5 text-black/60 hover:bg-black/10'
                    }`}
                  >
                    {tab}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                {[
                  {
                    avatar: 'https://i.pravatar.cc/40?img=1',
                    name: 'Sarah M.',
                    message: 'Hey Coach, do you have spots open for morning sessions?',
                    time: '2m ago',
                    unread: true
                  },
                  {
                    avatar: 'https://i.pravatar.cc/40?img=2',
                    name: 'Mike R.',
                    message: 'Looking to start strength training. What packages do you offer?',
                    time: '5m ago',
                    unread: true
                  },
                  {
                    avatar: 'https://i.pravatar.cc/40?img=3',
                    name: 'Emma K.',
                    message: 'Thanks for the nutrition plan! Quick question about meal timing...',
                    time: '15m ago',
                    unread: false
                  }
                ].map((chat, index) => (
                  <div
                    key={index}
                    className={`p-4 rounded-lg transition-all ${
                      chat.unread ? 'bg-blue-50' : 'bg-gray-50'
                    } hover:bg-gray-100 cursor-pointer`}
                  >
                    <div className="flex items-start gap-3">
                      <img
                        src={chat.avatar}
                        alt={chat.name}
                        className="w-10 h-10 rounded-full"
                      />
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-center mb-1">
                          <h4 className="font-medium truncate">{chat.name}</h4>
                          <span className="text-xs text-gray-500">{chat.time}</span>
                        </div>
                        <p className="text-sm text-gray-600 truncate">{chat.message}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-4">All Platforms. One Inbox. Zero Missed Opportunities.</h2>
            <p className="text-lg opacity-70 mb-8">
              With Strike's Unified Messaging Hub, you can read and respond to texts, emails, and social media DMs from Instagram, Facebook, WhatsApp, and more—all in one place. No more switching apps or missing leads in your DMs. Every conversation is organized, searchable, and connected to your client profiles—so you stay in control and never miss a chance to book or close.
            </p>
            <a
              href="#contact"
              className="inline-block bg-black text-[#F2F8FC] px-8 py-4 font-medium tracking-wide transition-all hover:bg-[#F2F8FC] hover:text-black border border-black"
            >
              GET SET UP NOW
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks