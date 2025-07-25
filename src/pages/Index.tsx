import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import FeaturedSlider from '@/components/FeaturedSlider';
import AppListing from '@/components/AppListing';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <Hero />
        <FeaturedSlider />
        <AppListing />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
