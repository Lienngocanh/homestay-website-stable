'use client';

import Header from '@/components/common/Header/header';
import Footer from '@/components/common/Footer/Footer';
import React from 'react';
import { motion } from 'framer-motion';
import {
  ClockIcon,
  CurrencyDollarIcon,
  ShieldCheckIcon,
  HomeIcon,
  UserGroupIcon,
  PhoneIcon,
  ChatBubbleLeftIcon,
} from '@heroicons/react/24/outline';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const PoliciesPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="py-24 bg-gradient-charcoal text-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-4xl md:text-5xl font-bold mb-5 text-white"
            >
              Chính sách & Nội quy
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
              className="text-lg text-white/65 max-w-2xl mx-auto"
            >
              Để đảm bảo trải nghiệm tốt nhất cho tất cả khách hàng, vui lòng đọc kỹ các quy định dưới đây
            </motion.p>
          </div>
        </section>

        {/* Content */}
        <section className="bg-primary-50 py-16">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8"
          >
            {/* Cancellation Policy */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl border border-primary-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <CurrencyDollarIcon className="h-5 w-5 text-primary-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-900">Chính sách hoàn hủy</h2>
                </div>

                <div className="space-y-6 text-primary-600">
                  <div>
                    <h3 className="text-sm font-bold text-primary-900 mb-3 uppercase tracking-wide">
                      Đổi phòng, đổi ngày nhận/trả phòng
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside">
                      <li>Cần được sự đồng ý của Lya để sắp xếp trước khi thay đổi.</li>
                      <li>Áp dụng đổi phòng/ngày cho các yêu cầu trước giờ check-in.</li>
                      <li>Giá sẽ được điều chỉnh theo từng trường hợp và thời điểm yêu cầu.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-primary-900 mb-3 uppercase tracking-wide">
                      Hủy phòng
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside">
                      <li>Đặt trước 5 ngày: hoàn 100% (booking trên 3 đêm hoàn 50%).</li>
                      <li>Hủy sát giờ: không hoàn tiền.</li>
                      <li>Đặt trước 5 ngày nhưng hủy trong vòng 5 ngày trước check-in: giữ phòng 30 ngày, phụ phí đổi lịch 30% tổng bill.</li>
                      <li>Không check-in sau thời gian quy định mà không thông báo: không hoàn tiền.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-primary-900 mb-3 uppercase tracking-wide">
                      Đảm bảo hoàn tiền
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside">
                      <li>Chỉ áp dụng cho phản hồi xác thực từ lỗi hệ thống hoặc dịch vụ của Lya.</li>
                      <li>Không áp dụng cho lý do cá nhân (không đúng nhu cầu, kỳ vọng sai lệch...).</li>
                      <li>Sau check-in 30 phút: vui lòng báo admin để được hỗ trợ. Quá 30 phút — không hoàn hủy.</li>
                    </ul>
                  </div>

                  <div>
                    <h3 className="text-sm font-bold text-primary-900 mb-3 uppercase tracking-wide">
                      Thời gian hoàn tiền
                    </h3>
                    <ul className="space-y-2 text-sm leading-relaxed list-disc list-inside">
                      <li>Hoàn theo hình thức thanh toán ban đầu, không hoàn tiền mặt.</li>
                      <li>Chính sách có thể thay đổi theo từng thời điểm.</li>
                      <li>Không áp dụng trong trường hợp bất khả kháng hoặc giá khuyến mãi.</li>
                    </ul>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* House Rules */}
            <motion.div variants={itemVariants}>
              <div className="bg-white rounded-2xl border border-primary-100 p-8">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                    <HomeIcon className="h-5 w-5 text-primary-700" />
                  </div>
                  <h2 className="text-2xl font-bold text-primary-900">Quy định lưu trú</h2>
                </div>

                <div className="text-primary-600">
                  <p className="text-sm font-semibold mb-5 text-primary-800">Quý khách thân mến,</p>
                  <ol className="space-y-3 list-decimal list-inside text-sm leading-relaxed">
                    <li>Quý khách chỉ được ở đúng số người đăng ký. Chỉ cho khách thuê cấp đôi từ 16 tuổi.</li>
                    <li>Có thể lấy thêm nước uống từ bình nước lọc đặt bên ngoài.</li>
                    <li>Không có dịch vụ dọn phòng hàng ngày — vui lòng báo Admin/Hotline khi cần thay khăn, thêm đồ tiêu hao.</li>
                    <li>Được nấu ăn nếu căn hộ có bếp. Vui lòng không nấu đồ nướng trong phòng.</li>
                    <li>Dọn rửa đồ dùng bếp và bỏ đồ ăn thừa vào túi nilon.</li>
                    <li>Không đổ thức ăn vào chậu rửa. Nếu tắc ống sẽ bị phạt 1.000.000đ.</li>
                    <li>Không hút thuốc trong phòng. Không dẫn thú cưng vào phòng.</li>
                    <li>Không mở nhạc quá to từ 23h–7h. Cấm dùng bóng cười và chất kích thích.</li>
                    <li>Không di chuyển đồ nội thất. Đồ hỏng/mất phải bồi thường hoặc trả phí sửa chữa.</li>
                    <li>Không tự ý reset router wifi — vui lòng báo LyaHome nếu có sự cố.</li>
                    <li>Thông báo khi nhận phòng/trả phòng. Sau giờ check-out sẽ tính phí thêm giờ.</li>
                    <li>Tắt hết thiết bị điện khi rời phòng. Báo ngay nếu phát hiện chập điện.</li>
                  </ol>

                  <div className="mt-8 p-5 bg-primary-50 rounded-xl border border-primary-100 text-center">
                    <p className="text-sm font-semibold text-primary-900">Hotline hỗ trợ 24/7</p>
                    <p className="text-lg font-bold text-primary-900 mt-1">0367 160 515</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact */}
            <motion.div variants={itemVariants}>
              <div className="bg-primary-900 rounded-2xl p-8 text-center text-white">
                <UserGroupIcon className="h-10 w-10 text-white/60 mx-auto mb-4" />
                <h2 className="text-xl font-bold mb-2">Cần hỗ trợ thêm?</h2>
                <p className="text-white/60 text-sm mb-7">
                  Đội ngũ Lya Homestay luôn sẵn sàng hỗ trợ bạn 24/7
                </p>
                <div className="flex flex-col sm:flex-row gap-3 justify-center">
                  <a
                    href="tel:0367160515"
                    className="inline-flex items-center justify-center gap-2 bg-white text-primary-900 px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-primary-50 transition-all"
                  >
                    <PhoneIcon className="h-4 w-4" />
                    Gọi ngay: 0367 160 515
                  </a>
                  <a
                    href="https://www.facebook.com/profile.php?id=61556656874631"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 bg-white/10 border border-white/20 text-white px-6 py-2.5 rounded-xl font-semibold text-sm hover:bg-white/20 transition-all"
                  >
                    <ChatBubbleLeftIcon className="h-4 w-4" />
                    Chat Facebook
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default PoliciesPage;
