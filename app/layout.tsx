import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

// Path resolution for your architectural components
import Scene from "../components/ui/canvas/Scene";
import SmoothScroll from "../components/ui/sections/SmoothScroll";
import { Toaster } from "../components/ui/sonner";
import CustomCursor from "../components//Cursor";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Vansh Tyagi | Full Stack Architect",
  description: "Portfolio of Vansh Tyagi, specialized in React, Next.js, and 3D web technologies.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" style={{ colorScheme: 'dark' }}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#020617] text-white selection:bg-cyan-500/30 overflow-x-hidden cursor-none`}
      >
        {/* 1. THE CURSOR: Mounted at the root body level */}
        <CustomCursor />

        {/* 2. ARCHITECTURAL WRAPPER */}
        <SmoothScroll>
          
          {/* 3. 3D BACKGROUND LAYER */}
          <Scene />

          {/* 4. MAIN CONTENT LAYER: This is the ONLY place children should render */}
          <main className="relative z-10 min-h-screen">
            {children}
          </main>

          <Toaster position="bottom-right" theme="dark" closeButton richColors />
          
        </SmoothScroll>
      </body>
    </html>
  );
}