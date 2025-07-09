
import React from 'react';
import { Award, Star, Trophy } from 'lucide-react';

export const AwardsSection = () => {
  const awards = [
    {
      icon: Trophy,
      title: 'Tech Innovation Award 2024',
      organization: 'Tech Excellence Council',
      description: 'Recognized for outstanding innovation in AI-powered solutions'
    },
    {
      icon: Star,
      title: 'Best IT Services Company',
      organization: 'Business Excellence Awards',
      description: 'Leading provider of custom software development services'
    },
    {
      icon: Award,
      title: 'Client Choice Award',
      organization: 'Industry Standards Board',
      description: '99% client satisfaction rate across all projects'
    }
  ];

  return (
    <section className="py-20 bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold mb-4 font-montserrat">
            Award-Winning Excellence
          </h2>
          <p className="text-xl opacity-90 font-raleway">
            Recognition for our commitment to quality and innovation
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="text-center p-8 bg-white/10 rounded-xl backdrop-blur-sm hover:bg-white/20 transition-all duration-300 animate-on-scroll"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-orange-500 rounded-full mb-6">
                <award.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-2">{award.title}</h3>
              <p className="text-orange-400 font-semibold mb-4">{award.organization}</p>
              <p className="opacity-90 font-raleway">{award.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
