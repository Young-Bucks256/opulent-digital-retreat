
import React from 'react';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import SuitesSection from '../components/SuitesSection';
import DiningSection from '../components/DiningSection';
import BookingWidget from '../components/BookingWidget';
import TestimonialsSection from '../components/TestimonialsSection';
import ContactSection from '../components/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <BookingWidget />
      <SuitesSection />
      <DiningSection />
      <TestimonialsSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-charcoal text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8 mb-8">
            <div>
              <h3 className="font-playfair text-2xl font-bold mb-4">The Azure Grand</h3>
              <p className="font-montserrat text-white/80 leading-relaxed">
                Where luxury meets perfection. Experience the pinnacle of hospitality 
                at our award-winning five-star resort.
              </p>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2 font-montserrat text-white/80">
                <li><a href="#suites" className="hover:text-gold transition-colors">Suites</a></li>
                <li><a href="#dining" className="hover:text-gold transition-colors">Dining</a></li>
                <li><a href="#spa" className="hover:text-gold transition-colors">Spa</a></li>
                <li><a href="#experiences" className="hover:text-gold transition-colors">Experiences</a></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-montserrat font-semibold mb-4">Contact</h4>
              <div className="space-y-2 font-montserrat text-white/80">
                <p>+1 (555) 123-4567</p>
                <p>reservations@azuregrand.com</p>
                <p>1247 Luxury Beach Drive<br />Paradise Coast, PC 12345</p>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-8 text-center">
            <p className="font-montserrat text-white/60">
              © 2024 The Azure Grand. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
