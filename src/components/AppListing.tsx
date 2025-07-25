import { motion } from 'framer-motion';
import AppCard from './AppCard';

const AppListing = () => {
  const featuredApps = [
    {
      id: 'v0-gamini',
      name: 'V0 Gamini',
      icon: '🎮',
      rating: 4.8,
      downloads: '100K+',
      bonus: '₹51',
      minWithdrawal: '₹100',
      category: 'Gaming',
      verified: true,
      featured: true
    },
    {
      id: 'rummy-king',
      name: 'Rummy King',
      icon: '👑',
      rating: 4.7,
      downloads: '250K+',
      bonus: '₹75',
      minWithdrawal: '₹150',
      category: 'Card Game',
      verified: true,
      featured: true
    },
    {
      id: 'teen-patti-master',
      name: 'Teen Patti Master',
      icon: '🎯',
      rating: 4.6,
      downloads: '180K+',
      bonus: '₹41',
      minWithdrawal: '₹120',
      category: 'Card Game',
      verified: true
    },
    {
      id: 'ludo-champion',
      name: 'Ludo Champion',
      icon: '🎲',
      rating: 4.9,
      downloads: '300K+',
      bonus: '₹61',
      minWithdrawal: '₹100',
      category: 'Board Game',
      verified: true
    },
    {
      id: 'carrom-clash',
      name: 'Carrom Clash',
      icon: '🎯',
      rating: 4.5,
      downloads: '90K+',
      bonus: '₹35',
      minWithdrawal: '₹80',
      category: 'Sports',
      verified: true
    },
    {
      id: 'fantasy-cricket',
      name: 'Fantasy Cricket Pro',
      icon: '🏏',
      rating: 4.8,
      downloads: '220K+',
      bonus: '₹101',
      minWithdrawal: '₹200',
      category: 'Fantasy Sports',
      verified: true
    }
  ];

  const moreApps = [
    {
      id: 'spin-wheel',
      name: 'Spin & Win',
      icon: '🎡',
      rating: 4.4,
      downloads: '60K+',
      bonus: '₹25',
      minWithdrawal: '₹50',
      category: 'Casual',
      verified: true
    },
    {
      id: 'quiz-master',
      name: 'Quiz Master',
      icon: '🧠',
      rating: 4.6,
      downloads: '120K+',
      bonus: '₹31',
      minWithdrawal: '₹70',
      category: 'Trivia',
      verified: true
    },
    {
      id: 'poker-legends',
      name: 'Poker Legends',
      icon: '♠️',
      rating: 4.7,
      downloads: '150K+',
      bonus: '₹81',
      minWithdrawal: '₹160',
      category: 'Card Game',
      verified: true
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        {/* Featured Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            <span className="text-gradient">Featured</span> Gaming Apps
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover the most popular and trusted gaming APKs with instant bonuses and verified security.
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16"
        >
          {featuredApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </motion.div>

        {/* More Apps Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center mb-12"
        >
          <h3 className="text-2xl lg:text-3xl font-bold mb-4">
            More <span className="text-gradient">Gaming Apps</span>
          </h3>
          <p className="text-muted-foreground">
            Explore additional gaming options with great rewards
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {moreApps.map((app, index) => (
            <AppCard key={app.id} app={app} index={index} />
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.6 }}
          className="text-center mt-12"
        >
          <button className="btn-secondary-gaming px-8 py-3 text-lg font-medium">
            Load More Apps
          </button>
        </motion.div>
      </div>
    </section>
  );
};

export default AppListing;