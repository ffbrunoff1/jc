import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Eye, Heart, ArrowRight, Sparkles, Star } from 'lucide-react'

export default function Hero() {
  const featuredPosts = [
    {
      id: 1,
      slug: 'luxury-holiday-collection-2024',
      title: 'Luxury Holiday Collection 2024: Elegant Styles for Little Ones',
      excerpt: 'Discover the most exquisite holiday pieces that combine comfort with sophisticated design. Perfect for special occasions and memorable moments.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/1771568541703_iy9rxqc2199_christmas_frock.jpg',
      category: 'Holiday Fashion',
      readTime: '5 min read',
      views: 1200,
      likes: 89,
      date: '2024-12-15',
      featured: true
    },
    {
      id: 2,
      slug: 'designer-accessories-guide',
      title: 'Designer Accessories That Complete Every Look',
      excerpt: 'From elegant caps to statement pieces, learn how the right accessories can transform any outfit into a fashion statement.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/1771568541009_o8c5cb56sf_cap.jpg',
      category: 'Accessories',
      readTime: '3 min read',
      views: 856,
      likes: 64,
      date: '2024-12-12'
    },
    {
      id: 3,
      slug: 'formal-wear-boys-guide',
      title: 'Formal Wear for Boys: Sophisticated Style Made Simple',
      excerpt: 'Navigate the world of boys formal fashion with our comprehensive guide to creating polished, age-appropriate looks.',
      image: 'https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/public/user-files/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/1771568540295_poriqaiv2yd_boy_dress.jpg',
      category: 'Boys Fashion',
      readTime: '4 min read',
      views: 672,
      likes: 45,
      date: '2024-12-10'
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

  const heroVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="relative pt-24 pb-12 bg-gradient-to-br from-primary-50 via-white to-accent-50 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-20 left-10 w-32 h-32 bg-gradient-to-br from-primary-200 to-accent-200 rounded-full opacity-20"
          animate={{ 
            rotate: 360,
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.3, 0.2]
          }}
          transition={{ 
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-24 h-24 bg-gradient-to-br from-accent-200 to-primary-200 rounded-full opacity-20"
          animate={{ 
            rotate: -360,
            scale: [1, 1.3, 1],
            opacity: [0.2, 0.4, 0.2]
          }}
          transition={{ 
            duration: 15,
            repeat: Infinity,
            ease: "linear"
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/4 w-16 h-16 bg-gradient-to-br from-primary-300 to-accent-300 rounded-full opacity-15"
          animate={{ 
            y: [0, -30, 0],
            x: [0, 20, 0],
            opacity: [0.15, 0.25, 0.15]
          }}
          transition={{ 
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Header Section */}
        <motion.div
          className="text-center mb-16"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.div
            className="inline-flex items-center space-x-2 bg-gradient-to-r from-primary-100 to-accent-100 text-primary-700 px-6 py-2 rounded-full mb-6"
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <Sparkles size={16} className="text-primary-600" />
            <span className="text-sm font-semibold">Latest Fashion Insights</span>
            <Star size={16} className="text-accent-600" />
          </motion.div>

          <motion.h1 
            className="text-4xl md:text-5xl lg:text-6xl font-display font-bold mb-6 bg-gradient-to-r from-primary-700 via-primary-800 to-accent-700 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Junior Couture
          </motion.h1>
          
          <motion.p 
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed"
            variants={itemVariants}
          >
            Where luxury meets childhood. Discover the finest in kids' fashion, from designer pieces to style guides that inspire sophisticated yet playful looks.
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
            variants={itemVariants}
          >
            <Link
              to="/?category=latest"
              className="btn-primary inline-flex items-center space-x-2"
            >
              <span>Explore Latest Posts</span>
              <ArrowRight size={18} />
            </Link>
            <Link
              to="/?category=trending"
              className="btn-secondary inline-flex items-center space-x-2"
            >
              <Star size={18} />
              <span>Trending Now</span>
            </Link>
          </motion.div>
        </motion.div>

        {/* Featured Posts Grid */}
        <motion.div
          className="grid grid-cols-1 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Main Featured Post */}
          <motion.article
            className="lg:col-span-2"
            variants={heroVariants}
          >
            <Link to={`/post/${featuredPosts[0].slug}`} className="block group">
              <div className="relative overflow-hidden rounded-2xl bg-white shadow-xl border border-gray-100 transition-all duration-500 group-hover:shadow-2xl group-hover:scale-[1.02]">
                <div className="relative h-80 md:h-96 overflow-hidden">
                  <motion.img
                    src={featuredPosts[0].image}
                    alt={featuredPosts[0].title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    whileHover={{ scale: 1.1 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Featured Badge */}
                  <motion.div
                    className="absolute top-4 left-4 bg-gradient-to-r from-accent-500 to-accent-600 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center space-x-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Star size={14} />
                    <span>Featured</span>
                  </motion.div>

                  {/* Category */}
                  <motion.span
                    className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary-700 px-3 py-1 rounded-full text-xs font-semibold"
                    whileHover={{ scale: 1.05 }}
                  >
                    {featuredPosts[0].category}
                  </motion.span>
                </div>

                <div className="p-8">
                  <motion.h2 
                    className="text-2xl md:text-3xl font-display font-bold text-gray-900 mb-4 group-hover:text-primary-700 transition-colors duration-300"
                    whileHover={{ x: 5 }}
                  >
                    {featuredPosts[0].title}
                  </motion.h2>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">
                    {featuredPosts[0].excerpt}
                  </p>

                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Clock size={16} />
                        <span className="text-sm">{featuredPosts[0].readTime}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-gray-500">
                        <Eye size={16} />
                        <span className="text-sm">{featuredPosts[0].views.toLocaleString()}</span>
                      </div>
                      <div className="flex items-center space-x-2 text-accent-500">
                        <Heart size={16} />
                        <span className="text-sm">{featuredPosts[0].likes}</span>
                      </div>
                    </div>

                    <motion.div
                      className="flex items-center space-x-2 text-primary-600 group-hover:text-primary-700 transition-colors duration-300"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-sm font-semibold">Read More</span>
                      <ArrowRight size={16} />
                    </motion.div>
                  </div>
                </div>
              </div>
            </Link>
          </motion.article>

          {/* Secondary Featured Posts */}
          <div className="space-y-6">
            {featuredPosts.slice(1).map((post, index) => (
              <motion.article
                key={post.id}
                className="group"
                variants={itemVariants}
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={`/post/${post.slug}`} className="block">
                  <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-300 group-hover:shadow-xl">
                    <div className="relative h-48 overflow-hidden">
                      <motion.img
                        src={post.image}
                        alt={post.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                      
                      <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm text-primary-700 px-2 py-1 rounded-lg text-xs font-semibold">
                        {post.category}
                      </span>
                    </div>

                    <div className="p-6">
                      <h3 className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2">
                        {post.title}
                      </h3>
                      
                      <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">
                        {post.excerpt}
                      </p>

                      <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1 text-gray-500">
                            <Clock size={14} />
                            <span className="text-xs">{post.readTime}</span>
                          </div>
                          <div className="flex items-center space-x-1 text-accent-500">
                            <Heart size={14} />
                            <span className="text-xs">{post.likes}</span>
                          </div>
                        </div>

                        <motion.div
                          className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300"
                          whileHover={{ x: 3 }}
                        >
                          <ArrowRight size={16} />
                        </motion.div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.article>
            ))}
          </div>
        </motion.div>

        {/* Newsletter Signup */}
        <motion.div
          className="mt-20 bg-gradient-to-r from-primary-600 to-accent-600 rounded-2xl p-8 md:p-12 text-center text-white"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.div
            className="max-w-2xl mx-auto"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h3 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Stay in Style
            </h3>
            <p className="text-xl text-white/90 mb-8">
              Get the latest in kids luxury fashion delivered to your inbox. No spam, just style.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-white/70 focus:outline-none focus:ring-2 focus:ring-white/50 backdrop-blur-sm"
              />
              <motion.button
                className="bg-white text-primary-600 px-6 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}