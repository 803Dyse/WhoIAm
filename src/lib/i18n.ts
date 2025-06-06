export type Language = 'en' | 'pt' | 'es'

export interface Translations {
  // Navigation
  nav: {
    home: string
    about: string
    skills: string
    projects: string
    education: string
    contact: string
  }
  // Hero Section
  hero: {
    title: string
    subtitle: string
    description: string
    contactButton: string
    githubButton: string
  }
  // About Section
  about: {
    title: string
    description1: string
    description2: string
    description3: string
    location: string
    interests: string
    graduated: string
    passion: string
    polyglot: string
    languages: string
    nationality: string
  }
  // Skills Section
  skills: {
    title: string
    categories: {
      frontend: string
      backend: string
      database: string
      cmsDesign: string
      devopsCloud: string
      tools: string
    }
  }
  // Projects Section
  projects: {
    title: string
    tacebook: {
      description: string
    }
    hangman: {
      description: string
    }
    obraseiro: {
      description: string
    }
    teistris: {
      description: string
    }
  }
  // Education Section
  education: {
    title: string
    graduation: {
      title: string
      subtitle: string
      description: string
    }
    currentStudies: {
      title: string
      subtitle: string
      description: string
    }
    continuousLearning: {
      title: string
      subtitle: string
      description: string
    }
    philosophy: {
      title: string
      quote: string
      description: string
    }
  }
  // Contact Section
  contact: {
    title: string
    subtitle: string
    description: string
    location: string
    readyToStart: string
    readyDescription: string
    sendEmail: string
    connectLinkedIn: string
  }
  // Footer
  footer: {
    description: string
    madeWith: string
    poweredBy: string
  }
}

