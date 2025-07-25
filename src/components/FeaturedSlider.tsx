import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Star, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const FeaturedSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const featuredApps = [
    {
      id: 'v0-gamini',
      name: 'V0 Gamini',
      description: 'Ultimate gaming experience with ₹51 instant bonus',
      image: '🎮',
      bonus: '₹51',
      rating: 4.8,
      gradient: 'from-[#31511E] to-[#859F3D]'
    },
    {
      id: 'rummy-king',
      name: 'Rummy King',
      description: 'Master the art of rummy with ₹75 welcome bonus',
      image: '👑',
      bonus: '₹75',
      rating: 4.7,
      gradient: 'from-[#859F3D] to-[#31511E]'
    },
    {
      id: 'teen-patti',
      name: 'Teen Patti Master',
      description: 'Play teen patti like a pro with instant rewards',
      image: '🎯',
      bonus: '₹41',
      rating: 4.6,
      gradient: 'from-[#31511E] to-[#859F3D]'
    }
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredApps.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredApps.length) % featuredApps.length);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    if (isAutoPlay) {
      timeoutRef.current = setTimeout(nextSlide, 4000);
    }
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, [currentSlide, isAutoPlay]);

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured</span> This Week
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked gaming apps with the biggest bonuses and best rewards
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Slider */}
          <div
            className="relative h-64 md:h-80 lg:h-96 rounded-3xl overflow-hidden"
            onMouseEnter={() => setIsAutoPlay(false)}
            onMouseLeave={() => setIsAutoPlay(true)}
          >
            {featuredApps.map((app, index) => (
              <motion.div
                key={app.id}
                className={`absolute inset-0 bg-gradient-to-r ${app.gradient}`}
                initial={{ opacity: 0, x: 100 }}
                animate={{
                  opacity: index === currentSlide ? 1 : 0,
                  x: index === currentSlide ? 0 : index < currentSlide ? -100 : 100
                }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              >
                <div className="absolute inset-0 bg-black/20" />
                <div className="relative h-full flex items-center justify-between p-8 lg:p-12">
                  <div className="flex-1 text-[#F6FCDF] max-w-2xl">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 }}
                      className="mb-4"
                    >
                      <div className="text-6xl lg:text-8xl mb-4 filter drop-shadow-lg">
                        {app.image}
                      </div>
                    </motion.div>
                    
                    <motion.h3
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.3 }}
                      className="text-3xl lg:text-4xl font-bold mb-4"
                    >
                      {app.name}
                    </motion.h3>
                    
                    <motion.p
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.4 }}
                      className="text-lg lg:text-xl mb-6 opacity-90"
                    >
                      {app.description}
                    </motion.p>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.5 }}
                      className="flex items-center space-x-6 mb-8"
                    >
                      <div className="flex items-center space-x-2">
                        <Star className="w-5 h-5 text-yellow-400 fill-current" />
                        <span className="font-semibold">{app.rating}</span>
                      </div>
                      <div className="text-2xl font-bold">
                        {app.bonus} <span className="text-lg">Bonus</span>
                      </div>
                    </motion.div>

                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                    >
                      <Button 
                        size="lg" 
                        className="bg-[#F6FCDF] text-[#1A1A19] hover:bg-[#F6FCDF]/90 font-bold px-8 py-3 rounded-xl"
                      >
                        <Download className="w-5 h-5 mr-2" />
                        Download Now
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button
            onClick={prevSlide}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F6FCDF]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#F6FCDF] hover:bg-[#F6FCDF]/30 transition-all z-10"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button
            onClick={nextSlide}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-[#F6FCDF]/20 backdrop-blur-sm rounded-full flex items-center justify-center text-[#F6FCDF] hover:bg-[#F6FCDF]/30 transition-all z-10"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-3 mt-8">
            {featuredApps.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${
                  index === currentSlide 
                    ? 'bg-gradient-to-r from-[#31511E] to-[#859F3D] scale-125' 
                    : 'bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSlider;