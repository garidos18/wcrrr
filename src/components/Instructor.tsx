import { Award, BookOpen, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const stats = [
  { icon: BookOpen, value: '5+ Years', label: 'Trading Experience' },
  { icon: Users, value: '300+', label: 'Students Trained' },
  { icon: TrendingUp, value: '92%', label: 'Success Rate' },
  { icon: Award, value: 'SEBI,NISM', label: 'Certifications' }
];

const specializations = [
  'Technical Analysis', 'Options Trading', 'Risk Management',
  'Market Psychology', 'Swing Trading', 'Futures Trading'
];

const Instructor = () => {
  return (
    <section id="instructor" className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold text-gray-900">Meet Your Instructor</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Learn from an industry expert with a proven track record of success.
          </p>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div 
            className="relative"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            {/* Animated background blobs */}
            <motion.div 
              className="absolute -top-4 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1, 1.2, 1],
                rotate: [0, 45, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.div 
              className="absolute -bottom-4 -right-4 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-xl opacity-70"
              animate={{
                scale: [1.2, 1, 1.2],
                rotate: [45, 0, 45],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <div className="relative aspect-w-16 aspect-h-20 lg:aspect-w-3 lg:aspect-h-4">
              <img 
                src="https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
                alt="Trading Instructor" 
                className="rounded-lg shadow-xl object-cover object-center w-full h-full"
                loading="lazy"
              />
              <motion.div 
                className="absolute -bottom-6 -right-6 bg-white rounded-lg shadow-lg p-4"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                whileHover={{ y: -5 }}
              >
                <div className="flex items-center space-x-2">
                  <Award className="h-8 w-8 text-blue-600" />
                  <div>
                    <p className="text-sm font-medium text-gray-900">SEBI Registered</p>
                    <p className="text-xs text-gray-500">Certified Mentor</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>
          
          <motion.div 
            className="space-y-6"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Bharadan</h3>
              <p className="text-blue-600 font-medium">Trading Instructor & Market Analyst</p>
            </div>
            
            <p className="text-gray-600 leading-relaxed">
              With over 5 years of experience in the financial markets, Bharadan has helped hundreds of students transform their trading journey. His practical approach to teaching complex trading concepts has transformed many people's trading journey.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <motion.div 
                  key={stat.label}
                  className="bg-gray-50 p-4 rounded-lg hover:shadow-md transition-shadow"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  // whileHover={{ y: -2 }}
                >
                  <div className="flex items-center">
                    <stat.icon className="h-10 w-10 text-blue-600 p-2 bg-blue-50 rounded-full" />
                    <div className="ml-3">
                      <p className="text-lg font-bold text-gray-900">{stat.value}</p>
                      <p className="text-sm text-gray-600">{stat.label}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            
            <motion.div 
              className="pt-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <h4 className="text-lg font-medium text-gray-900 mb-3">Specializations</h4>
              <div className="flex flex-wrap gap-2">
                {specializations.map((spec, index) => (
                  <motion.span 
                    key={spec}
                    className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded transition-colors cursor-default"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    // whileHover={{ scale: 1.05 }}
                  >
                    {spec}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Instructor;