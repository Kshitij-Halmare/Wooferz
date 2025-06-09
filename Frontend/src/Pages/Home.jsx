import React, { useState, useEffect } from 'react';
import { Heart, Users, Globe, Menu, X, ArrowRight, ArrowLeft, Phone, MessageCircle, Award, Shield } from 'lucide-react';

function Home() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [currentHeroSlide, setCurrentHeroSlide] = useState(0);
    
    const heroImages = [
        {
            image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=1920&h=1080&fit=crop",
            title: "Rescuing Lives Every Day",
            subtitle: "Your support helps us save abandoned street animals"
        },
        {
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=1920&h=1080&fit=crop",
            title: "Providing Medical Care",
            subtitle: "Professional veterinary treatment for every rescued animal"
        }
    ];
    
    const initiatives = [
        {
            image: "https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=400&h=300&fit=crop",
            title: "Street Animal Rescue",
            description: "24/7 emergency rescue operations for injured and abandoned animals"
        },
        {
            image: "https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=400&h=300&fit=crop", 
            title: "Medical Care Program",
            description: "Complete veterinary care including surgery, vaccination, and treatment"
        },
        {
            image: "https://images.unsplash.com/photo-1583337130417-3346a1be7dee?w=400&h=300&fit=crop",
            title: "Adoption Services",
            description: "Finding loving homes for rescued animals through our adoption program"
        }
    ];

    // Auto-slide for hero section
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentHeroSlide((prev) => (prev + 1) % heroImages.length);
        }, 5000);
        return () => clearInterval(timer);
    }, []);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % initiatives.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + initiatives.length) % initiatives.length);
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Enhanced Hero Section with Image Swiping */}
            <section id="home" className="relative min-h-screen overflow-hidden">
                <div className="absolute inset-0">
                    {heroImages.map((hero, index) => (
                        <div
                            key={index}
                            className={`absolute inset-0 transition-opacity duration-1000 ${
                                currentHeroSlide === index ? 'opacity-100' : 'opacity-0'
                            }`}
                            style={{
                                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('${hero.image}')`,
                                backgroundSize: 'cover',
                                backgroundPosition: 'center',
                                backgroundRepeat: 'no-repeat'
                            }}
                        />
                    ))}
                </div>
                
                {/* Hero Content */}
                <div className="relative z-10 flex items-center min-h-screen pt-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                        <div className="max-w-3xl">
                            <div className="mb-6">
                                <span className="inline-flex items-center px-4 py-2 bg-orange-500/20 text-orange-300 rounded-full text-sm font-medium backdrop-blur-sm">
                                    <Heart className="w-4 h-4 mr-2" />
                                    Support That Drives Hope
                                </span>
                            </div>
                            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
                                {heroImages[currentHeroSlide].title}
                            </h1>
                            <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
                                {heroImages[currentHeroSlide].subtitle}
                            </p>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    Donate Now!
                                </button>
                                <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl text-lg font-semibold transition-all duration-300">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Hero Navigation Dots */}
                <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
                    <div className="flex space-x-3">
                        {heroImages.map((_, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentHeroSlide(index)}
                                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                                    currentHeroSlide === index 
                                        ? 'bg-orange-500 w-8' 
                                        : 'bg-white/50 hover:bg-white/70'
                                }`}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* Enhanced Stats Section */}
            <section className="py-20 bg-gradient-to-br from-orange-50 to-orange-100">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Impact in Numbers</h2>
                        <p className="text-xl text-gray-600">Making a difference, one life at a time</p>
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Heart className="w-8 h-8 text-orange-500" />
                            </div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">850+</div>
                            <div className="text-gray-600 font-medium">Rescued Cases</div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Shield className="w-8 h-8 text-orange-500" />
                            </div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
                            <div className="text-gray-600 font-medium">Pets Vaccinated</div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Users className="w-8 h-8 text-orange-500" />
                            </div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">3000+</div>
                            <div className="text-gray-600 font-medium">Community Reach</div>
                        </div>
                        <div className="bg-white rounded-2xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
                            <div className="bg-orange-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Award className="w-8 h-8 text-orange-500" />
                            </div>
                            <div className="text-4xl font-bold text-orange-500 mb-2">150+</div>
                            <div className="text-gray-600 font-medium">Volunteer Team</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced About Us Section */}
            <section id="about" className="py-24 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?w=600&h=500&fit=crop" 
                                alt="About us" 
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-orange-200 rounded-full opacity-30 -z-10"></div>
                            <div className="absolute -top-8 -left-8 w-24 h-24 bg-orange-300 rounded-full opacity-20 -z-10"></div>
                        </div>
                        <div>
                            <div className="mb-6">
                                <span className="text-orange-500 font-semibold text-lg">Our Story</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-8">About Us</h2>
                            </div>
                            <div className="space-y-6 text-gray-700 text-lg leading-relaxed">
                                <p>
                                    Nagpur Street Dogs is a self-funded youth community, founded by an 18-year-old passionate advocate in 2020 with a mission to create meaningful change in our community.
                                </p>
                                <p>
                                    We focus on providing comprehensive care including food, water, medical treatment, and shelter. Our dedicated team works tirelessly to make every summer and winter more comfortable for street animals while advocating for better policies to create a stable, nurturing environment for all animals in need.
                                </p>
                                <div className="flex items-center space-x-6 pt-4">
                                    <div className="flex items-center">
                                        <Heart className="w-6 h-6 text-orange-500 mr-2" />
                                        <span className="font-semibold">Compassionate Care</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Users className="w-6 h-6 text-orange-500 mr-2" />
                                        <span className="font-semibold">Community Driven</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Our Initiatives Section */}
            <section id="initiatives" className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">Our Initiatives</h2>
                        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                            Comprehensive programs designed to rescue, rehabilitate, and rehome street animals
                        </p>
                    </div>
                    
                    <div className="relative">
                        <div className="overflow-hidden rounded-3xl shadow-2xl">
                            <div className="flex transition-transform duration-500 ease-in-out" 
                                 style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                                {initiatives.map((initiative, index) => (
                                    <div key={index} className="w-full flex-shrink-0 relative">
                                        <img 
                                            src={initiative.image} 
                                            alt={initiative.title}
                                            className="w-full h-96 md:h-[500px] object-cover"
                                        />
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent">
                                            <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                                                <h3 className="text-3xl font-bold mb-3">{initiative.title}</h3>
                                                <p className="text-lg text-gray-200">{initiative.description}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        {/* Navigation Arrows */}
                        <button 
                            onClick={prevSlide}
                            className="absolute left-6 top-1/2 transform -translate-y-1/2 bg-white/90 text-orange-500 p-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                        >
                            <ArrowLeft className="w-6 h-6" />
                        </button>
                        <button 
                            onClick={nextSlide}
                            className="absolute right-6 top-1/2 transform -translate-y-1/2 bg-white/90 text-orange-500 p-4 rounded-full hover:bg-white transition-all duration-300 shadow-lg"
                        >
                            <ArrowRight className="w-6 h-6" />
                        </button>
                        
                        {/* Dots Indicator */}
                        <div className="flex justify-center mt-8 space-x-3">
                            {initiatives.map((_, index) => (
                                <button
                                    key={index}
                                    onClick={() => setCurrentSlide(index)}
                                    className={`w-4 h-4 rounded-full transition-all duration-300 ${
                                        currentSlide === index 
                                            ? 'bg-orange-500 w-8' 
                                            : 'bg-gray-300 hover:bg-gray-400'
                                    }`}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced Donation Section */}
            <section id="donate" className="py-24 bg-gradient-to-br from-orange-50 via-white to-orange-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        <div>
                            <div className="mb-8">
                                <span className="text-orange-500 font-semibold text-lg">Make a Difference</span>
                                <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mt-2 mb-6">
                                    Together we can save lives
                                </h2>
                                <p className="text-2xl font-semibold text-orange-500 mb-6">
                                    Be The Reason Someone Smiles Today
                                </p>
                            </div>
                            
                            <div className="grid grid-cols-2 gap-4 mb-8">
                                <button className="bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    ₹150
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    ₹500
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    ₹1000
                                </button>
                                <button className="bg-orange-500 text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 transform hover:scale-105 shadow-lg">
                                    ₹5000
                                </button>
                            </div>
                            
                            <div className="bg-orange-100 p-6 rounded-2xl">
                                <p className="text-gray-700 text-lg font-medium">
                                    💝 "Want To Know Where Your Donation Goes? Just Ask!"
                                </p>
                                <p className="text-gray-600 mt-2">
                                    Complete transparency on how your contribution helps save lives
                                </p>
                            </div>
                        </div>
                        
                        <div className="relative">
                            <img 
                                src="https://images.unsplash.com/photo-1601758228041-f3b2795255f1?w=600&h=500&fit=crop" 
                                alt="Happy rescued dog" 
                                className="rounded-3xl shadow-2xl"
                            />
                            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-orange-200 rounded-full opacity-30 -z-10"></div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Enhanced WhatsApp Community Section */}
            <section className="py-20 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <div className="max-w-3xl mx-auto">
                        <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
                            Join Our Community
                        </h3>
                        <p className="text-xl text-gray-300 mb-8">
                            Connect with like-minded animal lovers, get updates on rescues, and be part of our mission to create a better world for street animals.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button className="bg-green-500 hover:bg-green-600 text-white px-8 py-4 rounded-xl font-semibold flex items-center justify-center transition-all duration-300 transform hover:scale-105 shadow-lg">
                                <MessageCircle className="mr-3 w-6 h-6" />
                                Join WhatsApp Community
                            </button>
                            <button className="border-2 border-white text-white hover:bg-white hover:text-gray-900 px-8 py-4 rounded-xl font-semibold transition-all duration-300">
                                Follow on Social Media
                            </button>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Home;