
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 px-6 md:px-12 lg:px-24 ${
      isScrolled ? 'py-4 bg-background/80 backdrop-blur-lg border-b border-border/50' : 'py-6'
    }`}>
      <div className="flex items-center justify-between">
        <Link to="/" className="font-bold text-xl tracking-tight hover:opacity-80 transition-opacity">
          Salman Ahmed
        </Link>
        
        <div className="hidden md:flex items-center space-x-8">
          <NavLinks />
        </div>
        
        <button
          className="block md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      {isMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-background border-b border-border animate-fade-in">
          <div className="flex flex-col space-y-4 px-6 py-6">
            <NavLinks onClick={() => setIsMenuOpen(false)} />
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLinks = ({ onClick }: { onClick?: () => void }) => {
  return (
    <>
      <a 
        href="#about" 
        className="font-medium hover:text-primary transition-colors duration-200"
        onClick={onClick}
      >
        About
      </a>
      <a 
        href="#skills" 
        className="font-medium hover:text-primary transition-colors duration-200"
        onClick={onClick}
      >
        Skills
      </a>
      <a 
        href="#projects" 
        className="font-medium hover:text-primary transition-colors duration-200"
        onClick={onClick}
      >
        Projects
      </a>
      <a 
        href="#contact" 
        className="font-medium hover:text-primary transition-colors duration-200"
        onClick={onClick}
      >
        Contact
      </a>
    </>
  );
};

export default Navbar;
