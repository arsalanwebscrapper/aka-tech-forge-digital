
import React, { useState } from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, MapPin, Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';

export const Footer = () => {
  const [email, setEmail] = useState('');
  const { toast } = useToast();

  const handleNewsletterSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Subscribed!",
      description: "Thanks for subscribing to our newsletter.",
    });
    setEmail('');
  };

  const quickLinks = [
    { name: 'About Us', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Portfolio', href: '#portfolio' },
    { name: 'Blog', href: '/blog' },
    { name: 'Contact', href: '#contact' },
    { name: 'Awards', href: '#awards' }
  ];

  const services = [
    'Custom Software',
    'Web Development',
    'Mobile Apps',
    'Cloud & DevOps',
    'AI & ML',
    'Blockchain',
    'Cybersecurity',
    'UI/UX Design'
  ];

  const socialLinks = [
    { icon: Facebook, href: '#', name: 'Facebook' },
    { icon: Instagram, href: '#', name: 'Instagram' },
    { icon: Twitter, href: '#', name: 'Twitter' },
    { icon: Linkedin, href: '#', name: 'LinkedIn' }
  ];

  return (
    <footer className="bg-blue-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="col-span-1 lg:col-span-1">
            <div className="mb-6">
              <h3 className="text-2xl font-bold mb-4">AKACorpTech</h3>
              <p className="text-blue-200 font-raleway mb-6">
                Empowering businesses globally with custom software solutions and cutting-edge technology.
              </p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-6">
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200 text-sm">Sector 63, Noida, UP, India</p>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200 text-sm">+91-XXX-XXX-XXXX</p>
              </div>
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-orange-400 mr-3 flex-shrink-0" />
                <p className="text-blue-200 text-sm">hello@akacorptech.com</p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="w-10 h-10 bg-blue-800 rounded-full flex items-center justify-center hover:bg-orange-500 transition-colors duration-300"
                  aria-label={social.name}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300 font-raleway"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Services</h4>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a
                    href="#services"
                    className="text-blue-200 hover:text-orange-400 transition-colors duration-300 font-raleway"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-lg font-semibold mb-6">Stay Updated</h4>
            <p className="text-blue-200 mb-4 font-raleway">
              Subscribe to our newsletter for the latest tech insights and updates.
            </p>
            
            <form onSubmit={handleNewsletterSubmit} className="space-y-3">
              <Input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-blue-800 border-blue-700 text-white placeholder-blue-300 focus:border-orange-400"
              />
              <Button 
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white"
              >
                Subscribe
              </Button>
            </form>

            <div className="mt-6 pt-6 border-t border-blue-800">
              <p className="text-blue-300 text-sm font-raleway">
                <span className="text-orange-400">Coffee = Code Fuel</span> ☕<br />
                Powered by passion & caffeine
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-blue-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-blue-200 text-sm font-raleway">
                © {new Date().getFullYear()} AKACorpTech. All rights reserved.
              </p>
            </div>
            <div className="flex space-x-6">
              <a href="/privacy" className="text-blue-200 hover:text-orange-400 text-sm transition-colors">
                Privacy Policy
              </a>
              <a href="/terms" className="text-blue-200 hover:text-orange-400 text-sm transition-colors">
                Terms of Service
              </a>
              <a href="/cookies" className="text-blue-200 hover:text-orange-400 text-sm transition-colors">
                Cookie Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
