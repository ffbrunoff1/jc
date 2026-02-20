import React from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Clock, Eye, Heart, ArrowRight, Calendar, Tag, User, Star, TrendingUp, Filter } from 'lucide-react'
import { mockPosts } from '../data/mockPosts'

export default function Services() {
  const categories = [
    { name: 'All Posts', slug: 'all', count: mockPosts.length, color: 'primary' },
    { name: 'Holiday Fashion', slug: 'holiday-fashion', count: 8, color: 'accent' },
    { name: 'Designer Brands', slug: 'designer-brands', count: 12, color: 'secondary' },
    { name: 'Style Guides', slug: 'style-guides', count: 6, color: 'primary' },
    { name: 'Accessories', slug: 'accessories', count: 5, color: 'accent' },
    { name: 'Boys Fashion', slug: 'boys-fashion', count: 4, color: 'secondary' }
  ]

  const featuredTags = [
    'Luxury Fashion', 'Designer Kids', 'Holiday Style', 'Formal Wear', 
    'Casual Chic', 'Seasonal Trends', 'Brand Reviews', 'Style Tips'
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

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  }

  return (
    <section className="py-20 bg-gray-50" id="posts">
      <div className="container mx-auto px-4">
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
            <Star size={16} className="text-primary-600" />
            <span className="text-sm font-semibold">Fashion Blog Posts</span>
            <TrendingUp size={16} className="text-accent-600" />
          </motion.div>

          <motion.h2 
            className="text-4xl md:text-5xl font-display font-bold mb-6 bg-gradient-to-r from-primary-700 to-accent-700 bg-clip-text text-transparent"
            variants={itemVariants}
          >
            Latest Fashion Insights
          </motion.h2>
          
          <motion.p 
            className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
            variants={itemVariants}
          >
            Discover the latest trends, styling tips, and luxury brand reviews in our comprehensive fashion blog. From seasonal collections to timeless pieces.
          </motion.p>
        </motion.div>

        {/* Categories Filter */}
        <motion.div
          className="mb-12"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.div
            className="flex items-center justify-center mb-6"
            variants={itemVariants}
          >
            <div className="flex items-center space-x-2 text-gray-600">
              <Filter size={20} />
              <span className="text-lg font-semibold">Browse Categories</span>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category, index) => (
              <motion.div
                key={category.slug}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/?category=${category.slug}`}
                  className={`inline-flex items-center space-x-2 px-6 py-3 rounded-full border-2 transition-all duration-300 ${
                    category.color === 'primary' 
                      ? 'border-primary-200 bg-primary-50 text-primary-700 hover:bg-primary-100 hover:border-primary-300'
                      : category.color === 'accent'
                      ? 'border-accent-200 bg-accent-50 text-accent-700 hover:bg-accent-100 hover:border-accent-300'
                      : 'border-secondary-200 bg-secondary-50 text-secondary-700 hover:bg-secondary-100 hover:border-secondary-300'
                  }`}
                >
                  <span className="font-semibold">{category.name}</span>
                  <span className={`text-xs px-2 py-1 rounded-full ${
                    category.color === 'primary' ? 'bg-primary-200 text-primary-800'
                      : category.color === 'accent' ? 'bg-accent-200 text-accent-800'
                      : 'bg-secondary-200 text-secondary-800'
                  }`}>
                    {category.count}
                  </span>
                </Link>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Blog Posts Grid */}
        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {mockPosts.slice(0, 6).map((post, index) => (
            <motion.article
              key={post.id}
              className="group"
              variants={cardVariants}
              whileHover={{ scale: 1.02 }}
              transition={{ duration: 0.3 }}
            >
              <Link to={`/post/${post.slug}`} className="block">
                <div className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden transition-all duration-500 group-hover:shadow-2xl">
                  <div className="relative h-64 overflow-hidden">
                    <motion.img
                      src={post.image}
                      alt={post.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      whileHover={{ scale: 1.1 }}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                    
                    {/* Category Badge */}
                    <motion.span
                      className="absolute top-4 left-4 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-3 py-1 rounded-full text-xs font-semibold"
                      whileHover={{ scale: 1.1 }}
                    >
                      {post.category}
                    </motion.span>

                    {/* Date */}
                    <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-gray-700 px-3 py-1 rounded-full text-xs font-semibold flex items-center space-x-1">
                      <Calendar size={12} />
                      <span>{new Date(post.date).toLocaleDateString()}</span>
                    </div>
                  </div>

                  <div className="p-6">
                    <motion.h3 
                      className="text-xl font-display font-bold text-gray-900 mb-3 group-hover:text-primary-700 transition-colors duration-300 line-clamp-2"
                      whileHover={{ x: 5 }}
                    >
                      {post.title}
                    </motion.h3>
                    
                    <p className="text-gray-600 mb-6 text-sm leading-relaxed line-clamp-3">
                      {post.excerpt}
                    </p>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-2 mb-4">
                      {post.tags.slice(0, 2).map((tag, tagIndex) => (
                        <span
                          key={tagIndex}
                          className="inline-flex items-center space-x-1 bg-gray-100 text-gray-600 px-2 py-1 rounded-lg text-xs"
                        >
                          <Tag size={10} />
                          <span>{tag}</span>
                        </span>
                      ))}
                    </div>

                    {/* Meta Info */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1 text-gray-500">
                          <User size={14} />
                          <span className="text-xs">{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Clock size={14} />
                          <span className="text-xs">{post.readTime}</span>
                        </div>
                      </div>

                      <div className="flex items-center space-x-3">
                        <div className="flex items-center space-x-1 text-gray-500">
                          <Eye size={14} />
                          <span className="text-xs">{post.views}</span>
                        </div>
                        <div className="flex items-center space-x-1 text-accent-500">
                          <Heart size={14} />
                          <span className="text-xs">{post.likes}</span>
                        </div>
                      </div>
                    </div>

                    {/* Read More */}
                    <motion.div
                      className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between"
                      whileHover={{ x: 5 }}
                    >
                      <span className="text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-300">
                        Read Full Article
                      </span>
                      <ArrowRight size={16} className="text-primary-600 group-hover:text-primary-700 transition-colors duration-300" />
                    </motion.div>
                  </div>
                </div>
              </Link>
            </motion.article>
          ))}
        </motion.div>

        {/* Load More Button */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.button
            className="btn-primary inline-flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span>Load More Posts</span>
            <TrendingUp size={18} />
          </motion.button>
        </motion.div>

        {/* Popular Tags */}
        <motion.div
          className="bg-gradient-to-br from-primary-50 to-accent-50 rounded-2xl p-8 md:p-12"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            className="text-center mb-8"
            whileInView={{ scale: [0.95, 1.02, 1] }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h3 className="text-3xl font-display font-bold text-gray-900 mb-4">
              Popular Tags
            </h3>
            <p className="text-lg text-gray-600">
              Explore our most popular fashion topics and trends
            </p>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {featuredTags.map((tag, index) => (
              <motion.div
                key={tag}
                variants={itemVariants}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  to={`/?tag=${encodeURIComponent(tag.toLowerCase().replace(' ', '-'))}`}
                  className="inline-flex items-center space-x-2 bg-white text-gray-700 px-4 py-2 rounded-full font-medium hover:bg-primary-50 hover:text-primary-700 transition-all duration-300 shadow-sm border border-gray-200 hover:border-primary-200"
                >
                  <Tag size={14} />
                  <span>{tag}</span>
                </Link>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="text-center mt-8"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.8, duration: 0.6 }}
          >
            <Link
              to="/?tags=all"
              className="text-primary-600 hover:text-primary-700 font-semibold inline-flex items-center space-x-2 transition-colors duration-300"
            >
              <span>View All Tags</span>
              <ArrowRight size={16} />
            </Link>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}