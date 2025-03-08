
import React from 'react';
import { Github, Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-10 px-6 md:px-12 lg:px-24 border-t border-border bg-background">
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        <div className="flex space-x-4 mb-4">
          <a 
            href="https://github.com/salmanahmed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="GitHub"
          >
            <Github size={20} />
          </a>
          <a 
            href="https://linkedin.com/in/salmanahmed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="LinkedIn"
          >
            <Linkedin size={20} />
          </a>
          <a 
            href="https://twitter.com/salmanahmed" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2 rounded-full hover:bg-secondary transition-colors duration-200"
            aria-label="Twitter"
          >
            <Twitter size={20} />
          </a>
        </div>
        
        <p className="text-sm text-muted-foreground">
          Designed & Developed by Salman Ahmed
        </p>
        <p className="text-xs text-muted-foreground mt-1">
          Built with React, Tailwind CSS & more
        </p>
        
        <p className="text-xs text-muted-foreground mt-4">
          © {new Date().getFullYear()} Salman Ahmed. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
