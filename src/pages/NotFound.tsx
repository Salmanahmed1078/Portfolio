
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { motion } from "framer-motion";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticleBackground from "../components/ParticleBackground";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-background text-foreground flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center py-20 px-6 relative overflow-hidden">
        <ParticleBackground count={50} speed={0.3} />
        
        <motion.div 
          className="text-center max-w-md glass-card p-12 z-10 backdrop-blur-xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h1 className="heading-lg mb-2 text-gradient inline-block">404</h1>
          </motion.div>
          
          <motion.p 
            className="text-xl text-muted-foreground mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            The page you're looking for doesn't exist.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <a href="/" className="button-primary inline-flex items-center gap-2 group relative overflow-hidden">
              <span className="relative z-10">
                Return Home
              </span>
              <span className="absolute inset-0 bg-gradient-to-r from-primary/80 via-accent to-primary/80 bg-[length:200%] animate-background-pan opacity-0 group-hover:opacity-100 transition-opacity duration-500"></span>
            </a>
          </motion.div>
        </motion.div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
