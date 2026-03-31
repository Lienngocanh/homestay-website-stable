'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { Room } from '@/types';
import {
  HeartIcon,
  XMarkIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  UsersIcon,
  HomeIcon,
  MapPinIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
  BoltIcon,
  PhotoIcon,
} from '@heroicons/react/24/outline';
import { HeartIcon as HeartSolid } from '@heroicons/react/24/solid';

interface RoomDetailProps {
  room: Room;
}

const getLocationInfo = (roomId: string) => {
  if (roomId.includes('doi-can')) return { location: 'Đội Cấn', description: 'Trung tâm Hà Nội' };
  if (roomId.includes('thinh-hao')) return { location: 'Thịnh Hào', description: 'Vị trí đắc địa' };
  return { location: 'Hà Nội', description: 'Central location' };
};

const RoomDetail: React.FC<RoomDetailProps> = ({ room }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isGalleryOpen, setIsGalleryOpen] = useState(false);
  const [isLiked, setIsLiked] = useState(false);

  const locationInfo = getLocationInfo(room.id);

  const nextImage = () => setCurrentImageIndex((prev) => (prev + 1) % room.images.length);
  const prevImage = () => setCurrentImageIndex((prev) => (prev - 1 + room.images.length) % room.images.length);

  const openFacebookBooking = () => {
    window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank');
  };

  return (
    <div className="min-h-screen bg-primary-50">
      {/* Fullscreen Gallery Modal */}
      <AnimatePresence>
        {isGalleryOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/92 z-50 flex items-center justify-center"
            onClick={() => setIsGalleryOpen(false)}
          >
            <button
              onClick={() => setIsGalleryOpen(false)}
              className="absolute top-4 right-4 text-white/70 hover:text-white z-10 p-2 bg-white/10 rounded-xl"
            >
              <XMarkIcon className="h-6 w-6" />
            </button>

            <div className="relative w-full h-full flex items-center justify-center p-8">
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
                    className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-xl text-white transition-all"
                  >
                    <ChevronLeftIcon className="h-5 w-5" />
                  </button>
                  <button
                    onClick={(e) => { e.stopPropagation(); nextImage(); }}
                    className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/20 p-3 rounded-xl text-white transition-all"
                  >
                    <ChevronRightIcon className="h-5 w-5" />
                  </button>
                </>
              )}

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2">
                {room.images.map((_, index) => (
                  <button
                    key={index}
                    onClick={(e) => { e.stopPropagation(); setCurrentImageIndex(index); }}
                    className={`w-2 h-2 rounded-full transition-all ${
                      index === currentImageIndex ? 'bg-white' : 'bg-white/35'
                    }`}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Back */}
        <motion.div
          initial={{ opacity: 0, y: -16 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-6"
        >
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-primary-600 hover:text-primary-900 transition-colors text-sm font-medium"
          >
            <ChevronLeftIcon className="h-4 w-4" />
            Về trang chủ
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55 }}
          >
            <div
              className="relative h-96 rounded-2xl overflow-hidden cursor-pointer group"
              onClick={() => setIsGalleryOpen(true)}
            >
              <Image
                src={room.images[currentImageIndex]}
                alt={room.name}
                fill
                className="object-cover group-hover:scale-[1.03] transition-transform duration-400"
                priority
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
                <div className="bg-white/20 backdrop-blur-sm px-4 py-2 rounded-xl text-white opacity-0 group-hover:opacity-100 transition-all flex items-center gap-2">
                  <PhotoIcon className="h-4 w-4" />
                  <span className="text-sm font-medium">Xem tất cả ảnh</span>
                </div>
              </div>
            </div>

            {room.images.length > 1 && (
              <div className="flex gap-2.5 mt-3 overflow-x-auto pb-1 scrollbar-thin">
                {room.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`relative flex-shrink-0 h-16 rounded-xl overflow-hidden transition-all ${
                      index === currentImageIndex
                        ? 'ring-2 ring-accent-500 scale-105'
                        : 'opacity-55 hover:opacity-80'
                    }`}
                    style={{ width: '4.5rem' }}
                  >
                    <Image
                      src={image}
                      alt={`${room.name} ${index + 1}`}
                      fill
                      className="object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </motion.div>

          {/* Room Info */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.55, delay: 0.1 }}
            className="space-y-6"
          >
            {/* Header */}
            <div>
              <div className="flex items-start justify-between mb-2">
                <div className="flex items-center gap-2 text-primary-500 text-sm">
                  <MapPinIcon className="h-4 w-4 text-accent-600" />
                  <span>{locationInfo.location}</span>
                  <span className="text-primary-300">·</span>
                  <span>{locationInfo.description}</span>
                </div>
                <button
                  onClick={() => setIsLiked(!isLiked)}
                  className="p-1.5 rounded-xl hover:bg-primary-100 transition-colors"
                >
                  {isLiked
                    ? <HeartSolid className="h-5 w-5 text-red-500" />
                    : <HeartIcon className="h-5 w-5 text-primary-400" />
                  }
                </button>
              </div>

              <h1 className="text-3xl md:text-4xl font-bold gradient-text mb-4">
                {room.name}
              </h1>

              <div className="flex items-center gap-4 text-sm text-primary-500">
                <div className="flex items-center gap-1.5">
                  <UsersIcon className="h-4 w-4" />
                  <span>{room.maxGuests} khách</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <HomeIcon className="h-4 w-4" />
                  <span>{room.size}m²</span>
                </div>
                <span>{room.bedType}</span>
              </div>
            </div>

            {/* Contact Card */}
            <div className="bg-primary-900 p-5 rounded-2xl text-white">
              <p className="text-sm font-semibold mb-3 text-white/80">Liên hệ để đặt phòng</p>
              <div className="flex items-center gap-2 flex-wrap">
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg text-sm">
                  <PhoneIcon className="h-3.5 w-3.5 text-accent-400" />
                  Gọi ngay
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg text-sm">
                  <ChatBubbleLeftIcon className="h-3.5 w-3.5 text-accent-400" />
                  Chat Facebook
                </span>
                <span className="inline-flex items-center gap-1.5 bg-white/10 border border-white/15 px-3 py-1.5 rounded-lg text-sm">
                  <BoltIcon className="h-3.5 w-3.5 text-accent-400" />
                  Phản hồi nhanh
                </span>
              </div>
            </div>

            {/* Description */}
            <div>
              <h3 className="text-base font-semibold text-primary-900 mb-2">Về phòng này</h3>
              <p className="text-primary-500 leading-relaxed text-sm">
                {room.description}
              </p>
            </div>

            {/* Features */}
            <div>
              <h3 className="text-base font-semibold text-primary-900 mb-3">Tiện nghi & Dịch vụ</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {room.features.map((feature, index) => (
                  <div
                    key={index}
                    className="flex items-center gap-2.5 p-3 bg-white rounded-xl border border-primary-100 text-sm text-primary-700"
                  >
                    <span className="text-base leading-none">{feature.split(' ')[0]}</span>
                    <span>{feature.substring(feature.indexOf(' ') + 1)}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Booking */}
            <div className="sticky bottom-4 bg-white p-5 rounded-2xl shadow-genz border border-primary-100">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={openFacebookBooking}
                className="w-full bg-primary-900 hover:bg-primary-800 text-white py-3.5 rounded-xl font-semibold text-base transition-all shadow-md hover:shadow-lg"
              >
                Chat Facebook để đặt phòng
              </motion.button>
              <p className="text-center text-xs text-primary-400 mt-3">
                Phản hồi nhanh trong 5 phút · Miễn phí hủy phòng
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default RoomDetail;
