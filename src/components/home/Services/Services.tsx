'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { services } from '@/data/homestayInfo';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const Services: React.FC = () => {
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
            Dịch vụ & Tiện ích
          </h2>
          <p className="text-primary-500 max-w-xl mx-auto">
            Đầy đủ tiện nghi để bạn có kỳ nghỉ trọn vẹn
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              variants={itemVariants}
              className="bg-white p-7 rounded-2xl border border-primary-100 hover:border-primary-200 hover:shadow-md transition-all duration-300 group cursor-default"
              whileHover={{ y: -4 }}
            >
              <div className="text-3xl mb-4 group-hover:scale-110 transition-transform duration-300 inline-block">
                {service.icon}
              </div>
              <h3 className="text-base font-semibold text-primary-900 mb-2">
                {service.name}
              </h3>
              <p className="text-sm text-primary-500 mb-4 leading-relaxed">
                {service.description}
              </p>
              <span className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                service.isFree
                  ? 'bg-green-100 text-green-700'
                  : 'bg-accent-100 text-accent-700'
              }`}>
                {service.isFree ? 'Miễn phí' : `${(service.price || 0).toLocaleString('vi-VN')}đ`}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Services;
