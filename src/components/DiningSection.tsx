
import React from 'react';
import { Clock, Users, Award, ChefHat, Wine, Utensils } from 'lucide-react';

const DiningSection = () => {
  const restaurants = [
    {
      name: 'Lumière',
      cuisine: 'French Fine Dining',
      image: 'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      chef: 'Chef Marcel Dubois',
      michelin: '2 Stars',
      description: 'An exquisite culinary journey featuring contemporary French cuisine with innovative molecular gastronomy techniques.',
      hours: '6:00 PM - 11:00 PM',
      capacity: '60 guests',
      dresscode: 'Formal Attire Required'
    },
    {
      name: 'Sakura Zen',
      cuisine: 'Japanese Omakase',  
      image: 'https://images.unsplash.com/photo-1579952363873-27d3bfad9c0d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      chef: 'Chef Takeshi Yamamoto',
      michelin: '1 Star',
      description: 'Authentic Japanese cuisine featuring the freshest sashimi and traditional kaiseki dining experience.',
      hours: '7:00 PM - 10:00 PM',
      capacity: '24 guests',
      dresscode: 'Smart Casual'
    },
    {
      name: 'Oceanside Terrace',
      cuisine: 'Mediterranean Coastal',
      image: 'https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      chef: 'Chef Isabella Romano',
      michelin: 'Recommended',
      description: 'Fresh Mediterranean flavors with panoramic ocean views, featuring the finest seafood and organic ingredients.',
      hours: '12:00 PM - 10:00 PM',
      capacity: '120 guests',
      dresscode: 'Resort Casual'
    }
  ];

  const experiences = [
    {
      title: 'Wine Pairing Dinner',
      description: 'Seven-course tasting menu paired with rare vintages',
      price: '$450 per person',
      icon: Wine
    },
    {
      title: 'Chef\'s Table Experience',
      description: 'Exclusive kitchen dining with chef interaction',
      price: '$350 per person', 
      icon: ChefHat
    },
    {
      title: 'Private Dining',
      description: 'Intimate dining room for special celebrations',
      price: 'From $200 per person',
      icon: Users
    }
  ];

  return (
    <section id="dining" className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Culinary Excellence
          </h2>
          <p className="font-montserrat text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Embark on a gastronomic journey crafted by world-renowned chefs, 
            where each dish tells a story of passion, artistry, and culinary innovation.
          </p>
        </div>

        {/* Restaurants */}
        <div className="space-y-16 mb-20">
          {restaurants.map((restaurant, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} gap-12 items-center`}>
              {/* Restaurant Image */}
              <div className="lg:w-1/2">
                <div className="relative overflow-hidden rounded-lg luxury-hover">
                  <img 
                    src={restaurant.image} 
                    alt={restaurant.name}
                    className="w-full h-96 object-cover transition-transform duration-700 hover:scale-110"
                  />
                  <div className="absolute top-4 left-4 bg-gold text-charcoal px-4 py-2 rounded-full">
                    <div className="flex items-center space-x-2">
                      <Award size={16} />
                      <span className="font-montserrat font-semibold text-sm">{restaurant.michelin}</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Restaurant Details */}
              <div className="lg:w-1/2 space-y-6">
                <div>
                  <h3 className="font-playfair text-4xl font-bold mb-2">{restaurant.name}</h3>
                  <p className="font-montserrat text-gold text-lg font-medium mb-1">{restaurant.cuisine}</p>
                  <p className="font-montserrat text-white/80 italic">by {restaurant.chef}</p>
                </div>

                <p className="font-montserrat text-white/90 text-lg leading-relaxed">
                  {restaurant.description}
                </p>

                {/* Restaurant Info */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="flex items-center space-x-3">
                    <Clock className="text-gold" size={20} />
                    <div>
                      <p className="font-montserrat text-sm text-white/60">Hours</p>
                      <p className="font-montserrat text-sm text-white">{restaurant.hours}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Users className="text-gold" size={20} />
                    <div>
                      <p className="font-montserrat text-sm text-white/60">Capacity</p>
                      <p className="font-montserrat text-sm text-white">{restaurant.capacity}</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Utensils className="text-gold" size={20} />
                    <div>
                      <p className="font-montserrat text-sm text-white/60">Dress Code</p>
                      <p className="font-montserrat text-sm text-white">{restaurant.dresscode}</p>
                    </div>
                  </div>
                </div>

                <button className="btn-luxury">
                  Make Reservation
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Special Dining Experiences */}
        <div className="border-t border-white/20 pt-20">
          <div className="text-center mb-16">
            <h3 className="font-playfair text-4xl font-bold mb-4">Exclusive Experiences</h3>
            <p className="font-montserrat text-white/80 text-lg">
              Elevate your dining with our signature culinary experiences
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {experiences.map((experience, index) => (
              <div key={index} className="text-center p-8 bg-white/5 rounded-lg backdrop-blur-sm luxury-hover">
                <experience.icon className="text-gold mx-auto mb-6" size={48} />
                <h4 className="font-playfair text-2xl font-bold mb-4">{experience.title}</h4>
                <p className="font-montserrat text-white/80 mb-6 leading-relaxed">
                  {experience.description}
                </p>
                <p className="font-montserrat text-gold font-semibold text-lg mb-6">
                  {experience.price}
                </p>
                <button className="border border-gold text-gold px-6 py-3 font-montserrat font-medium hover:bg-gold hover:text-charcoal transition-all duration-300">
                  Book Experience
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiningSection;
