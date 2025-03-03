import React from 'react';
import { TrendingUp, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              <TrendingUp className="h-8 w-8 text-blue-400" />
              <span className="ml-2 text-xl font-bold">Wealth Creation</span>
            </div>
            <p className="text-gray-400 mb-4">
              Transforming ordinary traders into extraordinary market professionals through live, expert-led trading education.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Instagram className="h-5 w-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#home" className="text-gray-400 hover:text-white transition-colors">Home</a></li>
              <li><a href="#courses" className="text-gray-400 hover:text-white transition-colors">Courses</a></li>
              <li><a href="#instructor" className="text-gray-400 hover:text-white transition-colors">Instructor</a></li>
              <li><a href="#testimonials" className="text-gray-400 hover:text-white transition-colors">Testimonials</a></li>
              <li><a href="#blog" className="text-gray-400 hover:text-white transition-colors">Blog</a></li>
              <li><a href="#faq" className="text-gray-400 hover:text-white transition-colors">FAQ</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Courses</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Equity Trading Mastery</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Options Trading Pro</a></li>
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Technical Analysis Fundamentals</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Risk Management Mastery</a></li> */}
              {/* <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Trading Psychology</a></li> */}
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-medium mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <Mail className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">wealthcreation.in@gmail.com</span>
              </li>
              <li className="flex items-start">
                <Phone className="h-5 w-5 text-blue-400 mr-3 mt-0.5" />
                <span className="text-gray-400">+91 74025 57830 </span>
              </li> 
              {/* <li className="flex items-start"> */}
                {/* <MapPin className="h-5 w-5 text-blue-400 mr-3 mt-0.5" /> */}
                {/* <span className="text-gray-400">123 Trading Street, Financial District, New York, NY 10004</span> */}
              {/* </li> */}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} Wealth Creation. All rights reserved.
          </p>
          <div className="mt-4 md:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Refund Policy</a>
          </div>
        </div>
        
        
      </div>
    </footer>
  );
};

export default Footer;