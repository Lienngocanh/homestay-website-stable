// src/data/rooms.ts
import { Room } from '@/types';

export const rooms: Room[] = [
  // LOCATION: Đội Cấn
  {
    id: "doi-can-hard",
    name: "Hard Room",
    slug: "doi-can-hard",
    // price: 0, // Hidden price
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
    description: "Phòng Hard tại Đội Cấn. Vibe chill, không gian rộng rãi, có cửa sổ to thoáng mát.",
    shortDescription: "Ngay ở trung tâm Đội Cấn ✨",
    maxGuests: 3,
    size: 20,
    bedType: "1 Giường đơn + Sofa ",
    hasBalcony: false,
    hasProjector: false,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.9,
    // reviewCount: 156,
    features: [
      "📍 Đội Cấn - Trung tâm Hà Nội",
      "🏠 20m² - Rộng rãi thoải mái",
      "👥 Tối đa 3 người",
      "🛏️ 1 giường đơn + Sofa",
      "📺 Máy chiếu + Netflix",
      "🍦 Tủ lạnh và ấm siêu tốc",
      "🔐 Tự check-in 24/7",
      "🚗 Gần Lăng Bác, Hồ Tây"
    ]
  },
  {
    id: "doi-can-soft",
    name: "Soft Room", 
    slug: "doi-can-soft",
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    description: "Phòng Soft tại Đội Cấn. Vibe chill, không gian rộng rãi, có cửa sổ to thoáng mát.",
    shortDescription: "Ngay ở trung tâm Đội Cấn ✨",
    maxGuests: 3,
    size: 20,
    bedType: "1 Giường đơn + Sofa ",
    hasBalcony: false,
    hasProjector: false,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.9,
    // reviewCount: 156,
    features: [
      "📍 Đội Cấn - Trung tâm Hà Nội",
      "🏠 20m² - Rộng rãi thoải mái",
      "👥 Tối đa 3 người",
      "🛏️ 1 giường đơn + Sofa",
      "📺 Máy chiếu + Netflix",
      "🍦 Tủ lạnh và ấm siêu tốc",
      "🔐 Tự check-in 24/7",
      "🚗 Gần Lăng Bác, Hồ Tây"
    ]
  },

  // LOCATION: Kim Mã
  {
    id: "kim-ma-lya02",
    name: "Lya02",
    slug: "kim-ma-lya02", 
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=500&h=300&fit=crop",
    description: "Lya02 Kim Mã - luxury studio với máy chiếu 4K, sound system đỉnh. Thiết kế tối giản, phù hợp cho date night hoặc staycation chill.",
    shortDescription: " Thiết kế tone màu tối, phù hợp cho một buổi date lý tưởng 💖",
    maxGuests: 4,
    size: 30,
    bedType: "Giường Queen size + Sofa",
    hasBalcony: false,
    hasProjector: true,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.9,
    // reviewCount: 198,
    features: [
      "📍 Kim Mã - Luxury location",
      "🏠 30m² - Premium space",
      "💑 Perfect cho couple",
      "🛏️ Giường Queen size êm ái",
      "🎬 Máy chiếu + sound system",
      "🏙️ Cửa sổ siêu to thoáng mát",
      "📺 Netflix free",
      "🔐 Smart lock system"
    ]
  },
  {
    id: "kim-ma-lya03",
    name: "Lya03",
    slug: "kim-ma-lya03",
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    description: "Lya03 Kim Mã - trendy space với decor vintage mix modern. Có bếp với đầy đủ gia vị",
    shortDescription: "Trendy space cho digital nomad 💻",
    maxGuests: 4,
    size: 30,
    bedType: "Giường Queen Size  + Sofa",
    hasBalcony: false,
    hasProjector: false,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.7,
    // reviewCount: 142,
    features: [
      "📍 Kim Mã - Trendy district",
      "🏠 30m² - Smart layout", 
      "👩‍💻 Có bếp riêng",
      "🛏️ Giường Queen size",
      "🎨 Decor vintage mix modern",
      "📺 Máy chiếu + Netflix",
      "📶 WiFi tốc độ cao",
      "🔐 Tự check-in 24/7"
    ]
  },
  {
    id: "kim-ma-lya04", 
    name: "Lya04",
    slug: "kim-ma-lya04",
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&h=300&fit=crop",
    description: "Lya04 Kim Mã -  cho những ai yêu thích sự đơn giản nhưng tinh tế. Không gian thú vị, năng động.",
    shortDescription: "Thú vị và năng động", 
    maxGuests: 4,
    size: 30,
    bedType: "Giường Queen size + Sofa",
    hasBalcony: false,
    hasProjector: false,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.6,
    // reviewCount: 118,
    features: [
      "📍 Kim Mã - Central location",
      "🏠 30m² ",
      "🛏️ Giường thoải mái", 
      "🤍 Decor năng động",
      "📺 Máy chiếu + Netflix",
      "🌿 Không gian zen, thư giãn",
      "🔐 Tự check-in 24/7"
    ]
  },

  // LOCATION: Thịnh Hào
  {
    id: "thinh-hao-ban-cong",
    name: "Ban Công",
    slug: "thinh-hao-ban-cong",
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
    thumbnail: "/images/rooms/bancong/z7086474311344_2c31042fe6128bf537b2ea44f25a77b2.jpg",
    description: "Ban Công Thịnh Hào - signature room với ban công siêu rộng, view chill.",
    shortDescription: "Signature room với ban công siêu rộng 🌇",
    maxGuests: 4,
    size: 33,
    bedType: "Giường Queen + Ghế sofa bed",
    hasBalcony: true,
    hasProjector: true,
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.9,
    // reviewCount: 203,
    features: [
      "📍 Thịnh Hào - Prime location",
      "🏠 33m² + ban công rộng",
      "👨‍👩‍👧 Tối đa 4 người",
      "🛏️ Giường King + sofa bed",
      "🌇 Ban công view đẹp, thoáng mát",
      "🎬 Máy chiếu + sound system",
      "📺 Netflix premium",
      "☕ Bếp riêng",
      "🔐 Smart access system"
    ]
  },
  {
    id: "thinh-hao-tiny",
    name: "Tiny",
    slug: "thinh-hao-tiny",
    // price: 0,
    images: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&h=600&fit=crop",
      "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=800&h=600&fit=crop",
    ],
    thumbnail: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=500&h=300&fit=crop",
    description: "Tiny Thịnh Hào - small but mighty! Thiết kế thông minh tận dụng tối đa không gian. Perfect cho solo travelers hoặc budget-friendly trips.",
    shortDescription: "Small but mighty - perfect cho solo trip 🎒",
    maxGuests: 3,
    size: 20,
    bedType: "Giường Queen + Ghế lười siêu êm",
    hasBalcony: false,
    hasProjector: false, 
    hasNetflix: true,
    isAvailable: true,
    // rating: 4.5,
    // reviewCount: 89,
    features: [
      "📍 Thịnh Hào - Convenient spot",
      "🏠 20m² - Compact & efficient", 
      "💡 Thiết kế thông minh",
      "📺 Máy chiếu + Netflix",
      "☕ Bếp riêng", 
      "💬 Liên hệ để biết giá tốt nhất",
      "🔐 Tự check-in 24/7"
    ]
  }
];