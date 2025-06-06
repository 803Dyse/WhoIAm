'use client'

import { ChevronDown } from 'lucide-react'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 via-purple-900/20 to-cyan-900/20"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        {/* Avatar */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 flex items-center justify-center text-4xl font-bold text-black animate-pulse-slow">
          AM
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">
            Alejandro Martins
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-300 animate-slide-up">
          Desenvolvedor Web Full Stack
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-400 max-w-2xl mx-auto animate-slide-up">
          Apaixonado por criar experiências digitais incríveis
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <a 
            href="mailto:dysedev@gmail.com" 
            className="px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-scale"
          >
            Entre em Contato
          </a>
          <a 
            href="https://github.com/alejandromartins" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover-scale"
          >
            Ver GitHub
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce cursor-pointer"
        onClick={() => scrollToSection('about')}
      >
        <ChevronDown className="w-6 h-6 text-gray-400" />
      </div>
    </section>
  )
}

export default HeroSection