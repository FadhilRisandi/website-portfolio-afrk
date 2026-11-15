"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollAsterisk from "@/components/ScrollAsterisk";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const skills = [
  "React", "Tailwind CSS", "Microsoft Office", "JavaScript", "HTML & CSS",
  "Adaptability", "UI/UX Design", "Figma", "Python", "Tableau",
];

export default function AboutMe() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".about-me-reveal", {
          y: 30,
          opacity: 0,
          duration: 0.7,
          stagger: 0.1,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 76%" },
        });
      });
      return () => motion.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="about" ref={sectionRef} className="relative isolate px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute right-8 top-12 z-0 h-12 w-12 opacity-20 brightness-0 invert sm:right-16 sm:h-16 sm:w-16" />
      <ScrollAsterisk triggerRef={sectionRef} rotation={-540} className="pointer-events-none absolute bottom-8 left-8 z-0 h-8 w-8 opacity-25 brightness-0 invert sm:left-16 sm:h-10 sm:w-10" />
      <div className="relative z-10 mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.8fr_1.2fr] lg:gap-20">
        <div className="about-me-reveal">
          <p className="mb-3 text-xm font-bold uppercase tracking-[0.2em] text-[#d8ff3e]">01. Tak Kenal Maka Tak Sayang</p>
          <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Kalian dapat memanggilku,<br /><span className="text-[#d8ff3e]">Fadhil,</span></h2>
          <p className="mt-5 max-w-sm text-sl leading-6 text-white/50">Sikki, Risandi, dan Andi itu nama-nama yang sering dipakai.</p>
        </div>
        <div className="about-me-reveal">
          <p className="text-lg leading-8 text-white/75 sm:text-xl">
            Aku berusia 23 tahun saat ini. Lulusan Universitas Hasanuddin tahun lalu, yang kadang masih suka berantem sama CSS. Di luar urusan ngoding, aku suka nonton film, latihan Taekwondo, dan main Mobile Legends (FYI sudah IMO). Aku mau gabung sebagai Front-end Developer di Cretivox Internship Experience.
          </p>
          <div className="mt-8 border-t border-white/10 pt-6">
            <p className="mb-4 text-xs font-bold uppercase tracking-[0.16em] text-white/40">Tools &amp; skills yang bisa kupakai</p>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill) => (
                <span key={skill} className="rounded-full border border-white/10 px-3 py-1.5 text-xs text-white/65">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
