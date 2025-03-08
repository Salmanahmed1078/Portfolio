
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

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
      <div className="flex-1 flex items-center justify-center py-20 px-6">
        <div className="text-center max-w-md glass-card p-12 animate-fade-in">
          <h1 className="heading-lg mb-4">404</h1>
          <p className="text-xl text-muted-foreground mb-6">The page you're looking for doesn't exist.</p>
          <a href="/" className="button-primary inline-block">
            Return Home
          </a>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default NotFound;
