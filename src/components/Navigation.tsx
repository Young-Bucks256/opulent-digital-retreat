
import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail } from 'lucide-react';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Suites', href: '#suites' },
    { name: 'Dining', href: '#dining' },
    { name: 'Spa', href: '#spa' },
    { name: 'Experiences', href: '#experiences' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-500 ${
      isScrolled ? 'bg-white/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <h1 className={`font-playfair text-2xl font-bold tracking-wider ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              The Azure Grand
            </h1>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`elegant-link font-montserrat font-medium transition-colors duration-300 ${
                    isScrolled ? 'text-charcoal hover:text-gold' : 'text-white hover:text-gold'
                  }`}
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>

          {/* Contact Info & Book Button */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className={`flex items-center space-x-2 ${
              isScrolled ? 'text-charcoal' : 'text-white'
            }`}>
              <Phone size={16} />
              <span className="font-montserrat text-sm">+1 (555) 123-4567</span>
            </div>
            <button className="btn-luxury">
              Book Your Stay
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`p-2 rounded-md ${
                isScrolled ? 'text-charcoal' : 'text-white'
              }`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 bg-white/95 backdrop-blur-md">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="block px-3 py-2 text-charcoal hover:text-gold font-montserrat font-medium"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <div className="px-3 py-4 border-t border-gray-200">
              <div className="flex items-center space-x-2 text-charcoal mb-2">
                <Phone size={16} />
                <span className="font-montserrat text-sm">+1 (555) 123-4567</span>
              </div>
              <button className="btn-luxury w-full">
                Book Your Stay
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
