'use client'

import { GraduationCap, Award, BookOpen, Zap } from 'lucide-react'

const EducationSection = () => {
  const education = [
    {
      icon: <GraduationCap className="w-8 h-8 text-blue-400" />,
      title: "Graduação em Desenvolvimento Web",
      subtitle: "Formado em 2024",
      description: "Foco em desenvolvimento full-stack com especialização em tecnologias modernas como React, Next.js, PHP e sistemas de banco de dados."
    },
    {
      icon: <Zap className="w-8 h-8 text-purple-400" />,
      title: "Estudos Atuais",
      subtitle: "IA Generativa & LLMs",
      description: "Aprofundando conhecimentos em Inteligência Artificial Generativa, Large Language Models e suas aplicações em desenvolvimento web."
    },
    {
      icon: <BookOpen className="w-8 h-8 text-cyan-400" />,
      title: "Aprendizado Contínuo",
      subtitle: "Sempre se atualizando",
      description: "Filosofia de aprendizado constante, mantendo-se atualizado com as últimas tendências e tecnologias do mercado de desenvolvimento."
    }
  ]

  return (
    <section id="education" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Formação & Aprendizado</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {education.map((item, index) => (
          <div 
            key={index}
            className="glass-card p-8 text-center hover:border-blue-400/50 transition-all duration-300 hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.2}s` }}
          >
            <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 flex items-center justify-center">
              {item.icon}
            </div>
            
            <h3 className="text-xl font-semibold mb-2 gradient-text">
              {item.title}
            </h3>
            
            <p className="text-gray-400 mb-4 font-medium">
              {item.subtitle}
            </p>
            
            <p className="text-gray-300 leading-relaxed text-sm">
              {item.description}
            </p>
          </div>
        ))}
      </div>
      
      {/* Additional Info */}
      <div className="mt-16 text-center">
        <div className="glass-card p-8 max-w-4xl mx-auto">
          <div className="flex items-center justify-center mb-6">
            <Award className="w-8 h-8 text-yellow-400 mr-3" />
            <h3 className="text-2xl font-semibold gradient-text">Filosofia Profissional</h3>
          </div>
          
          <p className="text-gray-300 leading-relaxed text-lg mb-4">
            &ldquo;Aprender sempre, se atualizar&rdquo;
          </p>
          
          <p className="text-gray-400 leading-relaxed">
            Tenho um perfil sociável e sou aberto a novas ideias. Aprender e absorver coisas boas 
            sempre será minha base fundamental para prosperar e progredir como profissional. 
            Sempre quero conectar com mais pessoas e aprender delas.
          </p>
        </div>
      </div>
    </section>
  )
}

export default EducationSection