export const translations: Record<Language, Translations> = {
  en: {
    nav: {
      home: 'Home',
      about: 'About',
      skills: 'Skills',
      projects: 'Projects',
      education: 'Education',
      contact: 'Contact'
    },
    hero: {
      title: 'Alex Martins',
      subtitle: 'Full Stack Web Developer',
      description: 'Passionate about creating amazing digital experiences',
      contactButton: 'Get in Touch',
      githubButton: 'View GitHub'
    },
    about: {
      title: 'About Me',
      description1: 'I am a web developer who loves transforming ideas into reality with the power of programming. I recently graduated (2024) and really enjoy learning new things and new technologies, currently studying Generative AI and LLMs.',
      description2: 'My journey started in network administration, but when I discovered web development, it was love at first sight. Since then, it\'s what I enjoy doing most and it generates enthusiasm to be able to learn and apply new concepts and methodologies.',
      description3: 'I have a sociable profile and am open to new ideas. Learning and absorbing good things will always be my fundamental base to prosper and progress as a professional.',
      location: 'Galicia, Spain',
      interests: 'Generative AI & LLMs',
      graduated: 'Graduated in 2024',
      passion: 'Love discovering and learning!',
      polyglot: 'Polyglot',
      languages: 'Portuguese • English • Spanish • Galician',
      nationality: 'Half 🇪🇸 and half 🇧🇷'
    },
    skills: {
      title: 'Technologies & Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        cmsDesign: 'CMS & Design',
        devopsCloud: 'DevOps & Cloud',
        tools: 'Tools'
      }
    },
    projects: {
      title: 'Projects',
      tacebook: {
        description: 'A social network inspired by Facebook, with real functionalities, where you can add friends, like posts, make posts, chat and much more. Made in Java.'
      },
      hangman: {
        description: 'Hangman game developed in Java, available in single and multiplayer modes. Includes an authentication system and a database to store users and scores.'
      },
      obraseiro: {
        description: 'This was my final graduation project. A website with a complete back-end and front-end where you can place orders, manage them and register users for the "O Braseiro" location (the best griller ever!😎)'
      },
      teistris: {
        description: 'A Tetris mini-game developed in Java, Java Swing and SQLite. Features score tracking and speed increase.'
      }
    },
    education: {
      title: 'Education & Learning',
      graduation: {
        title: 'Degree in Web Application Development',
        subtitle: 'Graduated in 2024',
        description: 'Focus on full-stack development with specialization in modern technologies like React, Next.js, PHP and database systems.'
      },
      currentStudies: {
        title: 'Current Studies',
        subtitle: 'Generative AI & LLMs',
        description: 'Deepening knowledge in Generative Artificial Intelligence, Large Language Models and their applications in web development.'
      },
      continuousLearning: {
        title: 'Continuous Learning',
        subtitle: 'Always updating',
        description: 'Philosophy of constant learning, staying updated with the latest trends and technologies in the development market.'
      },
      philosophy: {
        title: 'Professional Philosophy',
        quote: '"There are no limits to learning for those who are curious."',
        description: 'I have a sociable profile and am open to new ideas. Learning and absorbing good things will always be my fundamental base to prosper and progress as a professional. I always want to connect with more people and learn from them.'
      }
    },
    contact: {
      title: 'Let\'s Talk?',
      subtitle: 'Get in Touch',
      description: 'I am always open to discussing work opportunities and interesting projects. Don\'t hesitate to contact me!',
      location: 'Galicia, Spain • Available for remote work',
      readyToStart: 'Ready to start a project?',
      readyDescription: 'Let\'s turn your ideas into digital reality',
      sendEmail: 'Send Email',
      connectLinkedIn: 'Connect on LinkedIn'
    },
    footer: {
      description: 'Full Stack Web Developer passionate about creating amazing digital experiences. Always looking for new technologies and challenges.',
      madeWith: 'Made with',
      poweredBy: 'Powered by'
    }
  },
  pt: {
    nav: {
      home: 'Início',
      about: 'Sobre',
      skills: 'Skills',
      projects: 'Projetos',
      education: 'Formação',
      contact: 'Contato'
    },
    hero: {
      title: 'Alex Martins',
      subtitle: 'Desenvolvedor Web Full Stack',
      description: 'Apaixonado por criar experiências digitais incríveis',
      contactButton: 'Entre em Contato',
      githubButton: 'Ver GitHub'
    },
    about: {
      title: 'Sobre Mim',
      description1: 'Sou web developer, amo transformar ideias em realidade com o poder da programação. Sou recém-formado (2024) e gosto muito de aprender coisas novas e tecnologias novas, estudando IA Generativa e LLMs ultimamente.',
      description2: 'Minha jornada começou na administração de redes, mas ao descobrir o desenvolvimento web, foi paixão à primeira vista. Desde então, é o que mais gosto de fazer e me gera entusiasmo poder aprender e aplicar novos conceitos e metodologias.',
      description3: 'Tenho um perfil sociável e sou aberto a novas ideias. Aprender e absorver coisas boas sempre será minha base fundamental para prosperar e progredir como profissional.',
      location: 'Galicia, España',
      interests: 'IA Generativa & LLMs',
      graduated: 'Graduado em 2024',
      passion: 'Amo descobrir e aprender!',
      polyglot: 'Poliglota',
      languages: 'Português • Inglês • Español • Galego',
      nationality: 'Metade 🇪🇸 e metade 🇧🇷'
    },
    skills: {
      title: 'Tecnologias & Skills',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Database',
        cmsDesign: 'CMS & Design',
        devopsCloud: 'DevOps & Cloud',
        tools: 'Ferramentas'
      }
    },
    projects: {
      title: 'Projetos',
      tacebook: {
        description: 'Uma rede social inspirada no Facebook, com funcionalidades reais, onde você pode adicionar amigos, curtir postagens, fazer postagens, conversar por chat e muito mais. Feita em Java.'
      },
      hangman: {
        description: 'Jogo da forca desenvolvido em java, disponível em modalidades single e multiplayer. Inclui um sistema de autenticação e um banco de dados para armazenar usuários e pontuações.'
      },
      obraseiro: {
        description: 'Este foi meu projeto final de conclusão de curso. Um site com um back end e front end completo onde você pode fazer pedidos, administrá-los e registrar usuários para o local "O Braseiro"(o melhor assador de todos!😎)'
      },
      teistris: {
        description: 'Um minigame de Tetris desenvolvido em Java, Java Swing e SQLite. Conta com placar de pontuação e ampliação de velocidade.'
      }
    },
    education: {
      title: 'Formação & Aprendizado',
      graduation: {
        title: 'Graduação em Desenvolvimento de Aplicações Web',
        subtitle: 'Formado em 2024',
        description: 'Foco em desenvolvimento full-stack com especialização em tecnologias modernas como React, Next.js, PHP e sistemas de banco de dados.'
      },
      currentStudies: {
        title: 'Estudos Atuais',
        subtitle: 'IA Generativa & LLMs',
        description: 'Aprofundando conhecimentos em Inteligência Artificial Generativa, Large Language Models e suas aplicações em desenvolvimento web.'
      },
      continuousLearning: {
        title: 'Aprendizado Contínuo',
        subtitle: 'Sempre se atualizando',
        description: 'Filosofia de aprendizado constante, mantendo-se atualizado com as últimas tendências e tecnologias do mercado de desenvolvimento.'
      },
      philosophy: {
        title: 'Filosofia Profissional',
        quote: '"Não há limites no aprendizado para aqueles que são curiosos."',
        description: 'Tenho um perfil sociável e sou aberto a novas ideias. Aprender e absorver coisas boas sempre será minha base fundamental para prosperar e progredir como profissional. Sempre quero conectar com mais pessoas e aprender delas.'
      }
    },
    contact: {
      title: 'Vamos Conversar?',
      subtitle: 'Entre em Contato',
      description: 'Estou sempre aberto a discutir oportunidades de trabalho e projetos interessantes. Não hesite em entrar em contato!',
      location: 'Galicia, España • Disponível para trabalho remoto',
      readyToStart: 'Pronto para começar um projeto?',
      readyDescription: 'Vamos transformar suas ideias em realidade digital',
      sendEmail: 'Enviar Email',
      connectLinkedIn: 'Conectar no LinkedIn'
    },
    footer: {
      description: 'Desenvolvedor Web Full Stack apaixonado por criar experiências digitais incríveis. Sempre em busca de novas tecnologias e desafios.',
      madeWith: 'Feito com',
      poweredBy: 'Alimentado por'
    }
  },
  es: {
    nav: {
      home: 'Inicio',
      about: 'Sobre Mí',
      skills: 'Habilidades',
      projects: 'Proyectos',
      education: 'Formación',
      contact: 'Contacto'
    },
    hero: {
      title: 'Alex Martins',
      subtitle: 'Desarrollador Web Full Stack',
      description: 'Apasionado por crear experiencias digitales increíbles',
      contactButton: 'Ponte en Contacto',
      githubButton: 'Ver GitHub'
    },
    about: {
      title: 'Sobre Mí',
      description1: 'Soy desarrollador web, me encanta transformar ideas en realidad con el poder de la programación. Soy recién graduado (2024) y me gusta mucho aprender cosas nuevas y nuevas tecnologías, estudiando IA Generativa y LLMs últimamente.',
      description2: 'Mi viaje comenzó en la administración de redes, pero al descubrir el desarrollo web, fue amor a primera vista. Desde entonces, es lo que más me gusta hacer y me genera entusiasmo poder aprender y aplicar nuevos conceptos y metodologías.',
      description3: 'Tengo un perfil sociable y estoy abierto a nuevas ideas. Aprender y absorber cosas buenas siempre será mi base fundamental para prosperar y progresar como profesional.',
      location: 'Galicia, España',
      interests: 'IA Generativa & LLMs',
      graduated: 'Graduado en 2024',
      passion: '¡Me encanta descubrir y aprender!',
      polyglot: 'Políglota',
      languages: 'Portugués • Inglés • Español • Gallego',
      nationality: 'Mitad 🇪🇸 y mitad 🇧🇷'
    },
    skills: {
      title: 'Tecnologías y Habilidades',
      categories: {
        frontend: 'Frontend',
        backend: 'Backend',
        database: 'Base de Datos',
        cmsDesign: 'CMS y Diseño',
        devopsCloud: 'DevOps y Nube',
        tools: 'Herramientas'
      }
    },
    projects: {
      title: 'Proyectos',
      tacebook: {
        description: 'Una red social inspirada en Facebook, con funcionalidades reales, donde puedes agregar amigos, dar me gusta a publicaciones, hacer publicaciones, chatear y mucho más. Hecha en Java.'
      },
      hangman: {
        description: 'Juego del ahorcado desarrollado en Java, disponible en modalidades single y multijugador. Incluye un sistema de autenticación y una base de datos para almacenar usuarios y puntuaciones.'
      },
      obraseiro: {
        description: 'Este fue mi proyecto final de graduación. Un sitio web con un back-end y front-end completo donde puedes hacer pedidos, administrarlos y registrar usuarios para el local "O Braseiro" (¡el mejor asador de todos!😎)'
      },
      teistris: {
        description: 'Un minijuego de Tetris desarrollado en Java, Java Swing y SQLite. Cuenta con marcador de puntuación y aumento de velocidad.'
      }
    },
    education: {
      title: 'Formación y Aprendizaje',
      graduation: {
        title: 'Grado en Desarrollo de Aplicaciones Web',
        subtitle: 'Graduado en 2024',
        description: 'Enfoque en desarrollo full-stack con especialización en tecnologías modernas como React, Next.js, PHP y sistemas de bases de datos.'
      },
      currentStudies: {
        title: 'Estudios Actuales',
        subtitle: 'IA Generativa y LLMs',
        description: 'Profundizando conocimientos en Inteligencia Artificial Generativa, Large Language Models y sus aplicaciones en desarrollo web.'
      },
      continuousLearning: {
        title: 'Aprendizaje Continuo',
        subtitle: 'Siempre actualizándose',
        description: 'Filosofía de aprendizaje constante, manteniéndose actualizado con las últimas tendencias y tecnologías del mercado de desarrollo.'
      },
      philosophy: {
        title: 'Filosofía Profesional',
        quote: '"No hay límites en el aprendizaje para aquellos que son curiosos."',
        description: 'Tengo un perfil sociable y estoy abierto a nuevas ideas. Aprender y absorber cosas buenas siempre será mi base fundamental para prosperar y progresar como profesional. Siempre quiero conectar con más personas y aprender de ellas.'
      }
    },
    contact: {
      title: '¿Hablamos?',
      subtitle: 'Ponte en Contacto',
      description: 'Siempre estoy abierto a discutir oportunidades de trabajo y proyectos interesantes. ¡No dudes en contactarme!',
      location: 'Galicia, España • Disponible para trabajo remoto',
      readyToStart: '¿Listo para comenzar un proyecto?',
      readyDescription: 'Convirtamos tus ideas en realidad digital',
      sendEmail: 'Enviar Email',
      connectLinkedIn: 'Conectar en LinkedIn'
    },
    footer: {
      description: 'Desarrollador Web Full Stack apasionado por crear experiencias digitales increíbles. Siempre en busca de nuevas tecnologías y desafíos.',
      madeWith: 'Hecho con',
      poweredBy: 'Impulsado por'
    }
  }
}

export function getTranslations(language: Language): Translations {
  return translations[language]
}