import React from 'react';
import { Heart, Mail, Phone, MapPin, Twitter, Facebook, Instagram, Linkedin } from 'react-feather';

function Footer() {
  return (
    <footer className="bg-gray-900 text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          
          {/* About Section */}
          <div className="lg:col-span-2">
            <h3 className="text-2xl font-bold mb-6 flex items-center">
              <Heart className="text-amber-500 mr-2" />
              VolunteerConnect
            </h3>
            <p className="text-gray-400 mb-6">
              We connect passionate volunteers with meaningful opportunities to create positive change in communities worldwide.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Home</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Volunteer Opportunities</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-400 hover:text-amber-500 transition-colors">Get Involved</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 border-b border-gray-700 pb-2">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="text-amber-500 mr-3 mt-1 flex-shrink-0" size={18} />
                <span className="text-gray-400">123 Volunteer St, Community City, CC 12345</span>
              </li>
              <li className="flex items-center">
                <Mail className="text-amber-500 mr-3" size={18} />
                <a href="mailto:contact@volunteerconnect.org" className="text-gray-400 hover:text-amber-500 transition-colors">
                  contact@volunteerconnect.org
                </a>
              </li>
              <li className="flex items-center">
                <Phone className="text-amber-500 mr-3" size={18} />
                <a href="tel:+11234567890" className="text-gray-400 hover:text-amber-500 transition-colors">
                  +1 (123) 456-7890
                </a>
              </li>
            </ul>
          </div>
        </div>

        

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-500 text-sm mb-4 md:mb-0">
            &copy; {new Date().getFullYear()} VolunteerConnect. All rights reserved.
          </p>
          <div className="flex space-x-6">
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">Privacy Policy</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">Terms of Service</a>
            <a href="#" className="text-gray-500 hover:text-amber-500 text-sm transition-colors">Cookie Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;