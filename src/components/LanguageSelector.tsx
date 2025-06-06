'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import { Language } from '@/lib/i18n'

const LanguageSelector = () => {
  const { language, setLanguage } = useLanguage()
  const [isOpen, setIsOpen] = useState(false)

  const languages = [
    {
      code: 'en' as Language,
      name: 'English',
      flag: '🇺🇸',
      country: 'United States'
    },
    {
      code: 'pt' as Language,
      name: 'Português',
      flag: '🇧🇷',
      country: 'Brasil'
    },
    {
      code: 'es' as Language,
      name: 'Español',
      flag: '🇪🇸',
      country: 'España'
    }
  ]

  const currentLanguage = languages.find(lang => lang.code === language)

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode)
    setIsOpen(false)
  }

  return (
    <div className="relative">
      {/* Language Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center space-x-2 px-3 py-2 rounded-lg bg-dark-800/60 border border-dark-600/30 hover:bg-dark-800/80 hover:border-primary-500/50 transition-all duration-300 text-gray-300 hover:text-primary-400"
        aria-label="Select Language"
      >
        <span className="text-lg">{currentLanguage?.flag}</span>
        <span className="hidden sm:inline text-sm font-medium">{currentLanguage?.name}</span>
        <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <>
          {/* Backdrop */}
          <div 
            className="fixed inset-0 z-40" 
            onClick={() => setIsOpen(false)}
          />
          
          {/* Menu */}
          <div className="absolute top-full right-0 mt-2 w-48 bg-dark-800/95 backdrop-blur-md border border-dark-600/30 rounded-lg shadow-lg shadow-primary-500/10 z-50 overflow-hidden">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center space-x-3 px-4 py-3 text-left hover:bg-primary-500/10 transition-all duration-300 ${
                  language === lang.code 
                    ? 'bg-primary-500/20 text-primary-400 border-l-2 border-primary-500' 
                    : 'text-gray-300 hover:text-primary-400'
                }`}
              >
                <span className="text-lg">{lang.flag}</span>
                <div className="flex-1">
                  <div className="font-medium">{lang.name}</div>
                  <div className="text-xs text-gray-400">{lang.country}</div>
                </div>
                {language === lang.code && (
                  <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                )}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}

export default LanguageSelector