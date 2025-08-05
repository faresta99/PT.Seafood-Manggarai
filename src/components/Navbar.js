"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Scroll logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`bg-[#0077B6] text-white px-4 fixed w-full z-50 transition-transform duration-300 ${
        showNavbar ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="max-w-screen-xl mx-auto flex justify-between items-center gap-x-10">
        {/* Kolom 1: Logo dan Nama Perusahaan */}
        <div className="flex items-center space-x-3">
          <Image src="/logo1.png" alt="Logo" width={60} height={60} priority />
          <span className="font-semibold text-[16px]">
            PT. SEAFOOD MANGGARAI
          </span>
        </div>

        {/* Hamburger menu (mobile) */}
        <div className="md:hidden">
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d={
                  isMobileMenuOpen
                    ? "M6 18L18 6M6 6l12 12" // X icon
                    : "M4 6h16M4 12h16M4 18h16" // Hamburger
                }
              />
            </svg>
          </button>
        </div>

        {/* Kolom 2 & 3: Menu (desktop) */}
        <div className="hidden md:flex gap-x-10 text-sm font-medium items-center">
          <Link href="/">Beranda</Link>
          <Link href="/tentang-kami">Tentang Kami</Link>
          <Link href="/produk">Produk</Link>
          <Link href="/fasilitas-produksi">Fasilitas Produksi</Link>
          <Link href="/ekspor-distribusi">Ekspor / Distribusi</Link>
          <Link
            href="/login"
            className="bg-white text-[#0077B6] px-3 py-1 rounded hover:bg-gray-100 transition"
          >
            Login Klien / Mitra
          </Link>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {isMobileMenuOpen && (
        <div className="md:hidden mt-3 flex flex-col gap-y-2 text-sm font-medium">
          <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
            Beranda
          </Link>
          <Link href="/tentang-kami" onClick={() => setIsMobileMenuOpen(false)}>
            Tentang Kami
          </Link>
          <Link href="/produk" onClick={() => setIsMobileMenuOpen(false)}>
            Produk
          </Link>
          <Link
            href="/fasilitas-produksi"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Fasilitas Produksi
          </Link>
          <Link
            href="/ekspor-distribusi"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Ekspor / Distribusi
          </Link>
          <Link
            href="/login"
            className="bg-white text-[#0077B6] px-3 py-1 rounded w-fit"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Login Klien / Mitra
          </Link>
        </div>
      )}
    </nav>
  );
}
