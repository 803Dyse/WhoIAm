'use client'

import { MapPin, Heart, GraduationCap, Star } from 'lucide-react'

const AboutSection = () => {
  const personalInfo = [
    {
      icon: <MapPin className="w-5 h-5 text-blue-400" />,
      text: "Galicia, España"
    },
    {
      icon: <Heart className="w-5 h-5 text-purple-400" />,
      text: "IA Generativa & LLMs"
    },
    {
      icon: <GraduationCap className="w-5 h-5 text-cyan-400" />,
      text: "Graduado em 2024"
    },
    {
      icon: <Star className="w-5 h-5 text-yellow-400" />,
      text: "Aprender sempre, se atualizar"
    }
  ]

  return (
    <section id="about" className="py-20 px-6 max-w-7xl mx-auto">
      <div className="grid lg:grid-cols-2 gap-12 items-center">
        {/* Text Content */}
        <div className="animate-fade-in">
          <h2 className="text-4xl font-bold mb-8">
            <span className="gradient-text">Sobre Mim</span>
          </h2>
          
          <p className="text-gray-300 mb-6 leading-relaxed">
            Sou web developer, amo transformar ideias em realidade com o poder da programação. 
            Sou recém-formado (2024) e gosto muito de aprender coisas novas e tecnologias novas, 
            estudando IA Generativa e LLMs ultimamente.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Minha jornada começou na administração de redes, mas ao descobrir o desenvolvimento web, 
            foi paixão à primeira vista. Desde então, é o que mais gosto de fazer e me gera entusiasmo 
            poder aprender e aplicar novos conceitos e metodologias.
          </p>
          
          <p className="text-gray-300 mb-8 leading-relaxed">
            Tenho um perfil sociável e sou aberto a novas ideias. Aprender e absorver coisas boas 
            sempre será minha base fundamental para prosperar e progredir como profissional.
          </p>
          
          {/* Personal Info Grid */}
          <div className="grid sm:grid-cols-2 gap-4">
            {personalInfo.map((info, index) => (
              <div key={index} className="flex items-center space-x-3">
                {info.icon}
                <span className="text-gray-300">{info.text}</span>
              </div>
            ))}
          </div>
        </div>
        
        {/* Visual Content */}
        <div className="relative animate-slide-up">
          <div className="glass-card p-8 h-96 flex items-center justify-center hover-scale">
            <div className="text-center">
              <div className="w-24 h-24 mx-auto mb-6 rounded-full bg-gradient-to-r from-blue-400 via-purple-500 to-cyan-400 flex items-center justify-center text-2xl font-bold text-black">
                AM
              </div>
              <h3 className="text-xl font-semibold mb-4 gradient-text">
                Multilíngue
              </h3>
              <p className="text-gray-300 mb-4">
                Português • Inglês • Español • Galego
              </p>
              <div className="text-sm text-gray-400">
                Metade espanhol e metade brasileiro
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutSection