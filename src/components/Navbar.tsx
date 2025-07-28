import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Smartphone, Home, Info, Phone, FileText, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

// Import app data from AppListing
const appData = [
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
    downloadLink: 'https://allyonoapp.in/download/hi-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-win',
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
    downloadLink: 'https://allyonoapp.in/download/ind-club',
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
    downloadLink: 'https://allyonoapp.in/download/top-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/yn-777',
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
    downloadLink: 'https://allyonoapp.in/download/ind-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-slots',
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
    downloadLink: 'https://allyonoapp.in/download/teen-patti-master',
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
    downloadLink: 'https://allyonoapp.in/download/saga-slots',
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
    downloadLink: 'https://allyonoapp.in/download/abc-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/winzo-gold',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-777',
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
    downloadLink: 'https://allyonoapp.in/download/rummy-91',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-spin',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/jaiho-arcade',
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
    downloadLink: 'https://allyonoapp.in/download/slots-spin',
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
    downloadLink: 'https://allyonoapp.in/download/bet-213',
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
    downloadLink: 'https://allyonoapp.in/download/mwm-bet',
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
    downloadLink: 'https://allyonoapp.in/download/en-365',
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
    downloadLink: 'https://allyonoapp.in/download/spin-winner',
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
    downloadLink: 'https://allyonoapp.in/download/yono-777',
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
    downloadLink: 'https://allyonoapp.in/download/spin-gold',
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
    downloadLink: 'https://allyonoapp.in/download/yono-all-games',
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
    downloadLink: 'https://allyonoapp.in/download/gogo-rummy',
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
    downloadLink: 'https://allyonoapp.in/download/yono-vip',
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
    downloadLink: 'https://allyonoapp.in/download/yono-winner',
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
    downloadLink: 'https://allyonoapp.in/download/789-jackpots',
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
    downloadLink: 'https://allyonoapp.in/download/mbm-bet',
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
    downloadLink: 'https://allyonoapp.in/download/ind-slots',
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
    downloadLink: 'https://allyonoapp.in/download/yono-slots',
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
    downloadLink: 'https://allyonoapp.in/download/bingo-101',
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
    downloadLink: 'https://allyonoapp.in/download/rummy-365',
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
    downloadLink: 'https://allyonoapp.in/download/spin-crush',
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
    downloadLink: 'https://allyonoapp.in/download/slots-winner',
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
    downloadLink: 'https://allyonoapp.in/download/spin-101',
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
    downloadLink: 'https://allyonoapp.in/download/ind-vip',
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
    downloadLink: 'https://allyonoapp.in/download/567-slots',
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
    downloadLink: 'https://allyonoapp.in/download/yono-arcade',
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
    downloadLink: 'https://allyonoapp.in/download/rummy-420',
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
    downloadLink: 'https://allyonoapp.in/download/yono-games',
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
    downloadLink: 'https://allyonoapp.in/download/teen-patti-live',
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
    downloadLink: 'https://allyonoapp.in/download/spin-777',
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
    downloadLink: 'https://allyonoapp.in/download/spin-lucky',
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
    downloadLink: 'https://allyonoapp.in/download/ind-bingo',
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
    downloadLink: 'https://allyonoapp.in/download/my-777',
    detailLink: '/app/my-777'
  },
  {
    id: 'mdm-bet',
    name: 'Mdm Bet',
    icon: '��',
    rating: 4.2,
    downloads: '60K+',
    bonus: '₹30',
    minWithdrawal: '₹100',
    category: 'Betting',
    verified: true,
    downloadLink: 'https://allyonoapp.in/download/mdm-bet',
    detailLink: '/app/mdm-bet'
  },
  {
    id: '101-z',
    name: '101 Z',
    icon: '��',
    rating: 4.0,
    downloads: '50K+',
    bonus: '₹28',
    minWithdrawal: '₹100',
    category: 'Casino',
    verified: true,
    downloadLink: 'https://allyonoapp.in/download/101-z',
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
    downloadLink: 'https://allyonoapp.in/download/mkm-bet',
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
    downloadLink: 'https://allyonoapp.in/download/teen-patti-bliss',
    detailLink: '/app/teen-patti-bliss'
  },
  {
    id: 'yono-rummy',
    name: 'Yono Rummy',
    icon: '��',
    rating: 4.4,
    downloads: '90K+',
    bonus: '₹27',
    minWithdrawal: '₹100',
    category: 'Card Game',
    verified: true,
    downloadLink: 'https://allyonoapp.in/download/yono-rummy',
    detailLink: '/app/yono-rummy'
  }
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [showSearchResults, setShowSearchResults] = useState(false);
  const [searchResults, setSearchResults] = useState<typeof appData>([]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    // Filter apps based on search query
    if (searchQuery.trim()) {
      const filteredApps = appData.filter(app => 
        app.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        app.category.toLowerCase().includes(searchQuery.toLowerCase())
      );
      setSearchResults(filteredApps);
      setShowSearchResults(true);
    } else {
      setSearchResults([]);
      setShowSearchResults(false);
    }
  }, [searchQuery]);

  // Close search results when clicking outside
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (!target.closest('.search-container')) {
        setShowSearchResults(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Navigate to game detail if only one result
      if (searchResults.length === 1) {
        window.location.href = searchResults[0].detailLink || `/app/${searchResults[0].id}`;
      } else if (searchResults.length > 0) {
        // Toggle search results visibility
        setShowSearchResults(!showSearchResults);
      }
    }
  };

  const handleAppClick = (app: typeof appData[0]) => {
    window.location.href = app.detailLink || `/app/${app.id}`;
    setShowSearchResults(false);
    setSearchQuery('');
  };

  const navItems = [
    { name: 'Home', href: '/', icon: Home },
    { name: 'About', href: '/about', icon: Info },
    { name: 'Contact', href: '/contact', icon: Phone },
    { name: 'Terms', href: '/terms', icon: FileText },
  ];

  return (
    <motion.nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'glass-dark backdrop-blur-md shadow-lg border-b border-[#31511E]/20' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div 
            className="flex items-center space-x-3"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-dark">
              <Smartphone className="w-6 h-6 lg:w-7 lg:h-7 text-[#F6FCDF]" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold text-green-500 font-poppins">
                Yono App
              </h1>
              <p className="text-xs text-muted-foreground hidden lg:block">
                Gaming APK Platform
              </p>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-[#31511E] transition-colors duration-200 font-medium flex items-center space-x-2"
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <item.icon className="w-4 h-4" />
                <span>{item.name}</span>
              </motion.a>
            ))}
          </div>

          {/* Search Input and Button - Desktop */}
          <motion.div
            className="hidden lg:block relative search-container"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <form 
              className="flex items-center space-x-2"
              onSubmit={handleSearch}
            >
              <Input
                type="text"
                placeholder="Search games..."
                className="w-40 h-9 bg-background/80 border-green-500/30 focus:border-green-500"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
              />
              <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white border-none shadow-dark h-9 px-3">
                <Search className="w-4 h-4" />
              </Button>
            </form>

            {/* Search Results Dropdown - Desktop */}
            {showSearchResults && searchResults.length > 0 && (
              <motion.div 
                className="absolute top-full right-0 mt-2 w-64 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.2 }}
              >
                <div className="p-2">
                  <h3 className="text-sm font-semibold px-2 py-1 text-muted-foreground">
                    Search Results ({searchResults.length})
                  </h3>
                  <div className="max-h-60 overflow-y-auto">
                    {searchResults.map(app => (
                      <div 
                        key={app.id}
                        className="px-2 py-2 hover:bg-green-500/10 rounded cursor-pointer transition-colors flex items-center"
                        onClick={() => handleAppClick(app)}
                      >
                        <div className="w-8 h-8 flex items-center justify-center mr-2 bg-gray-100 dark:bg-gray-700 rounded">
                          {app.icon}
                        </div>
                        <div>
                          <p className="font-medium text-foreground">{app.name}</p>
                          <p className="text-xs text-muted-foreground">{app.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            )}
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-green-500/10 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            whileTap={{ scale: 0.95 }}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-[#31511E]" />
            ) : (
              <Menu className="w-6 h-6 text-[#31511E]" />
            )}
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`lg:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}
          initial={{ opacity: 0, height: 0 }}
          animate={{ 
            opacity: isMobileMenuOpen ? 1 : 0, 
            height: isMobileMenuOpen ? 'auto' : 0 
          }}
          transition={{ duration: 0.3 }}
        >
          <div className="py-4 space-y-3 border-t border-[#31511E]/20 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md rounded-b-lg shadow-lg">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-green-500/10 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-green-600 dark:text-green-500" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <div className="px-4 pt-3 relative search-container">
              <form onSubmit={handleSearch} className="flex space-x-2">
                <Input
                  type="text"
                  placeholder="Search games..."
                  className="flex-1 bg-background/80 border-green-500/30 focus:border-green-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  onFocus={() => searchResults.length > 0 && setShowSearchResults(true)}
                />
                <Button type="submit" className="bg-green-500 hover:bg-green-600 text-white border-none shadow-dark px-3">
                  <Search className="w-4 h-4" />
                </Button>
              </form>
              
              {/* Search Results Dropdown - Mobile */}
              {showSearchResults && searchResults.length > 0 && (
                <motion.div 
                  className="absolute left-4 right-4 mt-2 bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden z-50"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <div className="p-2">
                    <h3 className="text-sm font-semibold px-2 py-1 text-muted-foreground">
                      Search Results ({searchResults.length})
                    </h3>
                    <div className="max-h-60 overflow-y-auto">
                      {searchResults.map(app => (
                        <div 
                          key={app.id}
                          className="px-2 py-2 hover:bg-green-500/10 rounded cursor-pointer transition-colors flex items-center"
                          onClick={() => handleAppClick(app)}
                        >
                          <div className="w-8 h-8 flex items-center justify-center mr-2 bg-gray-100 dark:bg-gray-700 rounded">
                            {app.icon}
                          </div>
                          <div>
                            <p className="font-medium text-foreground">{app.name}</p>
                            <p className="text-xs text-muted-foreground">{app.category}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </motion.div>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;