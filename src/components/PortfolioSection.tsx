
import React, { useState } from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

export const PortfolioSection = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  
  const filters = ['All', 'Web Apps', 'Mobile Apps', 'AI Projects', 'Blockchain', 'E-commerce'];
  
  const projects = [
    {
      id: 1,
      title: 'AI-Powered CRM System',
      category: 'AI Projects',
      image: '/api/placeholder/400/300',
      tags: ['AI', 'Machine Learning', 'CRM', 'Analytics'],
      description: 'Intelligent customer relationship management system with predictive analytics and automated workflows.',
      metrics: { performance: '40% faster', satisfaction: '95% client satisfaction' },
      link: '#'
    },
    {
      id: 2,
      title: 'E-Commerce Platform',
      category: 'Web Apps',
      image: '/api/placeholder/400/300',
      tags: ['React', 'Node.js', 'Payment Gateway', 'Analytics'],
      description: 'Scalable e-commerce solution with real-time inventory management and advanced analytics.',
      metrics: { performance: '60% increase in sales', satisfaction: '98% uptime' },
      link: '#'
    },
    {
      id: 3,
      title: 'Blockchain Voting App',
      category: 'Blockchain',
      image: '/api/placeholder/400/300',
      tags: ['Blockchain', 'Smart Contracts', 'Ethereum', 'Security'],
      description: 'Secure and transparent voting application built on blockchain technology.',
      metrics: { performance: '100% transparent', satisfaction: 'Zero fraud cases' },
      link: '#'
    },
    {
      id: 4,
      title: 'Healthcare Mobile App',
      category: 'Mobile Apps',
      image: '/api/placeholder/400/300',
      tags: ['React Native', 'Healthcare', 'Telemedicine', 'IoT'],
      description: 'Comprehensive healthcare app connecting patients with doctors through telemedicine.',
      metrics: { performance: '50% faster consultations', satisfaction: '4.8/5 rating' },
      link: '#'
    },
    {
      id: 5,
      title: 'FinTech Dashboard',
      category: 'Web Apps',
      image: '/api/placeholder/400/300',
      tags: ['FinTech', 'Analytics', 'Real-time', 'Security'],
      description: 'Real-time financial analytics dashboard with advanced security features.',
      metrics: { performance: '99.9% uptime', satisfaction: 'Bank-grade security' },
      link: '#'
    },
    {
      id: 6,
      title: 'Supply Chain Solution',
      category: 'Blockchain',
      image: '/api/placeholder/400/300',
      tags: ['Supply Chain', 'IoT', 'Blockchain', 'Tracking'],
      description: 'End-to-end supply chain tracking solution with IoT integration.',
      metrics: { performance: '35% cost reduction', satisfaction: '100% traceability' },
      link: '#'
    }
  ];

  const filteredProjects = activeFilter === 'All' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  return (
    <section id="portfolio" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Our Latest
            <span className="text-orange-500"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            Discover how we've helped businesses transform their operations with innovative technology solutions.
          </p>
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-on-scroll">
          {filters.map((filter) => (
            <Button
              key={filter}
              variant={activeFilter === filter ? "default" : "outline"}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2 transition-all duration-300 ${
                activeFilter === filter 
                  ? 'bg-orange-500 hover:bg-orange-600 text-white' 
                  : 'border-gray-300 text-gray-600 hover:border-orange-500 hover:text-orange-500'
              }`}
            >
              {filter}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {filteredProjects.map((project, index) => (
            <div
              key={project.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 hover:border-orange-200 animate-on-scroll transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Button
                    variant="secondary"
                    size="sm"
                    className="bg-white/90 text-gray-900 hover:bg-white"
                  >
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View Project
                  </Button>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.slice(0, 3).map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary" className="text-xs bg-orange-100 text-orange-700">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-900 transition-colors duration-300">
                  {project.title}
                </h3>

                <p className="text-gray-600 mb-4 font-raleway leading-relaxed">
                  {project.description}
                </p>

                {/* Metrics */}
                <div className="space-y-2 mb-4">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Performance:</span>
                    <span className="font-semibold text-green-600">{project.metrics.performance}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-gray-500">Result:</span>
                    <span className="font-semibold text-blue-600">{project.metrics.satisfaction}</span>
                  </div>
                </div>

                <Button 
                  variant="ghost" 
                  className="w-full text-orange-500 hover:text-orange-600 hover:bg-orange-50 group-hover:translate-x-1 transition-all duration-300"
                >
                  Read Case Study
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center animate-on-scroll">
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
            View All Projects
          </Button>
        </div>
      </div>
    </section>
  );
};
