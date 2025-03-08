
import React, { useEffect, useRef } from 'react';

interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'tool';
}

const Skills = () => {
  const skillsRef = useRef<HTMLDivElement>(null);
  
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
    
    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }
    
    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);
  
  const skills: Skill[] = [
    { name: 'JavaScript', icon: '🟨', category: 'language' },
    { name: 'TypeScript', icon: '🔵', category: 'language' },
    { name: 'Python', icon: '🐍', category: 'language' },
    { name: 'C++', icon: '⚙️', category: 'language' },
    { name: 'C#', icon: '🎮', category: 'language' },
    { name: 'React', icon: '⚛️', category: 'framework' },
    { name: 'Next.js', icon: '▲', category: 'framework' },
    { name: 'Tailwind CSS', icon: '🎨', category: 'framework' },
    { name: 'Bootstrap', icon: '🅱️', category: 'framework' },
    { name: 'Git', icon: '📊', category: 'tool' },
    { name: 'Bash', icon: '💻', category: 'tool' },
    { name: 'Figma', icon: '🎭', category: 'tool' },
    { name: 'Unity', icon: '🎲', category: 'tool' },
    { name: 'SFML', icon: '🎯', category: 'tool' },
  ];
  
  return (
    <section id="skills" className="section bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 z-[-1]"></div>
      
      <div 
        ref={skillsRef}
        className="max-w-5xl mx-auto opacity-0"
      >
        <div className="chip mb-4">Skills</div>
        <h2 className="heading-lg mb-12">What I Work With</h2>
        
        <div className="space-y-8">
          <SkillCategory title="Languages" skills={skills.filter(s => s.category === 'language')} />
          <SkillCategory title="Frameworks" skills={skills.filter(s => s.category === 'framework')} />
          <SkillCategory title="Tools" skills={skills.filter(s => s.category === 'tool')} />
        </div>
      </div>
    </section>
  );
};

const SkillCategory = ({ title, skills }: { title: string; skills: Skill[] }) => {
  return (
    <div className="space-y-4">
      <h3 className="text-xl font-semibold">{title}</h3>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
        {skills.map((skill) => (
          <SkillCard key={skill.name} skill={skill} />
        ))}
      </div>
    </div>
  );
};

const SkillCard = ({ skill }: { skill: Skill }) => {
  return (
    <div className="glass-card p-4 flex items-center space-x-3 transition-all duration-300 hover:translate-y-[-5px]">
      <span className="text-xl">{skill.icon}</span>
      <span className="font-medium">{skill.name}</span>
    </div>
  );
};

export default Skills;
