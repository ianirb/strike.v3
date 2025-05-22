import React from 'react';
import { Mail, Instagram, Facebook, Linkedin, Music2 } from 'lucide-react';
import StrikeLogo from './StrikeLogo';

const Footer = () => {
  return (
    <footer className="py-12 bg-black text-white">
      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <h3 className="text-xl font-bold mb-2 flex items-center">
              <img 
                src="https://imgur.com/vWus5IG.png"
                alt="Strike"
                className="h-28 mr-2"
              />
            </h3>
            <p className="flex items-center opacity-70">
              <Mail className="h-4 w-4 mr-2" />
              info@striketoscale.com
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a href="https://www.instagram.com/striketoscale_/" className="p-2 border border-white/10 rounded-full hover:border-white/80 transition-colors">
              <Instagram className="h-5 w-5" />
            </a>
            <a href="https://www.facebook.com/profile.php?id=61576245640090" className="p-2 border border-white/10 rounded-full hover:border-white/80 transition-colors">
              <Facebook className="h-5 w-5" />
            </a>
            <a href="https://www.linkedin.com/company/striketoscale" className="p-2 border border-white/10 rounded-full hover:border-white/80 transition-colors">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="https://www.tiktok.com/@striketoscale" className="p-2 border border-white/10 rounded-full hover:border-white/80 transition-colors">
              <Music2 className="h-5 w-5" />
            </a>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-white/10 text-center text-sm opacity-60">
          <p>© {new Date().getFullYear()} Strike AI Solutions. All rights reserved.</p>
          <div className="mt-2">
            <a href="#" className="hover:underline">Privacy Policy</a>
            <span className="mx-2">|</span>
            <a href="#" className="hover:underline">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;