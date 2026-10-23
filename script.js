/**
 * Site configuration — update LinkedIn and GitHub when available.
 */
const SITE = {
  email: "noor.haddad810@gmail.com",
  location: { en: "Tunisia", fr: "Tunisie" },
  linkedin: "https://www.linkedin.com/in/nour-haddad810",
  github: "https://github.com/Haddad-nour",
  cv: {
    en: "assets/cv/CV_Nour_Elislem_Haddad_EN.pdf",
    fr: "assets/cv/CV_Nour_Elislem_Haddad_FR.pdf",
  },
};

const STORAGE_KEY = "portfolio-lang";
const DEFAULT_LANG = "en";

const translations = {
  en: {
    meta: {
      title: "Nour Elislem Haddad | Software Engineer",
      description:
        "Portfolio of Nour Elislem Haddad — Software Engineering graduate specialising in full-stack development, AI integration and DevOps.",
    },
    nav: {
      brand: "Nour Elislem Haddad",
      home: "Home",
      about: "About",
      skills: "Skills",
      experience: "Experience",
      projects: "Projects",
      education: "Education",
      certifications: "Certifications",
      awards: "Awards",
      contact: "Contact",
      menuOpen: "Open menu",
      menuClose: "Close menu",
      langSwitch: "Switch language",
    },
    hero: {
      greeting: "Hello, I'm",
      name: "Nour Elislem Haddad",
      title: "Software Engineer | Full-Stack Developer",
      intro:
        "Software Engineering graduate from ESPRIT with Excellent Honors, specialising in Full-Stack Development, Artificial Intelligence and DevOps. Through my professional internships and academic projects, I have designed and developed web applications integrating modern software architectures, AI functionalities, application security and CI/CD pipelines.",
      expertiseLabel: "Areas of focus",
      expertise: [
        "Full-Stack Development",
        "Artificial Intelligence",
        "Software Engineering",
        "DevOps",
        "Software Architecture",
      ],
      ctaProjects: "Explore My Projects",
      ctaCv: "Download CV",
      cvEn: "English CV",
      cvFr: "French CV",
      awardBadge: "1st Prize of Distinction — PFE Book 2026",
      statAverage: "Overall average",
      statPfe: "PFE grade",
      statHonors: "Excellent",
      statHonorsLabel: "Honors",
    },
    about: {
      title: "About Me",
      p1: "I graduated from ESPRIT with a National Engineering Degree in Computer Science, specialising in Software Engineering. My training covered frontend and backend development, software architecture, artificial intelligence, API integration, security, CI/CD pipelines, databases and software testing.",
      p2: "My professional experience includes two internships at INSOMEA Computer Solutions and a final-year engineering internship at Assurance Zitouna Takaful, where I independently designed and developed NovLexPortal, an intelligent legal litigation management platform.",
      p3: "NovLexPortal was recognised with the 1st Prize of Distinction at the PFE Book 2026 Awards Ceremony organised by Assurance Zitouna Takaful. I am particularly interested in reliable, maintainable and intelligent software systems.",
      highlightsTitle: "Academic highlights",
      highlightDegree: "National Engineering Degree — ESPRIT",
      highlightHonors: "Excellent Honors",
      highlightAverage: "Overall average — 17.70/20",
      highlightPfe: "Final-year project (PFE) — 19/20, Excellent Honors",
      highlightAward: "🏆 1st Prize of Distinction — PFE Book 2026, Zitouna Takaful",
      languagesTitle: "Languages",
      langAr: "Arabic — Native",
      langFr: "French — Fluent",
      langEn: "English — Fluent",
    },
    skills: {
      title: "Technical Skills",
      subtitle: "Technologies and tools I have used in academic and professional projects.",
    },
    experience: {
      title: "Professional Experience",
    },
    projects: {
      title: "Featured Projects",
      subtitle: "A selection of engineering work from internships and academic projects.",
      sectionLabel: "Projects",
      objective: "Objective",
      features: "Key Features",
      aiSection: "Artificial Intelligence",
      securitySection: "Security",
      devopsSection: "DevOps",
      stackSection: "Technology Stack",
      contributionSection: "My Contribution",
      teamNote: "Team Project",
      exploreBtn: "Explore Project",
      closeBtn: "Close",
      videoLabel: "Project demonstration video",
      noMedia: "No demo available",
      problem: "Problem",
      solution: "Solution",
      functionalities: "Main functionalities",
      ai: "Artificial intelligence",
      architecture: "Architecture",
      stack: "Technology stack",
      recognition: "Academic recognition",
      year: "Year",
      category: "Category",
      viewDetails: "View details",
      close: "Close",
      noImage: "Screenshot not yet added",
      noVideo: "Demo video not available",
      noLink: "Not available",
      github: "GitHub",
      demo: "Live demo",
      methodology: "Methodology",
      contribution: "My Contribution",
      teamContribution: "My Personal Contributions",
      teamProject: "Team Project",
      individualProject: "Individual Project",
      supervisedBy: "Under professional supervision",
      backToProjects: "Back to Projects",
      exploreBtn: "Explore Project",
      viewDetails: "View details",
      close: "Close",
      noVideo: "Demo video not available",
    },
    education: {
      title: "Education",
    },
    certifications: {
      title: "Certifications",
      subtitle: "Professional training credentials listed on my CV.",
      viewCert: "View Certificate",
      viewBadge: "View Badge",
      viewGrades: "View Grades",
    },
    awards: {
      title: "Awards & Achievements",
      subtitle: "Academic and professional recognition.",
      item1Title: "1st Prize of Distinction — PFE Book 2026",
      item1Org: "Assurance Zitouna Takaful",
      item1Date: "19 October 2026",
      item1Project: "Project: NovLexPortal",
      item1Desc: "Recipient of the 1st Prize of Distinction at the PFE Book 2026 Awards Ceremony organised by Assurance Zitouna Takaful, recognising my final-year engineering project, NovLexPortal.",
      photoAlt: "Award ceremony — PFE Book 2026, Assurance Zitouna Takaful",
      certAlt: "Certificate of Distinction — PFE Book 2026",
      certLabel: "View Certificate",
      downloadCert: "Download PDF",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Open to software engineering roles, internships and Master's programmes. Feel free to reach out.",
      email: "Email",
      location: "Location",
      linkedin: "LinkedIn",
      phone: "Phone",
      downloadCv: "Download CV",
      cvNote: "Both language versions are available when the PDF files are added to the project.",
    },
    footer: {
      rights: "All rights reserved.",
      built: "Built with HTML, CSS and JavaScript.",
    },
    a11y: {
      profileAlt: "Portrait of Nour Elislem Haddad",
      skip: "Skip to main content",
      external: "(opens in a new tab)",
    },
    pages: {
      backToPortfolio: "Back to Portfolio",
      backToProjects: "← Back to Projects",
      projects: "Projects",
      overview: "Project Overview",
      problem: "Problem Statement",
      solution: "Proposed Solution",
      features: "Main Features",
      contribution: "My Contribution",
      personalContributions: "My Personal Contributions",
      architecture: "Technical Architecture",
      aiSection: "Artificial Intelligence",
      securitySection: "Security",
      devopsSection: "DevOps",
      methodologySection: "Development Methodology",
      stackSection: "Technology Stack",
      projectInfo: "Project Information",
      year: "Year",
      institution: "Institution / Company",
      type: "Project Type",
      demo: "Project Demonstration",
      videoCaption: "Project demonstration video",
      technicalReport: "Technical Report",
      pfeReportTitle: "PFE Report — NovLexPortal",
      viewReport: "Consult Report",
      downloadPdf: "Download PDF",
    },
    projectPages: {
      novlex: {
        title: "NovLexPortal",
        subtitle: "Intelligent Legal Litigation Management Platform",
        type: "Individual Final-Year Engineering Project — Assurance Zitouna Takaful",
        methodology: "Incremental Development Approach — 5 Iterations",
        overview: "NovLexPortal is a Full-Stack web platform designed to digitalise and streamline legal litigation management at Assurance Zitouna Takaful. It centralises case tracking, document processing, access management and administrative workflows, while integrating AI services for document analysis and intelligent recommendations.",
        problem: "Legal teams at Zitouna Takaful managed litigation cases manually across disconnected documents and spreadsheets. This approach lacked structure, made case tracking difficult and provided no audit trail.",
        solution: "NovLexPortal provides a centralised digital platform for the full litigation lifecycle. A dedicated AI microservice handles document intelligence tasks separately from the core application, ensuring modularity and maintainability.",
        methodologyDesc: "NovLexPortal was developed using an incremental approach structured into five iterations. This methodology enabled the progressive implementation of platform functionalities, integration of technical components and validation of results at each stage.",
        contribution: "Individual final-year engineering project independently designed and developed under professional supervision. I was responsible for functional analysis, system design, frontend and backend development, AI service integration, access management, testing and CI/CD pipeline implementation.",
        features: ["Litigation case management and tracking", "Legal document management and versioning", "Advanced search and filtering", "User, role and permission management", "Notifications and automated reminders", "Excel import/export and PDF reporting", "Audit trail and activity traceability", "AI-assisted document processing"],
        ai: ["Hybrid recommendation engine: business rules + Gradient Boosting + fine-tuned SentenceTransformer + FAISS semantic search", "OCR integration for scanned legal documents", "Automatic text summarisation", "French/Arabic translation pipeline"],
        security: ["Keycloak identity management and authentication", "OpenFGA fine-grained authorisation", "Role-based access control"],
        devops: ["Jenkins CI/CD pipeline", "Docker containerisation", "SonarQube code quality analysis"],
        architecture: ["Angular 20.3 frontend (Single Page Application)", "Quarkus backend (Java 17, REST APIs)", "FastAPI AI microservice (Python)", "PostgreSQL 16 database", "Keycloak for identity management", "OpenFGA for fine-grained authorisation", "Jenkins + Docker + SonarQube for CI/CD"],
        award: "1st Prize of Distinction — PFE Book 2026, Assurance Zitouna Takaful",
        iterations: { i1: "Iteration 1", i2: "Iteration 2", i3: "Iteration 3", i4: "Iteration 4", i5: "Iteration 5" },
      },
      ecommerce: {
        title: "Intelligent E-Commerce Platform",
        subtitle: "Full-Stack E-Commerce with AI Integration",
        type: "Individual Internship Project — INSOMEA Computer Solutions (Microsoft Partner)",
        methodology: "Agile Scrum",
        overview: "Development of a Full-Stack e-commerce application integrating an intelligent chatbot, a product recommendation system, secured REST APIs and responsive user interfaces, completed as part of a software engineering internship at INSOMEA Computer Solutions.",
        problem: "The client needed a modern online shopping platform that goes beyond basic product listing, offering customers an intelligent shopping experience with personalised product discovery.",
        solution: "A Full-Stack application combining an Angular storefront, Spring Boot REST API layer and a Flask-based AI service for chatbot support and product recommendations, secured with Spring Security.",
        methodologyDesc: "Project developed using the Agile Scrum methodology, supporting iterative development, feature planning, progress monitoring and continuous improvement.",
        contribution: "Individual project completed under professional supervision. I was responsible for frontend development, Spring Boot REST API implementation, Flask AI recommendation service and Spring Security integration.",
        features: ["Full e-commerce shopping workflows", "Product catalogue and management", "Intelligent chatbot for customer support", "AI-based product recommendation system", "Secure REST API integration", "Responsive frontend interfaces", "Authentication and authorisation with Spring Security"],
        architecture: ["Angular frontend (SPA, responsive)", "Spring Boot backend (Java, REST APIs)", "Flask AI microservice (Python)", "MySQL database", "Spring Security for authentication and authorisation"],
      },
      charity: {
        title: "Solidarity & Refugee",
        subtitle: "AI-Powered Humanitarian Support Platform",
        type: "Academic Integration Project — Team Project (ESPRIT)",
        methodology: "Agile Scrum",
        overview: "A Full-Stack humanitarian platform facilitating collaboration between associations, volunteers, donors and beneficiaries. The platform integrates AI-powered recommendations to improve donation relevance, volunteer matching and coordinated support.",
        problem: "Humanitarian organisations lacked a unified digital platform to coordinate donations, volunteers and support for beneficiaries efficiently, resulting in fragmented and disconnected workflows.",
        solution: "A collaborative platform centralising humanitarian workflows with a dedicated AI recommendation layer for matching donors to causes, volunteers to missions and users to relevant content.",
        methodologyDesc: "Project developed using the Agile Scrum methodology, supporting iterative development, feature planning, progress monitoring and continuous improvement.",
        contribution: "Collaborative team project. My personal contributions include: PDF certificate generation, event calendar functionality, posts management module, crisis management module, and development of an AI recommendation system based on user preferences inferred from post interactions (likes and comments).",
        personalContributions: ["PDF certificate generation for training workflows", "Event calendar development", "Posts management functionality", "Crisis management module", "AI recommendation system based on user post interactions (likes and comments)"],
        features: ["Association and NGO management", "Donation management workflows", "Volunteer mission management", "AI-powered recommendation system", "Job matching and support services", "Crisis management and geolocated alerts", "Events, training and healthcare services", "Authentication and application security"],
        architecture: ["Angular frontend (SPA)", "Spring Boot backend (Java, REST APIs)", "Python AI recommendation module", "MySQL database", "Spring Security + JWT authentication"],
      },
      speedygo: {
        title: "SpeedyGo",
        subtitle: "Smart Delivery and Transportation Platform",
        type: "Academic Integration Project — Team Project (ESPRIT)",
        methodology: "Agile Scrum",
        overview: "SpeedyGo is a Full-Stack delivery and transportation platform combining parcel management, carpooling, trip planning, driver management, tracking and payment workflows, developed collaboratively as part of an academic integration project.",
        problem: "Students needed to design and implement a comprehensive multi-service logistics platform covering the full delivery lifecycle, including parcels, carpooling and driver management.",
        solution: "SpeedyGo unifies parcel delivery, carpooling and transportation management in one platform, with separate modules for each service communicating via REST APIs and integrated with Stripe for payments.",
        methodologyDesc: "Project developed using the Agile Scrum methodology, supporting iterative development, feature planning, progress monitoring and continuous improvement.",
        contribution: "Collaborative team project. My personal contributions include: carpooling management module, parcel management functionality, and Stripe payment integration for parcel-related transactions.",
        personalContributions: ["Carpooling management module", "Parcel management functionality", "Stripe payment integration for parcel transactions"],
        features: ["Parcel management and tracking", "Trip and carpooling management", "Driver and vehicle management", "Route-related functionalities", "Payment and subscription management via Stripe", "Internal chat and communication", "Complaint management"],
        architecture: ["Angular 19 frontend (SPA)", "Spring Boot backend (Java, REST APIs)", "Flask Python service", "MySQL database", "Spring Security + JWT", "Stripe API for payments"],
      },
      elearning: {
        title: "E-Learning Platform",
        subtitle: "Web-Based Learning Management System",
        type: "Individual Academic Project — ESPRIT",
        methodology: "Agile Scrum",
        overview: "Development of a web-based learning management platform supporting course organisation, user management and essential e-learning functionalities, completed as an individual academic project at ESPRIT.",
        problem: "A need for a structured and functional LMS enabling educators to manage courses and students to access learning content through a clean web interface.",
        solution: "A Symfony-based MVC web application providing complete course and user management, enrolment workflows and an administrative dashboard with a clean and functional interface.",
        methodologyDesc: "Project developed using the Agile Scrum methodology, supporting iterative development, feature planning, progress monitoring and continuous improvement.",
        contribution: "Individual academic project. I designed and developed the full application: course and user management, enrolment workflows, content organisation and the admin dashboard.",
        features: ["Course creation and management", "User and student management", "Course enrolment workflows", "Content organisation and delivery", "Admin dashboard and management interface"],
        architecture: ["Symfony PHP framework (MVC architecture)", "MySQL relational database", "HTML/CSS/JavaScript frontend", "Git version control"],
        noMedia: "No demonstration video or screenshots are available for this project. The application was a complete and functional academic deliverable.",
      },
      gym: {
        title: "Gym Management Application",
        subtitle: "Full-Stack Web Application for Gym Operations",
        type: "Individual Internship Project — INSOMEA Computer Solutions",
        methodology: "Agile Scrum",
        overview: "Development of a Full-Stack gym management web application supporting membership administration, reservations and operational workflows, completed as an individual internship project at INSOMEA Computer Solutions.",
        problem: "A gym operator needed to replace manual membership and reservation management with a structured web application that supports all operational workflows.",
        solution: "A Full-Stack Angular and Flask application with a MySQL database, providing complete gym management including memberships, reservations and administrative operations.",
        methodologyDesc: "Project developed using the Agile Scrum methodology, supporting iterative development, feature planning, progress monitoring and continuous improvement.",
        contribution: "Individual project developed under professional supervision. I built the complete application: membership management system, reservation module, administrative workflows and full database integration.",
        features: ["Membership management and administration", "Reservation and booking system", "Gym administration workflows", "Frontend and backend integration", "Database management"],
        architecture: ["Angular frontend (SPA, responsive)", "Flask backend (Python, REST API)", "MySQL relational database", "Postman for API testing and documentation"],
        noMedia: "No demonstration video or screenshots are available for this project. The application was a complete and functional deliverable.",
      },
    },
  },
  fr: {
    meta: {
      title: "Nour Elislem Haddad | Ingénieure en Génie Logiciel",
      description:
        "Portfolio de Nour Elislem Haddad — Diplômée en Génie Logiciel, développement full-stack, intégration IA et DevOps.",
    },
    nav: {
      brand: "Nour Elislem Haddad",
      home: "Accueil",
      about: "À propos",
      skills: "Compétences",
      experience: "Expériences",
      projects: "Projets",
      education: "Formation",
      certifications: "Certifications",
      awards: "Distinctions",
      contact: "Contact",
      menuOpen: "Ouvrir le menu",
      menuClose: "Fermer le menu",
      langSwitch: "Changer de langue",
    },
    hero: {
      greeting: "Bonjour, je suis",
      name: "Nour Elislem Haddad",
      title: "Ingénieure en Génie Logiciel | Développeuse Full-Stack",
      intro:
        "Ingénieure en Génie Logiciel diplômée d'ESPRIT avec la mention Excellente, spécialisée en développement Full-Stack, intelligence artificielle et DevOps. À travers mes stages professionnels et mes projets académiques, j'ai conçu et développé des applications web intégrant des architectures logicielles modernes, des fonctionnalités d'IA, des systèmes de sécurité et des pipelines CI/CD.",
      expertiseLabel: "Domaines d'expertise",
      expertise: [
        "Développement Full-Stack",
        "Intelligence artificielle",
        "Génie logiciel",
        "DevOps",
        "Architecture logicielle",
      ],
      ctaProjects: "Découvrir mes projets",
      ctaCv: "Télécharger mon CV",
      cvEn: "CV anglais",
      cvFr: "CV français",
      awardBadge: "1er Prix de Distinction — PFE Book 2026",
      statAverage: "Moyenne générale",
      statPfe: "Note PFE",
      statHonors: "Excellente",
      statHonorsLabel: "Mention",
    },
    about: {
      title: "À propos",
      p1: "Je suis diplômée de l'ESPRIT, Diplôme National d'Ingénieur en Informatique, spécialité Génie Logiciel. Ma formation a couvert le développement frontend et backend, l'architecture logicielle, l'intelligence artificielle, l'intégration d'API, la sécurité, les pipelines CI/CD, les bases de données et les tests logiciels.",
      p2: "Mon expérience professionnelle comprend deux stages chez INSOMEA Computer Solutions et un stage de fin d'études chez Assurance Zitouna Takaful, où j'ai conçu et développé de manière individuelle NovLexPortal, une plateforme intelligente de gestion des contentieux judiciaires.",
      p3: "NovLexPortal a été récompensé du 1er Prix de Distinction lors de la cérémonie PFE Book 2026 organisée par Assurance Zitouna Takaful. Je m'intéresse particulièrement aux systèmes logiciels fiables, maintenables et intelligents.",
      highlightsTitle: "Points académiques",
      highlightDegree: "Diplôme National d'Ingénieur — ESPRIT",
      highlightHonors: "Mention Excellente",
      highlightAverage: "Moyenne générale — 17,70/20",
      highlightPfe: "Projet de fin d'études — 19/20, Mention excellente",
      highlightAward: "🏆 1er Prix de Distinction — PFE Book 2026, Zitouna Takaful",
      languagesTitle: "Langues",
      langAr: "Arabe — Langue maternelle",
      langFr: "Français — Courant",
      langEn: "Anglais — Courant",
    },
    skills: {
      title: "Compétences techniques",
      subtitle:
        "Technologies et outils utilisés dans mes projets académiques et professionnels.",
    },
    experience: {
      title: "Expériences professionnelles",
    },
    projects: {
      title: "Projets",
      subtitle: "Une sélection de réalisations en stage et en formation d'ingénieur.",
      sectionLabel: "Projets",
      objective: "Objectif",
      features: "Fonctionnalités clés",
      aiSection: "Intelligence artificielle",
      securitySection: "Sécurité",
      devopsSection: "DevOps",
      stackSection: "Stack technique",
      contributionSection: "Ma contribution",
      teamNote: "Projet en équipe",
      exploreBtn: "Découvrir le projet",
      closeBtn: "Fermer",
      videoLabel: "Vidéo de démonstration",
      noMedia: "Démo non disponible",
      problem: "Problématique",
      solution: "Solution",
      functionalities: "Fonctionnalités principales",
      ai: "Intelligence artificielle",
      architecture: "Architecture",
      stack: "Stack technique",
      recognition: "Reconnaissance académique",
      year: "Année",
      category: "Catégorie",
      viewDetails: "Voir les détails",
      close: "Fermer",
      noImage: "Capture d'écran à ajouter",
      noVideo: "Vidéo de démonstration non disponible",
      noLink: "Non disponible",
      github: "GitHub",
      demo: "Démo en ligne",
      methodology: "Méthodologie",
      contribution: "Ma contribution",
      teamContribution: "Mes contributions personnelles",
      teamProject: "Projet en équipe",
      individualProject: "Projet individuel",
      supervisedBy: "Sous encadrement professionnel",
      backToProjects: "Retour aux projets",
      exploreBtn: "Découvrir le projet",
      viewDetails: "Voir les détails",
      close: "Fermer",
      noVideo: "Vidéo de démonstration non disponible",
    },
    education: {
      title: "Formation",
    },
    certifications: {
      title: "Certifications",
      subtitle: "Certifications professionnelles figurant sur mon CV.",
      viewCert: "Voir le certificat",
      viewBadge: "Voir le badge",
      viewGrades: "Voir les notes",
    },
    awards: {
      title: "Distinctions et Réalisations",
      subtitle: "Reconnaissances académiques et professionnelles.",
      item1Title: "1er Prix de Distinction — PFE Book 2026",
      item1Org: "Assurance Zitouna Takaful",
      item1Date: "19 octobre 2026",
      item1Project: "Projet : NovLexPortal",
      item1Desc: "Lauréate du 1er Prix de Distinction lors de la cérémonie PFE Book 2026 organisée par Assurance Zitouna Takaful, récompensant mon projet de fin d'études NovLexPortal.",
      photoAlt: "Cérémonie de remise des prix — PFE Book 2026, Assurance Zitouna Takaful",
      certAlt: "Attestation de Distinction — PFE Book 2026",
      certLabel: "Voir l'attestation",
      downloadCert: "Télécharger le PDF",
    },
    contact: {
      title: "Contact",
      subtitle:
        "Disponible pour des postes en génie logiciel, des stages et des candidatures en Master. N'hésitez pas à me contacter.",
      email: "E-mail",
      location: "Localisation",
      linkedin: "LinkedIn",
      phone: "Téléphone",
      downloadCv: "Télécharger le CV",
      cvNote:
        "Les deux versions linguistiques sont proposées lorsque les fichiers PDF sont ajoutés au projet.",
    },
    footer: {
      rights: "Tous droits réservés.",
      built: "Site réalisé en HTML, CSS et JavaScript.",
    },
    a11y: {
      profileAlt: "Portrait de Nour Elislem Haddad",
      skip: "Aller au contenu principal",
      external: "(ouvre un nouvel onglet)",
    },
    pages: {
      backToPortfolio: "Retour au portfolio",
      backToProjects: "← Retour aux projets",
      projects: "Projets",
      overview: "Présentation du projet",
      problem: "Problématique",
      solution: "Solution proposée",
      features: "Fonctionnalités principales",
      contribution: "Ma contribution",
      personalContributions: "Mes contributions personnelles",
      architecture: "Architecture technique",
      aiSection: "Intelligence artificielle",
      securitySection: "Sécurité",
      devopsSection: "DevOps",
      methodologySection: "Méthodologie de développement",
      stackSection: "Stack technique",
      projectInfo: "Informations sur le projet",
      year: "Année",
      institution: "Institution / Entreprise",
      type: "Type de projet",
      demo: "Démonstration",
      videoCaption: "Vidéo de démonstration du projet",
      technicalReport: "Rapport technique",
      pfeReportTitle: "Rapport PFE — NovLexPortal",
      viewReport: "Consulter le rapport",
      downloadPdf: "Télécharger le PDF",
    },
    projectPages: {
      novlex: {
        title: "NovLexPortal",
        subtitle: "Plateforme intelligente de gestion des contentieux judiciaires",
        type: "Projet de Fin d'Études individuel — Assurance Zitouna Takaful",
        methodology: "Approche incrémentale — 5 itérations",
        overview: "NovLexPortal est une plateforme web Full-Stack dédiée à la digitalisation et à l'optimisation de la gestion des contentieux judiciaires chez Assurance Zitouna Takaful. Elle centralise le suivi des dossiers, la gestion documentaire, le contrôle des accès et les processus administratifs, tout en intégrant des services d'intelligence artificielle.",
        problem: "Les équipes juridiques de Zitouna Takaful géraient les dossiers contentieux manuellement, via des documents et tableurs déconnectés. Cette approche manquait de structure, rendait le suivi difficile et ne fournissait aucune traçabilité.",
        solution: "NovLexPortal fournit une plateforme numérique centralisée pour l'ensemble du cycle de vie des contentieux. Un microservice IA dédié traite les tâches d'intelligence documentaire séparément de l'application principale.",
        methodologyDesc: "NovLexPortal a été réalisé selon une approche incrémentale structurée en cinq itérations. Cette organisation a permis de développer progressivement les fonctionnalités de la plateforme, d'intégrer les différents composants techniques et de valider les résultats à chaque étape.",
        contribution: "Projet de fin d'études individuel, entièrement conçu et développé sous encadrement professionnel. J'ai pris en charge l'analyse fonctionnelle, la conception, le développement frontend et backend, l'intégration des services d'IA, la gestion des accès, les tests et la mise en place du pipeline CI/CD.",
        features: ["Gestion et suivi des dossiers contentieux", "Gestion documentaire et versioning", "Recherche et filtres avancés", "Gestion des utilisateurs, rôles et permissions", "Notifications et rappels automatisés", "Import/export Excel et rapports PDF", "Traçabilité et audit des activités", "Traitement documentaire assisté par IA"],
        ai: ["Moteur de recommandation hybride : règles métier + Gradient Boosting + SentenceTransformer fine-tuné + recherche sémantique FAISS", "Intégration OCR pour les documents juridiques numérisés", "Résumé automatique de texte", "Pipeline de traduction français/arabe"],
        security: ["Gestion des identités et authentification Keycloak", "Autorisation fine-grained OpenFGA", "Contrôle d'accès par rôles"],
        devops: ["Pipeline CI/CD Jenkins", "Conteneurisation Docker", "Analyse de qualité de code SonarQube"],
        architecture: ["Frontend Angular 20.3 (Single Page Application)", "Backend Quarkus (Java 17, API REST)", "Microservice IA FastAPI (Python)", "Base de données PostgreSQL 16", "Keycloak pour la gestion des identités", "OpenFGA pour l'autorisation fine", "Jenkins + Docker + SonarQube pour CI/CD"],
        award: "1er Prix de Distinction — PFE Book 2026, Assurance Zitouna Takaful",
        iterations: { i1: "Itération 1", i2: "Itération 2", i3: "Itération 3", i4: "Itération 4", i5: "Itération 5" },
      },
      ecommerce: {
        title: "Plateforme e-commerce intelligente",
        subtitle: "Application e-commerce Full-Stack avec intégration IA",
        type: "Projet de stage individuel — INSOMEA Computer Solutions (Microsoft Partner)",
        methodology: "Agile Scrum",
        overview: "Développement d'une application e-commerce Full-Stack intégrant un chatbot intelligent, un système de recommandation de produits, des API REST sécurisées et des interfaces responsives, réalisé dans le cadre d'un stage d'ingénieur chez INSOMEA Computer Solutions.",
        problem: "Le client avait besoin d'une plateforme d'achat en ligne moderne offrant aux clients une expérience intelligente de découverte de produits, au-delà d'une simple liste de produits.",
        solution: "Une application Full-Stack combinant un frontend Angular, une couche API REST Spring Boot et un service IA Flask pour le chatbot et les recommandations, sécurisée avec Spring Security.",
        methodologyDesc: "Projet développé selon la méthodologie Agile Scrum, favorisant une organisation itérative du travail, la planification des fonctionnalités, le suivi de l'avancement et l'amélioration continue.",
        contribution: "Projet individuel réalisé sous encadrement professionnel. J'ai développé le frontend, les API REST Spring Boot, le service de recommandation IA Flask et l'intégration Spring Security.",
        features: ["Parcours d'achat e-commerce complet", "Catalogue et gestion des produits", "Chatbot intelligent pour le support client", "Système de recommandation basé sur l'IA", "Intégration d'API REST sécurisées", "Interfaces frontend responsives", "Authentification et autorisation avec Spring Security"],
        architecture: ["Frontend Angular (SPA, responsive)", "Backend Spring Boot (Java, API REST)", "Microservice IA Flask (Python)", "Base de données MySQL", "Spring Security pour l'authentification et l'autorisation"],
      },
      charity: {
        title: "Solidarity & Refugee",
        subtitle: "Plateforme intelligente de solidarité et d'aide aux réfugiés",
        type: "Projet d'intégration académique — Projet en équipe (ESPRIT)",
        methodology: "Agile Scrum",
        overview: "Plateforme humanitaire Full-Stack facilitant la collaboration entre associations, bénévoles, donateurs et bénéficiaires. Elle intègre un système de recommandation IA pour améliorer la pertinence des dons, le matching bénévoles et le soutien coordonné.",
        problem: "Les organisations humanitaires manquaient d'une plateforme numérique unifiée pour coordonner efficacement les dons, les bénévoles et le soutien aux bénéficiaires, entraînant des workflows fragmentés.",
        solution: "Une plateforme collaborative centralisant les workflows humanitaires avec une couche de recommandation IA dédiée pour connecter donateurs et causes, bénévoles et missions, et utilisateurs aux contenus pertinents.",
        methodologyDesc: "Projet développé selon la méthodologie Agile Scrum, favorisant une organisation itérative du travail, la planification des fonctionnalités, le suivi de l'avancement et l'amélioration continue.",
        contribution: "Projet réalisé en équipe. Mes contributions personnelles incluent : la génération de certificats PDF, le calendrier des événements, la gestion des publications, le module de gestion des crises, et le développement d'un système de recommandation basé sur les préférences des utilisateurs déduites de leurs interactions (mentions J'aime et commentaires).",
        personalContributions: ["Génération de certificats PDF pour la gestion des formations", "Développement du calendrier des événements", "Fonctionnalités de gestion des publications", "Module de gestion des crises", "Système de recommandation basé sur les interactions des utilisateurs avec les publications"],
        features: ["Gestion des associations et ONG", "Gestion des dons", "Gestion des missions bénévoles", "Système de recommandation basé sur l'IA", "Matching emploi et services de soutien", "Gestion des crises et alertes géolocalisées", "Événements, formations et services de santé", "Authentification et sécurité applicative"],
        architecture: ["Frontend Angular (SPA)", "Backend Spring Boot (Java, API REST)", "Module IA Python pour les recommandations", "Base de données MySQL", "Authentification Spring Security + JWT"],
      },
      speedygo: {
        title: "SpeedyGo",
        subtitle: "Plateforme intelligente de livraison et de transport",
        type: "Projet d'intégration académique — Projet en équipe (ESPRIT)",
        methodology: "Agile Scrum",
        overview: "SpeedyGo est une plateforme Full-Stack de livraison et de transport regroupant la gestion des colis, du covoiturage, des trajets, des conducteurs, du suivi et des paiements, développée en équipe dans le cadre d'un projet d'intégration académique.",
        problem: "Les étudiants devaient concevoir une plateforme logistique multi-services complète couvrant l'ensemble du cycle de livraison, incluant colis, covoiturage et gestion des conducteurs.",
        solution: "SpeedyGo unifie la livraison de colis, le covoiturage et la gestion des transports dans une seule plateforme, avec des modules séparés communicant via des API REST et intégrés à Stripe pour les paiements.",
        methodologyDesc: "Projet développé selon la méthodologie Agile Scrum, favorisant une organisation itérative du travail, la planification des fonctionnalités, le suivi de l'avancement et l'amélioration continue.",
        contribution: "Projet réalisé en équipe. Mes contributions personnelles incluent : le module de gestion du covoiturage, les fonctionnalités de gestion des colis, et l'intégration de Stripe pour les paiements liés aux colis.",
        personalContributions: ["Module de gestion du covoiturage", "Fonctionnalités de gestion des colis", "Intégration de Stripe pour les paiements liés aux colis"],
        features: ["Gestion et suivi des colis", "Gestion des trajets et du covoiturage", "Gestion des conducteurs et des véhicules", "Fonctionnalités d'itinéraire", "Gestion des paiements et abonnements via Stripe", "Chat et communication interne", "Gestion des réclamations"],
        architecture: ["Frontend Angular 19 (SPA)", "Backend Spring Boot (Java, API REST)", "Service Flask Python", "Base de données MySQL", "Spring Security + JWT", "API Stripe pour les paiements"],
      },
      elearning: {
        title: "Plateforme e-learning",
        subtitle: "Système de gestion de l'apprentissage en ligne",
        type: "Projet académique individuel — ESPRIT",
        methodology: "Agile Scrum",
        overview: "Développement d'une plateforme web de gestion de l'apprentissage permettant l'organisation des cours, la gestion des utilisateurs et les principales fonctionnalités d'e-learning, réalisé en tant que projet académique individuel à l'ESPRIT.",
        problem: "Besoin d'un LMS structuré et fonctionnel permettant aux formateurs de gérer les cours et aux apprenants d'accéder aux contenus via une interface web claire.",
        solution: "Une application web Symfony MVC offrant une gestion complète des cours et des utilisateurs, des parcours d'inscription et un tableau de bord administrateur avec une interface propre et fonctionnelle.",
        methodologyDesc: "Projet développé selon la méthodologie Agile Scrum, favorisant une organisation itérative du travail, la planification des fonctionnalités, le suivi de l'avancement et l'amélioration continue.",
        contribution: "Projet académique individuel. J'ai conçu et développé l'application complète : gestion des cours et des utilisateurs, parcours d'inscription, organisation des contenus et tableau de bord administrateur.",
        features: ["Création et gestion des cours", "Gestion des utilisateurs et des étudiants", "Parcours d'inscription aux cours", "Organisation et diffusion des contenus", "Interface d'administration"],
        architecture: ["Framework Symfony PHP (architecture MVC)", "Base de données relationnelle MySQL", "Frontend HTML/CSS/JavaScript", "Contrôle de version Git"],
        noMedia: "Aucune vidéo de démonstration ni capture d'écran n'est disponible pour ce projet. L'application était un livrable académique complet et fonctionnel.",
      },
      gym: {
        title: "Application de gestion de salle de sport",
        subtitle: "Application web Full-Stack pour la gestion d'une salle de sport",
        type: "Projet de stage individuel — INSOMEA Computer Solutions",
        methodology: "Agile Scrum",
        overview: "Développement d'une application web Full-Stack de gestion de salle de sport intégrant la gestion des adhésions, les réservations et les workflows administratifs, réalisé dans le cadre d'un stage chez INSOMEA Computer Solutions.",
        problem: "Un gérant de salle de sport avait besoin de remplacer la gestion manuelle des adhésions et des réservations par une application web structurée couvrant tous les workflows opérationnels.",
        solution: "Une application Full-Stack Angular et Flask avec une base de données MySQL, offrant une gestion complète de la salle de sport : adhésions, réservations et opérations administratives.",
        methodologyDesc: "Projet développé selon la méthodologie Agile Scrum, favorisant une organisation itérative du travail, la planification des fonctionnalités, le suivi de l'avancement et l'amélioration continue.",
        contribution: "Projet individuel réalisé sous encadrement professionnel. J'ai développé l'application complète : système de gestion des adhésions, module de réservation, workflows administratifs et intégration complète de la base de données.",
        features: ["Gestion et administration des adhésions", "Système de réservation", "Workflows d'administration", "Intégration frontend/backend", "Gestion de base de données"],
        architecture: ["Frontend Angular (SPA, responsive)", "Backend Flask (Python, API REST)", "Base de données relationnelle MySQL", "Tests et documentation API avec Postman"],
        noMedia: "Aucune vidéo de démonstration ni capture d'écran n'est disponible pour ce projet. L'application était un livrable complet et fonctionnel.",
      },
    },
  },
};

