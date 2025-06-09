import React, { useState } from 'react';
import { Heart, Users, Globe, Menu, X, Sparkles, ArrowRight } from 'lucide-react';

function VolunteerPage() {
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
        alert('Thank you for your interest in volunteering!');
    };

    const volunteerPhotos = [
        "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1594213952234-58533d925b25?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1469571486292-0ba58a3f068b?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=300&h=200&fit=crop",
        "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=200&fit=crop"
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-amber-50">
            {/* Hero Section with Background Image */}
            <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
                {/* Background Image with Overlay */}
                <div className="absolute inset-0 z-0">
                    <img
                        src="https://images.unsplash.com/photo-1559027615-cd4628902d4a?w=1920&h=1080&fit=crop"
                        alt="Volunteers helping community"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-orange-900/80 via-orange-800/70 to-amber-900/80"></div>
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent"></div>
                </div>

                {/* Floating Elements */}
                <div className="absolute top-20 left-10 animate-bounce">
                    <div className="w-4 h-4 bg-amber-400 rounded-full opacity-60"></div>
                </div>
                <div className="absolute top-40 right-20 animate-pulse">
                    <div className="w-6 h-6 bg-orange-300 rounded-full opacity-40"></div>
                </div>
                <div className="absolute bottom-40 left-20 animate-bounce delay-1000">
                    <Sparkles className="w-8 h-8 text-amber-300 opacity-50" />
                </div>

                {/* Hero Content */}
                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="animate-fade-in-up">
                        <div className="inline-flex items-center bg-white/20 backdrop-blur-sm rounded-full px-6 py-2 mb-8 border border-white/30">
                            <Heart className="w-5 h-5 text-white mr-2 fill-current" />
                            <span className="text-white font-medium">Join 10,000+ Active Volunteers</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
                            <span className="block">Make a</span>
                            <span className="block bg-gradient-to-r from-amber-300 via-orange-300 to-amber-200 bg-clip-text text-transparent">
                                Difference
                            </span>
                            <span className="block">Today</span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-amber-100 mb-12 max-w-4xl mx-auto leading-relaxed font-light">
                            Join our community of passionate volunteers and help us build a better world together. 
                            Every moment you give creates ripples of positive change.
                        </p>
                        
                        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-16">
                            <button className="group bg-gradient-to-r from-amber-500 to-orange-500 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:from-amber-600 hover:to-orange-600 transition-all duration-300 shadow-2xl hover:shadow-amber-500/25 transform hover:scale-105 hover:-translate-y-1">
                                <span className="flex items-center justify-center">
                                    Get Started Now
                                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                                </span>
                            </button>
                            <button className="group backdrop-blur-sm bg-white/20 border-2 border-white/40 text-white px-10 py-5 rounded-2xl text-xl font-semibold hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                                <span className="flex items-center justify-center">
                                    Watch Our Story
                                    <div className="ml-3 w-3 h-3 bg-white rounded-full animate-pulse"></div>
                                </span>
                            </button>
                        </div>

                        {/* Stats */}
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
                            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">10,000+</div>
                                <div className="text-amber-200">Active Volunteers</div>
                            </div>
                            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">50,000+</div>
                                <div className="text-amber-200">Lives Impacted</div>
                            </div>
                            <div className="backdrop-blur-sm bg-white/10 rounded-2xl p-6 border border-white/20">
                                <div className="text-3xl font-bold text-white mb-2">100+</div>
                                <div className="text-amber-200">Communities Served</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Scroll Indicator */}
                <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
                    <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
                        <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse"></div>
                    </div>
                </div>
            </section>

            {/* Main Content Section */}
            <section className="py-20 relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Left Column - Enhanced Info */}
                        <div className="space-y-10">
                            <div className="space-y-8">
                                <div className="inline-flex items-center bg-gradient-to-r from-orange-100 to-amber-100 rounded-full px-6 py-2">
                                    <span className="text-orange-600 font-semibold">🌟 JOIN OUR MISSION</span>
                                </div>
                                
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-800 leading-tight">
                                    Transform Lives Through
                                    <span className="block text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text">
                                        Volunteering
                                    </span>
                                </h2>
                            </div>

                            <div className="space-y-8">
                                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Users className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Build Community</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            Together, we help build community connections that create a more humane world. Join us today in giving your free time and making lasting friendships.
                                        </p>
                                    </div>
                                </div>

                                <div className="group flex items-start space-x-6 p-6 rounded-2xl hover:bg-gradient-to-r hover:from-orange-50 hover:to-amber-50 transition-all duration-300">
                                    <div className="w-16 h-16 bg-gradient-to-br from-orange-500 to-amber-500 rounded-2xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                                        <Globe className="w-8 h-8 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-800 mb-2">Global Impact</h3>
                                        <p className="text-gray-600 text-lg leading-relaxed">
                                            If you have a passion for making a difference and giving back to your community, we want to share our mission with everyone who wants to create positive change.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Right Column - Enhanced Form */}
                        <div className="relative">
                            <div className="absolute -top-4 -left-4 w-72 h-72 bg-gradient-to-br from-orange-200 to-amber-200 rounded-full opacity-20 blur-3xl"></div>
                            <div className="relative bg-white rounded-3xl shadow-2xl p-8 border border-gray-100 backdrop-blur-sm">
                                <div className="text-center mb-8">
                                    <h3 className="text-3xl font-bold text-gray-800 mb-2">Apply Now</h3>
                                    <p className="text-gray-600">Start your volunteering journey with us</p>
                                </div>
                                
                                <div className="space-y-6">
                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors">
                                            Full Name
                                        </label>
                                        <input
                                            type="text"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleInputChange}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                                            placeholder="Enter your full name"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors">
                                            Email Address
                                        </label>
                                        <input
                                            type="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                                            placeholder="your.email@example.com"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors">
                                            Phone Number
                                        </label>
                                        <input
                                            type="tel"
                                            name="phone"
                                            value={formData.phone}
                                            onChange={handleInputChange}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 text-lg"
                                            placeholder="+1 (555) 000-0000"
                                        />
                                    </div>

                                    <div className="group">
                                        <label className="block text-sm font-semibold text-gray-700 mb-3 group-focus-within:text-orange-600 transition-colors">
                                            Why do you want to volunteer?
                                        </label>
                                        <textarea
                                            name="message"
                                            value={formData.message}
                                            onChange={handleInputChange}
                                            rows={4}
                                            className="w-full px-6 py-4 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-orange-500/20 focus:border-orange-500 transition-all duration-300 resize-none text-lg"
                                            placeholder="Tell us about your passion for helping others..."
                                        ></textarea>
                                    </div>

                                    <button
                                        onClick={handleSubmit}
                                        className="w-full bg-gradient-to-r from-orange-600 to-amber-600 text-white py-5 px-8 rounded-xl hover:from-orange-700 hover:to-amber-700 transition-all duration-300 font-semibold text-lg shadow-xl hover:shadow-2xl transform hover:scale-[1.02] hover:-translate-y-1"
                                    >
                                        <span className="flex items-center justify-center">
                                            Submit Application
                                            <Heart className="ml-2 w-5 h-5 fill-current" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Photo Gallery Section */}
            <section className="py-24 bg-gradient-to-br from-slate-50 via-orange-50 to-amber-50 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-full">
                    <div className="absolute top-20 left-10 w-32 h-32 bg-orange-200 rounded-full opacity-10 blur-2xl"></div>
                    <div className="absolute bottom-20 right-10 w-40 h-40 bg-amber-200 rounded-full opacity-10 blur-2xl"></div>
                </div>

                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
                    <div className="text-center mb-20">
                        <div className="inline-flex items-center bg-white rounded-full px-6 py-2 mb-6 shadow-lg">
                            <span className="text-orange-600 font-semibold">📸 GALLERY</span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6">
                            Memories That
                            <span className="block text-transparent bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text">
                                Matter
                            </span>
                        </h2>
                        <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
                            Capturing the joy and impact our volunteers create through shared moments of kindness and community
                        </p>
                    </div>

                    {/* Enhanced Photo Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
                        {/* Large featured photo */}
                        <div className="md:col-span-2 md:row-span-2 relative group overflow-hidden rounded-3xl shadow-2xl hover:shadow-3xl transition-all duration-700">
                            <img
                                src={volunteerPhotos[0]}
                                alt="Featured volunteer moment"
                                className="w-full h-full min-h-[500px] object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700"></div>
                            <div className="absolute bottom-0 left-0 right-0 p-8 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-700">
                                <h3 className="text-3xl font-bold text-white mb-3">Community Garden Day</h3>
                                <p className="text-amber-200 text-lg">50+ volunteers came together to plant hope for the future</p>
                            </div>
                        </div>

                        {/* Medium photos */}
                        {volunteerPhotos.slice(1, 3).map((photo, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={photo}
                                    alt="Volunteer moment"
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <Heart className="w-10 h-10 text-white fill-current" />
                                </div>
                            </div>
                        ))}

                        {/* Small photos */}
                        {volunteerPhotos.slice(3, 6).map((photo, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                                <img
                                    src={photo}
                                    alt="Volunteer moment"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-600/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-semibold text-center px-4">Making Impact Together</span>
                                </div>
                            </div>
                        ))}

                        {/* Polaroid-style photo */}
                        <div className="relative group overflow-hidden rounded-2xl bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform rotate-2 hover:rotate-0">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={volunteerPhotos[2]}
                                    alt="Volunteer moment"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="pt-4 text-center">
                                <p className="text-gray-700 font-medium">Summer Camp Magic ✨</p>
                            </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform rotate-2 hover:rotate-0">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={volunteerPhotos[2]}
                                    alt="Volunteer moment"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                            </div>
                            <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-600/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-semibold text-center px-4">Making Impact Together</span>
                                </div>
                        </div>
                        <div className="relative group overflow-hidden rounded-2xl bg-white p-4 shadow-xl hover:shadow-2xl transition-all duration-500 transform rotate-2 hover:rotate-0">
                            <div className="overflow-hidden rounded-lg">
                                <img
                                    src={volunteerPhotos[2]}
                                    alt="Volunteer moment"
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"                                    
                                />
                            </div>
                            <div className="pt-4 text-center">
                                <p className="text-gray-700 font-medium">Summer Camp Magic ✨</p>
                            </div>
                        </div>
                        
                    </div>
                    
                </div>
            </section>
        </div>
    );
}

export default VolunteerPage;