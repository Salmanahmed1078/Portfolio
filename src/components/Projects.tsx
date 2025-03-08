
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, ExternalLink, ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  description: string;
  tech: string[];
  image: string;
  github?: string;
  live?: string;
  featured?: boolean;
}

const Projects = () => {
  const projectsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(projectsRef, { once: true, amount: 0.1 });
  
  const projects: Project[] = [
    {
      title: 'Cannon Slinger',
      description: 'A physics-based game where players launch projectiles to hit targets, featuring realistic physics and challenging levels.',
      tech: ['Unity', 'C#', 'Physics', 'Game Design'],
      image: '/placeholder.svg',
      github: 'https://github.com/Salmanahmed1078',
      live: 'https://cannonslinger.demo',
      featured: true
    },
    {
      title: 'Tetris Game',
      description: 'A classic Tetris game implementation with modern graphics, featuring multiple game modes and responsive controls.',
      tech: ['C++', 'SFML', 'Game Design', 'Algorithms'],
      image: '/placeholder.svg',
      github: 'https://github.com/Salmanahmed1078',
      featured: true
    },
    {
      title: 'Brick Breaker',
      description: 'A retro-style Brick Breaker game built with Assembly, demonstrating low-level programming expertise and optimization.',
      tech: ['MASM x86', 'Irvine Library', 'Low-level Programming'],
      image: '/placeholder.svg',
      github: 'https://github.com/Salmanahmed1078',
    },
    {
      title: 'Clicky Crates',
      description: 'A reaction-time game where players click falling crates before they hit the ground, with increasing difficulty levels.',
      tech: ['Unity', 'C#', 'UI Design', 'Game Development'],
      image: '/placeholder.svg',
      github: 'https://github.com/Salmanahmed1078',
      live: 'https://clickycrates.demo',
    },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  return (
    <section id="projects" className="section bg-background relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 left-1/4 w-96 h-96 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 right-1/4 w-96 h-96 rounded-full bg-accent/5 filter blur-3xl"></div>
      
      <motion.div 
        ref={projectsRef}
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
        >
          <div className="chip inline-block mb-4">My Projects</div>
          <h2 className="heading-lg text-gradient font-bold">Recent Work</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isInView={isInView} />
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7, delay: 0.6 }}
        >
          <a 
            href="https://github.com/Salmanahmed1078"
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 button-secondary"
          >
            View More Projects
            <ArrowUpRight size={18} />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

const ProjectCard = ({ 
  project, 
  index,
  isInView 
}: { 
  project: Project; 
  index: number;
  isInView: boolean;
}) => {
  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { 
        duration: 0.6,
        delay: 0.2 + (index * 0.1)
      }
    }
  };
  
  return (
    <motion.div 
      className={`group perspective ${project.featured ? 'md:col-span-2' : ''}`}
      variants={cardVariants}
    >
      <div className="rotating-border">
        <div className="glass-card overflow-hidden backdrop-blur-md relative preserve-3d transition-all duration-500 h-full">
          {/* Project Image */}
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
          
          {/* Project Info */}
          <div className="p-6 bg-secondary/10 backdrop-blur-md">
            <h3 className="text-xl font-bold mb-3 text-gradient inline-block">{project.title}</h3>
            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">{project.description}</p>
            
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <span key={tech} className="chip text-xs">{tech}</span>
              ))}
            </div>
            
            <div className="mt-4 pt-4 border-t border-border/50 flex justify-between items-center">
              {project.github && (
                <a 
                  href={project.github} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-primary flex items-center gap-1 hover:underline"
                >
                  <Github size={14} />
                  View Code
                </a>
              )}
              
              {project.live && (
                <a 
                  href={project.live} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-sm text-accent flex items-center gap-1 hover:underline ml-auto"
                >
                  Live Demo
                  <ExternalLink size={14} />
                </a>
              )}
            </div>
          </div>
          
        </div>
      </div>
    </motion.div>
  );
};

export default Projects;