const skillCategories = {
  en: [
    {
      title: "Programming Languages",
      items: [
        "Java",
        "Python",
        "C#",
        "C",
        "TypeScript",
        "JavaScript",
        "SQL",
        "PHP",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Frontend Development",
      items: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Responsive Web Design",
      ],
    },
    {
      title: "Backend Development",
      items: [
        "Spring Boot",
        "Spring Security",
        "Quarkus",
        "FastAPI",
        "Flask",
        "Symfony",
        "Java",
        "Python",
        "PHP",
        "REST API Development",
      ],
    },
    {
      title: "Artificial Intelligence & ML",
      items: [
        "Machine Learning",
        "Natural Language Processing (NLP)",
        "Sentence Transformers",
        "Semantic Similarity",
        "FAISS",
        "Gradient Boosting",
        "Recommendation Systems",
        "OCR Integration",
        "Text Summarisation",
        "Machine Translation",
        "Python",
      ],
    },
    {
      title: "Databases",
      items: ["PostgreSQL", "MySQL", "H2"],
    },
    {
      title: "DevOps & CI/CD",
      items: [
        "Docker",
        "Jenkins",
        "SonarQube",
        "Git",
        "Maven",
        "CI/CD Pipelines",
        "Docker Compose",
      ],
    },
    {
      title: "Security",
      items: [
        "Keycloak",
        "OpenFGA",
        "Spring Security",
        "Role-Based Access Control",
        "Application Security",
      ],
    },
    {
      title: "Tools & Methodologies",
      items: [
        "Git",
        "GitHub",
        "IntelliJ IDEA",
        "VS Code",
        "Visual Studio",
        "Postman",
        "Swagger",
        "Jira",
        "UML",
        "Agile / Scrum",
        "Power BI",
        "Excel",
        "Linux / Ubuntu",
        "Windows",
        "VirtualBox",
      ],
    },
  ],
  fr: [
    {
      title: "Langages de programmation",
      items: [
        "Java",
        "Python",
        "C#",
        "C",
        "TypeScript",
        "JavaScript",
        "SQL",
        "PHP",
        "HTML5",
        "CSS3",
      ],
    },
    {
      title: "Développement frontend",
      items: [
        "Angular",
        "TypeScript",
        "JavaScript",
        "HTML5",
        "CSS3",
        "Web responsive",
      ],
    },
    {
      title: "Développement backend",
      items: [
        "Spring Boot",
        "Spring Security",
        "Quarkus",
        "FastAPI",
        "Flask",
        "Symfony",
        "Java",
        "Python",
        "PHP",
        "API REST",
      ],
    },
    {
      title: "Intelligence artificielle & ML",
      items: [
        "Machine Learning",
        "Traitement du langage naturel (NLP)",
        "Sentence Transformers",
        "Similarité sémantique",
        "FAISS",
        "Gradient Boosting",
        "Systèmes de recommandation",
        "Intégration OCR",
        "Résumé de texte",
        "Traduction automatique",
        "Python",
      ],
    },
    {
      title: "Bases de données",
      items: ["PostgreSQL", "MySQL", "H2"],
    },
    {
      title: "DevOps & CI/CD",
      items: [
        "Docker",
        "Jenkins",
        "SonarQube",
        "Git",
        "Maven",
        "Pipelines CI/CD",
        "Docker Compose",
      ],
    },
    {
      title: "Sécurité",
      items: [
        "Keycloak",
        "OpenFGA",
        "Spring Security",
        "Contrôle d'accès par rôles",
        "Sécurité applicative",
      ],
    },
    {
      title: "Outils & méthodes",
      items: [
        "Git",
        "GitHub",
        "IntelliJ IDEA",
        "VS Code",
        "Visual Studio",
        "Postman",
        "Swagger",
        "Jira",
        "UML",
        "Agile / Scrum",
        "Power BI",
        "Excel",
        "Linux / Ubuntu",
        "Windows",
        "VirtualBox",
      ],
    },
  ],
};

