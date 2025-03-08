
import React, { useEffect, useRef } from 'react';
import ThreeScene from './ThreeScene';
import { motion } from 'framer-motion';

const Hero = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (!heroRef.current) return;
    
    const handleMouseMove = (e: MouseEvent) => {
      if (!heroRef.current) return;
      
      const x = e.clientX;
      const y = e.clientY;
      
      const rect = heroRef.current.getBoundingClientRect();
      const mouseX = x - rect.left;
      const mouseY = y - rect.top;
      
      heroRef.current.style.setProperty('--mouse-x', `${mouseX}px`);
      heroRef.current.style.setProperty('--mouse-y', `${mouseY}px`);
    };
    
    heroRef.current.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      if (heroRef.current) {
        heroRef.current.removeEventListener('mousemove', handleMouseMove);
      }
    };
  }, []);
  
  return (
    <div 
      ref={heroRef}
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 relative mouse-cursor-gradient-tracking overflow-hidden"
      id="home"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-background/80 z-[1]" />
      
      <div className="absolute inset-0 z-0">
        <ThreeScene className="w-full h-full" />
      </div>
      
      {/* Content */}
      <div className="w-full max-w-5xl flex flex-col items-center justify-center space-y-8 text-center z-10">
        <motion.div 
          className="space-y-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.div 
            className="chip mb-6 backdrop-blur-sm inline-block"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Game & Web Developer
          </motion.div>
          
          <h1 className="heading-xl mx-auto mb-2">
            Hi, I'm <span className="text-gradient font-extrabold">Salman Ahmed</span>
          </h1>
          
          <motion.p 
            className="body-lg max-w-2xl mx-auto text-muted-foreground mt-6"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            I create immersive games and build sleek, performant web experiences. 
            Currently a Software Engineering student at FAST NUCES.
          </motion.p>
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-6 mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <a href="#projects" className="button-primary group relative overflow-hidden">
            <span className="relative z-10 flex items-center justify-center gap-2">
              View My Work
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-[length:200%] animate-background-pan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
          </a>
          
          <a href="/resume.pdf" className="button-secondary group" target="_blank" rel="noopener noreferrer">
            <span className="flex items-center justify-center gap-2">
              Download Resume
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M21 15V19C21 19.5304 20.7893 20.0391 20.4142 20.4142C20.0391 20.7893 19.5304 21 19 21H5C4.46957 21 3.96086 20.7893 3.58579 20.4142C3.21071 20.0391 3 19.5304 3 19V15M7 10L12 15M12 15L17 10M12 15V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>
        </motion.div>
        
        <motion.div 
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.7, y: [0, 10, 0] }}
          transition={{ delay: 1.5, duration: 2, repeat: Infinity, repeatType: "loop" }}
        >
          <a href="#about" aria-label="Scroll down" className="text-foreground/70 hover:text-foreground transition-colors">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
