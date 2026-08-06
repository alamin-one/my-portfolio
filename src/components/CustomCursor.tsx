'use client';

import { useEffect, useRef } from 'react';

const TRAIL_LENGTH = 12;

export default function CustomCursor() {
  const dotsRef = useRef<(HTMLDivElement | null)[]>([]);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ring = ringRef.current;

    let mouseX = 0;
    let mouseY = 0;

    let ringX = 0;
    let ringY = 0;

    const positions = Array.from({ length: TRAIL_LENGTH }, () => ({
      x: 0,
      y: 0,
    }));

    const handleMouseMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    window.addEventListener('mousemove', handleMouseMove);

    let rafId: number;
    const animate = () => {
      let targetX = mouseX;
      let targetY = mouseY;

      positions.forEach((pos, i) => {
        pos.x += (targetX - pos.x) * 0.35;
        pos.y += (targetY - pos.y) * 0.35;

        const dot = dotsRef.current[i];
        if (dot) {
          dot.style.transform = `translate(-50%, -50%) translate(${pos.x}px, ${pos.y}px)`;
        }

        targetX = pos.x;
        targetY = pos.y;
      });

      if (ring) {
        ringX += (mouseX - ringX) * 0.15;
        ringY += (mouseY - ringY) * 0.15;
        ring.style.transform = `translate(-50%, -50%) translate(${ringX}px, ${ringY}px)`;
      }

      rafId = requestAnimationFrame(animate);
    };
    animate();

    const handleMouseLeave = () => {
      dotsRef.current.forEach(dot => {
        if (dot) dot.style.opacity = '0';
      });
      if (ring) ring.style.opacity = '0';
    };
    const handleMouseEnter = () => {
      dotsRef.current.forEach((dot, i) => {
        if (dot) dot.style.opacity = `${1 - i / TRAIL_LENGTH}`;
      });
      if (ring) ring.style.opacity = '1';
    };
    document.addEventListener('mouseleave', handleMouseLeave);
    document.addEventListener('mouseenter', handleMouseEnter);

    const interactiveSelector =
      "a, button, [role='button'], input, textarea, select, label, [data-cursor='pointer']";

    const handleOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        dotsRef.current.forEach(dot => {
          if (dot) dot.style.backgroundColor = 'var(--title-secondary)';
        });
        if (ring) {
          ring.style.width = '60px';
          ring.style.height = '60px';
          ring.style.borderColor = 'var(--title-secondary)';
          ring.style.opacity = '1';
        }
      }
    };

    const handleOut = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest(interactiveSelector)) {
        dotsRef.current.forEach(dot => {
          if (dot) dot.style.backgroundColor = 'var(--title-secondary)';
        });
        if (ring) {
          ring.style.width = '40px';
          ring.style.height = '40px';
          ring.style.borderColor = 'var(--title)';
          ring.style.opacity = '1';
        }
      }
    };

    document.addEventListener('mouseover', handleOver);
    document.addEventListener('mouseout', handleOut);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      document.removeEventListener('mouseenter', handleMouseEnter);
      document.removeEventListener('mouseover', handleOver);
      document.removeEventListener('mouseout', handleOut);
      cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      {Array.from({ length: TRAIL_LENGTH }).map((_, i) => {
        const size = 10 - (i * 8) / TRAIL_LENGTH;
        return (
          <div
            key={i}
            ref={el => {
              dotsRef.current[i] = el;
            }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: `${size}px`,
              height: `${size}px`,
              borderRadius: '50%',
              backgroundColor: 'var(--title)',
              pointerEvents: 'none',
              zIndex: 9999 - i,
              opacity: 1 - i / TRAIL_LENGTH,
              transition: 'background-color 0.2s ease',
            }}
          />
        );
      })}

      <div
        ref={ringRef}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '45px',
          height: '45px',
          borderRadius: '50%',
          border: '1px solid var(--title)',
          pointerEvents: 'none',
          zIndex: 9999,
          transition:
            'opacity 0.2s ease, width 0.2s ease, height 0.2s ease, border-color 0.2s ease',
        }}
      />
    </>
  );
}
