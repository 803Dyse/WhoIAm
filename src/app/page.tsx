'use client'

import { useState, useEffect } from 'react'
import Navigation from '@/components/Navigation'
import HeroSection from '@/components/HeroSection'
import AboutSection from '@/components/AboutSection'
import SkillsSection from '@/components/SkillsSection'
import ProjectsSection from '@/components/ProjectsSection'
import EducationSection from '@/components/EducationSection'
import ContactSection from '@/components/ContactSection'
import Footer from '@/components/Footer'
import ClientOnly from '@/components/ClientOnly'

export default function HomePage() {
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const handleScroll = () => {
      // Detect active section based on scroll position
      const sections = ['hero', 'about', 'skills', 'projects', 'education', 'contact']
      const current = sections.find(section => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect()
          return rect.top <= 100 && rect.bottom >= 100
        }
        return false
      })
      
      if (current) {
        setActiveSection(current)
      }
    }

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll)
    
    // Call once to set initial state
    handleScroll()
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start' 
      })
    }
  }

  // Loading fallback component
  const LoadingFallback = () => (
    <div className="min-h-screen bg-black text-white flex items-center justify-center">
      <div className="text-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary-500 mx-auto mb-4"></div>
        <p className="text-gray-400">Loading...</p>
      </div>
    </div>
  )

  return (
    <ClientOnly fallback={<LoadingFallback />}>
      <div className="min-h-screen bg-black text-white overflow-x-hidden">
        {/* Navigation */}
        <Navigation 
          activeSection={activeSection} 
          scrollToSection={scrollToSection} 
        />
        
        {/* Main Content */}
        <main>
          <HeroSection scrollToSection={scrollToSection} />
          <AboutSection />
          <SkillsSection />
          <ProjectsSection />
          <EducationSection />
          <ContactSection />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ClientOnly>
  )
}