import React, { useEffect, useState } from 'react';
import { Phone, Mail, MapPin, Globe } from 'lucide-react';

const Contact: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    const contactSection = document.getElementById('contact');
    if (contactSection) {
      observer.observe(contactSection);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: <Phone className="text-yellow-400" size={32} />,
      label: "Phone",
      value: "+92 308 3333324",
      link: "tel:+923083333324"
    },
    {
      icon: <Mail className="text-yellow-400" size={32} />,
      label: "Email",
      value: "contact@stonify.co",
      link: "mailto:contact@stonify.co"
    },
    {
      icon: <Globe className="text-yellow-400" size={32} />,
      label: "Website",
      value: "www.stonify.co",
      link: "https://www.stonify.co"
    },
    {
      icon: <MapPin className="text-yellow-400" size={32} />,
      label: "Location",
      value: "Plot 247, Street 6, I-9/2, Islamabad, Pakistan",
      link: "https://maps.google.com/?q=Plot+247,+Street+6,+I-9/2,+Islamabad,+Pakistan"
    }
  ];

  return (
    <section 
      id="contact" 
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.85), rgba(0,0,0,0.85)), url('https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Contact <span className="text-yellow-400">Us</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Ready to transform your space? Get in touch with our experts today
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <div className={`space-y-8 transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : '-translate-x-10 opacity-0'}`}>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Get In Touch</h3>
              <div className="mb-8">
                <h4 className="text-xl font-semibold text-yellow-400 mb-2">M. Muhadis Mughal</h4>
                <p className="text-gray-400">Owner & Founder</p>
              </div>
              
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <a
                    key={index}
                    href={item.link}
                    target={item.label === 'Website' || item.label === 'Location' ? '_blank' : undefined}
                    rel={item.label === 'Website' || item.label === 'Location' ? 'noopener noreferrer' : undefined}
                    className="flex items-start space-x-4 p-4 rounded-lg hover:bg-gray-800/50 transition-all duration-300 group"
                  >
                    <div className="flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="text-lg font-semibold text-white mb-1 group-hover:text-yellow-400 transition-colors duration-300">
                        {item.label}
                      </h4>
                      <p className="text-gray-400 group-hover:text-gray-300 transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Company Showcase */}
          <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-x-0 opacity-100' : 'translate-x-10 opacity-0'}`}>
            <div className="bg-gray-900/80 backdrop-blur-sm p-8 rounded-lg border border-gray-700">
              <h3 className="text-2xl font-bold mb-6 text-white">Why Choose STONIFY?</h3>
              <div className="space-y-6">
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Premium Quality Stones</h4>
                  <p className="text-gray-400">
                    We source only the finest marble and granite from renowned quarries worldwide, 
                    ensuring exceptional quality and durability.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Expert Consultation</h4>
                  <p className="text-gray-400">
                    Our experienced team provides professional guidance to help you select 
                    the perfect stone for your project.
                  </p>
                </div>
                <div className="border-l-4 border-yellow-400 pl-6">
                  <h4 className="text-lg font-semibold text-white mb-2">Custom Solutions</h4>
                  <p className="text-gray-400">
                    From residential kitchens to commercial spaces, we offer tailored 
                    solutions to meet your specific requirements.
                  </p>
                </div>
              </div>
              
              <div className="mt-8 p-6 bg-yellow-400/10 rounded-lg border border-yellow-400/20">
                <h4 className="text-lg font-semibold text-yellow-400 mb-2">Ready to Start Your Project?</h4>
                <p className="text-gray-300 mb-4">
                  Contact us today for a free consultation and quote. Let's bring your vision to life 
                  with the beauty of natural stone.
                </p>
                <a 
                  href="tel:+923083333324"
                  className="inline-block bg-yellow-400 text-black px-6 py-3 font-semibold rounded hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105"
                >
                  Call Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="mt-20 border-t border-gray-800 pt-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h3 className="text-3xl font-bold mb-4">
              <span className="text-white">STON</span>
              <span className="text-yellow-400">IFY</span>
            </h3>
            <p className="text-gray-400">
              © 2025 STONIFY. All rights reserved. Premium Marble & Granite Solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;