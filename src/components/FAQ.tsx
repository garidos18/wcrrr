import React, { useState } from 'react';
import { ChevronDown, ChevronRight, ChevronUp, Clock } from 'lucide-react';
import { Mail, MessageSquare } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const faqs = [
  {
    question: 'What is Wealth Creation, and how can it help me?',
    answer: 'Wealth Creation is a financial education platform focused on teaching you the skills to trade in equity and stock markets effectively. Our courses and mentorship programs provide you with the knowledge, strategies, and confidence needed to make informed financial decisions and build long-term wealth.'
  },
  {
    question: 'Do I need prior experience in trading to join?',
    answer: 'No prior experience is required! Our courses are designed for all skill levels, from beginners to advanced traders. Each course is structured to build your knowledge progressively, ensuring a solid understanding at every level.'
  },
  {
    question: 'What makes your training unique?',
    answer: 'Our courses are designed by an experienced research analyst and focus on practical, actionable strategies.'
  },
  {
    question: 'Do you provide support after the course?',
    answer: 'Yes, we offer post-course support, including query resolution and strategy updates.'
  },
  {
    question: 'Are the courses self-paced?',
    answer: 'Yes, all our courses are on-demand, allowing you to learn at your own pace. You\'ll have lifetime access to course materials, so you can revisit the content whenever you need to.'
  },
  {
    question: 'What sets Wealth Creation apart from other trading platforms?',
    answer: 'Wealth Creation is unique in offering a step-by-step approach with practical applications, real-world case studies, and personalized mentorship. Our focus is on long-term wealth creation rather than quick wins, ensuring our clients build sustainable trading skills.'
  },
  {
    question: 'What if I have questions while taking a course?',
    answer: 'We\'re here to support you! You can reach out to our dedicated support team anytime during your learning journey. Additionally, if you\'re enrolled in a mentorship program, your mentor will be available to answer your questions.'
  },
  {
    question: 'How can I get started?',
    answer: 'Getting started is easy! Simply browse our available courses, choose the one that best fits your goals, and enroll through our secure platform. Once enrolled, you\'ll get immediate access to the course materials and can begin your learning journey.'
  }
];
const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(0);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? -1 : index);
  };

  return (
    <section id="faq" className="py-16 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Find answers to common questions about our courses and teaching methodology.
          </p>
        </motion.div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div 
              key={index} 
              className={`border-2 rounded-lg transition-colors ${
                openIndex === index 
                  ? 'border-blue-200 bg-blue-50' 
                  : hoveredIndex === index 
                    ? 'border-gray-300' 
                    : 'border-gray-200'
              }`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="flex justify-between items-center w-full p-5 text-left"
                aria-expanded={openIndex === index}
                aria-controls={`faq-answer-${index}`}
              >
                <span className="font-medium text-gray-900 flex-1 pr-4">{faq.question}</span>
                <motion.div
                  initial={false}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <ChevronDown className={`h-5 w-5 ${
                    openIndex === index ? 'text-blue-600' : 'text-gray-400'
                  }`} />
                </motion.div>
              </button>
              
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div 
                    id={`faq-answer-${index}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                    className="overflow-hidden"
                  >
                    <p className="px-5 pb-5 text-gray-600">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="mt-16 bg-gradient-to-br from-gray-50 to-white rounded-2xl p-8 shadow-lg border border-gray-100"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div id='contactt' className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900">Still have questions?</h3>
            <p className="mt-2 text-gray-600">
              Our support team is here to help. Choose your preferred way to reach us.
            </p>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto">
            <motion.a 
              href="mailto:wealthcreation.in@gmail.com"
              className="group bg-white shadow-md hover:shadow-xl border-2 border-blue-100 hover:border-blue-500 p-6 rounded-xl transition-all flex flex-col items-center text-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-blue-100 p-3 rounded-full group-hover:bg-blue-600 transition-colors">
                <Mail className="h-6 w-6 text-blue-600 group-hover:text-white" />
              </div>
              <h4 className="mt-4 font-medium text-gray-900">Email Support</h4>
              <p className="mt-2 text-sm text-gray-500">
                Get detailed assistance via email within 24 hours
              </p>
              <span className="mt-4 text-blue-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Send Email
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </motion.a>

            <motion.a 
              href="https://wa.me/917402557830"
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-white shadow-md hover:shadow-xl border-2 border-green-100 hover:border-green-500 p-6 rounded-xl transition-all flex flex-col items-center text-center"
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <div className="bg-green-100 p-3 rounded-full group-hover:bg-green-600 transition-colors">
                <MessageSquare className="h-6 w-6 text-green-600 group-hover:text-white" />
              </div>
              <h4 className="mt-4 font-medium text-gray-900">WhatsApp Support</h4>
              <p className="mt-2 text-sm text-gray-500">
                Get instant support via WhatsApp during business hours
              </p>
              <span className="mt-4 text-green-600 font-medium inline-flex items-center group-hover:translate-x-1 transition-transform">
                Chat Now
                <ChevronRight className="ml-1 h-4 w-4" />
              </span>
            </motion.a>
          </div>

          <div className="mt-8 text-center text-sm text-gray-500 flex items-center justify-center">
            <Clock className="h-4 w-4 mr-2" />
            <p>Available Monday to Friday, 6:00 PM - 9:00 PM IST</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default FAQ;