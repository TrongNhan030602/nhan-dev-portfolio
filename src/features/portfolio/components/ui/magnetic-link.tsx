"use client";

import { useRef, type PointerEvent, type ReactNode } from "react";

import { cn } from "@/lib/utils";

interface MagneticLinkProps {
  href: string;
  children: ReactNode;
  className?: string;
  target?: "_blank";
  rel?: string;
  download?: string;
  ariaLabel?: string;
}

export function MagneticLink({
  href,
  children,
  className,
  target,
  rel,
  download,
  ariaLabel,
}: MagneticLinkProps): React.JSX.Element {
  const linkRef = useRef<HTMLAnchorElement>(null);

  function handlePointerMove(event: PointerEvent<HTMLAnchorElement>): void {
    if (
      !linkRef.current ||
      event.pointerType === "touch" ||
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      return;
    }

    const bounds = linkRef.current.getBoundingClientRect();
    const x = (event.clientX - bounds.left - bounds.width / 2) * 0.14;
    const y = (event.clientY - bounds.top - bounds.height / 2) * 0.14;
    linkRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
  }

  function resetPosition(): void {
    if (linkRef.current) {
      linkRef.current.style.transform = "translate3d(0, 0, 0)";
    }
  }

  return (
    <a
      ref={linkRef}
      href={href}
      target={target}
      rel={rel}
      download={download}
      aria-label={ariaLabel}
      onPointerMove={handlePointerMove}
      onPointerLeave={resetPosition}
      data-cursor-interactive
      className={cn(
        "will-change-transform transition-[transform,background-color,border-color,color,box-shadow] duration-300",
        className,
      )}
    >
      {children}
    </a>
  );
}
