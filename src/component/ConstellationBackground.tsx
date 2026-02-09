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
      vx: number; vy: number;
      density: number;
      radius: number; 

      constructor(x: number, y: number) {
        this.x = x; this.y = y;
        this.vx = (Math.random() - 0.5) * 0.6;
        this.vy = (Math.random() - 0.5) * 0.6;
        this.density = (Math.random() * 20) + 1;
        this.radius = Math.random() * 3 + 1;
      }


      update(width: number, height: number) {
        this.x += this.vx;
        this.y += this.vy;

        if (this.x > width + 5) this.x = -5;
        else if (this.x < -5) this.x = width + 5;

        if (this.y > height + 5) this.y = -5;
        else if (this.y < -5) this.y = height + 5;

        let dx = mouse.x - this.x;
        let dy = mouse.y - this.y;
        let distance = Math.sqrt(dx * dx + dy * dy);

        if (distance < mouse.radius) {
          const force = (mouse.radius - distance) / mouse.radius;
          const directionX = (dx / distance) * force * (this.density * 0.5);
          const directionY = (dy / distance) * force * (this.density * 0.5);
          this.x -= directionX;
          this.y -= directionY;
        }
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = 'rgba(255, 255, 255, 0.6)';
        ctx.beginPath();
        ctx.arc(this.x, this.y, 2.5, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    const init = () => {
      particles = [];
      const quantity = (canvas.width * canvas.height) / 12000;
      for (let i = 0; i < quantity; i++) {
        particles.push(new Particle(Math.random() * canvas.width, Math.random() * canvas.height));
      }
    };

    const connect = () => {
      for (let a = 0; a < particles.length; a++) {
        for (let b = a; b < particles.length; b++) {
          let dx = particles[a].x - particles[b].x;
          let dy = particles[a].y - particles[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);

          if (distance < 200) {
            const opacity = 1 - (distance / 200); // Update this to match the new distance
            ctx.strokeStyle = `rgba(147, 197, 253, ${opacity * 0.2})`; // Slightly increased opacity
            ctx.lineWidth = 0.8;
            ctx.beginPath();
            ctx.moveTo(particles[a].x, particles[a].y);
            ctx.lineTo(particles[b].x, particles[b].y);
            ctx.stroke();
          }
        }
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      particles.forEach(p => {
        p.update(canvas.width, canvas.height);
        p.draw();
      });
      connect();
      requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = canvas.getBoundingClientRect();
      mouse.x = e.clientX - rect.left;
      mouse.y = e.clientY - rect.top;
    };

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      init();
    };

    window.addEventListener('mousemove', handleMouseMove);
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