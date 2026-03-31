'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { rooms } from '@/data/rooms';
import { UsersIcon, HomeIcon, EyeIcon, FilmIcon, TvIcon, WifiIcon, SunIcon, FireIcon } from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55 } },
};

const FeaturedRooms: React.FC = () => {
  return (
    <section id="featured-rooms" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            Phòng nổi bật
          </h2>
          <p className="text-primary-500 max-w-xl mx-auto">
            Khám phá các phòng được yêu thích nhất với đầy đủ tiện nghi hiện đại
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7"
        >
          {rooms.map((room) => (
            <motion.div
              key={room.id}
              variants={cardVariants}
              className="bg-white rounded-2xl border border-primary-100 hover:border-primary-200 hover:shadow-lg transition-all duration-300 overflow-hidden group"
              whileHover={{ y: -4 }}
            >
              {/* Image */}
              <div className="relative h-56">
                <Image
                  src={room.thumbnail}
                  alt={room.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/35 transition-all duration-300 flex items-center justify-center">
                  <Link
                    href={`/rooms/${room.slug}`}
                    className="bg-white text-primary-900 px-4 py-2 rounded-lg text-sm font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-1.5 hover:bg-primary-50"
                  >
                    <EyeIcon className="h-4 w-4" />
                    Xem chi tiết
                  </Link>
                </div>
              </div>

              <div className="p-5">
                {/* Room name */}
                <h3 className="text-lg font-semibold text-primary-900 mb-2">
                  {room.name}
                </h3>

                {/* Description */}
                <p className="text-primary-500 text-sm mb-4 line-clamp-2 leading-relaxed">
                  {room.shortDescription}
                </p>

                {/* Room Info */}
                <div className="flex items-center text-xs text-primary-400 mb-4 gap-4">
                  <div className="flex items-center gap-1">
                    <UsersIcon className="h-3.5 w-3.5" />
                    <span>{room.maxGuests} khách</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <HomeIcon className="h-3.5 w-3.5" />
                    <span>{room.size}m²</span>
                  </div>
                  <span className="text-primary-400">{room.bedType}</span>
                </div>

                {/* Amenity badges */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {room.hasProjector && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                      <FilmIcon className="h-3 w-3" />
                      Máy chiếu
                    </span>
                  )}
                  {room.hasNetflix && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                      <TvIcon className="h-3 w-3" />
                      Netflix
                    </span>
                  )}
                  {room.hasBalcony && (
                    <span className="inline-flex items-center gap-1 text-xs bg-accent-100 text-accent-700 px-2.5 py-1 rounded-full font-medium">
                      <SunIcon className="h-3 w-3" />
                      Ban công
                    </span>
                  )}
                  {room.wifi && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                      <WifiIcon className="h-3 w-3" />
                      Wifi
                    </span>
                  )}
                  {room.kitchenette && (
                    <span className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-2.5 py-1 rounded-full font-medium">
                      <FireIcon className="h-3 w-3" />
                      Bếp
                    </span>
                  )}
                </div>

                {/* CTA */}
                <Link
                  href={`/rooms/${room.slug}`}
                  className="block w-full bg-primary-900 hover:bg-primary-800 text-white text-center py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 hover:shadow-md"
                >
                  Xem chi tiết & đặt phòng
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-center mt-10"
        >
          <Link
            href="/rooms"
            className="inline-flex items-center gap-2 border border-primary-200 text-primary-700 hover:bg-primary-100 hover:border-primary-300 px-7 py-2.5 rounded-xl text-sm font-semibold transition-all"
          >
            Xem tất cả phòng
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedRooms;
