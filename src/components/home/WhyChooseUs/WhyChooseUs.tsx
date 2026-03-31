'use client';

import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  WifiIcon,
  FilmIcon,
  HomeIcon,
  GlobeAltIcon,
  SparklesIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ClockIcon,
    title: 'Tự check-in 24/7',
    description: 'Nhận mã — mở cửa — vào chill, không cần gặp ai',
  },
  {
    icon: FilmIcon,
    title: 'Máy chiếu + Netflix',
    description: 'Biến phòng ngủ thành rạp chiếu phim riêng',
  },
  {
    icon: HomeIcon,
    title: 'Bếp nấu ăn đầy đủ',
    description: 'Tự do nấu nướng thoải mái như ở nhà',
  },
  {
    icon: SparklesIcon,
    title: 'Máy giặt & sấy',
    description: 'Ở bao lâu cũng không lo giặt giũ',
  },
  {
    icon: WifiIcon,
    title: 'Nội thất thông minh',
    description: 'WiFi mạnh, điều hòa, nóng lạnh đầy đủ',
  },
  {
    icon: GlobeAltIcon,
    title: 'Vị trí đắc địa',
    description: 'Lăng Bác, Hồ Tây, Văn Miếu, Công viên Thống Nhất...',
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const WhyChooseUs: React.FC = () => {
  return (
    <section className="py-20 bg-primary-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-14"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-3">
            Cứ đi đi, hãy để Lya lo chỗ nghỉ
          </h2>
          <p className="text-primary-500 max-w-xl mx-auto">
            Không gian sống đủ tiện nghi, đủ chill, đủ để bạn thư giãn
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {features.map((feature, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="bg-white p-7 rounded-2xl border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 text-center group cursor-default"
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:bg-accent-100 group-hover:text-accent-700 transition-all duration-300">
                <feature.icon className="h-6 w-6" />
              </div>
              <h3 className="text-base font-semibold text-primary-900 mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-primary-500 leading-relaxed">
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
