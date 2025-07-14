
import React, { useState } from 'react';
import { Phone, Mail, MapPin, Clock, Send, Instagram, Facebook, Twitter } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Contact form submitted:', formData);
    // Handle form submission logic here
  };

  const contactInfo = [
    {
      icon: Phone,
      title: 'Reservations',
      content: '+1 (555) 123-4567',
      subtitle: 'Available 24/7'
    },
    {
      icon: Mail,
      title: 'Email',
      content: 'reservations@azuregrand.com',
      subtitle: 'Response within 2 hours'
    },
    {
      icon: MapPin,
      title: 'Location',
      content: '1247 Luxury Beach Drive',
      subtitle: 'Paradise Coast, PC 12345'
    },
    {
      icon: Clock,
      title: 'Concierge Hours',
      content: '24/7 Service',
      subtitle: 'Always here for you'
    }
  ];

  return (
    <section id="contact" className="py-24 bg-charcoal text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="font-playfair text-5xl md:text-6xl font-bold mb-6">
            Get in Touch
          </h2>
          <p className="font-montserrat text-xl text-white/80 max-w-3xl mx-auto leading-relaxed">
            Our dedicated team is ready to create your perfect luxury experience. 
            Contact us to begin planning your unforgettable stay.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Information */}
          <div>
            <h3 className="font-playfair text-3xl font-bold mb-8">
              We're Here to Help
            </h3>
            
            <div className="space-y-8 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="bg-gold/20 p-3 rounded-lg">
                    <info.icon className="text-gold" size={24} />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-semibold text-lg mb-1">
                      {info.title}
                    </h4>
                    <p className="font-montserrat text-white/90 mb-1">
                      {info.content}
                    </p>
                    <p className="font-montserrat text-white/60 text-sm">
                      {info.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Map */}
            <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm mb-8">
              <h4 className="font-playfair text-xl font-bold mb-4">Find Us</h4>
              <div className="bg-white/5 rounded-lg h-64 flex items-center justify-center">
                <p className="font-montserrat text-white/60">Interactive Map Placeholder</p>
              </div>
            </div>

            {/* Social Media */}
            <div>
              <h4 className="font-playfair text-xl font-bold mb-4">Follow Our Journey</h4>
              <div className="flex space-x-4">
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-gold transition-colors duration-300">
                  <Instagram size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-gold transition-colors duration-300">
                  <Facebook size={20} />
                </a>
                <a href="#" className="bg-white/10 p-3 rounded-lg hover:bg-gold transition-colors duration-300">
                  <Twitter size={20} />
                </a>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div>
            <div className="bg-white/5 rounded-2xl p-8 backdrop-blur-sm">
              <h3 className="font-playfair text-3xl font-bold mb-8">Send us a Message</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat text-white/90 text-sm font-medium mb-2">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                      placeholder="Your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label className="block font-montserrat text-white/90 text-sm font-medium mb-2">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                      placeholder="your@email.com"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block font-montserrat text-white/90 text-sm font-medium mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  
                  <div>
                    <label className="block font-montserrat text-white/90 text-sm font-medium mb-2">
                      Subject
                    </label>
                    <select
                      name="subject"
                      value={formData.subject}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 appearance-none cursor-pointer"
                      required
                    >
                      <option value="" className="bg-charcoal">Select a subject</option>
                      <option value="reservation" className="bg-charcoal">Reservation Inquiry</option>
                      <option value="events" className="bg-charcoal">Special Events</option>
                      <option value="dining" className="bg-charcoal">Dining Reservations</option>
                      <option value="spa" className="bg-charcoal">Spa Services</option>
                      <option value="feedback" className="bg-charcoal">Feedback</option>
                      <option value="other" className="bg-charcoal">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block font-montserrat text-white/90 text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={6}
                    className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-white/60 focus:border-gold focus:ring-2 focus:ring-gold/20 transition-all duration-300 resize-none"
                    placeholder="Tell us about your dream stay..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="btn-luxury w-full flex items-center justify-center space-x-3 text-lg py-4"
                >
                  <Send size={20} />
                  <span>Send Message</span>
                </button>
              </form>

              <div className="mt-6 text-center">
                <p className="font-montserrat text-white/60 text-sm">
                  We typically respond within 2 hours during business hours
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
