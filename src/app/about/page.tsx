'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Header from '@/components/common/Header/header';
import Footer from '@/components/common/Footer/Footer';
import Image from 'next/image';
import {
  HeartIcon,
  HomeIcon,
  ClockIcon,
  UsersIcon,
} from '@heroicons/react/24/outline';

const features = [
  {
    icon: ClockIcon,
    title: 'Tự check-in 24/7',
    description: 'Smart lock technology — nhận code và tự do check-in bất cứ lúc nào',
  },
  {
    icon: HomeIcon,
    title: '7 phòng độc đáo',
    description: 'Mỗi phòng có thiết kế riêng biệt tại 2 cơ sở khác nhau',
  },
  {
    icon: UsersIcon,
    title: 'Không gian trẻ trung',
    description: 'Aesthetic, Instagram-worthy, với đầy đủ tiện nghi hiện đại',
  },
  {
    icon: HeartIcon,
    title: 'Made with Love',
    description: 'Được quản lý và vận hành bởi team trẻ nhiệt huyết',
  },
];

export default function AboutPage() {
  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 bg-gradient-charcoal text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-6xl font-bold mb-5 text-white"
            >
              Về LyaHome
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto"
            >
              Your vibe, your space, your story
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
              <motion.div
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-6">
                  Câu chuyện của chúng mình
                </h2>
                <p className="text-primary-500 mb-5 leading-relaxed">
                  Ra đời năm 2024, LyaHome là điểm dừng chân nhỏ xinh dành cho những ai muốn tìm lại sự bình yên giữa lòng Hà Nội. Hiện tại, LyaHome có 7 phòng được chăm chút tỉ mỉ tại 2 cơ sở: Đội Cấn và Thịnh Hào — mỗi nơi mang một nét riêng nhưng đều giữ trọn tinh thần &ldquo;nhà là nơi để chill&rdquo;.
                </p>
                <p className="text-primary-500 leading-relaxed">
                  Từ ý tưởng đầu tiên đến khi hoàn thiện, chúng mình đã đầu tư rất nhiều tâm huyết để tạo ra những trải nghiệm khó quên cho mọi khách hàng.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: 0.15 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <Image
                    src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&h=400&fit=crop"
                    alt="About Lya Homestay"
                    fill
                    className="object-cover"
                  />
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Features Section */}
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
                Tại sao chọn Lya Homestay?
              </h2>
              <p className="text-primary-500 max-w-xl mx-auto">
                Những điều làm nên sự khác biệt của Lya
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.08 }}
                  className="text-center group"
                >
                  <div className="w-14 h-14 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:bg-accent-100 group-hover:text-accent-700 transition-all duration-300">
                    <feature.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-base font-semibold text-primary-900 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-sm text-primary-500 leading-relaxed">
                    {feature.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-charcoal text-white">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
            <motion.h2
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-3xl md:text-4xl font-bold mb-5 text-white"
            >
              Sẵn sàng trải nghiệm?
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.15 }}
              className="text-lg mb-8 text-white/65"
            >
              Đặt phòng ngay để khám phá không gian sống độc đáo của Lya Homestay
            </motion.p>
            <motion.button
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, delay: 0.3 }}
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank')}
              className="bg-accent-600 hover:bg-accent-700 text-white px-8 py-3.5 rounded-xl text-base font-semibold transition-all shadow-md hover:shadow-lg"
            >
              Chat Facebook để đặt phòng
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
