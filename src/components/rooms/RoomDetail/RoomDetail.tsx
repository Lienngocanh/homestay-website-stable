'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/types';
import { 
  StarIcon, 
  HeartIcon,
  ShareIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
  HomeIcon,
  MapPinIcon
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

interface RoomDetailProps {
  room: Room;
}

const RoomDetail: React.FC<RoomDetailProps> = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const getLocationInfo = (roomId: string) => {
    if (roomId.includes('doi-can')) return { location: 'Đội Cấn', emoji: '🏙️', description: 'Trung tâm Hà Nội' };
    // if (roomId.includes('kim-ma')) return { location: 'Kim Mã', emoji: '✨', description: 'Khu vực cao cấp' };
    if (roomId.includes('thinh-hao')) return { location: 'Thịnh Hào', emoji: '🌟', description: 'Prime location' };
    return { location: 'Hà Nội', emoji: '📍', description: 'Central location' };
  };

  const locationInfo = getLocationInfo(room.id);

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);
  };

  const openFacebookBooking = () => {
    const message = `Hi! Mình muốn book phòng ${room.name} tại ${locationInfo.location}. Có thể tư vấn giá và lịch trống không ạ? 😊`;
    const encodedMessage = encodeURIComponent(message);
    const facebookUrl = `https://www.facebook.com/profile.php?id=61556656874631`;
    window.open(facebookUrl, '_blank');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Image Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white hover:text-genz-cream z-10"
            >
              <XMarkIcon className="h-8 w-8" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-4">
              <Image
                src={room.images[currentImageIndex]}
                alt={`${room.name} - ảnh ${currentImageIndex + 1}`}
                fill
                className="object-contain"
                onClick={(e) => e.stopPropagation()}
              />
              
              {room.images.length > 1 && (
                <>
                  <button
                    onClick={(e) => { e.stopPropagation(); prevImage(); }}
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all"
                  >
                    <ChevronLeftIcon className="h-6 w-6" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 backdrop-blur-sm p-2 rounded-full text-white hover:bg-white/20 transition-all"
                  >
                    <ChevronRightIcon className="h-6 w-6" />
                  </button>
                </>
              )}

              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/50'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back button */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-genz-navy hover:text-genz-darkTeal transition-colors"
          >
            <ChevronLeftIcon className="h-5 w-5" />
            <span className="font-medium">Về trang chủ</span>
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <div
                className="relative h-96 rounded-3xl overflow-hidden cursor-pointer group"
                onClick={() => setIsGalleryOpen(true)}
              >
                <Image
                  src={room.images[currentImageIndex]}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  priority
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-all duration-300 flex items-center justify-center">
                  <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all duration-300">
                    <span className="text-sm font-medium">👁️ Xem tất cả ảnh</span>
                  </div>
                </div>
              </div>

              {/* Image thumbnails */}
              {room.images.length > 1 && (
                <div className="flex gap-3 mt-4">
                  {room.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentImageIndex(index)}
                      className={`relative w-20 h-20 rounded-xl overflow-hidden transition-all ${
                        index === currentImageIndex 
                          ? 'ring-3 ring-genz-gold scale-105' 
                          : 'opacity-70 hover:opacity-100'
                      }`}
                    >
                      <Image
                        src={image}
                        alt={`${room.name} - thumbnail ${index + 1}`}
                        fill
                        className="object-cover"
                      />
                    </button>
                  ))}
                </div>
              )}
            </div>
          </motion.div>

          {/* Room Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  <span className="text-2xl">{locationInfo.emoji}</span>
                  <div>
                    <h1 className="text-3xl md:text-4xl font-bold gradient-text">
                      {room.name}
                    </h1>
                    <p className="text-genz-darkTeal font-medium">
                      {locationInfo.location} • {locationInfo.description}
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-2">
                  <button
                    onClick={() => setIsLiked(!isLiked)}
                    className="p-2 rounded-full hover:bg-gray-100 transition-colors"
                  >
                    {isLiked ? (
                      <HeartSolid className="h-6 w-6 text-red-500" />
                    ) : (
                      <HeartIcon className="h-6 w-6 text-gray-400" />
                    )}
                  </button>
                </div>
              </div>

              {/* Rating & Reviews */}
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  <StarIcon className="h-5 w-5 text-yellow-400 fill-current" />
                  {/* <span className="font-semibold">{room.rating}</span>
                  <span className="text-gray-500">({room.reviewCount} reviews)</span> */}
                </div>
                <div className="flex items-center gap-4 text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <UsersIcon className="h-4 w-4" />
                    <span>{room.maxGuests} khách</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeIcon className="h-4 w-4" />
                    <span>{room.size}m²</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Card instead of Price */}
           <div className="bg-gradient-warm p-6 rounded-3xl text-genz-navy">
            <div className="text-center">
              <div className="text-2xl font-bold mb-2">
                💬 Liên hệ để đặt phòng
              </div> 
              <div className="flex items-center justify-center gap-4 text-sm">
                <span className="bg-white/30 px-3 py-1 rounded-full">📞 Gọi ngay</span>
                <span className="bg-white/30 px-3 py-1 rounded-full">💬 Chat Facebook</span>
                <span className="bg-white/30 px-3 py-1 rounded-full">⚡ Phản hồi nhanh</span>
              </div>
            </div>
          </div>

            {/* Description */}
            <div>
              <h3 className="text-xl font-semibold mb-3">Về phòng này</h3>
              <p className="text-gray-600 leading-relaxed">
                {room.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-xl font-semibold mb-4">Tiện nghi & Dịch vụ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {room.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-3 p-3 bg-white rounded-2xl border border-gray-100"
                  >
                    <span className="text-lg">{feature.split(' ')[0]}</span>
                    <span className="text-gray-700">{feature.substring(feature.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking Button */}
            <div className="sticky bottom-6 bg-white p-6 rounded-3xl shadow-genz border border-gray-100">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openFacebookBooking}
                className="w-full btn-primary-genz text-lg py-4 shadow-lg"
              >
                💬 Chat Facebook để đặt phòng
              </motion.button>
              <p className="text-center text-sm text-gray-500 mt-3">
                Phản hồi nhanh trong 5 phút • Free cancellation
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;