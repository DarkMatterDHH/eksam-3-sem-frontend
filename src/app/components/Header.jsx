
import BurgerMenu from "./Burger";

export default function Header() {
  return (
    <section
      className="
        relative flex items-center justify-between
        border-y-[3px] border-[#ff2670]
        bg-[#080808]
        px-5 py-6
        sm:px-8 sm:py-8
        md:px-12 md:py-10
      "
    >
      {/* Top-left pink corner */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute top-0 left-0
          h-7 w-7 bg-[#ff2670]
          [clip-path:polygon(0_0,100%_0,0_100%)]
          md:h-11 md:w-11
        "
      />

      {/* Logo */}
      <div className="relative z-10">
        <h1 className="text-2xl font-bold tracking-wide text-white sm:text-3xl md:text-4xl">
          NIGHT<span className="text-[#ff2670]">CLUB</span>
        </h1>

        <p className="mt-1 text-[9px] tracking-[0.25em] text-white sm:text-xs sm:tracking-[0.35em] md:text-sm md:tracking-[0.4em]">
          HAVE A GOOD TIME
        </p>
      </div>

      {/* Burger */}
      <BurgerMenu />

      {/* Bottom-right pink corner */}
      <div
        aria-hidden="true"
        className="
          pointer-events-none absolute right-0 bottom-0
          h-7 w-7 bg-[#ff2670]
          [clip-path:polygon(100%_0,100%_100%,0_100%)]
          md:h-11 md:w-11
        "
      />
    </section>
  );
}
