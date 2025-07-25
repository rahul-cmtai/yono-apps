import { motion } from 'framer-motion';
import { Download, Star, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface AppCardProps {
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
    featured?: boolean;
    downloadLink: string;
    detailLink?: string;
  };
  index?: number;
  ranking?: number;
}

const AppCard = ({ app, index = 0, ranking }: AppCardProps) => {
  // Generate a gradient color based on the app name
  const getGradient = () => {
    const colors = [
      'from-[#1A2809] to-[#31511E]', // Green
      'from-[#1E3A51] to-[#0D5A8C]', // Blue
      'from-[#512D1E] to-[#8C3D0D]', // Orange
      'from-[#351E51] to-[#5D0D8C]', // Purple
      'from-[#511E3E] to-[#8C0D5A]', // Pink
      'from-[#51331E] to-[#8C5A0D]', // Brown
    ];
    return colors[Math.abs(app.name.charCodeAt(0) + app.name.length) % colors.length];
  };

  const cardVariants = {
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
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        delay: index * 0.05
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
        y: -5,
        scale: 1.03,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="relative group"
    >
      {/* Ranking Number */}
      {ranking && (
        <div className="absolute -top-2 -left-2 z-10 w-6 h-6 bg-white rounded-full flex items-center justify-center shadow-lg">
          <span className="text-xs font-bold text-black">{ranking}</span>
        </div>
      )}
      
      <div className={`bg-gradient-to-br ${getGradient()} shadow-lg rounded-xl p-4 h-full flex flex-col overflow-hidden`}>
        <div className="absolute top-0 right-0 w-24 h-24 bg-white/5 rounded-full -mr-8 -mt-8 blur-2xl"></div>
        <div className="absolute bottom-0 left-0 w-16 h-16 bg-white/10 rounded-full -ml-4 -mb-4 blur-xl"></div>
        
        {/* Featured Badge */}
        {app.featured && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge className="bg-yellow-500/90 text-black font-bold px-3 py-1 rounded-full shadow-lg">
              HOT
            </Badge>
          </div>
        )}

        {/* App Header */}
        <div className="flex items-center space-x-3 mb-3">
          <div className="relative">
            <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 text-white text-2xl shadow-inner">
              {app.icon}
            </div>
            {app.verified && (
              <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-white" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-base text-white mb-0.5 truncate">
              {app.name}
            </h3>
            <div className="flex items-center space-x-2 text-xs text-white/80">
              <div className="flex items-center">
                <Star className="w-3 h-3 text-yellow-400 fill-current mr-0.5" />
                <span>{app.rating}</span>
              </div>
              <span>•</span>
              <span>{app.category}</span>
            </div>
          </div>
        </div>

        {/* Bonus Info */}
        <div className="bg-white/10 rounded-lg p-3 mb-3">
          <div className="flex items-center justify-between">
            <div className="text-xs text-white/70">
              Signup Bonus
            </div>
            <div className="text-lg font-bold text-white">
              {app.bonus}
            </div>
          </div>
          <div className="flex items-center justify-between mt-1">
            <div className="text-xs text-white/70">
              Min Withdrawal
            </div>
            <div className="text-sm font-medium text-white/90">
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
              size="sm"
            >
              <Download className="w-4 h-4 mr-1.5" />
              Download
            </Button>
          </a>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default AppCard;