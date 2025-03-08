
import React, { useEffect, useRef } from 'react';

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
      className="min-h-screen flex flex-col items-center justify-center px-6 py-24 md:px-12 lg:px-24 relative mouse-cursor-gradient-tracking"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-accent/10 z-[-1]" />
      
      <div className="absolute inset-0 overflow-hidden z-[-2]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/5 via-background to-background"></div>
        <div className="absolute top-[-10%] right-[-10%] w-[40%] h-[40%] rounded-full bg-accent/5 filter blur-3xl animate-float"></div>
        <div className="absolute bottom-[-5%] left-[-5%] w-[30%] h-[30%] rounded-full bg-primary/5 filter blur-3xl animate-float" style={{ animationDelay: '-3s' }}></div>
      </div>
      
      <div className="w-full max-w-5xl flex flex-col items-center justify-center space-y-8 text-center">
        <div className="space-y-2 animate-fade-in">
          <div className="chip mb-4 backdrop-blur-sm">Game & Web Developer</div>
          <h1 className="heading-xl mx-auto">
            Hi, I'm <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-primary/70">Salman Ahmed</span>
          </h1>
          <p className="body-lg max-w-2xl mx-auto text-muted-foreground mt-4">
            I create immersive games and build sleek, performant web experiences. Currently a Software Engineering student at FAST NUCES.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row gap-4 mt-8 animate-fade-in" style={{ animationDelay: '0.2s' }}>
          <a href="#projects" className="button-primary">
            View My Work
          </a>
          <a href="/resume.pdf" className="button-secondary" target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
        
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <a href="#about" aria-label="Scroll down">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 5V19M12 19L19 12M12 19L5 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
