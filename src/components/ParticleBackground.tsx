
import React, { useEffect, useRef } from 'react';

interface ParticleBackgroundProps {
  className?: string;
  particleColor?: string;
  particleSize?: number;
  speed?: number;
  count?: number;
}

const ParticleBackground: React.FC<ParticleBackgroundProps> = ({
  className = '',
  particleColor = 'rgba(255, 255, 255, 0.3)',
  particleSize = 1.5,
  speed = 0.5,
  count = 100
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    
    const ctx = canvas.getContext('2d');
    if (!ctx) return;
    
    let particles: {
      x: number;
      y: number;
      radius: number;
      directionX: number;
      directionY: number;
      color: string;
    }[] = [];
    
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };
    
    const initParticles = () => {
      particles = [];
      for (let i = 0; i < count; i++) {
        const radius = Math.random() * particleSize + 0.5;
        const x = Math.random() * (canvas.width - radius * 2) + radius;
        const y = Math.random() * (canvas.height - radius * 2) + radius;
        const directionX = Math.random() * speed - speed / 2;
        const directionY = Math.random() * speed - speed / 2;
        
        particles.push({
          x,
          y,
          radius,
          directionX,
          directionY,
          color: particleColor
        });
      }
    };
    
    const animate = () => {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      particles.forEach(particle => {
        // Draw particle
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        ctx.fillStyle = particle.color;
        ctx.fill();
        
        // Update position
        particle.x += particle.directionX;
        particle.y += particle.directionY;
        
        // Boundary collision detection
        if (particle.x + particle.radius > canvas.width || particle.x - particle.radius < 0) {
          particle.directionX = -particle.directionX;
        }
        
        if (particle.y + particle.radius > canvas.height || particle.y - particle.radius < 0) {
          particle.directionY = -particle.directionY;
        }
        
        // Draw connections
        particles.forEach(otherParticle => {
          const dx = particle.x - otherParticle.x;
          const dy = particle.y - otherParticle.y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          const maxDistance = 150;
          
          if (distance < maxDistance) {
            ctx.beginPath();
            ctx.strokeStyle = `rgba(255, 255, 255, ${0.2 * (1 - distance / maxDistance)})`;
            ctx.lineWidth = 0.5;
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.stroke();
          }
        });
      });
    };
    
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);
    animate();
    
    return () => {
      window.removeEventListener('resize', resizeCanvas);
    };
  }, [particleColor, particleSize, count, speed]);
  
  return (
    <canvas
      ref={canvasRef}
      className={`absolute inset-0 z-0 ${className}`}
    />
  );
};

export default ParticleBackground;
