"use client";

import Image from "next/image";

const products = [
  {
    id: 1,
    name: "Udang Windu",
    price: "Rp 120.000 / kg",
    image: "/produk/udang.jpg",
  },
  {
    id: 2,
    name: "Cumi Segar",
    price: "Rp 95.000 / kg",
    image: "/produk/cumi.jpg",
  },
  {
    id: 3,
    name: "Kepiting Bakau",
    price: "Rp 150.000 / kg",
    image: "/produk/kepiting.jpg",
  },
  {
    id: 4,
    name: "Ikan Kerapu",
    price: "Rp 110.000 / kg",
    image: "/produk/kerapu.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="bg-[#F8F9FA] py-16 px-4 lg:mt-12">
      <div className="max-w-screen-xl mx-auto text-center mb-12">
        <h2 className="text-2xl lg:text-3xl font-bold text-[#333333] mb-2">
          🐟 Produk Unggulan Kami
        </h2>
        <p className="text-[20px] lg:text-lg text-[#333333]">
          Seafood terbaik, langsung dari sumbernya.
        </p>
      </div>

      <div className="max-w-screen-xl mx-auto grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-10">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white rounded-2xl shadow pb-11 flex flex-col items-center"
          >
            <div className="w-full h-48 relative mb-4">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover rounded-t-2xl"
              />
            </div>
            <h3 className="text-[16px] lg:text-lg font-semibold text-[#333333] mb-1">
              {product.name}
            </h3>
            <p className="text-sm text-[#333333] mb-4">{product.price}</p>
            <button className="text-[16px] bg-[#FF7F50] text-white mt-14 px-9 lg:px-12 py-2 rounded-2xl hover:bg-[#ff6f3f] transition cursor-pointer">
              Pesan
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
