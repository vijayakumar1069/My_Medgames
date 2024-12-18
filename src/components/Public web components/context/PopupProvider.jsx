// context/PopupContext.js
"use client"

import { subscribeAction } from '@/app/actions/subscribe_fun'
import React, { createContext, useState, useEffect, useContext } from 'react'

const PopupContext = createContext()

const THREE_DAYS_IN_MS = 3 * 24 * 60 * 60 * 1000; // 3 days in milliseconds

export const PopupProvider = ({ children }) => {
  const [showPopup, setShowPopup] = useState(false)
  const [isSubscribed, setIsSubscribed] = useState(false)
  const[subscribeFail,setSubscribeFail]=useState("");

  useEffect(() => {
    // Check subscription status first
    const subscribedStatus = localStorage.getItem('newsletter_subscribed')
    if (subscribedStatus === 'true') {
      setIsSubscribed(true)
      setShowPopup(false)
      return;
    }

    // Check last closed timestamp
    const lastClosed = localStorage.getItem('newsletter_last_closed')
    const currentTime = new Date().getTime()

    if (lastClosed) {
      const timeDifference = currentTime - parseInt(lastClosed)
      
      // If it's been less than 3 days since last closure, don't show
      if (timeDifference < THREE_DAYS_IN_MS) {
        setShowPopup(false)
        return;
      }
    }

    // If we reach here, either:
    // 1. The popup was never closed before
    // 2. It's been more than 3 days since last closure
    const timer = setTimeout(() => {
      setShowPopup(true)
    }, 10000) // 10 seconds delay

    return () => clearTimeout(timer)
  }, [])

  const handleClosePopup = () => {
    setShowPopup(false)
    // Store the timestamp when user closes the popup
    localStorage.setItem('newsletter_last_closed', new Date().getTime().toString())
  }

  const handleSubscribe = async (email) => {
    try {
      const res = await subscribeAction(email)
      
      if (res.success) {
        localStorage.setItem('newsletter_subscribed', 'true')
        localStorage.setItem('subscribed_email', email)
        // Remove the last closed timestamp as it's no longer needed
        localStorage.removeItem('newsletter_last_closed')
        setIsSubscribed(true)
        setShowPopup(false)
        return true
      }
      else{
        setSubscribeFail(res.message)
        return false
      }
    } catch (error) {
      console.error('Subscription error:', error)
      return false
    }
  }

  return (
    <PopupContext.Provider value={{
      showPopup,
      isSubscribed,
      handleClosePopup,
      handleSubscribe,
      subscribeFail
    }}>
      {children}
    </PopupContext.Provider>
  )
}

export const usePopup = () => useContext(PopupContext)
