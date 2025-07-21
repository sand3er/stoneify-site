import React, { useState, useEffect } from 'react';

interface Product {
  id: number;
  name: string;
  category: 'marble' | 'granite';
  image: string;
  description: string;
  price?: string;
}

const Products: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'marble' | 'granite'>('all');
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

    const productsSection = document.getElementById('products');
    if (productsSection) {
      observer.observe(productsSection);
    }

    return () => observer.disconnect();
  }, []);

  const products: Product[] = [
    {
      id: 1,
      name: "Carrara White",
      category: "marble",
      image: "https://images.pexels.com/photos/1571463/pexels-photo-1571463.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Classic white marble with elegant gray veining",
      price: "Premium"
    },
    {
      id: 2,
      name: "Calacatta Gold",
      category: "marble",
      image: "https://images.pexels.com/photos/1571461/pexels-photo-1571461.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Luxurious marble with golden veining",
      price: "Luxury"
    },
    {
      id: 3,
      name: "Black Galaxy",
      category: "granite",
      image: "https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Deep black granite with golden speckles",
      price: "Premium"
    },
    {
      id: 4,
      name: "Kashmir White",
      category: "granite",
      image: "https://images.pexels.com/photos/1571457/pexels-photo-1571457.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Light granite with subtle pattern",
      price: "Standard"
    },
    {
      id: 5,
      name: "Emperador Dark",
      category: "marble",
      image: "https://images.pexels.com/photos/1571456/pexels-photo-1571456.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Rich brown marble with light veining",
      price: "Premium"
    },
    {
      id: 6,
      name: "Absolute Black",
      category: "granite",
      image: "https://images.pexels.com/photos/1571454/pexels-photo-1571454.jpeg?auto=compress&cs=tinysrgb&w=800",
      description: "Pure black granite for modern designs",
      price: "Standard"
    }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(product => product.category === activeCategory);

  return (
    <section 
      id="products" 
      className="relative py-20 lg:py-32 bg-gray-900"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`text-center mb-16 transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Our <span className="text-yellow-400">Products</span>
          </h2>
          <div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Discover our extensive collection of premium marble and granite stones
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex justify-center mb-12">
          <div className="bg-gray-800 p-2 rounded-lg">
            {['all', 'marble', 'granite'].map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category as 'all' | 'marble' | 'granite')}
                className={`px-6 py-3 mx-1 text-lg font-medium rounded transition-all duration-300 ${
                  activeCategory === category
                    ? 'bg-yellow-400 text-black'
                    : 'text-gray-300 hover:text-white hover:bg-gray-700'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProducts.map((product, index) => (
            <div 
              key={product.id}
              className={`group bg-gray-800 rounded-lg overflow-hidden hover:shadow-2xl transition-all duration-500 hover:transform hover:scale-105 ${
                isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
            >
              <div className="relative overflow-hidden">
                <img 
                  src={product.image} 
                  alt={product.name}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-all duration-300"></div>
                <div className="absolute top-4 right-4">
                  <span className="bg-yellow-400 text-black px-3 py-1 text-sm font-semibold rounded">
                    {product.price}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-2 text-white group-hover:text-yellow-400 transition-colors duration-300">
                  {product.name}
                </h3>
                <p className="text-gray-400 mb-4">
                  {product.description}
                </p>
                <span className="text-sm text-yellow-400 font-medium uppercase tracking-wider">
                  {product.category}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;