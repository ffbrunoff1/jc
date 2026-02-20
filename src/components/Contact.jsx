import React, { useRef, useState } from 'react'
import ReCAPTCHA from 'react-google-recaptcha'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, Clock, Star, MessageCircle, Heart, User, MessageSquare } from 'lucide-react'

export default function Contact() {
  const recaptchaRef = useRef(null)
  const [status, setStatus] = useState({ message: '', isError: false })
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
    interest: ''
  })

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prevData => ({ ...prevData, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    try {
      const token = await recaptchaRef.current.executeAsync()
      
      const payload = {
        ...formData,
        recipientEmail: "",
        token: token
      }

      const response = await fetch('https://qotdwocbcoirjlqjkjhq.supabase.co/functions/v1/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(payload)
      })

      if (response.ok) {
        setStatus({ 
          message: 'Thank you for your message! We\'ll get back to you soon.', 
          isError: false 
        })
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
          interest: ''
        })
      } else {
        throw new Error('Failed to send message')
      }
    } catch (error) {
      setStatus({ 
        message: 'Sorry, there was an error sending your message. Please try again.', 
        isError: true 
      })
    } finally {
      recaptchaRef.current.reset()
    }
  }

  const contactInfo = [
    {
      icon: Phone,
      title: 'Phone',
      details: '000',
      description: 'Call us for immediate assistance'
    },
    {
      icon: Mail,
      title: 'Email',
      details: 'info@jcfashion.com',
      description: 'Send us your fashion inquiries'
    },
    {
      icon: MapPin,
      title: 'Location',
      details: 'Dubai, UAE',
      description: 'Luxury fashion destination'
    },
    {
      icon: Clock,
      title: 'Hours',
      details: 'Mon-Fri 9AM-6PM',
      description: 'Fashion consultations available'
    }
  ]

  const interestOptions = [
    'Luxury Brand Recommendations',
    'Personal Styling Consultation',
    'Size and Fit Guidance',
    'Seasonal Collection Updates',
    'Custom Fashion Requests',
    'Other Inquiries'
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
    <section className="py-20 bg-gradient-to-br from-white via-primary-25 to-accent-25 relative overflow-hidden" id="contact">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 right-20 w-40 h-40 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-30"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 30,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-20 w-32 h-32 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full opacity-25"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-2 rounded-full mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <MessageCircle size={16} className="text-primary-600" />
            <span className="text-sm font-semibold">Get in Touch</span>
            <Heart size={16} className="text-accent-600" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Let's Talk Fashion
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Have questions about luxury kids' fashion? Need styling advice? We're here to help you create the perfect wardrobe for your little ones.
          </motion.p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Information */}
          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
          >
            <motion.div
              className="bg-gradient-to-br from-primary-600 to-accent-600 rounded-2xl p-8 text-white"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="flex items-center space-x-3 mb-6">
                <Star size={24} className="text-white" />
                <h3 className="text-2xl font-display font-bold">Fashion Experts Ready to Help</h3>
              </div>
              <p className="text-lg text-white/90 mb-8 leading-relaxed">
                Our team of luxury fashion consultants is available to assist with styling advice, size recommendations, and brand selections for your children's wardrobe.
              </p>
              
              <div className="space-y-6">
                {contactInfo.map((info, index) => {
                  const IconComponent = info.icon
                  return (
                    <motion.div
                      key={info.title}
                      className="flex items-start space-x-4 group"
                      whileHover={{ x: 10 }}
                      transition={{ duration: 0.2 }}
                    >
                      <div className="bg-white/20 backdrop-blur-sm p-3 rounded-xl group-hover:bg-white/30 transition-all duration-300">
                        <IconComponent size={20} className="text-white" />
                      </div>
                      <div>
                        <h4 className="text-lg font-semibold text-white mb-1">{info.title}</h4>
                        <p className="text-white/90 font-medium mb-1">{info.details}</p>
                        <p className="text-white/70 text-sm">{info.description}</p>
                      </div>
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>

            {/* Additional Info Cards */}
            <motion.div
              className="grid sm:grid-cols-2 gap-6"
              variants={containerVariants}
            >
              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-primary-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <MessageSquare size={24} className="text-primary-600" />
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 mb-2">Personal Styling</h4>
                <p className="text-gray-600 text-sm">
                  Get personalized fashion advice tailored to your child's style and occasions.
                </p>
              </motion.div>

              <motion.div
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-100"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-accent-100 w-12 h-12 rounded-xl flex items-center justify-center mb-4">
                  <Star size={24} className="text-accent-600" />
                </div>
                <h4 className="text-lg font-display font-bold text-gray-900 mb-2">VIP Service</h4>
                <p className="text-gray-600 text-sm">
                  Exclusive access to limited collections and priority customer support.
                </p>
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="flex items-center space-x-3 mb-8">
              <div className="bg-gradient-to-br from-primary-500 to-accent-500 w-12 h-12 rounded-xl flex items-center justify-center">
                <Send size={20} className="text-white" />
              </div>
              <div>
                <h3 className="text-2xl font-display font-bold text-gray-900">Send us a Message</h3>
                <p className="text-gray-600">We'd love to hear from you</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <div className="relative">
                    <User size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <div className="relative">
                    <Mail size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="your@email.com"
                    />
                  </div>
                </motion.div>
              </div>

              <div className="grid sm:grid-cols-2 gap-6">
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <Phone size={18} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                      placeholder="Your phone number"
                    />
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <label htmlFor="interest" className="block text-sm font-semibold text-gray-700 mb-2">
                    I'm interested in
                  </label>
                  <select
                    id="interest"
                    name="interest"
                    value={formData.interest}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 bg-white"
                  >
                    <option value="">Select your interest</option>
                    {interestOptions.map((option, index) => (
                      <option key={index} value={option}>{option}</option>
                    ))}
                  </select>
                </motion.div>
              </div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="subject" className="block text-sm font-semibold text-gray-700 mb-2">
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300"
                  placeholder="What's this about?"
                />
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.2 }}
              >
                <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-lg border-2 border-gray-200 focus:border-primary-500 focus:outline-none transition-colors duration-300 resize-vertical"
                  placeholder="Tell us how we can help you..."
                />
              </motion.div>

              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6Lc7xpsrAAAAAKh0I1boee2JN1oO8iF_yd0ihl79"
                size="invisible"
              />

              <motion.button
                type="submit"
                className="w-full btn-primary inline-flex items-center justify-center space-x-2"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Send size={18} />
                <span>Send Message</span>
              </motion.button>

              {status.message && (
                <motion.div
                  className={`p-4 rounded-lg ${
                    status.isError 
                      ? 'bg-red-50 border border-red-200 text-red-700' 
                      : 'bg-green-50 border border-green-200 text-green-700'
                  }`}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {status.message}
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  )
}