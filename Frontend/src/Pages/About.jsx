import React, { useState } from 'react';
import { 
  ChevronDown, 
  Heart, 
  Users, 
  Target, 
  PawPrint, 
  Home, 
  Shield, 
  Dog, 
  BookOpen,
  PlusCircle, 
} from 'lucide-react';

const initiatives = [
  {
    img: 'https://images.unsplash.com/photo-1583511655826-05700442b31b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80',
    title: 'Rescue Operations',
    text: 'Our dedicated rescue team works around the clock to save dogs from dangerous situations, providing immediate medical care and emergency shelter to those in need.',
    icon: <Shield className="w-6 h-6 text-orange-500" />,
    details: 'We operate a 24/7 emergency rescue hotline and maintain a fleet of rescue vehicles equipped with medical supplies. Our trained responders handle everything from highway rescues to hoarding situations, ensuring every dog receives immediate care and assessment.'
  },
  {
    img: 'https://images.unsplash.com/photo-1601758003122-53c40e686a19?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Medical Rehabilitation',
    text: 'Professional veterinary care and rehabilitation programs help injured and sick dogs recover their health and prepare for their new lives.',
    icon: <PlusCircle className="w-6 h-6 text-orange-500" />,
    details: 'Our in-house veterinary clinic provides comprehensive medical care including surgery, dental work, and specialized treatments. We also offer physical therapy and behavioral rehabilitation to help dogs overcome trauma and prepare for adoption.'
  },
  {
    img: 'https://images.unsplash.com/photo-1601758003831-27d52b2350b8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80',
    title: 'Foster Network',
    text: 'Our loving foster families provide temporary homes where dogs can heal, learn to trust, and develop the social skills needed for adoption.',
    icon: <Home className="w-6 h-6 text-orange-500" />,
    details: 'With over 150 active foster families across three states, we provide specialized care for puppies, senior dogs, and those with special needs. Our foster coordinators provide ongoing support and training to ensure every placement is successful.'
  },
  {
    img: 'https://images.unsplash.com/photo-1583337130417-3346a1be7dee?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80',
    title: 'Adoption Programs',
    text: 'Comprehensive adoption services ensure perfect matches between rescued dogs and their forever families through careful screening and support.',
    icon: <Heart className="w-6 h-6 text-orange-500" />,
    details: 'Our adoption process includes home visits, meet-and-greets, and post-adoption support. We provide lifetime guidance to adopters and maintain a 98% success rate by focusing on compatibility and preparation rather than speed.'
  },
  {
    img: 'https://images.unsplash.com/photo-1450778869180-41d0601e046e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1158&q=80',
    title: 'Community Outreach',
    text: 'Educational programs and awareness campaigns help communities understand the importance of animal welfare and responsible pet ownership.',
    icon: <Users className="w-6 h-6 text-orange-500" />,
    details: 'We visit schools, community centers, and events to educate the public about animal welfare. Our programs include spay/neuter awareness, responsible breeding practices, and how to recognize and report animal abuse.'
  },
  {
    img: 'https://images.unsplash.com/photo-1583512603806-077998240c7a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1109&q=80',
    title: 'Volunteer Training',
    text: 'Specialized training programs equip our volunteers with the skills and knowledge needed to effectively care for and advocate for rescued animals.',
    icon: <BookOpen className="w-6 h-6 text-orange-500" />,
    details: 'Our comprehensive training program covers animal handling, basic medical care, behavioral assessment, and emergency procedures. We offer monthly workshops and annual certification programs to keep our volunteers updated on best practices.'
  },
];

