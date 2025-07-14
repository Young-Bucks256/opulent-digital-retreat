
import React, { useState, useEffect } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight } from 'lucide-react';

const TestimonialsSection = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Victoria Hamilton',
      title: 'CEO, Hamilton Enterprises',
      location: 'New York, USA',
      rating: 5,
      text: 'The Azure Grand exceeded every expectation. From the moment we arrived, the attention to detail was extraordinary. The Presidential Suite was absolutely stunning, and the service was impeccable. This is luxury hospitality at its finest.',
      image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'James Wellington',
      title: 'Investment Banker',
      location: 'London, UK',
      rating: 5,
      text: 'Having stayed at five-star hotels worldwide, I can confidently say The Azure Grand sets a new standard. The culinary experience at Lumière was phenomenal, and the spa treatments were absolutely divine. Truly unforgettable.',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Isabella Martinez',
      title: 'Fashion Designer',
      location: 'Milan, Italy',
      rating: 5,
      text: 'The aesthetic beauty of this resort is matched only by the warmth of its service. Every corner is Instagram-worthy, but more importantly, every moment felt genuinely special. The private beach access was the perfect touch.',
      image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    },
    {
      name: 'Robert Chen',
      title: 'Tech Entrepreneur',
      location: 'Singapore',
      rating: 5,
      text: 'The Azure Grand combines traditional luxury with modern innovation perfectly. The smart suite features were impressive, but what truly stood out was the personalized service. They anticipated our every need before we even asked.',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80'
    }
  ];

  const awards = [
    { name: 'Forbes Five-Star', year: '2024' },
    { name: 'AAA Five Diamond', year: '2024' },
    { name: 'World Luxury Hotel Awards', year: '2023' },
    { name: 'Condé Nast Gold List', year: '2024' }
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 8000);
    
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-24 bg-ivory">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold text-charcoal mb-6">
            Guest Experiences
          </h2>
          <p className="font-montserrat text-xl text-taupe max-w-3xl mx-auto leading-relaxed">
            Discover why discerning travelers choose The Azure Grand for their most memorable stays
          </p>
        </div>

        {/* Main Testimonial */}
        <div className="relative bg-white rounded-2xl p-12 shadow-2xl mb-16 luxury-hover">
          <Quote className="text-gold mb-8" size={48} />
          
          <div className="flex flex-col lg:flex-row items-center gap-12">
            {/* Testimonial Content */}
            <div className="lg:w-2/3">
              <p className="font-montserrat text-xl text-charcoal leading-relaxed mb-8">
                "{testimonials[currentTestimonial].text}"
              </p>
              
              {/* Rating */}
              <div className="flex items-center mb-6">
                {[...Array(testimonials[currentTestimonial].rating)].map((_, i) => (
                  <Star key={i} fill="currentColor" className="text-gold" size={20} />
                ))}
              </div>
              
              {/* Guest Info */}
              <div>
                <h4 className="font-playfair text-2xl font-bold text-charcoal mb-1">
                  {testimonials[currentTestimonial].name}
                </h4>
                <p className="font-montserrat text-taupe mb-1">
                  {testimonials[currentTestimonial].title}
                </p>
                <p className="font-montserrat text-sm text-taupe">
                  {testimonials[currentTestimonial].location}
                </p>
              </div>
            </div>

            {/* Guest Photo */}
            <div className="lg:w-1/3">
              <div className="relative">
                <img 
                  src={testimonials[currentTestimonial].image}
                  alt={testimonials[currentTestimonial].name}
                  className="w-64 h-64 rounded-full object-cover mx-auto shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 bg-gold text-white w-16 h-16 rounded-full flex items-center justify-center">
                  <Quote size={24} />
                </div>
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <div className="absolute top-1/2 -translate-y-1/2 left-4">
            <button 
              onClick={prevTestimonial}
              className="bg-white/80 hover:bg-white text-charcoal p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronLeft size={20} />
            </button>
          </div>
          <div className="absolute top-1/2 -translate-y-1/2 right-4">
            <button 
              onClick={nextTestimonial}
              className="bg-white/80 hover:bg-white text-charcoal p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
            >
              <ChevronRight size={20} />
            </button>
          </div>

          {/* Testimonial Indicators */}
          <div className="flex justify-center space-x-3 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial ? 'bg-gold scale-125' : 'bg-taupe/30 hover:bg-taupe/50'
                }`}
              />
            ))}
          </div>
        </div>

        {/* Awards Section */}
        <div className="text-center">
          <h3 className="font-playfair text-3xl font-bold text-charcoal mb-12">
            Award-Winning Excellence
          </h3>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {awards.map((award, index) => (
              <div key={index} className="text-center">
                <div className="bg-white rounded-lg p-6 shadow-lg luxury-hover mb-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gold to-bronze rounded-full mx-auto mb-4 flex items-center justify-center">
                    <Star fill="white" className="text-white" size={24} />
                  </div>
                  <h4 className="font-montserrat font-bold text-charcoal text-sm mb-2">
                    {award.name}
                  </h4>
                  <p className="font-montserrat text-taupe text-xs">
                    {award.year}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
