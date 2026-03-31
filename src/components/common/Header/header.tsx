'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Bars3Icon, XMarkIcon, HomeIcon } from '@heroicons/react/24/outline';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToRooms = () => {
    if (window.location.pathname !== '/') {
      router.push('/#featured-rooms');
      return;
    }
    document.getElementById('featured-rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const navigationItems = [
    { name: 'Trang chủ', href: '/', action: null },
    { name: 'Phòng', href: '#rooms', action: scrollToRooms },
    { name: 'Về chúng mình', href: '/about', action: null },
    { name: 'Chính sách & nội quy', href: '/policies', action: null },
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
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled
          ? 'bg-white/92 backdrop-blur-xl shadow-sm border-b border-primary-200/60'
          : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-18">
          {/* Logo */}
          <Link href="/" className="flex-shrink-0">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              className="flex items-center gap-3"
            >
              <div className="w-9 h-9 bg-primary-900 rounded-xl flex items-center justify-center shadow-sm">
                <HomeIcon className="h-4.5 w-4.5 text-white h-[18px] w-[18px]" />
              </div>
              <div>
                <div className={`text-lg font-bold tracking-tight leading-none transition-colors ${
                  isScrolled ? 'text-primary-900' : 'text-white'
                }`}>
                  Lya
                </div>
                <div className={`text-[10px] font-medium tracking-[0.15em] uppercase transition-colors ${
                  isScrolled ? 'text-primary-500' : 'text-white/65'
                }`}>
                  Homestay
                </div>
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navigationItems.map((item) => (
              item.action ? (
                <motion.button
                  key={item.name}
                  whileHover={{ y: -1 }}
                  onClick={() => handleNavClick(item)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                    isScrolled
                      ? 'text-primary-600 hover:text-primary-900 hover:bg-primary-100'
                      : 'text-white/80 hover:text-white hover:bg-white/10'
                  }`}
                >
                  {item.name}
                </motion.button>
              ) : (
                <Link key={item.name} href={item.href}>
                  <motion.div
                    whileHover={{ y: -1 }}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                      isScrolled
                        ? 'text-primary-600 hover:text-primary-900 hover:bg-primary-100'
                        : 'text-white/80 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    {item.name}
                  </motion.div>
                </Link>
              )
            ))}

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBooking}
              className={`ml-3 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all shadow-sm hover:shadow ${
                isScrolled
                  ? 'bg-primary-900 text-white hover:bg-primary-800'
                  : 'bg-white text-primary-900 hover:bg-primary-50'
              }`}
            >
              Đặt phòng
            </motion.button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <motion.button
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`p-2.5 rounded-xl transition-all ${
                isScrolled ? 'text-primary-900 bg-primary-100' : 'text-white bg-white/10'
              }`}
            >
              <AnimatePresence mode="wait">
                {isMenuOpen ? (
                  <motion.div
                    key="close"
                    initial={{ rotate: -90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: 90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <XMarkIcon className="h-5 w-5" />
                  </motion.div>
                ) : (
                  <motion.div
                    key="menu"
                    initial={{ rotate: 90, opacity: 0 }}
                    animate={{ rotate: 0, opacity: 1 }}
                    exit={{ rotate: -90, opacity: 0 }}
                    transition={{ duration: 0.15 }}
                  >
                    <Bars3Icon className="h-5 w-5" />
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
              transition={{ duration: 0.25, ease: 'easeOut' }}
              className="md:hidden overflow-hidden"
            >
              <div className="bg-white rounded-2xl shadow-lg mt-3 mb-4 border border-primary-100">
                <div className="p-3 space-y-0.5">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.name}
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.05 }}
                    >
                      {item.action ? (
                        <button
                          onClick={() => handleNavClick(item)}
                          className="w-full text-left px-4 py-3 text-primary-800 hover:bg-primary-50 rounded-xl text-sm font-medium transition-colors"
                        >
                          {item.name}
                        </button>
                      ) : (
                        <Link
                          href={item.href}
                          className="block px-4 py-3 text-primary-800 hover:bg-primary-50 rounded-xl text-sm font-medium transition-colors"
                          onClick={() => setIsMenuOpen(false)}
                        >
                          {item.name}
                        </Link>
                      )}
                    </motion.div>
                  ))}

                  <div className="pt-2 border-t border-primary-100 mt-2">
                    <button
                      onClick={() => { setIsMenuOpen(false); handleBooking(); }}
                      className="w-full bg-primary-900 text-white py-3 px-4 rounded-xl font-semibold text-sm hover:bg-primary-800 transition-colors"
                    >
                      Đặt phòng
                    </button>
                  </div>
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
