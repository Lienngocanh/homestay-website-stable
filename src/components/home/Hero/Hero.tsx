'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, StarIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: 'smooth'
    });
  };

  // New function to scroll to rooms section
  const scrollToRooms = () => {
    const roomsSection = document.getElementById('featured-rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-genz-navy via-genz-darkTeal to-genz-sage">
      {/* Floating elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          animate={{ 
            y: [0, -20, 0],
            x: [0, 10, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 6,
            ease: "easeInOut" 
          }}
          className="absolute top-20 left-10 w-20 h-20 bg-genz-gold/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, 20, 0],
            x: [0, -15, 0]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 8,
            ease: "easeInOut" 
          }}
          className="absolute top-40 right-20 w-32 h-32 bg-genz-cream/20 rounded-full blur-xl"
        />
        <motion.div
          animate={{ 
            y: [0, -30, 0],
            rotate: [0, 180, 360]
          }}
          transition={{ 
            repeat: Infinity, 
            duration: 10,
            ease: "linear" 
          }}
          className="absolute bottom-32 left-1/4 w-16 h-16 bg-genz-sage/30 rounded-full blur-lg"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4">
        {/* Badge */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-md rounded-full px-4 py-2 mb-6 border border-white/20"
        >
          <div className="flex">
            {[...Array(5)].map((_, i) => (
              <StarIcon key={i} className="w-4 h-4 text-genz-cream fill-current" />
            ))}
          </div>
          <span className="text-sm font-medium">4.9★ • 500+ happy guests</span>
        </motion.div> */}

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-bold mb-6 text-shadow-genz"
        >
          <span className="block bg-gradient-to-r from-genz-cream to-genz-gold bg-clip-text text-transparent">
            Lya Homestay
          </span>
        </motion.h1>
        
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-xl md:text-2xl mb-4 font-medium text-white/90"
        >
          Your vibe, your space, your story ✨
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-lg md:text-xl mb-12 text-white/80 max-w-3xl mx-auto leading-relaxed"
        >
          7 phòng homestay siêu ấm cúng tiện nghi giữa lòng Hà Nội
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToRooms} // Changed from window.location.href to scrollToRooms
            className="btn-accent-genz text-lg px-8 py-4 shadow-2xl"
          >
            Đa dạng phòng
          </motion.button>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank')}
            className="glass-effect text-white px-8 py-4 rounded-2xl font-semibold hover:bg-white/20 transition-all duration-300 shadow-xl border border-white/30"
          >
            Đặt phòng ngay
          </motion.button>
        </motion.div>

        {/* Location cards */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-12 mb-16 md:mb-8 max-w-4xl mx-auto"
        >
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                🏡 Hệ thống cơ sở
        </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { icon: '🏢', title: 'Đội Cấn', subtitle: '2 phòng: Hard  & Soft' },
              { icon: '✨', title: 'Kim Mã', subtitle: '3 phòng: Lya02, Lya03, Lya04' },
              { icon: '🌟', title: 'Thịnh Hào', subtitle: '2 phòng: Ban Công & Tiny' }
            ].map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.2 + index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 text-center hover:bg-white/15 transition-all duration-300"
              >
                <div className="text-3xl mb-3">{location.icon}</div>
                <h3 className="text-lg font-bold text-white mb-2">{location.title}</h3>
                <p className="text-sm text-white/80">{location.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Animated scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white/70 hover:text-white transition-colors z-20"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-2"
        >
          <span className="text-sm font-medium hidden md:block">Scroll to discover</span>
          <ChevronDownIcon className="h-6 w-6" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;