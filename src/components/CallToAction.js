"use client";

export default function CallToAction() {
  return (
    <section className="text-center py-16">
      <h2 className="text-2xl lg:text-3xl md:text-3xl font-bold mb-2">
        Butuh Seafood Segar & Terpercaya?
      </h2>
      <p className="text-gray-700 mb-8 text-[20px] lg:text-2xl lg:font-medium">
        Hubungi tim kami sekarang dan rasakan kualitas terbaik!
      </p>

      <a
        href="https://wa.me/6281234567890" // ganti nomor WA kamu di sini
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center px-10 py-3 text-white bg-[#0077b6] rounded-full text-lg font-medium hover:bg-[#005f94] transition duration-300 lg:my-20"
      >
        📞 Hubungi Kami Sekarang
      </a>
    </section>
  );
}
