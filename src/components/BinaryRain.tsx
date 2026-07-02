"use client";
import { useEffect, useRef } from "react";
 
export default function BinaryRain() {
  const ref = useRef<HTMLCanvasElement>(null);
 
  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
 
    const FONT = 14;
    let W = 0, H = 0;
    let drops: number[] = [];
    let isWhite: boolean[] = [];
 
    const resize = () => {
      W = canvas.width  = window.innerWidth;
      H = canvas.height = window.innerHeight;
      const cols = Math.floor(W / FONT) + 1;
      drops   = Array.from({ length: cols }, () => Math.floor(Math.random() * -60));
      // Randomly assign each column white or coral — roughly 50/50
      isWhite = Array.from({ length: cols }, () => Math.random() > 0.5);
    };
 
    const draw = () => {
      ctx.fillStyle = "rgba(8,8,8,0.15)";
      ctx.fillRect(0, 0, W, H);
      ctx.font = `${FONT}px 'JetBrains Mono', monospace`;
 
      for (let i = 0; i < drops.length; i++) {
        const y   = drops[i] * FONT;
        const ch  = () => (Math.random() > 0.5 ? "1" : "0");
        const col = isWhite[i];
 
        // Head — brightest
        if (y >= 0 && y < H) {
          ctx.fillStyle = col ? "#ffffff" : "#FF6B6B";
          ctx.fillText(ch(), i * FONT, y);
        }
        // 2nd
        if (y - FONT >= 0 && y - FONT < H) {
          ctx.fillStyle = col ? "rgba(212,212,216,0.88)" : "rgba(255,107,107,0.82)";
          ctx.fillText(ch(), i * FONT, y - FONT);
        }
        // 3rd
        if (y - FONT * 2 >= 0 && y - FONT * 2 < H) {
          ctx.fillStyle = col ? "rgba(212,212,216,0.55)" : "rgba(255,107,107,0.52)";
          ctx.fillText(ch(), i * FONT, y - FONT * 2);
        }
        // 4th
        if (y - FONT * 3 >= 0 && y - FONT * 3 < H) {
          ctx.fillStyle = col ? "rgba(212,212,216,0.28)" : "rgba(255,107,107,0.26)";
          ctx.fillText(ch(), i * FONT, y - FONT * 3);
        }
        // 5th — faint tail
        if (y - FONT * 4 >= 0 && y - FONT * 4 < H) {
          ctx.fillStyle = col ? "rgba(212,212,216,0.10)" : "rgba(255,107,107,0.10)";
          ctx.fillText(ch(), i * FONT, y - FONT * 4);
        }
 
        if (drops[i] * FONT > H && Math.random() > 0.975) drops[i] = 0;
        drops[i]++;
      }
    };
 
    resize();
    window.addEventListener("resize", resize);
    const id = setInterval(draw, 50);
    return () => {
      clearInterval(id);
      window.removeEventListener("resize", resize);
    };
  }, []);
 
  return (
    <canvas
      ref={ref}
      style={{
        position: "fixed", inset: 0, width: "100%", height: "100%",
        opacity: 0.38,
        pointerEvents: "none", zIndex: 0,
      }}
    />
  );
}