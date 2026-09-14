"use client";

import { useEffect } from "react";

export function ScrollEffects(): React.JSX.Element {
  useEffect(() => {
    let cancelled = false;
    let cleanup: (() => void) | undefined;

    void Promise.all([import("gsap"), import("gsap/ScrollTrigger")]).then(
      ([gsapModule, scrollTriggerModule]) => {
        if (cancelled) {
          return;
        }

        const gsap = gsapModule.gsap;
        const ScrollTrigger = scrollTriggerModule.ScrollTrigger;
        gsap.registerPlugin(ScrollTrigger);

        const media = gsap.matchMedia();
        media.add("(prefers-reduced-motion: no-preference)", () => {
          gsap.to("[data-scroll-progress]", {
            scaleX: 1,
            ease: "none",
            scrollTrigger: {
              start: 0,
              end: "max",
              scrub: 0.25,
            },
          });

          gsap.utils.toArray<HTMLElement>("[data-parallax]").forEach((item) => {
            gsap.fromTo(
              item,
              { yPercent: -7 },
              {
                yPercent: 7,
                ease: "none",
                scrollTrigger: {
                  trigger: item.parentElement ?? item,
                  start: "top bottom",
                  end: "bottom top",
                  scrub: 1,
                },
              },
            );
          });
        });

        cleanup = () => media.revert();
      },
    );

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, []);

  return (
    <div
      data-scroll-progress
      className="fixed inset-x-0 top-0 z-[70] h-0.5 origin-left scale-x-0 bg-gradient-to-r from-accent-cyan via-accent-violet to-accent-emerald"
      aria-hidden="true"
    />
  );
}
