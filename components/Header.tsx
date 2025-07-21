'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { Moon, Sun, Menu, X } from 'lucide-react'

interface HeaderProps {
  activeCategory: 'pc' | 'mobile'
  activeSection: 'home' | 'wallpapers'
  onCategoryChange: (category: 'pc' | 'mobile') => void
  onSectionChange: (section: 'home' | 'wallpapers') => void
}

export default function Header({ activeCategory, activeSection, onCategoryChange, onSectionChange }: HeaderProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isDark, setIsDark] = useState(true)

  useEffect(() => {
    // Check initial theme from localStorage or default to dark
    const savedTheme = localStorage.getItem('theme')
    const prefersDark = savedTheme === 'dark' || (!savedTheme && window.matchMedia('(prefers-color-scheme: dark)').matches)
    
    setIsDark(prefersDark)
    
    if (prefersDark) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
    }
  }, [])

  const toggleTheme = () => {
    const newDarkMode = !isDark
    setIsDark(newDarkMode)
    
    // Update DOM classes
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
      document.body.classList.add('dark')
      localStorage.setItem('theme', 'dark')
    } else {
      document.documentElement.classList.remove('dark')
      document.body.classList.remove('dark')
      localStorage.setItem('theme', 'light')
    }
  }

  const scrollToWallpapers = (category: 'pc' | 'mobile') => {
    // Change category and section
    onCategoryChange(category)
    onSectionChange('wallpapers')
    // Close mobile menu if open
    setIsMenuOpen(false)
    // Scroll to wallpapers section with proper offset
    setTimeout(() => {
      const wallpapersSection = document.getElementById('wallpapers')
      if (wallpapersSection) {
        const headerHeight = window.innerWidth < 768 ? 80 : 96 // Mobile vs desktop header height
        const elementPosition = wallpapersSection.offsetTop - headerHeight
        window.scrollTo({
          top: elementPosition,
          behavior: 'smooth'
        })
      }
    }, 100) // Small delay to ensure category change is processed
  }

  const scrollToHome = () => {
    onSectionChange('home')
    setIsMenuOpen(false)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 glass glass-hover border-b border-white/10 mobile-safe-area"
    >
                      <div className="container mx-auto px-4 py-3 md:py-4 mobile-header">
          <div className="flex items-center justify-between min-h-[3rem] md:min-h-[auto]">
          {/* Logo */}
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={scrollToHome}
            className="flex items-center space-x-2 cursor-pointer hover:opacity-80 transition-opacity duration-300"
          >
            <div className="w-8 h-8 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">S</span>
            </div>
            <h1 className="text-2xl font-cyber font-bold neon-text">Sawar</h1>
          </motion.button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToHome}
              className={`transition-colors ${
                activeSection === 'home' 
                  ? 'text-neon-blue' 
                  : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
              }`}
            >
              Home
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToWallpapers('pc')}
              className={`transition-colors ${
                activeSection === 'wallpapers' && activeCategory === 'pc' 
                  ? 'text-neon-blue' 
                  : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
              }`}
            >
              PC Wallpapers
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => scrollToWallpapers('mobile')}
              className={`transition-colors ${
                activeSection === 'wallpapers' && activeCategory === 'mobile' 
                  ? 'text-neon-purple' 
                  : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
              }`}
            >
              Mobile Wallpapers
            </motion.button>
          </nav>

          {/* Theme Toggle & Mobile Menu */}
          <div className="flex items-center space-x-4">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={toggleTheme}
              className="p-2 glass glass-hover rounded-lg"
            >
              {isDark ? (
                <Sun className="w-5 h-5 text-yellow-400" />
              ) : (
                <Moon className="w-5 h-5 text-blue-400" />
              )}
            </motion.button>

            {/* Mobile Menu Button */}
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 glass glass-hover rounded-lg"
            >
              {isMenuOpen ? (
                <X className="w-5 h-5 text-white" />
              ) : (
                <Menu className="w-5 h-5 text-white" />
              )}
            </motion.button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden mt-4 pt-4 border-t border-white/10 mobile-nav-open"
          >
            <div className="flex flex-col space-y-4">
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={scrollToHome}
                className={`transition-colors text-left ${
                  activeSection === 'home' 
                    ? 'text-neon-blue' 
                    : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
                }`}
              >
                Home
              </motion.button>
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToWallpapers('pc')}
                className={`transition-colors text-left ${
                  activeSection === 'wallpapers' && activeCategory === 'pc' 
                    ? 'text-neon-blue' 
                    : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
                }`}
              >
                PC Wallpapers
              </motion.button>
              <motion.button
                whileHover={{ x: 10 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => scrollToWallpapers('mobile')}
                className={`transition-colors text-left ${
                  activeSection === 'wallpapers' && activeCategory === 'mobile' 
                    ? 'text-neon-purple' 
                    : 'dark:text-white/80 text-gray-700 hover:text-neon-blue'
                }`}
              >
                Mobile Wallpapers
              </motion.button>
            </div>
          </motion.nav>
        )}
      </div>
    </motion.header>
  )
} 