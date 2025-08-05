"use client";

import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative h-screen w-full">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-opacity duration-700 ease-in-out"
        style={{
          backgroundImage: "url('/hero-bg.jpg')",
        }}
      ></div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-[#0077B6] opacity-30 z-10"></div>

      {/* Konten */}
      <div className="relative z-20 flex flex-col items-center justify-center text-center text-white h-full px-4">
        <h1 className="text-[30px] md:text-[48px] font-bold mb-4">
          Seafood Segar Langsung dari Laut ke Meja Anda
        </h1>
        <p className="text-[24px] md:text-[40px] font-medium max-w-4xl mb-8">
          Dipanen langsung oleh nelayan terbaik. Siap kirim ke seluruh Indonesia
        </p>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/produk"
            className="bg-[#FF7F50] text-white px-15 py-2 md:px-20 md:py-3 rounded-2xl font-medium md:font-semibold hover:bg-[#ff6f3f] transition"
          >
            Lihat Produk
          </Link>
          <Link
            href="/hubungi-kami"
            className="border border-[#FF7F50] text-white px-20 py-3 rounded-2xl font-semibold hover:bg-[#ff7f501a] transition"
          >
            Hubungi Kami
          </Link>
        </div>
      </div>
    </section>
  );
}
