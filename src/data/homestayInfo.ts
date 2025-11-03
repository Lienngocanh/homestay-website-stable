// src/data/homestayInfo.ts
import { HomeStayInfo, Service } from '@/types';

export const homestayInfo: HomeStayInfo = {
  name: "Lya Home",
  tagline: "A Little homestay in Ha Noi!",
  description: "Homestay tự check-in ở Hà Nội với 4 phòng tại 2 cơ sở: Đội Cấn, Thịnh Hào. Phong cách Gen Z, aesthetic, perfect cho staycation!",
  address: "2 cơ sở: Đội Cấn, Thịnh Hào - Hà Nội",
  contact: {
    phone: "0367160515 - 0812721111",
    email: "lyahome2024@gmail.com",
    zalo: "0367160515",
    facebook: "https://www.facebook.com/profile.php?id=61556656874631"
  },
  // checkInTime: "Tự check-in 24/7",
  // checkOutTime: "12:00 PM",
  policies: [
    "Không hút thuốc trong phòng",
    "Không tổ chức tiệc ồn ào sau 22h",
    "Giữ gìn vệ sinh chung", 
    "Trả phòng đúng giờ",
    "Tôn trọng không gian chung"
  ]
};

export const services: Service[] = [
  {
    id: "checkin",
    name: "Tự check-in 24/7",
    description: "Smart lock - nhận code qua Zalo/Page, checkin - out tự động không qua lễ tân",
    icon: "🔐",
    isFree: true
  },
  {
    id: "netflix",
    name: "Netflix + Chill",
    description: "Tài khoản Netflix premium, máy chiếu, sound system đỉnh - perfect cho movie night",
    icon: "🎬",
    isFree: true
  },
  {
    id: "coffee",
    name: "Snacks & Drinks",
    description: "Nước, snacks miễn phí - fuel cho những ngày chill",
    icon: "☕",
    isFree: true
  },
  {
    id: "workspace",
    name: "Work From Homestay",
    description: "WiFi 100Mbps, workspace ergonomic - perfect cho digital nomads",
    icon: "💻",
    isFree: true
  },
  {
    id: "laundry",
    name: "Giặt sấy",
    description: "Giặt sấy ngay tại home",
    icon: "👕",
    isFree: true
  },
  // {
  //   id: "motorbike",
  //   name: "Thuê xe máy",
  //   description: "Honda Lead, Honda Air Blade - explore Hà Nội như local",
  //   icon: "🏍️",
  //   price: 150000,
  //   isFree: false
  // }
];