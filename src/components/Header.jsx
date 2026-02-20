import React, { useState, useEffect } from 'react'
import { Link, useNavigate, useLocation } from 'react-router-dom'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X, Search, Home, User, Mail, BookOpen, Heart, ShoppingBag, Star } from 'lucide-react'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [searchTerm, setSearchTerm] = useState('')
  const navigate = useNavigate()
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleSearch = (e) => {
    e.preventDefault()
    if (searchTerm.trim()) {
      navigate(`/?search=${encodeURIComponent(searchTerm)}`)
      setSearchTerm('')
      setIsOpen(false)
    }
  }

  const menuItems = [
    { name: 'Home', icon: Home, path: '/' },
    { name: 'Fashion Tips', icon: Star, path: '/?category=fashion-tips' },
    { name: 'Luxury Brands', icon: ShoppingBag, path: '/?category=luxury-brands' },
    { name: 'Style Guide', icon: BookOpen, path: '/?category=style-guide' },
    { name: 'About', icon: User, path: '/about' },
    { name: 'Contact', icon: Mail, path: '/contact' }
  ]

  return (
    <motion.header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-lg border-b border-gray-100' 
          : 'bg-transparent'
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <nav className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
          >
            <Link to="/" className="flex items-center space-x-3">
              <motion.img
                src="https://qotdwocbcoirjlqjkjhq.supabase.co/storage/v1/object/imagens.website.creation/f84d56f1-fda5-4896-b3b6-f52ac87c8d59/logo_1771568550594_0.jpg"
                alt="JC Fashion Blog"
                className={`h-12 w-auto transition-all duration-300 ${
                  isScrolled ? 'brightness-100' : 'brightness-110'
                }`}
                whileHover={{ rotate: [0, -10, 10, 0] }}
                transition={{ duration: 0.5 }}
              />
              <div className="flex flex-col">
                <motion.span 
                  className={`text-xl font-display font-bold transition-colors duration-300 ${
                    isScrolled ? 'text-gray-900' : 'text-white'
                  }`}
                  whileHover={{ x: 5 }}
                >
                  JC Fashion
                </motion.span>
                <span className={`text-xs font-medium transition-colors duration-300 ${
                  isScrolled ? 'text-primary-600' : 'text-primary-200'
                }`}>
                  Kids Luxury Blog
                </span>
              </div>
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {menuItems.slice(0, 4).map((item, index) => {
              const IconComponent = item.icon
              return (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                >
                  <Link
                    to={item.path}
                    className={`flex items-center space-x-2 px-3 py-2 rounded-lg font-medium transition-all duration-300 ${
                      location.pathname === item.path || location.search.includes(item.path.split('=')[1])
                        ? 'bg-primary-100 text-primary-700'
                        : isScrolled 
                          ? 'text-gray-700 hover:text-primary-600 hover:bg-primary-50'
                          : 'text-white/90 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <IconComponent size={16} />
                    <span>{item.name}</span>
                  </Link>
                </motion.div>
              )
            })}

            {/* Search Bar */}
            <motion.form
              onSubmit={handleSearch}
              className="relative"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
            >
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search posts..."
                className={`pl-10 pr-4 py-2 rounded-lg border-2 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-primary-500 ${
                  isScrolled 
                    ? 'bg-white border-gray-200 text-gray-900 placeholder-gray-500'
                    : 'bg-white/20 border-white/30 text-white placeholder-white/70 backdrop-blur-sm'
                }`}
              />
              <Search 
                size={18} 
                className={`absolute left-3 top-1/2 transform -translate-y-1/2 transition-colors duration-300 ${
                  isScrolled ? 'text-gray-400' : 'text-white/70'
                }`}
              />
            </motion.form>
          </div>

          {/* Mobile Menu Button */}
          <motion.button
            className={`lg:hidden p-2 rounded-lg transition-colors duration-300 ${
              isScrolled 
                ? 'text-gray-700 hover:bg-gray-100' 
                : 'text-white hover:bg-white/10'
            }`}
            onClick={() => setIsOpen(!isOpen)}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <AnimatePresence mode="wait">
              {isOpen ? (
                <motion.div
                  key="close"
                  initial={{ rotate: -90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: 90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <X size={24} />
                </motion.div>
              ) : (
                <motion.div
                  key="menu"
                  initial={{ rotate: 90, opacity: 0 }}
                  animate={{ rotate: 0, opacity: 1 }}
                  exit={{ rotate: -90, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <Menu size={24} />
                </motion.div>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="lg:hidden mt-6 overflow-hidden"
            >
              <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
                {/* Mobile Search */}
                <form onSubmit={handleSearch} className="mb-6">
                  <div className="relative">
                    <input
                      type="text"
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      placeholder="Search posts..."
                      className="w-full pl-10 pr-4 py-3 rounded-lg border-2 border-gray-200 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                    />
                    <Search size={20} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                  </div>
                </motion.form>

                {/* Mobile Navigation Links */}
                <div className="space-y-2">
                  {menuItems.map((item, index) => {
                    const IconComponent = item.icon
                    return (
                      <motion.div
                        key={item.name}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.3 }}
                      >
                        <Link
                          to={item.path}
                          onClick={() => setIsOpen(false)}
                          className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-medium transition-all duration-300 ${
                            location.pathname === item.path || location.search.includes(item.path.split('=')[1])
                              ? 'bg-primary-100 text-primary-700'
                              : 'text-gray-700 hover:bg-primary-50 hover:text-primary-600'
                          }`}
                        >
                          <IconComponent size={18} />
                          <span>{item.name}</span>
                        </Link>
                      </motion.div>
                    )
                  })}
                </div>

                {/* Mobile Social Links */}
                <motion.div
                  className="mt-6 pt-6 border-t border-gray-200"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                >
                  <div className="flex items-center justify-center space-x-4">
                    <motion.div
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                    >
                      <Heart size={20} className="text-accent-500" />
                    </motion.div>
                    <span className="text-sm text-gray-500">Follow us for fashion inspiration</span>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </motion.header>
  )
}