"use client";

import { useState } from "react";

export default function BurgerMenu() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeLink, setActiveLink] = useState("EVENTS");

  const links = [
    { href: "#home", label: "HOME" },
    { href: "#events", label: "EVENTS" },
    { href: "#book", label: "BOOK TABLE" },
    { href: "#contact", label: "CONTACT US" },
  ];

  return (
    <>
      <nav
        aria-label="Desktopnavigation"
        className="hidden items-center gap-7 md:flex"
      >
        {links.map((link) => (
          <a
            key={link.href}
            href={link.href}
            onClick={() => setActiveLink(link.label)}
            className={`relative pb-3 text-[13px] font-semibold transition-colors duration-300 hover:text-[#ff2670] ${
              activeLink === link.label ? "text-[#ff2670]" : "text-white"
            }`}
          >
            {link.label}

            <span
              className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 bg-[#ff2670] transition-all duration-300 ${
                activeLink === link.label ? "w-7 opacity-100" : "w-0 opacity-0"
              }`}
            />
          </a>
        ))}
      </nav>

      <button
        type="button"
        aria-label="Åbn menu"
        aria-expanded={isOpen}
        aria-controls="mobileMenu"
        onClick={() => setIsOpen(true)}
        className="relative z-10 flex cursor-pointer flex-col gap-1.5 p-2 md:hidden"
      >
        <span className="block h-1.5 w-12 rounded-sm bg-white" />
        <span className="block h-1.5 w-12 rounded-sm bg-white" />
        <span className="block h-1.5 w-12 rounded-sm bg-white" />
      </button>

      {isOpen && (
        <nav
          id="mobileMenu"
          aria-label="Mobilnavigation"
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#080808] md:hidden"
        >
          <button
            type="button"
            aria-label="Luk menu"
            onClick={() => setIsOpen(false)}
            className="absolute top-5 right-5 cursor-pointer text-4xl text-[#ff2670]"
          >
            &times;
          </button>

          <div className="flex flex-col items-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => {
                  setActiveLink(link.label);
                  setIsOpen(false);
                }}
                className={`relative pb-2 text-2xl font-bold transition-colors duration-300 hover:text-[#ff2670] ${
                  activeLink === link.label ? "text-[#ff2670]" : "text-white"
                }`}
              >
                {link.label}

                <span
                  className={`absolute bottom-0 left-1/2 h-[3px] -translate-x-1/2 bg-[#ff2670] transition-all duration-300 ${
                    activeLink === link.label
                      ? "w-7 opacity-100"
                      : "w-0 opacity-0"
                  }`}
                />
              </a>
            ))}
          </div>
        </nav>
      )}
    </>
  );
}
