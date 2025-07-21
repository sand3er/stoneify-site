import React, { useEffect, useState } from 'react';
import { Award, Users, Clock, Star } from 'lucide-react';

const About: React.FC = () => {
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

    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      observer.observe(aboutSection);
    }

    return () => observer.disconnect();
  }, []);

  const features = [
    {
      icon: <Award className="text-yellow-400" size={32} />,
      title: "Premium Quality",
      description: "Only the finest natural stones sourced from the best quarries worldwide"
    },
    {
      icon: <Users className="text-yellow-400" size={32} />,
      title: "Expert Craftsmanship",
      description: "Skilled artisans with decades of experience in stone cutting and finishing"
    },
    {
      icon: <Clock className="text-yellow-400" size={32} />,
      title: "Timely Delivery",
      description: "Efficient logistics ensuring your projects stay on schedule"
    },
    {
      icon: <Star className="text-yellow-400" size={32} />,
      title: "Customer Satisfaction",
      description: "Dedicated to exceeding expectations with every project"
    }
  ];

  return (
    <section 
      id="about" 
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.9)), url('https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            About <span className="text-yellow-400">STONIFY</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl md:text-2xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
            STONIFY stands as a leading marble and granite supplier, offering top-tier quality stones 
            with modern textures and stunning natural designs. We transform architectural visions into 
            reality with our premium collection of natural stones.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`bg-gray-900/80 p-8 backdrop-blur-sm border border-gray-700 hover:border-yellow-400 transition-all duration-500 hover:transform hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <div className="text-center">
                <div className="mb-4 flex justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold mb-4 text-white">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;