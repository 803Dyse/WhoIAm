'use client'

import { GraduationCap, Award, BookOpen, Zap } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const EducationSection = () => {
  const { t } = useLanguage()

  const education = [
    {
      icon: <GraduationCap className="w-8 h-8 text-secondary-400" />,
      title: t.education.graduation.title,
      subtitle: t.education.graduation.subtitle,
      description: t.education.graduation.description
    },
    {
      icon: <Zap className="w-8 h-8 text-primary-400" />,
      title: t.education.currentStudies.title,
      subtitle: t.education.currentStudies.subtitle,
      description: t.education.currentStudies.description
    },
    {
      icon: <BookOpen className="w-8 h-8 text-secondary-300" />,
      title: t.education.continuousLearning.title,
      subtitle: t.education.continuousLearning.subtitle,
      description: t.education.continuousLearning.description
    }
  ]

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">{t.education.title}</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <div 
            key={index}
            className="glass-card p-8 text-center card-hover transition-all duration-300 hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-primary-500/20 to-secondary-500/20 flex items-center justify-center border border-primary-500/20">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-2 gradient-text">
              {item.title}
            </h3>
            
            <p className="text-gray-300 mb-4 font-medium">
              {item.subtitle}
            </p>
            
            <p className="text-gray-200 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="glass-card p-8 max-w-4xl mx-auto card-hover">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-primary-300 mr-3" />
            <h3 className="text-2xl font-semibold gradient-text">{t.education.philosophy.title}</h3>
          </div>
          
          <p className="text-gray-200 leading-relaxed text-lg mb-4">
            {t.education.philosophy.quote}
          </p>
          
          <p className="text-gray-300 leading-relaxed">
            {t.education.philosophy.description}
          </p>
        </div>
      </div>
    </section>
  )
}

export default EducationSection