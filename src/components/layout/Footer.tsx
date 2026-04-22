import React from 'react';
import { Link } from 'react-router-dom';
import { Instagram, MapPin, Lock } from 'lucide-react';

interface FooterProps {
  onAdminClick: () => void;
}

const Footer: React.FC<FooterProps> = ({ onAdminClick }) => {
  return (
    <footer className="py-24 px-6 md:px-12 border-t border-gray-100 dark:border-neutral-900 bg-white dark:bg-neutral-950 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-16">
          <div className="flex items-center gap-3">
            <img 
              src="https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/ChatGPT%20Image%20Mar%2014%2C%202026%2C%2003_32_08%20PM.png" 
              alt="CS Coaching Classes Logo" 
              className="w-8 h-8 object-contain rounded"
              referrerPolicy="no-referrer"
            />
            <span className="font-semibold tracking-tight text-sm dark:text-white">CS Coaching Classes Yavatmal</span>
          </div>
          
          <div className="flex items-center gap-4">
            <a 
              href="https://www.instagram.com/cs_coaching_classes_2022/" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
              aria-label="Follow us on Instagram"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a 
              href="https://maps.app.goo.gl/d3pWFu5ELAv9AZ4A9" 
              target="_blank" 
              rel="noopener noreferrer"
              className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-400 hover:bg-brand-50 dark:hover:bg-brand-900/30 hover:text-brand-600 dark:hover:text-brand-400 transition-all"
              aria-label="Find us on Google Maps"
            >
              <MapPin className="w-5 h-5" />
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
          <div className="col-span-2">
             <h4 className="font-bold mb-4 dark:text-white">Contact Info</h4>
             <p className="text-gray-500 dark:text-gray-400 text-sm leading-loose mb-2">CS Coaching Classes, Near Gajanan Maharaj Temple, Yavatmal, Maharashtra 445001</p>
             <p className="text-gray-500 dark:text-gray-400 text-sm mb-1">Phone: +91 8381070236</p>
             <p className="text-gray-500 dark:text-gray-400 text-sm">Email: info@cscoachingyavatmal.com</p>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">Home</Link></li>
              <li><Link to="/about" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">About Us</Link></li>
              <li><Link to="/courses" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">Courses</Link></li>
              <li><Link to="/faculty" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">Faculty</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold mb-4 dark:text-white">Support</h4>
            <ul className="space-y-2 text-sm">
              <li><Link to="/contact" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">Contact</Link></li>
              <li><Link to="/faq" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">FAQ</Link></li>
              <li><Link to="/privacy-policy" className="text-gray-500 dark:text-gray-400 hover:text-brand-600 transition-colors">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-100 dark:border-neutral-900 flex flex-col md:flex-row justify-between items-center gap-4 text-center">
          <div className="space-y-1">
            <p className="text-sm text-gray-500 dark:text-gray-400">
              © {new Date().getFullYear()} CS Coaching Classes Yavatmal. All rights reserved.
            </p>
            <p className="text-xs text-gray-400 dark:text-gray-500">
              Designed and developed by <a href="https://codenbuild.tech" target="_blank" rel="noopener noreferrer" className="text-brand-600 dark:text-brand-400 hover:underline">codenbuild.tech</a>
            </p>
          </div>
          <button 
            onClick={onAdminClick}
            className="p-2 text-gray-300 dark:text-neutral-700 hover:text-brand-500 transition-colors flex items-center gap-2 text-xs"
          >
            <Lock className="w-3 h-3" /> Admin Access
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
