'use client'

import { Code, Database, Palette, Cloud, Globe } from 'lucide-react'

const SkillsSection = () => {
  const skills = [
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      techs: ["React", "Next.js", "TypeScript", "Tailwind CSS", "JavaScript", "HTML/CSS", "Bootstrap"]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      techs: ["PHP", "CodeIgniter", "REST APIs", "Progressive Web Apps"]
    },
    {
      category: "Database",
      icon: <Database className="w-6 h-6" />,
      techs: ["MySQL", "MariaDB"]
    },
    {
      category: "CMS & Design",
      icon: <Palette className="w-6 h-6" />,
      techs: ["WordPress", "Elementor Pro", "Figma", "UI/UX Design"]
    },
    {
      category: "DevOps & Cloud",
      icon: <Cloud className="w-6 h-6" />,
      techs: ["Docker", "AWS", "GitHub", "Bitbucket", "Linux", "macOS", "Windows"]
    },
    {
      category: "Ferramentas",
      icon: <Globe className="w-6 h-6" />,
      techs: ["DBeaver", "MySQL Workbench", "NetBeans", "VS Code"]
    }
  ]

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Tecnologias & Skills</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div 
            key={index} 
            className="glass-card p-6 hover:border-blue-400/50 transition-all duration-300 hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="text-blue-400 mr-3">
                {skill.icon}
              </div>
              <h3 className="text-xl font-semibold">{skill.category}</h3>
            </div>
            
            <div className="flex flex-wrap gap-2">
              {skill.techs.map((tech, i) => (
                <span 
                  key={i} 
                  className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 hover:bg-white/20 transition-colors duration-300"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default SkillsSection