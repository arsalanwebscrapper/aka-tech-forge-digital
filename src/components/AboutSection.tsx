
import React from 'react';
import { Users, Award, Globe, Coffee } from 'lucide-react';

export const AboutSection = () => {
  const stats = [
    { icon: Users, label: 'Expert Developers', value: '50+' },
    { icon: Award, label: 'Projects Delivered', value: '200+' },
    { icon: Globe, label: 'Countries Served', value: '15+' },
    { icon: Coffee, label: 'Cups of Coffee', value: '10K+' }
  ];

  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left side - Image */}
          <div className="animate-on-scroll">
            <div className="relative">
              <img
                src="/api/placeholder/600/400"
                alt="AKACorpTech Team"
                className="rounded-lg shadow-2xl w-full h-96 object-cover"
              />
              <div className="absolute -bottom-6 -right-6 bg-orange-500 text-white p-6 rounded-lg shadow-xl">
                <p className="text-2xl font-bold">100%</p>
                <p className="text-sm">Client Satisfaction</p>
              </div>
            </div>
          </div>

          {/* Right side - Content */}
          <div className="animate-on-scroll">
            <h2 className="text-4xl font-bold text-gray-900 mb-6 font-montserrat">
              Empowering Businesses with 
              <span className="text-orange-500"> Digital Innovation</span>
            </h2>
            
            <blockquote className="text-xl text-gray-600 italic mb-6 border-l-4 border-orange-500 pl-6">
              "Empowering businesses globally with custom software solutions that drive growth and transformation."
            </blockquote>
            
            <div className="mb-6">
              <p className="text-gray-600 mb-4 font-raleway">
                At AKACorpTech, we're not just developers – we're digital transformation partners. 
                Based in Noida, we specialize in creating scalable, innovative solutions that help 
                businesses thrive in the digital age.
              </p>
              <p className="text-gray-600 font-raleway">
                From custom software development to AI-powered applications, we combine cutting-edge 
                technology with deep industry expertise to deliver solutions that matter.
              </p>
            </div>

            <div className="flex items-center mb-8">
              <img
                src="/api/placeholder/60/60"
                alt="John Doe, CEO"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-900">John Doe</p>
                <p className="text-gray-600">CEO & Founder, AKACorpTech</p>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
                  <stat.icon className="w-8 h-8 text-orange-500 mx-auto mb-2" />
                  <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
                  <p className="text-sm text-gray-600">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
