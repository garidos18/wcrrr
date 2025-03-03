import React, { useState } from 'react';
import { Check, Clock, Calendar, Users, ArrowRight, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const courses = [
  {
    id: 1,
    title: 'Equity Trading Mastery Course',
    description: 'A comprehensive course for beginners and intermediate traders, covering technical analysis, market trends, and risk management.',
    level: 'Beginner to Intermediate',
    duration: '7 Weeks',
    nextBatch: 'May 09, 2025',
    price: '₹4999',
    features: [
      'Technical Analysis Fundamentals',
      'Chart Pattern Recognition',
      'Risk Management Strategies',
      'Market Psychology',
      'Live Trading Sessions',
      'Portfolio Construction',
      'Entry and Exit Strategies',
      'Lifetime Access to Materials'
    ],
    image: 'https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  },
  {
    id: 2,
    title: 'Options Trading Pro Course',
    description: 'An advanced course for traders looking to master options trading strategies, risk-reward management, and market psychology.',
    level: 'Intermediate to Advanced',
    duration: '6 Weeks',
    nextBatch: 'March 17, 2025',
    price: '₹4999',
    features: [
      'Options Pricing Models',
      'Advanced Greeks Analysis',
      'Volatility Trading Strategies',
      'Spread Strategies Mastery',
      'Risk-Reward Optimization',
      'Options Adjustment Techniques',
      'Market Neutral Strategies',
      'Advanced Portfolio Hedging'
    ],
    image: 'https://images.unsplash.com/photo-1535320903710-d993d3d77d29?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80'
  }
];

const getNextUpcomingBatch = () => {
  return courses.reduce((nearest, course) => {
    const currentDate = new Date();
    const batchDate = new Date(course.nextBatch);
    const nearestDate = new Date(nearest.nextBatch);
    
    if (batchDate >= currentDate && (batchDate < nearestDate || !nearest.nextBatch)) {
      return course;
    }
    return nearest;
  }, courses[0]);
};

const Courses = () => {
  const [selectedCourse, setSelectedCourse] = useState(courses[0].id);
  const nextBatch = getNextUpcomingBatch();
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
    <section id="courses" className="py-16 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <span className="text-blue-600 font-semibold">Expert-Led Training</span>
          <h2 className="mt-2 text-3xl font-bold text-gray-900">Our Premium Courses</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Comprehensive, live trading courses designed to transform beginners into confident traders.
          </p>
        </motion.div>
        
        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Course Selection Sidebar */}
          <motion.div 
            className="w-full lg:w-1/3"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="bg-white rounded-xl shadow-lg overflow-hidden sticky top-24">
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center">
                  <BookOpen className="h-5 w-5 mr-2 text-blue-600" />
                  Available Courses
                </h3>
                <div className="space-y-3">
                  {courses.map(course => (
                    <motion.button
                      key={course.id}
                      onClick={() => setSelectedCourse(course.id)}
                      className={`w-full text-left p-4 rounded-xl transition-all ${
                        selectedCourse === course.id
                          ? 'bg-blue-50 border-l-4 border-blue-600 shadow-md'
                          : 'bg-gray-50 hover:bg-gray-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      <h4 className="font-medium text-gray-900">{course.title}</h4>
                      <p className="text-sm text-gray-600 mt-1">{course.level}</p>
                      {course.id === nextBatch.id && (
                        <span className="inline-block mt-2 text-xs font-medium text-blue-600 bg-blue-100 px-2 py-1 rounded-full">
                          Next Batch Starting Soon!
                        </span>
                      )}
                    </motion.button>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Course Details */}
          <div className="w-full lg:w-2/3">
            {courses.filter(course => course.id === selectedCourse).map(course => (
              <motion.div 
                key={course.id}
                layoutId={`course-${course.id}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className="bg-white rounded-xl shadow-lg overflow-hidden"
              >
                {/* Course Header Image */}
                <div className="relative h-72 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent flex items-end">
                    <div className="p-8">
                      <motion.span 
                        className="bg-blue-600 text-white text-xs font-medium px-3 py-1.5 rounded-full"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                      >
                        {course.level}
                      </motion.span>
                      <motion.h3 
                        className="mt-3 text-3xl font-bold text-white"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                      >
                        {course.title}
                      </motion.h3>
                    </div>
                  </div>
                </div>
                
                {/* Course Content */}
                <div className="p-8">
                  <p className="text-gray-600 text-lg">{course.description}</p>
                  
                  {/* Course Stats */}
                  <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Clock className="h-6 w-6 text-blue-600" />
                      <span className="ml-3 text-sm font-medium text-gray-700">{course.duration}</span>
                    </div>
                    <div className={`flex items-center p-4 rounded-lg ${
                      course.id === nextBatch.id 
                        ? 'bg-blue-50 ring-2 ring-blue-600' 
                        : 'bg-gray-50'
                    }`}>
                      <Calendar className="h-6 w-6 text-blue-600" />
                      <div className="ml-3">
                        <span className="text-sm font-medium text-gray-700">Next: {course.nextBatch}</span>
                        {course.id === nextBatch.id && (
                          <span className="block text-xs text-blue-600 font-medium mt-0.5">Next Upcoming Batch!</span>
                        )}
                      </div>
                    </div>
                    <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                      <Users className="h-6 w-6 text-blue-600" />
                      <span className="ml-3 text-sm font-medium text-gray-700">Limited Seats</span>
                    </div>
                  </div>
                  
                  {/* Course Features */}
                  <div className="mt-8">
                    <h4 className="text-xl font-bold text-gray-900 mb-6">What You'll Learn</h4>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {course.features.map((feature, index) => (
                        <div 
                          key={index} 
                          className="flex items-start p-3 rounded-lg"
                        >
                          <Check className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                          <span className="ml-3 text-gray-700">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  
                  {/* Course Pricing and CTA */}
                  <div className="mt-8 flex flex-col sm:flex-row items-center justify-between p-8 bg-gradient-to-r from-blue-50 to-gray-50 rounded-xl">
                    <div>
                      <span className="text-gray-600 text-sm font-medium">Course Fee</span>
                      <p className="text-4xl font-bold text-gray-900">{course.price}</p>
                      <p className="text-sm text-gray-600 mt-1">One-time payment</p>
                    </div>
                    <div className="mt-6 sm:mt-0 flex flex-col sm:flex-row gap-4">
                      <motion.button 
                        onClick={() => scrollToSection('enroll')}
                        className="bg-blue-600 text-white px-8 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Enroll Now
                        <ArrowRight className="ml-2 h-5 w-5" />
                      </motion.button>
                      <motion.button 
                       onClick={() => scrollToSection('contactt')}
                        className="border-2 border-blue-600 text-blue-600 px-8 py-3 rounded-lg font-medium hover:bg-blue-50 transition-colors"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        Contact
                      </motion.button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Courses;