import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  Mail, 
  Phone, 
  MapPin, 
  Instagram, 
  Facebook, 
  Twitter, 
  Youtube, 
  Heart, 
  Star,
  Crown,
  Sparkles,
  ArrowUp
} from 'lucide-react'

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  const footerLinks = {
    Fashion: [
      { name: 'Luxury Brands', path: '/?category=luxury-brands' },
      { name: 'Designer Collections', path: '/?category=designer' },
      { name: 'Seasonal Styles', path: '/?category=seasonal' },
      { name: 'Holiday Fashion', path: '/?category=holiday' },
      { name: 'Formal Wear', path: '/?category=formal' }
    ],
    Resources: [
      { name: 'Style Guide', path: '/?category=style-guide' },
      { name: 'Size Chart', path: '/size-chart' },
      { name: 'Care Instructions', path: '/care-guide' },
      { name: 'Fashion Tips', path: '/?category=tips' },
      { name: 'Trend Reports', path: '/?category=trends' }
    ],
    Support: [
      { name: 'Contact Us', path: '/contact' },
      { name: 'FAQ', path: '/faq' },
      { name: 'Styling Service', path: '/styling' },
      { name: 'Returns', path: '/returns' },
      { name: 'Privacy Policy', path: '/privacy' }
    ]
  }

  const socialLinks = [
    { icon: Instagram, href: '#', label: 'Instagram', color: 'hover:text-pink-500' },
    { icon: Facebook, href: '#', label: 'Facebook', color: 'hover:text-blue-600' },
    { icon: Twitter, href: '#', label: 'Twitter', color: 'hover:text-blue-400' },
    { icon: Youtube, href: '#', label: 'Youtube', color: 'hover:text-red-500' }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  }

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden pb-20">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-500/20 to-accent-500/20 rounded-full"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-40 left-20 w-32 h-32 bg-gradient-to-br from-accent-500/20 to-primary-500/20 rounded-full"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 pt-16 relative z-10">
        {/* Main Footer Content */}
        <motion.div
          className="grid lg:grid-cols-4 md:grid-cols-2 gap-12 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            variants={itemVariants}
          >
            <Link to="/" className="inline-block mb-6">
              <motion.div
                className="flex items-center space-x-3"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <motion.img
                  src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/logo_1771568550594_0.jpg"
                  alt="JC Fashion"
                  className="h-12 w-auto brightness-110"
                  whileHover={{ rotate: [0, -5, 5, 0] }}
                  transition={{ duration: 0.6 }}
                />
                <div className="flex flex-col">
                  <span className="text-2xl font-display font-bold text-white">
                    JC Fashion
                  </span>
                  <span className="text-sm text-primary-300 font-medium">
                    Kids Luxury Blog
                  </span>
                </div>
              </motion.div>
            </Link>

            <p className="text-gray-300 leading-relaxed mb-6 text-lg">
              Your premier destination for luxury kids' fashion insights, styling tips, and the latest trends in children's designer clothing.
            </p>

            <div className="space-y-4">
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <Phone size={18} className="text-primary-400" />
                <span>000</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <Mail size={18} className="text-primary-400" />
                <span>info@jcfashion.com</span>
              </motion.div>
              
              <motion.div
                className="flex items-center space-x-3 text-gray-300"
                whileHover={{ x: 5, color: "#ffffff" }}
                transition={{ duration: 0.2 }}
              >
                <MapPin size={18} className="text-primary-400" />
                <span>Dubai, UAE</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Navigation Links */}
          {Object.entries(footerLinks).map(([category, links], index) => (
            <motion.div
              key={category}
              className="space-y-6"
              variants={itemVariants}
            >
              <div className="flex items-center space-x-2">
                <Crown size={20} className="text-primary-400" />
                <h4 className="text-xl font-display font-bold text-white">
                  {category}
                </h4>
              </div>
              
              <ul className="space-y-3">
                {links.map((link, linkIndex) => (
                  <motion.li
                    key={link.name}
                    whileHover={{ x: 5 }}
                    transition={{ duration: 0.2 }}
                  >
                    <Link
                      to={link.path}
                      className="text-gray-300 hover:text-white hover:text-primary-300 transition-colors duration-300 flex items-center space-x-2 group"
                    >
                      <Sparkles size={14} className="text-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <span>{link.name}</span>
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          ))}
        </motion.div>

        {/* Newsletter Section */}
        <motion.div
          className="bg-gradient-to-r from-primary-600/20 to-accent-600/20 backdrop-blur-sm rounded-2xl p-8 mb-12 border border-white/10"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="text-center mb-8">
            <motion.div
              className="inline-flex items-center space-x-2 mb-4"
              whileInView={{ scale: [0.95, 1.05, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Star size={24} className="text-primary-400" />
              <h3 className="text-2xl md:text-3xl font-display font-bold text-white">
                Stay Fashionably Informed
              </h3>
              <Star size={24} className="text-accent-400" />
            </motion.div>
            <p className="text-lg text-gray-300">
              Get exclusive fashion insights, styling tips, and luxury brand updates delivered to your inbox
            </p>
          </div>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 px-4 py-3 rounded-lg bg-white/10 border border-white/20 text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:ring-primary-400 focus:border-transparent backdrop-blur-sm"
            />
            <motion.button
              className="bg-gradient-to-r from-primary-500 to-accent-500 text-white px-6 py-3 rounded-lg font-semibold hover:from-primary-600 hover:to-accent-600 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Subscribe
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-gray-700 pt-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            {/* Copyright */}
            <motion.div
              className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-4"
              whileInView={{ scale: [0.95, 1.02, 1] }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <p className="text-gray-300 text-center md:text-left">
                © 2024 JC Fashion Blog. All rights reserved.
              </p>
              <div className="flex items-center space-x-2">
                <span className="text-gray-400">Criado com</span>
                <a 
                  href="https://papum.ai" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-primary-400 hover:text-primary-300 transition-colors duration-300"
                >
                  <em>Papum</em>
                </a>
                <Heart size={16} className="text-accent-400" />
              </div>
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex items-center space-x-6"
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon
                return (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`text-gray-400 ${social.color} transition-all duration-300 p-2 rounded-lg hover:bg-white/10 backdrop-blur-sm`}
                    variants={itemVariants}
                    whileHover={{ 
                      scale: 1.2,
                      rotate: 10
                    }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <IconComponent size={24} />
                    <span className="sr-only">{social.label}</span>
                  </motion.a>
                )
              })}
            </motion.div>
          </div>
        </motion.div>

        {/* Back to Top Button */}
        <motion.button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-gradient-to-r from-primary-500 to-accent-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 z-50"
          whileHover={{ 
            scale: 1.1,
            rotate: 360
          }}
          whileTap={{ scale: 0.9 }}
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.6 }}
        >
          <ArrowUp size={24} />
        </motion.button>
      </div>
    </footer>
  )
}