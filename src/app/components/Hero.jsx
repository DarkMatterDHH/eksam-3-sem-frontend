"use client";

export default function Hero() {
  return (
    <section className="flex items-center justify-center gap-4">
      <button
        type="button"
        aria-label="View Events"
        className="relative z-10 flex items-center justify-center
                   px-5 py-3 text-sm font-bold tracking-wide
                   text-white border border-white
                   transition-all duration-300
                   hover:bg-white hover:text-black
                   "
      >
        View Events
      </button>
      <button
        type="button"
        aria-label="Book Table"
        className="relative z-10 flex items-center justify-center
                   px-5 py-3 text-sm font-bold tracking-wide
                   text-white bg-linear-to-r from-[#F72A78] to-[#B822B5]
                   transition-all duration-300
                   hover:bg-white hover:text-black"
      >
        Book Table
      </button>
    </section>
  );
}
