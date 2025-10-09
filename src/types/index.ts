// src/types/index.ts
export interface Room {
  id: string;
  name: string;
  slug: string;
  // price: number;
  // originalPrice?: number;
  images: string[];
  thumbnail: string;
  description: string;
  shortDescription: string;
  maxGuests: number;
  size: number;
  bedType: string;
  hasBalcony: boolean;
  hasProjector: boolean;
  hasNetflix: boolean;
  isAvailable: boolean;
  kitchenette?: boolean;
  wifi?: boolean;
  // extraBeds?: number;
  // rating: number;
  // reviewCount: number;
  features: string[];
  location?: string;
}

export interface Service {
  id: string;
  name: string;
  description: string;
  icon: string;
  price?: number;
  isFree: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  avatar?: string;
  rating: number;
  comment: string;
  room: string;
  date: Date;
  platform: 'booking' | 'google' | 'facebook' | 'direct';
}

export interface HomeStayInfo {
  name: string;
  tagline: string;
  description: string;
  address: string;
  contact: {
    phone: string;
    email: string;
    zalo?: string;
    facebook?: string;
  };
  // checkInTime: string;
  // checkOutTime: string;
  policies: string[];
}