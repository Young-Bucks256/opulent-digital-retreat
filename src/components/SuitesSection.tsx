
import React from 'react';
import { Wifi, Car, Utensils, Waves, Star, ArrowRight } from 'lucide-react';

const SuitesSection = () => {
  const suites = [
    {
      name: 'Presidential Suite',
      image: 'https://images.unsplash.com/photo-1578683010236-d716f9a3f461?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $2,500',
      size: '2,000 sq ft',
      features: ['Ocean View', 'Private Butler', 'Marble Bathroom', 'Terrace'],
      amenities: [Wifi, Car, Utensils, Waves],
      description: 'The epitome of luxury with panoramic ocean views and exclusive amenities.'
    },
    {
      name: 'Royal Oceanfront Suite',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      price: 'From $1,800',
      size: '1,500 sq ft',
      features: ['Beachfront Access', 'Infinity Pool', 'Wine Cellar', 'Chef Service'],
      amenities: [Wifi, Car, Utensils, Waves],
      description: 'Unparalleled beachfront luxury with private pool and dedicated concierge.'
    },
    {
      name: 'Grand Executive Suite',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2074&q=80',
      price: 'From $1,200',
      size: '1,200 sq ft',
      features: ['City Skyline', 'Business Center', 'Meeting Room', 'Lounge Access'],
      amenities: [Wifi, Car, Utensils, Waves],
      description: 'Perfect blend of business sophistication and leisure comfort.'
    }
  ];

  return (
    <section id="suites" className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Exquisite Suites
          </h2>
          <p className="font-montserrat text-xl text-taupe max-w-3xl mx-auto leading-relaxed">
            Each suite is meticulously designed to provide an unparalleled experience of comfort, 
            elegance, and personalized service that exceeds every expectation.
          </p>
          <div className="flex justify-center items-center mt-8 space-x-2">
            {[...Array(5)].map((_, i) => (
              <Star key={i} fill="currentColor" className="text-gold" size={20} />
            ))}
            <span className="ml-4 font-montserrat text-charcoal font-semibold">Forbes Five-Star Rated</span>
          </div>
        </div>

        {/* Suites Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {suites.map((suite, index) => (
            <div key={index} className="luxury-hover bg-white rounded-lg overflow-hidden shadow-xl">
              {/* Suite Image */}
              <div className="relative h-80 overflow-hidden">
                <img 
                  src={suite.image} 
                  alt={suite.name}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
                <div className="absolute top-4 right-4 bg-gold text-white px-4 py-2 rounded-full">
                  <span className="font-montserrat font-semibold text-sm">{suite.price}</span>
                </div>
                <div className="absolute bottom-4 left-4 bg-black/70 text-white px-4 py-2 rounded-lg backdrop-blur-sm">
                  <span className="font-montserrat text-sm">{suite.size}</span>
                </div>
              </div>

              {/* Suite Details */}
              <div className="p-8">
                <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
                  {suite.name}
                </h3>
                
                <p className="font-montserrat text-taupe mb-6 leading-relaxed">
                  {suite.description}
                </p>

                {/* Features */}
                <div className="mb-6">
                  <h4 className="font-montserrat font-semibold text-charcoal mb-3">Key Features</h4>
                  <div className="grid grid-cols-2 gap-2">
                    {suite.features.map((feature, idx) => (
                      <div key={idx} className="flex items-center space-x-2">
                        <div className="w-2 h-2 bg-gold rounded-full"></div>
                        <span className="font-montserrat text-sm text-taupe">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Amenities Icons */}
                <div className="flex justify-between items-center mb-6">
                  {suite.amenities.map((Icon, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                      <Icon className="text-gold mb-1" size={24} />
                    </div>
                  ))}
                </div>

                {/* CTA Button */}
                <button className="w-full bg-charcoal text-white py-4 px-6 font-montserrat font-medium hover:bg-gold transition-colors duration-300 flex items-center justify-center space-x-2 group">
                  <span>Reserve Suite</span>
                  <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Virtual Tour CTA */}
        <div className="text-center mt-16">
          <div className="inline-block bg-white rounded-lg p-8 shadow-lg luxury-hover">
            <h3 className="font-playfair text-2xl font-bold text-charcoal mb-4">
              Experience Before You Arrive
            </h3>
            <p className="font-montserrat text-taupe mb-6">
              Take a 360° virtual tour of our suites from the comfort of your home
            </p>
            <button className="btn-luxury">
              Start Virtual Tour
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SuitesSection;
