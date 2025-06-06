"use client";

import { Github } from "lucide-react";
import Image from "next/image";
import { useLanguage } from '@/lib/LanguageContext'

const ProjectsSection = () => {
  const { t } = useLanguage()

  const projects = [
    {
      title: "Tacebook",
      description: t.projects.tacebook.description,
      tech: ["Java", "Java Swing", "SQLite", "JavaFX", "MySQL Workbench"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/devparada/Tacebook",
    },
    {
      title: "HangMan",
      description: t.projects.hangman.description,
      tech: ["Java", "Java Swing", "SQLite", "JavaFX", "MySQL Workbench"],
      image: "https://images.unsplash.com/photo-1551650975-87deedd944c3?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/803Dyse/Ahorcado",
    },
    {
      title: "OBraseiro",
      description: t.projects.obraseiro.description,
      tech: ["PHP", "JavaScript", "MariaDB", "Symphony", "CodeIgniter 4", "Tailwind CSS", "PhpMyAdmin"],
      image: "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/803Dyse/OBraseiro",
    },
    {
      title: "Teistris",
      description: t.projects.teistris.description,
      tech: ["Java", "Java Swing", "SQLite"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&h=400&fit=crop&crop=entropy&auto=format",
      github: "https://github.com/devparada/Teistris",
    }
  ];

  return (
    <section id="projects" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">{t.projects.title}</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="glass-card overflow-hidden card-hover transition-all duration-300 hover-scale animate-fade-in group"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            {/* Project Image */}
            <div className="relative h-48 overflow-hidden">
              <div className="absolute inset-0 bg-gradient-to-br from-primary-500/20 to-secondary-500/20 z-10"></div>
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

              <p className="text-gray-300 mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech Stack */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.tech.map((tech, i) => (
                  <span
                    key={i}
                    className="px-2 py-1 bg-primary-500/20 rounded text-xs text-primary-300 border border-primary-500/30"
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
                  className="inline-flex items-center text-gray-300 hover:text-primary-400 transition-colors text-sm"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Github
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProjectsSection;