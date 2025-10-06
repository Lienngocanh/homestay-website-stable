'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  WifiIcon,
  FilmIcon,
  HomeIcon,
  GlobeAltIcon,
  SparklesIcon
} from '@heroicons/react/24/outline';

const WhyChooseUs: React.FC = () => {
  const features = [
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Tự check-in 24/7",
      description: "Nhận mã - mở cửa - vào chill, không cần gặp ai"
    },
    {
      icon: <FilmIcon className="h-8 w-8" />,
      title: "Máy chiếu + Netflix FREE",
      description: "Biến phòng ngủ thành rạp chiếu phim riêng"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "Bếp nấu ăn đầy đủ",
      description: "Tự do nấu nướng như ở nhà"
    },
    {
      icon: <SparklesIcon className="h-8 w-8" />,
      title: "Máy giặt & sấy",
      description: "Ở bao lâu cũng không lo giặt giũ"
    },
    {
      icon: <WifiIcon className="h-8 w-8" />,
      title: "Nội thất thông minh",
      description: "Hệ thống wifi mạnh, điều hòa, nóng lạnh..."
    },
    {
      icon: <GlobeAltIcon className="h-8 w-8" />,
      title: "Các địa điểm du lịch",
      description: "Lăng Bác, Hồ Tây, Văn Miếu, Công viên Thống Nhất..."
    }
  ];

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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            ✨ Cứ đi đi, hãy để Lya lo chỗ nghỉ
          </h2>
          {/* <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            
          </p> */}
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow text-center group cursor-pointer"
              whileHover={{ y: -5 }}
            >
              <div className="text-primary-600 mb-4 flex justify-center group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-gray-600">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;