const experiences = {
  en: [
    {
      company: "Assurance Zitouna Takaful",
      logo: "assets/images/logozitouna.jpg",
      report: { label: "View PFE Report", file: "assets/images/Rapport_PFE_NovLexPortal_Nour_Elislem_Haddad.pdf" },
      role: "Final-Year Software Engineering Intern",
      period: "February 2026 – August 2026",
      project: "NovLexPortal",
      bullets: [
        "Designed and developed a web platform for managing legal litigation cases.",
        "Implemented litigation tracking, document management and administrative workflows.",
        "Integrated an AI microservice for legal document processing (OCR, summarisation, French/Arabic translation, recommendations).",
        "Worked on a hybrid recommendation approach combining business rules, machine learning and semantic similarity.",
        "Integrated security and access management with Keycloak and OpenFGA.",
        "Implemented CI/CD with Jenkins, Docker and SonarQube.",
        "Contributed to a modular architecture spanning frontend, backend and AI services.",
      ],
      tech: "Angular 20.3, Java 17, Quarkus, FastAPI, Python, PostgreSQL 16, Keycloak, OpenFGA, Jenkins, Docker, SonarQube",
      methodology: "Incremental Development Approach — 5 Iterations",
    },
    {
      company: "INSOMEA Computer Solutions (Microsoft Partner)",
      logo: "assets/images/imageinsomea.jpg",
      report: { label: "View Internship Report", file: "assets/images/Rapport_de_Stage_4eme_Annee_Nour_Elislem_Haddad.pdf" },
      role: "Software Engineering Intern",
      period: "June 2025 – August 2025",
      project: "Intelligent E-Commerce Platform",
      bullets: [
        "Developed an e-commerce web application with responsive interfaces.",
        "Integrated an intelligent chatbot and product recommendation features.",
        "Connected frontend and backend APIs and applied Spring Security.",
      ],
      tech: "Angular, Java, Spring Boot, Flask, Spring Security, MySQL, Git, Swagger",
      methodology: "Agile Scrum",
    },
    {
      company: "INSOMEA Computer Solutions (Microsoft Partner)",
      logo: "assets/images/imageinsomea.jpg",
      report: { label: "View Internship Report", file: "assets/images/Rapport_de_Stage_3eme_Annee_Nour_Elislem_Haddad.pdf" },
      role: "Software Development Intern",
      period: "June 2024 – August 2024",
      project: "Gym Management Application",
      bullets: [
        "Developed a gym management web application.",
        "Implemented membership and booking management.",
        "Built frontend and backend features and integrated database operations.",
      ],
      tech: "Angular, Flask, MySQL, Postman",
      methodology: "Agile Scrum",
    },
  ],
  fr: [
    {
      company: "Assurance Zitouna Takaful",
      logo: "assets/images/logozitouna.jpg",
      report: { label: "Voir le rapport PFE", file: "assets/images/Rapport_PFE_NovLexPortal_Nour_Elislem_Haddad.pdf" },
      role: "Stage de Projet de Fin d'Études (PFE)",
      period: "Février 2026 – Août 2026",
      project: "NovLexPortal",
      bullets: [
        "Conception et développement d'une plateforme web de gestion des contentieux judiciaires.",
        "Suivi des dossiers, gestion documentaire et workflows administratifs.",
        "Intégration d'un microservice IA pour le traitement documentaire (OCR, résumé, traduction FR/AR, recommandations).",
        "Approche de recommandation hybride : règles métier, machine learning et similarité sémantique.",
        "Sécurité et gestion des accès avec Keycloak et OpenFGA.",
        "Mise en place CI/CD avec Jenkins, Docker et SonarQube.",
        "Architecture modulaire frontend, backend et services IA.",
      ],
      tech: "Angular 20.3, Java 17, Quarkus, FastAPI, Python, PostgreSQL 16, Keycloak, OpenFGA, Jenkins, Docker, SonarQube",
      methodology: "Approche incrémentale — 5 itérations",
    },
    {
      company: "INSOMEA Computer Solutions (Microsoft Partner)",
      logo: "assets/images/imageinsomea.jpg",
      report: { label: "Voir le rapport de stage", file: "assets/images/Rapport_de_Stage_4eme_Annee_Nour_Elislem_Haddad.pdf" },
      role: "Stage d'ingénieur",
      period: "Juin 2025 – Août 2025",
      project: "Plateforme e-commerce intelligente",
      bullets: [
        "Développement d'une application e-commerce et interfaces responsives.",
        "Intégration d'un chatbot intelligent et de recommandations produits.",
        "Intégration des API frontend/backend et sécurisation avec Spring Security.",
      ],
      tech: "Angular, Java, Spring Boot, Flask, Spring Security, MySQL, Git, Swagger",
      methodology: "Agile Scrum",
    },
    {
      company: "INSOMEA Computer Solutions (Microsoft Partner)",
      logo: "assets/images/imageinsomea.jpg",
      report: { label: "Voir le rapport de stage", file: "assets/images/Rapport_de_Stage_3eme_Annee_Nour_Elislem_Haddad.pdf" },
      role: "Stage d'immersion en entreprise",
      period: "Juin 2024 – Août 2024",
      project: "Application de gestion de salle de sport",
      bullets: [
        "Développement d'une application web de gestion de gym.",
        "Gestion des adhésions et des réservations.",
        "Fonctionnalités frontend/backend et intégration base de données.",
      ],
      tech: "Angular, Flask, MySQL, Postman",
      methodology: "Agile Scrum",
    },
  ],
};

