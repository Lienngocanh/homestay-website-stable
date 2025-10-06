'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '@/data/rooms';
import { StarIcon } from '@heroicons/react/24/solid';
import { UsersIcon, HomeIcon, EyeIcon } from '@heroicons/react/24/outline';

const FeaturedRooms: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <section id="featured-rooms" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Phòng nổi bật
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Khám phá các phòng được yêu thích nhất với đầy đủ tiện nghi hiện đại
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -5 }}
            >
              <div className="relative h-64">
                <Image
                  src={room.thumbnail}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                
                {/* Discount Badge */}
                {/* {room.originalPrice && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-sm font-semibold">
                    {Math.round((1 - room.price / room.originalPrice) * 100)}% OFF
                  </div>
                )} */}

                {/* Quick View */}
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="bg-white text-gray-900 px-4 py-2 rounded-lg font-semibold opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center hover:bg-gray-50"
                  >
                    <EyeIcon className="h-4 w-4 mr-2" />
                    Xem chi tiết
                  </Link>
                </div>
              </div>
              
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-1">
                      {room.name}
                    </h3>
                  </div>
                  {/* <div className="text-right">
                    <div className="text-2xl font-bold text-primary-600">
                      {formatPrice(room.price)}
                    </div>
                    {room.originalPrice && (
                      <div className="text-sm text-gray-400 line-through">
                        {formatPrice(room.originalPrice)}
                      </div>
                    )}
                    <div className="text-sm text-gray-500">/ đêm</div>
                  </div> */}
                </div>
                
                {/* Description */}
                <p className="text-gray-600 mb-4 line-clamp-2">
                  {room.shortDescription}
                </p>

                {/* Room Info */}
                <div className="flex items-center text-sm text-gray-500 mb-4 space-x-4">
                  <div className="flex items-center">
                    <UsersIcon className="h-4 w-4 mr-1" />
                    {room.maxGuests} khách
                  </div>
                  <div className="flex items-center">
                    <HomeIcon className="h-4 w-4 mr-1" />
                    {room.size}m²
                  </div>
                  <div>{room.bedType}</div>
                </div>

                {/* Amenities */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {room.hasProjector && (
                    <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded-full">
                      🎬 Máy chiếu
                    </span>
                  )}
                  {room.hasNetflix && (
                    <span className="text-xs bg-red-100 text-red-800 px-2 py-1 rounded-full">
                      📺 Netflix
                    </span>
                  )}
                  {room.hasBalcony && (
                    <span className="text-xs bg-green-100 text-green-800 px-2 py-1 rounded-full">
                      🏙️ Ban công
                    </span>
                  )}
                </div>

                {/* Booking Button */}
                <Link
                  href={`/rooms/${room.slug}`}
                  className="block w-full bg-gradient-to-r from-genz-navy to-genz-darkTeal hover:from-genz-darkTeal hover:to-genz-sage text-white text-center py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-[1.02] shadow-lg"
                >
                  ✨ Xem chi tiết & đặt phòng
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <Link
            href="/rooms"
            className="inline-block bg-gray-900 hover:bg-gray-800 text-white px-8 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
          >
            Xem tất cả phòng
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;