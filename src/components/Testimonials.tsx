
import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Quote } from 'lucide-react';

interface Testimonial {
  name: string;
  role: string;
  content: string;
  avatar?: string;
}

const Testimonials = () => {
  const testimonialsRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(testimonialsRef, { once: true, amount: 0.2 });
  
  const testimonials: Testimonial[] = [
    {
      name: "John Doe",
      role: "Senior Game Developer",
      content: "Salman is an exceptional talent. His dedication to creating immersive gaming experiences and his ability to solve complex challenges make him a valuable asset to any team."
    },
    {
      name: "Jane Smith",
      role: "Web Project Manager",
      content: "Working with Salman on our web platform was a pleasure. His attention to detail and his ability to deliver clean, efficient code made our project a success."
    },
    {
      name: "David Wilson",
      role: "University Professor",
      content: "Salman demonstrates remarkable problem-solving abilities. His passion for learning and applying new technologies sets him apart from his peers."
    }
  ];
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        staggerChildren: 0.15,
        delayChildren: 0.3
      }
    }
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  
  return (
    <section id="testimonials" className="section bg-background relative py-32">
      <div className="absolute inset-0 bg-gradient-to-b from-background to-accent/5 z-[-1]"></div>
      
      {/* Decorative elements */}
      <div className="absolute top-20 right-1/4 w-72 h-72 rounded-full bg-primary/5 filter blur-3xl"></div>
      <div className="absolute bottom-20 left-1/4 w-72 h-72 rounded-full bg-accent/5 filter blur-3xl"></div>
      
      <motion.div 
        ref={testimonialsRef}
        className="max-w-7xl mx-auto px-6"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={containerVariants}
      >
        <motion.div
          className="text-center mb-16"
          variants={itemVariants}
        >
          <div className="chip inline-block mb-4">Testimonials</div>
          <h2 className="heading-lg text-gradient font-bold">What People Say</h2>
        </motion.div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div 
              key={index}
              className="glass-card p-8 relative group overflow-hidden backdrop-blur-md"
              variants={itemVariants}
              whileHover={{ y: -5, transition: { duration: 0.2 } }}
            >
              <div className="absolute -top-4 -left-4 text-5xl opacity-20 text-primary">
                <Quote size={48} />
              </div>
              
              <div className="relative z-10">
                <p className="italic text-muted-foreground mb-6">{testimonial.content}</p>
                
                <div className="flex items-center mt-4">
                  {testimonial.avatar ? (
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.name} 
                      className="w-12 h-12 rounded-full mr-4 border-2 border-primary/30"
                    />
                  ) : (
                    <div className="w-12 h-12 rounded-full mr-4 bg-gradient-to-br from-primary/30 to-accent/30 flex items-center justify-center text-foreground font-bold">
                      {testimonial.name.charAt(0)}
                    </div>
                  )}
                  
                  <div>
                    <p className="font-bold text-gradient">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </div>
              
              <div className="absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r from-primary via-accent to-primary group-hover:w-full transition-all duration-700"></div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default Testimonials;
