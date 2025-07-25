import { motion } from 'framer-motion';
import { Shield, Lock, Eye, Database, UserCheck, AlertTriangle } from 'lucide-react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const Privacy = () => {
  const lastUpdated = "January 15, 2024";

  const sections = [
    {
      icon: Database,
      title: "Information We Collect",
      content: [
        "Personal Information: Name, email address, phone number, and date of birth during registration.",
        "Gaming Data: Game preferences, playing history, scores, and in-game transactions.",
        "Device Information: Device type, operating system, browser type, and IP address.",
        "Usage Data: How you interact with our platform, pages visited, and time spent.",
        "Location Data: General location information based on IP address for compliance purposes.",
        "Payment Information: Transaction details for deposits and withdrawals (processed securely by third-party payment processors)."
      ]
    },
    {
      icon: Eye,
      title: "How We Use Your Information",
      content: [
        "Provide and maintain our gaming platform services",
        "Process transactions and manage your account",
        "Send you important updates about your account and games",
        "Improve our services based on usage patterns and feedback",
        "Ensure platform security and prevent fraud",
        "Comply with legal requirements and regulations",
        "Send promotional offers and bonuses (with your consent)",
        "Provide customer support and resolve issues"
      ]
    },
    {
      icon: Lock,
      title: "Information Sharing and Disclosure",
      content: [
        "We do not sell, trade, or rent your personal information to third parties.",
        "Information may be shared with trusted service providers who assist in platform operations.",
        "We may disclose information when required by law or to protect our rights.",
        "Aggregated, anonymized data may be shared for analytical purposes.",
        "In case of business merger or acquisition, user data may be transferred to the acquiring entity.",
        "We share information with payment processors only for transaction processing."
      ]
    },
    {
      icon: Shield,
      title: "Data Security",
      content: [
        "We use industry-standard encryption to protect your data in transit and at rest.",
        "Access to personal information is restricted to authorized personnel only.",
        "Regular security audits and updates are performed to maintain data protection.",
        "Two-factor authentication is available for additional account security.",
        "We monitor for suspicious activities and unauthorized access attempts.",
        "Data backups are encrypted and stored securely in multiple locations."
      ]
    },
    {
      icon: UserCheck,
      title: "Your Rights and Choices",
      content: [
        "Access: You can request access to the personal information we hold about you.",
        "Correction: You can update or correct your personal information at any time.",
        "Deletion: You can request deletion of your account and associated data.",
        "Portability: You can request a copy of your data in a machine-readable format.",
        "Opt-out: You can unsubscribe from promotional emails and notifications.",
        "Consent Withdrawal: You can withdraw consent for data processing where applicable."
      ]
    },
    {
      title: "Cookies and Tracking Technologies",
      content: [
        "We use cookies to enhance your browsing experience and remember your preferences.",
        "Essential cookies are necessary for platform functionality and cannot be disabled.",
        "Analytics cookies help us understand how users interact with our platform.",
        "Advertising cookies may be used to show relevant promotions and offers.",
        "You can manage cookie preferences through your browser settings.",
        "Third-party services may use their own cookies when you interact with their content."
      ]
    },
    {
      title: "Children's Privacy",
      content: [
        "Our platform is not intended for users under the age of 18.",
        "We do not knowingly collect personal information from minors.",
        "If we discover that a minor has provided personal information, we will delete it immediately.",
        "Parents who believe their child has provided information should contact us immediately.",
        "Age verification may be required for certain platform features."
      ]
    },
    {
      title: "Data Retention",
      content: [
        "We retain personal information only as long as necessary for the purposes outlined in this policy.",
        "Account information is retained while your account is active.",
        "After account deletion, some information may be retained for legal and regulatory compliance.",
        "Transaction records are kept for the minimum period required by law.",
        "Anonymized data may be retained indefinitely for analytical purposes."
      ]
    },
    {
      title: "International Data Transfers",
      content: [
        "Your information may be processed and stored outside your country of residence.",
        "We ensure appropriate safeguards are in place for international data transfers.",
        "Data processing agreements are established with international service providers.",
        "We comply with applicable data protection laws in all jurisdictions where we operate."
      ]
    },
    {
      title: "Changes to This Privacy Policy",
      content: [
        "We may update this privacy policy from time to time to reflect changes in our practices or legal requirements.",
        "Material changes will be communicated via email or platform notifications.",
        "The updated policy will be posted on this page with a new 'Last Updated' date.",
        "Continued use of the platform after changes constitutes acceptance of the updated policy.",
        "We encourage you to review this policy periodically."
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
                <Shield className="w-12 h-12 text-primary" />
              </div>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Privacy <span className="text-gradient">Policy</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              Your privacy is important to us. This policy explains how we collect, use, and protect your information.
            </p>
            <div className="flex items-center justify-center space-x-2 text-muted-foreground">
              <Lock className="w-4 h-4" />
              <span>Last updated: {lastUpdated}</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Privacy Content */}
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
                <AlertTriangle className="w-6 h-6 text-primary mt-1" />
                <div>
                  <h3 className="font-bold text-lg mb-2">Our Commitment to Your Privacy</h3>
                  <p className="text-muted-foreground">
                    Yono App is committed to protecting your privacy and ensuring the security of your personal information. 
                    This privacy policy describes how we collect, use, and safeguard your data when you use our platform.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Privacy Sections */}
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
                  <div className="flex items-center space-x-3 mb-6">
                    {section.icon && (
                      <div className="p-2 rounded-lg bg-gradient-to-r from-primary/10 to-primary/20">
                        <section.icon className="w-6 h-6 text-primary" />
                      </div>
                    )}
                    <h2 className="text-2xl font-bold text-foreground">
                      {index + 1}. {section.title}
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
                  <UserCheck className="w-8 h-8 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-bold mb-4">Privacy Questions or Concerns?</h3>
              <p className="text-muted-foreground mb-6">
                If you have any questions about this Privacy Policy or how we handle your data, 
                please don't hesitate to contact our privacy team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="mailto:privacy@yonoapp.com"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-gradient-to-r from-primary to-primary/80 text-white font-medium hover:shadow-lg transition-all"
                >
                  Email Privacy Team
                </a>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-primary text-primary font-medium hover:bg-primary/10 transition-all"
                >
                  Contact Support
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

export default Privacy;