"use client";

import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const links = [
    { href: "./home", label: "HOME" },
    { href: "./events", label: "EVENTS" },
    { href: "./book", label: "BOOK TABLE" },
    { href: "./contact", label: "CONTACT US" },
  ];

  return (
    <>
      {/* Burger button */}
      <button
        type="button"
        aria-label="Åbn menu"
        aria-expanded={isOpen}
        aria-controls="mobileMenu"
        onClick={() => setIsOpen(true)}
        className="relative z-10 flex flex-col gap-1.5 p-2 cursor-pointer md:gap-2"
      >
        <span className="block h-1 w-8 rounded-sm bg-white md:h-1.5 md:w-12" />
        <span className="block h-1 w-8 rounded-sm bg-white md:h-1.5 md:w-12" />
        <span className="block h-1 w-8 rounded-sm bg-white md:h-1.5 md:w-12" />
      </button>

      {/* Fullscreen menu */}
      {isOpen && (
        <nav
          id="mobileMenu"
          aria-label="Mobilnavigation"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808]"
        >
          {/* Close button */}
          <button
            type="button"
            aria-label="Luk menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 cursor-pointer text-4xl text-[#ff2670] md:top-8 md:right-10"
          >
            &times;
          </button>

          {/* Navigation links */}
          <div className="flex flex-col items-center gap-6 md:gap-8">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="text-2xl font-bold text-white transition-colors hover:text-[#ff2670] md:text-3xl"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
