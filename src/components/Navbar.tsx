import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X, Smartphone, Home, Info, Phone, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
            <div className="w-10 h-10 lg:w-12 lg:h-12 rounded-xl bg-gradient-to-r from-[#1A2809] to-[#31511E] flex items-center justify-center shadow-dark">
              <Smartphone className="w-6 h-6 lg:w-7 lg:h-7 text-[#F6FCDF]" />
            </div>
            <div>
              <h1 className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-[#31511E] to-[#859F3D] font-poppins">
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

          {/* CTA Button */}
          <motion.div 
            className="hidden lg:block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.5 }}
          >
            <Button className="bg-gradient-to-r from-[#1A2809] to-[#31511E] hover:from-[#31511E] hover:to-[#1A2809] text-white border-none shadow-dark">
              Download Now
            </Button>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            className="lg:hidden p-2 rounded-lg hover:bg-[#31511E]/10 transition-colors"
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
          <div className="py-4 space-y-3 border-t border-[#31511E]/20">
            {navItems.map((item, index) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="flex items-center space-x-3 px-4 py-3 text-foreground hover:bg-[#31511E]/10 rounded-lg transition-colors"
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <item.icon className="w-5 h-5 text-[#31511E]" />
                <span className="font-medium">{item.name}</span>
              </motion.a>
            ))}
            <div className="px-4 pt-3">
              <Button className="bg-gradient-to-r from-[#1A2809] to-[#31511E] hover:from-[#31511E] hover:to-[#1A2809] text-white border-none w-full shadow-dark">
                Download Now
              </Button>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;