import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "RoundTwenty",
  description: "RoundTwenty is a digital product boutique based in Lisboa, London and Berlin. We bring products from idea to success for select partners and host events to nurture our community.",
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#111110]`}
      >
        <navbar className='flex gap-3 m-3 leading-none font-semibold text-zinc-50'>
          <Link href='/'>Home</Link>
          <Link href='values'>Our Values</Link>
        </navbar>
        {children}
      </body>
    </html>
  );
}
