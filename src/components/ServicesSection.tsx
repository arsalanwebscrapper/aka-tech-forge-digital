
import React from 'react';
import { Code, Smartphone, Cloud, Brain, Blocks, BarChart3, MessageSquare } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: "Custom Software Development",
      description: "Tailored software solutions built to meet your unique business requirements and scale with your growth.",
      features: ["Web Applications", "Desktop Software", "API Development", "System Integration"]
    },
    {
      icon: Smartphone,
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications that deliver exceptional user experiences.",
      features: ["iOS Development", "Android Development", "React Native", "Flutter"]
    },
    {
      icon: Cloud,
      title: "Cloud & DevOps Solutions",
      description: "Scalable cloud infrastructure and streamlined deployment processes for modern businesses.",
      features: ["AWS/Azure Setup", "CI/CD Pipelines", "Containerization", "Monitoring"]
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Intelligent solutions that automate processes and provide data-driven insights.",
      features: ["Predictive Analytics", "NLP Solutions", "Computer Vision", "ML Models"]
    },
    {
      icon: Blocks,
      title: "Blockchain Development",
      description: "Secure and transparent blockchain solutions for various industry applications.",
      features: ["Smart Contracts", "DeFi Solutions", "NFT Platforms", "Cryptocurrency"]
    },
    {
      icon: BarChart3,
      title: "Digital Marketing",
      description: "Comprehensive digital marketing strategies to boost your online presence and drive growth.",
      features: ["SEO Optimization", "Social Media", "PPC Campaigns", "Content Marketing"]
    }
  ];

  const handleWhatsAppContact = () => {
    const phoneNumber = "+917678245132";
    const message = "Hi! I'm interested in your services. Can you please provide more information?";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Our 
            <span className="text-orange-500"> Services</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            We provide comprehensive technology solutions to help your business thrive in the digital age.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-8 group animate-on-scroll">
              <div className="w-16 h-16 bg-orange-100 rounded-lg flex items-center justify-center mb-6 group-hover:bg-orange-500 transition-colors duration-300">
                <service.icon className="w-8 h-8 text-orange-500 group-hover:text-white transition-colors duration-300" />
              </div>
              
              <h3 className="text-xl font-bold text-gray-900 mb-4 font-montserrat">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 font-raleway">
                {service.description}
              </p>
              
              <ul className="space-y-2 mb-6">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                    <div className="w-2 h-2 bg-orange-500 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
              
              <Button 
                onClick={handleWhatsAppContact}
                className="w-full bg-green-500 hover:bg-green-600 text-white"
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                Contact via WhatsApp
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
