"use client";

import { useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollAsterisk from "@/components/ScrollAsterisk";
import ppdbImage from "@/images/UI DESIGN PPDB AL-FITYAN.png";
import aiFrontendImage from "@/images/AI-FRONTEND WEB SERTIFICATION.png";
import notesImage from "@/images/Storyy App.png";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const projects = [
  {
    title: "PPDB Al-Fityan",
    type: "UI/UX Design · Figma",
    description: "Eksplorasi antarmuka sistem penerimaan peserta didik baru yang bersih, terstruktur, dan ramah pengguna.",
    href: "https://www.figma.com/design/4bxMZ8WY2LkWUFKUT4m3i5/PPDB-ALFITYAN?node-id=1307-4108&t=dHgRrcPWUEkF5l1D-0",
    theme: "bg-[#d8ff3e] text-[#101010]",
    image: ppdbImage,
    imageAlt: "Tampilan halaman utama desain PPDB Al-Fityan",
    imageFit: "object-cover object-top",
    linkLabel: "Lihat desain",
  },
  {
    title: "AI Front-End Web",
    type: "IDCamp 2025 Showcase",
    description: "Sertifikat hasil program AI-Front-End Web intensif IDCamp x Dicoding: JavaScript modular, REST API, dan fitur berbasis AI.",
    href: "https://drive.google.com/drive/folders/1FLgqhWbg2C4-HcgbHQ4WhrifaNjS8CI6?usp=sharing",
    theme: "bg-[#ff6747] text-[#101010]",
    image: aiFrontendImage,
    imageAlt: "Tampilan aplikasi AI Front-End Web RootFacts",
    imageFit: "object-contain",
    linkLabel: "Lihat sertifikat",
  },
  {
    title: "Storyyy App",
    type: "Web Components · REST API",
    description: "Aplikasi catatan dinamis dengan Web Components, CSS Grid, dan asynchronous request untuk mengelola data.",
    href: "https://tellstoryy.netlify.app/#/register",
    theme: "bg-[#b9a4ff] text-[#101010]",
    image: notesImage,
    imageAlt: "Tampilan aplikasi web Storyyy dengan daftar cerita dan peta interaktif",
    imageFit: "object-cover object-top",
    linkLabel: "Lihat aplikasi",
  },
];

function ProjectArtwork({ image, imageAlt, imageFit, title }) {
  return (
    <div className="relative aspect-4/3 overflow-hidden rounded-3xl bg-white shadow-xl">
      <Image
        src={image}
        alt={imageAlt}
        fill
        sizes="(max-width: 1024px) 100vw, 33vw"
        className={`transition-transform duration-500 group-hover:scale-105 ${imageFit}`}
      />
      <span className="absolute bottom-3 left-3 rounded-full bg-black/70 px-3 py-1.5 text-[10px] font-semibold text-white backdrop-blur-sm">
        {title}
      </span>
    </div>
  );
}

export default function Projects() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".project-card", {
          y: 42,
          opacity: 0,
          duration: 0.75,
          stagger: 0.15,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%" },
        });
      });
      return () => motion.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="projects" ref={sectionRef} className="relative isolate overflow-hidden bg-[#f2f0e9] px-6 py-24 text-[#101010] sm:px-10 lg:px-16 lg:py-32">
      <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute right-8 top-12 z-0 h-12 w-12 opacity-15 sm:right-16 sm:h-16 sm:w-16" />
      <ScrollAsterisk triggerRef={sectionRef} rotation={-540} className="pointer-events-none absolute bottom-8 left-8 z-0 h-8 w-8 opacity-20 sm:left-16 sm:h-10 sm:w-10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xm font-bold uppercase tracking-[0.2em] text-black/45">Apa saja yang telah kubuat</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Hasil <span className="text-black/30">kerja aku.</span></h2>
          </div>
          <p className="max-w-sm text-sm leading-6 text-black/55">Kumpulan hasil kerja sejauh ini. Masih haus pengalaman dan siap diajak ngebut di proyek berikutnya! (kalau diterima)</p>
        </div>
        <div className="grid gap-5 lg:grid-cols-3">
          {projects.map((project) => (
            <article key={project.title} className="project-card group flex flex-col rounded-4xl border border-black/10 bg-white p-4 transition-transform duration-300 hover:-translate-y-1">
              <div className={`relative overflow-hidden rounded-3xl p-3 ${project.theme}`}>
                <ProjectArtwork
                  image={project.image}
                  imageAlt={project.imageAlt}
                  imageFit={project.imageFit}
                  title={project.title}
                />
              </div>
              <div className="flex flex-1 flex-col px-3 pb-3 pt-6">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-black/45">{project.type}</p>
                <h3 className="mt-2 text-2xl font-black tracking-tight">{project.title}</h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-black/60">{project.description}</p>
                {project.href ? (
                  <a href={project.href} target="_blank" rel="noreferrer" className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/15 px-4 py-2 text-sm font-bold transition-colors hover:bg-[#d8ff3e]">
                    {project.linkLabel} <span aria-hidden="true">↗</span>
                  </a>
                ) : (
                  <span className="mt-6 inline-flex w-fit items-center gap-2 rounded-full border border-black/10 px-4 py-2 text-sm font-semibold text-black/40">
                    Detail proyek segera
                  </span>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
