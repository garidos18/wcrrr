import React, { useState, useEffect } from 'react';
import { Menu, X, BookOpen, TrendingUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const targetId = sectionId.replace('#', '');
    const element = document.getElementById(targetId);
    
    if (element) {
      const offset = 80;
      element.scrollIntoView({ behavior: 'smooth' });
      const finalPosition = element.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: finalPosition,
        behavior: 'smooth'
      });
      
      setIsOpen(false);
    }
  };

  const navLinks = [
    { href: "#home", text: "Home" },
    { href: "#courses", text: "Courses" },
    { href: "#faq", text: "FAQ" }
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white shadow-md py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          <motion.div 
            className="flex items-center cursor-pointer"
            onClick={() => scrollToSection('#home')}
          >
            <TrendingUp className="h-8 w-8 text-blue-600" />
            <span className="ml-2 text-xl font-bold text-gray-900">Wealth Creation</span>
          </motion.div>
          
          <div className="hidden lg:block">
            <div className="flex items-center space-x-6">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  className="text-gray-700 hover:text-blue-600 font-medium cursor-pointer text-sm"
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                >
                  {link.text}
                </motion.a>
              ))}
            </div>
          </div>
          
          <motion.div 
            className="hidden lg:block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <button 
              onClick={() => scrollToSection('enrollment')}
              className="bg-blue-600 text-white px-4 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center text-sm"
            >
              <BookOpen className="h-4 w-4 mr-2" />
              Reserve Your Seat
            </button>
          </motion.div>
          
          <div className="lg:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </motion.button>
          </div>
        </div>
      </div>
      
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden bg-white shadow-lg overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              {navLinks.map((link, index) => (
                <motion.a
                  key={link.href}
                  onClick={() => scrollToSection(link.href)}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="block px-3 py-2 text-gray-700 hover:bg-blue-50 rounded-md cursor-pointer"
                >
                  {link.text}
                </motion.a>
              ))}
              <motion.button
                onClick={() => scrollToSection('enrollment')}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className="w-full mt-2 bg-blue-600 text-white px-3 py-2 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                <BookOpen className="h-4 w-4 mr-2" />
                Reserve Your Seat
              </motion.button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;