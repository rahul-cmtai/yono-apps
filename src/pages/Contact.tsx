import { motion } from 'framer-motion';
import { Mail, MessageCircle, Phone, MapPin, Clock, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Contact = () => {
  const contactInfo = [
    {
      icon: Mail,
      title: 'Email Support',
      info: 'support@yonoapp.com',
      description: 'Get help within 24 hours',
      action: 'mailto:support@yonoapp.com'
    },
    {
      icon: MessageCircle,
      title: 'Telegram Support',
      info: '@YonoAppSupport',
      description: 'Instant help and community',
      action: 'https://telegram.dog/+LQ8-wB4AMUtkMjc1'
    },
    // {
    //   icon: Phone,
    //   title: 'WhatsApp',
    //   info: '+91 9876543210',
    //   description: 'Quick assistance',
    //   action: 'https://wa.me/919876543210'
    // },
    {
      icon: Clock,
      title: 'Support Hours',
      info: '24/7 Available',
      description: 'Always here to help',
      action: null
    }
  ];

  const faqs = [
    {
      question: 'How do I download APKs safely?',
      answer: 'All our APKs are verified and tested. Simply click the download button on any game page and follow the installation instructions.'
    },
    {
      question: 'How do I claim my ₹51 signup bonus?',
      answer: 'The bonus is automatically credited to your account after successful registration and first game installation.'
    },
    {
      question: 'Is it safe to play these games?',
      answer: 'Yes, all games on our platform are thoroughly tested for security and safety. We only feature verified and trusted gaming APKs.'
    },
    {
      question: 'How do I withdraw my winnings?',
      answer: 'You can withdraw your winnings directly to your bank account or UPI. Minimum withdrawal varies by game, typically ₹100.'
    },
    {
      question: 'Can I play multiple games?',
      answer: 'Absolutely! You can download and play multiple games from our platform and earn bonuses from each one.'
    },
    {
      question: 'What if I face technical issues?',
      answer: 'Contact our 24/7 support team via Telegram, WhatsApp, or email. We\'ll resolve your issues quickly.'
    }
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
              Get in <span className="text-green-500">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Need help or have questions? Our 24/7 support team is here to assist you 
              with any queries about gaming, bonuses, or technical issues.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Cards */}
      <section className="py-20">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((contact, index) => (
              <motion.div
                key={contact.title}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <Card className="h-full card-gaming hover:scale-105 transition-transform">
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-green-500/20">
                        <contact.icon className="w-6 h-6 text-green-500" />
                      </div>
                    </div>
                    <h3 className="font-bold text-lg mb-2">{contact.title}</h3>
                    <p className="text-green-500 font-medium mb-1">{contact.info}</p>
                    <p className="text-sm text-muted-foreground mb-4">{contact.description}</p>
                    {contact.action && (
                      <Button 
                        size="sm" 
                        className="bg-green-500 hover:bg-green-600 text-white"
                        onClick={() => window.open(contact.action, '_blank')}
                      >
                        Contact Now
                      </Button>
                    )}
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card className="card-gaming">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold">
                    Send us a Message
                  </CardTitle>
                  <p className="text-muted-foreground">
                    Fill out the form below and we'll get back to you within 24 hours.
                  </p>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Input placeholder="Your Name" className="glass" />
                    <Input placeholder="Your Email" type="email" className="glass" />
                  </div>
                  <Input placeholder="Subject" className="glass" />
                  <Textarea 
                    placeholder="Your Message" 
                    rows={6} 
                    className="glass"
                  />
                  <Button className="bg-green-500 hover:bg-green-600 text-white w-full">
                    <Send className="w-4 h-4 mr-2" />
                    Send Message
                  </Button>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="space-y-6">
                <div>
                  <h3 className="text-2xl font-bold mb-4">
                    Quick <span className="text-green-500">Support</span>
                  </h3>
                  <p className="text-muted-foreground mb-6">
                    For fastest support, join our Telegram channel where our team 
                    and community can help you instantly.
                  </p>
                  <Button 
                    className="bg-green-500 hover:bg-green-600 text-white mb-4"
                    onClick={() => window.open('https://telegram.dog/+LQ8-wB4AMUtkMjc1', '_blank')}
                  >
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Join Telegram Support
                  </Button>
                </div>

                <Card className="glass">
                  <CardContent className="p-6">
                    <div className="flex items-center space-x-3 mb-4">
                      <MapPin className="w-5 h-5 text-green-500" />
                      <div>
                        <h4 className="font-medium">Location</h4>
                        <p className="text-sm text-muted-foreground">Mumbai, India</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      <Clock className="w-5 h-5 text-green-500" />
                      <div>
                        <h4 className="font-medium">Response Time</h4>
                        <p className="text-sm text-muted-foreground">Within 2-4 hours</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
                          <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Frequently Asked <span className="text-green-500">Questions</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Find quick answers to common questions about our platform
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto"
          >
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
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

      <Footer />
    </div>
  );
};

export default Contact;