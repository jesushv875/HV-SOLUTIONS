import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: 'HV Solutions - Desarrollo Web y Soluciones Digitales',
  description: 'Desarrollo web, e-commerce, POS y marketing digital a tu medida.',
  icons: {
    icon: '/img/HV_Logo.png', // asegúrate de tener este archivo en /public/img/HV_Logo.png
    apple: '/img/HV_Logo.png',
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 text-gray-200`}
      >
        {children}
      </body>
    </html>
  );
}
