'use client'

import { motion, AnimatePresence } from 'framer-motion'
import WallpaperCard from './WallpaperCard'

interface Wallpaper {
  id: string
  src: string
  title: string
  category: 'pc' | 'mobile'
}

interface WallpaperGridProps {
  wallpapers: Wallpaper[]
  category: 'pc' | 'mobile'
  onWallpaperClick: (wallpaper: Wallpaper) => void
  onDownload: (wallpaper: Wallpaper) => void
}

export default function WallpaperGrid({ wallpapers, category, onWallpaperClick, onDownload }: WallpaperGridProps) {
  const filteredWallpapers = wallpapers.filter(w => w.category === category)
  
  const gridClass = category === 'pc' ? 'wallpaper-grid' : 'wallpaper-grid-mobile'

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="container mx-auto px-4 py-8"
    >
      <motion.div
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="text-center mb-12"
      >
        <h2 className="text-4xl md:text-6xl font-cyber font-bold mb-4">
          <span className="neon-text">
            {category === 'pc' ? 'PC' : 'Mobile'} Collection
          </span>
        </h2>
        <p className="text-xl max-w-2xl mx-auto dark:text-white/60 text-gray-600">
          {category === 'pc' 
            ? 'Ultra-wide and standard desktop wallpapers in stunning 4K resolution'
            : 'Perfect fit wallpapers designed specifically for mobile devices'
          }
        </p>
        <div className="mt-4 text-sm dark:text-white/40 text-gray-500">
          {filteredWallpapers.length} wallpapers available
        </div>
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.div
          key={category}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.5 }}
          className={gridClass}
        >
          {filteredWallpapers.map((wallpaper, index) => (
            <motion.div
              key={wallpaper.id}
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              layout
            >
              <WallpaperCard
                src={wallpaper.src}
                title={wallpaper.title}
                category={wallpaper.category}
                onClick={() => onWallpaperClick(wallpaper)}
                onDownload={() => onDownload(wallpaper)}
              />
            </motion.div>
          ))}
        </motion.div>
      </AnimatePresence>

      {filteredWallpapers.length === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="text-center py-20"
        >
          <div className="text-6xl mb-4">🖼️</div>
          <h3 className="text-2xl font-bold dark:text-white/80 text-gray-700 mb-2">No wallpapers found</h3>
          <p className="dark:text-white/60 text-gray-600">
            We're constantly adding new wallpapers to our collection
          </p>
        </motion.div>
      )}
    </motion.div>
  )
} 