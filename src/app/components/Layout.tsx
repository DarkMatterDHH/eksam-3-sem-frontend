"use client";

import { usePathname } from "next/navigation";
import Header from "./Header";
import Hero from "./Hero";
import Footer from "./Footer";

export default function LayoutContent({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <>
      {isHome && <Hero />}
      <Header />
      {children}
      <Footer />
    </>
  );
}
