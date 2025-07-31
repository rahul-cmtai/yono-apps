import { motion } from 'framer-motion';
import { Heart, Smartphone, Mail, MessageCircle, Shield, Award, Star } from 'lucide-react';

const Footer = () => {
  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
    { name: 'Terms & Conditions', href: '/terms' },
    { name: 'Privacy Policy', href: '/privacy' },
    { name: 'Disclaimer', href: '/disclaimer' },
  ];

  const features = [
    { icon: Shield, text: 'Safe & Verified APKs' },
    { icon: Award, text: '₹51 Bonus on Signup' },
    { icon: Star, text: 'Daily Rewards' },
  ];

  return (
    <footer className="bg-gradient-to-t from-green-500/20 to-background border-t border-green-500/20">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center shadow-dark">
                <Smartphone className="w-7 h-7 text-[#F6FCDF]" />
              </div>
              <div>
                <h3 className="text-2xl font-bold text-green-500 font-poppins">
                  JaiHo App
                </h3>
                <p className="text-sm text-muted-foreground">
                  Gaming APK Platform
                </p>
              </div>
            </div>
            <p className="text-muted-foreground mb-6 leading-relaxed max-w-md">
              India's most trusted gaming APK platform. Download verified games, 
              get instant bonuses, and start winning today with complete security.
            </p>
            
            {/* Features */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.text}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-2 p-3 glass-dark rounded-lg border border-green-500/20"
                >
                  <feature.icon className="w-4 h-4 text-green-500" />
                  <span className="text-xs font-medium">{feature.text}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-bold text-lg mb-6 text-foreground">Quick Links</h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <motion.li
                  key={link.name}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                >
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-green-500 transition-colors duration-200 hover:underline"
                  >
                    {link.name}
                  </a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="font-bold text-lg mb-6 text-foreground">Contact Us</h4>
            <div className="space-y-4">
              <motion.a
                href="mailto:support@onlyjaihoapps.com"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                  <Mail className="w-4 h-4" />
                </div>
                <span className="text-sm">support@onlyjaihoapps.com</span>
              </motion.a>
              
              <motion.a
                href="#"
                className="flex items-center space-x-3 text-muted-foreground hover:text-green-500 transition-colors group"
                whileHover={{ x: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="p-2 rounded-lg bg-green-500/10 group-hover:bg-green-500/20 transition-all">
                  <MessageCircle className="w-4 h-4" />
                </div>
                <span className="text-sm">Join Telegram Support</span>
              </motion.a>
            </div>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="border-t border-green-500/20 pt-8 mt-12"
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground text-center md:text-left">
              © 2025 JaiHo App. All rights reserved.
             
            </p>
            
            <div className="flex items-center space-x-6 text-sm text-muted-foreground">
              <span>🇮🇳 Made in India</span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center space-x-1">
                <Shield className="w-4 h-4 text-green-500" />
                <span>100% Secure</span>
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;