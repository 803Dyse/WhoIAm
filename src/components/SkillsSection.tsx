"use client";

import { Code, Database, Palette, Cloud, Globe } from "lucide-react";
import { useLanguage } from '@/lib/LanguageContext'

const SkillsSection = () => {
  const { t } = useLanguage()

  const skills = [
    {
      category: t.skills.categories.frontend,
      icon: <Code className="w-6 h-6" />,
      techs: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "JavaScript",
        "HTML/CSS",
        "Bootstrap",
      ],
    },
    {
      category: t.skills.categories.backend,
      icon: <Database className="w-6 h-6" />,
      techs: [
        "PHP",
        "Python",
        "Java",
        "CodeIgniter",
        "REST APIs",
        "Progressive Web Apps",
        "Symphony",
        "JavaFX",
      ],
    },
    {
      category: t.skills.categories.database,
      icon: <Database className="w-6 h-6" />,
      techs: ["MySQL", "MariaDB", "SQLite"],
    },
    {
      category: t.skills.categories.cmsDesign,
      icon: <Palette className="w-6 h-6" />,
      techs: ["WordPress", "Elementor Pro", "UI/UX Design"],
    },
    {
      category: t.skills.categories.devopsCloud,
      icon: <Cloud className="w-6 h-6" />,
      techs: [
        "Docker",
        "AWS",
        "Vercel",
        "GitHub",
        "Bitbucket",
        "Linux",
        "macOS",
        "Windows",
      ],
    },
    {
      category: t.skills.categories.tools,
      icon: <Globe className="w-6 h-6" />,
      techs: [
        "DBeaver",
        "MySQL Workbench",
        "NetBeans",
        "VS Code",
        "IntelliJ IDEA",
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 max-w-7xl mx-auto">
      <h2 className="text-4xl font-bold text-center mb-16">
        <span className="gradient-text">{t.skills.title}</span>
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="glass-card p-6 card-hover transition-all duration-300 hover-scale animate-fade-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-4">
              <div className="text-primary-400 mr-3">{skill.icon}</div>
              <h3 className="text-xl font-semibold text-gray-100">{skill.category}</h3>
            </div>

            <div className="flex flex-wrap gap-2">
              {skill.techs.map((tech, i) => (
                <span
                  key={i}
                  className="px-3 py-1 bg-dark-800/60 rounded-full text-sm text-gray-200 hover:bg-primary-500/20 hover:text-primary-300 transition-all duration-300 border border-dark-600/30 hover:border-primary-500/50"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;