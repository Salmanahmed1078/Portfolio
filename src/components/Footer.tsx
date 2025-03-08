
import React from 'react';
import { motion } from 'framer-motion';
import { Github, Linkedin, Twitter, Heart } from 'lucide-react';

const Footer = () => {
  const socialLinks = [
    { icon: <Github size={18} />, url: 'https://github.com/Salmanahmed1078', label: 'GitHub' },
    { icon: <Linkedin size={18} />, url: 'https://www.linkedin.com/in/salman-ahmed-6a8918287/', label: 'LinkedIn' },
    { icon: <Twitter size={18} />, url: 'https://twitter.com/salmanahmed', label: 'Twitter' }
  ];
  
  const footerLinks = [
    { text: 'Home', url: '#home' },
    { text: 'About', url: '#about' },
    { text: 'Skills', url: '#skills' },
    { text: 'Projects', url: '#projects' },
    { text: 'Contact', url: '#contact' }
  ];
  
  const footerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.1, 
        delayChildren: 0.2 
      }
    }
  };
  
  const childVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1 }
  };
  
  return (
    <footer className="py-16 px-6 relative bg-gradient-to-b from-background to-black/20 backdrop-blur-md overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
      <div className="absolute top-0 right-1/3 w-32 h-32 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-1/3 left-1/4 w-32 h-32 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <motion.div 
        className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        variants={footerVariants}
      >
        <motion.div className="space-y-6" variants={childVariants}>
          <h3 className="text-xl font-bold text-gradient">Salman Ahmed</h3>
          <p className="text-sm text-muted-foreground">
            Creating immersive digital experiences through game and web development. Always learning, always creating.
          </p>
          <div className="flex space-x-4">
            {socialLinks.map((link, i) => (
              <motion.a 
                key={i}
                href={link.url} 
                target="_blank" 
                rel="noopener noreferrer"
                className="p-2 rounded-full hover:bg-secondary/50 transition-colors duration-200"
                aria-label={link.label}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                {link.icon}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div className="space-y-6" variants={childVariants}>
          <h3 className="text-lg font-bold">Quick Links</h3>
          <ul className="space-y-3">
            {footerLinks.map((link, i) => (
              <li key={i}>
                <a 
                  href={link.url} 
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-200 animated-underline"
                >
                  {link.text}
                </a>
              </li>
            ))}
          </ul>
        </motion.div>
        
        <motion.div className="space-y-6" variants={childVariants}>
          <h3 className="text-lg font-bold">Get in Touch</h3>
          <p className="text-sm text-muted-foreground">
            Feel free to reach out for collaborations or just a friendly chat.
          </p>
          <a 
            href="mailto:salmansalu1078@gmail.com" 
            className="text-sm text-gradient hover:opacity-80 transition-opacity duration-200"
          >
            salmansalu1078@gmail.com
          </a>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="max-w-7xl mx-auto mt-12 pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          © {new Date().getFullYear()} Salman Ahmed. All rights reserved.
        </p>
        
        <p className="text-xs text-muted-foreground flex items-center gap-1">
          Built with 
          <Heart size={12} className="text-primary animate-pulse" /> 
          using React, Tailwind CSS & Three.js
        </p>
      </motion.div>
    </footer>
  );
};

export default Footer;
