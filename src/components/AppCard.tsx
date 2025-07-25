import { motion } from 'framer-motion';
import { Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

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
  const cardVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
    },
    visible: { 
      opacity: 1, 
      y: 0,
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
        transition: { type: "spring", stiffness: 300 }
      }}
      className="relative bg-white rounded-md shadow-md overflow-hidden w-full cursor-pointer transition-all duration-300"
    >
      {/* Ranking Number */}
      {ranking && (
        <div className="absolute top-0 left-0 w-6 h-6 bg-orange-500 flex items-center justify-center">
          <span className="text-xs font-bold text-white">{ranking}</span>
        </div>
      )}
      
      <div className="flex items-center p-3 w-full">
        {/* App Icon */}
        <div className="flex-shrink-0 mr-3">
          <div className="w-12 h-12 rounded-md overflow-hidden">
            <div className="w-full h-full flex items-center justify-center bg-gray-200 text-xl">
              {app.icon}
            </div>
          </div>
        </div>
        
        {/* App Info */}
        <div className="flex-1 min-w-0">
          <h3 className="font-bold text-base text-black">
            {app.name}
          </h3>
          <div className="flex flex-col">
            <div className="flex items-center text-xs text-red-500">
              <span>🔴 Sign Up Bonus {app.bonus}</span>
            </div>
            <div className="flex items-center text-xs text-green-600">
              <span>🟢 Min. Withdrawal {app.minWithdrawal}</span>
            </div>
          </div>
        </div>

        {/* Download Button */}
        <div className="flex-shrink-0 ml-2">
          <a 
            href={app.downloadLink} 
            target="_blank" 
            rel="noopener noreferrer" 
            className="block"
          >
            <Button 
              className="bg-green-500 hover:bg-blue-600 text-white text-sm font-medium border-none rounded-md px-4 py-1 h-auto shadow-md"
            >
              <Download className="w-3 h-3 mr-1" />
              Download
            </Button>
          </a>
        </div>
      </div>
    </motion.div>
  );
};

export default AppCard;