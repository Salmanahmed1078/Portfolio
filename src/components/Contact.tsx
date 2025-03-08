
import React, { useEffect, useRef, useState } from 'react';
import { Github, Linkedin, Mail, Send } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
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
    
    if (contactRef.current) {
      observer.observe(contactRef.current);
    }
    
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);
  
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      console.log('Form submitted:', formData);
      toast({
        title: "Message sent!",
        description: "Thanks for reaching out. I'll get back to you soon.",
      });
      setFormData({ name: '', email: '', message: '' });
      setIsSubmitting(false);
    }, 1500);
  };
  
  return (
    <section id="contact" className="section bg-background relative">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 z-[-1]"></div>
      
      <div 
        ref={contactRef}
        className="max-w-5xl mx-auto opacity-0"
      >
        <div className="chip mb-4">Contact</div>
        <h2 className="heading-lg mb-12">Let's Connect</h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <div className="space-y-8">
            <h3 className="text-2xl font-semibold">Get in Touch</h3>
            <p className="text-muted-foreground">
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
            </p>
            
            <div className="space-y-4">
              <a 
                href="mailto:salmansalu1078@gmail.com"
                className="flex items-center space-x-3 p-3 glass-card group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <span>salmansalu1078@gmail.com</span>
              </a>
              
              <a 
                href="https://github.com/salmanahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 glass-card group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <span>GitHub</span>
              </a>
              
              <a 
                href="https://linkedin.com/in/salmanahmed" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-3 glass-card group"
              >
                <div className="p-2 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <span>LinkedIn</span>
              </a>
            </div>
          </div>
          
          <div>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block mb-2 text-sm font-medium">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your name"
                />
              </div>
              
              <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full p-3 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your email"
                />
              </div>
              
              <div>
                <label htmlFor="message" className="block mb-2 text-sm font-medium">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full p-3 rounded-md border border-border bg-secondary/30 focus:outline-none focus:ring-2 focus:ring-primary/30 transition-all"
                  placeholder="Your message"
                />
              </div>
              
              <button
                type="submit"
                disabled={isSubmitting}
                className="button-primary w-full flex items-center justify-center space-x-2"
              >
                <span>Send Message</span>
                {isSubmitting ? (
                  <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-primary-foreground" />
                ) : (
                  <Send size={16} />
                )}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
