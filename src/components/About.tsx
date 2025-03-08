
import React, { useEffect, useRef } from 'react';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  
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
    
    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }
    
    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);
  
  return (
    <section id="about" className="section bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background z-[-1]"></div>
      
      <div 
        ref={aboutRef}
        className="max-w-5xl mx-auto opacity-0"
      >
        <div className="chip mb-4">About Me</div>
        <h2 className="heading-lg mb-12">Who am I?</h2>
        
        <div className="glass-card p-8 rounded-2xl">
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            <div className="col-span-1 md:col-span-2 flex justify-center md:justify-start">
              <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-primary/10 shadow-xl">
                <div className="w-full h-full bg-gradient-to-br from-accent to-primary/30 flex items-center justify-center text-4xl font-bold text-white">
                  SA
                </div>
              </div>
            </div>
            
            <div className="col-span-1 md:col-span-3 flex flex-col justify-center">
              <h3 className="text-2xl font-bold mb-2">Salman Ahmed</h3>
              <p className="text-muted-foreground mb-4">Game & Web Developer</p>
              
              <div className="space-y-4">
                <div className="flex flex-col">
                  <span className="font-medium">Education</span>
                  <span className="text-muted-foreground">Bachelors in Software Engineering, FAST NUCES (Graduating 2027)</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-medium">Expertise</span>
                  <span className="text-muted-foreground">Game Development with C# & Unity</span>
                  <span className="text-muted-foreground">Web Development with React & Next.js</span>
                </div>
                
                <p className="text-sm text-muted-foreground border-l-2 border-primary/30 pl-4 italic">
                  "I'm passionate about creating digital experiences that are both functional and delightful. The intersection of design and development is where I thrive."
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
