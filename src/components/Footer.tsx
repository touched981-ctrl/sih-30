import React from 'react';
import { Waves } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="glass-dark py-12 mt-20 relative overflow-hidden">
      {/* Ocean Wave Effect */}
      <div className="absolute top-0 left-0 w-full h-8">
        <svg className="w-full h-full wave-effect" viewBox="0 0 1200 40" fill="none">
          <path d="M0,20 Q300,0 600,20 T1200,20 L1200,40 L0,40 Z" fill="rgba(34, 211, 238, 0.2)" />
        </svg>
      </div>
      
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center relative z-10">
          {/* Logo */}
          <div className="flex justify-center items-center mb-6">
            <div className="w-12 h-12 glass rounded-full flex items-center justify-center float">
              <Waves className="w-6 h-6 text-bioluminescent" />
            </div>
          </div>
          
          <div className="flex justify-center items-center space-x-12 mb-8">
            <div className="text-turquoise font-medium hover:text-bioluminescent transition-colors">MoES</div>
            <div className="text-turquoise font-medium hover:text-bioluminescent transition-colors">CMLRE</div>
            <div className="text-turquoise font-medium hover:text-bioluminescent transition-colors">AICTE</div>
          </div>
          
          <div className="flex justify-center space-x-8 mb-8">
            <a href="#" className="text-gray-300 hover:text-aqua hover:underline text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-300 hover:text-aqua hover:underline text-sm transition-colors">Help</a>
            <a href="#" className="text-gray-300 hover:text-aqua hover:underline text-sm transition-colors">Contact</a>
          </div>
          
          <p className="text-gray-400 text-sm">
            © 2025 Shark - AI-Driven Marine Insights. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;