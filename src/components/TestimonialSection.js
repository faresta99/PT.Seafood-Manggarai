"use client";

import Image from "next/image";

const testimonials = [
  {
    name: "Cantik",
    image: "/testi1.jpg", // Ganti sesuai file kamu di /public
    message: "Udangnya besar, cocok buat usaha restoran saya.",
  },
  {
    name: "Imut",
    image: "/testi2.jpg",
    message: "Segar banget, pengiriman cepat. Langganan tiap minggu.",
  },
  {
    name: "Manis",
    image: "/testi3.jpg",
    message: "Timnya profesional dan pengiriman tepat waktu.",
  },
];

export default function TestimonialSection() {
  return (
    <section className="bg-[#F8F9FA] py-20 px-4 lg:mt-12">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#333] mb-2">
          Apa Kata Mereka?
        </h2>
        <p className="text-[20px] lg:text-lg italic text-[#333]">
          “Seafood segar, pelayanan cepat, pelanggan puas.”
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-screen-xl mx-auto">
        {testimonials.map((testi, index) => (
          <div
            key={index}
            className="bg-white p-8 text-center rounded-lg shadow-md"
          >
            <div className="w-20 h-20 mx-auto mb-4 relative">
              <Image
                src={testi.image}
                alt={testi.name}
                fill
                className="rounded-full object-cover"
              />
            </div>
            <h3 className="font-semibold text-[#333] mb-2">{testi.name}</h3>
            <p className="text-gray-600 italic">"{testi.message}"</p>
          </div>
        ))}
      </div>
    </section>
  );
}
