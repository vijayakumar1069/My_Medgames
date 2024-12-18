// context/PopupContext.js
"use client"

import { subscribeAction } from '@/app/actions/subscribe_fun'
import React, { createContext, useState, useEffect, useContext } from 'react'

const PopupContext = createContext()

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)

  useEffect(() => {
    // Check if user has previously interacted with popup
    const popupStatus = localStorage.getItem('newsletter_popup_status')
    const subscribedStatus = localStorage.getItem('newsletter_subscribed')

    if (popupStatus === 'closed' || subscribedStatus === 'true') {
      setShowPopup(false)
    } else {
      // Show popup after 3 seconds of page load
      const timer = setTimeout(() => {
        setShowPopup(true)
      }, 10000)

      return () => clearTimeout(timer)
    }
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
    localStorage.setItem('newsletter_popup_status', 'closed')
  }

  const handleSubscribe =async (email) => {
    // Simulate subscription (replace with actual API call)
    const res=await subscribeAction(email);
   
    if(res.success){
    
        localStorage.setItem('newsletter_subscribed', 'true')
        localStorage.setItem('subscribed_email', email)
        setIsSubscribed(true)
        setShowPopup(false)
    }

  }

  return (
    <PopupContext.Provider value={{ 
      showPopup, 
      isSubscribed, 
      handleClosePopup, 
      handleSubscribe 
    }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)
