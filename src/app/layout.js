import "./globals.css";
import Head from "next/head";
import { Poppins } from "next/font/google";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
});

export const metadata = {
  title: "PT. SEAFOOD MANGGARAI",
  description: "Website Resmi",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <Head>
        {/* Preload gambar hero */}
        <link rel="preload" as="image" href="/hero-bg.jpg" />

        {/* Preconnect Google Fonts */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin=""
        />
      </Head>
      <body className={`${poppins.className} bg-[#f8f9fa]`}>{children}</body>
    </html>
  );
}
