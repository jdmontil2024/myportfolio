'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isVisible, setIsVisible] = useState(false);
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const handleImageError = (projectTitle: string) => {
    setImageErrors(prev => ({ ...prev, [projectTitle]: true }));
  };

  const getProjectEmoji = (title: string) => {
    if (title.includes('Church')) return '⛪';
    if (title.includes('Loan')) return '💰';
    if (title.includes('Property')) return '🏢';
    if (title.includes('Energy')) return '⚡';
    return '📸';
  };

  const skillCategories = [
    {
      name: "Frontend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
      skills: ["Next.js", "React", "Tailwind", "TypeScript"]
    },
    {
      name: "Backend",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/laravel/laravel-original.svg",
      skills: ["Laravel", "PHP", "Node.js", "REST APIs"]
    },
    {
      name: "Database & DevOps",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
      skills: ["PostgreSQL", "Docker", "Docker Compose", "Git"]
    },
    {
      name: "Tools",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
      skills: ["Supabase", "Vercel", "Postman", "Figma"]
    }
  ];

  const projects = [
    {
      title: "ID Photo Editor",
      description: "Professional ID photo editor with GCash integration. Crop, resize, and edit ID photos instantly.",
      image: "/images/photo.png",
      technologies: ["Next.js", "Supabase", "PayMongo"],
      link: "https://nextjs-subscription-payments-inky-eight.vercel.app"
    },
    {
      title: "Church Attendance",
      description: "Church management system for tracking attendance, managing members, and generating reports.",
      image: "/images/church.png",
      technologies: ["Laravel", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      title: "Loan Manager",
      description: "Comprehensive loan management system for tracking loan applications, payments, and borrower profiles.",
      image: "/images/loan.png",
      technologies: ["Laravel", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      title: "Property Management",
      description: "Complete property management solution for real estate agencies. Manage properties, tenants, and leases.",
      image: "/images/property.png",
      technologies: ["Laravel", "PostgreSQL", "Docker"],
      link: "#"
    },
    {
      title: "Energy Analytics",
      description: "IoT-based energy monitoring platform with real-time analytics and consumption tracking.",
      image: "/images/energy.png",
      technologies: ["Laravel", "PostgreSQL", "WebSockets"],
      link: "#"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="min-h-[60vh] md:min-h-[70vh] flex items-center justify-center px-4 md:px-6 py-8 md:py-12 bg-white relative overflow-hidden">
        {/* Animated gradient background elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-orange-50 via-white to-orange-50 opacity-70"></div>
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-orange-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div className={`transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`}>
            <div className="inline-block mb-3 md:mb-4 px-3 md:px-4 py-0.5 md:py-1 border-l-4 border-r-4 border-orange-400 bg-gradient-to-r from-orange-50 to-transparent">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent text-xs md:text-sm font-mono tracking-wider font-bold">
                &lt; PORTFOLIO /&gt;
              </span>
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-2 md:mb-4 px-2">
              <span className="bg-gradient-to-r from-gray-800 via-orange-600 to-gray-800 bg-clip-text text-transparent">
                Jennifer Montil
              </span>
            </h1>
            
            <div className="text-base md:text-xl mb-3 md:mb-4 font-mono px-2">
              <span className="bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent font-bold">
                Full Stack Developer
              </span>
            </div>
            
            <p className="text-gray-700 mb-4 md:mb-6 flex items-center justify-center gap-2 text-xs md:text-sm font-medium">
              <svg className="w-3 h-3 md:w-4 md:h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              Philippines
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-3 mb-6 md:mb-8 px-4">
              <a href="#projects" className="px-4 md:px-6 py-2 text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg text-center">
                View My Work
              </a>
              <a href="#contact" className="px-4 md:px-6 py-2 text-sm border-2 border-orange-500 text-orange-600 rounded-md font-semibold hover:bg-gradient-to-r hover:from-orange-50 hover:to-orange-100 transition-all text-center">
                Contact Me
              </a>
            </div>
            
            <div className="flex justify-center gap-4 md:gap-6">
              <a href="https://github.com/jdmontil2024" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </a>
              <a href="#" target="_blank" rel="noopener noreferrer" className="text-gray-500 hover:text-orange-500 transition-all duration-300 hover:scale-110">
                <svg className="w-5 h-5 md:w-6 md:h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 0021.656-12.886c0-.21-.007-.42-.02-.63A9.935 9.935 0 0024 4.59z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-10 md:py-16 bg-gradient-to-b from-gray-100 to-gray-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-2 md:mb-3"></div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
              <span className="bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent">
                Technical Skills
              </span>
            </h2>
            <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mt-2 md:mt-3"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-xs md:text-sm mt-3 md:mt-4 px-2 font-medium">
              Technologies and tools I work with to bring ideas to life
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {skillCategories.map((category, catIndex) => (
              <div key={catIndex} className={`bg-white rounded-lg p-4 md:p-5 text-center transition-all duration-500 hover:scale-105 hover:shadow-xl border border-gray-200 hover:border-orange-300 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'}`} style={{ transitionDelay: `${catIndex * 100}ms` }}>
                <div className="flex justify-center mb-2 md:mb-3">
                  <div className="p-2 rounded-full bg-gradient-to-br from-orange-100 to-orange-200">
                    <img src={category.icon} alt={category.name} className="w-10 h-10 md:w-14 md:h-14 object-contain" />
                  </div>
                </div>
                <h3 className="text-sm md:text-base font-bold bg-gradient-to-r from-orange-500 to-orange-700 bg-clip-text text-transparent mb-2 md:mb-3 pb-1 md:pb-2 border-b-2 border-orange-200 inline-block">{category.name}</h3>
                <div className="flex flex-wrap justify-center gap-1.5 md:gap-2 mt-2 md:mt-3">
                  {category.skills.map((skill, skillIndex) => (
                    <span key={skillIndex} className="px-2 md:px-2 py-0.5 md:py-1 bg-gray-100 text-gray-700 rounded-md text-[11px] md:text-xs font-semibold hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all cursor-pointer">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-10 md:py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-6 md:mb-10">
            <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-2 md:mb-3"></div>
            <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
              <span className="bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent">
                Featured Projects
              </span>
            </h2>
            <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mt-2 md:mt-3"></div>
            <p className="text-gray-700 max-w-2xl mx-auto text-xs md:text-sm mt-3 md:mt-4 px-2 font-medium">Here are some of my best works</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-lg overflow-hidden hover:shadow-xl hover:shadow-orange-500/20 transition-all duration-300 hover:-translate-y-2 border border-gray-200 group">
                <div className="h-36 md:h-44 relative overflow-hidden bg-gradient-to-br from-gray-100 to-gray-200">
                  {!imageErrors[project.title] ? (
                    <img 
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={() => handleImageError(project.title)}
                    />
                  ) : (
                    <div className="w-full h-full bg-gradient-to-r from-orange-400 to-orange-600 flex items-center justify-center">
                      <div className="text-center">
                        <div className="text-4xl mb-1">{getProjectEmoji(project.title)}</div>
                        <p className="text-white font-bold text-xs">{project.title}</p>
                      </div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                <div className="p-4 md:p-5">
                  <h3 className="text-base md:text-lg font-bold mb-1 md:mb-2 bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent">{project.title}</h3>
                  <p className="text-gray-700 text-xs md:text-sm mb-2 md:mb-3 line-clamp-2 font-medium">{project.description}</p>
                  <div className="flex gap-1.5 md:gap-2 flex-wrap mb-2 md:mb-3">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="px-1.5 md:px-2 py-0.5 md:py-1 bg-gray-100 text-gray-700 text-[10px] md:text-xs font-semibold rounded-md hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 hover:text-white transition-all duration-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <a href={project.link} target="_blank" rel="noopener noreferrer" className="text-orange-600 hover:text-orange-700 font-bold inline-flex items-center gap-1 text-xs md:text-sm group-hover:gap-2 transition-all">
                    View Project 
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-10 md:py-16 bg-gradient-to-br from-orange-50 via-gray-100 to-orange-50 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-orange-200/20 to-orange-400/20"></div>
        <div className="absolute -top-20 -left-20 w-60 h-60 bg-orange-300 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"></div>
        <div className="absolute -bottom-20 -right-20 w-60 h-60 bg-orange-400 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse delay-1000"></div>
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-3 md:mb-4"></div>
          <h2 className="text-2xl md:text-4xl font-bold mb-2 md:mb-3">
            <span className="bg-gradient-to-r from-gray-800 to-orange-600 bg-clip-text text-transparent">
              Let's Work Together
            </span>
          </h2>
          <div className="inline-block w-8 md:w-12 h-0.5 bg-gradient-to-r from-orange-400 to-orange-600 mb-3 md:mb-4"></div>
          <p className="text-gray-800 text-sm md:text-base mb-4 md:mb-6 px-4 font-medium">I'm always open to new opportunities and collaborations!</p>
          <a href="mailto:jennifer.montil@example.com" className="inline-block px-5 md:px-6 py-2 text-sm bg-gradient-to-r from-orange-500 to-orange-600 text-white font-semibold rounded-md hover:from-orange-600 hover:to-orange-700 transition-all shadow-md hover:shadow-lg">
            Get In Touch
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-4 md:py-6 text-center bg-white border-t border-gray-200 text-xs md:text-sm">
        <p className="bg-gradient-to-r from-gray-600 to-gray-800 bg-clip-text text-transparent font-medium">© 2024 Jennifer Montil — Crafting digital experiences</p>
        <p className="text-[10px] md:text-xs mt-1 text-gray-600 font-medium">Available for freelance & full-time opportunities</p>
      </footer>
    </div>
  );
}