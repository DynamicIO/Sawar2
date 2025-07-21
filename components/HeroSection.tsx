'use client'

import { motion } from 'framer-motion'
import { Download, Sparkles, Monitor, Smartphone } from 'lucide-react'

interface HeroSectionProps {
  onExploreClick?: () => void
}

export default function HeroSection({ onExploreClick }: HeroSectionProps = {}) {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden -mt-20 md:-mt-24 pt-20 md:pt-24">
      {/* Animated Background */}
      <div className="absolute inset-0 gradient-bg opacity-30"></div>
      
      {/* Floating Orbs */}
      <div className="absolute inset-0">
        {[...Array(6)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-32 h-32 rounded-full bg-neon-blue/10 blur-xl"
            animate={{
              x: [0, 100, 0],
              y: [0, -100, 0],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 10 + i * 2,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${20 + i * 15}%`,
              top: `${20 + i * 10}%`,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Main Title */}
          <motion.h1
            className="text-6xl md:text-8xl font-cyber font-bold neon-text leading-tight"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2 }}
          >
            SAWAR
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-3xl font-space max-w-4xl mx-auto dark:text-white/80 text-gray-700"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Discover Premium Wallpapers for Every Device
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-lg max-w-2xl mx-auto dark:text-white/60 text-gray-600"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.6 }}
          >
            Immerse yourself in a curated collection of stunning 4K wallpapers 
            designed for PC and mobile devices. Modern, minimal, and magical.
          </motion.p>

          {/* Stats */}
          <motion.div
            className="flex flex-wrap justify-center items-center gap-8 py-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
          >
            <div className="glass rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Monitor className="w-8 h-8 text-neon-blue" />
                <div>
                  <div className="text-2xl font-bold dark:text-white text-gray-800">60+</div>
                  <div className="text-sm dark:text-white/60 text-gray-600">PC Wallpapers</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Smartphone className="w-8 h-8 text-neon-purple" />
                <div>
                  <div className="text-2xl font-bold dark:text-white text-gray-800">16+</div>
                  <div className="text-sm dark:text-white/60 text-gray-600">Mobile Wallpapers</div>
                </div>
              </div>
            </div>

            <div className="glass rounded-2xl p-6 backdrop-blur-sm">
              <div className="flex items-center space-x-3">
                <Download className="w-8 h-8 text-neon-green" />
                <div>
                  <div className="text-2xl font-bold dark:text-white text-gray-800">Free</div>
                  <div className="text-sm dark:text-white/60 text-gray-600">Downloads</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* CTA Button */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
          >
            <motion.button
              whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(0,255,255,0.5)" }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                onExploreClick?.()
                document.getElementById('wallpapers')?.scrollIntoView({ behavior: 'smooth' })
              }}
              className="px-8 py-4 bg-gradient-to-r from-neon-blue to-neon-purple rounded-full text-white font-semibold text-lg glass border border-white/20 flex items-center space-x-2 mx-auto"
            >
              <Sparkles className="w-5 h-5" />
              <span>Explore Wallpapers</span>
            </motion.button>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <motion.div
            className="w-1 h-3 bg-neon-blue rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  )
} 