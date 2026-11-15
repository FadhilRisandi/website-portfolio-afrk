"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import fadhilPhoto from "@/images/foto-fadhil-hero.png";
import arrowDownIcon from "@/images/arrow-down.svg";
import windmillIcon from "@/images/paper_pinwheel_gradient.svg";
import ScrollAsterisk from "@/components/ScrollAsterisk";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function Hero() {
  const heroRef = useRef(null);
  const windmillRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();

      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".hero-reveal", {
          y: 38,
          opacity: 0,
          duration: 0.85,
          stagger: 0.12,
          ease: "power3.out",
        });

        gsap.to(".hero-orbit", {
          yPercent: 18,
          rotate: 12,
          ease: "none",
          scrollTrigger: {
            trigger: heroRef.current,
            start: "top top",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      motion.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
        const timeline = gsap.timeline({
          scrollTrigger: {
            scrub: 1,
            pin: windmillRef.current,
            trigger: heroRef.current,
            start: "50% 50%",
            endTrigger: heroRef.current,
            end: "bottom 50%",
          },
        });

        timeline.to(windmillRef.current.querySelector("img"), {
          rotation: 900,
          transformOrigin: "50% 50%",
          ease: "none",
        });
      });

      return () => motion.revert();
    },
    { scope: heroRef }
  );

  return (
    <section
      ref={heroRef}
      id="home"
      aria-labelledby="hero-title"
      className="relative isolate flex min-h-[92svh] items-center px-6 pb-16 pt-32 sm:px-10 lg:px-16"
    >
      <ScrollAsterisk triggerRef={heroRef} rotation={540} className="pointer-events-none absolute right-8 top-24 z-0 h-10 w-10 opacity-30 brightness-0 invert sm:right-16 sm:h-14 sm:w-14" />
      <ScrollAsterisk triggerRef={heroRef} rotation={-540} className="pointer-events-none absolute bottom-16 left-[48%] z-0 h-8 w-8 opacity-20 brightness-0 invert sm:h-10 sm:w-10" />
      <div
        aria-hidden="true"
        className="hero-orbit pointer-events-none absolute -right-24 top-28 h-72 w-72 rounded-full border border-[#d8ff3e]/15 sm:-right-12 sm:top-32 sm:h-120 sm:w-120"
      >
        <div className="absolute inset-8 rounded-full border border-[#d8ff3e]/10" />
        <div className="absolute right-10 top-14 h-4 w-4 rounded-full bg-[#ff6747] shadow-[0_0_36px_12px_rgba(255,103,71,0.22)]" />
      </div>
      <div
        aria-hidden="true"
        className="pointer-events-none absolute right-16 top-1/3 h-56 w-56 rounded-full bg-[#d8ff3e]/10 blur-[90px]"
      />
      <div ref={windmillRef} className="hero-windmill pointer-events-none absolute right-[31%] top-[42%] z-30 hidden h-20 w-20 lg:block" aria-hidden="true">
        <Image src={windmillIcon} alt="" width={100} height={100} className="h-full w-full drop-shadow-[0_12px_24px_rgba(0,0,0,0.3)]" />
      </div>
      <div className="relative z-10 mx-auto grid w-full max-w-7xl gap-12 lg:grid-cols-[1.4fr_0.6fr] lg:items-end">
        <div>
          <p className="hero-reveal mb-7 inline-flex items-center gap-2 rounded-full border border-white/15 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.19em] text-white/70">
            <span className="h-2 w-2 rounded-full bg-[#d8ff3e] shadow-[0_0_12px_#d8ff3e]" />
            Front-End Developer <span className="text-white/30">/</span> UI/UX
          </p>

          <h1
            id="hero-title"
            className="max-w-5xl text-[clamp(3.7rem,12vw,9.5rem)] font-black leading-[0.82] tracking-[-0.085em]"
          >
            <span className="hero-reveal block">Haii</span>
            <span className="hero-reveal block text-[#d8ff3e]">
              Cretivox<span className="text-[#f2f0e9]">.</span>
            </span>
          </h1>

          <div className="hero-reveal mt-8 flex flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
            <p className="max-w-md text-base leading-7 text-white/60 sm:text-lg">
              Kenalin, aku <strong className="font-semibold text-white">Fadhil</strong> Sarjana Sistem Informasi yang sangat ingin join ke cretivox.
            </p>
            <a
              href="#projects"
              className="group inline-flex w-fit items-center gap-3 rounded-full bg-[#d8ff3e] px-6 py-3.5 font-bold text-[#101010] transition-transform hover:-translate-y-1"
            >
              Lihat karya
              <Image
                src={arrowDownIcon}
                alt=""
                width={18}
                height={18}
                className="brightness-0 group-hover:animate-[arrow-wiggle_0.55s_ease-in-out_infinite]"
              />
            </a>
          </div>
        </div>

        <div className="hero-reveal relative mx-auto flex min-h-100ull max-w-88s-end justify-center lg:min-h-136">
          <div aria-hidden="true" className="absolute bottom-0 h-[78%] w-[82%] rounded-t-[11rem] bg-[#d8ff3e]" />
          <div aria-hidden="true" className="absolute bottom-8 right-0 z-20 rotate-6 rounded-full bg-[#ff6747] px-4 py-2 text-[10px] font-black uppercase tracking-[0.15em] text-[#101010] shadow-lg">
            Makassar, ID
          </div>
          <Image
            src={fadhilPhoto}
            alt="Fadhil sedang bermain Mobile Legends"
            priority
            sizes="(max-width: 1024px) 80vw, 360px"
            className="relative z-10 h-100 w-auto object-contain object-bottom lg:h-136"
          />
          <a
            href="#about"
            className="absolute -bottom-6 left-0 z-20 flex h-12 w-12 animate-bounce items-center justify-center rounded-full border border-white/20 bg-[#101010] text-xl text-[#d8ff3e]"
            aria-label="Gulir ke bagian tentang saya"
          >
            <Image src={arrowDownIcon} alt="" width={20} height={20} />
          </a>
        </div>
      </div>
    </section>
  );
}
