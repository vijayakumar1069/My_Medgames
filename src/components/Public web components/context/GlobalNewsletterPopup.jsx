// components/GlobalNewsletterPopup.js
"use client"

import React from 'react'

import { AnimatePresence, motion } from 'framer-motion'
import { usePopup } from './PopupProvider'
import News_Letter_Subscribe from '../News_Letter_Subscribe'


const GlobalNewsletterPopup = () => {
  const { showPopup, handleClosePopup, handleSubscribe } = usePopup()

  if (!showPopup) return null

  return (
    <AnimatePresence>
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.9 }}
        className="fixed inset-0 z-[100] flex items-center justify-center bg-black/50 p-4"
      >
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ type: "spring", stiffness: 300 }}
          className="relative max-w-4xl w-full"
        >
          <News_Letter_Subscribe 
            onClose={handleClosePopup} 
            onSubscribe={handleSubscribe}
          />
        </motion.div>
      </motion.div>
    </AnimatePresence>
  )
}

export default GlobalNewsletterPopup
