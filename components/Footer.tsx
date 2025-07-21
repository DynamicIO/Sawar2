'use client'

import { motion } from 'framer-motion'
import { Heart, ExternalLink } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="relative mt-20 border-t border-white/10">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-t from-neon-blue/5 via-transparent to-transparent"></div>
      
      <div className="relative container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex items-center justify-center space-x-2"
          >
            <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-neon-purple rounded-xl flex items-center justify-center">
              <span className="text-white font-bold text-xl">S</span>
            </div>
            <h2 className="text-3xl font-cyber font-bold neon-text">Sawar</h2>
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-lg max-w-2xl mx-auto dark:text-white/60 text-gray-600"
          >
            Your destination for premium wallpapers. Discover, download, and transform your devices with stunning visuals.
          </motion.p>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-wrap justify-center items-center gap-8"
          >
                                      <div className="text-center">
               <div className="text-2xl font-bold text-neon-blue">75+</div>
               <div className="text-sm dark:text-white/60 text-gray-600">Total Wallpapers</div>
             </div>
             <div className="text-center">
               <div className="text-2xl font-bold text-neon-purple">Free</div>
               <div className="text-sm dark:text-white/60 text-gray-600">Always</div>
             </div>
             <div className="text-center">
               <div className="text-2xl font-bold text-neon-green">4K</div>
               <div className="text-sm dark:text-white/60 text-gray-600">Quality</div>
             </div>
          </motion.div>

          {/* Powered by Dynamic.IO */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="pt-8 border-t border-white/10"
          >
            <div className="flex items-center justify-center space-x-2 dark:text-white/80 text-gray-700">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current animate-pulse" />
              <motion.a
                href="https://dynamicio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                className="flex items-center space-x-1 glass glass-hover px-4 py-2 rounded-lg border border-white/10 hover:border-neon-blue/50 transition-all"
              >
                <span className="font-semibold">Powered by Dynamic.IO</span>
                <ExternalLink className="w-4 h-4" />
              </motion.a>
            </div>
          </motion.div>

          {/* Copyright */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-sm dark:text-white/40 text-gray-500"
          >
            © 2025 Sawar. All rights reserved. Free wallpapers for everyone.
          </motion.div>
        </div>
      </div>
    </footer>
  )
} 