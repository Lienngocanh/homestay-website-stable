// src/data/testimonials.ts
import { Testimonial } from '@/types';

export const testimonials: Testimonial[] = [
  {
    id: "1",
    name: "Minh Anh",
    rating: 5,
    comment: "Phòng rất đẹp và sạch sẽ! Máy chiếu xem Netflix rất chill. Tự check-in rất tiện lợi, không cần chờ đợi. Gần sân bay nên rất thuận tiện cho chuyến công tác.",
    room: "Deluxe Cinema",
    date: new Date('2024-01-15'),
    platform: "booking"
  },
  {
    id: "2",
    name: "Thảo Nguyên",
    rating: 5,
    comment: "Homestay rất cute và đầy đủ tiện nghi. Bếp nấu ăn rất ok, có thể tự nấu những món mình thích. Host rất nhiệt tình hỗ trợ. Sẽ quay lại lần sau!",
    room: "Studio Netflix",
    date: new Date('2024-01-10'),
    platform: "google"
  },
  {
    id: "3",
    name: "Đức Minh",
    rating: 4,
    comment: "Phòng sạch sẽ, tiện nghi đầy đủ. Wifi rất mạnh, phù hợp làm việc remote. Vị trí thuận tiện, gần nhiều quán ăn ngon. Giá cả hợp lý.",
    room: "Chillax Studio",
    date: new Date('2024-01-08'),
    platform: "facebook"
  },
  {
    id: "4",
    name: "Lan Hương",
    rating: 5,
    comment: "Lần đầu ở homestay tự check-in mà cảm thấy an tâm và tiện lợi thế này. Phòng như trong hình, thậm chí còn đẹp hơn. Máy giặt sấy rất tiện.",
    room: "Deluxe Cinema",
    date: new Date('2024-01-05'),
    platform: "booking"
  }
];