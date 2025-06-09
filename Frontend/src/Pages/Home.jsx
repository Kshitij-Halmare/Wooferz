import React, { useState } from 'react';
import { Heart, Users, Globe, Menu, X, ArrowRight, ArrowLeft, Phone, MessageCircle } from 'lucide-react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    
    const initiatives = [
        {
            image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
            title: "Street Animal Rescue"
        },
        {
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop", 
            title: "Medical Care Program"
        },
        {
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
            title: "Adoption Services"
        }
    ];

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % initiatives.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Hero Section */}
            <section className="relative min-h-screen bg-cover bg-center bg-no-repeat" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url('https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=1080&fit=crop')`
            }}>
                <div className="absolute inset-0 flex items-center">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-2xl">
                            <p className="text-orange-400 text-lg mb-4 font-medium">Support That Drives Hope</p>
                            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Every little<br />
                                help counts
                            </h1>
                            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
                                Together we can create a<br />
                                better future for street animals.
                            </p>
                            <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-colors">
                                Donate Now!
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Stats Section */}
            <section className="py-16 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
                        <div className="bg-orange-500 rounded-2xl p-6 text-center text-white">
                            <div className="text-3xl font-bold mb-2">850+</div>
                            <div className="text-sm">Rescued<br />Cases</div>
                        </div>
                        <div className="bg-orange-500 rounded-2xl p-6 text-center text-white">
                            <div className="text-3xl font-bold mb-2">150+</div>
                            <div className="text-sm">Pets<br />Vaccinated</div>
                        </div>
                        <div className="bg-orange-500 rounded-2xl p-6 text-center text-white">
                            <div className="text-3xl font-bold mb-2">3000+</div>
                            <div className="text-sm">Community<br />Reach</div>
                        </div>
                        <div className="bg-orange-500 rounded-2xl p-6 text-center text-white">
                            <div className="text-3xl font-bold mb-2">150+</div>
                            <div className="text-sm">Volunteer<br />Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Us Section */}
            <section className="py-20 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-orange-500 mb-8">About Us</h2>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    Nagpur Street Dogs is a self-funded youth community, founded by a 18 year old boy in 2020 to make change.
                                </p>
                                <p>
                                    We focus on providing food, water, care, medical care. We make every summer and winter more comfortable for animals and works to improve the policy towards creating a better and stable environment for all street animals.
                                </p>
                            </div>
                        </div>
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop" 
                                alt="About us" 
                                className="rounded-2xl shadow-lg"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-50 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Initiatives Section */}
            <section className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <h2 className="text-4xl font-bold text-orange-500 text-center mb-16">Our Initiatives</h2>
                    
                    <div className="relative">
                        <div className="overflow-hidden rounded-2xl">
                            <div className="flex transition-transform duration-500 ease-in-out" 
                                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {initiatives.map((initiative, index) => (
                                    <div key={index} className="w-full flex-shrink-0">
                                        <img 
                                            src={initiative.image} 
                                            alt={initiative.title}
                                            className="w-full h-96 object-cover"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-orange-500 text-white p-3 rounded-full hover:bg-orange-600 transition-colors"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-6 space-x-2">
                            {initiatives.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-3 h-3 rounded-full transition-colors ${
                                        currentSlide === index ? 'bg-orange-500' : 'bg-gray-300'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Donation Section */}
            <section className="py-20 bg-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-4xl font-bold text-orange-500 mb-6">
                                Together we can make a difference
                            </h2>
                            <p className="text-2xl font-semibold text-gray-800 mb-8">
                                Be The Reason Of Someone Smile
                            </p>
                            
                            <div className="flex flex-wrap gap-4 mb-8">
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                    ₹150
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                    ₹500
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                    ₹1000
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-600 transition-colors">
                                    ₹5000
                                </button>
                            </div>
                            
                            <p className="text-gray-600 mb-8">
                                "Want To Know Where Your Donation Goes? Just Ask!"
                            </p>
                        </div>
                        
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop" 
                                alt="Happy rescued dog" 
                                className="rounded-2xl shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </section>

            {/* WhatsApp Community Section */}
            <section className="py-16 bg-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h3 className="text-2xl font-bold text-white mb-4">
                        Join our WhatsApp community
                    </h3>
                    <p className="text-gray-300 mb-8">
                        Connect with us and stay updated
                    </p>
                    <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-lg font-semibold flex items-center mx-auto transition-colors">
                        <MessageCircle className="mr-2 w-5 h-5" />
                        Join WhatsApp
                    </button>
                </div>
            </section>
        </div>
    );
}

export default Home;