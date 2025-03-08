
import React, { useEffect, useRef } from 'react';
import { Github, ExternalLink } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-fade-in');
          observer.unobserve(entry.target);
        }
      },
      {
        threshold: 0.1,
      }
    );
    
    if (projectsRef.current) {
      observer.observe(projectsRef.current);
    }
    
    return () => {
      if (projectsRef.current) {
        observer.unobserve(projectsRef.current);
      }
    };
  }, []);
  
  const projects: Project[] = [
    {
      title: 'Cannon Slinger',
      description: 'A physics-based game where players launch projectiles to hit targets',
      tech: ['Unity', 'C#', 'Physics'],
      image: '/placeholder.svg',
      github: 'https://github.com/salmanahmed',
      live: 'https://cannonslinger.demo',
    },
    {
      title: 'Tetris Game',
      description: 'A classic Tetris game implementation with modern graphics',
      tech: ['C++', 'SFML', 'Game Design'],
      image: '/placeholder.svg',
      github: 'https://github.com/salmanahmed',
    },
    {
      title: 'Brick Breaker',
      description: 'A retro-style Brick Breaker game built with Assembly',
      tech: ['MASM x86', 'Irvine Library'],
      image: '/placeholder.svg',
      github: 'https://github.com/salmanahmed',
    },
    {
      title: 'Clicky Crates',
      description: 'A reaction-time game where players click falling crates',
      tech: ['Unity', 'C#', 'UI Design'],
      image: '/placeholder.svg',
      github: 'https://github.com/salmanahmed',
      live: 'https://clickycrates.demo',
    },
  ];
  
  return (
    <section id="projects" className="section bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background z-[-1]"></div>
      
      <div 
        ref={projectsRef}
        className="max-w-5xl mx-auto opacity-0"
      >
        <div className="chip mb-4">My Projects</div>
        <h2 className="heading-lg mb-12">Recent Work</h2>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

const ProjectCard = ({ project, index }: { project: Project; index: number }) => {
  return (
    <div 
      className="glass-card overflow-hidden group"
      style={{ animationDelay: `${index * 0.1}s` }}
    >
      <div className="h-48 bg-secondary/30 relative overflow-hidden">
        <img 
          src={project.image} 
          alt={project.title} 
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-between p-4">
          <div className="flex space-x-2">
            {project.github && (
              <a 
                href={project.github} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                aria-label="GitHub Repository"
              >
                <Github size={18} className="text-white" />
              </a>
            )}
            
            {project.live && (
              <a 
                href={project.live} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-colors duration-200"
                aria-label="Live Preview"
              >
                <ExternalLink size={18} className="text-white" />
              </a>
            )}
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-muted-foreground text-sm mb-4">{project.description}</p>
        
        <div className="flex flex-wrap gap-2">
          {project.tech.map((tech) => (
            <span key={tech} className="chip text-xs">{tech}</span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
