import React, { useState, useEffect } from 'react';
import { portfolioData } from '../mock';
import { useLanguage } from '../contexts/LanguageContext';
import { translations } from '../translations';
import { Github, Linkedin, Mail, Phone, MapPin, ExternalLink, Download, Menu, X, Code, Cloud, Database, Monitor, Terminal, Server, Languages } from 'lucide-react';
import { Button } from '../components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card';
import { Input } from '../components/ui/input';
import { Textarea } from '../components/ui/textarea';
import { Badge } from '../components/ui/badge';
import { toast } from '../hooks/use-toast';

const Home = () => {
  const { language, toggleLanguage } = useLanguage();
  const t = translations[language];
  const [activeSection, setActiveSection] = useState('hero');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'skills', 'projects', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMobileMenuOpen(false);
    }
  };

  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: t.contact.form.success,
      description: t.contact.form.successDesc,
    });
    setFormData({ name: '', email: '', message: '' });
  };

  const categoryIcons = {
    'DevOps': Terminal,
    'Cloud': Cloud,
    'Backend': Server,
    'Frontend': Code,
    'Monitoring': Monitor
  };

  return (
    <div className="portfolio-container">
      {/* Navigation */}
      <nav className="navbar">
        <div className="nav-content">
          <div className="nav-logo">
            <Terminal className="nav-logo-icon" />
            <span>HAD</span>
          </div>
          
          <div className={`nav-links ${mobileMenuOpen ? 'mobile-open' : ''}`}>
            {['about', 'skills', 'projects', 'experience', 'contact'].map((section) => (
              <button
                key={section}
                onClick={() => scrollToSection(section)}
                className={`nav-link ${activeSection === section ? 'active' : ''}`}
              >
                {t.nav[section]}
              </button>
            ))}
          </div>

          <div className="nav-actions">
            <button
              className="language-toggle"
              onClick={toggleLanguage}
              title={language === 'fr' ? 'Switch to English' : 'Passer au français'}
            >
              <Languages size={18} />
              <span>{language === 'fr' ? 'EN' : 'FR'}</span>
            </button>
            <Button
              variant="outline"
              size="sm"
              className="hire-btn"
              onClick={() => scrollToSection('contact')}
            >
              {t.nav.hireMe}
            </Button>
            <button
              className="mobile-menu-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <div className="hero-greeting">
              <span className="greeting-line"></span>
              <span className="greeting-text">{t.hero.greeting}</span>
            </div>
            <h1 className="hero-title">
              {t.hero.title}
            </h1>
            <h2 className="hero-subtitle">
              {t.hero.subtitle}
            </h2>
            <p className="hero-tagline">
              {t.hero.tagline}
            </p>
            <div className="hero-buttons">
              <Button
                size="lg"
                className="hero-btn-primary"
                onClick={() => scrollToSection('contact')}
              >
                {t.hero.hireBtn}
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="hero-btn-secondary"
                onClick={() => window.open(portfolioData.personal.cvUrl, '_blank')}
              >
                <Download size={18} />
                {t.hero.downloadCV}
              </Button>
            </div>
            <div className="hero-socials">
              <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="social-link">
                <Github size={20} />
              </a>
              <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                <Linkedin size={20} />
              </a>
              <a href={`mailto:${portfolioData.personal.email}`} className="social-link">
                <Mail size={20} />
              </a>
            </div>
          </div>
          <div className="hero-visual">
            <div className="code-window">
              <div className="code-header">
                <div className="code-dots">
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
                <span className="code-title">devops_engineer.sh</span>
              </div>
              <div className="code-content">
                <pre>
                  <code>
{`#!/bin/bash

# System Info
WHO="Hakizimana Aymar Davy"
ROLE="DevOps Engineer"

# Deploy function
deploy_solution() {
  docker build -t app:latest .
  kubectl apply -f k8s/
  echo "✓ Deployment successful"
}

# Automate everything
while true; do
  build_systems
  optimize_infrastructure
  deploy_solution
  monitor_performance
done`}
                  </code>
                </pre>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="about-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t.about.title}</h2>
            <div className="section-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p className="about-description">
                {t.about.description}
              </p>
              <div className="about-highlights">
                {t.about.highlights.map((highlight, index) => (
                  <div key={index} className="highlight-item">
                    <span className="highlight-icon">▹</span>
                    <span>{highlight}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="about-stats">
              <Card className="stat-card">
                <CardContent className="stat-content">
                  <div className="stat-number">4+</div>
                  <div className="stat-label">{t.about.stats.experience}</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent className="stat-content">
                  <div className="stat-number">6+</div>
                  <div className="stat-label">{t.about.stats.projects}</div>
                </CardContent>
              </Card>
              <Card className="stat-card">
                <CardContent className="stat-content">
                  <div className="stat-number">15+</div>
                  <div className="stat-label">{t.about.stats.technologies}</div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="skills-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t.skills.title}</h2>
            <div className="section-line"></div>
          </div>
          <div className="skills-grid">
            {Object.entries(portfolioData.skills).map(([category, skills]) => {
              const IconComponent = categoryIcons[category.charAt(0).toUpperCase() + category.slice(1)] || Code;
              const categoryKey = category.toLowerCase();
              return (
                <Card key={category} className="skill-category-card">
                  <CardHeader>
                    <div className="skill-category-header">
                      <IconComponent className="skill-category-icon" size={24} />
                      <CardTitle className="skill-category-title">
                        {t.skills.categories[categoryKey] || category}
                      </CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="skills-list">
                      {skills.map((skill, index) => (
                        <div key={index} className="skill-item">
                          <div className="skill-info">
                            <span className="skill-name">{skill.name}</span>
                            <span className="skill-level">{skill.level}%</span>
                          </div>
                          <div className="skill-bar">
                            <div 
                              className="skill-progress"
                              style={{ width: `${skill.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="projects-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t.projects.title}</h2>
            <div className="section-line"></div>
          </div>
          <div className="projects-grid">
            {t.projects.items.map((project, index) => (
              <Card key={index} className="project-card">
                <CardHeader>
                  <div className="project-header">
                    <Badge className="project-category">{project.category}</Badge>
                  </div>
                  <CardTitle className="project-title">{project.title}</CardTitle>
                  <CardDescription className="project-description">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="project-tech">
                    {portfolioData.projects[index]?.technologies.map((tech, techIndex) => (
                      <span key={techIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                  <div className="project-links">
                    {portfolioData.projects[index]?.github && (
                      <a href={portfolioData.projects[index].github} target="_blank" rel="noopener noreferrer" className="project-link">
                        <Github size={18} />
                        <span>{t.projects.viewCode}</span>
                      </a>
                    )}
                    {portfolioData.projects[index]?.demo && (
                      <a href={portfolioData.projects[index].demo} target="_blank" rel="noopener noreferrer" className="project-link">
                        <ExternalLink size={18} />
                        <span>{t.projects.viewDemo}</span>
                      </a>
                    )}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="experience-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t.experience.title}</h2>
            <div className="section-line"></div>
          </div>
          <div className="timeline">
            {t.experience.items.map((exp, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-marker">
                  <div className={`timeline-dot ${portfolioData.experience[index]?.current ? 'current' : ''}`}></div>
                  {index < t.experience.items.length - 1 && <div className="timeline-line"></div>}
                </div>
                <Card className="experience-card">
                  <CardHeader>
                    <div className="experience-header">
                      <div>
                        <CardTitle className="experience-position">{exp.position}</CardTitle>
                        <div className="experience-company">{exp.company}</div>
                      </div>
                      {portfolioData.experience[index]?.current && <Badge className="current-badge">{t.experience.current}</Badge>}
                    </div>
                    <div className="experience-meta">
                      <span className="experience-period">{exp.period}</span>
                      <span className="experience-location">
                        <MapPin size={14} />
                        {exp.location}
                      </span>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="experience-responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact-section">
        <div className="section-container">
          <div className="section-header">
            <h2 className="section-title">{t.contact.title}</h2>
            <div className="section-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <h3 className="contact-subtitle">{t.contact.subtitle}</h3>
              <p className="contact-text">
                {t.contact.description}
              </p>
              <div className="contact-details">
                <a href={`mailto:${portfolioData.personal.email}`} className="contact-detail">
                  <Mail className="contact-icon" />
                  <span>{portfolioData.personal.email}</span>
                </a>
                <a href={`tel:${portfolioData.personal.phone}`} className="contact-detail">
                  <Phone className="contact-icon" />
                  <span>{portfolioData.personal.phone}</span>
                </a>
                <div className="contact-detail">
                  <MapPin className="contact-icon" />
                  <span>{portfolioData.personal.location}</span>
                </div>
              </div>
            </div>
            <Card className="contact-form-card">
              <CardHeader>
                <CardTitle>{t.contact.form.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <Input
                      type="text"
                      name="name"
                      placeholder={t.contact.form.name}
                      value={formData.name}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Input
                      type="email"
                      name="email"
                      placeholder={t.contact.form.email}
                      value={formData.email}
                      onChange={handleFormChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <Textarea
                      name="message"
                      placeholder={t.contact.form.message}
                      value={formData.message}
                      onChange={handleFormChange}
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="submit-btn" size="lg">
                    {t.contact.form.send}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-left">
            <div className="footer-logo">
              <Terminal size={24} />
              <span>Hakizimana Aymar Davy</span>
            </div>
            <p className="footer-text">{t.footer.role}</p>
          </div>
          <div className="footer-links">
            <a href={portfolioData.personal.github} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Github size={20} />
            </a>
            <a href={portfolioData.personal.linkedin} target="_blank" rel="noopener noreferrer" className="footer-link">
              <Linkedin size={20} />
            </a>
            <a href={`mailto:${portfolioData.personal.email}`} className="footer-link">
              <Mail size={20} />
            </a>
          </div>
        </div>
        <div className="footer-bottom">
          <p>&copy; 2025 Hakizimana Aymar Davy. {t.footer.rights}</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
