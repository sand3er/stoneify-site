import React, { useState, useEffect } from 'react';
import { X, Filter } from 'lucide-react';

interface GalleryImage {
  id: number;
  src: string;
  category: 'marble' | 'granite';
  title: string;
}

const Gallery: React.FC = () => {
  const [filter, setFilter] = useState<'all' | 'marble' | 'granite'>('all');
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
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

    const gallerySection = document.getElementById('gallery');
    if (gallerySection) {
      observer.observe(gallerySection);
    }

    return () => observer.disconnect();
  }, []);

  const images: GalleryImage[] = [
    {
      id: 1,
      src: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "marble",
      title: "White Carrara Marble"
    },
    {
      id: 2,
      src: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "marble",
      title: "Calacatta Gold"
    },
    {
      id: 3,
      src: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "granite",
      title: "Black Galaxy Granite"
    },
    {
      id: 4,
      src: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "granite",
      title: "Kashmir White Granite"
    },
    {
      id: 5,
      src: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "marble",
      title: "Emperador Dark"
    },
    {
      id: 6,
      src: "https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "granite",
      title: "Absolute Black"
    },
    {
      id: 7,
      src: "https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "marble",
      title: "Marble Workshop"
    },
    {
      id: 8,
      src: "https://images.pexels.com/photos/1571453/pexels-photo-1571453.jpeg?auto=compress&cs=tinysrgb&w=1200",
      category: "granite",
      title: "Granite Collection"
    }
  ];

  const filteredImages = filter === 'all' 
    ? images 
    : images.filter(image => image.category === filter);

  return (
    <section 
      id="gallery" 
      className="relative py-20 lg:py-32"
      style={{
        backgroundImage: `linear-gradient(rgba(0,0,0,0.9), rgba(0,0,0,0.8)), url('https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Gallery</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Explore our stunning collection of marble and granite installations
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800/80 backdrop-blur-sm p-2 rounded-lg border border-gray-700">
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-yellow-400" />
              {['all', 'marble', 'granite'].map((category) => (
                <button
                  key={category}
                  onClick={() => setFilter(category as 'all' | 'marble' | 'granite')}
                  className={`px-4 py-2 mx-1 text-lg font-medium rounded transition-all duration-300 ${
                    filter === category
                      ? 'bg-yellow-400 text-black'
                      : 'text-gray-300 hover:text-white hover:bg-gray-700'
                  }`}
                >
                  {category.charAt(0).toUpperCase() + category.slice(1)}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((image, index) => (
            <div 
              key={image.id}
              className={`group relative overflow-hidden rounded-lg cursor-pointer transform transition-all duration-500 hover:scale-105 hover:shadow-2xl ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
              onClick={() => setSelectedImage(image)}
            >
              <img 
                src={image.src} 
                alt={image.title}
                className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-black/60 group-hover:bg-black/40 transition-all duration-300"></div>
              <div className="absolute bottom-0 left-0 right-0 p-4 transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-white font-semibold text-lg">{image.title}</h3>
                <span className="text-yellow-400 text-sm uppercase tracking-wider">
                  {image.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4">
          <div className="relative max-w-4xl max-h-[90vh] mx-auto">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 text-white hover:text-yellow-400 transition-colors duration-200 z-10"
            >
              <X size={32} />
            </button>
            <img 
              src={selectedImage.src} 
              alt={selectedImage.title}
              className="max-w-full max-h-[90vh] object-contain rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 rounded-b-lg">
              <h3 className="text-white text-2xl font-semibold mb-2">{selectedImage.title}</h3>
              <span className="text-yellow-400 text-lg uppercase tracking-wider">
                {selectedImage.category}
              </span>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;