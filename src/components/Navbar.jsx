"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import arrowUpRightIcon from "@/images/arrow-up-right.svg";
import closeIcon from "@/images/x.svg";
import menuIcon from "@/images/navbar.svg";
import LoginModal from "@/components/LoginModal";

const ACCESS_TOKEN_KEY = "portfolio_access_token";
const USER_KEY = "portfolio_user";

const links = [
  { label: "Beranda", href: "#home" },
  { label: "Tentang", href: "#about" },
  { label: "Pendidikan", href: "#education" },
  { label: "Pengalaman", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Kontak", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [user, setUser] = useState(null);

  useEffect(() => {
    try {
      const accessToken = window.localStorage.getItem(ACCESS_TOKEN_KEY);
      const storedUser = window.localStorage.getItem(USER_KEY);
      if (accessToken && storedUser) setUser(JSON.parse(storedUser));
    } catch {
      window.localStorage.removeItem(ACCESS_TOKEN_KEY);
      window.localStorage.removeItem(USER_KEY);
    }
  }, []);

  useEffect(() => {
    const navigation = performance.getEntriesByType("navigation")[0];

    if (navigation?.type !== "reload") return;

    if (window.location.hash) {
      const url = new URL(window.location.href);
      url.hash = "";
      window.history.replaceState(window.history.state, "", url);
    }

    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, []);

  function handleLoginSuccess(data) {
    const profile = {
      username: data.username,
      firstName: data.firstName,
      lastName: data.lastName,
    };

    window.localStorage.setItem(ACCESS_TOKEN_KEY, data.accessToken);
    window.localStorage.setItem(USER_KEY, JSON.stringify(profile));
    setUser(profile);
    setLoginOpen(false);
  }

  function handleLogout() {
    window.localStorage.removeItem(ACCESS_TOKEN_KEY);
    window.localStorage.removeItem(USER_KEY);
    setUser(null);
    setMenuOpen(false);
  }

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-4 pt-4 sm:px-6">
      <nav className="mx-auto flex max-w-7xl items-center justify-between rounded-md border-white/10 bg-[#101010]/75 px-5 py-3 shadow-xl shadow-black/10 backdrop-blur-xl">
        <a
          href="#home"
          aria-label="Fadhil, kembali ke beranda"
          className="text-lg font-black tracking-[-0.08em]"
        >
          AFRK<span className="text-[#d8ff3e]">.</span>
        </a>

        <div className="hidden items-center gap-5 xl:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/60 transition-colors hover:text-[#d8ff3e]"
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden items-center gap-3 xl:flex">
          {user ? (
            <>
              <span className="max-w-36 truncate text-sm text-white/70">
                Hi, {user.firstName || user.username}
              </span>
              <button
                type="button"
                onClick={handleLogout}
                className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/70 transition-colors hover:border-white/40 hover:text-white"
              >
                Logout
              </button>
            </>
          ) : (
            <button
              type="button"
              onClick={() => setLoginOpen(true)}
              className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/75 transition-colors hover:border-[#d8ff3e]/60 hover:text-[#d8ff3e]"
            >
              Login Demo
            </button>
          )}
        </div>

        <a
          href="#contact"
          className="hidden rounded-full bg-[#d8ff3e] px-5 py-2.5 text-sm font-bold text-[#101010] transition-transform hover:scale-105 xl:inline-flex"
        >
          <span>Hubungi aku</span>
          <Image src={arrowUpRightIcon} alt="" width={16} height={16} className="ml-2" />
        </a>

        <button
          type="button"
          aria-label={menuOpen ? "Tutup menu" : "Buka menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((open) => !open)}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-lg xl:hidden"
        >
          <Image
            src={menuOpen ? closeIcon : menuIcon}
            alt=""
            width={22}
            height={22}
            className="brightness-0 invert"
          />
        </button>
      </nav>

      {menuOpen && (
        <div className="mx-auto mt-2 max-w-7xl rounded-3xl border border-white/10 bg-[#181818]/95 p-3 shadow-xl backdrop-blur-xl xl:hidden">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="block rounded-2xl px-4 py-3 text-sm text-white/75 transition-colors hover:bg-white/5 hover:text-[#d8ff3e]"
            >
              {link.label}
            </a>
          ))}
          {user ? (
            <div className="mt-2 flex items-center justify-between rounded-2xl border border-white/10 px-4 py-3">
              <span className="text-sm text-white/70">Hi, {user.firstName || user.username}</span>
              <button type="button" onClick={handleLogout} className="text-sm font-bold text-[#d8ff3e]">
                Logout
              </button>
            </div>
          ) : (
            <button
              type="button"
              onClick={() => {
                setMenuOpen(false);
                setLoginOpen(true);
              }}
              className="mt-2 block w-full rounded-2xl border border-white/15 px-4 py-3 text-left text-sm font-semibold text-white/75 transition-colors hover:border-[#d8ff3e]/60 hover:text-[#d8ff3e]"
            >
              Login Demo
            </button>
          )}
          <a
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 flex items-center justify-between rounded-2xl bg-[#d8ff3e] px-4 py-3 text-sm font-bold text-[#101010]"
          >
            <span>Hubungi aku</span>
            <Image src={arrowUpRightIcon} alt="" width={16} height={16} />
          </a>
        </div>
      )}
      <LoginModal
        isOpen={loginOpen}
        onClose={() => setLoginOpen(false)}
        onLoginSuccess={handleLoginSuccess}
      />
    </header>
  );
}
