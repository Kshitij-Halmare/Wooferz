import React, { useState } from 'react';
import { Heart, Check, X, Loader2, CreditCard, Shield, Users } from 'lucide-react';

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
  const [selectedAmount, setSelectedAmount] = useState(null);
  const [customAmount, setCustomAmount] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [donorDetails, setDonorDetails] = useState({
    name: '',
    email: '',
    phone: ''
  });
  const [paymentStatus, setPaymentStatus] = useState(null);

  const predefinedAmounts = [50, 100, 200, 500, 1000, 5000];

  const handleAmountSelect = (amount) => {
    setSelectedAmount(amount);
    setCustomAmount('');
  };

  const handleCustomAmountChange = (e) => {
    const value = e.target.value;
    if (value === '' || /^\d+$/.test(value)) {
      setCustomAmount(value);
      setSelectedAmount(null);
    }
  };

  const getCurrentAmount = () => {
    return selectedAmount || parseInt(customAmount) || 0;
  };

  const handleDonateClick = () => {
    const amount = getCurrentAmount();
    if (amount > 0) {
      setShowForm(true);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setDonorDetails(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const loadRazorpayScript = () => {
    return new Promise((resolve) => {
      if (window.Razorpay) {
        resolve(true);
        return;
      }
      
      const script = document.createElement('script');
      script.src = 'https://checkout.razorpay.com/v1/checkout.js';
      script.onload = () => resolve(true);
      script.onerror = () => resolve(false);
      document.body.appendChild(script);
    });
  };

  const handlePayment = async () => {
    const amount = getCurrentAmount();
    const { name, email, phone } = donorDetails;

    if (!name || !email || !phone) {
      alert('Please fill all the required fields');
      return;
    }

    if (amount < 1) {
      alert('Please select a valid amount');
      return;
    }

    setIsLoading(true);

    try {
      // Load Razorpay script
      const scriptLoaded = await loadRazorpayScript();
      if (!scriptLoaded) {
        throw new Error('Razorpay script failed to load');
      }

      // Create order - Updated to match backend route
      const orderResponse = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/api/donation/create-order`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          amount,
          donorName: name,
          donorEmail: email,
          donorPhone: phone
        })
      });

      const orderData = await orderResponse.json();
      
      if (!orderData.success) {
        throw new Error(orderData.message || 'Failed to create order');
      }

      // Razorpay options
      const options = {
        key: orderData.key,
        amount: orderData.amount,
        currency: orderData.currency,
        order_id: orderData.orderId,
        name: 'Donation Platform',
        description: 'Help make a difference',
        image: '/logo.png', // Add your logo here
        prefill: {
          name: name,
          email: email,
          contact: phone
        },
        theme: {
          color: '#E15519'
        },
        handler: async (response) => {
          try {
            // Verify payment - Updated to match backend route
            const verifyResponse = await fetch(`${import.meta.env.VITE_SERVER_DOMAIN}/api/donation/verify-payment`, {
              method: 'POST',
              headers: {
                'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature
              })
            });

            const verifyData = await verifyResponse.json();
            
            if (verifyData.success) {
              setPaymentStatus('success');
              setShowForm(false);
              // Reset form
              setDonorDetails({ name: '', email: '', phone: '' });
              setSelectedAmount(null);
              setCustomAmount('');
            } else {
              setPaymentStatus('failed');
            }
          } catch (error) {
            console.error('Payment verification error:', error);
            setPaymentStatus('failed');
          }
        },
        modal: {
          ondismiss: () => {
            setIsLoading(false);
          }
        }
      };

      const razorpay = new window.Razorpay(options);
      razorpay.open();
      
    } catch (error) {
      console.error('Payment error:', error);
      alert('Payment failed. Please try again.');
    } finally {
      setIsLoading(false);
    }
  };

  const PaymentStatusModal = ({ status, onClose }) => {
    if (!status) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 text-center">
          {status === 'success' ? (
            <>
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Check className="w-8 h-8 text-green-600" />
              </div>
              <h3 className="text-2xl font-bold text-green-600 mb-2">Payment Successful!</h3>
              <p className="text-gray-600 mb-6">Thank you for your generous donation. Your contribution will help make a real difference.</p>
            </>
          ) : (
            <>
              <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <X className="w-8 h-8 text-red-600" />
              </div>
              <h3 className="text-2xl font-bold text-red-600 mb-2">Payment Failed</h3>
              <p className="text-gray-600 mb-6">Something went wrong with your payment. Please try again.</p>
            </>
          )}
          <button
            onClick={onClose}
            className="bg-[#E15519] text-white px-6 py-2 rounded-lg hover:bg-[#C44517] transition"
          >
            Close
          </button>
        </div>
      </div>
    );
  };

  const DonorDetailsModal = ({ show, onClose }) => {
    if (!show) return null;

    return (
      <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
        <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4">
          <h3 className="text-2xl font-bold text-[#E15519] mb-6 text-center">Donor Details</h3>
          
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Full Name *</label>
              <input
                type="text"
                name="name"
                value={donorDetails.name}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E15519] focus:border-transparent"
                placeholder="Enter your full name"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email Address *</label>
              <input
                type="email"
                name="email"
                value={donorDetails.email}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E15519] focus:border-transparent"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number *</label>
              <input
                type="tel"
                name="phone"
                value={donorDetails.phone}
                onChange={handleInputChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#E15519] focus:border-transparent"
                placeholder="Enter your phone number"
              />
            </div>
            
            <div className="bg-gray-50 p-4 rounded-lg">
              <div className="flex justify-between items-center">
                <span className="text-lg font-medium">Amount:</span>
                <span className="text-2xl font-bold text-[#E15519]">₹{getCurrentAmount()}</span>
              </div>
            </div>
          </div>
          
          <div className="flex gap-4 mt-6">
            <button
              onClick={onClose}
              className="flex-1 py-2 border border-gray-300 rounded-lg hover:bg-gray-50 transition"
            >
              Cancel
            </button>
            <button
              onClick={handlePayment}
              disabled={isLoading}
              className="flex-1 bg-[#E15519] text-white py-2 rounded-lg hover:bg-[#C44517] transition disabled:opacity-50 flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <CreditCard className="w-4 h-4" />
                  Pay Now
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    );
  };

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
            
            {/* Amount Selection */}
            <div className="grid grid-cols-3 gap-4 mb-4 w-full max-w-[340px]">
              {predefinedAmounts.map((amount) => (
                <button
                  key={amount}
                  onClick={() => handleAmountSelect(amount)}
                  className={`rounded-full font-bold py-2 px-4 text-lg shadow-md focus:outline-none transition ${
                    selectedAmount === amount
                      ? 'bg-[#E15519] text-white border-2 border-[#E15519]'
                      : 'text-[#E15519] border-2 border-[#E15519] bg-[#FFA52C] hover:bg-[#E15519] hover:text-white'
                  }`}
                >
                  ₹{amount}
                </button>
              ))}
            </div>

            {/* Custom Amount Input */}
            <div className="w-full max-w-[340px] mb-4">
              <input
                type="text"
                value={customAmount}
                onChange={handleCustomAmountChange}
                placeholder="Enter custom amount"
                className="w-full px-4 py-2 border-2 border-[#E15519] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#E15519] focus:border-transparent"
              />
            </div>

            {/* Donate Button */}
            <button
              onClick={handleDonateClick}
              disabled={getCurrentAmount() === 0}
              className="mt-2 mb-4 w-full max-w-[340px] py-3 rounded-full font-bold text-white text-xl shadow-lg transition bg-gradient-to-r from-[#FF7A00] to-[#FF9E45] hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              style={{ boxShadow: '0 4px 16px 0 rgba(255, 122, 0, 0.15)' }}
            >
              <Heart className="w-5 h-5" />
              Donate ₹{getCurrentAmount()}
            </button>

            {/* Trust Indicators */}
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
              <div className="flex items-center gap-1">
                <Shield className="w-4 h-4" />
                <span>Secure Payment</span>
              </div>
              <div className="flex items-center gap-1">
                <Users className="w-4 h-4" />
                <span>Trusted by 1000+</span>
              </div>
            </div>
            
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

      {/* Modals */}
      <DonorDetailsModal show={showForm} onClose={() => setShowForm(false)} />
      <PaymentStatusModal status={paymentStatus} onClose={() => setPaymentStatus(null)} />
    </div>
  );
};

export default Donate;