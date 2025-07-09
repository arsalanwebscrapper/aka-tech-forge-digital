
import React, { useState, useEffect } from 'react';
import { Menu, X, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useNavigate } from 'react-router-dom';

export const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    'Custom Software',
    'Web Development', 
    'Mobile Apps',
    'Cloud & DevOps',
    'Cybersecurity',
    'AI & ML',
    'Blockchain'
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0 cursor-pointer" onClick={() => navigate('/')}>
            <h1 className="text-2xl font-bold bg-gradient-to-r from-blue-900 to-orange-500 bg-clip-text text-transparent">
              AKACorpTech
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a href="#about" className="text-gray-700 hover:text-blue-900 transition-colors">About</a>
              
              {/* Services Dropdown */}
              <div className="relative group">
                <button 
                  className="flex items-center text-gray-700 hover:text-blue-900 transition-colors"
                  onMouseEnter={() => setIsServicesOpen(true)}
                  onMouseLeave={() => setIsServicesOpen(false)}
                >
                  Services <ChevronDown className="ml-1 h-4 w-4" />
                </button>
                {isServicesOpen && (
                  <div 
                    className="absolute left-0 mt-2 w-48 bg-white rounded-md shadow-lg py-1 z-10"
                    onMouseEnter={() => setIsServicesOpen(true)}
                    onMouseLeave={() => setIsServicesOpen(false)}
                  >
                    {services.map((service, index) => (
                      <a key={index} href="#services" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">
                        {service}
                      </a>
                    ))}
                  </div>
                )}
              </div>
              
              <a href="#portfolio" className="text-gray-700 hover:text-blue-900 transition-colors">Portfolio</a>
              <button onClick={() => navigate('/blog')} className="text-gray-700 hover:text-blue-900 transition-colors">Blog</button>
              <a href="#contact" className="text-gray-700 hover:text-blue-900 transition-colors">Contact</a>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="outline" className="border-blue-900 text-blue-900 hover:bg-blue-900 hover:text-white">
              Get Free Audit
            </Button>
            <Button className="bg-orange-500 hover:bg-orange-600 text-white">
              Talk to Our CTO
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#about" className="block px-3 py-2 text-gray-700">About</a>
            <a href="#services" className="block px-3 py-2 text-gray-700">Services</a>
            <a href="#portfolio" className="block px-3 py-2 text-gray-700">Portfolio</a>
            <button onClick={() => navigate('/blog')} className="block px-3 py-2 text-gray-700 w-full text-left">Blog</button>
            <a href="#contact" className="block px-3 py-2 text-gray-700">Contact</a>
            <div className="px-3 py-2 space-y-2">
              <Button className="w-full bg-orange-500 hover:bg-orange-600 text-white">
                Talk to Our CTO
              </Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};
