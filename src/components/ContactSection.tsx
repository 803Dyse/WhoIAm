'use client'

import { Mail, Github, Linkedin, MapPin, Send, MessageCircle } from 'lucide-react'
import { useLanguage } from '@/lib/LanguageContext'

const ContactSection = () => {
  const { t } = useLanguage()

  const contactInfo = [
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "devdyse@gmail.com",
      href: "mailto:devdyse@gmail.com",
      color: "text-secondary-400 hover:text-secondary-300"
    },
    {
      icon: <Github className="w-5 h-5" />,
      label: "GitHub",
      value: "803Dyse",
      href: "https://github.com/803Dyse",
      color: "text-primary-400 hover:text-primary-300"
    },
    {
      icon: <Linkedin className="w-5 h-5" />,
      label: "LinkedIn",
      value: "alejandro-martins",
      href: "https://www.linkedin.com/in/alejandro-martins",
      color: "text-secondary-300 hover:text-secondary-200"
    }
  ]

  return (
    <section id="contact" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">{t.contact.title}</span>
      </h2>
      
      <div className="max-w-4xl mx-auto">
        {/* Contact Message */}
        <div className="text-center mb-12">
          <div className="glass-card p-8 mb-8 card-hover">
            <div className="flex items-center justify-center mb-6">
              <MessageCircle className="w-8 h-8 text-primary-400 mr-3" />
              <h3 className="text-2xl font-semibold text-gray-100">{t.contact.subtitle}</h3>
            </div>
            
            <p className="text-gray-200 mb-6 text-lg leading-relaxed">
              {t.contact.description}
            </p>
            
            <div className="flex items-center justify-center text-gray-300">
              <MapPin className="w-5 h-5 mr-2" />
              <span>{t.contact.location}</span>
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
              className={`glass-card p-6 text-center card-hover transition-all duration-300 hover-scale animate-fade-in ${contact.color}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center mb-4">
                {contact.icon}
              </div>
              
              <h3 className="text-lg font-semibold mb-2 text-gray-100">
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
          <div className="glass-card p-8 card-hover">
            <h3 className="text-xl font-semibold mb-4 gradient-text">
              {t.contact.readyToStart}
            </h3>
            
            <p className="text-gray-200 mb-6">
              {t.contact.readyDescription}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:devdyse@gmail.com"
                className="accent-button inline-flex items-center justify-center hover-scale"
              >
                <Send className="w-5 h-5 mr-2" />
                {t.contact.sendEmail}
              </a>
              
              <a
                href="https://www.linkedin.com/in/alejandro-martins"
                target="_blank"
                rel="noopener noreferrer"
                className="outline-button inline-flex items-center justify-center hover-scale"
              >
                <Linkedin className="w-5 h-5 mr-2" />
                {t.contact.connectLinkedIn}
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ContactSection