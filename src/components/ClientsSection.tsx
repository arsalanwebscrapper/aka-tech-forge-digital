
import React from 'react';

export const ClientsSection = () => {
  const clients = [
    { name: 'TechCorp', logo: '/api/placeholder/120/60' },
    { name: 'InnovateLab', logo: '/api/placeholder/120/60' },
    { name: 'DataFlow', logo: '/api/placeholder/120/60' },
    { name: 'CloudTech', logo: '/api/placeholder/120/60' },
    { name: 'AIVentures', logo: '/api/placeholder/120/60' },
    { name: 'BlockchainCo', logo: '/api/placeholder/120/60' },
    { name: 'FinanceFlow', logo: '/api/placeholder/120/60' },
    { name: 'HealthTech', logo: '/api/placeholder/120/60' }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 animate-on-scroll">
          <h2 className="text-3xl font-bold text-gray-900 mb-4 font-montserrat">
            Trusted by Industry Leaders
          </h2>
          <p className="text-lg text-gray-600 font-raleway">
            We're proud to work with amazing companies across the globe
          </p>
        </div>

        {/* Scrolling Logos */}
        <div className="relative overflow-hidden">
          <div className="flex animate-scroll space-x-12 items-center">
            {[...clients, ...clients].map((client, index) => (
              <div key={index} className="flex-shrink-0">
                <img
                  src={client.logo}
                  alt={client.name}
                  className="h-12 w-auto grayscale hover:grayscale-0 transition-all duration-300 opacity-60 hover:opacity-100"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
      `}</style>
    </section>
  );
};
