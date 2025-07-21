import React, { useEffect, useState } from 'react';
import { ChevronDown } from 'lucide-react';

const Hero: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  const scrollToAbout = () => {
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      aboutSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section 
      id="home" 
      className="relative h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.4)), url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-black/60"></div>
      
      {/* Content */}
      <div className={`relative z-10 text-center px-4 transform transition-all duration-1500 ${isLoaded ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 tracking-wider">
          <span className="text-white">STON</span>
          <span className="text-yellow-400">IFY</span>
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl mb-8 text-gray-200 font-light tracking-wide">
          Premium Marble & Granite Solutions
        </p>
        <p className="text-lg md:text-xl mb-12 text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Discover the finest collection of natural stones that transform spaces into masterpieces
        </p>
        
        <button 
          onClick={scrollToAbout}
          className="group bg-yellow-400 text-black px-8 py-4 text-lg font-semibold hover:bg-yellow-300 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl"
        >
          Explore Our Collection
          <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300 inline-block">→</span>
        </button>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2">
        <button 
          onClick={scrollToAbout}
          className="text-white hover:text-yellow-400 transition-colors duration-300 animate-bounce"
        >
          <ChevronDown size={32} />
        </button>
      </div>
    </section>
  );
};

export default Hero;