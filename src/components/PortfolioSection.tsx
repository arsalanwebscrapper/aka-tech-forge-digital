
import React from 'react';
import { ExternalLink, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const PortfolioSection = () => {
  const projects = [
    {
      id: 1,
      title: "Website Design",
      subtitle: "STOCK STRATEGIX",
      description: "Welcome to Stock Strategix, India's premier stock market service, delivering cutting-edge market insights, trend analysis, and personalized investment strategies for traders and investors.",
      image: "/placeholder.svg",
      category: "Design",
      tags: ["UI/UX", "Responsive", "Finance"]
    },
    {
      id: 2,
      title: "Website Development",
      subtitle: "Crush Car",
      description: "Dispose of your old or unfit vehicle with complete peace of mind. We provide an end-to-end legal scrapping service—transparent, fast, and fully compliant with government norms.",
      image: "/placeholder.svg",
      category: "Development",
      tags: ["Web App", "Legal", "Service"]
    },
    {
      id: 3,
      title: "Software Development",
      subtitle: "B2B International Pvt Ltd",
      description: "At B2B International Pvt Ltd, we help you make smart, profitable financial decisions with expert guidance and customized solutions—whether you're a new investor or an experienced trader.",
      image: "/placeholder.svg",
      category: "Software",
      tags: ["B2B", "Finance", "Trading"]
    }
  ];

  return (
    <section id="portfolio" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Our Latest 
            <span className="text-orange-500"> Success Stories</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            Discover how we've helped businesses transform their digital presence and achieve remarkable results.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 animate-on-scroll">
              <div className="relative overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.subtitle}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 bg-orange-500 text-white text-sm rounded-full font-semibold">
                    {project.category}
                  </span>
                </div>
              </div>
              
              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-3">
                  {project.tags.map((tag, index) => (
                    <span key={index} className="px-2 py-1 bg-gray-100 text-gray-600 text-xs rounded-md">
                      {tag}
                    </span>
                  ))}
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-2 font-montserrat">
                  {project.title}
                </h3>
                <h4 className="text-lg font-semibold text-orange-500 mb-3">
                  {project.subtitle}
                </h4>
                <p className="text-gray-600 mb-6 font-raleway leading-relaxed">
                  {project.description}
                </p>
                
                <Button 
                  variant="outline" 
                  className="group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all duration-300"
                >
                  View Details
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12 animate-on-scroll">
          <Button size="lg" className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3">
            View All Projects
            <ExternalLink className="ml-2 w-5 h-5" />
          </Button>
        </div>
      </div>
    </section>
  );
};
