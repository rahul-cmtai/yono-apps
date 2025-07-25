import { motion } from 'framer-motion';
import { Download, Star, Wallet, Shield, ExternalLink } from 'lucide-react';
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
  };
  index?: number;
}

const AppCard = ({ app, index = 0 }: AppCardProps) => {
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 50,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100,
        delay: index * 0.1
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
        scale: 1.02,
        transition: { type: "spring", stiffness: 300 }
      }}
      className="relative group"
    >
      <div className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-lg rounded-xl p-6 h-full flex flex-col">
        {/* Featured Badge */}
        {app.featured && (
          <div className="absolute -top-2 -right-2 z-10">
            <Badge className="bg-gradient-to-r from-[#1A2809] to-[#31511E] text-[#F6FCDF] font-bold px-3 py-1 rounded-full shadow-dark">
              FEATURED
            </Badge>
          </div>
        )}

        {/* App Header */}
        <div className="flex items-start space-x-4 mb-4">
          <div className="relative">
            <motion.img
              src={app.icon}
              alt={app.name}
              className="w-16 h-16 rounded-2xl shadow-dark"
              whileHover={{ scale: 1.1, rotate: 5 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            {app.verified && (
              <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-[#31511E] rounded-full flex items-center justify-center">
                <Shield className="w-3 h-3 text-[#F6FCDF]" />
              </div>
            )}
          </div>
          
          <div className="flex-1 min-w-0">
            <h3 className="font-bold text-lg text-foreground mb-1 truncate">
              {app.name}
            </h3>
            <div className="flex items-center space-x-3 text-sm text-muted-foreground">
              <div className="flex items-center space-x-1">
                <Star className="w-4 h-4 text-yellow-500 fill-current" />
                <span className="font-medium">{app.rating}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Download className="w-4 h-4" />
                <span>{app.downloads}</span>
              </div>
            </div>
            <Badge variant="secondary" className="mt-2 text-xs bg-[#31511E]/10 text-[#31511E] border-[#31511E]/20">
              {app.category}
            </Badge>
          </div>
        </div>

        {/* Bonus Info */}
        <div className="space-y-3 mb-6 flex-1">
          <div className="glass-dark p-4 rounded-xl border border-[#31511E]/20">
            <div className="flex items-center space-x-2 mb-2">
              <Wallet className="w-4 h-4 text-[#859F3D]" />
              <span className="text-sm font-medium text-foreground">Signup Bonus</span>
            </div>
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#31511E] to-[#859F3D]">
              {app.bonus}
            </div>
          </div>
          
          <div className="text-sm text-muted-foreground">
            <span className="font-medium">Min Withdrawal:</span> {app.minWithdrawal}
          </div>
        </div>

        {/* Download Button */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            className="bg-gradient-to-r from-[#1A2809] to-[#31511E] hover:from-[#31511E] hover:to-[#1A2809] text-white border-none shadow-dark w-full"
            size="lg"
          >
            <Download className="w-4 h-4 mr-2" />
            Download Now
            <ExternalLink className="w-4 h-4 ml-2 opacity-0 group-hover:opacity-100 transition-opacity" />
          </Button>
        </motion.div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#1A2809]/10 to-[#31511E]/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl pointer-events-none" />
      </div>
    </motion.div>
  );
};

export default AppCard;