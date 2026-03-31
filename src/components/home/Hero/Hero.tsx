'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { ChevronDownIcon, MapPinIcon } from '@heroicons/react/24/outline';

const Hero: React.FC = () => {
  const scrollToContent = () => {
    window.scrollTo({ top: window.innerHeight, behavior: 'smooth' });
  };

  const scrollToRooms = () => {
    document.getElementById('featured-rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const locations = [
    { title: 'Đội Cấn', subtitle: '2 phòng: Hard Room & Soft Room' },
    { title: 'Thịnh Hào', subtitle: '2 phòng: Ban Công & Tiny' },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-genz-navy via-genz-darkTeal to-genz-sage">
      {/* Floating background elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ y: [0, -20, 0], x: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 6, ease: 'easeInOut' }}
          className="absolute top-20 left-10 w-24 h-24 bg-genz-gold/15 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, 20, 0], x: [0, -15, 0] }}
          transition={{ repeat: Infinity, duration: 8, ease: 'easeInOut' }}
          className="absolute top-40 right-20 w-36 h-36 bg-white/8 rounded-full blur-2xl"
        />
        <motion.div
          animate={{ y: [0, -30, 0] }}
          transition={{ repeat: Infinity, duration: 10, ease: 'easeInOut' }}
          className="absolute bottom-32 left-1/4 w-20 h-20 bg-genz-gold/10 rounded-full blur-xl"
        />
      </div>

      {/* Main content */}
      <div className="relative z-10 text-center text-white max-w-5xl mx-auto px-4 pt-20">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-4xl sm:text-5xl md:text-7xl font-bold mb-5 text-shadow-genz"
        >
          <span className="block bg-gradient-to-r from-white to-white/75 bg-clip-text text-transparent">
            Lya Homestay
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="text-lg md:text-xl mb-4 font-medium text-white/80 tracking-wide"
        >
          Your vibe, your space, your story
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.55 }}
          className="text-base md:text-lg mb-10 text-white/60 max-w-2xl mx-auto leading-relaxed"
        >
          7 phòng homestay ấm cúng, tiện nghi giữa lòng Hà Nội
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="flex flex-col sm:flex-row gap-3 justify-center"
        >
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={scrollToRooms}
            className="bg-accent-600 hover:bg-accent-700 text-white text-base px-8 py-3.5 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all"
          >
            Khám phá phòng
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={() => window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank')}
            className="glass-effect text-white text-base px-8 py-3.5 rounded-xl font-semibold hover:bg-white/15 transition-all"
          >
            Đặt phòng ngay
          </motion.button>
        </motion.div>

        {/* Location cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.9 }}
          className="mt-14 mb-16 md:mb-10 max-w-2xl mx-auto"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {locations.map((location, index) => (
              <motion.div
                key={index}
                whileHover={{ y: -4 }}
                className="bg-white/8 backdrop-blur-md rounded-2xl p-5 border border-white/15 text-center hover:bg-white/12 transition-all"
              >
                <div className="flex justify-center mb-2.5">
                  <div className="w-8 h-8 bg-accent-600/30 rounded-lg flex items-center justify-center border border-accent-400/30">
                    <MapPinIcon className="h-4 w-4 text-accent-300" />
                  </div>
                </div>
                <h3 className="text-base font-semibold text-white mb-1">{location.title}</h3>
                <p className="text-sm text-white/55">{location.subtitle}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.button
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        onClick={scrollToContent}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 text-white/40 hover:text-white/70 transition-colors z-20"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="flex flex-col items-center gap-1.5"
        >
          <span className="text-xs font-medium hidden md:block tracking-wider uppercase">Scroll</span>
          <ChevronDownIcon className="h-5 w-5" />
        </motion.div>
      </motion.button>
    </section>
  );
};

export default Hero;
