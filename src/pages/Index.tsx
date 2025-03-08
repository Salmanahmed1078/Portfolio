
import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import About from '../components/About';
import Skills from '../components/Skills';
import Projects from '../components/Projects';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import { Moon, Sun } from 'lucide-react';

const Index = () => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  
  useEffect(() => {
    // Check if user prefers dark mode
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setIsDarkMode(true);
      document.documentElement.classList.add('dark');
    } else {
      setIsDarkMode(false);
      document.documentElement.classList.remove('dark');
    }
    
    // Initialize mouse tracking for gradient effect elements
    const handleMouseMove = (e: MouseEvent) => {
      document.querySelectorAll('.mouse-cursor-gradient-tracking').forEach((el) => {
        const rect = el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        if (x >= 0 && y >= 0 && x <= rect.width && y <= rect.height) {
          (el as HTMLElement).style.setProperty('--mouse-x', `${x}px`);
          (el as HTMLElement).style.setProperty('--mouse-y', `${y}px`);
        }
      });
    };
    
    window.addEventListener('mousemove', handleMouseMove);
    
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
  
  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };
  
  return (
    <div className="min-h-screen bg-background text-foreground overflow-hidden">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Navbar />
        
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className="fixed bottom-6 right-6 z-50 p-3 rounded-full glass-card backdrop-blur-lg shadow-lg hover:scale-110 transition-all duration-300"
          aria-label="Toggle theme"
        >
          <AnimatePresence mode="wait" initial={false}>
            <motion.div
              key={isDarkMode ? 'dark' : 'light'}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 20, opacity: 0 }}
              transition={{ duration: 0.2 }}
            >
              {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.div>
          </AnimatePresence>
        </button>
        
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </motion.div>
    </div>
  );
};

export default Index;
