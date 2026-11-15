"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollAsterisk from "@/components/ScrollAsterisk";

gsap.registerPlugin(useGSAP, ScrollTrigger);

export default function WorkExperience() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".experience-reveal", {
          y: 28,
          opacity: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });
      });
      return () => motion.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="experience" ref={sectionRef} className="relative isolate overflow-hidden px-6 py-20 sm:px-10 lg:px-16 lg:py-28">
      <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute right-8 top-16 z-0 h-12 w-12 opacity-20 brightness-0 invert sm:right-16 sm:h-16 sm:w-16" />
      <ScrollAsterisk triggerRef={sectionRef} rotation={-540} className="pointer-events-none absolute bottom-8 left-8 z-0 h-8 w-8 opacity-25 brightness-0 invert sm:left-16 sm:h-10 sm:w-10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xm font-bold uppercase tracking-[0.2em] text-[#d8ff3e]">03. Pengalaman Kerja</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Fadhil<br className="sm:hidden" /> <span className="text-white/60">kerja di...</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-white/50">Dari ngatur operasional sampai membina tim—semuanya ngajarin cara kolaborasi dan eksekusi yang rapi.</p>
        </div>

        <div className="mx-auto grid max-w-7xl gap-4 md:grid-cols-2">
          <article className="experience-reveal relative overflow-hidden rounded-4xl border border-white/10 bg-[#191919] p-7 sm:p-9">
            <div className="flex flex-wrap items-center justify-between gap-4">
              <span className="rounded-full border border-white/10 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-white/50">Pengalaman operasional</span>
              <span className="text-sm font-black text-[#d8ff3e]">Oct 2025 - present</span>
            </div>
            <h3 className="mt-12 text-3xl font-black tracking-tight sm:text-4xl">Manajemen Operasional</h3>
            <p className="mt-2 text-sm font-semibold text-white/65">Usee Florist</p>
            <p className="mt-5 max-w-xl text-sm leading-7 text-white/50">Pengalaman ini mengasah pemahamanku tentang koordinasi dan kerja kolaboratif dalam mendukung kegiatan operasional.</p>
            <span aria-hidden="true" className="absolute -bottom-10 -right-2 rotate-12 text-8xl font-black text-white/[0.035]">TEAM</span>
          </article>

          <article className="experience-reveal flex flex-col justify-between rounded-4xl bg-[#d8ff3e] p-7 text-[#101010] sm:p-9">
            <div className="flex items-center justify-between gap-4">
              <span className="rounded-full border border-black/15 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-black/60">Pengalaman mengajar</span>
              <span className="text-sm font-black  text-black/65">Jul 2025 - Jul 2026</span>
            </div>
            <div className="mt-12">
              <h3 className="text-3xl font-black tracking-tight sm:text-4xl">Pembina Organisasi BSMR</h3>
              <p className="mt-2 text-sm font-semibold text-black/65">Bulan Sabit Merah Remaja</p>
              <p className="mt-5 max-w-xl text-sm leading-7 text-black/65">Merencanakan, membimbing, dan mengevaluasi kegiatan organisasi untuk mengembangkan keterampilan siswa.</p>
              <span aria-hidden="true" className="absolute -top-10 -right-2 rotate-12 text-8xl font-black text-black/5">TEAM</span>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
}
