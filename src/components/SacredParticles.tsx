'use client';

import React, { useEffect, useRef } from 'react';
import { useDevotional } from '@/context/DevotionalContext';

export default function SacredParticles() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const { activeDeity } = useDevotional();
  const themeRef = useRef(activeDeity.theme);

  useEffect(() => {
    themeRef.current = activeDeity.theme;
  }, [activeDeity]);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);
    let mouseX = 0;

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX / window.innerWidth - 0.5;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove);

    interface Particle {
      x: number;
      y: number;
      radius: number;
      alpha: number;
      speedY: number;
      speedX: number;
      pulseSpeed: number;
      angle: number;
      isSecondary: boolean;
    }

    const maxParticles = 55;
    const particles: Particle[] = [];

    const createParticle = (randomY = false): Particle => ({
      x: Math.random() * width,
      y: randomY ? Math.random() * height : height + 15,
      radius: Math.random() * 2.4 + 0.8,
      alpha: Math.random() * 0.65 + 0.2,
      speedY: Math.random() * 0.65 + 0.25,
      speedX: (Math.random() - 0.5) * 0.35,
      pulseSpeed: Math.random() * 0.02 + 0.01,
      angle: Math.random() * Math.PI * 2,
      isSecondary: Math.random() > 0.65,
    });

    for (let i = 0; i < maxParticles; i++) {
      particles.push(createParticle(true));
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height);
      const { particleHue, particleSecondaryHue } = themeRef.current;

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.y -= p.speedY;
        p.x += p.speedX + mouseX * 0.3;
        p.angle += p.pulseSpeed;

        const currentAlpha = p.alpha * (0.6 + 0.4 * Math.sin(p.angle));
        const hue = p.isSecondary ? particleSecondaryHue : particleHue;

        const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.radius * 3.5);
        grad.addColorStop(0, `hsla(${hue}, 95%, 70%, ${currentAlpha})`);
        grad.addColorStop(0.5, `hsla(${hue}, 90%, 55%, ${currentAlpha * 0.5})`);
        grad.addColorStop(1, `hsla(${hue}, 85%, 50%, 0)`);

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius * 3.5, 0, Math.PI * 2);
        ctx.fill();

        if (p.y < -25 || p.x < -25 || p.x > width + 25) {
          particles[i] = createParticle(false);
        }
      }

      animId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animId);
    };
  }, []);

  return <canvas ref={canvasRef} id="sacredCanvas" className="sacred-canvas" />;
}
