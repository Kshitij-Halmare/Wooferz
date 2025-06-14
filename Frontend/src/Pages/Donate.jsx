import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Users, Gift, ArrowRight, CheckCircle } from 'lucide-react';

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
  const [selectedAmount, setSelectedAmount] = useState('');
  const [customAmount, setCustomAmount] = useState('');

  const donationAmounts = ['₹50', '₹100', '₹200', '₹500', '₹1000', '₹5000'];

  const impactStats = [
    { icon: Heart, number: '10,000+', label: 'Lives Touched', color: 'from-orange-400 to-red-400' },
    { icon: Users, number: '500+', label: 'Families Helped', color: 'from-orange-500 to-orange-600' },
    { icon: Gift, number: '25+', label: 'Communities Served', color: 'from-yellow-400 to-orange-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 via-white to-orange-100">
      {/* Enhanced Banner */}
      <section className="relative w-full h-[70vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5, ease: 'easeOut' }}
        >
          <img
            src="Donate_banner.jpg"
            alt="Donate Banner"
            className="w-full h-full object-cover"
            style={{ objectPosition: 'center 65%' }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent" />
        </motion.div>
        
        <div className="absolute inset-0 flex items-center justify-start pl-8 md:pl-20">
          <motion.div
            className="max-w-2xl text-white"
            initial={{ opacity: 0, y: 60 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <motion.h1
              className="text-5xl md:text-7xl font-black mb-6 leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.8 }}
            >
              <span className="bg-gradient-to-r from-orange-400 to-orange-600 bg-clip-text text-transparent">
                Donate
              </span>{' '}
              <span className="text-white">Now</span>
            </motion.h1>
            <motion.p
              className="text-xl md:text-2xl font-medium mb-8 text-orange-100"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              Transform lives with your generosity. Every contribution creates ripples of hope.
            </motion.p>
            <motion.button
              className="bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white px-8 py-4 rounded-full font-bold text-lg shadow-xl hover:shadow-2xl transition-all duration-300 flex items-center gap-2"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1, duration: 0.8 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Donating <ArrowRight className="w-5 h-5" />
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-50/50 to-transparent" />
        <div className="max-w-7xl mx-auto px-4 relative">
          <motion.div
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.2 } }
            }}
          >
            {impactStats.map((stat, index) => (
              <motion.div
                key={index}
                className="text-center group"
                variants={{
                  hidden: { opacity: 0, y: 50 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.6 }}
              >
                <div className={`w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-r ${stat.color} flex items-center justify-center shadow-lg group-hover:shadow-xl transition-shadow duration-300`}>
                  <stat.icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-4xl font-bold text-gray-800 mb-2">{stat.number}</h3>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Enhanced Donation Section */}
      <section className="py-20 bg-gradient-to-br from-orange-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Be the Spark of Change
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your donation doesn't just help—it transforms. Join thousands of compassionate souls making a real difference in communities worldwide.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              className="relative"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="relative overflow-hidden rounded-3xl shadow-2xl">
                <img
                  src="donate_intro_img.png"
                  alt="Charity Work"
                  className="w-full h-96 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                <div className="absolute bottom-6 left-6 text-white">
                  <p className="text-lg font-semibold">Creating smiles, one donation at a time</p>
                </div>
              </div>
            </motion.div>

            <motion.div
              className="space-y-8"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-xl border border-orange-100">
                <h3 className="text-2xl font-bold text-gray-800 mb-6 text-center">Choose Your Impact</h3>
                
                <div className="grid grid-cols-2 gap-4 mb-6">
                  {donationAmounts.map((amount) => (
                    <motion.button
                      key={amount}
                      onClick={() => setSelectedAmount(amount)}
                      className={`p-4 rounded-2xl font-bold text-lg border-2 transition-all duration-300 ${
                        selectedAmount === amount
                          ? 'bg-gradient-to-r from-orange-500 to-orange-600 text-white border-orange-500 shadow-lg'
                          : 'bg-orange-50 text-orange-600 border-orange-200 hover:border-orange-300 hover:bg-orange-100'
                      }`}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                      {amount}
                    </motion.button>
                  ))}
                </div>

                <div className="mb-6">
                  <input
                    type="text"
                    placeholder="Enter custom amount"
                    value={customAmount}
                    onChange={(e) => setCustomAmount(e.target.value)}
                    className="w-full p-4 border-2 border-orange-200 rounded-2xl focus:border-orange-500 focus:outline-none text-lg bg-orange-50/50"
                  />
                </div>

                <motion.button
                  className="w-full py-4 bg-gradient-to-r from-orange-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-bold text-xl rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                  whileHover={{ scale: 1.02, y: -2 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Heart className="w-6 h-6" />
                  Donate Now
                </motion.button>

                <div className="mt-6 flex items-center justify-center text-gray-600">
                  <CheckCircle className="w-5 h-5 text-green-500 mr-2" />
                  <span className="text-sm">Secure & Trusted Payment</span>
                </div>
              </div>

              <motion.div
                className="text-center"
                whileHover={{ scale: 1.02 }}
              >
                <a
                  href="#donation-impact"
                  className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold text-lg underline decoration-orange-300 hover:decoration-orange-500 transition-colors"
                  style={{ scrollBehavior: 'smooth' }}
                >
                  See Your Impact in Action <ArrowRight className="w-5 h-5" />
                </a>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Enhanced Impact Gallery */}
      <section id="donation-impact" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-orange-600 to-orange-500 bg-clip-text text-transparent">
              Where Your Heart Goes
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every donation creates a story of hope. See how your generosity transforms lives and builds stronger communities.
            </p>
          </motion.div>

          <motion.div
            className="grid gap-4"
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gridAutoRows: '200px',
              gridAutoFlow: 'dense',
            }}
            initial="hidden"
            whileInView="visible"
            variants={{
              hidden: {},
              visible: { transition: { staggerChildren: 0.05 } }
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
                <motion.div
                  key={idx}
                  className={`group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 bg-gradient-to-br from-orange-100 to-orange-50 ${className}`}
                  style={{ display: img ? 'block' : 'none' }}
                  variants={{
                    hidden: { opacity: 0, scale: 0.8, rotateY: -10 },
                    visible: { opacity: 1, scale: 1, rotateY: 0 }
                  }}
                  transition={{ duration: 0.6, delay: idx * 0.03 }}
                  whileHover={{ y: -5 }}
                >
                  <img
                    src={img}
                    alt={`Impact ${idx + 1}`}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">
                    <p className="font-semibold text-sm">Making a difference</p>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-orange-500 to-orange-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20" style={{backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.1'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`}} />
        <div className="max-w-4xl mx-auto px-4 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Ready to Make a Difference?
            </h2>
            <p className="text-xl md:text-2xl mb-8 text-orange-100">
              Join our community of changemakers and help us create a better tomorrow, today.
            </p>
            <motion.button
              className="bg-white text-orange-600 px-12 py-4 rounded-full font-bold text-xl shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              Start Your Journey
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Donate;