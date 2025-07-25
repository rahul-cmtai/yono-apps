import { motion } from 'framer-motion';
import { Download, Star, Shield, Wallet, Trophy } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Hero = () => {
  const stats = [
    { icon: Download, label: 'Downloads', value: '1M+', color: 'text-blue-500' },
    { icon: Star, label: 'Rating', value: '4.8', color: 'text-yellow-500' },
    { icon: Shield, label: 'Verified', value: '100%', color: 'text-green-500' },
    { icon: Trophy, label: 'Games', value: '50+', color: 'text-[#859F3D]' },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring" as const,
        damping: 12,
        stiffness: 100
      }
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-[#1A2809]/40">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(49,81,30,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(133,159,61,0.2),transparent_60%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(26,40,9,0.25),transparent_50%)]" />
      
      {/* Floating Elements */}
      <motion.div
        className="absolute top-20 left-10 w-20 h-20 bg-green-500 rounded-full opacity-30 blur-xl"
        animate={{ 
          y: [0, -20, 0],
          x: [0, 10, 0],
          scale: [1, 1.1, 1]
        }}
        transition={{ 
          duration: 6, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-32 h-32 bg-gradient-to-r from-[#859F3D] to-[#1A2809] rounded-full opacity-30 blur-xl"
        animate={{ 
          y: [0, 20, 0],
          x: [0, -15, 0],
          scale: [1, 0.9, 1]
        }}
        transition={{ 
          duration: 8, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 1
        }}
      />
      <motion.div
        className="absolute top-40 right-20 w-24 h-24 bg-green-500 rounded-full opacity-20 blur-xl"
        animate={{ 
          y: [0, 15, 0],
          x: [0, 10, 0],
          scale: [1, 1.05, 1]
        }}
        transition={{ 
          duration: 7, 
          repeat: Infinity, 
          ease: "easeInOut",
          delay: 0.5
        }}
      />

      <div className="container mx-auto px-4 pt-20 lg:pt-0">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Badge */}
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center space-x-2 bg-green-500/20 backdrop-blur-sm border border-[#F6FCDF]/20 rounded-full px-6 py-2 mb-8"
          >
            <Shield className="w-4 h-4 text-green-500" />
            <span className="text-sm font-medium">India's Most Trusted Gaming Platform</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1 
            variants={itemVariants}
            className="text-4xl md:text-5xl lg:text-7xl font-bold mb-6 leading-tight"
          >
            <span className="text-green-500">India's Most Trusted</span>
            <br />
            <span className="text-foreground">Gaming APK Site</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p 
            variants={itemVariants}
            className="text-lg md:text-xl lg:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto leading-relaxed"
          >
            Download trusted APKs. Get <span className="text-green-500 font-bold">₹51 bonus</span>. Start winning today!
          </motion.p>

          {/* CTA Buttons */}
          <motion.div 
            variants={itemVariants}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16"
          >
            <Button size="lg" className="bg-green-500 hover:bg-green-600 text-white border-none text-lg px-8 py-4 w-full sm:w-auto">
              <Download className="w-5 h-5 mr-2" />
              Download APK Now
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-green-500 text-green-500 hover:bg-green-500/10 text-lg px-8 py-4 w-full sm:w-auto"
            >
              <Wallet className="w-5 h-5 mr-2" />
              Claim ₹51 Bonus
            </Button>
          </motion.div>

          {/* Stats */}
          <motion.div 
            variants={itemVariants}
            className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8"
          >
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                className="bg-gradient-to-br from-white/5 to-white/10 backdrop-blur-sm border border-white/10 shadow-lg rounded-xl p-6 text-center"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="flex justify-center mb-3">
                  <div className={`p-3 rounded-full bg-green-500/20`}>
                    <stat.icon className={`w-6 h-6 ${stat.color}`} />
                  </div>
                </div>
                <div className="text-2xl lg:text-3xl font-bold text-green-500 mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center">
          <div className="w-1 h-3 bg-green-500 rounded-full mt-2 animate-pulse" />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;