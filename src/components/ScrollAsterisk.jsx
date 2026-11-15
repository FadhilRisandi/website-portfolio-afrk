"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import asteriskIcon from "@/images/Asterisk-Fill--Streamline-Outlined-Fill-Material-Symbols.svg";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function ScrollAsterisk({ triggerRef, rotation = 540, className = "" }) {
  const iconRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.to(iconRef.current, {
          rotation,
          transformOrigin: "50% 50%",
          ease: "none",
          scrollTrigger: {
            trigger: triggerRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
      return () => motion.revert();
    },
    { scope: iconRef }
  );

  return <Image ref={iconRef} src={asteriskIcon} alt="" aria-hidden="true" width={100} height={100} className={className} />;
}
