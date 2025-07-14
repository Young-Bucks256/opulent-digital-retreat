
import React, { useEffect, useState } from 'react';
import { ChevronDown, Star, Award } from 'lucide-react';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  
  const slides = [
    {
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Unparalleled Luxury Awaits',
      subtitle: 'Experience the pinnacle of hospitality in our award-winning resort'
    },
    {
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2080&q=80',
      title: 'Indulge in Unmatched Serenity',
      subtitle: 'Where sophistication meets tranquility'
    },
    {
      image: 'https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
      title: 'Culinary Excellence Redefined',
      subtitle: 'Savor world-class cuisine crafted by renowned chefs'
    }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 6000);
    
    return () => clearInterval(timer);
  }, [slides.length]);

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Background Slider */}
      <div className="absolute inset-0">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-2000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <div 
              className="w-full h-full bg-cover bg-center bg-no-repeat parallax"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
            </div>
          </div>
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
        <div className="max-w-4xl mx-auto">
          {/* Awards */}
          <div className="flex justify-center items-center space-x-6 mb-8 animate-fade-in-up">
            <div className="flex items-center space-x-2 text-gold">
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
              <Star fill="currentColor" size={16} />
            </div>
            <div className="text-white font-montserrat text-sm tracking-wider">
              Forbes Five-Star Award Winner
            </div>
            <Award className="text-gold" size={20} />
          </div>

          {/* Main Content */}
          <h1 className="font-playfair text-5xl md:text-7xl font-bold text-white mb-6 leading-tight animate-fade-in-up">
            {slides[currentSlide].title}
          </h1>
          
          <p className="font-montserrat text-xl md:text-2xl text-white/90 mb-12 font-light tracking-wide animate-fade-in-up">
            {slides[currentSlide].subtitle}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center animate-fade-in-up">
            <button className="btn-luxury text-lg px-12 py-5">
              Reserve Your Suite
            </button>
            <button className="border-2 border-white text-white px-12 py-5 font-montserrat font-medium tracking-wide hover:bg-white hover:text-charcoal transition-all duration-500 luxury-hover">
              Explore Experiences
            </button>
          </div>

          {/* Special Offer Banner */}
          <div className="mt-16 animate-fade-in-up">
            <div className="inline-block glass rounded-lg px-8 py-4">
              <p className="text-white font-montserrat text-sm tracking-wider">
                🎉 <span className="text-gold font-semibold">Exclusive Opening Offer:</span> 
                Complimentary spa treatment with every 3+ night stay
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentSlide(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentSlide ? 'bg-gold scale-125' : 'bg-white/50 hover:bg-white/75'
            }`}
          />
        ))}
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 right-8 animate-float">
        <div className="flex flex-col items-center text-white">
          <span className="font-montserrat text-sm mb-2 tracking-wider">Scroll to explore</span>
          <ChevronDown size={24} className="animate-bounce" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
