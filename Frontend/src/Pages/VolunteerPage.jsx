import React, { useState } from 'react';
import { Heart, Users, Globe, Menu, X } from 'lucide-react';

function VolunteerPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
    alert('Thank you for your interest in volunteering!');
  };

  const volunteerPhotos = [
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1594213952234-58533d925b25?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1594213952234-58533d925b25?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
    "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop"
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-100 via-orange-50 to-orange-100">
      {/* Hero Section */}
      <section className="pt-20 pb-12 ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center py-16">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-6">
              Make a Difference Today
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-3xl mx-auto">
              Join our community of passionate volunteers and help us build a better world together
            </p>
            <div className="flex justify-center space-x-4">
              <button className="bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-700 transition-colors shadow-lg hover:shadow-xl transform hover:scale-105 duration-200">
                Get Started
              </button>
              <button className="border-2 border-orange-600 text-orange-600 px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 hover:text-white transition-colors">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            
            {/* Left Column - Info */}
            <div className="space-y-8">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
                  JOIN US FOR VOLUNTEERING
                </h2>
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Users className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      Together, Good Dog helps build community connections that create a more humane world. Join us today in giving your free time, or consider becoming a member.
                    </p>
                  </div>
                </div>
                <div className="flex items-start space-x-4">
                  <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                    <Globe className="w-8 h-8 text-orange-600" />
                  </div>
                  <div>
                    <p className="text-gray-600 text-lg leading-relaxed">
                      If you have a passion for animal welfare and an interest in giving back to your community, we want to share our mission with everyone who wants to make a positive world.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Application Form */}
            <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
              <h3 className="text-2xl font-bold text-gray-800 mb-6">Apply Now</h3>
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Contact
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors"
                    placeholder="Enter your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-orange-500 focus:border-orange-500 transition-colors resize-none"
                    placeholder="Tell us about yourself and why you want to volunteer"
                  ></textarea>
                </div>

                <button
                  onClick={handleSubmit}
                  className="w-full bg-orange-600 text-white py-3 px-6 rounded-lg hover:bg-orange-700 transition-colors font-medium text-lg shadow-lg hover:shadow-xl transform hover:scale-105 duration-200"
                >
                  APPLY
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Photo Gallery Section */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              HAPPY MOMENTS WITH VOLUNTEERS
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              See the joy and impact our volunteers create every day in our community
            </p>
          </div>

          {/* Photo Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {volunteerPhotos.map((photo, index) => (
              <div 
                key={index} 
                className="relative group overflow-hidden rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
              >
                <img
                  src={photo}
                  alt={`Volunteer moment ${index + 1}`}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="absolute bottom-4 left-4 text-white">
                    <Heart className="w-5 h-5 fill-current" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default VolunteerPage;