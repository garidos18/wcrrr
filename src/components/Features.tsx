import React from 'react';
import { BookOpen, Users, Clock, Award, TrendingUp, Shield } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="h-6 w-6 text-blue-600" />,
    title: 'Live Interactive Classes',
    description: 'Learn in real-time with our expert instructors through interactive online sessions.'
  },
  {
    icon: <Users className="h-6 w-6 text-blue-600" />,
    title: 'Small Batch Sizes',
    description: 'Limited students per batch ensures personalized attention and better learning outcomes.'
  },
  {
    icon: <Clock className="h-6 w-6 text-blue-600" />,
    title: 'Flexible Schedules',
    description: 'Choose from multiple batch timings to fit your personal and professional commitments.'
  },
  {
    icon: <Award className="h-6 w-6 text-blue-600" />,
    title: 'Certified Instructors',
    description: 'Learn from SEBI registered, experienced traders with proven track records.'
  },
  {
    icon: <TrendingUp className="h-6 w-6 text-blue-600" />,
    title: 'Practical Trading Strategies',
    description: 'Focus on actionable, real-world trading techniques that deliver results.'
  },
  {
    icon: <Shield className="h-6 w-6 text-blue-600" />,
    title: 'Lifetime Support',
    description: 'Get ongoing assistance and updates even after course completion.'
  }
];

const Features = () => {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Why Choose Wealth Creation?</h2>
          <p className="mt-4 max-w-2xl mx-auto text-lg text-gray-600">
            Our unique approach to trading education sets us apart from the competition.
          </p>
        </div>
        
        <div className="mt-12 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow border border-gray-100">
              <div className="p-2 bg-blue-50 rounded-full w-12 h-12 flex items-center justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="text-lg font-medium text-gray-900">{feature.title}</h3>
              <p className="mt-2 text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;