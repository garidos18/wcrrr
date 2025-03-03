import React, { useState } from 'react';
import { Calendar, Clock, Users, CheckCircle, ArrowRight, MessageSquare, Key, Monitor, Smartphone, Download } from 'lucide-react';
import { motion } from 'framer-motion';
// import { motion } from 'framer-motion';

const batches = [
  {
    id: 1,
    course: 'Options Trading Pro Course',
    startDate: 'March 17, 2025',
    schedule: 'Mon to Fri (9:00 PM - 10:00 PM)',
    seats: '15 out of 20 filled',
    instructor: 'Bharadan',
    isUpcoming: true,
    status: 'Enrolling Now',
    badge: 'Next Batch',
    statusColor: 'green'
  },
  {
    id: 2,
    course: 'Equity Trading Mastery Course',
    startDate: 'May 2, 2025',
    schedule: 'Mon to Fri (9:00 PM - 10:00 PM)',
    seats: '8 out of 20 filled',
    instructor: 'Bharadan',
    status: 'Early Bird Discount',
    badge: 'Limited Time Offer',
    statusColor: 'blue'
  },
  
];

const mobileSteps = [
  {
    title: 'Download App',
    description: 'Download Classplus App from your device\'s app store',
    icon: <Download className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Enter Org Code',
    description: 'Use the code "kqxjnf" to find our institute',
    icon: <Key className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Mobile Verification',
    description: 'Enter your mobile number and verify with OTP',
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Start Learning',
    description: 'Access your courses and begin your trading journey',
    icon: <Users className="h-6 w-6 text-blue-600" />
  }
];

const desktopSteps = [
  {
    title: 'Visit Website',
    description: 'Go to web.classplusapp.com',
    icon: <Monitor className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Enter Org Code',
    description: 'Use the code "kqxjnf" to find our institute',
    icon: <Key className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Mobile Verification',
    description: 'Enter your mobile number and verify with OTP',
    icon: <MessageSquare className="h-6 w-6 text-blue-600" />
  },
  {
    title: 'Start Learning',
    description: 'Access your courses and begin your trading journey',
    icon: <Users className="h-6 w-6 text-blue-600" />
  }
];


