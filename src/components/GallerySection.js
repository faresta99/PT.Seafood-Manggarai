"use client";

import Image from "next/image";

const images = [
  "/galeri1.jpg",
  "/galeri2.jpg",
  "/galeri3.jpg",
  "/galeri4.jpg",
  "/galeri5.jpg",
  "/galeri6.jpg",
  "/galeri7.jpg",
  "/galeri8.jpg",
  "/galeri9.jpg",
  "/galeri10.jpg",
  "/galeri11.jpg",
  "/galeri12.jpg",
];

export default function GallerySection() {
  return (
    <section className="bg-white py-20 px-4">
      <div className="text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#333] mb-2">
          📸 Galeri Kami
        </h2>
        <p className="text-[20px] lg:text-lg text-[#333]">
          &quot;Lihat lebih dekat hasil laut terbaik kami&quot;
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-screen-xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="w-full aspect-square relative overflow-hidden rounded-lg shadow-sm"
          >
            <Image
              src={src}
              alt={`Galeri ${index + 1}`}
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
