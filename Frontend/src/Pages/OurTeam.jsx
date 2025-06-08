import React, { useState } from 'react';

function OurTeam() {
  const [hoveredMember, setHoveredMember] = useState(null);
  const [hoveredTestimonial, setHoveredTestimonial] = useState(null);

  const teamMembers = [
    {
      role: "Founder",
      name: "UJWALA CHINTALA",
      description: "Visionary leader with 10+ years of experience in tech innovation and entrepreneurship. Passionate about building impactful digital products that shape the future.",
      photo: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      skills: ["Leadership", "Strategy", "Innovation"]
    },
    {
      role: "Chief Technology Officer (CTO)",
      name: "SNEHA IYER",
      description: "Software architect and AI expert, Sneha leads the engineering team with a focus on scalable solutions and cutting-edge technology.",
      photo: "https://images.unsplash.com/photo-1494790108755-2616b612b647?w=150&h=150&fit=crop&crop=face",
      skills: ["AI/ML", "Architecture", "Team Leadership"]
    },
    {
      role: "Head of Design",
      name: "RISHI MALHOTRA",
      description: "Creative visionary who crafts the brand's identity, turns complex ideas into user-centric, modern, and visually compelling designs.",
      photo: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face",
      skills: ["UI/UX", "Branding", "Product Design"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Thompson",
      company: "Tesla",
      role: "Fleet Vehicle Owner",
      photo: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face",
      quote: "Outstanding service and innovation. The team's dedication to excellence is truly remarkable."
    },
    {
      name: "Mark Rodriguez",
      company: "Audi",
      role: "Full Stack Developer",
      photo: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face",
      quote: "Incredible technical expertise and seamless collaboration throughout our project."
    },
    {
      name: "Emma Chen",
      company: "Mena Group",
      role: "Content Strategist",
      photo: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop&crop=face",
      quote: "Their creative approach and attention to detail exceeded all our expectations."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-orange-50">
      {/* Hero Header */}
      <div className="relative overflow-hidden bg-gradient-to-r from-orange-500 via-orange-600 to-red-500">
        {/* Animated background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full opacity-10">
            <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
              <circle cx="20" cy="20" r="15" fill="white" opacity="0.3">
                <animate attributeName="cy" values="20;80;20" dur="8s" repeatCount="indefinite"/>
              </circle>
              <circle cx="80" cy="60" r="20" fill="white" opacity="0.2">
                <animate attributeName="cx" values="80;20;80" dur="10s" repeatCount="indefinite"/>
              </circle>
              <circle cx="60" cy="30" r="10" fill="white" opacity="0.4">
                <animate attributeName="r" values="10;25;10" dur="6s" repeatCount="indefinite"/>
              </circle>
            </svg>
          </div>
        </div>
        
        <div className="relative z-10 text-center py-20 px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4 tracking-tight">
            Meet Our Team
          </h1>
          <p className="text-xl text-orange-100 max-w-2xl mx-auto font-light">
            Passionate innovators dedicated to creating exceptional digital experiences
          </p>
          <div className="mt-8 w-24 h-1 bg-white mx-auto rounded-full opacity-80"></div>
        </div>
      </div>

      {/* Team Members Section */}
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">The Visionaries</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our diverse team brings together expertise from technology, design, and business to deliver innovative solutions
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {teamMembers.map((member, index) => (
            <div 
              key={index}
              className={`group relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden transform hover:-translate-y-2 ${
                hoveredMember === index ? 'scale-105' : ''
              }`}
              onMouseEnter={() => setHoveredMember(index)}
              onMouseLeave={() => setHoveredMember(null)}
            >
              {/* Card Header with Gradient */}
              <div className="h-32 bg-gradient-to-br from-orange-400 to-red-500 relative">
                <div className="absolute inset-0 bg-black bg-opacity-10"></div>
                <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2">
                  <div className="relative">
                    <div className="w-24 h-24 rounded-full border-4 border-white shadow-xl overflow-hidden">
                      <img 
                        src={member.photo} 
                        alt={member.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    </div>
                    <div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full border-2 border-white"></div>
                  </div>
                </div>
              </div>

              {/* Card Content */}
              <div className="pt-16 pb-8 px-6 text-center">
                <div className="inline-block px-3 py-1 bg-orange-100 text-orange-700 text-xs font-semibold rounded-full mb-3">
                  {member.role}
                </div>
                <h3 className="text-xl font-bold text-gray-800 mb-3 tracking-wide">
                  {member.name}
                </h3>
                <p className="text-gray-600 leading-relaxed mb-4 text-sm">
                  {member.description}
                </p>
                
                {/* Skills Tags */}
                <div className="flex flex-wrap justify-center gap-2 mb-4">
                  {member.skills.map((skill, skillIndex) => (
                    <span 
                      key={skillIndex}
                      className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-md font-medium hover:bg-orange-100 hover:text-orange-700 transition-colors duration-200"
                    >
                      {skill}
                    </span>
                  ))}
                </div>

                {/* Connect Button */}
                <button className="group/btn bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg transition-all duration-300 hover:from-orange-600 hover:to-red-600">
                  <span className="group-hover/btn:mr-2 transition-all duration-200">Connect</span>
                  <span className="inline-block group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="bg-gradient-to-br from-orange-500 via-orange-600 to-red-600 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <svg className="w-full h-full" viewBox="0 0 60 60" fill="none">
            <pattern id="testimonial-pattern" x="0" y="0" width="60" height="60" patternUnits="userSpaceOnUse">
              <circle cx="30" cy="30" r="2" fill="white"/>
              <circle cx="10" cy="10" r="1" fill="white"/>
              <circle cx="50" cy="50" r="1" fill="white"/>
            </pattern>
            <rect width="100%" height="100%" fill="url(#testimonial-pattern)"/>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl mx-auto px-6 py-16">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">What Our Clients Say</h2>
            <p className="text-xl text-orange-100 max-w-2xl mx-auto">
              Don't just take our word for it - hear from the amazing people we've worked with
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <div 
                key={index}
                className={`bg-white bg-opacity-20 backdrop-blur-lg rounded-2xl p-6 border border-white border-opacity-30 hover:bg-opacity-30 transition-all duration-300 hover:scale-105 ${
                  hoveredTestimonial === index ? 'shadow-2xl' : 'shadow-lg'
                }`}
                onMouseEnter={() => setHoveredTestimonial(index)}
                onMouseLeave={() => setHoveredTestimonial(null)}
              >
                {/* Quote Icon */}
                <div className="text-6xl text-white opacity-30 leading-none mb-4">"</div>
                
                <p className="text-white text-sm leading-relaxed mb-6 italic">
                  {testimonial.quote}
                </p>

                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-white border-opacity-50 mr-4">
                    <img 
                      src={testimonial.photo} 
                      alt={testimonial.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <div className="text-white font-semibold text-sm">
                      {testimonial.name}
                    </div>
                    <div className="text-orange-100 text-xs">
                      {testimonial.role} at {testimonial.company}
                    </div>
                  </div>
                </div>

                {/* Rating Stars */}
                <div className="flex mt-4 space-x-1">
                  {[...Array(5)].map((_, starIndex) => (
                    <span key={starIndex} className="text-yellow-300 text-sm">★</span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12">
            <button className="bg-white text-orange-600 px-8 py-3 rounded-full font-bold hover:bg-orange-50 transition-colors duration-300 shadow-lg hover:shadow-xl">
              Join Our Happy Clients
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default OurTeam;