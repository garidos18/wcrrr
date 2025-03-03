import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote, TrendingUp } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const testimonials = [
  {
    id: 1,
    name: 'Gopal',
    role: 'Student',
    image: '/images/tpic-1.jpg',
    content: 'The Equity Trading Mastery Course completely transformed my approach to the markets. I went from making random trades to having a structured strategy that consistently delivers results. The live sessions were incredibly valuable.',
    rating: 5,
    returns: 147
  },
  {
    id: 2,
    name: 'Baba',
    role: 'Part-time Investor',
    image: '/images/tpic-2.jpg',
    content: 'As someone with a full-time job, I was looking for practical trading strategies that I could implement in my limited free time. This course delivered exactly that. The instructor\'s expertise and teaching style made complex concepts easy to understand.',
    rating: 5,
    returns: 132
  },
  {
    id: 3,
    name: 'Bhima',
    role: 'Part-time Trader',
    image: '/images/tpic-3.jpg',
    content: "The Options Trading Pro Course is by far the best investment I've made in my trading education. The strategies taught are practical and the risk management techniques have saved me from significant losses multiple times.",
    rating: 5,
    returns: 156
  }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

     const scrollToSection = (sectionId: string) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const offset = 80; // Navbar height offset
          const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
          const offsetPosition = elementPosition - offset;
      
          window.scrollTo({
            top: offsetPosition,
            behavior: 'smooth'
          });
        }
      }

  return (
    <section id="testimonials" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold">Student Success Stories</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Hear from Our Trading Community</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Real results from real students who transformed their trading journey with our courses.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          <motion.div 
            className="bg-white rounded-xl shadow-lg overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <AnimatePresence mode="wait">
              <motion.div 
                key={currentTestimonial}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
                className="p-8"
              >
                <div className="flex justify-between items-center mb-6">
                  <motion.div 
                    className="flex items-center"
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 }}
                  >
                    <img 
                      src={testimonials[currentTestimonial].image} 
                      alt={testimonials[currentTestimonial].name} 
                      className="h-14 w-14 rounded-full ring-4 ring-blue-50"
                    />
                    <div className="ml-4">
                      <h4 className="text-lg font-medium text-gray-900">{testimonials[currentTestimonial].name}</h4>
                      <p className="text-sm text-gray-600">{testimonials[currentTestimonial].role}</p>
                    </div>
                  </motion.div>
                  <motion.div 
                    className="flex"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.3 }}
                  >
                    {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                    ))}
                  </motion.div>
                </div>
                
                <motion.div 
                  className="relative bg-blue-50 rounded-xl p-6 mb-6"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <Quote className="h-8 w-8 text-blue-200 absolute top-0 left-0 -translate-x-2 -translate-y-2" />
                  <p className="text-gray-700 italic relative z-10 leading-relaxed">
                    {testimonials[currentTestimonial].content}
                  </p>
                </motion.div>

                <div className="mt-6 flex justify-between items-center">
                  <div className="flex items-center space-x-4">
                    <div className="flex items-center space-x-2 px-4 py-2 bg-blue-50 rounded-full">
                      <TrendingUp className="h-4 w-4 text-green-600" />
                      <span className="text-sm font-medium text-gray-900">+{testimonials[currentTestimonial].returns}% Returns</span>
                    </div>
                    <span className="text-sm text-gray-500">in 6 months</span>
                  </div>
                  <div className="flex space-x-2">
                    <motion.button 
                      onClick={prevTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronLeft className="h-5 w-5 text-gray-600" />
                    </motion.button>
                    <motion.button 
                      onClick={nextTestimonial}
                      className="p-2 rounded-full bg-gray-100 hover:bg-gray-200 transition-colors"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <ChevronRight className="h-5 w-5 text-gray-600" />
                    </motion.button>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </motion.div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {testimonials.filter((_, i) => i !== currentTestimonial).map((testimonial, index) => (
              <motion.div 
                key={testimonial.id} 
                className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <img 
                      src={testimonial.image} 
                      alt={testimonial.name} 
                      className="h-10 w-10 rounded-full ring-2 ring-blue-50"
                    />
                    <div className="ml-3">
                      <h4 className="text-sm font-medium text-gray-900">{testimonial.name}</h4>
                      <p className="text-xs text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                  <div className="flex">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>
                </div>
                <p className="text-sm text-gray-600 line-clamp-4">
                  {testimonial.content}
                </p>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center text-xs">
                    <TrendingUp className="h-3 w-3 text-green-600 mr-1" />
                    <span className="font-medium text-gray-900">+{testimonial.returns}% Returns</span>
                  </div>
                  <span className="text-xs text-gray-500">in 6 months</span>
                </div>
              </motion.div>
            ))}
            
            <motion.div 
              className="bg-gradient-to-br from-blue-600 to-blue-700 rounded-xl shadow-lg p-8 text-white col-span-full sm:col-span-1"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              whileHover={{ y: -5 }}
            >
              <div>
                <h4 className="text-2xl font-bold">Join 500+ Successful Traders</h4>
                <p className="mt-2 text-blue-100">
                  Our students consistently outperform the market with our proven strategies.
                </p>
              </div>
              <motion.button 
               onClick={() => scrollToSection('enrollment')}
                className="mt-6 bg-white text-blue-600 px-6 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors inline-flex items-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Start Your Journey
                <ChevronRight className="ml-2 h-5 w-5" />
              </motion.button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;