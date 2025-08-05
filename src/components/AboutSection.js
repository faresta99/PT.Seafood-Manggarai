"use client";

import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 lg:mt-12">
      <div className="max-w-screen-xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        {/* Gambar */}
        <div className="relative w-full h-[300px] md:h-[400px]">
          <Image
            src="/tentang-kami.jpg" // ganti dengan gambar kamu
            alt="Tentang Kami"
            fill
            className="object-cover rounded"
          />
        </div>

        {/* Konten */}
        <div>
          <h2 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-4">
            Tentang Kami
          </h2>
          <p className="text-[#555555] text-base leading-relaxed">
            PT. Seafood Manggarai adalah perusahaan seafood yang berdiri sejak
            2005, berkomitmen menyediakan hasil laut segar langsung dari nelayan
            Indonesia ke tangan pelanggan. Kami melayani grosir dan eceran
            dengan standar kualitas ekspor.
          </p>
        </div>
      </div>
    </section>
  );
}
