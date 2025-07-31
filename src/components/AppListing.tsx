import { motion } from 'framer-motion';
import AppCard from './AppCard';

const AppListing = () => {
  const allApps = [
    {
      id: 'hi-rummy',
      name: 'Hi Rummy',
      icon: '🎮',
      rating: 4.5,
      downloads: '100K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      featured: true,
      downloadLink: 'https://onlyjaihoapps.com/download/hi-rummy',
      detailLink: '/app/hi-rummy'
    },
    {
      id: 'jaiho-win',
      name: 'Jaiho Win',
      icon: '🎮',
      rating: 4.6,
      downloads: '150K+',
      bonus: '₹500',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      featured: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-win',
      detailLink: '/app/jaiho-win'
    },
    {
      id: 'ind-club',
      name: 'Ind Club',
      icon: '🎮',
      rating: 4.4,
      downloads: '80K+',
      bonus: '₹500',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/ind-club',
      detailLink: '/app/ind-club'
    },
    {
      id: 'top-rummy',
      name: 'Top Rummy',
      icon: '🎮',
      rating: 4.7,
      downloads: '200K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/top-rummy',
      detailLink: '/app/top-rummy'
    },
    {
      id: 'yn-777',
      name: 'Yn 777',
      icon: '🎮',
      rating: 4.3,
      downloads: '70K+',
      bonus: '₹38',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yn-777',
      detailLink: '/app/yn-777'
    },
    {
      id: 'ind-rummy',
      name: 'Ind Rummy',
      icon: '🎮',
      rating: 4.5,
      downloads: '120K+',
      bonus: '₹60',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/ind-rummy',
      detailLink: '/app/ind-rummy'
    },
    {
      id: 'jaiho-slots',
      name: 'Jaiho Slots',
      icon: '🎮',
      rating: 4.2,
      downloads: '90K+',
      bonus: '₹20-300',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-slots',
      detailLink: '/app/jaiho-slots'
    },
    {
      id: 'teen-patti-master',
      name: 'Teen Patti Master',
      icon: '🎮',
      rating: 4.8,
      downloads: '250K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/teen-patti-master',
      detailLink: '/app/teen-patti-master'
    },
    {
      id: 'saga-slots',
      name: 'Saga Slots',
      icon: '🎮',
      rating: 4.1,
      downloads: '60K+',
      bonus: '₹40',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/saga-slots',
      detailLink: '/app/saga-slots'
    },
    {
      id: 'abc-rummy',
      name: 'ABC RUMMY',
      icon: '🎮',
      rating: 4.6,
      downloads: '130K+',
      bonus: '₹128',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/abc-rummy',
      detailLink: '/app/abc-rummy'
    },
    {
      id: 'winzo-gold',
      name: 'Winzo Gold',
      icon: '🎮',
      rating: 4.9,
      downloads: '500K+',
      bonus: '₹500',
      minWithdrawal: '₹10',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/winzo-gold',
      detailLink: '/app/winzo-gold'
    },
    {
      id: 'jaiho-777',
      name: 'Jaiho 777',
      icon: '🎮',
      rating: 4.7,
      downloads: '180K+',
      bonus: '₹128',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-777',
      detailLink: '/app/jaiho-777'
    },
    {
      id: 'rummy-91',
      name: 'Rummy 91',
      icon: '🎮',
      rating: 4.5,
      downloads: '110K+',
      bonus: '₹191',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/rummy-91',
      detailLink: '/app/rummy-91'
    },
    {
      id: 'jaiho-spin',
      name: 'Jaiho Spin',
      icon: '🎮',
      rating: 4.3,
      downloads: '75K+',
      bonus: '₹100',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-spin',
      detailLink: '/app/jaiho-spin'
    },
    {
      id: 'jaiho-rummy',
      name: 'Jaiho Rummy',
      icon: '🎮',
      rating: 4.6,
      downloads: '140K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-rummy',
      detailLink: '/app/jaiho-rummy'
    },
    {
      id: 'jaiho-arcade',
      name: 'Jaiho Arcade',
      icon: '🎮',
      rating: 4.4,
      downloads: '85K+',
      bonus: '₹150',
      minWithdrawal: '₹100',
      category: 'Arcade',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/jaiho-arcade',
      detailLink: '/app/jaiho-arcade'
    },
    {
      id: 'slots-spin',
      name: 'Slots Spin',
      icon: '🎮',
      rating: 4.2,
      downloads: '65K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/slots-spin',
      detailLink: '/app/slots-spin'
    },
    {
      id: 'bet-213',
      name: 'Bet 213',
      icon: '🎮',
      rating: 4.3,
      downloads: '70K+',
      bonus: '₹47',
      minWithdrawal: '₹100',
      category: 'Betting',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/bet-213',
      detailLink: '/app/bet-213'
    },
    {
      id: 'mwm-bet',
      name: 'Mwm Bet',
      icon: '🎮',
      rating: 4.1,
      downloads: '55K+',
      bonus: '₹53',
      minWithdrawal: '₹100',
      category: 'Betting',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/mwm-bet',
      detailLink: '/app/mwm-bet'
    },
    {
      id: 'en-365',
      name: 'En 365',
      icon: '🎮',
      rating: 4.5,
      downloads: '120K+',
      bonus: '₹238',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/en-365',
      detailLink: '/app/en-365'
    },
    {
      id: 'spin-winner',
      name: 'Spin Winner',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹25',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-winner',
      detailLink: '/app/spin-winner'
    },
    {
      id: 'yono-777',
      name: 'Yono 777',
      icon: '🎮',
      rating: 4.6,
      downloads: '150K+',
      bonus: '₹77',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-777',
      detailLink: '/app/yono-777'
    },
    {
      id: 'spin-gold',
      name: 'Spin Gold',
      icon: '🎮',
      rating: 4.3,
      downloads: '80K+',
      bonus: '₹37',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-gold',
      detailLink: '/app/spin-gold'
    },
    {
      id: 'yono-all-games',
      name: 'Yono All Games',
      icon: '🎮',
      rating: 4.8,
      downloads: '300K+',
      bonus: '₹1550',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      featured: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-all-games',
      detailLink: '/app/yono-all-games'
    },
    {
      id: 'gogo-rummy',
      name: 'Gogo Rummy',
      icon: '🎮',
      rating: 4.4,
      downloads: '90K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/gogo-rummy',
      detailLink: '/app/gogo-rummy'
    },
    {
      id: 'yono-vip',
      name: 'Yono Vip',
      icon: '🎮',
      rating: 4.7,
      downloads: '180K+',
      bonus: '₹105',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-vip',
      detailLink: '/app/yono-vip'
    },
    {
      id: 'yono-winner',
      name: 'Yono Winner',
      icon: '🎮',
      rating: 4.6,
      downloads: '160K+',
      bonus: '₹550',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-winner',
      detailLink: '/app/yono-winner'
    },
    {
      id: '789-jackpots',
      name: '789 Jackpots',
      icon: '🎮',
      rating: 4.3,
      downloads: '75K+',
      bonus: '₹29',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/789-jackpots',
      detailLink: '/app/789-jackpots'
    },
    {
      id: 'mbm-bet',
      name: 'Mbm Bet',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Betting',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/mbm-bet',
      detailLink: '/app/mbm-bet'
    },
    {
      id: 'ind-slots',
      name: 'Ind Slots',
      icon: '🎮',
      rating: 4.1,
      downloads: '50K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/ind-slots',
      detailLink: '/app/ind-slots'
    },
    {
      id: 'yono-slots',
      name: 'Yono Slots',
      icon: '🎮',
      rating: 4.4,
      downloads: '95K+',
      bonus: '₹25',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-slots',
      detailLink: '/app/yono-slots'
    },
    {
      id: 'bingo-101',
      name: 'Bingo 101',
      icon: '🎮',
      rating: 4.3,
      downloads: '70K+',
      bonus: '₹20',
      minWithdrawal: '₹100',
      category: 'Bingo',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/bingo-101',
      detailLink: '/app/bingo-101'
    },
    {
      id: 'rummy-365',
      name: 'Rummy 365',
      icon: '🎮',
      rating: 4.5,
      downloads: '120K+',
      bonus: '₹28',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/rummy-365',
      detailLink: '/app/rummy-365'
    },
    {
      id: 'spin-crush',
      name: 'Spin Crush',
      icon: '🎮',
      rating: 4.2,
      downloads: '65K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-crush',
      detailLink: '/app/spin-crush'
    },
    {
      id: 'slots-winner',
      name: 'Slots Winner',
      icon: '🎮',
      rating: 4.4,
      downloads: '85K+',
      bonus: '₹100',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/slots-winner',
      detailLink: '/app/slots-winner'
    },
    {
      id: 'spin-101',
      name: 'Spin 101',
      icon: '🎮',
      rating: 4.3,
      downloads: '75K+',
      bonus: '₹38',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-101',
      detailLink: '/app/spin-101'
    },
    {
      id: 'ind-vip',
      name: 'Ind Vip',
      icon: '🎮',
      rating: 4.6,
      downloads: '140K+',
      bonus: '₹550',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/ind-vip',
      detailLink: '/app/ind-vip'
    },
    {
      id: '567-slots',
      name: '567 Slots',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹67',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/567-slots',
      detailLink: '/app/567-slots'
    },
    {
      id: 'yono-arcade',
      name: 'Yono Arcade',
      icon: '🎮',
      rating: 4.3,
      downloads: '70K+',
      bonus: '₹27',
      minWithdrawal: '₹100',
      category: 'Arcade',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-arcade',
      detailLink: '/app/yono-arcade'
    },
    {
      id: 'rummy-420',
      name: 'Rummy 420',
      icon: '🎮',
      rating: 4.5,
      downloads: '110K+',
      bonus: '₹551',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/rummy-420',
      detailLink: '/app/rummy-420'
    },
    {
      id: 'yono-games',
      name: 'Yono Games',
      icon: '🎮',
      rating: 4.4,
      downloads: '90K+',
      bonus: '₹40',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-games',
      detailLink: '/app/yono-games'
    },
    {
      id: 'teen-patti-live',
      name: 'Teen Patti Live',
      icon: '🎮',
      rating: 4.7,
      downloads: '180K+',
      bonus: '₹36',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/teen-patti-live',
      detailLink: '/app/teen-patti-live'
    },
    {
      id: 'spin-777',
      name: 'Spin 777',
      icon: '🎮',
      rating: 4.3,
      downloads: '75K+',
      bonus: '₹29',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-777',
      detailLink: '/app/spin-777'
    },
    {
      id: 'spin-lucky',
      name: 'Spin Lucky',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/spin-lucky',
      detailLink: '/app/spin-lucky'
    },
    {
      id: 'ind-bingo',
      name: 'Ind Bingo',
      icon: '🎮',
      rating: 4.3,
      downloads: '70K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Bingo',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/ind-bingo',
      detailLink: '/app/ind-bingo'
    },
    {
      id: 'my-777',
      name: 'My 777',
      icon: '🎮',
      rating: 4.1,
      downloads: '55K+',
      bonus: '₹21',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/my-777',
      detailLink: '/app/my-777'
    },
    {
      id: 'mdm-bet',
      name: 'Mdm Bet',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹30',
      minWithdrawal: '₹100',
      category: 'Betting',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/mdm-bet',
      detailLink: '/app/mdm-bet'
    },
    {
      id: '101-z',
      name: '101 Z',
      icon: '🎮',
      rating: 4.0,
      downloads: '50K+',
      bonus: '₹28',
      minWithdrawal: '₹100',
      category: 'Casino',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/101-z',
      detailLink: '/app/101-z'
    },
    {
      id: 'mkm-bet',
      name: 'Mkm Bet',
      icon: '🎮',
      rating: 4.2,
      downloads: '60K+',
      bonus: '₹99',
      minWithdrawal: '₹100',
      category: 'Betting',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/mkm-bet',
      detailLink: '/app/mkm-bet'
    },
    {
      id: 'teen-patti-bliss',
      name: 'Teen Patti Bliss',
      icon: '🎮',
      rating: 4.5,
      downloads: '80K+',
      bonus: '₹50',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/teen-patti-bliss',
      detailLink: '/app/teen-patti-bliss'
    },
    {
      id: 'yono-rummy',
      name: 'Yono Rummy',
      icon: '🎮',
      rating: 4.4,
      downloads: '90K+',
      bonus: '₹27',
      minWithdrawal: '₹100',
      category: 'Card Game',
      verified: true,
      downloadLink: 'https://onlyjaihoapps.com/download/yono-rummy',
      detailLink: '/app/yono-rummy'
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  return (
    <section className="bg-gray-50 py-2">
      <div className="w-full px-2">
        <div className="flex flex-col items-center mb-8 mt-2">
          <div className="flex items-center justify-center mb-2">
            <span className="text-3xl md:text-4xl mr-2 animate-bounce drop-shadow-lg">🎮</span>
            <h2 className="text-3xl md:text-4xl font-extrabold text-center text-black tracking-tight">
              All <span className="text-green-700">JaiHo</span> Apps
            </h2>
          </div>
          <div className="h-1 w-16 md:w-24 bg-green-500 rounded-full mt-2 mb-1"></div>
        </div>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col space-y-3 w-full"
        >
          {allApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} ranking={index + 1} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default AppListing;