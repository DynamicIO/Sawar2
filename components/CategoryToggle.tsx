'use client'

import { motion } from 'framer-motion'
import { Monitor, Smartphone } from 'lucide-react'

interface CategoryToggleProps {
  activeCategory: 'pc' | 'mobile'
  onCategoryChange: (category: 'pc' | 'mobile') => void
}

export default function CategoryToggle({ activeCategory, onCategoryChange }: CategoryToggleProps) {
  return (
    <div className="flex items-center justify-center mb-12">
      <div className="glass rounded-2xl p-2 backdrop-blur-sm border border-white/10" style={{ isolation: 'isolate' }}>
        <div className="flex space-x-2" style={{ position: 'relative', zIndex: 1 }}>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange('pc')}
            className={`category-toggle-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
              activeCategory === 'pc'
                ? 'bg-gradient-to-r from-neon-blue to-neon-purple text-white shadow-lg'
                : 'category-toggle-inactive'
            }`}
          >
            <Monitor className="w-5 h-5 category-toggle-text" />
            <span className="category-toggle-text">PC Wallpapers</span>
            {activeCategory === 'pc' && (
              <motion.div
                layoutId="activeCategory"
                className="category-toggle-bg bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl opacity-20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => onCategoryChange('mobile')}
            className={`category-toggle-button px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center space-x-2 ${
              activeCategory === 'mobile'
                ? 'bg-gradient-to-r from-neon-purple to-neon-pink text-white shadow-lg'
                : 'category-toggle-inactive'
            }`}
          >
            <Smartphone className="w-5 h-5 category-toggle-text" />
            <span className="category-toggle-text">Mobile Wallpapers</span>
            {activeCategory === 'mobile' && (
              <motion.div
                layoutId="activeCategory"
                className="category-toggle-bg bg-gradient-to-r from-neon-purple to-neon-pink rounded-xl opacity-20"
                transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
              />
            )}
          </motion.button>
        </div>
      </div>
    </div>
  )
} 