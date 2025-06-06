'use client'

import { Mail, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react'

const ContactSection = () => {
  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "dysedev@gmail.com",
      href: "mailto:dysedev@gmail.com",
      color: "text-blue-400 hover:text-blue-300"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "alejandromartins",
      href: "https://github.com/alejandromartins",
      color: "text-purple-400 hover:text-purple-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "alejandro-martins",
      href: "https://www.linkedin.com/in/alejandro-martins",
      color: "text-cyan-400 hover:text-cyan-300"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Vamos Conversar?</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {/* Contact Message */}
        <div className="text-center mb-12">
          <div className="glass-card p-8 mb-8">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-blue-400 mr-3" />
              <h3 className="text-2xl font-semibold">Entre em Contato</h3>
            </div>
            
            <p className="text-gray-300 mb-6 text-lg leading-relaxed">
              Estou sempre aberto a discutir oportunidades de trabalho e projetos interessantes. 
              Não hesite em entrar em contato!
            </p>
            
            <div className="flex items-center justify-center text-gray-400">
              <MapPin className="w-5 h-5 mr-2" />
              <span>Galicia, España • Disponível para trabalho remoto e presencial</span>
            </div>
          </div>
        </div>
        
        {/* Contact Links */}
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contactInfo.map((contact, index) => (
            <a
              key={index}
              href={contact.href}
              target={contact.href.startsWith('http') ? '_blank' : undefined}
              rel={contact.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className={`glass-card p-6 text-center hover:border-blue-400/50 transition-all duration-300 hover-scale animate-fade-in ${contact.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                {contact.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-white">
                {contact.label}
              </h3>
              
              <p className="text-sm">
                {contact.value}
              </p>
            </a>
          ))}
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="glass-card p-8">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              Pronto para começar um projeto?
            </h3>
            
            <p className="text-gray-300 mb-6">
              Vamos transformar suas ideias em realidade digital
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:dysedev@gmail.com"
                className="inline-flex items-center justify-center px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full hover:from-blue-600 hover:to-purple-700 transition-all duration-300 hover-scale"
              >
                <Send className="w-5 h-5 mr-2" />
                Enviar Email
              </a>
              
              <a
                href="https://www.linkedin.com/in/alejandro-martins"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3 border border-white/20 rounded-full hover:bg-white/10 transition-all duration-300 hover-scale"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                Conectar no LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection