'use client'

import { ChevronDown } from 'lucide-react'
import Image from 'next/image'

interface HeroSectionProps {
  scrollToSection: (sectionId: string) => void
}

const HeroSection = ({ scrollToSection }: HeroSectionProps) => {
  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900/20 via-secondary-900/20 to-dark-800/30"></div>
      
      {/* Content */}
      <div className="relative z-10 text-center max-w-4xl mx-auto px-6 animate-fade-in">
        {/* Avatar - OPÇÃO 1: Com sua foto */}
        <div className="w-32 h-32 mx-auto mb-8 rounded-full overflow-hidden shadow-lg shadow-primary-500/30 animate-pulse-slow">
          {
          <Image
            src="/public/images/profile/ProfileIcon.jpg" // Substitua pelo caminho da sua foto
            alt="Alex Martins"
            width={128}
            height={128}
            className="object-cover w-full h-full"
            priority
          />
          }
          
          {/* TEMPORÁRIO - remova quando adicionar sua foto */}
          <div className="w-full h-full bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-500 flex items-center justify-center text-4xl font-bold text-white">
            AM
          </div>
        </div>
        
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          <span className="gradient-text">
            Alex Martins
          </span>
        </h1>
        
        {/* Title */}
        <h2 className="text-2xl md:text-3xl mb-6 text-gray-200 animate-slide-up">
          Desenvolvedor Web Full Stack
        </h2>
        
        {/* Subtitle */}
        <p className="text-lg md:text-xl mb-8 text-gray-300 max-w-2xl mx-auto animate-slide-up">
          Apaixonado por criar experiências digitais incríveis
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-up">
          <a 
            href="mailto:dysedev@gmail.com" 
            className="accent-button hover-scale"
          >
            Entre em Contato
          </a>
          <a 
            href="https://github.com/803Dyse" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="outline-button hover-scale"
          >
            Ver GitHub
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