
import React from 'react';
import { Code, Smartphone, Cloud, Shield, Brain, Blocks, Palette, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const ServicesSection = () => {
  const services = [
    {
      icon: Code,
      title: 'Custom Software',
      description: 'Build enterprise-grade systems tailored to your business needs with scalable architecture.',
      features: ['Enterprise Applications', 'API Development', 'Database Design', 'System Integration'],
      isLarge: true
    },
    {
      icon: Smartphone,
      title: 'Mobile Apps',
      description: 'Native and cross-platform mobile applications for iOS and Android.',
      features: ['React Native', 'Flutter', 'Native iOS/Android']
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'Scalable cloud infrastructure and automated deployment pipelines.',
      features: ['AWS/Azure', 'Docker', 'CI/CD Pipelines']
    },
    {
      icon: Shield,
      title: 'Cybersecurity',
      description: 'Comprehensive security solutions to protect your digital assets.',
      features: ['Security Audits', 'Penetration Testing', 'Compliance']
    },
    {
      icon: Brain,
      title: 'AI & Machine Learning',
      description: 'Intelligent solutions powered by artificial intelligence and ML algorithms.',
      features: ['Predictive Analytics', 'NLP', 'Computer Vision'],
      isLarge: true
    },
    {
      icon: Blocks,
      title: 'Blockchain',
      description: 'Decentralized applications and smart contract development.',
      features: ['Smart Contracts', 'DApps', 'Tokenization']
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'User-centered design that creates engaging digital experiences.',
      features: ['User Research', 'Prototyping', 'Design Systems']
    },
    {
      icon: TrendingUp,
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies to grow your online presence.',
      features: ['SEO/SEM', 'Social Media', 'Analytics']
    }
  ];

  return (
    <section id="services" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 animate-on-scroll">
          <h2 className="text-4xl font-bold text-gray-900 mb-4 font-montserrat">
            Complete IT Services for 
            <span className="text-orange-500"> Modern Businesses</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-raleway">
            From concept to deployment, we provide end-to-end technology solutions 
            that drive innovation and business growth.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {services.map((service, index) => (
            <div
              key={index}
              className={`group relative bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-orange-200 animate-on-scroll ${
                service.isLarge ? 'md:col-span-2 lg:col-span-2' : ''
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/5 to-orange-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              
              <div className={`p-6 relative z-10 ${service.isLarge ? 'md:p-8' : ''}`}>
                <div className="flex items-center mb-4">
                  <div className="p-3 bg-orange-100 rounded-lg group-hover:bg-orange-500 transition-colors duration-300">
                    <service.icon className="w-6 h-6 text-orange-500 group-hover:text-white transition-colors duration-300" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 ml-4 group-hover:text-blue-900 transition-colors duration-300">
                    {service.title}
                  </h3>
                </div>
                
                <p className="text-gray-600 mb-4 font-raleway leading-relaxed">
                  {service.description}
                </p>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <div className="w-1.5 h-1.5 bg-orange-500 rounded-full mr-3"></div>
                      {feature}
                    </li>
                  ))}
                </ul>

                <Button 
                  variant="ghost" 
                  className="text-orange-500 hover:text-orange-600 hover:bg-orange-50 p-0 h-auto font-semibold group-hover:translate-x-1 transition-transform duration-300"
                >
                  Learn More →
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="text-center animate-on-scroll">
          <p className="text-gray-600 mb-6 font-raleway">
            Ready to transform your business with cutting-edge technology?
          </p>
          <Button className="bg-blue-900 hover:bg-blue-800 text-white px-8 py-3 text-lg">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};
