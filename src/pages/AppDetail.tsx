import { motion } from 'framer-motion';
import { Download, Star, Shield, Gift, Trophy, Users, ChevronRight, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Card, CardContent } from '@/components/ui/card';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const AppDetail = () => {
  // This would normally come from route params or API
  const appData = {
    name: "Teen Patti Master",
    icon: "https://allyonoapp.in/uploads/app_icon_876354075.jpg",
    rating: 4.8,
    downloads: "5M+",
    signupBonus: "₹50",
    minWithdrawal: "₹100",
    category: "Card Game",
    size: "45 MB",
    version: "2.1.5",
    description: "Experience the ultimate Teen Patti gaming with real cash rewards. Join millions of players in India's most trusted card game platform.",
    features: [
      "🎯 Real cash gaming with instant withdrawals",
      "🎮 Multiple game modes and tournaments",
      "🏆 Daily bonuses and special rewards",
      "🔒 100% safe and secure platform",
      "👥 Play with friends and family",
      "📱 Optimized for all Android devices"
    ],
    screenshots: [
      "https://via.placeholder.com/300x600/22C55E/ffffff?text=Screenshot+1",
      "https://via.placeholder.com/300x600/16A34A/ffffff?text=Screenshot+2",
      "https://via.placeholder.com/300x600/15803D/ffffff?text=Screenshot+3"
    ],
    howToPlay: [
      {
        step: "1",
        title: "Download & Install",
        description: "Download the APK and install it on your Android device"
      },
      {
        step: "2", 
        title: "Create Account",
        description: "Sign up with your mobile number and get ₹50 bonus instantly"
      },
      {
        step: "3",
        title: "Start Playing",
        description: "Choose your game mode and start playing with real players"
      },
      {
        step: "4",
        title: "Win & Withdraw",
        description: "Win games and withdraw your earnings directly to your bank account"
      }
    ],
    faqs: [
      {
        question: "Is this app safe to download?",
        answer: "Yes, all our APKs are thoroughly tested and verified for safety. We ensure no malware or harmful content."
      },
      {
        question: "How do I claim my signup bonus?",
        answer: "The ₹50 bonus is automatically credited to your account after successful registration and mobile verification."
      },
      {
        question: "What is the minimum withdrawal amount?",
        answer: "The minimum withdrawal amount is ₹100. You can withdraw directly to your bank account or UPI."
      },
      {
        question: "Can I play with friends?",
        answer: "Yes, you can create private tables and invite friends to play together."
      },
      {
        question: "Is this legal in India?",
        answer: "Teen Patti is a game of skill and is legal in most Indian states. Please check your local laws."
      }
    ]
  };

  const stats = [
    { icon: Download, label: 'Downloads', value: appData.downloads },
    { icon: Star, label: 'Rating', value: appData.rating },
    { icon: Gift, label: 'Signup Bonus', value: appData.signupBonus },
    { icon: Trophy, label: 'Min Withdrawal', value: appData.minWithdrawal }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* App Header */}
      <section className="pt-20 pb-8 bg-gradient-to-br from-background via-background to-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex flex-col md:flex-row items-start gap-6">
              {/* App Icon */}
              <motion.div
                initial={{ scale: 0.8 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.6 }}
                className="flex-shrink-0"
              >
                <img
                  src={appData.icon}
                  alt={appData.name}
                  className="w-24 h-24 md:w-32 md:h-32 rounded-2xl shadow-lg"
                />
              </motion.div>

              {/* App Info */}
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-3">
                  <Badge variant="secondary" className="bg-primary/10 text-primary">
                    {appData.category}
                  </Badge>
                  <Badge variant="outline" className="border-green-500 text-green-500">
                    <Shield className="w-3 h-3 mr-1" />
                    Verified
                  </Badge>
                </div>
                
                <h1 className="text-3xl md:text-4xl font-bold mb-3 text-foreground">
                  {appData.name}
                </h1>
                
                <p className="text-muted-foreground mb-4 leading-relaxed">
                  {appData.description}
                </p>

                {/* App Stats */}
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">
                  {stats.map((stat, index) => (
                    <motion.div
                      key={stat.label}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4, delay: index * 0.1 }}
                      className="text-center p-3 glass rounded-lg"
                    >
                      <stat.icon className="w-5 h-5 mx-auto mb-1 text-primary" />
                      <div className="text-lg font-bold text-foreground">{stat.value}</div>
                      <div className="text-xs text-muted-foreground">{stat.label}</div>
                    </motion.div>
                  ))}
                </div>

                {/* Download Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <Button size="lg" className="btn-gaming text-lg px-8 py-4 animate-pulse">
                    <Download className="w-5 h-5 mr-2" />
                    Download APK Now
                  </Button>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Screenshots */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-6 text-center">
              Game <span className="text-gradient">Screenshots</span>
            </h2>
            <div className="flex gap-4 overflow-x-auto pb-4">
              {appData.screenshots.map((screenshot, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex-shrink-0"
                >
                  <img
                    src={screenshot}
                    alt={`Screenshot ${index + 1}`}
                    className="w-48 h-80 object-cover rounded-lg shadow-lg hover:shadow-xl transition-shadow"
                  />
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Key <span className="text-gradient">Features</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {appData.features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="flex items-center space-x-3 p-4 glass rounded-lg"
                >
                  <ChevronRight className="w-5 h-5 text-primary flex-shrink-0" />
                  <span className="text-foreground">{feature}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* How to Play */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              How to <span className="text-gradient">Play</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {appData.howToPlay.map((step, index) => (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="text-center"
                >
                  <div className="mb-4">
                    <div className="w-16 h-16 mx-auto rounded-full bg-gradient-to-r from-primary to-primary/80 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <h3 className="text-lg font-bold mb-2 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {step.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* FAQs */}
      <section className="py-12 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-2xl font-bold mb-8 text-center">
              Frequently Asked <span className="text-gradient">Questions</span>
            </h2>
            <Accordion type="single" collapsible className="space-y-4">
              {appData.faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={`item-${index}`}
                  className="glass rounded-lg px-6"
                >
                  <AccordionTrigger className="text-left font-medium">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </motion.div>
        </div>
      </section>

      {/* Download CTA */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <Card className="card-gaming p-8">
              <CardContent className="p-0">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/20">
                    <Play className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-2xl font-bold mb-4">
                  Ready to Start Playing?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Download {appData.name} now and claim your {appData.signupBonus} bonus instantly!
                </p>
                <Button size="lg" className="btn-gaming text-lg px-8 py-4 animate-pulse">
                  <Download className="w-5 h-5 mr-2" />
                  Download Now & Get {appData.signupBonus}
                </Button>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AppDetail;