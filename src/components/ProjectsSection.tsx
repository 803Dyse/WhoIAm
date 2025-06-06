'use client'

import { ExternalLink, Github } from 'lucide-react'
import Image from 'next/image'

const ProjectsSection = () => {
  const projects = [
    {
      title: "E-commerce Platform",
      description: "Plataforma completa de e-commerce com React/Next.js, integração de pagamentos e painel administrativo. Sistema robusto com gestão de produtos, carrinho de compras e checkout seguro.",
      tech: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    },
    {
      title: "CMS Dashboard",
      description: "Sistema de gerenciamento de conteúdo moderno com interface intuitiva e funcionalidades avançadas. Inclui editor WYSIWYG, gestão de usuários e analytics em tempo real.",
      tech: ["PHP", "CodeIgniter", "MySQL", "Bootstrap", "Chart.js"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    },
    {
      title: "Progressive Web App",
      description: "Aplicação web progressiva com funcionalidades offline e notificações push. Experiência mobile-first com cache inteligente e sincronização de dados.",
      tech: ["React", "PWA", "Service Workers", "IndexedDB", "Web Push"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    },
    {
      title: "API RESTful",
      description: "API robusta desenvolvida em PHP com arquitetura RESTful, autenticação JWT e documentação completa. Suporte a múltiplos formatos de dados e rate limiting.",
      tech: ["PHP", "CodeIgniter", "JWT", "MySQL", "Swagger"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    },
    {
      title: "Landing Page Corporativa",
      description: "Website corporativo responsivo com design moderno, otimizado para SEO e performance. Integração com formulários de contato e analytics avançados.",
      tech: ["Next.js", "Tailwind CSS", "Framer Motion", "Contentful"],
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    },
    {
      title: "Sistema de Gestão",
      description: "Aplicação completa para gestão empresarial com módulos de vendas, estoque, financeiro e relatórios. Dashboard interativo com gráficos e métricas em tempo real.",
      tech: ["React", "PHP", "MySQL", "Chart.js", "Bootstrap"],
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/alejandromartins",
      demo: "#"
    }
  ]

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">Projetos</span>
      </h2>
      
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className="glass-card overflow-hidden hover:border-blue-400/50 transition-all duration-300 hover-scale animate-fade-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-blue-500/20 to-purple-500/20 z-10"></div>
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-110"
              />
            </div>
            
            {/* Project Content */}
            <div className="p-6">
              <h3 className="text-xl font-semibold mb-3 gradient-text">
                {project.title}
              </h3>
              
              <p className="text-gray-400 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>
              
              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span 
                    key={i} 
                    className="px-2 py-1 bg-blue-500/20 rounded text-xs text-blue-300"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              {/* Project Links */}
              <div className="flex gap-4">
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-gray-400 hover:text-white transition-colors text-sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  GitHub
                </a>
                <a 
                  href={project.demo} 
                  className="inline-flex items-center text-blue-400 hover:text-blue-300 transition-colors text-sm"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection