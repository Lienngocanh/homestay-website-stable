'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { 
  MapPinIcon, 
  PhoneIcon, 
  EnvelopeIcon,
  ClockIcon,
  HeartIcon,
  HomeIcon,
  BuildingOfficeIcon,
  InformationCircleIcon,
  BuildingOffice2Icon,
  BuildingStorefrontIcon,
  HomeModernIcon
} from '@heroicons/react/24/outline';
import { homestayInfo } from '@/data/homestayInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

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

  const quickLinks = [
    { name: 'Trang chủ', href: '/', icon: HomeIcon, action: null },
    { name: 'Phòng', href: '#rooms', icon: BuildingOfficeIcon, action: scrollToRooms },
    { name: 'Về chúng mình', href: '/about', icon: InformationCircleIcon, action: null },
  ];

  const locationLinks = [
    { name: 'Đội Cấn Rooms', href: '/rooms?location=doi-can', icon: BuildingOffice2Icon },
    { name: 'Kim Mã Rooms', href: '/rooms?location=kim-ma', icon: BuildingStorefrontIcon },
    { name: 'Thịnh Hào Rooms', href: '/rooms?location=thinh-hao', icon: HomeModernIcon },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61556656874631', icon: faFacebook },
    { name: 'TikTok', href: 'https://www.tiktok.com/@lyahomestay?lang=vi-VN', icon: faTiktok },
    { name: 'Instagram', href: 'https://www.instagram.com/lyahome2024/', icon: faInstagram },
  ];

  const handleBooking = () => {
    window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank');
  };

  const handleLinkClick = (link: typeof quickLinks[0]) => {
    if (link.action) {
      link.action();
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-genz-navy via-genz-darkTeal to-genz-navy text-white relative overflow-hidden">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-genz-gold/10 rounded-full blur-xl" />
        <div className="absolute bottom-20 right-20 w-24 h-24 bg-genz-cream/10 rounded-full blur-lg" />
        <div className="absolute top-1/2 left-1/4 w-16 h-16 bg-genz-sage/10 rounded-full blur-md" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          {/* About Section */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-black rounded-2xl flex items-center justify-center shadow-lg">
                  <span className="text-2xl">🏠</span>
                </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Lya</h3>
                <p className="text-genz-cream text-sm">Homestay</p>
              </div>
            </div>
            
            <p className="text-genz-cream/90 mb-6 text-sm leading-relaxed">
              {homestayInfo.tagline}
            </p>
            
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-genz-cream">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={() => handleLinkClick(link)}
                      className="flex items-center gap-2 text-genz-cream/80 hover:text-white transition-colors text-sm group text-left"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        <link.icon className="h-5 w-5" />
                      </span>
                      <span>{link.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2 text-genz-cream/80 hover:text-white transition-colors text-sm group"
                    >
                      <span className="group-hover:scale-110 transition-transform">
                        <link.icon className="h-5 w-5" />
                      </span>   
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-genz-cream">Các cơ sở</h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2 text-genz-cream/80 hover:text-white transition-colors text-sm group"
                  >
                    <span className="group-hover:scale-110 transition-transform">
                      <link.icon className="h-5 w-5" />
                    </span>
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={itemVariants}>
            <h4 className="text-lg font-bold mb-6 text-genz-cream">Liên hệ</h4>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-5 w-5 text-genz-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-genz-cream/90 text-sm font-medium">Locations</p>
                  <p className="text-genz-cream/70 text-sm">{homestayInfo.address}</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <PhoneIcon className="h-5 w-5 text-genz-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-genz-cream/90 text-sm font-medium">Phone</p>
                  <a
                    href={`tel:${homestayInfo.contact.phone}`}
                    className="text-genz-cream/70 hover:text-white transition-colors text-sm"
                  >
                    {homestayInfo.contact.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <EnvelopeIcon className="h-5 w-5 text-genz-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-genz-cream/90 text-sm font-medium">Email</p>
                  <a
                    href={`mailto:${homestayInfo.contact.email}`}
                    className="text-genz-cream/70 hover:text-white transition-colors text-sm"
                  >
                    {homestayInfo.contact.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <ClockIcon className="h-5 w-5 text-genz-gold mt-0.5 flex-shrink-0" />
                <div>
                  <p className="text-genz-cream/90 text-sm font-medium">Check-in</p>
                   <p className="text-genz-cream/80 text-sm leading-relaxed">
                     Checkin - out linh động 24/7
                   </p>
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social Links & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-8 border-t border-genz-cream/20"
        >
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-6">
              <p className="text-genz-cream/90 text-sm font-medium">Follow us:</p>
              <div className="flex gap-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.2, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-10 h-10 bg-white/10 backdrop-blur-sm rounded-xl flex items-center justify-center hover:bg-genz-gold/30 transition-all duration-300 border border-white/20"
                  >
                    <span className="text-lg">
                      <FontAwesomeIcon icon={social.icon} />
                    </span>
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handleBooking}
              className="bg-gradient-to-r from-genz-gold to-genz-cream text-genz-navy px-6 py-3 rounded-2xl font-bold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2"
            >
              <span>💬</span>
              <span>Đặt phòng ngay</span>
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-8 pt-6 border-t border-genz-cream/10 text-center"
        >
          <p className="text-genz-cream/60 text-sm flex items-center justify-center gap-2">
            <span>© {currentYear} Lyahome. Made with</span>
            <HeartIcon className="h-4 w-4 text-red-400 fill-current" />
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;