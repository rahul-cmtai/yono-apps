import { motion } from 'framer-motion';
import { Shield, Gift, Trophy, Users, Star, Award } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const About = () => {
  const features = [
    {
      icon: Shield,
      title: 'Safe & Verified APKs',
      description: 'All our gaming APKs are thoroughly tested and verified for safety and security.',
      color: 'text-green-500'
    },
    {
      icon: Gift,
      title: '₹51 Bonus on Signup',
      description: 'Get instant bonus money when you join our platform and start playing.',
      color: 'text-blue-500'
    },
    {
      icon: Trophy,
      title: 'Daily Rewards',
      description: 'Earn daily rewards and bonuses by playing your favorite games.',
      color: 'text-yellow-500'
    },
    {
      icon: Users,
      title: '1M+ Happy Users',
      description: 'Join millions of satisfied users who trust our platform for gaming.',
      color: 'text-purple-500'
    },
    {
      icon: Star,
      title: '4.8 Star Rating',
      description: 'Consistently rated highly by users for quality and reliability.',
      color: 'text-orange-500'
    },
    {
      icon: Award,
      title: 'Premium Gaming Experience',
      description: 'Experience premium quality games with smooth gameplay and graphics.',
      color: 'text-pink-500'
    }
  ];

  const timeline = [
    { step: '01', title: 'Explore', description: 'Browse our collection of verified gaming APKs' },
    { step: '02', title: 'Download', description: 'Download your favorite games safely and securely' },
    { step: '03', title: 'Play', description: 'Enjoy premium gaming experience with bonus rewards' },
    { step: '04', title: 'Win', description: 'Earn real money and daily rewards while playing' }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-20 pb-16 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              About <span className="text-gradient">Yono App</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              India's most trusted gaming APK platform, providing safe and verified games 
              with instant bonuses and daily rewards for millions of users.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose <span className="text-gradient">Yono App?</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We provide the most secure and rewarding gaming experience in India
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="card-gaming p-8 text-center group hover:scale-105 transition-transform"
              >
                <div className="flex justify-center mb-6">
                  <div className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/20">
                    <feature.icon className={`w-8 h-8 ${feature.color}`} />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Your Gaming <span className="text-gradient">Journey</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Follow these simple steps to start earning while playing
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {timeline.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center relative"
              >
                <div className="mb-6">
                  <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {item.step}
                  </div>
                  {index < timeline.length - 1 && (
                    <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-gradient-to-r from-primary/50 to-transparent transform translate-x-8"></div>
                  )}
                </div>
                <h3 className="text-xl font-bold mb-2 text-foreground">
                  {item.title}
                </h3>
                <p className="text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: '1M+', label: 'Active Users' },
              { value: '50+', label: 'Premium Games' },
              { value: '4.8', label: 'User Rating' },
              { value: '100%', label: 'Verified APKs' }
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-3xl md:text-4xl font-bold text-gradient mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;