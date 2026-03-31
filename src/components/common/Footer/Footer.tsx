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
  HomeModernIcon,
} from '@heroicons/react/24/outline';
import { homestayInfo } from '@/data/homestayInfo';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTiktok, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  const router = useRouter();

  const scrollToRooms = () => {
    if (window.location.pathname !== '/') {
      router.push('/#featured-rooms');
      return;
    }
    document.getElementById('featured-rooms')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const quickLinks = [
    { name: 'Trang chủ', href: '/', icon: HomeIcon, action: null },
    { name: 'Phòng', href: '#rooms', icon: BuildingOfficeIcon, action: scrollToRooms },
    { name: 'Về chúng mình', href: '/about', icon: InformationCircleIcon, action: null },
  ];

  const locationLinks = [
    { name: 'Đội Cấn', href: '/rooms?location=doi-can', icon: BuildingOffice2Icon },
    { name: 'Thịnh Hào', href: '/rooms?location=thinh-hao', icon: HomeModernIcon },
  ];

  const socialLinks = [
    { name: 'Facebook', href: 'https://www.facebook.com/profile.php?id=61556656874631', icon: faFacebook },
    { name: 'TikTok', href: 'https://www.tiktok.com/@lyahomestay?lang=vi-VN', icon: faTiktok },
    { name: 'Instagram', href: 'https://www.instagram.com/lyahome2024/', icon: faInstagram },
  ];

  const handleBooking = () => {
    window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  return (
    <footer className="bg-gradient-to-br from-genz-navy via-genz-darkTeal to-genz-navy text-white relative overflow-hidden">
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 left-10 w-40 h-40 bg-genz-gold/8 rounded-full blur-2xl" />
        <div className="absolute bottom-16 right-16 w-32 h-32 bg-white/5 rounded-full blur-xl" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10"
        >
          {/* About */}
          <motion.div variants={itemVariants} className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-9 h-9 bg-white/10 rounded-xl flex items-center justify-center border border-white/20">
                <HomeIcon className="h-4 w-4 text-white" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-white leading-none">Lya</h3>
                <p className="text-[10px] text-white/50 tracking-widest uppercase mt-0.5">Homestay</p>
              </div>
            </div>
            <p className="text-white/55 text-sm leading-relaxed">{homestayInfo.tagline}</p>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-semibold mb-5 text-white/50 uppercase tracking-wider">Điều hướng</h4>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  {link.action ? (
                    <button
                      onClick={link.action}
                      className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm group"
                    >
                      <link.icon className="h-4 w-4 group-hover:text-accent-400 transition-colors flex-shrink-0" />
                      <span>{link.name}</span>
                    </button>
                  ) : (
                    <Link
                      href={link.href}
                      className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm group"
                    >
                      <link.icon className="h-4 w-4 group-hover:text-accent-400 transition-colors flex-shrink-0" />
                      <span>{link.name}</span>
                    </Link>
                  )}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Locations */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-semibold mb-5 text-white/50 uppercase tracking-wider">Cơ sở</h4>
            <ul className="space-y-3">
              {locationLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="flex items-center gap-2.5 text-white/55 hover:text-white transition-colors text-sm group"
                  >
                    <link.icon className="h-4 w-4 group-hover:text-accent-400 transition-colors flex-shrink-0" />
                    <span>{link.name}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={itemVariants}>
            <h4 className="text-xs font-semibold mb-5 text-white/50 uppercase tracking-wider">Liên hệ</h4>
            <div className="space-y-3.5">
              <div className="flex items-start gap-3">
                <MapPinIcon className="h-4 w-4 text-accent-400 mt-0.5 flex-shrink-0" />
                <p className="text-white/55 text-sm leading-relaxed">{homestayInfo.address}</p>
              </div>
              <div className="flex items-center gap-3">
                <PhoneIcon className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <a href={`tel:${homestayInfo.contact.phone}`} className="text-white/55 hover:text-white transition-colors text-sm">
                  {homestayInfo.contact.phone}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <EnvelopeIcon className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <a href={`mailto:${homestayInfo.contact.email}`} className="text-white/55 hover:text-white transition-colors text-sm">
                  {homestayInfo.contact.email}
                </a>
              </div>
              <div className="flex items-center gap-3">
                <ClockIcon className="h-4 w-4 text-accent-400 flex-shrink-0" />
                <p className="text-white/55 text-sm">Check-in/out linh động 24/7</p>
              </div>
            </div>
          </motion.div>
        </motion.div>

        {/* Social & CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-12 pt-8 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-5">
              <span className="text-white/35 text-xs font-medium uppercase tracking-wider">Follow us</span>
              <div className="flex gap-2.5">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    whileHover={{ scale: 1.15, y: -2 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-9 h-9 bg-white/8 rounded-xl flex items-center justify-center hover:bg-accent-600/25 transition-all border border-white/10"
                  >
                    <FontAwesomeIcon icon={social.icon} className="text-sm text-white/60" />
                  </motion.a>
                ))}
              </div>
            </div>

            <motion.button
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={handleBooking}
              className="bg-accent-600 hover:bg-accent-700 text-white px-6 py-2.5 rounded-xl font-semibold text-sm shadow-md hover:shadow-lg transition-all"
            >
              Đặt phòng ngay
            </motion.button>
          </div>
        </motion.div>

        {/* Bottom */}
        <div className="mt-8 pt-5 border-t border-white/8 text-center">
          <p className="text-white/25 text-xs flex items-center justify-center gap-1.5">
            <span>© {currentYear} Lyahome. Made with</span>
            <HeartIcon className="h-3.5 w-3.5 text-red-400 fill-current" />
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
