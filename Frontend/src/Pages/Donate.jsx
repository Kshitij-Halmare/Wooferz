import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';
import { Heart } from 'lucide-react';


const volunteerPhotos = [
  "/DONATION PAGE/IMG-20250604-WA0012~2.jpg",
  "/DONATION PAGE/IMG-20250304-WA0025.jpg",
  "/DONATION PAGE/IMG-20250604-WA0119.jpg",
  "/DONATION PAGE/IMG-20241208-WA0207(1).jpg",
  "/DONATION PAGE/IMG-20250603-WA0050~2.jpg",
  "/DONATION PAGE/IMG-20250604-WA0024~2.jpg",
  "/DONATION PAGE/IMG-20250316-WA0015.jpg",
  "/DONATION PAGE/IMG-20241203-WA0058.jpg",
  "/DONATION PAGE/IMG-20250604-WA0006~2.jpg",
  "/DONATION PAGE/IMG-20250304-WA0028.jpg",
  "/DONATION PAGE/IMG-20250604-WA0025.jpg",
  "/DONATION PAGE/IMG-20250604-WA0023.jpg",
  "/DONATION PAGE/IMG-20250604-WA0010~2.jpg",
  "/DONATION PAGE/IMG-20250604-WA0130.jpg",
  "/DONATION PAGE/IMG-20250604-WA0120.jpg",
];



const Donate = () => {
  return (
    <div style={{ 
      background: 'linear-gradient(to right, #FFD8AC 0%, #FFF7ED 100%)', 
      minHeight: '100vh' 
    }}>
      
      {/* Banner */}
      <section className="relative w-full h-[500px] md:h-[600px]">
        <img
          src="Donate_banner.jpg"
          alt="Donate Banner"
          className="w-full h-full object-cover"
          style={{ objectPosition: 'center 65%' }}
        />
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            background: "radial-gradient(ellipse at center, rgba(0,0,0,0.45) 0%, rgba(0,0,0,0.18) 60%, rgba(0,0,0,0.55) 100%)"
          }}
        />
        <div className="absolute inset-0 flex flex-col justify-center items-start pl-8 md:pl-20">
          <h1 
            className="font-extrabold text-4xl md:text-7xl mb-4 drop-shadow-lg text-left"
            style={{
              background: 'linear-gradient(90deg, #FD9600 0%, #F54E00 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
              color: 'transparent',
              display: 'inline-block'
            }}
          >
            Donate Now
          </h1>
          <p className="text-white text-xl md:text-3xl font-semibold drop-shadow text-left">Help make a difference and share the love.</p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-2xl md:text-3xl text-center font-bold mb-10 text-[#E15519]">Together we can make a difference</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div className="flex justify-center">
            <img src="donate_intro_img.png" alt="Charity Work" className="rounded-2xl shadow-lg w-full max-w-[370px] object-cover" />
          </div>
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-xl md:text-2xl font-bold mb-6 text-[#000000]">Be the reason of someone's smile</h3>
            <div className="grid grid-cols-3 gap-4 mb-6 w-full max-w-[340px]">
              {['₹50','₹100','₹200','₹500','₹1000','₹5000'].map((amt) => (
                <button
                  key={amt}
                  className="rounded-full font-bold py-2 px-4 text-[#E15519] border-2 border-[#E15519] bg-[#FFA52C] hover:bg-[#E15519] hover:text-white transition text-lg shadow-md focus:outline-none"
                >
                  {amt}
                </button>
              ))}
            </div>
            <button
              className="mt-2 mb-4 w-full max-w-[340px] py-3 rounded-full font-bold text-white text-xl shadow-lg transition bg-gradient-to-r from-[#FF7A00] to-[#FF9E45] hover:scale-105"
              style={{ boxShadow: '0 4px 16px 0 rgba(255, 122, 0, 0.15)' }}
            >
              Donate Now
            </button>
            <a href="#donation-impact" className="underline text-[#000000] hover:text-[#FFA52C] font-medium text-base" style={{scrollBehavior: 'smooth'}}>
              Want to know where your donation goes?
            </a>
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
                                <h3 className="text-3xl font-bold text-white mb-3">Making Impact Together</h3>
                                <p className="text-amber-200 text-lg">Love for every Stray</p>
                            </div>
                        </div>

                        {/* Medium photos */}
                        {volunteerPhotos.slice(1, 3).map((photo, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500">
                                <img
                                    src={photo}
                                    alt={`Volunteer moment ${index + 1}`}
                                    className="w-full h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-orange-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end justify-center pb-6">
                                    <Heart className="w-10 h-10 text-white fill-current" />
                                </div>
                            </div>
                        ))}

                        {/* Small photos */}
                        {volunteerPhotos.slice(3, 13).map((photo, index) => (
                            <div key={index} className="relative group overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-500">
                                <img
                                    src={photo}
                                    alt={`Volunteer moment ${index + 4}`}
                                    className="w-full h-48 object-cover transition-transform duration-700 group-hover:scale-110"
                                />
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-orange-600/80 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                                    <span className="text-white font-semibold text-center px-4">Making Impact Together</span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

    </div>
  );
};

export default Donate;