const educationItems = {
  en: [
    {
      school: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
      logo: "assets/images/Logo_ESPRIT_Ariana.jpg",
      graduation: "assets/images/graduation.jpeg",
      report: { label: "PFE Report", file: "assets/images/Rapport_PFE_NovLexPortal_Nour_Elislem_Haddad.pdf" },
      period: "2023 – 2026",
      degree: "National Engineering Degree in Computer Science",
      detail: "Specialisation: Software Engineering",
      honors: "Excellent Honors — overall average 17.70/20",
      note: "Final-year project (PFE): 19/20 — Excellent Honors.",
    },
    {
      school: "Institut Préparatoire aux Études d'Ingénieurs El Manar (IPEIEM)",
      logo: "assets/images/imagesipeim.jpg",
      graduation: "",
      report: null,
      period: "2021 – 2023",
      degree: "Preparatory cycle — Physics and Chemistry",
      detail: "Admitted through the Tunisian national competitive entrance examination for engineering schools.",
      honors: "",
      note: "",
    },
    {
      school: "Lycée du Bardo",
      logo: "assets/images/imageslyceebardo.jpg",
      graduation: "",
      report: null,
      period: "2021",
      degree: "Baccalaureate — Experimental Sciences",
      detail: "Honors: Bien — average 15.77/20",
      honors: "",
      note: "",
    },
  ],
  fr: [
    {
      school: "École Supérieure Privée d'Ingénierie et de Technologies (ESPRIT)",
      logo: "assets/images/Logo_ESPRIT_Ariana.jpg",
      graduation: "assets/images/graduation.jpeg",
      report: { label: "Rapport PFE", file: "assets/images/Rapport_PFE_NovLexPortal_Nour_Elislem_Haddad.pdf" },
      period: "2023 – 2026",
      degree: "Diplôme National d'Ingénieur en Informatique",
      detail: "Spécialité : Génie Logiciel",
      honors: "Mention Excellente — moyenne 17,70/20",
      note: "PFE : 19/20 — Mention excellente.",
    },
    {
      school: "Institut Préparatoire aux Études d'Ingénieurs El Manar (IPEIEM)",
      logo: "assets/images/imagesipeim.jpg",
      graduation: "",
      report: null,
      period: "2021 – 2023",
      degree: "Cycle préparatoire — Physique-Chimie",
      detail: "Admission via le concours national tunisien d'accès aux écoles d'ingénieurs.",
      honors: "",
      note: "",
    },
    {
      school: "Lycée du Bardo",
      logo: "assets/images/imageslyceebardo.jpg",
      graduation: "",
      report: null,
      period: "2021",
      degree: "Baccalauréat — Sciences expérimentales",
      detail: "Mention Bien — moyenne 15,77/20",
      honors: "",
      note: "",
    },
  ],
};

