import React, { useRef, useEffect } from 'react';

export const ConstellationBackground: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let particles: Particle[] = [];
    const mouse = { x: 0, y: 0, radius: 150 };

    class Particle {
      x: number; y: number;
      baseX: number; baseY: number;
      vx: number; vy: number;
      density: number;

      constructor(x: number, y: number) {
        this.x = x; this.y = y;
        this.baseX = x; this.baseY = y;
        // Subtle random drift
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.density = (Math.random() * 20) + 1;
      }

      update() {
        // 1. Move the particle slightly over time
        this.x += this.vx;
        this.y += this.vy;

        // 2. Interaction Logic (Repulsion)
        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * this.density;
          const directionY = (dy / distance) * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const quantity = (canvas.width * canvas.height) / 9000;
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update();
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 120) {
            const opacity = 1 - (distance / 120);
            // COLOR: Subtle Blue/White lines
            // Use 'rgba(255, 255, 255, ...)' for pure white or the one below for a "tech" blue
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.2})`;
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (!canvasRef.current) return;
      const rect = canvasRef.current.getBoundingClientRect();

      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    window.addEventListener('mousemove', handleMouseMove);
    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };
    window.addEventListener('resize', handleResize);

    handleResize();
    animate();
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return <canvas ref={canvasRef} className="absolute inset-0 pointer-events-none z-0" />;
};