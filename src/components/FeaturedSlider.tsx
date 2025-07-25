import { motion, Variants } from 'framer-motion';
import { Star, Download, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useIsMobile } from '@/hooks/use-mobile';

const FeaturedSlider = () => {
  const isMobile = useIsMobile();
  
  // Original featured apps for desktop view
  const desktopFeaturedApps = [
    {
      id: 'v0-gamini',
      name: 'V0 Gamini',
      icon: '🎮',
      rating: 4.8,
      downloads: '250K+',
      bonus: '₹51',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      featured: true,
      downloadLink: 'https://allyonoapp.in/download/v0-gamini',
      gradient: 'from-[#31511E] to-[#859F3D]'
    },
    {
      id: 'rummy-king',
      name: 'Rummy King',
      icon: '👑',
      rating: 4.7,
      downloads: '180K+',
      bonus: '₹75',
      minWithdrawal: '₹150',
      category: 'Card Game',
      verified: true,
      featured: true,
      downloadLink: 'https://allyonoapp.in/download/rummy-king',
      gradient: 'from-[#1E3A51] to-[#0D5A8C]'
    },
    {
      id: 'teen-patti',
      name: 'Teen Patti Master',
      icon: '🎯',
      rating: 4.6,
      downloads: '150K+',
      bonus: '₹41',
      minWithdrawal: '₹120',
      category: 'Card Game',
      verified: true,
      featured: true,
      downloadLink: 'https://allyonoapp.in/download/teen-patti',
      gradient: 'from-[#512D1E] to-[#8C3D0D]'
    }
  ];

  // Mobile view apps matching the image
  const mobileFeaturedApps = [
    {
      id: 'yono-arcade',
      name: 'Yono Arcade',
      icon: '🎮',
      bgColor: 'bg-orange-500',
      number: 'NO1',
      downloadLink: 'https://allyonoapp.in/download/yono-arcade',
      verified: true
    },
    {
      id: 'yono-slots',
      name: 'Yono Slots',
      icon: '🎮',
      bgColor: 'bg-gray-200',
      number: 'NO2',
      downloadLink: 'https://allyonoapp.in/download/yono-slots',
      verified: true
    },
    {
      id: 'spin-winner',
      name: 'Spin Winner',
      icon: '🎮',
      bgColor: 'bg-amber-500',
      number: 'NO3',
      downloadLink: 'https://allyonoapp.in/download/spin-winner',
      verified: true
    }
  ];

  return (
    <section className="py-12 lg:py-20 relative overflow-hidden">
      <div className="w-full px-0">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured</span> This Week
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover our handpicked gaming apps with the biggest bonuses and best rewards
          </p>
        </motion.div>

        {/* Desktop View */}
        <div className="hidden md:grid grid-cols-3 gap-4 px-4 mb-6">
          {desktopFeaturedApps.map((app, index) => (
            <DesktopFeaturedCard key={app.id} app={app} index={index} />
          ))}
        </div>

        {/* Desktop Telegram Banner */}
        <div className="hidden md:block px-4 mb-8">
          <div className="bg-green-100 rounded-lg border-2 border-green-500 flex items-center justify-between p-4">
            <div className="flex items-center">
              <div className="w-10 h-10 rounded-full bg-green-500 flex items-center justify-center text-white mr-3">
                <span className="text-xl">📱</span>
              </div>
              <span className="font-medium text-lg">Join Our Telegram Channel</span>
            </div>
            <a 
              href="https://t.me/yonoappofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-8 rounded-full text-base"
            >
              Join Now
            </a>
          </div>
        </div>

        {/* Mobile View */}
        <div className="md:hidden px-2 mb-6">
          <div className="grid grid-cols-3 gap-2">
            {mobileFeaturedApps.map((app, index) => (
              <MobileFeaturedCard key={app.id} app={app} index={index} />
            ))}
          </div>
        </div>
        
        {/* Mobile Telegram Banner */}
        <div className="md:hidden mx-2">
          <div className="bg-green-100 rounded-lg border-2 border-green-500 flex items-center justify-between p-3">
            <div className="flex items-center">
              <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center text-white mr-2">
                <span className="text-sm">📱</span>
              </div>
              <span className="font-medium text-xs">Join Our Telegram Channel</span>
            </div>
            <a 
              href="https://t.me/yonoappofficial" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-green-500 hover:bg-green-600 text-white font-medium py-1 px-4 rounded-full text-xs"
            >
              Join Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

// Original desktop card component
interface DesktopFeaturedCardProps {
  app: {
    id: string;
    name: string;
    icon: string;
    rating: number;
    downloads: string;
    bonus: string;
    minWithdrawal: string;
    category: string;
    verified: boolean;
    featured: boolean;
    downloadLink: string;
    gradient: string;
  };
  index: number;
}

const DesktopFeaturedCard = ({ app, index }: DesktopFeaturedCardProps) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 30,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.2
      }
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -8,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="relative"
    >
      <div className={`bg-gradient-to-br ${app.gradient} shadow-lg p-5 h-full flex flex-col overflow-hidden`}>
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-full -mr-10 -mt-10 blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-24 h-24 bg-white/10 rounded-full -ml-6 -mb-6 blur-2xl"></div>
        
        <Badge className="bg-yellow-500/90 text-black font-bold px-3 py-1 rounded-full shadow-lg self-start mb-3">
          FEATURED
        </Badge>

        {/* App Header */}
        <div className="flex items-center space-x-3 mb-4">
          <div className="relative">
            <div className="w-16 h-16 rounded-xl flex items-center justify-center bg-white/20 text-white text-3xl shadow-inner">
              {app.icon}
            </div>
            {app.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-4 h-4 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-xl text-white mb-1 truncate">
              {app.name}
            </h3>
            <div className="flex items-center space-x-2 text-sm text-white/80">
              <div className="flex items-center">
                <Star className="w-4 h-4 text-yellow-400 fill-current mr-1" />
                <span>{app.rating}</span>
              </div>
              <span>•</span>
              <span>{app.category}</span>
            </div>
          </div>
        </div>

        {/* Bonus Info */}
        <div className="bg-white/10 rounded-lg p-4 mb-4">
          <div className="flex items-center justify-between">
            <div className="text-sm text-white/70">
              Signup Bonus
            </div>
            <div className="text-2xl font-bold text-white">
              {app.bonus}
            </div>
          </div>
          <div className="flex items-center justify-between mt-2">
            <div className="text-sm text-white/70">
              Min Withdrawal
            </div>
            <div className="text-base font-medium text-white/90">
              {app.minWithdrawal}
            </div>
          </div>
        </div>

        {/* Download Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-auto"
        >
          <a 
            href={app.downloadLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Button 
              className="bg-green-500 hover:bg-white/90 text-white hover:text-black font-medium border-none w-full rounded-lg shadow-lg"
              size="lg"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Now
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

// Mobile card component matching the image
interface MobileFeaturedCardProps {
  app: {
    id: string;
    name: string;
    icon: string;
    bgColor: string;
    number: string;
    downloadLink: string;
    verified: boolean;
  };
  index: number;
}

const MobileFeaturedCard = ({ app, index }: MobileFeaturedCardProps) => {
  const cardVariants: Variants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 100,
        delay: index * 0.1
      }
    }
  };

  // Determine text color based on background
  const textColor = app.bgColor === 'bg-gray-200' ? 'text-black' : 'text-white';
  
  // Add border color based on background
  const borderColor = app.bgColor === 'bg-orange-500' ? 'border-orange-300' : 
                      app.bgColor === 'bg-gray-200' ? 'border-gray-300' : 'border-amber-300';

  return (
    <motion.div
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      whileHover={{ 
        y: -5,
        scale: 1.05,
        transition: { type: "spring", stiffness: 300 }
      }}
      className={`${app.bgColor} rounded-lg overflow-hidden border-2 ${borderColor} relative shadow-md h-40`}
    >
      {/* Number Label */}
      <div className="absolute top-1 right-1 bg-white/20 rounded-full w-6 h-6 flex items-center justify-center">
        <span className="text-xs font-bold">{app.number}</span>
      </div>
      
      <div className="flex flex-col items-center p-2 text-center h-full">
        {/* App Logo */}
        <div className="mb-2 mt-1">
          <div className="w-16 h-16 rounded-full bg-white/20 flex items-center justify-center">
            <span className="text-3xl">{app.icon}</span>
          </div>
        </div>
        
        {/* App Name */}
        <h3 className={`font-bold text-sm mb-2 ${textColor}`}>
          {app.name}
        </h3>
        
        {/* Download Button */}
        <a 
          href={app.downloadLink} 
          target="_blank" 
          rel="noopener noreferrer" 
          className="block w-full mt-auto"
        >
          <Button 
            className="bg-green-500 hover:bg-green-600 text-white font-medium border-none rounded-full px-2 py-0 h-7 w-full text-xs transition-colors duration-300"
          >
            Download
          </Button>
        </a>
        
        {/* Trusted Label */}
        {app.verified && (
          <div className={`mt-1 text-[10px] font-medium ${textColor}`}>
            100% Trusted
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default FeaturedSlider;