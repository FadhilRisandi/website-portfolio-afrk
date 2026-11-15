"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollProgress() {
  const progressRef = useRef(null);

  useGSAP(
    () => {
      gsap.to(progressRef.current, {
        scaleX: 1,
        ease: "none",
        scrollTrigger: {
          trigger: document.documentElement,
          start: "top top",
          end: "bottom bottom",
          scrub: true,
        },
      });
    },
    { scope: progressRef }
  );

  return <div ref={progressRef} aria-hidden="true" className="fixed left-0 top-0 z-[60] h-[3px] w-full origin-left scale-x-0 bg-[#d8ff3e] shadow-[0_0_12px_rgba(216,255,62,0.6)]" />;
}
