import { motion, Variants } from 'framer-motion';
import { Star, Download, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const FeaturedSlider = () => {
  const featuredApps = [
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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
          {featuredApps.map((app, index) => (
            <FeaturedCard key={app.id} app={app} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

interface FeaturedCardProps {
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

const FeaturedCard = ({ app, index }: FeaturedCardProps) => {
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
              className="bg-green-600 hover:bg-white/90 text-white hover:text-black font-medium border-none w-full rounded-lg shadow-lg"
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

export default FeaturedSlider;