const AboutUs = () => {
  const [activeIndex, setActiveIndex] = useState(null);
  const [expandedSection, setExpandedSection] = useState(null);

  const toggleSection = (section) => {
    setExpandedSection(expandedSection === section ? "null" : section);
  };

  const toggleInitiative = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const sectionData = {
    vision: {
      icon: <Target className="w-5 h-5" />,
      title: 'Our Vision',
      content: 'To create a world where every stray dog has a loving home and no animal suffers on the streets. We envision communities where compassion for animals is the norm, and every dog is valued as a cherished companion.'
    },
    mission: {
      icon: <Heart className="w-5 h-5" />,
      title: 'Our Mission',
      content: 'To rescue, rehabilitate, and rehome stray dogs through community engagement, volunteer support, and sustainable practices. We provide comprehensive care while educating the public about responsible pet ownership.'
    },
    volunteers: {
      icon: <Users className="w-5 h-5" />,
      title: 'Our Volunteers',
      content: 'Our incredible team of dedicated volunteers is the heart of our organization. From veterinarians and foster families to fundraisers and advocates, each volunteer brings unique skills and unwavering commitment to our cause.'
    }
  };

  return (
    <section className="bg-gradient-to-br from-orange-200 via-orange-50 to-orange-200 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 md:py-20">
        {/* Hero Section */}
        <div className="text-center mb-16 md:mb-24">
          <div className="inline-flex items-center justify-center mb-4">
            <PawPrint className="w-8 h-8 text-orange-400 mr-2" />
            <span className="text-orange-500 font-semibold tracking-wide">ABOUT OUR ORGANIZATION</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
            Changing <span className="bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">Lives</span>,<br />
            One <span className="bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent">Paw</span> at a Time
          </h1>
          <div className="w-32 h-1.5 bg-gradient-to-r from-orange-300 to-amber-400 mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto">
            We are a passionate community dedicated to rescuing, rehabilitating, and rehoming stray dogs with love, compassion, and professionalism.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16 md:mb-24">
          <div className="order-2 lg:order-1">
            <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl border border-orange-100 hover:shadow-2xl transition-shadow duration-300">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 relative">
                <span className="absolute -left-8 top-3 w-6 h-1 bg-orange-500 rounded-full"></span>
                Our Story
              </h2>
              <div className="space-y-4">
                <p className="text-gray-700 text-lg leading-relaxed">
                  Founded in 2015, our organization began with a simple act of kindness - rescuing a single injured stray from the streets. Today, we've grown into a comprehensive rescue network that has saved over 5,000 dogs.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  What started as a small group of animal lovers has blossomed into a professional operation with veterinary partners, foster networks across 3 states, and an adoption success rate of 98%.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  Every day, we're inspired by the resilience of the animals we help and the generosity of the community that supports our mission.
                </p>
              </div>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="font-bold text-orange-600">5,000+</span> Dogs Rescued
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="font-bold text-orange-600">200+</span> Active Volunteers
                </div>
                <div className="bg-orange-50 px-4 py-2 rounded-lg">
                  <span className="font-bold text-orange-600">98%</span> Adoption Success
                </div>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-to-br from-orange-200 to-amber-200 rounded-3xl transform rotate-2 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-3xl shadow-xl group-hover:shadow-2xl transition-all duration-500">
                <img 
                  src="https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1198&q=80" 
                  alt="Happy rescued dogs" 
                  className="w-full h-80 md:h-96 object-cover transform group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent flex items-end p-8">
                  <div className="text-white">
                    <Dog className="w-10 h-10 mb-2" />
                    <p className="text-xl font-medium">Every rescue story begins with hope and ends with love.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Interactive Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 md:mb-16">
          {Object.entries(sectionData).map(([key, data]) => (
            <button
              key={key}
              onClick={() => toggleSection(key)}
              className={`flex items-center gap-3 px-6 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 ${
                expandedSection === key
                  ? 'bg-gradient-to-r from-orange-500 to-amber-500 text-white shadow-lg'
                  : 'bg-white text-orange-600 border-2 border-orange-200 hover:border-orange-400 hover:bg-orange-50'
              }`}
            >
              {data.icon}
              {data.title}
              <ChevronDown className={`w-4 h-4 transition-transform ${expandedSection === key ? 'rotate-180' : ''}`} />
            </button>
          ))}
        </div>

        {/* Expanded Content */}
        {expandedSection && (
          <div className="mb-12 md:mb-16 animate-fadeIn transition-all duration-200">
            <div className="bg-white p-8 rounded-3xl shadow-xl border-l-4 border-orange-500 hover:shadow-2xl transition-shadow">
              <h3 className="text-2xl font-bold text-orange-600 mb-4 flex items-center gap-3">
                <div className="bg-orange-100 p-2 rounded-full">
                  {sectionData[expandedSection].icon}
                </div>
                {sectionData[expandedSection].title}
              </h3>
              <p className="text-gray-700 text-lg leading-relaxed">
                {sectionData[expandedSection].content}
              </p>
            </div>
          </div>
        )}

        {/* Vision & Mission Cards */}
        <div className="grid md:grid-cols-2 gap-8 mb-20">
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              We envision a future where no dog suffers on the streets, where every abandoned pet finds a loving forever home, and where communities prioritize animal welfare as a fundamental value.
            </p>
            <div className="mt-6 pt-6 border-t border-orange-100">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>A world without animal suffering</span>
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>Compassionate communities nationwide</span>
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>Sustainable solutions for animal welfare</span>
                </li>
              </ul>
            </div>
          </div>
          
          <div className="bg-gradient-to-br from-orange-50 to-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 border border-orange-100 hover:border-orange-200">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full flex items-center justify-center shadow-md">
                <Heart className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
            </div>
            <p className="text-gray-700 leading-relaxed">
              Through direct action, education, and community partnerships, we rescue abandoned dogs, provide comprehensive medical care and rehabilitation, and facilitate loving adoptions while promoting responsible pet ownership.
            </p>
            <div className="mt-6 pt-6 border-t border-orange-100">
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>24/7 emergency rescue operations</span>
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>Full veterinary rehabilitation</span>
                </li>
                <li className="flex items-start gap-2">
                  <PawPrint className="w-4 h-4 mt-1 text-orange-500 flex-shrink-0" />
                  <span>Community education programs</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Group Initiatives */}
        <div className="relative mb-24">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
              Our <span className="text-orange-500">Comprehensive</span> Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From rescue to rehabilitation to forever homes, we provide complete care at every stage of a dog's journey.
            </p>
          </div>
          
          {/* Timeline line */}
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-orange-300 to-orange-500 rounded-full"></div>

          <div className="space-y-16 md:space-y-24 relative z-10">
            {initiatives.map((item, index) => (
              <div
                key={index}
                className={`relative flex ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'} flex-col gap-8 items-center group`}
              >
                {/* Timeline dot */}
                {/* <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-gradient-to-br from-orange-500 to-amber-500 rounded-full border-4 border-white shadow-lg z-20 group-hover:scale-125 transition-transform"></div> */}
                
                <div className={`md:w-5/12 ${index % 2 === 0 ? 'md:pr-8' : 'md:pl-8'}`}>
                  <div 
                    className="relative overflow-hidden rounded-2xl shadow-xl group-hover:shadow-2xl transition-all duration-500 cursor-pointer"
                    onClick={() => toggleInitiative(index)}
                  >
                    <img
                      src={item.img}
                      alt={item.title}
                      className="w-full h-64 object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex flex-col justify-end p-6">
                      <div className="flex items-center gap-3">
                        <div className="bg-orange-500 p-2 rounded-lg">
                          {item.icon}
                        </div>
                        <h4 className="text-xl font-bold text-white">{item.title}</h4>
                      </div>
                      <div className="mt-2 text-orange-200 text-sm flex items-center gap-1">
                        Click to learn more
                        <ChevronDown className={`w-4 h-4 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className={`md:w-5/12`}>
                  <div className="bg-white p-6 rounded-2xl shadow-lg border border-orange-100">
                    <h4 className="text-xl font-bold text-orange-600 mb-3 flex items-center gap-2">
                      {item.icon}
                      {item.title}
                    </h4>
                    <p className="text-gray-700 leading-relaxed mb-4">{item.text}</p>
                    
                    {/* Expandable detailed content */}
                    {activeIndex === index && (
                      <div className="animate-fadeIn border-t border-orange-100 pt-4">
                        <h5 className="font-semibold text-gray-800 mb-2">Program Details:</h5>
                        <p className="text-gray-600 leading-relaxed">{item.details}</p>
                      </div>
                    )}
                    
                    <button 
                      onClick={() => toggleInitiative(index)}
                      className="mt-4 text-orange-500 hover:text-orange-600 font-medium flex items-center gap-1 transition-colors"
                    >
                      {activeIndex === index ? 'Show less' : 'Learn more'}
                      <ChevronDown className={`w-4 h-4 transition-transform ${activeIndex === index ? 'rotate-180' : ''}`} />
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-20 text-center bg-gradient-to-r from-orange-500 to-amber-500 text-white p-12 rounded-3xl shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-white/10 rounded-full"></div>
          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">Ready to Make a Difference?</h3>
            <p className="text-xl md:text-2xl mb-8 opacity-95 max-w-3xl mx-auto">
              Join our mission to save lives and create happy endings for dogs in need.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <button className="bg-white text-orange-600 px-8 py-4 rounded-full font-semibold hover:bg-orange-50 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Heart className="w-5 h-5" />
                Adopt a Dog
              </button>
              <button className="bg-amber-400 text-white px-8 py-4 rounded-full font-semibold hover:bg-amber-500 transition-all transform hover:scale-105 shadow-lg flex items-center gap-2">
                <Users className="w-5 h-5" />
                Become a Volunteer
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-orange-600 transition-all transform hover:scale-105 flex items-center gap-2">
                <PawPrint className="w-5 h-5" />
                Donate Now
              </button>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.5s ease-out;
        }
      `}</style>
    </section>
  );
};

export default AboutUs;