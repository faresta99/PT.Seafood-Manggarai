"use client";

import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#E9EDE9] text-[#333333] py-12 px-4 text-[13px] md:text-[16px]">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-8">
        {/* Logo dan Info */}
        <div className="flex flex-col items-center space-y-2 text-center">
          <Image src="/logo1.png" alt="Logo" width={50} height={50} />
          <h2 className="font-semibold">PT.SEAFOOD MAGGARAI</h2>
          <p>Jl. Pantai Utara No. 123, Surabaya, Indonesia</p>
          <p className="text-sm flex flex-wrap justify-center gap-2">
            📞 (031) 123456 | ✉️ info@lautsegar.co.id
          </p>
        </div>

        {/* 3 Kolom */}
        <div className="flex justify-center gap-20 lg:gap-50 md:text-left w-full mt-6">
          {/* Navigasi */}
          <div>
            <h3 className="font-semibold mb-2">Navigasi</h3>
            <ul className="space-y-1 text-sm">
              <li>Branda</li>
              <li>Tentang Kami</li>
              <li>Hubungi Kami</li>
            </ul>
          </div>

          {/* Layanan */}
          <div>
            <h3 className="font-semibold mb-2">Layanan</h3>
            <ul className="space-y-1 text-sm">
              <li>Produk</li>
              <li>Pemesanan</li>
              <li>FAQ</li>
            </ul>
          </div>

          {/* Sosial Media */}
          <div>
            <h3 className="font-semibold mb-2">Sosial Media</h3>
            <ul className="space-y-1 text-sm">
              <li>Instagram</li>
              <li>LinkedIn</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="text-xs text-center mt-10">
          © 2025 PT Seafood Manggarai. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