const certifications = {
  en: [
    {
      name: "NVIDIA — Deep Learning Fundamentals",
      issuer: "NVIDIA",
      desc: "An introductory course covering the foundations of deep learning and neural networks. Topics include supervised learning, convolutional networks, data augmentation and model optimisation using NVIDIA hardware and frameworks.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_Fundamentals_Deep_Learning_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "AWS Academy — Cloud Foundations",
      issuer: "Amazon Web Services",
      desc: "A comprehensive introduction to cloud computing concepts and AWS core services. Covers infrastructure, security, pricing and the fundamentals of deploying scalable applications on the AWS platform.",
      docKeys: [
        { key: "viewBadge", file: "assets/images/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251030-30-prj9be.pdf" },
        { key: "viewGrades", file: "assets/images/grades.pdf" },
      ],
    },
    {
      name: "Anomaly Detection",
      issuer: "NVIDIA Deep Learning Institute",
      desc: "A hands-on course focused on detecting anomalies in datasets using machine learning techniques. Covers statistical methods, autoencoders and unsupervised approaches applied to real-world industrial and cybersecurity scenarios.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_Anomaly_Detection_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "Transformer-Based Natural Language Processing",
      issuer: "NVIDIA Deep Learning Institute",
      desc: "An advanced course on Transformer architectures and their application to NLP tasks. Covers attention mechanisms, BERT-based models, fine-tuning pre-trained language models and deploying NLP pipelines at scale.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_NLP_Transformers_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "Hedera",
      issuer: "Hedera",
      desc: "A certification covering the Hedera Hashgraph distributed ledger technology. Topics include the Hedera Consensus Service, Token Service, smart contracts and building decentralised applications on the Hedera network.",
      docKeys: [{ key: "viewCert", file: "assets/images/hedera.pdf" }],
    },
  ],
  fr: [
    {
      name: "NVIDIA — Deep Learning Fundamentals",
      issuer: "NVIDIA",
      desc: "Un cours d'introduction couvrant les fondamentaux du deep learning et des réseaux de neurones. Les thèmes incluent l'apprentissage supervisé, les réseaux convolutifs, l'augmentation de données et l'optimisation de modèles avec les outils NVIDIA.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_Fundamentals_Deep_Learning_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "AWS Academy — Cloud Foundations",
      issuer: "Amazon Web Services",
      desc: "Une introduction complète au cloud computing et aux services AWS. Couvre l'infrastructure, la sécurité, la tarification et les bases du déploiement d'applications évolutives sur la plateforme AWS.",
      docKeys: [
        { key: "viewBadge", file: "assets/images/AWS_Academy_Graduate___Cloud_Foundations___Training_Badge_Badge20251030-30-prj9be.pdf" },
        { key: "viewGrades", file: "assets/images/grades.pdf" },
      ],
    },
    {
      name: "Détection d'anomalies",
      issuer: "NVIDIA Deep Learning Institute",
      desc: "Un cours pratique sur la détection d'anomalies dans les données par apprentissage automatique. Couvre les méthodes statistiques, les autoencodeurs et les approches non supervisées appliquées à des cas industriels et de cybersécurité.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_Anomaly_Detection_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "Traitement du langage naturel basé sur les Transformers",
      issuer: "NVIDIA Deep Learning Institute",
      desc: "Un cours avancé sur les architectures Transformer et leur application au NLP. Couvre les mécanismes d'attention, les modèles BERT, le fine-tuning de modèles pré-entraînés et le déploiement de pipelines NLP à grande échelle.",
      docKeys: [{ key: "viewCert", file: "assets/images/Certificat_NVIDIA_NLP_Transformers_Nour_Elislem_Haddad.pdf" }],
    },
    {
      name: "Hedera",
      issuer: "Hedera",
      desc: "Une certification sur la technologie de registre distribué Hedera Hashgraph. Couvre le Hedera Consensus Service, le Token Service, les smart contracts et le développement d'applications décentralisées sur le réseau Hedera.",
      docKeys: [{ key: "viewCert", file: "assets/images/hedera.pdf" }],
    },
  ],
};

