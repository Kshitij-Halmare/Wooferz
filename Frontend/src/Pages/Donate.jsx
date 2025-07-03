import React from 'react';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import { Link } from 'react-router-dom';

// Individual impact image paths for easy editing
const impactImg1 = '/DONATION PAGE/IMG-20250604-WA0119.jpg';
const impactImg2 = '';
const impactImg3 = '';
const impactImg4 = '';
const impactImg5 = '/DONATION PAGE/IMG-20250304-WA0025.jpg';
const impactImg6 = '/DONATION PAGE/IMG-20241208-WA0207(1).jpg';
const impactImg7 = '';
const impactImg8 = '/DONATION PAGE/IMG-20250603-WA0050~2.jpg';
const impactImg9 = '/DONATION PAGE/IMG-20250604-WA0024~2.jpg';
const impactImg10 = '/DONATION PAGE/IMG-20250316-WA0015.jpg';
const impactImg11 = '/DONATION PAGE/IMG-20250604-WA0012~2.jpg';
const impactImg12 = 'DONATION PAGE/IMG-20241203-WA0058.jpg';
const impactImg13 = '/DONATION PAGE/IMG-20250604-WA0006~2.jpg';
const impactImg14 = '/DONATION PAGE/IMG-20250304-WA0028.jpg';
const impactImg15 = '/DONATION PAGE/IMG-20250604-WA0025.jpg';
const impactImg16 = '/DONATION PAGE/IMG-20250604-WA0023.jpg';
const impactImg17 = '/DONATION PAGE/IMG-20250604-WA0010~2.jpg';
const impactImg18 = '';
const impactImg19 = '/DONATION PAGE/IMG-20250604-WA0130.jpg';
const impactImg20 = '/DONATION PAGE/IMG-20250604-WA0120.jpg';

const impactImages = [
  impactImg1, impactImg2, impactImg3, impactImg4, impactImg5,
  impactImg6, impactImg7, impactImg8, impactImg9, impactImg10,
  impactImg11, impactImg12, impactImg13, impactImg14, impactImg15,
  impactImg16, impactImg17, impactImg18, impactImg19, impactImg20
];

// Mark which images are 'big' for layout variation
const bentoLayout = [
  'big', 'small', 'tall', 'wide',
  'small', 'big', 'small', 'tall',
  'wide', 'small', 'big', 'wide',
  'tall', 'small', 'big', 'tall',
  'tall', 'wide', 'tall', 'wide'
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

      {/* Donation Impact Section */}
<section id="donation-impact" className="max-w-7xl mx-auto py-14 px-4">
  <h2 className="text-2xl md:text-3xl font-bold text-center mb-10 text-[#E15519]">Where your Donations go</h2>

  <div
    className="grid gap-4"
    style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
      gridAutoRows: '150px',
      gridAutoFlow: 'dense',
    }}
  >
    {impactImages.map((img, idx) => {
      const layoutType = bentoLayout[idx];

      let className = '';
      if (layoutType === 'big') className = 'col-span-2 row-span-2';
      else if (layoutType === 'tall') className = 'row-span-2';
      else if (layoutType === 'wide') className = 'col-span-2';
      else className = '';

      return (
        <div
          key={idx}
          className={`relative overflow-hidden rounded-xl shadow-md hover:shadow-lg transition-all bg-white border border-[#eee] ${className}`}
          style={{
            display: img ? 'block' : 'none',
          }}
        >
          <img
            src={img}
            alt={`Impact ${idx + 1}`}
            className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </div>
      );
    })}
  </div>
</section>

    </div>
  );
};

export default Donate;
