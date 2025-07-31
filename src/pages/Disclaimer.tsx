import { motion } from 'framer-motion';
import { AlertTriangle, Shield, FileText, Info, AlertCircle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Disclaimer = () => {
  const disclaimers = [
    {
      icon: AlertTriangle,
      title: "Gaming and Financial Risk",
      content: [
        "All games on our platform involve financial risk and the possibility of monetary loss.",
        "Gaming should be considered entertainment, not a source of income or investment.",
        "Never wager more than you can afford to lose.",
        "Results are based on chance and skill; past performance does not guarantee future results.",
        "We strongly recommend setting spending limits and playing responsibly."
      ]
    },
    {
      icon: Shield,
      title: "APK Downloads and Installation",
      content: [
        "APK files are provided as-is without warranties of any kind.",
        "Users install APKs at their own risk and discretion.",
        "While we verify APKs for safety, we cannot guarantee complete absence of bugs or issues.",
        "Users should ensure their devices meet minimum requirements before installation.",
        "We are not responsible for device damage or data loss from APK installations.",
        "Always backup your device data before installing any new applications."
      ]
    },
    {
      icon: FileText,
      title: "Platform Availability and Performance",
      content: [
        "We strive to maintain 24/7 platform availability but cannot guarantee uninterrupted service.",
        "Scheduled maintenance may temporarily affect platform access.",
        "Network connectivity issues may impact gaming experience.",
        "We are not liable for losses due to platform downtime or technical issues.",
        "Game results and transactions during technical difficulties may be voided or delayed."
      ]
    },
    {
      icon: Info,
      title: "Third-Party Services and Links",
      content: [
        "Our platform may contain links to third-party websites and services.",
        "We are not responsible for the content or practices of third-party sites.",
        "Third-party payment processors handle financial transactions according to their own terms.",
        "External services may have different privacy policies and terms of use.",
        "We do not endorse or guarantee third-party products or services."
      ]
    },
    {
      icon: AlertCircle,
      title: "Legal Compliance and Jurisdiction",
      content: [
        "Users are responsible for ensuring gaming activities comply with local laws.",
        "Online gaming laws vary by jurisdiction and may change over time.",
        "Some regions may prohibit or restrict online gaming with real money.",
        "Users must verify the legality of online gaming in their location before participating.",
        "We reserve the right to restrict access from certain jurisdictions."
      ]
    },
    {
      title: "Age and Eligibility Requirements",
      content: [
        "Users must be at least 18 years old to participate in real money gaming.",
        "Age verification may be required for account activation and withdrawals.",
        "Users must provide accurate age and identity information during registration.",
        "We reserve the right to request additional verification documents.",
        "Accounts found to belong to minors will be immediately suspended."
      ]
    },
    {
      title: "Bonus Terms and Promotions",
      content: [
        "All bonuses and promotions are subject to specific terms and conditions.",
        "Bonus amounts may have wagering requirements before withdrawal.",
        "Promotional offers may be modified or withdrawn without prior notice.",
        "Only one bonus per user/household/IP address unless otherwise stated.",
        "Bonus abuse or fraudulent activity will result in forfeiture of bonuses and potential account closure."
      ]
    },
    {
      title: "Data Accuracy and User Responsibility",
      content: [
        "Users are responsible for providing accurate registration and profile information.",
        "Incorrect information may delay withdrawals or account verification.",
        "Users must promptly update their information when changes occur.",
        "We are not liable for issues arising from incorrect user-provided information.",
        "Account holders are responsible for all activities under their account."
      ]
    },
    {
      title: "Intellectual Property Rights",
      content: [
        "All platform content, including games, graphics, and text, are protected by intellectual property laws.",
        "Users may not copy, distribute, or create derivative works from platform content.",
        "Game developers retain rights to their respective games and content.",
        "Unauthorized use of platform content may result in legal action.",
        "User-generated content remains the property of the user but grants us usage rights."
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "JaiHo App's liability is limited to the maximum extent permitted by law.",
        "We are not liable for indirect, incidental, or consequential damages.",
        "Our maximum liability is limited to the amount paid by the user to our platform.",
        "This disclaimer applies regardless of the legal theory (contract, tort, etc.).",
        "Some jurisdictions may not allow liability limitations, so these may not apply to all users."
      ]
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
            <div className="flex justify-center mb-6">
              <div className="p-4 rounded-full bg-gradient-to-r from-primary/10 to-primary/20">
                <AlertTriangle className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Important <span className="text-gradient">Disclaimer</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Please read this disclaimer carefully before using our platform. It contains important 
              information about risks, limitations, and user responsibilities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Disclaimer Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Warning */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-6 bg-gradient-to-r from-red-500/10 to-orange-500/10 border border-red-500/20 rounded-lg"
            >
              <div className="flex items-start space-x-3">
                <AlertTriangle className="w-6 h-6 text-red-500 mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2 text-red-600 dark:text-red-400">⚠️ Important Warning</h3>
                  <p className="text-muted-foreground">
                    By using JaiHo App, you acknowledge that you have read, understood, and accept all risks and 
                    limitations outlined in this disclaimer. Gaming involves financial risk and should only be 
                    undertaken by individuals who can afford potential losses.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Disclaimer Sections */}
            <div className="space-y-8">
              {disclaimers.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-gaming p-8"
                >
                  <div className="flex items-center space-x-3 mb-6">
                    {section.icon && (
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-primary/20">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-foreground">
                      {section.title}
                    </h2>
                  </div>
                  <div className="space-y-3">
                    {section.content.map((item, itemIndex) => (
                      <div key={itemIndex} className="flex items-start space-x-3">
                        <div className="w-2 h-2 rounded-full bg-primary mt-2 flex-shrink-0"></div>
                        <p className="text-muted-foreground leading-relaxed">{item}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Responsible Gaming */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-primary/10 border border-primary/20 rounded-lg"
            >
              <div className="text-center">
                <div className="flex justify-center mb-4">
                  <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/20">
                    <Shield className="w-8 h-8 text-primary" />
                  </div>
                </div>
                <h3 className="text-xl font-bold mb-4">Responsible Gaming</h3>
                <p className="text-muted-foreground mb-6">
                  We are committed to promoting responsible gaming. If you feel that gaming is negatively 
                  impacting your life, please seek help from appropriate resources.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-sm">
                  <div className="text-center">
                    <p className="font-medium mb-1">Set Limits</p>
                    <p className="text-muted-foreground">Time and money limits</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium mb-1">Take Breaks</p>
                    <p className="text-muted-foreground">Regular gaming breaks</p>
                  </div>
                  <div className="text-center">
                    <p className="font-medium mb-1">Seek Help</p>
                    <p className="text-muted-foreground">Professional support</p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-8 p-8 glass rounded-lg text-center"
            >
              <h3 className="text-xl font-bold mb-4">Questions About This Disclaimer?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this disclaimer or need clarification on any points, 
                please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:legal@onlyjaihoapps.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:shadow-lg transition-all"
                >
                  Legal Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all"
                >
                  General Support
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Disclaimer;