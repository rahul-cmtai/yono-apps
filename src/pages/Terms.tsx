import { motion } from 'framer-motion';
import { Shield, AlertCircle, FileText, Clock } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Terms = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      title: "Acceptance of Terms",
      content: [
        "By accessing and using Yono App platform, you accept and agree to be bound by these Terms and Conditions.",
        "If you do not agree to abide by the above, please do not use this service.",
        "These terms apply to all visitors, users, and others who access or use the service."
      ]
    },
    {
      title: "Use License",
      content: [
        "Permission is granted to temporarily download one copy of the materials on Yono App's website for personal, non-commercial transitory viewing only.",
        "This is the grant of a license, not a transfer of title, and under this license you may not:",
        "• Modify or copy the materials",
        "• Use the materials for any commercial purpose or for any public display",
        "• Attempt to reverse engineer any software contained on the website",
        "• Remove any copyright or other proprietary notations from the materials"
      ]
    },
    {
      title: "Gaming and APK Downloads",
      content: [
        "All APK files provided through our platform are verified and tested for security.",
        "Users must be 18 years or older to participate in gaming activities with real money transactions.",
        "Yono App does not guarantee winnings or profits from gaming activities.",
        "Users are responsible for complying with local laws regarding online gaming.",
        "APK downloads are provided as-is, and users install them at their own risk."
      ]
    },
    {
      title: "User Accounts and Registration",
      content: [
        "Users must provide accurate and complete information during registration.",
        "Each user is allowed only one account on the platform.",
        "Users are responsible for maintaining the confidentiality of their account credentials.",
        "Yono App reserves the right to suspend or terminate accounts that violate these terms.",
        "Users must verify their identity for bonus claims and withdrawals."
      ]
    },
    {
      title: "Bonuses and Rewards",
      content: [
        "Signup bonuses are subject to terms and conditions specific to each promotion.",
        "Bonuses may have wagering requirements before withdrawal.",
        "Yono App reserves the right to modify or cancel bonus offers at any time.",
        "Bonus abuse or fraudulent activity will result in account suspension.",
        "Withdrawal limits and processing times may apply to bonus winnings."
      ]
    },
    {
      title: "Privacy and Data Protection",
      content: [
        "We collect and use personal information as described in our Privacy Policy.",
        "User data is protected using industry-standard security measures.",
        "We do not sell or share personal information with third parties without consent.",
        "Users have the right to request deletion of their personal data.",
        "Cookies and similar technologies may be used to enhance user experience."
      ]
    },
    {
      title: "Prohibited Activities",
      content: [
        "Creating multiple accounts to claim bonuses multiple times",
        "Using automated tools or bots to interact with the platform",
        "Attempting to hack, reverse engineer, or exploit the platform",
        "Sharing or distributing copyrighted content without permission",
        "Engaging in fraudulent activities or money laundering",
        "Harassing other users or platform staff"
      ]
    },
    {
      title: "Limitation of Liability",
      content: [
        "Yono App shall not be liable for any damages arising from the use of this platform.",
        "We do not guarantee uninterrupted or error-free service.",
        "Users acknowledge that gaming involves risk of financial loss.",
        "The platform is provided 'as is' without any warranties.",
        "Our maximum liability is limited to the amount paid by the user to the platform."
      ]
    },
    {
      title: "Modifications to Terms",
      content: [
        "Yono App reserves the right to revise these terms at any time without notice.",
        "Users will be notified of significant changes via email or platform notifications.",
        "Continued use of the platform after changes constitutes acceptance of new terms.",
        "Users are encouraged to review these terms periodically."
      ]
    },
    {
      title: "Governing Law",
      content: [
        "These terms are governed by the laws of India.",
        "Any disputes will be resolved in the courts of Mumbai, India.",
        "Users agree to submit to the jurisdiction of Indian courts.",
        "If any provision of these terms is found unenforceable, other provisions remain in effect."
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
                <FileText className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Terms & <span className="text-gradient">Conditions</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Please read these terms and conditions carefully before using our platform.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Clock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Terms Content */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* Important Notice */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 p-6 glass rounded-lg border-l-4 border-primary"
            >
              <div className="flex items-start space-x-3">
                <AlertCircle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Important Notice</h3>
                  <p className="text-muted-foreground">
                    These Terms and Conditions constitute a legally binding agreement between you and Yono App. 
                    By using our platform, you acknowledge that you have read, understood, and agree to be bound by these terms.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Terms Sections */}
            <div className="space-y-8">
              {sections.map((section, index) => (
                <motion.div
                  key={section.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="card-gaming p-8"
                >
                  <h2 className="text-2xl font-bold mb-6 text-foreground">
                    {index + 1}. {section.title}
                  </h2>
                  <div className="space-y-4">
                    {section.content.map((paragraph, pIndex) => (
                      <p key={pIndex} className="text-muted-foreground leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mt-12 p-8 glass rounded-lg text-center"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 rounded-full bg-gradient-to-r from-primary/10 to-primary/20">
                  <Shield className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Questions About These Terms?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about these Terms and Conditions, please contact our support team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:support@yonoapp.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:shadow-lg transition-all"
                >
                  Email Support
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all"
                >
                  Contact Page
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

export default Terms;