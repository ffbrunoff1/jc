import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { 
  ArrowLeft, 
  Clock, 
  Eye, 
  Heart, 
  Share2, 
  User, 
  Calendar,
  Tag,
  BookmarkPlus,
  MessageCircle,
  Star,
  ArrowRight,
  Sparkles
} from 'lucide-react'
import { mockPosts } from '../data/mockPosts'
import Footer from '../components/Footer'

export default function PostPage() {
  const { slug } = useParams()
  const [post, setPost] = useState(null)
  const [relatedPosts, setRelatedPosts] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Simulate loading
    setTimeout(() => {
      const foundPost = mockPosts.find(p => p.slug === slug)
      if (foundPost) {
        setPost(foundPost)
        // Get related posts from same category
        const related = mockPosts
          .filter(p => p.id !== foundPost.id && p.category === foundPost.category)
          .slice(0, 3)
        setRelatedPosts(related)
      }
      setIsLoading(false)
    }, 1000)
  }, [slug])

  const handleShare = async () => {
    if (navigator.share && post) {
      try {
        await navigator.share({
          title: post.title,
          text: post.excerpt,
          url: window.location.href,
        })
      } catch (error) {
        console.log('Error sharing:', error)
      }
    }
  }

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-4xl mx-auto">
            <div className="animate-pulse">
              <div className="h-8 bg-gray-200 rounded-lg mb-6 w-1/4"></div>
              <div className="h-96 bg-gray-200 rounded-2xl mb-8"></div>
              <div className="h-12 bg-gray-200 rounded-lg mb-4"></div>
              <div className="h-6 bg-gray-200 rounded mb-8 w-3/4"></div>
              <div className="space-y-4">
                {[1, 2, 3, 4, 5].map(i => (
                  <div key={i} className="h-4 bg-gray-200 rounded"></div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-display font-bold text-gray-900 mb-4">Post Not Found</h1>
          <p className="text-xl text-gray-600 mb-8">The post you're looking for doesn't exist.</p>
          <Link to="/" className="btn-primary">
            Back to Home
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="pt-24 pb-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <motion.nav
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Link 
              to="/" 
              className="inline-flex items-center space-x-2 text-primary-600 hover:text-primary-700 transition-colors duration-300 group"
            >
              <ArrowLeft size={18} className="group-hover:-translate-x-1 transition-transform duration-300" />
              <span className="font-medium">Back to Blog</span>
            </Link>
          </motion.nav>

          <div className="grid lg:grid-cols-4 gap-12">
            {/* Main Content */}
            <article className="lg:col-span-3">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                {/* Featured Image */}
                <div className="relative h-96 md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-2xl">
                  <motion.img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover"
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.7 }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                  
                  {/* Category Badge */}
                  <motion.span
                    className="absolute top-6 left-6 bg-gradient-to-r from-primary-500 to-accent-500 text-white px-4 py-2 rounded-full text-sm font-semibold"
                    whileHover={{ scale: 1.1 }}
                  >
                    {post.category}
                  </motion.span>
                </div>

                {/* Article Header */}
                <motion.header
                  className="mb-12"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.4 }}
                >
                  <h1 className="text-4xl md:text-5xl font-display font-bold text-gray-900 mb-6 leading-tight">
                    {post.title}
                  </h1>
                  
                  <p className="text-xl text-gray-600 leading-relaxed mb-8">
                    {post.excerpt}
                  </p>

                  {/* Meta Information */}
                  <div className="flex flex-wrap items-center gap-6 text-gray-600 mb-8">
                    <div className="flex items-center space-x-2">
                      <User size={18} className="text-primary-500" />
                      <span className="font-medium">{post.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar size={18} className="text-primary-500" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { 
                        year: 'numeric', 
                        month: 'long', 
                        day: 'numeric' 
                      })}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock size={18} className="text-primary-500" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Stats and Actions */}
                  <div className="flex flex-wrap items-center justify-between gap-4 p-6 bg-white rounded-xl shadow-lg border border-gray-100">
                    <div className="flex items-center space-x-6">
                      <div className="flex items-center space-x-2 text-gray-600">
                        <Eye size={18} />
                        <span className="font-medium">{post.views} views</span>
                      </div>
                      <div className="flex items-center space-x-2 text-accent-500">
                        <Heart size={18} />
                        <span className="font-medium">{post.likes} likes</span>
                      </div>
                    </div>

                    <div className="flex items-center space-x-3">
                      <motion.button
                        onClick={handleShare}
                        className="flex items-center space-x-2 px-4 py-2 bg-primary-100