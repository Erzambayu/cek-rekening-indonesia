import { useState, useEffect } from 'react'

const DARK_MODE_KEY = 'cek_rekening_dark_mode'

export const useDarkMode = () => {
  const [isDarkMode, setIsDarkMode] = useState(false)

  useEffect(() => {
    // Check for saved preference or system preference
    const savedPreference = localStorage.getItem(DARK_MODE_KEY)
    if (savedPreference !== null) {
      setIsDarkMode(savedPreference === 'true')
    } else {
      // Check system preference
      const systemPreference = window.matchMedia('(prefers-color-scheme: dark)').matches
      setIsDarkMode(systemPreference)
    }
  }, [])

  useEffect(() => {
    // Apply dark mode class to document
    if (isDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
    
    // Save preference
    localStorage.setItem(DARK_MODE_KEY, isDarkMode.toString())
  }, [isDarkMode])

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode)
  }

  return {
    isDarkMode,
    toggleDarkMode
  }
} 