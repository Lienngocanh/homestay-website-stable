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
  StarIcon,
} from '@heroicons/react/24/outline';

export default function AboutPage() {
  const features = [
    {
      icon: <ClockIcon className="h-8 w-8" />,
      title: "Tự check-in 24/7",
      description: "Smart lock technology - nhận code và tự do check-in bất cứ lúc nào"
    },
    {
      icon: <HomeIcon className="h-8 w-8" />,
      title: "7 phòng độc đáo",
      description: "Mỗi phòng có thiết kế riêng biệt tại 3 cơ sở khác nhau"
    },
    {
      icon: <UsersIcon className="h-8 w-8" />,
      title: "Perfect cho Gen Z",
      description: "Aesthetic, Instagram-worthy, với đầy đủ tiện nghi hiện đại"
    },
    {
      icon: <HeartIcon className="h-8 w-8" />,
      title: "Made with Love",
      description: "Được quản lý và vận hành bởi team trẻ năng động"
    }
  ];

  const locations = [
    {
      name: "Đội Cấn",
      description: "2 phòng: Hard Room & Soft Room",
      emoji: "🏙️"
    },
    {
      name: "Kim Mã", 
      description: "3 phòng: Lya02, Lya03, Lya04",
      emoji: "✨"
    },
    {
      name: "Thịnh Hào",
      description: "2 phòng: Ban Công & Tiny",
      emoji: "🌟"
    }
  ];

  return (
    <>
      <Header />
      <main className="pt-0">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-charcoal text-white ">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8 ">
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-4xl md:text-6xl font-bold mb-6 text-white "
            >
              🌿 Về LyaHome
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl md:text-2xl mb-8 opacity-90"
            >
              Your vibe, your space, your story ✨
            </motion.p>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-6">
                  Câu chuyện của chúng mình
                </h2>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                 Ra đời năm 2024, LyaHome là điểm dừng chân nhỏ xinh dành cho những ai muốn tìm lại sự bình yên giữa lòng Hà Nội. Hiện tại, LyaHome có 7 phòng được chăm chút tỉ mỉ tại 3 cơ sở khác nhau: Đội Cấn – Kim Mã – Thịnh Hào, mỗi nơi mang một nét riêng nhưng đều giữ trọn tinh thần “nhà là nơi để chill”. Dù bạn ghé để nghỉ ngơi, làm việc hay đơn giản là tìm cảm hứng mới, LyaHome luôn sẵn sàng chào đón bạn với không gian ấm cúng và vibe trẻ trung đặc trưng. 🌸
                </p>

                <p className="text-gray-600 mb-6 leading-relaxed">
                  Từ ý tưởng đầu tiên đến khi hoàn thiện 7 phòng tại 3 cơ sở, 
                  chúng mình đã đầu tư rất nhiều tâm huyết để tạo ra những trải nghiệm 
                  khó quên cho mọi khách hàng.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="aspect-[4/3] rounded-3xl overflow-hidden">
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
        <section className="py-20 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-primary-800 mb-4">
                Tại sao chọn Lya Homestay?
              </h2>
              <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                Chúng mình tự hào về những điều làm nên sự khác biệt
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-primary-100 rounded-2xl flex items-center justify-center mx-auto mb-4 text-primary-600 group-hover:bg-primary-600 group-hover:text-white transition-all duration-300">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-primary-800 mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">
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
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-3xl md:text-4xl font-bold mb-6 text-white"
            >
              Sẵn sàng trải nghiệm?
            </motion.h2>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-xl mb-8 opacity-90"
            >
              Đặt phòng ngay để khám phá không gian sống độc đáo của Lya Homestay
            </motion.p>

            <motion.button
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => window.open('https://www.facebook.com/profile.php?id=61556656874631', '_blank')}
              className="bg-accent-500 hover:bg-accent-600 text-white px-8 py-4 rounded-2xl text-lg font-semibold transition-all duration-300 shadow-lg"
            >
              💬 Chat Facebook để đặt phòng
            </motion.button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}