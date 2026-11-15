"use client";

import { useRef, useState } from "react";
import Image from "next/image";
import githubIcon from "@/images/github-icaon.svg";
import instagramIcon from "@/images/instagram-icon.svg";
import linkedinIcon from "@/images/linkedin-icon.svg";
import whatsappIcon from "@/images/whatsapp-icon.svg";
import emailIcon from "@/images/email-icon.svg";
import copyIcon from "@/images/copy-icon.svg";
import ScrollAsterisk from "@/components/ScrollAsterisk";

const email = "afadhilrk01@gmail.com";
const socials = [
  { 
    name: "GitHub", 
    href: "https://github.com/FadhilRisandi" 
  },
  { 
    name: "Instagram", 
    href: "https://www.instagram.com/fdhilrk/" 
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/fadhil-risandi-06bbaa352",
  },
  { 
    name: "WhatsApp", 
    href: "https://wa.me/6282293708095" 
  },
];

const socialIcons = {
  GitHub: githubIcon,
  Instagram: instagramIcon,
  LinkedIn: linkedinIcon,
  WhatsApp: whatsappIcon,
};

function SocialIcon({ name }) {
  return (
    <Image src={socialIcons[name]} alt="" width={20} height={20} className="brightness-0 invert" />
  );
}

function MailIcon() {
  return <Image src={emailIcon} alt="" width={20} height={20} className="brightness-0 invert" />;
}

function CopyIcon() {
  return <Image src={copyIcon} alt="" width={16} height={16} className="brightness-0 invert" />;
}

export default function Contact() {
  const sectionRef = useRef(null);
  const [copied, setCopied] = useState(false);

  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1800);
    } catch {
      window.location.href = `mailto:${email}`;
    }
  }

  return (
    <footer id="contact" ref={sectionRef} className="relative isolate overflow-hidden px-6 pb-6 pt-24 sm:px-10 lg:px-16 lg:pt-32">
      <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute right-8 top-16 z-0 h-12 w-12 opacity-20 brightness-0 invert sm:right-16 sm:h-16 sm:w-16" />
      <ScrollAsterisk triggerRef={sectionRef} rotation={-540} className="pointer-events-none absolute bottom-8 left-8 z-0 h-8 w-8 opacity-25 brightness-0 invert sm:left-16 sm:h-10 sm:w-10" />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[#d8ff3e] px-7 py-10 text-[#101010] sm:px-12 sm:py-14 lg:px-16">
          <ScrollAsterisk triggerRef={sectionRef} rotation={540} className="pointer-events-none absolute -right-8 -top-20 h-60 w-60 opacity-[0.06]" />
          <div className="relative max-w-3xl">
            <p className="text-xm font-bold uppercase tracking-[0.2em] text-black/50">Kontak</p>
            <h2 className="mt-5 text-4xl font-black leading-[0.95] tracking-[-0.07em] sm:text-5xl lg:text-6xl">Dapat hubungi<br />saya lewat</h2>
            <button
              type="button"
              onClick={copyEmail}
              aria-label={copied ? "Email berhasil disalin" : `Salin alamat email ${email}`}
              className="mt-8 inline-flex items-center gap-3 rounded-full bg-[#101010] px-5 py-3.5 text-sm font-bold text-white transition-transform hover:-translate-y-1"
            >
              <MailIcon />
              {copied ? "Email tersalin!" : email}
              <CopyIcon />
            </button>
          </div>
        </div>

        <div className="flex flex-col items-center gap-6 py-8 text-center">
          <nav aria-label="Sosial media" className="flex flex-wrap justify-center gap-2">
            {socials.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noreferrer"
                aria-label={`Buka ${social.name}`}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2.5 text-xs font-semibold text-white/65 transition-colors hover:border-[#d8ff3e]/50 hover:bg-white/5 hover:text-[#d8ff3e]"
              >
                <SocialIcon name={social.name} />
                {social.name}
                <span aria-hidden="true">↗</span>
              </a>
            ))}
          </nav>
          <p className="text-xs text-white/40">© {new Date().getFullYear()} Fadhil Risandi. Dibuat dengan rasa ingin tahu.</p>
        </div>
      </div>
    </footer>
  );
}
