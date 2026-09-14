"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  velocityX: number;
  velocityY: number;
  radius: number;
}

interface PointerPosition {
  x: number;
  y: number;
  active: boolean;
}

const MAX_PARTICLES = 58;
const CONNECTION_DISTANCE = 118;

export function ParticleCanvas(): React.JSX.Element {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;

    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d");

    if (isContextUnavailable(context)) {
      return;
    }

    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");
    const pointer: PointerPosition = { x: 0, y: 0, active: false };
    const particles: Particle[] = [];
    let width = 0;
    let height = 0;
    let frameId = 0;
    let accentColor = "#22dff3";

    const updateAccentColor = (): void => {
      accentColor = getComputedStyle(document.documentElement)
        .getPropertyValue("--cyan")
        .trim() || "#22dff3";
    };

    const createParticles = (): void => {
      particles.length = 0;
      const count = Math.min(
        MAX_PARTICLES,
        Math.max(24, Math.floor((width * height) / 25_000)),
      );

      for (let index = 0; index < count; index += 1) {
        particles.push({
          x: Math.random() * width,
          y: Math.random() * height,
          velocityX: (Math.random() - 0.5) * 0.24,
          velocityY: (Math.random() - 0.5) * 0.24,
          radius: 0.7 + Math.random() * 1.2,
        });
      }
    };

    const resize = (): void => {
      const bounds = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);
      width = bounds.width;
      height = bounds.height;
      canvas.width = Math.max(1, Math.round(width * pixelRatio));
      canvas.height = Math.max(1, Math.round(height * pixelRatio));
      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      updateAccentColor();
      createParticles();
    };

    const draw = (): void => {
      context.clearRect(0, 0, width, height);

      for (let index = 0; index < particles.length; index += 1) {
        const particle = particles[index];

        if (!reduceMotion.matches) {
          particle.x += particle.velocityX;
          particle.y += particle.velocityY;

          if (particle.x < 0 || particle.x > width) particle.velocityX *= -1;
          if (particle.y < 0 || particle.y > height) particle.velocityY *= -1;

          if (pointer.active) {
            const pointerDistanceX = pointer.x - particle.x;
            const pointerDistanceY = pointer.y - particle.y;
            const pointerDistance = Math.hypot(pointerDistanceX, pointerDistanceY);

            if (pointerDistance < 140 && pointerDistance > 0) {
              particle.x -= (pointerDistanceX / pointerDistance) * 0.18;
              particle.y -= (pointerDistanceY / pointerDistance) * 0.18;
            }
          }
        }

        context.beginPath();
        context.fillStyle = accentColor;
        context.globalAlpha = 0.55;
        context.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
        context.fill();

        for (let targetIndex = index + 1; targetIndex < particles.length; targetIndex += 1) {
          const target = particles[targetIndex];
          const distance = Math.hypot(
            particle.x - target.x,
            particle.y - target.y,
          );

          if (distance < CONNECTION_DISTANCE) {
            context.beginPath();
            context.strokeStyle = accentColor;
            context.globalAlpha = (1 - distance / CONNECTION_DISTANCE) * 0.13;
            context.lineWidth = 0.65;
            context.moveTo(particle.x, particle.y);
            context.lineTo(target.x, target.y);
            context.stroke();
          }
        }
      }

      context.globalAlpha = 1;

      if (!reduceMotion.matches) {
        frameId = window.requestAnimationFrame(draw);
      }
    };

    const handlePointerMove = (event: PointerEvent): void => {
      const bounds = canvas.getBoundingClientRect();
      pointer.x = event.clientX - bounds.left;
      pointer.y = event.clientY - bounds.top;
      pointer.active =
        pointer.x >= 0 &&
        pointer.x <= bounds.width &&
        pointer.y >= 0 &&
        pointer.y <= bounds.height;
    };

    const handlePointerLeave = (): void => {
      pointer.active = false;
    };

    const handleMotionPreference = (): void => {
      window.cancelAnimationFrame(frameId);
      draw();
    };

    const resizeObserver = new ResizeObserver(() => {
      resize();
      window.cancelAnimationFrame(frameId);
      draw();
    });
    const themeObserver = new MutationObserver(() => {
      updateAccentColor();

      if (reduceMotion.matches) {
        draw();
      }
    });

    resizeObserver.observe(canvas);
    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });
    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("blur", handlePointerLeave);
    reduceMotion.addEventListener("change", handleMotionPreference);
    resize();
    draw();

    return () => {
      window.cancelAnimationFrame(frameId);
      resizeObserver.disconnect();
      themeObserver.disconnect();
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("blur", handlePointerLeave);
      reduceMotion.removeEventListener("change", handleMotionPreference);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 h-full w-full opacity-80"
      aria-hidden="true"
    />
  );
}

function isContextUnavailable(
  context: CanvasRenderingContext2D | null,
): context is null {
  return context === null;
}
