// utils/popupUtils.js
export const popupUtils = {
    getLastClosedTime: () => {
      return localStorage.getItem('newsletter_last_closed')
    },
  
    shouldShowPopup: () => {
      const subscribedStatus = localStorage.getItem('newsletter_subscribed')
      if (subscribedStatus === 'true') return false
  
      const lastClosed = localStorage.getItem('newsletter_last_closed')
      if (!lastClosed) return true
  
      const currentTime = new Date().getTime()
      const timeDifference = currentTime - parseInt(lastClosed)
      return timeDifference >= THREE_DAYS_IN_MS
    },
  
    resetPopupTimer: () => {
      localStorage.removeItem('newsletter_last_closed')
    },
  
    setSubscribed: (email) => {
      localStorage.setItem('newsletter_subscribed', 'true')
      localStorage.setItem('subscribed_email', email)
      localStorage.removeItem('newsletter_last_closed')
    }
  }
  