const projects = [
  {
    id: "novlex",
    page: "novlexportal",
    year: "2026",
    muted: true,
    videoContain: true,
    video: "assets/videos/demonstration_Novlex_Portal.mp4",
    image: "",
    github: "",
    demo: "",
    award: { en: "1st Prize of Distinction — PFE Book 2026", fr: "1er Prix de Distinction — PFE Book 2026" },
    methodology: { en: "Incremental Development Approach — 5 Iterations", fr: "Approche incrémentale — 5 itérations" },
    projectType: { en: "Individual Final-Year Engineering Project — Assurance Zitouna Takaful", fr: "Projet de Fin d'Études individuel — Assurance Zitouna Takaful" },
    en: {
      name: "NovLexPortal",
      subtitle: "Intelligent Legal Litigation Management Platform",
      category: "Final-Year Engineering Project — Assurance Zitouna Takaful",
      description: "NovLexPortal is a Full-Stack web platform designed to digitalise and streamline legal litigation management. It centralises case tracking, document processing, access management and administrative workflows while integrating AI services for document analysis and intelligent recommendations.",
      objective: "Provide legal teams with a structured, intelligent and secure platform to manage litigation files from creation to resolution, reducing manual effort and improving traceability.",
      features: [
        "Litigation case management and tracking",
        "Legal document management and versioning",
        "Advanced search and filtering",
        "User, role and permission management",
        "Notifications and automated reminders",
        "Excel import/export and PDF reporting",
        "Audit trail and activity traceability",
        "AI-assisted document processing",
      ],
      ai: [
        "Hybrid recommendation engine: business rules + Gradient Boosting + fine-tuned SentenceTransformer + FAISS semantic search",
        "OCR integration for scanned legal documents",
        "Automatic text summarisation",
        "French/Arabic translation pipeline",
      ],
      security: ["Keycloak authentication", "OpenFGA fine-grained authorisation", "Role-based access control"],
      devops: ["Jenkins CI/CD pipeline", "Docker containerisation", "SonarQube code quality"],
      stack: "Angular 20.3 · Java 17 · Quarkus · FastAPI · Python · PostgreSQL 16 · Keycloak · OpenFGA · Jenkins · Docker · SonarQube",
      contribution: "Individual final-year engineering project independently designed and developed under professional supervision. I was responsible for functional analysis, system design, frontend and backend development, AI service integration, access management, testing and CI/CD pipeline implementation.",
      modalSections: {
        problem: "Legal teams at Zitouna Takaful needed a structured digital tool to track litigation cases and documents. Existing processes were manual, fragmented and lacked auditability.",
        solution: "NovLexPortal centralises the entire litigation lifecycle in one platform, with an AI microservice handling document intelligence tasks separately from the core application.",
        architecture: ["Angular 20.3 frontend (SPA)", "Quarkus backend (Java 17, REST APIs)", "FastAPI AI microservice (Python)", "PostgreSQL 16 database", "Keycloak for identity management", "OpenFGA for fine-grained authorisation", "Jenkins + Docker + SonarQube for CI/CD"],
      },
    },
    fr: {
      name: "NovLexPortal",
      subtitle: "Plateforme intelligente de gestion des contentieux judiciaires",
      category: "Projet de Fin d'Études — Assurance Zitouna Takaful",
      description: "NovLexPortal est une plateforme web Full-Stack dédiée à la digitalisation et à l'optimisation de la gestion des contentieux judiciaires. Elle centralise le suivi des dossiers, la gestion documentaire, le contrôle des accès et les processus administratifs, tout en intégrant des services d'intelligence artificielle pour l'analyse documentaire et la recommandation intelligente.",
      objective: "Offrir aux équipes juridiques une plateforme structurée, intelligente et sécurisée pour gérer les dossiers contentieux de leur création à leur résolution, en réduisant les tâches manuelles et en améliorant la traçabilité.",
      features: [
        "Gestion et suivi des dossiers contentieux",
        "Gestion documentaire et versioning",
        "Recherche et filtres avancés",
        "Gestion des utilisateurs, rôles et permissions",
        "Notifications et rappels automatisés",
        "Import/export Excel et rapports PDF",
        "Traçabilité et audit des activités",
        "Traitement documentaire assisté par IA",
      ],
      ai: [
        "Moteur de recommandation hybride : règles métier + Gradient Boosting + SentenceTransformer fine-tuné + recherche sémantique FAISS",
        "Intégration OCR pour les documents juridiques numérisés",
        "Résumé automatique de texte",
        "Pipeline de traduction français/arabe",
      ],
      security: ["Authentification Keycloak", "Autorisation fine OpenFGA", "Contrôle d'accès par rôles"],
      devops: ["Pipeline CI/CD Jenkins", "Conteneurisation Docker", "Qualité de code SonarQube"],
      stack: "Angular 20.3 · Java 17 · Quarkus · FastAPI · Python · PostgreSQL 16 · Keycloak · OpenFGA · Jenkins · Docker · SonarQube",
      contribution: "Projet de fin d'études individuel, entièrement conçu et développé sous encadrement professionnel. J'ai pris en charge l'analyse fonctionnelle, la conception, le développement frontend et backend, l'intégration des services d'intelligence artificielle, la gestion des accès, les tests et la mise en place du pipeline CI/CD.",
      modalSections: {
        problem: "Les équipes juridiques de Zitouna Takaful avaient besoin d'un outil numérique structuré pour suivre les dossiers contentieux. Les processus existants étaient manuels, fragmentés et manquaient de traçabilité.",
        solution: "NovLexPortal centralise l'ensemble du cycle de vie des contentieux dans une seule plateforme, avec un microservice IA dédié au traitement documentaire.",
        architecture: ["Frontend Angular 20.3 (SPA)", "Backend Quarkus (Java 17, API REST)", "Microservice IA FastAPI (Python)", "Base de données PostgreSQL 16", "Keycloak pour la gestion des identités", "OpenFGA pour l'autorisation fine", "Jenkins + Docker + SonarQube pour CI/CD"],
      },
    },
  },
  {
    id: "ecommerce",
    year: "2025",
    muted: true,
    video: "assets/videos/stage 4eme.mp4",
    image: "",
    github: "",
    demo: "",
    methodology: { en: "Agile Scrum", fr: "Agile Scrum" },
    projectType: { en: "Individual Internship Project — INSOMEA Computer Solutions (Microsoft Partner)", fr: "Projet de stage individuel — INSOMEA Computer Solutions (Microsoft Partner)" },
    en: {
      name: "Intelligent E-Commerce Platform",
      subtitle: "Full-Stack E-Commerce with AI Integration",
      category: "Software Engineering Internship — INSOMEA Computer Solutions (Microsoft Partner)",
      description: "Development of a Full-Stack e-commerce application integrating an intelligent chatbot, a product recommendation system, secured REST APIs and responsive user interfaces.",
      objective: "Build a complete online shopping platform with smart product discovery features and a secure API layer for a Microsoft Partner client.",
      features: [
        "Full e-commerce shopping workflows",
        "Product catalogue and management",
        "Intelligent chatbot for customer support",
        "AI-based product recommendation system",
        "Secure REST API integration",
        "Responsive frontend interfaces",
        "Authentication and authorisation with Spring Security",
      ],
      stack: "Angular · Java · Spring Boot · Flask · Spring Security · MySQL · Git · Swagger",
      contribution: "Individual project completed under professional supervision. I was responsible for frontend development, Spring Boot REST API implementation, Flask AI recommendation service and Spring Security integration.",
      modalSections: {
        problem: "A Microsoft Partner client needed a modern e-commerce platform with intelligent product discovery beyond basic keyword search.",
        solution: "A Full-Stack application combining an Angular storefront, Spring Boot API layer and a Flask-based AI service for chatbot support and product recommendations.",
        architecture: ["Angular frontend (SPA, responsive)", "Spring Boot backend (Java, REST APIs)", "Flask AI microservice (Python)", "MySQL database", "Spring Security for authentication and authorisation"],
      },
    },
    fr: {
      name: "Plateforme e-commerce intelligente",
      subtitle: "Application e-commerce Full-Stack avec intégration IA",
      category: "Stage d'ingénieur — INSOMEA Computer Solutions (Microsoft Partner)",
      description: "Développement d'une application e-commerce Full-Stack intégrant un chatbot intelligent, un système de recommandation de produits, des API REST sécurisées et des interfaces utilisateur responsives.",
      objective: "Construire une plateforme d'achat en ligne complète avec des fonctionnalités intelligentes de découverte de produits et une couche API sécurisée.",
      features: [
        "Parcours d'achat e-commerce complet",
        "Catalogue et gestion des produits",
        "Chatbot intelligent pour le support client",
        "Système de recommandation de produits basé sur l'IA",
        "Intégration d'API REST sécurisées",
        "Interfaces frontend responsives",
        "Authentification et autorisation avec Spring Security",
      ],
      stack: "Angular · Java · Spring Boot · Flask · Spring Security · MySQL · Git · Swagger",
      contribution: "Projet individuel réalisé sous encadrement professionnel. J'ai développé le frontend, les API REST Spring Boot, le service de recommandation IA Flask et l'intégration Spring Security.",
      modalSections: {
        problem: "Un client Microsoft Partner avait besoin d'une plateforme e-commerce moderne avec une découverte intelligente des produits au-delà de la simple recherche par mots-clés.",
        solution: "Une application Full-Stack combinant un frontend Angular, une couche API Spring Boot et un service IA Flask pour le support chatbot et les recommandations produits.",
        architecture: ["Frontend Angular (SPA, responsive)", "Backend Spring Boot (Java, API REST)", "Microservice IA Flask (Python)", "Base de données MySQL", "Spring Security pour l'authentification et l'autorisation"],
      },
    },
  },
  {
    id: "charity",
    page: "solidarity-refugee",
    year: "2025",
    muted: true,
    video: "assets/videos/Copie de Orange White Modern Pitch Deck Presentation.mp4",
    image: "",
    github: "",
    demo: "",
    methodology: { en: "Agile Scrum", fr: "Agile Scrum" },
    projectType: { en: "Academic Integration Project — Team Project (ESPRIT)", fr: "Projet d'intégration académique — Projet en équipe (ESPRIT)" },
    en: {
      name: "AI-Powered Charity & Solidarity Platform",
      subtitle: "Collaborative Humanitarian Management with AI Recommendations",
      category: "Academic Team Project — ESPRIT",
      description: "A Full-Stack humanitarian platform facilitating collaboration between associations, volunteers, donors and beneficiaries. It integrates AI-powered recommendations to improve donation relevance, volunteer matching and coordinated support for refugees and those in need.",
      objective: "Build a platform that intelligently connects donors, associations and volunteers, using AI recommendations to improve impact and coordination.",
      features: [
        "Donation workflow management",
        "Association and NGO registration",
        "Volunteer mission management",
        "AI-powered recommendation system",
        "Job matching and support services",
        "Crisis management and geolocated alerts",
        "Authentication and application security",
        "User dashboard and activity tracking",
      ],
      stack: "Angular · Spring Boot · Java · Python · MySQL · Spring Security · JWT · REST APIs",
      teamNote: "Academic Team Project — ESPRIT",
      contribution: "Collaborative team project. My personal contributions include: PDF certificate generation, event calendar, posts management, crisis management module, and development of a recommendation system based on user preferences inferred from post interactions (likes and comments).",
      modalSections: {
        problem: "Humanitarian organisations lacked a unified digital platform to coordinate donations, volunteers and support for beneficiaries efficiently.",
        solution: "A collaborative platform centralising humanitarian workflows with an AI layer for matching donors to causes, volunteers to missions and refugees to job opportunities.",
        architecture: ["Angular frontend (SPA)", "Spring Boot backend (Java, REST APIs)", "Python AI recommendation module", "MySQL database", "Spring Security + JWT authentication"],
      },
    },
    fr: {
      name: "Plateforme caritative et solidaire assistée par IA",
      subtitle: "Gestion humanitaire collaborative avec recommandations IA",
      category: "Projet académique en équipe — ESPRIT",
      description: "Plateforme humanitaire Full-Stack facilitant la collaboration entre associations, bénévoles, donateurs et bénéficiaires. Elle intègre un système de recommandation basé sur l'IA pour améliorer la pertinence des dons, le matching bénévoles et le soutien coordonné aux réfugiés et aux personnes dans le besoin.",
      objective: "Construire une plateforme connectant intelligemment donateurs, associations et bénévoles grâce aux recommandations IA pour maximiser l'impact et la coordination.",
      features: [
        "Gestion des dons",
        "Inscription des associations et ONG",
        "Gestion des missions bénévoles",
        "Système de recommandation basé sur l'IA",
        "Matching emploi et services de soutien",
        "Gestion des crises et alertes géolocalisées",
        "Authentification et sécurité applicative",
        "Tableau de bord et suivi des activités",
      ],
      stack: "Angular · Spring Boot · Java · Python · MySQL · Spring Security · JWT · API REST",
      teamNote: "Projet académique réalisé en équipe — ESPRIT",
      contribution: "Projet réalisé en équipe. Mes contributions personnelles incluent : la génération de certificats PDF, le calendrier des événements, la gestion des publications, le module de gestion des crises, et le développement d'un système de recommandation basé sur les préférences des utilisateurs déduites de leurs interactions avec les publications (mentions J'aime et commentaires).",
      modalSections: {
        problem: "Les organisations humanitaires manquaient d'une plateforme numérique unifiée pour coordonner efficacement les dons, les bénévoles et le soutien aux bénéficiaires.",
        solution: "Une plateforme collaborative centralisant les workflows humanitaires avec une couche IA pour connecter donateurs et causes, bénévoles et missions, réfugiés et opportunités d'emploi.",
        architecture: ["Frontend Angular (SPA)", "Backend Spring Boot (Java, API REST)", "Module IA Python pour les recommandations", "Base de données MySQL", "Authentification Spring Security + JWT"],
      },
    },
  },
  {
    id: "speedygo",
    year: "2025",
    muted: true,
    video: "assets/videos/Copie de Orange and Yellow Modern Delivery Express Presentation.mp4",
    image: "",
    github: "",
    demo: "",
    methodology: { en: "Agile Scrum", fr: "Agile Scrum" },
    projectType: { en: "Academic Integration Project — Team Project (ESPRIT)", fr: "Projet d'intégration académique — Projet en équipe (ESPRIT)" },
    en: {
      name: "SpeedyGo",
      subtitle: "Smart Delivery and Transportation Platform",
      category: "Academic Integration Project — ESPRIT Team Project",
      description: "SpeedyGo is a Full-Stack delivery and transportation platform combining parcel management, carpooling, trip planning, driver management, tracking and payment-related workflows. Built collaboratively as an academic integration project.",
      objective: "Design a comprehensive logistics and transportation platform covering the full delivery lifecycle, from parcel registration to real-time tracking and payment.",
      features: [
        "Parcel management and tracking",
        "Trip and carpooling management",
        "Driver and vehicle management",
        "Route optimisation",
        "Payment and subscription workflows",
        "Chat and in-platform communication",
        "Complaint management",
      ],
      stack: "Angular 19 · Spring Boot · Java · Python · Flask · MySQL · Spring Security · JWT · REST APIs · Stripe",
      teamNote: "Academic Integration Project — ESPRIT Team Project",
      contribution: "Collaborative team project. My personal contributions include: carpooling management module, parcel management functionality, and Stripe payment integration for parcel-related transactions.",
      modalSections: {
        problem: "Students needed to build a comprehensive multi-service logistics platform covering the full delivery lifecycle as part of their integration project.",
        solution: "SpeedyGo unifies parcel delivery, carpooling and transportation management in one platform, with separate modules for each service communicating via REST APIs.",
        architecture: ["Angular 19 frontend (SPA)", "Spring Boot backend (Java, REST APIs)", "Flask Python service", "MySQL database", "Spring Security + JWT", "Multi-module modular architecture"],
      },
    },
    fr: {
      name: "SpeedyGo",
      subtitle: "Plateforme intelligente de livraison et de transport",
      category: "Projet d'intégration académique — Projet en équipe ESPRIT",
      description: "SpeedyGo est une plateforme Full-Stack de livraison et de transport regroupant la gestion des colis, du covoiturage, des trajets, des conducteurs, du suivi et des paiements. Développée en équipe dans le cadre d'un projet d'intégration académique.",
      objective: "Concevoir une plateforme logistique et de transport complète couvrant l'ensemble du cycle de livraison, de l'enregistrement des colis au suivi en temps réel et au paiement.",
      features: [
        "Gestion et suivi des colis",
        "Gestion des trajets et du covoiturage",
        "Gestion des conducteurs et des véhicules",
        "Optimisation des itinéraires",
        "Paiement et gestion des abonnements",
        "Chat et communication interne",
        "Gestion des réclamations",
      ],
      stack: "Angular 19 · Spring Boot · Java · Python · Flask · MySQL · Spring Security · JWT · API REST · Stripe",
      teamNote: "Projet d'intégration académique — Équipe ESPRIT",
      contribution: "Projet réalisé en équipe. Mes contributions personnelles incluent : le module de gestion du covoiturage, les fonctionnalités de gestion des colis, et l'intégration de Stripe pour les paiements liés aux colis.",
      modalSections: {
        problem: "Les étudiants devaient concevoir une plateforme logistique multi-services complète couvrant l'ensemble du cycle de livraison dans le cadre de leur projet d'intégration.",
        solution: "SpeedyGo unifie la livraison de colis, le covoiturage et la gestion des transports dans une seule plateforme, avec des modules séparés communicant via des API REST.",
        architecture: ["Frontend Angular 19 (SPA)", "Backend Spring Boot (Java, API REST)", "Service Python Flask", "Base de données MySQL", "Spring Security + JWT", "Architecture modulaire multi-modules"],
      },
    },
  },
  {
    id: "elearning",
    year: "2024",
    muted: true,
    video: "",
    image: "",
    github: "",
    demo: "",
    methodology: { en: "Agile Scrum", fr: "Agile Scrum" },
    projectType: { en: "Individual Academic Project — ESPRIT", fr: "Projet académique individuel — ESPRIT" },
    en: {
      name: "E-Learning Platform",
      subtitle: "Web-Based Learning Management System",
      category: "Academic Project — ESPRIT",
      description: "Development of a web-based learning management platform supporting course organisation, user management and essential e-learning functionalities.",
      objective: "Build a structured LMS enabling educators to manage courses and learners to access content through a clean web interface.",
      features: [
        "Course creation and management",
        "User and student management",
        "Course enrolment workflows",
        "Content organisation and delivery",
        "Admin dashboard",
      ],
      stack: "Symfony · PHP · MySQL · Git",
      contribution: "Individual academic project. I designed and developed the full application: course and user management, enrolment workflows and the admin dashboard.",
      modalSections: {
        problem: "A need for a simple, structured web LMS to manage courses, students and content delivery in an academic context.",
        solution: "A Symfony-based web application providing complete course and user management with clean MVC architecture and database-driven content organisation.",
        architecture: ["Symfony PHP framework (MVC)", "MySQL database", "HTML/CSS/JS frontend", "Git version control"],
      },
    },
    fr: {
      name: "Plateforme e-learning",
      subtitle: "Système de gestion de l'apprentissage en ligne",
      category: "Projet académique — ESPRIT",
      description: "Développement d'une plateforme web de gestion de l'apprentissage permettant l'organisation des cours, la gestion des utilisateurs et l'accès aux principales fonctionnalités d'e-learning.",
      objective: "Construire un LMS structuré permettant aux formateurs de gérer les cours et aux apprenants d'accéder aux contenus via une interface web claire.",
      features: [
        "Création et gestion des cours",
        "Gestion des utilisateurs et des étudiants",
        "Inscription aux cours",
        "Organisation et diffusion des contenus",
        "Tableau de bord administrateur",
      ],
      stack: "Symfony · PHP · MySQL · Git",
      contribution: "Projet académique individuel. J'ai conçu et développé l'application complète : gestion des cours et des utilisateurs, parcours d'inscription et tableau de bord administrateur.",
      modalSections: {
        problem: "Besoin d'un LMS web simple et structuré pour gérer les cours, les étudiants et la diffusion des contenus dans un contexte académique.",
        solution: "Une application web Symfony offrant une gestion complète des cours et des utilisateurs avec une architecture MVC propre et une organisation des contenus pilotée par la base de données.",
        architecture: ["Framework Symfony PHP (MVC)", "Base de données MySQL", "Frontend HTML/CSS/JS", "Contrôle de version Git"],
      },
    },
  },
  {
    id: "gym",
    page: "gym-management",
    year: "2024",
    muted: true,
    video: "",
    image: "",
    github: "",
    demo: "",
    methodology: { en: "Agile Scrum", fr: "Agile Scrum" },
    projectType: { en: "Individual Internship Project — INSOMEA Computer Solutions", fr: "Projet de stage individuel — INSOMEA Computer Solutions" },
    en: {
      name: "Gym Management Application",
      subtitle: "Full-Stack Web Application for Gym Operations",
      category: "Software Development Internship — INSOMEA Computer Solutions",
      description: "Development of a Full-Stack web application for gym management, including membership administration, reservations and operational workflows.",
      objective: "Digitise gym operations with a web application covering memberships, bookings and administrative workflows.",
      features: [
        "Membership management",
        "Reservation and booking system",
        "Gym administration workflows",
        "Frontend/backend integration",
        "Database management",
      ],
      stack: "Angular · Flask · MySQL · Postman",
      contribution: "Individual project developed under professional supervision. I built the full application: membership management, reservation system, admin workflows and database integration.",
      modalSections: {
        problem: "A gym operator needed to replace manual membership and booking processes with a web-based management system.",
        solution: "A Full-Stack web application with Angular frontend and Flask REST API backend, connected to a MySQL database, covering all gym operational workflows.",
        architecture: ["Angular frontend (SPA)", "Flask backend (Python, REST API)", "MySQL database", "Postman for API testing"],
      },
    },
    fr: {
      name: "Application de gestion de salle de sport",
      subtitle: "Application web Full-Stack pour la gestion d'une salle de sport",
      category: "Stage d'immersion — INSOMEA Computer Solutions",
      description: "Développement d'une application web Full-Stack dédiée à la gestion d'une salle de sport, intégrant la gestion des adhésions, les réservations et les principales opérations administratives.",
      objective: "Digitaliser les opérations d'une salle de sport avec une application web couvrant les adhésions, les réservations et les workflows administratifs.",
      features: [
        "Gestion des adhésions",
        "Système de réservation",
        "Workflows d'administration",
        "Intégration frontend/backend",
        "Gestion de base de données",
      ],
      stack: "Angular · Flask · MySQL · Postman",
      contribution: "Projet individuel réalisé sous encadrement professionnel. J'ai développé l'application complète : système de gestion des adhésions, module de réservation, workflows administratifs et intégration complète de la base de données.",
      modalSections: {
        problem: "Un gérant de salle de sport avait besoin de remplacer les processus manuels d'adhésion et de réservation par un système de gestion web.",
        solution: "Une application web Full-Stack avec un frontend Angular et une API REST Flask, connectée à une base de données MySQL, couvrant tous les workflows opérationnels de la salle de sport.",
        architecture: ["Frontend Angular (SPA)", "Backend Flask (Python, API REST)", "Base de données MySQL", "Tests API avec Postman"],
      },
    },
  },
];



