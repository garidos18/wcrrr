import React from 'react';
import { ArrowRight, Award, Users, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';

const Hero = () => {
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
  };
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  return (
    <section id="home" className="pt-24 md:pt-32 pb-16 bg-gradient-to-br from-blue-50 to-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="space-y-8"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div>
              <motion.span 
                className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full inline-block"
                initial={{ opacity: 0, scale: 0.5 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5 }}
              >
                Live Trading Classes
              </motion.span>
              <motion.h1 
                className="mt-4 text-4xl md:text-5xl font-bold text-gray-900 leading-tight"
                {...fadeInUp}
              >
                Master the Markets with <span className="text-blue-600">Wealth Creation</span>
              </motion.h1>
              <motion.p 
                className="mt-4 text-lg text-gray-600"
                {...fadeInUp}
                transition={{ delay: 0.2 }}
              >
                Join our live, expert-led trading courses and transform your financial future with actionable strategies and personalized guidance.
              </motion.p>
            </div>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              {...fadeInUp}
              transition={{ delay: 0.3 }}
            >
              <motion.button 
               onClick={() => scrollToSection('enrollment')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors flex items-center justify-center"
              >
                Enroll Now
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1, repeat: Infinity }}
                >
                  <ArrowRight className="ml-2 h-5 w-5" />
                </motion.span>
              </motion.button>
              <motion.button 
                onClick={() => scrollToSection('courses')}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="border border-blue-600 text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors"
              >
                Explore Courses
              </motion.button>
            </motion.div>
            
            <motion.div 
              className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <motion.div 
                className="flex items-center"
                // whileHover={{ scale: 1.02 }}
              >
                <Award className="h-10 w-10 text-blue-600 p-2 bg-blue-50 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">SEBI Registered</p>
                  <p className="text-xs text-gray-500">Certified Mentor</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                // whileHover={{ scale: 1.02 }}
              >
                <Users className="h-10 w-10 text-blue-600 p-2 bg-blue-50 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">500+</p>
                  <p className="text-xs text-gray-500">Successful Students</p>
                </div>
              </motion.div>
              <motion.div 
                className="flex items-center"
                // whileHover={{ scale: 1.02 }}
              >
                <Calendar className="h-10 w-10 text-blue-600 p-2 bg-blue-50 rounded-full" />
                <div className="ml-3">
                  <p className="text-sm font-medium text-gray-900">Live Classes</p>
                  <p className="text-xs text-gray-500">Interactive Learning</p>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div 
              className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [90, 0, 90],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-8 -left-20 w-72 h-72 bg-yellow-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, -90, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div className="relative">
              <motion.img 
                src="https://images.unsplash.com/photo-1590283603385-17ffb3a7f29f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80"
                alt="Trading Education"
                className="rounded-lg shadow-2xl"
                // whileHover={{ scale: 1.02 }}
                // transition={{ duration: 0.3 }}
              />
              <a href="#courses">
                <motion.div 
                  className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4 w-50"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center">
                    <div className="flex -space-x-2 mr-2" >
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Student" />
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Student" />
                      <img className="h-8 w-8 rounded-full border-2 border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="Student" />
                    </div>
                    <div className="ml-2">
                      <p className="text-sm font-medium text-gray-900">New batch starting</p>
                      <p className="text-xs text-blue-600">Join 24 others</p>
                    </div>
                  </div>
                </motion.div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;