const Enrollment = () => {
  const [selectedCourse, setSelectedCourse] = useState('all');
  const [deviceType, setDeviceType] = useState('desktop');
  
  const filteredBatches = selectedCourse === 'all' 
    ? batches 
    : batches.filter(batch => batch.course.includes(selectedCourse));

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
    <section id="enrollment"className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Upcoming Batches</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Join our next batch of live trading classes and start your journey to financial freedom.
          </p>
        </motion.div>
 

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
  {batches.map(batch => (
    <motion.div 
      key={batch.id} 
      className={`bg-white rounded-xl shadow-xl overflow-hidden ${
        batch.isUpcoming ? 'ring-2 ring-blue-500 ring-offset-2' : 'border border-gray-100'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="p-6">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-bold text-gray-900">{batch.course}</h3>
            <div className="flex items-center mt-2 space-x-2">
              <span className="text-blue-600 font-medium">{batch.startDate}</span>
              <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                batch.statusColor === 'green' ? 'bg-green-100 text-green-800' :
                'bg-blue-100 text-blue-800'
              }`}>
                {batch.badge}
              </span>
            </div>
          </div>
          <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
            batch.statusColor === 'green' ? 'bg-green-100 text-green-800' :
            'bg-blue-100 text-blue-800'
          }`}>
            {batch.status}
          </span>
        </div>
        
        <div className="mt-6 space-y-4">
          <div className="flex items-center">
            <Calendar className="h-5 w-5 text-gray-400" />
            <span className="ml-2 text-sm text-gray-600">{batch.schedule}</span>
          </div>
          <div className="flex items-center">
            <Users className="h-5 w-5 text-gray-400" />
            <span className="ml-2 text-sm text-gray-600">{batch.seats}</span>
          </div>
          <div className="flex items-center">
            <Clock className="h-5 w-5 text-gray-400" />
            <span className="ml-2 text-sm text-gray-600">Instructor: {batch.instructor}</span>
          </div>
        </div>
        
        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-2.5">
            <div className={`bg-blue-600 h-2.5 rounded-full ${
              batch.seats.split(' ')[0] === '15' ? 'w-3/4' : 'w-2/5'
            }`} />
          </div>
          <div className="mt-2 text-xs text-gray-500 text-right">
            {batch.seats.split(' ')[0]} seats filled
          </div>
        </div>
        
        <div className="mt-6 flex justify-end">
          <motion.button 
            onClick={() => scrollToSection('enroll')}
            className="px-6 py-2 rounded-lg font-medium flex items-center bg-blue-600 text-white hover:bg-blue-700 transition-colors"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            Enroll Now
            <ArrowRight className="ml-2 h-4 w-4" />
          </motion.button>
        </div>
      </div>
    </motion.div>
  ))}
</div>
    




















        <div id='enroll' className="bg-gray-50 rounded-lg p-8 mt-12">
          <h3 className="text-2xl font-bold text-gray-900 text-center">How to Enroll</h3>
          <p className="mt-4 text-gray-600 text-center max-w-2xl mx-auto">
            Follow these simple steps to enroll in our courses. Choose your preferred platform to get started.
          </p>
          
          <div className="flex justify-center mt-8 mb-12">
            <div className="inline-flex rounded-lg bg-gray-200 p-1">
              <button
                onClick={() => setDeviceType('desktop')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  deviceType === 'desktop' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Monitor className="h-5 w-5 mr-2" />
                Desktop
              </button>
              <button
                onClick={() => setDeviceType('mobile')}
                className={`flex items-center px-4 py-2 rounded-lg transition-colors ${
                  deviceType === 'mobile' 
                    ? 'bg-white text-blue-600 shadow-sm' 
                    : 'text-gray-600 hover:text-gray-900'
                }`}
              >
                <Smartphone className="h-5 w-5 mr-2" />
                Mobile
              </button>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(deviceType === 'mobile' ? mobileSteps : desktopSteps).map((step, index) => (
              <div key={index} className="relative">
                {index < mobileSteps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-blue-200 z-0"></div>
                )}
                <div className="bg-white rounded-lg shadow-md p-6 relative z-10">
                  <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                    {step.icon}
                  </div>
                  <h4 className="text-lg font-medium text-gray-900">{step.title}</h4>
                  <p className="mt-2 text-gray-600 text-sm">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {deviceType === 'mobile' && (
            <div className="mt-8 flex justify-center">
              <a 
                href="https://play.google.com/store/apps/details?id=co.jorah.qqtww&pcampaignid=web_share"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                Download App
                <Download className="ml-2 h-5 w-5" />
              </a>
            </div>
          )}

          {deviceType === 'desktop' && (
            <div className="mt-8 flex justify-center">
              <a 
                href="https://web.classplusapp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-lg font-medium hover:bg-blue-700 transition-colors flex items-center"
              >
                Go to Website
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </div>
          )}

          <div className="mt-8 p-4 bg-blue-50 rounded-lg">
            <p className="text-center text-sm text-blue-600">
              Need help? Contact our support team at wealthcreation.in@gmail.com
            </p>
          </div>
        </div>



{/* -------------------------------------------------------------------------------------------------------------------------------------------------------------- */}









        <div className="mt-12 bg-blue-600 rounded-lg shadow-lg overflow-hidden">
          <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl md:text-3xl font-bold text-white">Ready to Transform Your Trading?</h3>
              <p className="mt-4 text-blue-100">
                Join our next batch and learn proven trading strategies from industry experts. Limited seats available!
              </p>
              <div className="mt-6 flex flex-col sm:flex-row gap-4">
               <a href="#enroll"> <button className="bg-white text-blue-600 px-6 py-3 rounded-md font-medium hover:bg-blue-50 transition-colors">
                  Enroll Now
                </button></a>
               <a href="#courses"><button className="border border-white text-white px-6 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors">
                 Explore Courses
                </button></a> 
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://images.unsplash.com/photo-1579532537598-459ecdaf39cc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80" 
                alt="Trading Success" 
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Enrollment;