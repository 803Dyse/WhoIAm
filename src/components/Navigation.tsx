'use client'

import { useState, useEffect } from 'react'
import { ChevronDown, Menu, X } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'
import LanguageSelector from './LanguageSelector'

interface NavigationProps {
  activeSection: string
  scrollToSection: (sectionId: string) => void
}

const Navigation = ({ activeSection, scrollToSection }: NavigationProps) => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const { t } = useLanguage()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const navItems = [
    { id: 'hero', label: t.nav.home },
    { id: 'about', label: t.nav.about },
    { id: 'skills', label: t.nav.skills },
    { id: 'projects', label: t.nav.projects },
    { id: 'education', label: t.nav.education },
    { id: 'contact', label: t.nav.contact }
  ]

  const handleNavClick = (sectionId: string) => {
    scrollToSection(sectionId)
    setIsMobileMenuOpen(false)
  }

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? 'glass-nav' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-bold cursor-pointer"
            onClick={() => handleNavClick('hero')}
          >
            <span className="gradient-text">AM</span>
          </div>
          
          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`transition-colors duration-300 font-medium ${
                  activeSection === item.id 
                    ? 'text-primary-400' 
                    : 'text-gray-300 hover:text-primary-300'
                }`}
              >
                {item.label}
              </button>
            ))}
            
            {/* Language Selector */}
            <LanguageSelector />
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center space-x-4">
            <LanguageSelector />
            <button 
              className="text-gray-300 hover:text-primary-400 transition-colors"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle Menu"
            >
              {isMobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 py-4 border-t border-gray-600/20">
            <div className="flex flex-col space-y-4">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`text-left transition-colors duration-300 font-medium ${
                    activeSection === item.id 
                      ? 'text-primary-400' 
                      : 'text-gray-300 hover:text-primary-300'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}

export default Navigation