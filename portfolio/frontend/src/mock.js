export const portfolioData = {
  personal: {
    name: "Hakizimana Aymar Davy",
    title: "DevOps Engineer | Software Developer",
    tagline: "Building reliable systems & scalable software",
    email: "aymar.hakizimana@gmail.com",
    phone: "+32487609782",
    location: "Namur, Belgium",
    github: "https://github.com/HaAymar",
    linkedin: "https://linkedin.com/in/aymar-davy",
    cvUrl: "https://customer-assets.emergentagent.com/job_davy-devstack/artifacts/cmuired0_CV.pdf"
  },
  
  about: {
    description: "Passionné par l'automatisation, les systèmes distribués et le développement logiciel. Je conçois des pipelines CI/CD, j'intègre des solutions cloud et je développe des applications performantes. Actuellement en spécialisation DevOps, je maîtrise les technologies de conteneurisation, d'orchestration et d'infrastructure as code. Toujours en quête d'amélioration continue et de nouvelles technologies pour créer des solutions robustes et évolutives.",
    highlights: [
      "Bachelor's Degree in Computer Science (2024)",
      "Spécialisation DevOps en cours (2024-2025)",
      "4+ projets full-stack en production",
      "Expertise en CI/CD et conteneurisation"
    ]
  },
  
  skills: {
    devops: [
      { name: "Docker", level: 90 },
      { name: "Kubernetes", level: 85 },
      { name: "CI/CD", level: 88 },
      { name: "Jenkins", level: 82 },
      { name: "Terraform", level: 80 },
      { name: "Ansible", level: 78 },
      { name: "Git/GitHub", level: 92 }
    ],
    cloud: [
      { name: "Azure", level: 85 },
      { name: "AWS", level: 75 },
      { name: "GCP", level: 70 }
    ],
    backend: [
      { name: "Node.js", level: 90 },
      { name: "Express.js", level: 88 },
      { name: "Nest.js", level: 85 },
      { name: "Python", level: 82 },
      { name: "C#/.NET", level: 75 }
    ],
    frontend: [
      { name: "React", level: 90 },
      { name: "JavaScript", level: 92 },
      { name: "TypeScript", level: 85 },
      { name: "HTML/CSS", level: 95 },
      { name: "Bootstrap", level: 88 }
    ],
    monitoring: [
      { name: "Prometheus", level: 80 },
      { name: "Grafana", level: 82 },
      { name: "SonarQube", level: 78 },
      { name: "ELK Stack", level: 75 }
    ]
  },
  
  projects: [
    {
      id: 1,
      title: "CI/CD Pipeline Automation",
      description: "Pipeline CI/CD complet avec GitHub Actions, Docker et Kubernetes pour déploiement automatisé. Intégration de tests automatisés, analyse de code avec SonarQube et monitoring avec Grafana.",
      technologies: ["GitHub Actions", "Docker", "Kubernetes", "SonarQube", "Grafana"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "DevOps"
    },
    {
      id: 2,
      title: "HiTech-Solutions Platform",
      description: "Plateforme multifonctionnelle pour ONG avec système de support IT et modules de formation. Architecture microservices avec React frontend et Node.js backend.",
      technologies: ["React", "Node.js", "MongoDB", "Express.js", "Azure"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "Full-Stack"
    },
    {
      id: 3,
      title: "Vector-Translator",
      description: "Plateforme de gestion de services de traduction professionnelle. Interface intuitive pour traducteurs et clients, gestion de flux de travail optimisée.",
      technologies: ["React", "Express.js", "PostgreSQL", "Docker"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "Web App"
    },
    {
      id: 4,
      title: "TaalToolBox",
      description: "Application web et mobile pour l'apprentissage des langues avec fonctionnalités avancées de traitement du signal pour interaction améliorée.",
      technologies: ["React Native", "Node.js", "WebRTC", "MongoDB"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "Mobile/Web"
    },
    {
      id: 5,
      title: "Microservices Monitoring Dashboard",
      description: "Dashboard de monitoring complet avec Prometheus et Grafana pour surveiller la santé et les performances d'une architecture microservices.",
      technologies: ["Prometheus", "Grafana", "Docker", "Kubernetes", "Node Exporter"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "Monitoring"
    },
    {
      id: 6,
      title: "Car Rental Platform",
      description: "Plateforme de location de voitures avec gestion complète pour locataires et administrateurs. Interface moderne et expérience utilisateur optimisée.",
      technologies: ["React", "Node.js", "MySQL", "Express.js"],
      github: "https://github.com/HaAymar",
      demo: null,
      category: "Full-Stack"
    }
  ],
  
  experience: [
    {
      id: 1,
      company: "Business Training",
      position: "DevOps Specialist (Formation)",
      period: "Novembre 2024 - Mai 2025",
      location: "Belgium",
      responsibilities: [
        "Spécialisation approfondie en DevOps et Cloud",
        "Maîtrise de Docker, Kubernetes, Terraform, Ansible",
        "Implémentation de pipelines CI/CD avec Jenkins",
        "Monitoring et observabilité avec Grafana et Prometheus"
      ],
      current: true
    },
    {
      id: 2,
      company: "HiTech-Solutions",
      position: "Web Developer",
      period: "Février 2023 - Juin 2023",
      location: "Belgium",
      responsibilities: [
        "Développement d'une plateforme multifonctionnelle pour ONG",
        "Conception de modules de formation et système de support IT",
        "Collaboration avec équipe pour architecture scalable",
        "Mise en place de bonnes pratiques de développement"
      ],
      current: false
    },
    {
      id: 3,
      company: "Viasat Connect",
      position: "Web Developer (Stage)",
      period: "Février 2023 - Mai 2023",
      location: "Belgium",
      responsibilities: [
        "Développement du site Vector Translator",
        "Optimisation des flux de travail de traduction",
        "Collaboration étroite avec équipe de traducteurs",
        "Tests et déploiement de fonctionnalités"
      ],
      current: false
    },
    {
      id: 4,
      company: "EPHEC LLN",
      position: "Web Developer (Projets académiques)",
      period: "Janvier 2022 - Décembre 2022",
      location: "Louvain-la-Neuve",
      responsibilities: [
        "Développement de TaalToolBox (app d'apprentissage de langues)",
        "Création de Car Rental Platform (location de voitures)",
        "Travail en équipe sur projets full-stack",
        "Application des méthodologies Agile"
      ],
      current: false
    }
  ],
  
  education: [
    {
      degree: "Spécialisation DevOps",
      institution: "Business Training",
      period: "2024-2025",
      description: "Formation avancée en DevOps, Cloud et automatisation"
    },
    {
      degree: "Bachelor's Degree in Computer Science",
      institution: "Haute Ecole EPHEC LLN",
      period: "2020-2024",
      description: "Formation complète en développement logiciel et systèmes"
    }
  ],
  
  languages: [
    { name: "Français", level: "Langue maternelle" },
    { name: "Anglais", level: "C1" },
    { name: "Espagnol", level: "B2" }
  ]
};
