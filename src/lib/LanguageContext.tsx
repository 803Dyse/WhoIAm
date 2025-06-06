'use client'

import React, { createContext, useContext, useState, useEffect } from 'react'
import { Language, getTranslations, Translations } from '@/lib/i18n'

interface LanguageContextType {
  language: Language
  setLanguage: (lang: Language) => void
  t: Translations
  isLoading: boolean
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined)

export function LanguageProvider({ children }: { children: React.ReactNode }) {
  const [language, setLanguage] = useState<Language>('en') // Default to English
  const [t, setT] = useState<Translations>(getTranslations('en'))
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Only run on client side
    if (typeof window !== 'undefined') {
      try {
        const savedLanguage = localStorage.getItem('preferred-language') as Language
        if (savedLanguage && ['en', 'pt', 'es'].includes(savedLanguage)) {
          setLanguage(savedLanguage)
          setT(getTranslations(savedLanguage))
        }
      } catch (error) {
        console.warn('Error reading language preference:', error)
      }
      setIsLoading(false)
    }
  }, [])

  const updateLanguage = (lang: Language) => {
    setLanguage(lang)
    setT(getTranslations(lang))
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem('preferred-language', lang)
      } catch (error) {
        console.warn('Error saving language preference:', error)
      }
    }
  }

  return (
    <LanguageContext.Provider 
      value={{ 
        language, 
        setLanguage: updateLanguage, 
        t,
        isLoading
      }}
    >
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider')
  }
  return context
}

// Hook for safe usage during SSR
export function useLanguageSafe() {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    // Return default values for SSR
    return {
      language: 'en' as Language,
      setLanguage: () => {},
      t: getTranslations('en'),
      isLoading: true
    }
  }
  return context
}