'use client';

import { notFound } from 'next/navigation';
import { rooms } from '@/data/rooms';
import Header from '@/components/common/Header/header';
import RoomDetail from '@/components/rooms/RoomDetail/RoomDetail';

export default function RoomDetailPage({ params }: { params: { slug: string } }) {
  const room = rooms.find(r => r.slug === params.slug);

  if (!room) {
    notFound();
  }

  return (
    <>
      <Header />
      <main className="pt-20 min-h-screen bg-gray-50">
        <RoomDetail room={room} />
      </main>
    </>
  );
}