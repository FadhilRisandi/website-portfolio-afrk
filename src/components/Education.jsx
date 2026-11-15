"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import ScrollAsterisk from "@/components/ScrollAsterisk";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const educationItems = [
  {
    period: "Pendidikan tinggi",
    title: "Universitas Hasanuddin",
    place: "Sistem Informasi",
    detail: "Saya adalah sarjana Sistem Informasi dari Universitas Hasanuddin Lulusan Sarjana Sistem Informasi dengan keahlian dalam desain UI/UX, pengembangan front-end.",
    mark: "Sep 2020 - Jul 2025",
  },
  {
    period: "Pelatihan intensif · 80 jam",
    title: "AI Front-End Developer",
    place: "IDCamp × Dicoding",
    detail: "Belajar membangun front-end web dan mengeksplorasi fitur berbasis AI.",
    mark: "Jan 2026 - Mar 2026",
  },
  {
    period: "Aktivitas kampus",
    title: "UKM Taekwondo",
    place: "Universitas Hasanuddin",
    detail: "Mengikuti sesi pelatihan dan kegiatan organisasi, mendukung pelaksanaan acara, serta bekerja secara kolaboratif dengan anggota tim",
    mark: "Nov 2023 - present",
  },
  {
    period: "Aktivitas organisasi",
    title: "Part of HIMATIKA (Himpunan Mahasiswa Matematika)",
    place: "Organisasi kemahasiswaan",
    detail: "Membantu merancang dan memfasilitasi kegiatan organisasi, berkolaborasi dengan anggota tim, serta berkontribusi dalam keberhasilan pelaksanaan acara.",
    mark: "Dec 2022 - Nov 2023",
  },
];

export default function Education() {
  const sectionRef = useRef(null);

  useGSAP(
    () => {
      const motion = gsap.matchMedia();
      motion.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".education-card", {
          y: 28,
          opacity: 0,
          duration: 0.65,
          stagger: 0.14,
          ease: "power2.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 78%" },
        });
      });
      return () => motion.revert();
    },
    { scope: sectionRef }
  );

  return (
    <section id="education" ref={sectionRef} className="relative isolate overflow-hidden bg-[#f2f0e9] px-6 py-20 text-[#101010] sm:px-10 lg:px-16 lg:py-28">
      <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute right-6 top-10 z-0 h-12 w-12 opacity-15 sm:right-12 sm:h-16 sm:w-16" />
      <ScrollAsterisk triggerRef={sectionRef} rotation={-540} className="pointer-events-none absolute bottom-8 left-6 z-0 h-8 w-8 opacity-20 sm:left-12 sm:h-10 sm:w-10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-10 flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
          <div>
            <p className="mb-3 text-xm font-bold uppercase tracking-[0.2em] text-black/45">02. Pendidikan</p>
            <h2 className="text-4xl font-black tracking-[-0.06em] sm:text-6xl">Perjalanan<br className="sm:hidden" /> <span className="text-black/60">belajar aku.</span></h2>
          </div>
          <p className="max-w-sm text-sl leading-6 text-black/55">Sarjana sistem informasi, jago taekwondo, dan suka ngoding frontend.</p>
        </div>

        <div className="grid gap-4 md:grid-cols-2  ">
          {educationItems.map((item) => (
            <article key={item.mark} className="education-card rounded-4xl border border-black/10 bg-white p-7 sm:p-9">
              <div className="flex items-center justify-between">
                <span className="rounded-full bg-black/5 px-3 py-1.5 text-[10px] font-bold uppercase tracking-[0.12em] text-black/55">{item.period}</span>
                <span className="text-sm font-black text-black/25">{item.mark}</span>
              </div>
              <h3 className="mt-10 text-2xl font-black tracking-tight sm:text-3xl">{item.title}</h3>
              <p className="mt-2 text-sm font-semibold text-black/65">{item.place}</p>
              <p className="mt-5 border-t border-black/10 pt-4 text-sm leading-6 text-black/55">{item.detail}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
