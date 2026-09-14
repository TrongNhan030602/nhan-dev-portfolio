"use client";

import { useEffect, useRef } from "react";

export function CustomCursor(): React.JSX.Element {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const finePointer = window.matchMedia("(pointer: fine)");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

    if (!finePointer.matches || reduceMotion.matches) {
      return;
    }

    let frameId = 0;
    let pointerX = -100;
    let pointerY = -100;
    let ringX = -100;
    let ringY = -100;

    const render = (): void => {
      ringX += (pointerX - ringX) * 0.16;
      ringY += (pointerY - ringY) * 0.16;

      if (dotRef.current) {
        dotRef.current.style.transform = `translate3d(${pointerX}px, ${pointerY}px, 0) translate(-50%, -50%)`;
      }

      if (ringRef.current) {
        ringRef.current.style.transform = `translate3d(${ringX}px, ${ringY}px, 0) translate(-50%, -50%)`;
      }

      frameId = window.requestAnimationFrame(render);
    };

    const handlePointerMove = (event: globalThis.PointerEvent): void => {
      pointerX = event.clientX;
      pointerY = event.clientY;

      if (dotRef.current) dotRef.current.style.opacity = "1";
      if (ringRef.current) ringRef.current.style.opacity = "1";
    };

    const handlePointerOver = (event: globalThis.PointerEvent): void => {
      const target = event.target;
      const isInteractive =
        target instanceof Element &&
        Boolean(
          target.closest(
            "a, button, input, textarea, select, [data-cursor-interactive]",
          ),
        );

      document.documentElement.dataset.cursor = isInteractive
        ? "interactive"
        : "default";
    };

    const handlePointerLeave = (): void => {
      if (dotRef.current) dotRef.current.style.opacity = "0";
      if (ringRef.current) ringRef.current.style.opacity = "0";
    };

    window.addEventListener("pointermove", handlePointerMove, { passive: true });
    window.addEventListener("pointerover", handlePointerOver, { passive: true });
    document.documentElement.addEventListener("mouseleave", handlePointerLeave);
    frameId = window.requestAnimationFrame(render);

    return () => {
      window.cancelAnimationFrame(frameId);
      window.removeEventListener("pointermove", handlePointerMove);
      window.removeEventListener("pointerover", handlePointerOver);
      document.documentElement.removeEventListener("mouseleave", handlePointerLeave);
      delete document.documentElement.dataset.cursor;
    };
  }, []);

  return (
    <>
      <div ref={ringRef} className="custom-cursor-ring" aria-hidden="true" />
      <div ref={dotRef} className="custom-cursor-dot" aria-hidden="true" />
    </>
  );
}
