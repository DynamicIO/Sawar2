'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { X, Download, Heart, Share, Info } from 'lucide-react'
import Image from 'next/image'
import { useState, useEffect } from 'react'

interface Wallpaper {
  id: string
  src: string
  title: string
  category: 'pc' | 'mobile'
}

interface WallpaperModalProps {
  wallpaper: Wallpaper | null
  isOpen: boolean
  onClose: () => void
  onDownload: (wallpaper: Wallpaper) => void
}

export default function WallpaperModal({ wallpaper, isOpen, onClose, onDownload }: WallpaperModalProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [showInfo, setShowInfo] = useState(false)

  // Handle Escape key to close modal
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === 'Escape' && isOpen) {
        onClose()
      }
    }

    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      // Prevent body scroll when modal is open
      document.body.style.overflow = 'hidden'
    }

    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!wallpaper) return null

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 cursor-pointer"
          onClick={onClose}
          title="Click to close"
        >
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="absolute inset-0 bg-black/85 backdrop-blur-md"
          />

          {/* Modal Content */}
          <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.5, opacity: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
            className="relative max-w-7xl max-h-[90vh] w-full h-full glass rounded-3xl overflow-hidden cursor-default"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header */}
            <div className="absolute top-0 left-0 right-0 z-10 p-6 bg-gradient-to-b from-black/50 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <h2 className="text-2xl font-bold text-white truncate max-w-md">
                    {wallpaper.title}
                  </h2>
                  <div className="px-3 py-1 rounded-full glass text-sm font-semibold text-white/90 border border-white/20">
                    {wallpaper.category === 'pc' ? '16:9' : '9:16'}
                  </div>
                </div>
                
                <div className="flex items-center space-x-2">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setShowInfo(!showInfo)}
                    className="p-2 glass glass-hover rounded-full text-white hover:text-neon-blue transition-colors"
                  >
                    <Info className="w-5 h-5" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={onClose}
                    className="p-3 bg-black/60 hover:bg-red-500/80 rounded-full text-white hover:text-white transition-all duration-300 border border-white/30 hover:border-red-400/50 shadow-lg backdrop-blur-sm"
                    aria-label="Close modal"
                  >
                    <X className="w-6 h-6 stroke-2" />
                  </motion.button>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center">
              <Image
                src={wallpaper.src}
                alt={wallpaper.title}
                fill
                className="object-contain"
                sizes="100vw"
                priority
              />
            </div>

            {/* Footer Actions */}
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/50 to-transparent">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => setIsLiked(!isLiked)}
                    className={`p-3 glass glass-hover rounded-full transition-colors ${
                      isLiked ? 'text-red-500' : 'text-white hover:text-red-400'
                    }`}
                  >
                    <Heart className={`w-6 h-6 ${isLiked ? 'fill-current' : ''}`} />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    onClick={() => navigator.share?.({ title: wallpaper.title, url: wallpaper.src })}
                    className="p-3 glass glass-hover rounded-full text-white hover:text-neon-blue transition-colors"
                  >
                    <Share className="w-6 h-6" />
                  </motion.button>
                </div>

                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => onDownload(wallpaper)}
                  className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-2xl text-white font-bold text-lg glass border border-white/20 flex items-center space-x-3"
                >
                  <Download className="w-6 h-6" />
                  <span>Download Wallpaper</span>
                </motion.button>
              </div>
            </div>

            {/* Info Panel */}
            <AnimatePresence>
              {showInfo && (
                <motion.div
                  initial={{ x: 300, opacity: 0 }}
                  animate={{ x: 0, opacity: 1 }}
                  exit={{ x: 300, opacity: 0 }}
                  className="absolute top-0 right-0 w-80 h-full glass border-l border-white/10 p-6 overflow-y-auto"
                >
                  <h3 className="text-xl font-bold text-white mb-4">Wallpaper Info</h3>
                  <div className="space-y-4">
                    <div>
                      <label className="text-sm text-white/60">Title</label>
                      <p className="text-white font-medium">{wallpaper.title}</p>
                    </div>
                    <div>
                      <label className="text-sm text-white/60">Category</label>
                      <p className="text-white font-medium capitalize">{wallpaper.category}</p>
                    </div>
                    <div>
                      <label className="text-sm text-white/60">Resolution</label>
                      <p className="text-white font-medium">
                        {wallpaper.category === 'pc' ? '1920x1080 (16:9)' : '1080x1920 (9:16)'}
                      </p>
                    </div>
                    <div>
                      <label className="text-sm text-white/60">Format</label>
                      <p className="text-white font-medium">PNG/JPEG</p>
                    </div>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
} 