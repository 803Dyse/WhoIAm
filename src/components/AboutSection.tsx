'use client'

import { MapPin, Heart, GraduationCap, Star } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const AboutSection = () => {
  const { t } = useLanguage()

  const personalInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-secondary-400" />,
      text: t.about.location
    },
    {
      icon: <Heart className="w-5 h-5 text-primary-400" />,
      text: t.about.interests
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-secondary-300" />,
      text: t.about.graduated
    },
    {
      icon: <Star className="w-5 h-5 text-primary-300" />,
      text: t.about.passion
    }
  ]

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">{t.about.title}</span>
          </h2>
          
          <p className="text-gray-200 mb-6 leading-relaxed">
            {t.about.description1}
          </p>
          
          <p className="text-gray-200 mb-8 leading-relaxed">
            {t.about.description2}
          </p>
          
          <p className="text-gray-200 mb-8 leading-relaxed">
            {t.about.description3}
          </p>
          
          {/* Personal Info Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3 p-3 rounded-lg bg-dark-800/50 hover:bg-dark-800/70 transition-colors">
                {info.icon}
                <span className="text-gray-200">{info.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Content */}
        <div className="relative animate-slide-up">
          <div className="glass-card p-8 h-96 flex items-center justify-center hover-scale card-hover">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-400 via-secondary-500 to-primary-500 flex items-center justify-center text-2xl font-bold text-white shadow-lg shadow-primary-500/20">
                AM
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                {t.about.polyglot}
              </h3>
              <p className="text-gray-200 mb-4">
                {t.about.languages}
              </p>
              <div className="text-sm text-gray-300">
                {t.about.nationality}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection