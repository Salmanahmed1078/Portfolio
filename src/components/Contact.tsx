
import React, { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';
import { Github, Linkedin, Mail, Send, Check } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const contactRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(contactRef, { once: true, amount: 0.2 });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  
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
      setIsSuccess(true);
      
      // Reset success state after 3 seconds
      setTimeout(() => setIsSuccess(false), 3000);
    }, 1500);
  };
  
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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };
  
  return (
    <section id="contact" className="section bg-background relative py-32 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-primary/5 rounded-full filter blur-3xl"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-accent/5 rounded-full filter blur-3xl"></div>
      
      <motion.div 
        ref={contactRef}
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="chip inline-block mb-4">Contact</div>
          <h2 className="heading-lg text-gradient font-bold">Get In Touch</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div className="space-y-8" variants={itemVariants}>
            <motion.h3 
              className="text-2xl font-bold relative inline-block" 
              variants={itemVariants}
            >
              Let's Connect
              <motion.span 
                className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-primary to-accent"
                initial={{ width: 0 }}
                animate={isInView ? { width: '100%' } : { width: 0 }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </motion.h3>
            
            <motion.p 
              className="text-muted-foreground"
              variants={itemVariants}
            >
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
            </motion.p>
            
            <div className="space-y-4">
              <motion.a 
                href="mailto:salmansalu1078@gmail.com"
                className="flex items-center space-x-3 p-4 glass-card group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Mail size={20} className="text-primary" />
                </div>
                <span className="font-medium">salmansalu1078@gmail.com</span>
              </motion.a>
              
              <motion.a 
                href="https://github.com/Salmanahmed1078" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 glass-card group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Github size={20} className="text-primary" />
                </div>
                <span className="font-medium">GitHub</span>
              </motion.a>
              
              <motion.a 
                href="https://www.linkedin.com/in/salman-ahmed-6a8918287/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-3 p-4 glass-card group hover:scale-105 transition-all duration-300"
                variants={itemVariants}
                whileHover={{ x: 5 }}
              >
                <div className="p-3 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Linkedin size={20} className="text-primary" />
                </div>
                <span className="font-medium">LinkedIn</span>
              </motion.a>
            </div>
          </motion.div>
          
          <motion.div variants={itemVariants}>
            <motion.form 
              onSubmit={handleSubmit} 
              className="space-y-6 animated-gradient-border p-0.5"
              variants={itemVariants}
            >
              <div className="bg-secondary/10 backdrop-blur-sm p-8 rounded-lg space-y-6">
                <motion.div variants={itemVariants}>
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
                </motion.div>
                
                <motion.div variants={itemVariants}>
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
                </motion.div>
                
                <motion.div variants={itemVariants}>
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
                </motion.div>
                
                <motion.button
                  type="submit"
                  disabled={isSubmitting || isSuccess}
                  className={`button-primary w-full flex items-center justify-center space-x-2 group overflow-hidden relative ${
                    isSuccess ? 'bg-green-500 hover:bg-green-600' : ''
                  }`}
                  variants={itemVariants}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className="relative z-10 flex items-center gap-2">
                    {isSuccess ? (
                      <>
                        <span>Message Sent</span>
                        <Check size={16} />
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        {isSubmitting ? (
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-primary-foreground" />
                        ) : (
                          <Send size={16} />
                        )}
                      </>
                    )}
                  </span>
                  <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-[length:200%] animate-background-pan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
                </motion.button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default Contact;
