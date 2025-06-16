'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'
import { useLanguage } from '@/lib/LanguageContext'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  const { t } = useLanguage()

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-dark-800/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        {/* Avatar - Profile Image */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg shadow-primary-500/30 ring-4 ring-primary-500/30 animate-pulse-slow">
          <Image
            src="/images/profile/ProfileIcon.jpg"
            alt="Profile"
            width={128}
            height={128}
            className="w-full h-full object-cover"
          />
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">
            {t.hero.title}
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-200 animate-slide-up">
          {t.hero.subtitle}
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-slide-up">
          {t.hero.description}
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <a 
            href="mailto:devdyse@gmail.com" 
            className="accent-button hover-scale"
          >
            {t.hero.contactButton}
          </a>
          <a 
            href="https://github.com/803Dyse" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="outline-button hover-scale"
          >
            {t.hero.githubButton}
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer group"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-6 h-6 text-gray-400 group-hover:text-primary-400 transition-colors" />
      </div>
    </section>
  )
}

export default HeroSection