let currentLang = DEFAULT_LANG;
let cvAvailable = { en: false, fr: false };

function getNested(obj, path) {
  return path.split(".").reduce((acc, key) => acc && acc[key], obj);
}

function applyI18n(lang) {
  const t = translations[lang];
  document.documentElement.lang = lang === "fr" ? "fr" : "en";
  document.title = t.meta.title;

  const metaDesc = document.querySelector('meta[name="description"]');
  if (metaDesc) metaDesc.setAttribute("content", t.meta.description);

  document.querySelectorAll("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const value = getNested(t, key);
    if (value == null) return;
    if (Array.isArray(value)) {
      el.innerHTML = value.map((item) => `<li>${item}</li>`).join("");
    } else {
      el.textContent = value;
    }
  });

  document.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    const spec = el.getAttribute("data-i18n-attr");
    spec.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      const value = getNested(t, key);
      if (value != null) el.setAttribute(attr, value);
    });
  });

  // Only run portfolio-specific renders on the main page
  if (document.body.dataset.page !== "project") {
    renderExpertise(lang);
    renderSkills(lang);
    renderExperience(lang);
    renderProjects(lang);
    renderEducation(lang);
    renderCertifications(lang);
    renderAwards(lang);
    const loc = document.getElementById("contact-location");
    if (loc) loc.textContent = SITE.location[lang];

    const navToggle = document.querySelector(".nav-toggle");
    if (navToggle && navToggle.getAttribute("aria-expanded") !== "true") {
      navToggle.setAttribute("aria-label", translations[lang].nav.menuOpen);
    }
  }

  updateSocialLinks();
  if (document.body.dataset.page !== "project") {
    updateCvButtons(lang);
  }

  // Update year on any page
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());
}

function renderExpertise(lang) {
  const list = document.getElementById("expertise-list");
  if (!list) return;
  const items = translations[lang].hero.expertise;
  list.innerHTML = items.map((item) => `<li>${item}</li>`).join("");
}

function renderSkills(lang) {
  const grid = document.getElementById("skills-grid");
  if (!grid) return;
  grid.innerHTML = skillCategories[lang]
    .map(
      (cat) => `
    <article class="skill-card">
      <h3>${cat.title}</h3>
      <ul class="tag-list">
        ${cat.items.map((item) => `<li>${item}</li>`).join("")}
      </ul>
    </article>`
    )
    .join("");
}

function renderExperience(lang) {
  const container = document.getElementById("experience-list");
  if (!container) return;
  const tp = translations[lang].pages;
  container.innerHTML = experiences[lang]
    .map(
      (exp) => `
    <article class="timeline-item">
      <div class="timeline-marker" aria-hidden="true"></div>
      <div class="timeline-body">
        <header class="timeline-header">
          <div class="timeline-header-top">
            <div class="timeline-header-text">
              <h3>${exp.role}</h3>
              <p class="timeline-company">${exp.company}</p>
              <p class="timeline-period">${exp.period}</p>
            </div>
            ${exp.logo ? `<img src="${exp.logo}" alt="${exp.company}" class="timeline-logo" loading="lazy">` : ""}
          </div>
        </header>
        <p class="timeline-project"><strong>${exp.project}</strong></p>
        <ul class="timeline-bullets">
          ${exp.bullets.map((b) => `<li>${b}</li>`).join("")}
        </ul>
        <p class="timeline-tech"><span class="sr-only">Technologies: </span>${exp.tech}</p>
        ${exp.methodology ? `<p class="timeline-methodology">${exp.methodology}</p>` : ""}
        ${exp.report ? `
        <div class="report-link-wrap">
          <a href="${exp.report.file}" target="_blank" rel="noopener noreferrer" class="report-link">
            <span aria-hidden="true">📄</span> ${exp.report.label} — ${tp.viewReport}
          </a>
        </div>` : ""}
      </div>
    </article>`
    )
    .join("");
}

function renderProjects(lang) {
  const grid = document.getElementById("projects-grid");
  if (!grid) return;
  const tp = translations[lang].projects;

  grid.innerHTML = projects.map((project, index) => {
    const p = project[lang];
    const hasVideo = !!project.video;
    const hasMedia = hasVideo || !!project.image;
    const isReversed = hasMedia && index % 2 !== 0;
    const hasModal = p.modalSections != null;

    // Project page link
    const projectPage = `projects/${project.page || project.id}.html`;

    // Media column
    let mediaHtml = "";
    if (hasVideo) {
      mediaHtml = `
        <div class="proj-media${project.videoContain ? " proj-media--contain" : ""}">
          <video class="proj-video" controls controlsList="novolume" playsinline preload="metadata" muted data-project-video>
            <source src="${project.video}" type="video/mp4">
          </video>
          <p class="proj-video-fallback hidden" data-video-fallback>${tp.noVideo}</p>
        </div>`;
    } else if (project.image) {
      mediaHtml = `
        <div class="proj-media">
          <img src="${project.image}" alt="${p.name}" class="proj-img" loading="lazy" onerror="this.closest('.proj-media').classList.add('proj-media--error')">
        </div>`;
    }

    // Text column pieces
    const awardHtml = project.award
      ? `<p class="proj-award">🏆 ${project.award[lang]}</p>`
      : "";

    const teamHtml = p.teamNote
      ? `<p class="proj-team-note">👥 ${p.teamNote}</p>`
      : "";

    const projectTypeHtml = project.projectType
      ? `<p class="proj-type">${project.projectType[lang]}</p>`
      : "";

    const methodologyHtml = project.methodology
      ? `<p class="proj-methodology"><span class="proj-methodology-label">${tp.methodology}:</span> ${project.methodology[lang]}</p>`
      : "";

    const featuresHtml = p.features && p.features.length
      ? `<div class="proj-block">
          <h4 class="proj-block-title">${tp.features}</h4>
          <ul class="proj-feature-list">
            ${p.features.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>`
      : "";

    const aiHtml = p.ai && p.ai.length
      ? `<div class="proj-block proj-block--ai">
          <h4 class="proj-block-title">${tp.aiSection}</h4>
          <ul class="proj-feature-list">
            ${p.ai.map(f => `<li>${f}</li>`).join("")}
          </ul>
        </div>`
      : "";

    const stackHtml = p.stack
      ? `<div class="proj-stack">
          <span class="proj-stack-label">${tp.stackSection}</span>
          <span class="proj-stack-value">${p.stack}</span>
        </div>`
      : "";

    const exploreBtn = hasModal
      ? `<div class="proj-actions">
          <a href="${projectPage}" class="btn btn--primary btn--sm proj-explore-btn">${tp.exploreBtn}</a>
          <button type="button" class="btn btn--secondary btn--sm proj-detail-btn" data-project="${project.id}">${tp.viewDetails}</button>
        </div>`
      : `<div class="proj-actions">
          <a href="${projectPage}" class="btn btn--primary btn--sm proj-explore-btn">${tp.exploreBtn}</a>
        </div>`;

    const textCol = `
      <div class="proj-text">
        <div class="proj-meta">
          <span class="proj-year">${project.year}</span>
          <span class="proj-sep" aria-hidden="true">·</span>
          <span class="proj-category">${p.category}</span>
        </div>
        ${projectTypeHtml}
        ${awardHtml}
        <h3 class="proj-name">${p.name}</h3>
        <p class="proj-subtitle">${p.subtitle}</p>
        <p class="proj-desc">${p.description}</p>
        ${methodologyHtml}
        ${teamHtml}
        ${featuresHtml}
        ${aiHtml}
        ${stackHtml}
        ${exploreBtn}
      </div>`;

    if (!hasMedia) {
      return `
        <article class="proj-showcase proj-showcase--textonly" data-project-id="${project.id}">
          <div class="proj-textonly-inner">
            <div class="proj-meta">
              <span class="proj-year">${project.year}</span>
              <span class="proj-sep" aria-hidden="true">·</span>
              <span class="proj-category">${p.category}</span>
            </div>
            ${projectTypeHtml}
            <h3 class="proj-name">${p.name}</h3>
            <p class="proj-subtitle">${p.subtitle}</p>
            ${methodologyHtml}
            <div class="proj-textonly-cols">
              <div class="proj-textonly-left">
                <p class="proj-desc">${p.description}</p>
                ${teamHtml}
                ${stackHtml}
                ${exploreBtn}
              </div>
              <div class="proj-textonly-right">
                ${featuresHtml}
              </div>
            </div>
          </div>
        </article>`;
    }

    return `
      <article class="proj-showcase${isReversed ? " proj-showcase--reversed" : ""}" data-project-id="${project.id}">
        ${isReversed ? mediaHtml + textCol : textCol + mediaHtml}
      </article>`;
  }).join("");

  // Bind detail buttons (modal)
  grid.querySelectorAll(".proj-detail-btn").forEach(btn => {
    btn.addEventListener("click", () => openProjectModal(btn.dataset.project));
  });

  // Bind error fallbacks on all videos and force muted
  grid.querySelectorAll("[data-project-video]").forEach(video => {
    video.muted = true;
    video.volume = 0;
    video.addEventListener("volumechange", () => {
      if (!video.muted) { video.muted = true; video.volume = 0; }
    });
    video.addEventListener("error", () => {
      video.classList.add("hidden");
      const fb = video.parentElement?.querySelector("[data-video-fallback]");
      if (fb) fb.classList.remove("hidden");
    }, { once: true });
  });
}

