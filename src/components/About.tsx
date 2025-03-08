
import React, { useEffect, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const About = () => {
  const aboutRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(aboutRef, { once: true, amount: 0.3 });
  
  return (
    <section id="about" className="section bg-background relative overflow-hidden py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-background z-[-1]"></div>
      
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-radial from-primary/5 to-transparent opacity-50 blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-radial from-accent/5 to-transparent opacity-50 blur-3xl"></div>
      
      <div 
        ref={aboutRef}
        className="max-w-7xl mx-auto px-6"
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.7 }}
          className="text-center mb-16"
        >
          <motion.div 
            className="chip inline-block mb-4"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.8 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            About Me
          </motion.div>
          <h2 className="heading-lg text-gradient font-bold">Who am I?</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Profile Image/Avatar */}
          <motion.div 
            className="lg:col-span-2 flex justify-center"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="relative w-64 h-64 sm:w-80 sm:h-80">
              <div className="absolute inset-0 animate-morph bg-gradient-to-br from-primary/30 via-accent/30 to-primary/30 blur-md"></div>
              <div className="absolute inset-[3px] animate-morph bg-gradient-to-br from-primary via-accent to-primary overflow-hidden flex items-center justify-center">
                <div className="text-8xl font-bold text-white flex items-center justify-center h-full w-full bg-gradient-to-br from-primary/90 to-accent/90">
                  SA
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* About Content */}
          <motion.div 
            className="lg:col-span-3"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            <div className="glass-card p-8 backdrop-blur-md relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <h3 className="text-3xl font-bold mb-4 text-gradient">Salman Ahmed</h3>
              <div className="space-y-6 relative z-10">
                <div className="flex flex-col">
                  <span className="font-medium text-lg">Education</span>
                  <span className="text-muted-foreground">Bachelors in Software Engineering, FAST NUCES (Graduating 2027)</span>
                </div>
                
                <div className="flex flex-col">
                  <span className="font-medium text-lg">Expertise</span>
                  <div className="space-y-2">
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-muted-foreground">Game Development with C# & Unity</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-accent mr-2"></div>
                      <span className="text-muted-foreground">Web Development with React & Next.js</span>
                    </div>
                    <div className="flex items-start">
                      <div className="w-2 h-2 mt-2 rounded-full bg-primary mr-2"></div>
                      <span className="text-muted-foreground">Problem Solving & Algorithmic Thinking</span>
                    </div>
                  </div>
                </div>
                
                <div className="animated-gradient-border p-0.5 mt-4">
                  <div className="bg-secondary/20 backdrop-blur-sm p-4 rounded-lg">
                    <p className="text-muted-foreground italic">
                      "I'm passionate about creating digital experiences that are both functional and delightful. The intersection of design and development is where I thrive."
                    </p>
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-3 mt-4">
                  <span className="chip">Creative</span>
                  <span className="chip">Problem Solver</span>
                  <span className="chip">Fast Learner</span>
                  <span className="chip">Team Player</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
