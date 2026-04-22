import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Sun, Moon } from 'lucide-react';

interface NavbarProps {
  theme: string;
  toggleTheme: () => void;
}

const Navbar: React.FC<NavbarProps> = ({ theme, toggleTheme }) => {
  const [scrolled, setScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Courses', path: '/courses' },
    { name: 'Faculty', path: '/faculty' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out ${
        scrolled 
          ? "bg-white/70 dark:bg-neutral-950/70 backdrop-blur-xl py-3 shadow-[0_2px_20px_-5px_rgba(0,0,0,0.1)] dark:shadow-[0_2px_20px_-5px_rgba(255,255,255,0.05)] border-b border-gray-200/50 dark:border-neutral-800/50" 
          : "bg-transparent py-6 border-b border-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-2 group">
          <img 
            src="https://raw.githubusercontent.com/codenbuild01-droid/cscoachingclasses/refs/heads/main/ChatGPT%20Image%20Mar%2014%2C%202026%2C%2003_32_08%20PM.png" 
            alt="CS Coaching Classes Logo" 
            className="w-10 h-10 object-contain rounded-lg transition-transform group-hover:scale-110"
            referrerPolicy="no-referrer"
          />
          <span className="font-semibold tracking-tight text-lg dark:text-white">Coaching Classes</span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) => 
                `transition-colors hover:text-brand-600 dark:hover:text-brand-400 ${
                  isActive ? "text-brand-600 dark:text-brand-400" : "text-gray-600 dark:text-gray-300"
                }`
              }
            >
              {link.name}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full bg-gray-100 dark:bg-neutral-800 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-neutral-700 transition-colors"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? <Moon className="w-4 h-4" /> : <Sun className="w-4 h-4" />}
          </button>
          
          <Link
            to="/contact"
            className="hidden md:flex items-center gap-2 px-5 py-2.5 rounded-full bg-black dark:bg-white text-white dark:text-black text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-gray-900 dark:active:bg-gray-300 active:scale-95 transition-all glow-primary-hover"
          >
            Admissions Open
          </Link>

          <button 
            className="md:hidden p-2 text-gray-600 dark:text-gray-300"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 z-40 bg-white dark:bg-neutral-950 pt-24 px-6 md:hidden overflow-y-auto"
          >
            <nav className="flex flex-col gap-6 text-lg font-medium">
              {navLinks.map((link) => (
                <NavLink
                  key={link.path}
                  to={link.path}
                  className={({ isActive }) => 
                    `py-2 border-b border-gray-100 dark:border-neutral-800 ${
                      isActive ? "text-brand-600 dark:text-brand-400" : "text-gray-900 dark:text-white"
                    }`
                  }
                >
                  {link.name}
                </NavLink>
              ))}
              <Link 
                to="/contact" 
                className="mt-4 flex items-center justify-center px-5 py-3 rounded-xl bg-black dark:bg-white text-white dark:text-black font-medium hover:bg-gray-800 dark:hover:bg-gray-200 active:bg-gray-900 dark:active:bg-gray-300 active:scale-95 transition-all glow-primary-hover"
              >
                Admissions Open
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
