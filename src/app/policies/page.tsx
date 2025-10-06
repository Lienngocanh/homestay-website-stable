'use client';

import Header from '@/components/common/Header/header';
import Footer from '@/components/common/Footer/Footer';
import React from 'react';
import { motion } from 'framer-motion';
import { 
  ClockIcon, 
  CurrencyDollarIcon, 
  ExclamationTriangleIcon,
  ShieldCheckIcon,
  HomeIcon,
  UserGroupIcon
} from '@heroicons/react/24/outline';

const PoliciesPage: React.FC = () => {
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
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <>
    <Header />
    <main className="pt-0"></main>
     <section className="py-20 bg-gradient-charcoal text-white ">
      {/* Header */}
      <motion.section 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-gradient-to-br from-genz-navy via-genz-darkTeal to-genz-sage text-white py-16"
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 text-white">
            Chính sách & Nội quy
          </h1>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Để đảm bảo trải nghiệm tốt nhất cho tất cả khách hàng, 
            vui lòng đọc kỹ các quy định dưới đây
          </p>
        </div>
      </motion.section>

      {/* Content */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
      >
        {/* Cancellation Policy */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <CurrencyDollarIcon className="h-8 w-8 text-red-500" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6">Chính sách hoàn hủy</h2>
            </div>
            
            <div className="space-y-6 text-gray-700">
              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">CHÍNH SÁCH ĐỔI PHÒNG, ĐỔI NGÀY NHẬN TRẢ PHÒNG</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Trong trường hợp khách hàng muốn đổi ngày nhận, trả phòng, giờ nhận và trả hoặc đổi căn hộ thì cần phải được sự đồng ý của Lya để sắp xếp.</li>
                  <li>Áp dụng đổi phòng/ngày cho các yêu cầu đổi vào trước giờ checkin</li>
                  <li>Chúng mình sẽ điều chỉnh giá đặt phòng theo từng trường hợp và tùy thuộc vào thời điểm yêu cầu đổi phòng.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">CHÍNH SÁCH HỦY PHÒNG</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Trong trường hợp khách hàng đặt phòng trước 5 ngày so với ngày nhận phòng, được đổi, hủy và hoàn tiền 100% số tiền thanh toán (đối với booking lớn hơn 3 đêm được 50% hoàn)</li>
                  <li>Trường hợp khách đặt và hủy sát giờ, Lya xin phép không hoàn tiền</li>
                  <li>Trường hợp khách hàng đặt phòng trước 5 ngày nhưng muốn hủy trong vòng 5 ngày so với ngày check-in, chúng mình sẽ ghi nhận và giữ phòng 30 ngày và phụ phí đổi lịch 30% tổng bill</li>
                  <li>Trong trường hợp không check-in sau thời gian trên (hoặc không thông báo trước), Lyahome không có trách nhiệm hoàn tiền.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">CHÍNH SÁCH ĐẢM BẢO HOÀN TIỀN</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Chính sách hoàn tiền chỉ áp dụng đối với những phản hồi được xác thực là phát sinh từ lỗi hệ thống hoặc dịch vụ của Lya</li>
                  <li>Không áp dụng hoàn tiền cho các trường hợp cá nhân như không đúng nhu cầu, không thích nghỉ hoặc ký vọng sai lệch.</li>
                  <li>Sau thời gian check in 30 phút nếu muốn hoàn hủy phòng lý do khách quan vui lòng báo với admin để được hoàn/hủy/ hỗ trợ đổi phòng nếu thỏa đáng. Quá 30 phút <strong>không hoàn hủy</strong>.</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-bold text-gray-900 mb-4 uppercase">THỜI GIAN HOÀN TIỀN</h3>
                <ul className="space-y-2 list-disc list-inside">
                  <li>Hoàn tiền theo hình thức thanh toán ban đầu.</li>
                  <li>Chúng mình không hoàn tiền bằng tiền mặt.</li>
                </ul>
                <div className="mt-4">
                  <p className="font-bold">Lưu ý:</p>
                  <ul className="space-y-1 list-disc list-inside mt-2">
                    <li>Chính sách có thể thay đổi, điều chỉnh theo từng thời điểm.</li>
                    <li>Không áp dụng trong các trường hợp bất khả kháng (thiên tai, chiến tranh, lệnh cấm...).</li>
                    <li>Chính sách không áp dụng cho giá khuyến mãi</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* House Rules */}
        <motion.section variants={itemVariants} className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <HomeIcon className="h-8 w-8 text-genz-darkTeal" />
              <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 uppercase text-center">QUY ĐỊNH LƯU TRÚ</h2>
            </div>
            
            <div className="text-gray-700">
              <p className="text-lg font-semibold mb-6">Quý khách thân mến,</p>
              
              <ol className="space-y-3 list-decimal list-inside text-base leading-relaxed">
                <li>Quý khách chỉ được ở đúng số người đăng ký. Chỉ cho khách thuê cấp đôi từ 16 tuổi.</li>
                <li>Quý khách có thể lấy thêm nước uống từ bình nước lọc nước đặt ở bên ngoài</li>
                <li>Không có dịch vụ dọn phòng hàng ngày, vui lòng báo Admin/Hotline khi quý khách muốn thay khăn, thêm đồ tiêu hao.</li>
                <li>Quý khách được nấu ăn nếu căn hộ có bếp và vui lòng không nấu đồ nướng trong phòng.</li>
                <li>Vui lòng dọn rửa đồ dùng bếp và vứt đồ ăn đã vào trong túi nilon.</li>
                <li>Không đổ thức ăn vào chậu rửa. Nếu bị tắc ống sẽ bị phạt 1.000.000</li>
                <li>Không hút thuốc trong phòng. Không dẫn pet vào phòng.</li>
                <li>Không mở nhạc quá to, ồn ào từ 23h - 7h và Cấm dùng bóng cười, chất kích thích.</li>
                <li>Không di chuyển đồ đạc, nội thất. Nếu đồ dùng bị hỏng, mất mát, bán cho chủ quán của khách hàng thì phải bồi thường/trả phí sửa chữa.</li>
                <li>Không tự ý reset cục phát wifi. Nếu internet có vấn đề thì báo cho LyaHome để được hỗ trợ.</li>
                <li>Vui lòng thông báo khi quý khách Nhận phòng/Trả phòng. Sau giờ check-out theo quy định sẽ tự động tính phí thêm giờ. Chia trả lại chia khi check-out.</li>
                <li>Vui lòng tắt hết thiết bị điện khi quý khách rời phòng. Nếu quý khách phát hiện có hiện tượng chập cháy điện xin báo Ngay cho Lyahome và bình tĩnh làm theo hướng dẫn.</li>
              </ol>
              
              <div className="bg-blue-50 border border-blue-200 rounded-lg p-6 text-center mt-8">
                <div className="text-3xl mb-3">🏠</div>
                <p className="font-bold text-lg text-gray-900">Hotline: 0367160515</p>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Contact */}
        <motion.section variants={itemVariants}>
          <div className="bg-gradient-to-r from-genz-gold to-genz-cream rounded-2xl p-8 text-center">
            <UserGroupIcon className="h-12 w-12 text-genz-navy mx-auto mb-4" />
            <h2 className="text-2xl font-bold text-genz-navy mb-4">
              Cần hỗ trợ thêm?
            </h2>
            <p className="text-genz-navy/80 mb-6">
              Đội ngũ Lya Homestay luôn sẵn sàng hỗ trợ bạn 24/7
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="tel:0367160515"
                className="bg-white text-genz-navy px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                📞 Gọi ngay: 0367160515
              </a>
              <a
                href="https://www.facebook.com/profile.php?id=61556656874631"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-genz-navy text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
              >
                💬 Chat Facebook
              </a>
            </div>
          </div>
        </motion.section>
      </motion.div>
    </section>
      <Footer />
    </>
  );
};

export default PoliciesPage;