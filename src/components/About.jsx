import React from 'react'
import { motion } from 'framer-motion'
import { Star, Heart, Award, Users, Sparkles, Crown, Zap, Target } from 'lucide-react'

export default function About() {
  const stats = [
    { icon: Star, number: '500+', label: 'Luxury Brands Featured' },
    { icon: Users, number: '50K+', label: 'Fashion-Forward Families' },
    { icon: Award, number: '25+', label: 'Industry Awards' },
    { icon: Heart, number: '95%', label: 'Customer Satisfaction' }
  ]

  const values = [
    {
      icon: Crown,
      title: 'Luxury Standard',
      description: 'We curate only the finest luxury pieces that meet our exacting standards for quality, design, and craftsmanship.'
    },
    {
      icon: Sparkles,
      title: 'Style Innovation',
      description: 'Staying ahead of trends while maintaining timeless elegance, we bring you the latest in children\'s high fashion.'
    },
    {
      icon: Target,
      title: 'Perfect Fit',
      description: 'Expert sizing guides and personalized recommendations ensure every piece fits beautifully and comfortably.'
    },
    {
      icon: Zap,
      title: 'Fashion Forward',
      description: 'From runway inspirations to everyday elegance, we translate adult fashion sensibilities into age-appropriate styles.'
    }
  ]

  const team = [
    {
      name: 'Steve Junior',
      role: 'Fashion Director & Style Curator',
      description: 'With over a decade in luxury children\'s fashion, Steve brings an unparalleled eye for style and quality to every piece we feature.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/1771568542671_hge99wl236_clothesline-804812_1280.jpg',
      specialties: ['Luxury Brands', 'Trend Forecasting', 'Style Consulting']
    }
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1
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
    <section className="py-20 bg-white relative overflow-hidden" id="about">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-50"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
          }}
          transition={{ 
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 left-10 w-24 h-24 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full opacity-40"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
          }}
          transition={{ 
            duration: 20,
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
            <Crown size={16} className="text-primary-600" />
            <span className="text-sm font-semibold">About Junior Couture</span>
            <Sparkles size={16} className="text-accent-600" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Where Luxury Meets Childhood
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Junior Couture is your premier destination for stylish and high-quality kids' clothing. We specialize in curated collections from international luxury and designer brands, bringing you the finest in children's fashion.
          </motion.p>
        </motion.div>

        {/* Stats Section */}
        <motion.div
          className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {stats.map((stat, index) => {
            const IconComponent = stat.icon
            return (
              <motion.div
                key={stat.label}
                className="text-center group"
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-gradient-to-br from-primary-50 to-accent-50 w-20 h-20 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:from-primary-100 group-hover:to-accent-100 transition-all duration-300">
                  <IconComponent size={32} className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                </div>
                <motion.div
                  className="text-3xl md:text-4xl font-display font-bold text-gray-900 mb-2"
                  whileInView={{ 
                    scale: [1, 1.1, 1],
                    color: ["#1f2937", "#f97316", "#1f2937"]
                  }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  {stat.number}
                </motion.div>
                <p className="text-gray-600 font-medium">{stat.label}</p>
              </motion.div>
            )
          })}
        </motion.div>

        {/* Mission & Vision */}
        <motion.div
          className="grid lg:grid-cols-2 gap-16 mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-primary-600 to-accent-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Target size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-900">Our Mission</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To redefine children's fashion by making luxury accessible and age-appropriate. We believe every child deserves to feel confident and stylish, whether they're at a special occasion or simply playing in the park.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Through careful curation and expert styling advice, we help parents navigate the world of high-end children's fashion with confidence and ease.
            </p>
          </motion.div>

          <motion.div
            className="space-y-6"
            variants={itemVariants}
          >
            <div className="bg-gradient-to-br from-accent-600 to-primary-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
              <Star size={28} className="text-white" />
            </div>
            <h3 className="text-3xl font-display font-bold text-gray-900">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              To become the global leader in luxury children's fashion curation, setting standards for quality, style, and customer experience in the industry.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              We envision a future where every child can express their unique personality through beautifully crafted, ethically sourced, and thoughtfully designed clothing.
            </p>
          </motion.div>
        </motion.div>

        {/* Values Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Our Values
          </motion.h3>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon
              return (
                <motion.div
                  key={value.title}
                  className="bg-white rounded-xl p-8 shadow-lg border border-gray-100 text-center group hover:shadow-xl transition-all duration-300"
                  variants={itemVariants}
                  whileHover={{ 
                    scale: 1.05,
                    rotateY: 10,
                  }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="bg-gradient-to-br from-primary-100 to-accent-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:from-primary-200 group-hover:to-accent-200 transition-all duration-300">
                    <IconComponent size={28} className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                  </div>
                  <h4 className="text-xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300">
                    {value.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              )
            })}
          </div>
        </motion.div>

        {/* Team Section */}
        <motion.div
          className="mb-20"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h3 
            className="text-3xl md:text-4xl font-display font-bold text-center text-gray-900 mb-12"
            variants={itemVariants}
          >
            Meet Our Expert
          </motion.h3>

          {team.map((member, index) => (
            <motion.div
              key={member.name}
              className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
              variants={itemVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <div className="grid lg:grid-cols-2 gap-8 items-center">
                <motion.div
                  className="relative group"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.3 }}
                >
                  <div className="aspect-square rounded-2xl overflow-hidden bg-gradient-to-br from-primary-200 to-accent-200 p-1">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover rounded-xl group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="absolute -top-4 -right-4 bg-gradient-to-br from-accent-500 to-primary-500 text-white p-3 rounded-full">
                    <Crown size={24} />
                  </div>
                </motion.div>

                <div className="space-y-6">
                  <div>
                    <h4 className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-2">
                      {member.name}
                    </h4>
                    <p className="text-lg text-primary-600 font-semibold mb-4">
                      {member.role}
                    </p>
                    <p className="text-gray-700 text-lg leading-relaxed">
                      {member.description}
                    </p>
                  </div>

                  <div>
                    <h5 className="text-lg font-semibold text-gray-900 mb-3">Specialties:</h5>
                    <div className="flex flex-wrap gap-3">
                      {member.specialties.map((specialty, idx) => (
                        <motion.span
                          key={specialty}
                          className="bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-4 py-2 rounded-full text-sm font-semibold"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          {specialty}
                        </motion.span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Call to Action */}
        <motion.div
          className="text-center bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="max-w-3xl mx-auto"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Ready to Elevate Your Child's Style?
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Join thousands of fashion-forward families who trust Junior Couture for their luxury children's fashion needs.
            </p>
            <motion.button
              className="bg-white text-primary-600 px-8 py-4 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300 inline-flex items-center space-x-2"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Sparkles size={20} />
              <span>Start Shopping</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}