function renderEducation(lang) {
  const list = document.getElementById("education-list");
  if (!list) return;
  const tp = translations[lang].pages;
  list.innerHTML = educationItems[lang]
    .map(
      (item) => `
    <article class="education-card${item.report ? " education-card--featured" : ""}">
      <div class="education-card-top">
        <div class="education-card-text">
          <h3>${item.school}</h3>
          <p class="education-period">${item.period}</p>
          <p class="education-degree">${item.degree}</p>
          ${item.detail ? `<p class="education-detail">${item.detail}</p>` : ""}
          ${item.honors ? `<p class="education-honors">${item.honors}</p>` : ""}
          ${item.note ? `<p class="education-note">${item.note}</p>` : ""}
          ${item.report ? `
          <div class="report-link-wrap">
            <a href="${item.report.file}" target="_blank" rel="noopener noreferrer" class="report-link">
              <span aria-hidden="true">📄</span> ${item.report.label} — ${tp.viewReport}
            </a>
          </div>` : ""}
        </div>
        <div class="education-card-media">
          ${item.logo ? `<img src="${item.logo}" alt="${item.school}" class="education-logo" loading="lazy">` : ""}
        </div>
      </div>
    </article>`
    )
    .join("");
}

function renderCertifications(lang) {
  const list = document.getElementById("certifications-list");
  if (!list) return;
  const tc = translations[lang].certifications;
  list.innerHTML = certifications[lang]
    .map(
      (cert) => `
    <article class="cert-card">
      <h3>${cert.name}</h3>
      ${cert.issuer ? `<p class="cert-issuer">${cert.issuer}</p>` : ""}
      ${cert.desc ? `<p class="cert-desc">${cert.desc}</p>` : ""}
      ${
        cert.docKeys && cert.docKeys.length
          ? `<div class="cert-docs">
              ${cert.docKeys
                .map(
                  (doc) => `<a href="${doc.file}" target="_blank" rel="noopener noreferrer" class="report-link">
                    <span aria-hidden="true">📄</span> ${tc[doc.key] || doc.key}
                  </a>`
                )
                .join("")}
            </div>`
          : ""
      }
    </article>`
    )
    .join("");
}

function renderAwards(lang) {
  const t = translations[lang].awards;
  const photoEl = document.getElementById("awards-photo");
  if (photoEl) photoEl.setAttribute("alt", t.photoAlt);
  const certLabelEl = document.querySelector(".award-cert-label");
  if (certLabelEl) certLabelEl.textContent = t.certLabel;
}

function updateSocialLinks() {
  const linkedinEls = document.querySelectorAll("[data-social='linkedin']");
  const githubEls = document.querySelectorAll("[data-social='github']");

  linkedinEls.forEach((el) => {
    if (SITE.linkedin) {
      el.href = SITE.linkedin;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("title");
      if (el.classList.contains("text-link") || el.classList.contains("social-link")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    } else {
      el.removeAttribute("href");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.title = "LinkedIn URL — set SITE.linkedin in script.js";
      el.removeAttribute("target");
      el.removeAttribute("rel");
    }
  });

  githubEls.forEach((el) => {
    if (SITE.github) {
      el.href = SITE.github;
      el.classList.remove("is-disabled");
      el.removeAttribute("aria-disabled");
      el.removeAttribute("title");
      if (el.classList.contains("text-link") || el.classList.contains("social-link")) {
        el.setAttribute("target", "_blank");
        el.setAttribute("rel", "noopener noreferrer");
      }
    } else {
      el.removeAttribute("href");
      el.classList.add("is-disabled");
      el.setAttribute("aria-disabled", "true");
      el.title = "GitHub URL — set SITE.github in script.js";
      el.removeAttribute("target");
      el.removeAttribute("rel");
    }
  });

  document.querySelectorAll("[data-mailto]").forEach((el) => {
    el.href = `mailto:${SITE.email}`;
  });
}

function configureCvLink(el, available, path, labelKey, lang) {
  if (!el) return;
  const label = translations[lang].hero[labelKey];
  if (available) {
    el.href = path;
    el.classList.remove("hidden");
    const filename = path.split("/").pop();
    if (filename) el.setAttribute("download", filename);
    el.setAttribute("type", "application/pdf");
    if (!el.hasAttribute("data-i18n")) {
      el.textContent = label;
    }
  } else {
    el.classList.add("hidden");
    el.removeAttribute("download");
  }
}

function updateCvButtons(lang) {
  configureCvLink(
    document.getElementById("cv-download-en"),
    cvAvailable.en,
    SITE.cv.en,
    "cvEn",
    lang
  );
  configureCvLink(
    document.getElementById("cv-download-fr"),
    cvAvailable.fr,
    SITE.cv.fr,
    "cvFr",
    lang
  );
  configureCvLink(
    document.getElementById("cv-contact-en"),
    cvAvailable.en,
    SITE.cv.en,
    "cvEn",
    lang
  );
  configureCvLink(
    document.getElementById("cv-contact-fr"),
    cvAvailable.fr,
    SITE.cv.fr,
    "cvFr",
    lang
  );

  const enHero = document.getElementById("cv-download-en");
  const frHero = document.getElementById("cv-download-fr");
  if (enHero) {
    enHero.classList.toggle("btn--primary", lang === "en");
    enHero.classList.toggle("btn--outline", lang !== "en");
  }
  if (frHero) {
    frHero.classList.toggle("btn--primary", lang === "fr");
    frHero.classList.toggle("btn--outline", lang !== "fr");
  }

  const anyCv = cvAvailable.en || cvAvailable.fr;
  document.querySelectorAll(".cv-group").forEach((group) => {
    group.classList.toggle("hidden", !anyCv);
  });
}

async function checkCvFiles() {
  for (const key of ["en", "fr"]) {
    const path = SITE.cv[key];
    if (!path) {
      cvAvailable[key] = false;
      continue;
    }

    cvAvailable[key] = true;

    if (window.location.protocol === "file:") {
      continue;
    }

    try {
      const res = await fetch(path, { method: "GET", cache: "no-store" });
      if (res.status === 404) {
        cvAvailable[key] = false;
      }
    } catch {
      /* Keep links visible — static hosts often block fetch; files still work via href */
    }
  }
}

function setLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem(STORAGE_KEY, lang);
  applyI18n(lang);
  document.querySelectorAll(".lang-btn").forEach((btn) => {
    const isActive = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", isActive);
    btn.setAttribute("aria-pressed", isActive ? "true" : "false");
  });
}

function initLanguage() {
  const stored = localStorage.getItem(STORAGE_KEY);
  const lang = translations[stored] ? stored : DEFAULT_LANG;
  setLanguage(lang);

  document.querySelectorAll(".lang-btn").forEach((btn) => {
    btn.addEventListener("click", () => setLanguage(btn.dataset.lang));
  });
}

function initMobileNav() {
  const toggle = document.querySelector(".nav-toggle");
  const panel = document.getElementById("nav-panel");
  if (!toggle || !panel) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    panel.classList.remove("is-open");
    document.body.classList.remove("nav-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") !== "true";
    toggle.setAttribute("aria-expanded", open ? "true" : "false");
    toggle.setAttribute(
      "aria-label",
      open
        ? translations[currentLang].nav.menuClose
        : translations[currentLang].nav.menuOpen
    );
    panel.classList.toggle("is-open", open);
    document.body.classList.toggle("nav-open", open);
  });

  panel.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", close);
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") close();
  });
}

function initHeaderScroll() {
  const header = document.querySelector(".site-header");
  if (!header) return;
  const onScroll = () => {
    header.classList.toggle("site-header--scrolled", window.scrollY > 8);
  };
  window.addEventListener("scroll", onScroll, { passive: true });
  onScroll();
}

function openProjectModal(projectId) {
  const project = projects.find(p => p.id === projectId);
  if (!project) return;
  const p = project[currentLang];
  const ms = p.modalSections;
  if (!ms) return;
  const tp = translations[currentLang].projects;
  const modal = document.getElementById("project-modal");
  const body = document.getElementById("project-modal-body");
  if (!modal || !body) return;

  // video in modal
  let mediaHtml = "";
  if (project.video) {
    mediaHtml = `<figure class="modal-figure modal-figure--video">
      <video controls controlsList="novolume" playsinline preload="metadata" class="modal-video" muted data-modal-video>
        <source src="${project.video}" type="video/mp4">
      </video>
    </figure>`;
  }

  const awardLine = project.award
    ? `<p class="modal-award">🏆 ${project.award[currentLang]}</p>`
    : "";

  body.innerHTML = `
    ${mediaHtml}
    <h2 id="project-modal-title">${p.name} — ${p.subtitle}</h2>
    ${awardLine}
    <p class="modal-meta">${project.year} · ${p.category}</p>
    <section>
      <h3>${tp.problem}</h3>
      <p>${ms.problem}</p>
    </section>
    <section>
      <h3>${tp.solution}</h3>
      <p>${ms.solution}</p>
    </section>
    ${p.features && p.features.length ? `<section>
      <h3>${tp.functionalities}</h3>
      <ul>${p.features.map(f => `<li>${f}</li>`).join("")}</ul>
    </section>` : ""}
    ${p.ai && p.ai.length ? `<section>
      <h3>${tp.ai}</h3>
      <ul>${p.ai.map(f => `<li>${f}</li>`).join("")}</ul>
    </section>` : ""}
    ${ms.architecture && ms.architecture.length ? `<section>
      <h3>${tp.architecture}</h3>
      <ul>${ms.architecture.map(f => `<li>${f}</li>`).join("")}</ul>
    </section>` : ""}
    ${p.security && p.security.length ? `<section>
      <h3>${tp.securitySection}</h3>
      <ul>${p.security.map(f => `<li>${f}</li>`).join("")}</ul>
    </section>` : ""}
    ${p.devops && p.devops.length ? `<section>
      <h3>${tp.devopsSection}</h3>
      <ul>${p.devops.map(f => `<li>${f}</li>`).join("")}</ul>
    </section>` : ""}
    <section>
      <h3>${tp.stackSection}</h3>
      <p>${p.stack}</p>
    </section>
    ${p.contribution ? `<section>
      <h3>${tp.contributionSection}</h3>
      <p>${p.contribution}</p>
    </section>` : ""}
  `;

  modal.hidden = false;
  document.body.classList.add("modal-open");
  modal.querySelector(".modal-close")?.focus();

  // Enforce muted on modal video
  const modalVideo = body.querySelector("[data-modal-video]");
  if (modalVideo) {
    modalVideo.muted = true;
    modalVideo.volume = 0;
    modalVideo.addEventListener("volumechange", () => {
      if (!modalVideo.muted) { modalVideo.muted = true; modalVideo.volume = 0; }
    });
  }
}

function closeProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;
  modal.hidden = true;
  document.body.classList.remove("modal-open");
}

function initProjectModal() {
  const modal = document.getElementById("project-modal");
  if (!modal) return;

  modal.querySelector(".modal-close")?.addEventListener("click", closeProjectModal);
  modal.querySelector(".modal-backdrop")?.addEventListener("click", closeProjectModal);
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && !modal.hidden) closeProjectModal();
  });
}

function initReveal() {
  if (!("IntersectionObserver" in window)) {
    document.querySelectorAll(".reveal, .reveal-group, .section-header").forEach(el => {
      el.classList.add("is-visible");
    });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.08, rootMargin: "0px 0px -30px 0px" });

  // Observe after a tick so dynamically rendered children are in the DOM
  requestAnimationFrame(() => {
    document.querySelectorAll(".reveal, .reveal-group, .section-header").forEach(el => {
      observer.observe(el);
    });
  });
}

function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-links a[href^='#']");
  if (!sections.length || !navLinks.length) return;

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        navLinks.forEach(link => {
          const active = link.getAttribute("href") === `#${entry.target.id}`;
          link.classList.toggle("is-active", active);
        });
      }
    });
  }, { rootMargin: "-40% 0px -55% 0px" });

  sections.forEach(s => spy.observe(s));
}

function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      const id = anchor.getAttribute("href");
      if (!id || id === "#") return;
      const target = document.querySelector(id);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: "smooth", block: "start" });
      history.replaceState(null, "", id);
    });
  });
}

async function init() {
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = String(new Date().getFullYear());

  const isProjectPage = document.body.dataset.page === "project";

  if (!isProjectPage) {
    await checkCvFiles();
  }

  initLanguage();

  if (!isProjectPage) {
    initMobileNav();
    initHeaderScroll();
    initProjectModal();
    initSmoothScroll();
    initReveal();
    initScrollSpy();
  } else {
    // Project pages: enforce muted on any videos
    document.querySelectorAll("video[data-project-video], .project-page-video").forEach(video => {
      video.muted = true;
      video.volume = 0;
      video.addEventListener("volumechange", () => {
        if (!video.muted) { video.muted = true; video.volume = 0; }
      });
    });
    initHeaderScroll();
  }
}

document.addEventListener("DOMContentLoaded", init);
