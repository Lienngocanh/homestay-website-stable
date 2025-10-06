'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, SparklesIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to handle room navigation
  const scrollToRooms = () => {
    // Check if we're on homepage by checking current URL
    const isHomePage = window.location.pathname === '/';
    
    // If we're not on homepage, navigate to homepage first then scroll
    if (!isHomePage) {
      router.push('/#featured-rooms');
      return;
    }
    
    // If we're on homepage, scroll to rooms section
    const roomsSection = document.getElementById('featured-rooms');
    if (roomsSection) {
      roomsSection.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  const navigationItems = [
    { name: 'Trang chủ', href: '/', emoji: '🏠', action: null },
    { name: 'Phòng', href: '#rooms', emoji: '🛏️', action: scrollToRooms },
    { name: 'Về chúng mình', href: '/about', emoji: '✨', action: null },
    { name: 'Chính sách & nội quy', href: '/policies', emoji: '📋', action: null },
  ];

  const handleBooking = () => {
    window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank');
  };

  const handleNavClick = (item: typeof navigationItems[0]) => {
    if (item.action) {
      item.action();
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/80 backdrop-blur-xl shadow-2xl border-b border-genz-cream/20'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0 flex items-center group">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3"
            >
              <div className="relative">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🏠</span>
                </div>
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{ repeat: Infinity, duration: 8, ease: "linear" }}
                  className="absolute -top-1 -right-1 w-4 h-4 bg-genz-sage rounded-full flex items-center justify-center"
                >
                  <span className="text-xs">✨</span>
                </motion.div>
              </div>
              
              <div>
                <div className={`text-2xl font-bold transition-colors ${
                  isScrolled 
                    ? 'text-genz-navy' 
                    : 'text-white'
                }`}>
                  Lya
                </div>
                <div className={`text-sm font-medium transition-colors ${
                  isScrolled
                    ? 'text-genz-darkTeal'
                    : 'text-genz-cream'
                }`}>
                  Homestay
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="group relative">
                {item.action ? (
                  <motion.button
                    whileHover={{ y: -2 }}
                    onClick={() => handleNavClick(item)}
                    className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                      isScrolled 
                        ? 'text-genz-navy hover:bg-genz-cream/30 hover:text-genz-darkTeal' 
                        : 'text-white/90 hover:bg-white/10 hover:text-white'
                    }`}
                  >
                    <span>{item.emoji}</span>
                    <span>{item.name}</span>
                  </motion.button>
                ) : (
                  <Link href={item.href}>
                    <motion.div
                      whileHover={{ y: -2 }}
                      className={`flex items-center gap-2 px-4 py-2 rounded-2xl text-sm font-semibold transition-all duration-300 ${
                        isScrolled 
                          ? 'text-genz-navy hover:bg-genz-cream/30 hover:text-genz-darkTeal' 
                          : 'text-white/90 hover:bg-white/10 hover:text-white'
                      }`}
                    >
                      <span>{item.emoji}</span>
                      <span>{item.name}</span>
                    </motion.div>
                  </Link>
                )}
                
                {/* Hover effect line */}
                <motion.div
                  className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-genz-gold to-genz-sage rounded-full"
                  initial={{ scaleX: 0 }}
                  whileHover={{ scaleX: 1 }}
                  transition={{ duration: 0.3 }}
                />
              </div>
            ))}
            
            {/* Booking Button */}
            <motion.button
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="ml-4 bg-white text-genz-navy px-6 py-3 rounded-2xl text-sm font-bold shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-genz-gold/30"
            >
              <span className="flex items-center gap-2">
                <span>💬</span>
                <span>Đặt phòng ở đây nè</span>
              </span>
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`relative p-3 rounded-2xl transition-all duration-300 ${
                isScrolled 
                  ? 'text-genz-navy bg-genz-cream/20' 
                  : 'text-white bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <XMarkIcon className="h-6 w-6" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Bars3Icon className="h-6 w-6" />
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-2xl mt-4 mb-4 border border-genz-cream/30">
                <div className="p-6 space-y-2">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.3 }}
                    >
                      {item.action ? (
                        <button
                          onClick={() => handleNavClick(item)}
                          className="w-full flex items-center gap-3 px-4 py-3 text-genz-navy hover:bg-gradient-to-r hover:from-genz-cream/30 hover:to-genz-gold/20 rounded-2xl transition-all duration-300 font-semibold text-left"
                        >
                          <span className="text-lg">{item.emoji}</span>
                          <span>{item.name}</span>
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="flex items-center gap-3 px-4 py-3 text-genz-navy hover:bg-gradient-to-r hover:from-genz-cream/30 hover:to-genz-gold/20 rounded-2xl transition-all duration-300 font-semibold"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          <span className="text-lg">{item.emoji}</span>
                          <span>{item.name}</span>
                        </Link>
                      )}
                    </motion.div>
                  ))}
                  
                  <motion.div
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: navigationItems.length * 0.1, duration: 0.3 }}
                    className="pt-4 border-t border-genz-cream/30"
                  >
                    <button
                      onClick={() => {
                        setIsMenuOpen(false);
                        handleBooking();
                      }}
                     className="w-full bg-white text-genz-navy py-4 px-6 rounded-2xl font-bold text-center shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <span>💬</span>
                      <span>Đặt phòng ở đây nè</span>
                    </button>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  );
};

export default Header;