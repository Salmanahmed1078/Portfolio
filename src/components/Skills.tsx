
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';

interface Skill {
  name: string;
  icon: string;
  level: number; // 1-5
  category: 'language' | 'framework' | 'tool';
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(skillsRef, { once: true, amount: 0.2 });
  
  const skills: Skill[] = [
    { name: 'JavaScript', icon: '🟨', level: 4, category: 'language' },
    { name: 'TypeScript', icon: '🔵', level: 4, category: 'language' },
    { name: 'Python', icon: '🐍', level: 3, category: 'language' },
    { name: 'C++', icon: '⚙️', level: 4, category: 'language' },
    { name: 'C#', icon: '🎮', level: 5, category: 'language' },
    { name: 'React', icon: '⚛️', level: 4, category: 'framework' },
    { name: 'Next.js', icon: '▲', level: 4, category: 'framework' },
    { name: 'Tailwind CSS', icon: '🎨', level: 5, category: 'framework' },
    { name: 'Bootstrap', icon: '🅱️', level: 3, category: 'framework' },
    { name: 'Three.js', icon: '🌐', level: 3, category: 'framework' },
    { name: 'Git', icon: '📊', level: 4, category: 'tool' },
    { name: 'Bash', icon: '💻', level: 3, category: 'tool' },
    { name: 'Figma', icon: '🎭', level: 4, category: 'tool' },
    { name: 'Unity', icon: '🎲', level: 5, category: 'tool' },
    { name: 'SFML', icon: '🎯', level: 4, category: 'tool' },
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <section id="skills" className="section bg-background relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-40 right-10 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-40 left-10 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <motion.div 
        ref={skillsRef}
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="chip inline-block mb-4">Skills</div>
          <h2 className="heading-lg text-gradient font-bold">Tech Stack</h2>
        </motion.div>
        
        <div className="space-y-16">
          <SkillCategory 
            title="Languages" 
            skills={skills.filter(s => s.category === 'language')} 
            isInView={isInView}
            delay={0.1}
          />
          
          <SkillCategory 
            title="Frameworks & Libraries" 
            skills={skills.filter(s => s.category === 'framework')} 
            isInView={isInView}
            delay={0.3}
          />
          
          <SkillCategory 
            title="Tools" 
            skills={skills.filter(s => s.category === 'tool')} 
            isInView={isInView}
            delay={0.5}
          />
        </div>
      </motion.div>
    </section>
  );
};

const SkillCategory = ({ 
  title, 
  skills, 
  isInView, 
  delay 
}: { 
  title: string; 
  skills: Skill[]; 
  isInView: boolean;
  delay: number;
}) => {
  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: delay + (i * 0.1),
        duration: 0.5
      }
    })
  };
  
  return (
    <div className="space-y-6">
      <motion.h3 
        className="text-2xl font-bold relative inline-block"
        initial={{ opacity: 0, x: -20 }}
        animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
        transition={{ duration: 0.6, delay }}
      >
        {title}
        <motion.span 
          className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent"
          initial={{ width: 0 }}
          animate={isInView ? { width: '100%' } : { width: 0 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
        />
      </motion.h3>
      
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.name}
            custom={index}
            variants={variants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
          >
            <SkillCard skill={skill} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="neon-border rounded-xl p-4 bg-secondary/10 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:bg-secondary/20 group relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-primary/10 via-accent/5 to-primary/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
      
      <div className="flex items-center space-x-3 relative z-10">
        <span className="text-xl">{skill.icon}</span>
        <div className="flex flex-col">
          <span className="font-medium">{skill.name}</span>
          <div className="flex mt-1">
            {Array.from({ length: 5 }).map((_, i) => (
              <div 
                key={i} 
                className={`w-2 h-2 rounded-full mr-1 ${
                  i < skill.level ? 'bg-primary' : 'bg-primary/20'
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
