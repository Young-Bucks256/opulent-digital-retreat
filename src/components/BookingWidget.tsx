
import React, { useState } from 'react';
import { Calendar, Users, MapPin, Search, Gift } from 'lucide-react';

const BookingWidget = () => {
  const [formData, setFormData] = useState({
    checkIn: '',
    checkOut: '',
    guests: '2',
    rooms: '1',
    promoCode: ''
  });

  const [showPromo, setShowPromo] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Booking search:', formData);
    // Handle booking search logic here
  };

  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-charcoal rounded-2xl p-8 lg:p-12 shadow-2xl">
          <div className="text-center mb-8">
            <h2 className="font-playfair text-3xl md:text-4xl font-bold text-white mb-4">
              Reserve Your Luxury Experience
            </h2>
            <p className="font-montserrat text-white/80 text-lg">
              Find the perfect dates for your unforgettable stay
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Main Booking Fields */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Check-in Date */}
              <div className="space-y-2">
                <label className="block font-montserrat text-white/90 text-sm font-medium">
                  Check-in Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                  <input
                    type="date"
                    name="checkIn"
                    value={formData.checkIn}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Check-out Date */}
              <div className="space-y-2">
                <label className="block font-montserrat text-white/90 text-sm font-medium">
                  Check-out Date
                </label>
                <div className="relative">
                  <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                  <input
                    type="date"
                    name="checkOut"
                    value={formData.checkOut}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                    required
                  />
                </div>
              </div>

              {/* Guests */}
              <div className="space-y-2">
                <label className="block font-montserrat text-white/90 text-sm font-medium">
                  Guests
                </label>
                <div className="relative">
                  <Users className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                  <select
                    name="guests"
                    value={formData.guests}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="1" className="bg-charcoal">1 Guest</option>
                    <option value="2" className="bg-charcoal">2 Guests</option>
                    <option value="3" className="bg-charcoal">3 Guests</option>
                    <option value="4" className="bg-charcoal">4 Guests</option>
                    <option value="5+" className="bg-charcoal">5+ Guests</option>
                  </select>
                </div>
              </div>

              {/* Rooms */}
              <div className="space-y-2">
                <label className="block font-montserrat text-white/90 text-sm font-medium">
                  Rooms
                </label>
                <div className="relative">
                  <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gold" size={20} />
                  <select
                    name="rooms"
                    value={formData.rooms}
                    onChange={handleInputChange}
                    className="w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-lg text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                  >
                    <option value="1" className="bg-charcoal">1 Room</option>
                    <option value="2" className="bg-charcoal">2 Rooms</option>
                    <option value="3" className="bg-charcoal">3 Rooms</option>
                    <option value="4+" className="bg-charcoal">4+ Rooms</option>
                  </select>
                </div>
              </div>
            </div>

            {/* Promo Code Section */}
            <div className="border-t border-white/20 pt-6">
              <button
                type="button"
                onClick={() => setShowPromo(!showPromo)}
                className="flex items-center space-x-2 text-gold hover:text-white transition-colors duration-300"
              >
                <Gift size={16} />
                <span className="font-montserrat text-sm">Have a promo code?</span>
              </button>
              
              {showPromo && (
                <div className="mt-4 max-w-md">
                  <input
                    type="text"
                    name="promoCode"
                    value={formData.promoCode}
                    onChange={handleInputChange}
                    placeholder="Enter promo code"
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                  />
                </div>
              )}
            </div>

            {/* Search Button */}
            <div className="flex justify-center pt-4">
              <button
                type="submit"
                className="btn-luxury text-lg px-16 py-5 flex items-center space-x-3 group"
              >
                <Search size={20} />
                <span>Search Availability</span>
              </button>
            </div>
          </form>

          {/* Additional Info */}
          <div className="mt-8 text-center">
            <p className="font-montserrat text-white/60 text-sm mb-4">
              Best Rate Guarantee • Free Cancellation • Instant Confirmation
            </p>
            
            <div className="flex flex-wrap justify-center gap-6 text-sm font-montserrat text-white/80">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>24/7 Concierge Service</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Complimentary WiFi</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-gold rounded-full"></div>
                <span>Private Airport Transfer</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingWidget;
