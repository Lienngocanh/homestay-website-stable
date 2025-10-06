import Header from '@/components/common/Header/header';
import Footer from '@/components/common/Footer/Footer';
import Hero from '@/components/home/Hero/Hero';
import WhyChooseUs from '@/components/home/WhyChooseUs/WhyChooseUs';
import FeaturedRooms from '@/components/home/FeaturedRooms/FeaturedRooms';
import Services from '@/components/home/Services/Services';

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <WhyChooseUs />
        <FeaturedRooms />
        <Services />
      </main>
      <Footer />
    </>
  );
}