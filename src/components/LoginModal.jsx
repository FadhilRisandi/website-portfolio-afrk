"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import closeIcon from "@/images/x.svg";

const LOGIN_URL = "https://dummyjson.com/user/login";

export default function LoginModal({ isOpen, onClose, onLoginSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (!isOpen) return undefined;

    function handleKeyDown(event) {
      if (event.key === "Escape" && !isSubmitting) onClose();
    }

    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [isOpen, isSubmitting, onClose]);

  async function handleSubmit(event) {
    event.preventDefault();
    setError("");
    setIsSubmitting(true);

    try {
      const response = await fetch(LOGIN_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username: username.trim(), password }),
      });
      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Username atau password tidak cocok.");
      }

      if (!data.accessToken) {
        throw new Error("Respons API tidak berisi access token.");
      }

      onLoginSuccess(data);
      setUsername("");
      setPassword("");
    } catch (requestError) {
      setError(requestError.message || "Tidak dapat terhubung ke layanan login.");
    } finally {
      setIsSubmitting(false);
    }
  }

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 flex items-center justify-center bg-black/70 px-4 py-8 backdrop-blur-sm"
      onMouseDown={(event) => {
        if (event.target === event.currentTarget && !isSubmitting) onClose();
      }}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="login-title"
        className="w-full max-w-md rounded-4xl border border-white/10 bg-[#181818] p-6 shadow-2xl shadow-black/40 sm:p-8"
      >
        <div className="mb-7 flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.18em] text-[#d8ff3e]">Demo API Login</p>
            <h2 id="login-title" className="mt-2 text-3xl font-black tracking-tight">Masuk ke portfolio</h2>
          </div>
          <button
            type="button"
            onClick={onClose}
            disabled={isSubmitting}
            aria-label="Tutup dialog login"
            className="flex h-9 w-9 items-center justify-center rounded-full border border-white/15 text-xl text-white/70 transition-colors hover:border-white/40 hover:text-white disabled:opacity-40"
          >
            <Image src={closeIcon} alt="" width={16} height={16} className="brightness-0 invert" />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-5">
          <label className="block text-sm font-semibold text-white/80">
            Username
            <input
              type="text"
              name="username"
              autoComplete="username"
              required
              value={username}
              onChange={(event) => setUsername(event.target.value)}
              placeholder="Masukkan username"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#d8ff3e]"
            />
          </label>

          <label className="block text-sm font-semibold text-white/80">
            Password
            <input
              type="password"
              name="password"
              autoComplete="current-password"
              required
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              placeholder="Masukkan password"
              className="mt-2 w-full rounded-2xl border border-white/15 bg-black/25 px-4 py-3 text-base text-white outline-none transition-colors placeholder:text-white/30 focus:border-[#d8ff3e]"
            />
          </label>

          {error && (
            <p role="alert" className="rounded-2xl border border-[#ff6747]/30 bg-[#ff6747]/10 px-4 py-3 text-sm text-[#ff9a80]">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={isSubmitting}
            className="flex w-full items-center justify-center rounded-full bg-[#d8ff3e] px-5 py-3.5 font-bold text-[#101010] transition-transform hover:-translate-y-0.5 disabled:cursor-wait disabled:opacity-60"
          >
            {isSubmitting ? "Sedang masuk..." : "Login"}
          </button>
        </form>

        <p className="mt-5 text-xs leading-5 text-white/40">
          Gunakan akun demo dari dokumentasi API. username : emilys pass : emilyspass
        </p>
      </section>
    </div>
  );
}
