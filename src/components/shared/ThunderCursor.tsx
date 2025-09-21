"use client";

import React, { useEffect, useRef } from 'react';
import { useTheme } from 'next-themes';

export function ThunderCursor() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const { theme } = useTheme();

  useEffect(() => {
    if (theme !== 'dark') {
      return;
    }

    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let bolts: LightningBolt[] = [];
    let canCreateBolt = true;
    let lastMousePos: { x: number, y: number } | null = null;
    let animationFrameId: number;

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    class LightningBolt {
      startX: number;
      startY: number;
      endX: number;
      endY: number;
      segments: { x: number, y: number }[] = [];
      alpha = 1.0;
      branches: LightningBranch[] = [];

      constructor(x1: number, y1: number, x2: number, y2: number) {
        this.startX = x1;
        this.startY = y1;
        this.endX = x2;
        this.endY = y2;
        this.createPath();
      }

      createPath() {
        const dx = this.endX - this.startX;
        const dy = this.endY - this.startY;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const angle = Math.atan2(dy, dx);
        this.segments.push({ x: this.startX, y: this.startY });
        let currentPos = { x: this.startX, y: this.startY };
        const segmentCount = Math.max(8, distance / 10);
        for (let i = 1; i < segmentCount; i++) {
          const progress = i / segmentCount;
          const linearX = this.startX + dx * progress;
          const linearY = this.startY + dy * progress;
          const offset = (Math.random() - 0.5) * distance * 0.15;
          const offsetX = Math.cos(angle + Math.PI / 2) * offset;
          const offsetY = Math.sin(angle + Math.PI / 2) * offset;
          currentPos = { x: linearX + offsetX, y: linearY + offsetY };
          this.segments.push(currentPos);
          if (Math.random() < 0.25) {
            this.branches.push(new LightningBranch(currentPos.x, currentPos.y, 0.7));
          }
        }
        this.segments.push({ x: this.endX, y: this.endY });
      }

      update() {
        this.alpha -= 0.02;
        this.branches.forEach(branch => branch.update());
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = '#FFFF99';
        ctx.lineWidth = 4;
        ctx.shadowColor = '#FFD700';
        ctx.shadowBlur = 30;
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        ctx.stroke();
        ctx.strokeStyle = '#FFFFFF';
        ctx.lineWidth = 1.5;
        ctx.shadowBlur = 10;
        ctx.stroke();
        ctx.restore();
        this.branches.forEach(branch => branch.draw());
      }
    }

    class LightningBranch {
      startX: number;
      startY: number;
      segments: { x: number, y: number }[] = [];
      alpha: number;
      maxLength: number;

      constructor(x: number, y: number, initialAlpha: number) {
        this.startX = x;
        this.startY = y;
        this.segments = [{ x: x, y: y }];
        this.alpha = initialAlpha;
        this.maxLength = Math.random() * 15 + 10;
        let currentPoint = { x: x, y: y };
        for (let i = 0; i < this.maxLength; i++) {
          const angle = Math.random() * Math.PI * 2;
          const length = Math.random() * 3 + 1;
          const nextPoint = {
            x: currentPoint.x + Math.cos(angle) * length,
            y: currentPoint.y + Math.sin(angle) * length
          };
          this.segments.push(nextPoint);
          currentPoint = nextPoint;
        }
      }

      update() {
        this.alpha -= 0.04;
      }

      draw() {
        if (!ctx) return;
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.strokeStyle = '#FFD700';
        ctx.lineWidth = 1;
        ctx.shadowColor = '#FFFF00';
        ctx.shadowBlur = 10;
        ctx.beginPath();
        ctx.moveTo(this.segments[0].x, this.segments[0].y);
        for (let i = 1; i < this.segments.length; i++) {
          ctx.lineTo(this.segments[i].x, this.segments[i].y);
        }
        ctx.stroke();
        ctx.restore();
      }
    }
    
    const handleMouseMove = (e: MouseEvent) => {
      if (lastMousePos && canCreateBolt) {
        bolts.push(new LightningBolt(lastMousePos.x, lastMousePos.y, e.clientX, e.clientY));
        canCreateBolt = false;
        setTimeout(() => canCreateBolt = true, 30);
      }
      lastMousePos = { x: e.clientX, y: e.clientY };
    };

    window.addEventListener('mousemove', handleMouseMove);

    function animate() {
      if (!ctx) return;
      ctx.fillStyle = 'rgba(12, 10, 26, 0.25)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      for (let i = bolts.length - 1; i >= 0; i--) {
        const bolt = bolts[i];
        bolt.update();
        bolt.draw();
        if (bolt.alpha <= 0) {
          bolts.splice(i, 1);
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    }
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      cancelAnimationFrame(animationFrameId);
    };
  }, [theme]);

  if (theme !== 'dark') {
    return null;
  }

  return (
    <canvas id="thunder-canvas" ref={canvasRef}></canvas>
  );
}