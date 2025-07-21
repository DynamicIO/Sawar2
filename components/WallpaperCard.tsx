'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Download, Eye, Heart, Share } from 'lucide-react'
import Image from 'next/image'

interface WallpaperCardProps {
  src: string
  title: string
  category: 'pc' | 'mobile'
  onClick: () => void
  onDownload: () => void
}

export default function WallpaperCard({ src, title, category, onClick, onDownload }: WallpaperCardProps) {
  const [isLiked, setIsLiked] = useState(false)
  const [isHovered, setIsHovered] = useState(false)

  const aspectRatio = category === 'pc' ? 'aspect-[16/9]' : 'aspect-[9/16]'

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-2xl glass glass-hover cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className={`relative ${aspectRatio} overflow-hidden`}>
        <Image
          src={src}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <div className="px-3 py-1 rounded-full glass text-xs font-semibold text-white/90 border border-white/20">
            {category === 'pc' ? '16:9' : '9:16'}
          </div>
        </div>

        {/* Actions Overlay */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: isHovered ? 1 : 0, y: isHovered ? 0 : 20 }}
          transition={{ duration: 0.3 }}
          className="absolute inset-0 flex items-center justify-center"
        >
          <div className="flex space-x-3">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                onClick()
              }}
              className="p-3 glass glass-hover rounded-full text-white hover:text-neon-blue transition-colors"
            >
              <Eye className="w-5 h-5" />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                onDownload()
              }}
              className="p-3 glass glass-hover rounded-full text-white hover:text-neon-green transition-colors"
            >
              <Download className="w-5 h-5" />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Card Footer */}
      <div className="p-4 space-y-3">
        <h3 className="font-semibold text-white/90 truncate">{title}</h3>
        
        <div className="flex items-center justify-between">
          <div className="flex space-x-2">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                setIsLiked(!isLiked)
              }}
              className={`p-2 rounded-lg transition-colors ${
                isLiked ? 'text-red-500' : 'text-white/60 hover:text-white'
              }`}
            >
              <Heart className={`w-4 h-4 ${isLiked ? 'fill-current' : ''}`} />
            </motion.button>
            
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              onClick={(e) => {
                e.stopPropagation()
                navigator.share?.({ title, url: src })
              }}
              className="p-2 rounded-lg text-white/60 hover:text-white transition-colors"
            >
              <Share className="w-4 h-4" />
            </motion.button>
          </div>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={(e) => {
              e.stopPropagation()
              onDownload()
            }}
            className="px-4 py-2 bg-gradient-to-r from-neon-blue to-neon-purple rounded-lg text-white text-sm font-medium hover:shadow-lg transition-shadow"
          >
            Download
          </motion.button>
        </div>
      </div>
    </motion.div>
  )
} 