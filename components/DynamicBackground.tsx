"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Navbar } from "@/components/navbar";

interface ZombieParticle {
  id: number;
  x: number;
  y: number;
  scale: number;
  speed: number;
  opacity: number;
  type: 'blood' | 'fog' | 'ash';
}

export default function DynamicBackground({ children }: { children: React.ReactNode }) {
  const ref = useRef(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [particles, setParticles] = useState<ZombieParticle[]>([]);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"]
  });

  // Zombie-themed gradient
  const gradient1 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(20, 20, 20, 0.9)', 'rgba(30, 30, 30, 0.9)', 'rgba(40, 40, 40, 0.9)']
  );

  const gradient2 = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    ['rgba(10, 10, 10, 0.95)', 'rgba(20, 20, 20, 0.95)', 'rgba(30, 30, 30, 0.95)']
  );

  // Generate zombie-themed particles
  useEffect(() => {
    const generateParticles = () => {
      const particleTypes: ZombieParticle['type'][] = ['blood', 'fog', 'ash'];
      const newParticles: ZombieParticle[] = Array.from({ length: 150 }, (_, index) => ({
        id: index,
        x: Math.random() * 100,
        y: Math.random() * 100,
        scale: Math.random() * 0.5 + 0.3,
        speed: Math.random() * 5 + 2,
        opacity: Math.random() * 0.4 + 0.1,
        type: particleTypes[Math.floor(Math.random() * particleTypes.length)]
      }));
      setParticles(newParticles);
    };

    generateParticles();
  }, []);

  // Particle movement and regeneration
  useEffect(() => {
    const animateParticles = () => {
      setParticles(prevParticles => 
        prevParticles.map(particle => {
          // Move particles downward with slight horizontal drift
          let newY = particle.y + particle.speed * 0.1;
          let newX = particle.x + (Math.random() - 0.5) * 0.5;

          // Reset particle if it goes off screen
          if (newY > 110) {
            newY = -10;
            newX = Math.random() * 100;
          }

          return {
            ...particle,
            x: newX,
            y: newY
          };
        })
      );
    };

    const animationFrame = requestAnimationFrame(animateParticles);
    return () => cancelAnimationFrame(animationFrame);
  }, []);

  // Particle styles based on type
  const getParticleStyle = (particle: ZombieParticle) => {
    switch (particle.type) {
      case 'blood':
        return {
          backgroundColor: `rgba(139, 0, 0, ${particle.opacity})`,
          filter: 'blur(1px)',
          borderRadius: '50%'
        };
      case 'fog':
        return {
          backgroundColor: `rgba(200, 200, 200, ${particle.opacity * 0.5})`,
          filter: 'blur(2px)',
          borderRadius: '0'
        };
      case 'ash':
        return {
          backgroundColor: `rgba(100, 100, 100, ${particle.opacity})`,
          filter: 'blur(1px)',
          borderRadius: '0'
        };
    }
  };

  return (
    <div ref={ref} className="relative min-h-screen overflow-hidden">
      {/* Background Gradient */}
      <motion.div 
        className="fixed inset-0 z-0"
        style={{
          background: `
            radial-gradient(
              800px circle at 50% 50%, 
              rgba(139, 0, 0, 0.1), 
              transparent 70%
            ),
            linear-gradient(135deg, ${gradient1.get()}, ${gradient2.get()})
          `,
          backgroundBlendMode: 'overlay',
          opacity: 0.9
        }}
      />

      {/* Zombie-Themed Particles */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {particles.map((particle) => (
          <motion.div
            key={particle.id}
            style={{
              position: 'absolute',
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.scale * 3}px`,
              height: `${particle.scale * 3}px`,
              ...getParticleStyle(particle)
            }}
          />
        ))}
      </div>

      {/* Navbar and Content */}
      <Navbar />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
}