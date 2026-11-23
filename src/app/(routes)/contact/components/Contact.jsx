"use client";

import { useState } from "react";

export default function ContactForm() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    comment: "",
  });

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(form);
  };

  const fieldStyles = `
    w-full border border-white/40 bg-transparent
    px-2 py-2.5 text-[11px] text-white
    placeholder:text-white/90
    outline-none transition-colors
    focus:border-white
    md:px-4 md:py-3 md:text-sm
  `;

  return (
    <section className="min-h-screen bg-#000 text-white">
      <div
        className="relative flex h-11 items-center justify-center bg-cover bg-center md:h-28"
        style={{ backgroundImage: "url('/Rectangle%2031.svg')" }}
      >
        <h1 className="relative z-10 text-xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
          Contact Us
        </h1>
      </div>

      <div className="mx-auto w-full max-w-58px px-2.5 pt-6 pb-8 sm:max-w-md sm:px-5 md:max-w-2xl md:pt-14 md:pb-20">
        <form
          onSubmit={handleSubmit}
          className="flex flex-col gap-2.5 md:gap-5"
        >
          <input
            type="text"
            name="name"
            aria-label="Your Name"
            placeholder="Your Name"
            value={form.name}
            onChange={handleChange}
            required
            className={fieldStyles}
          />

          <input
            type="email"
            name="email"
            aria-label="Your Email"
            placeholder="Your Email"
            value={form.email}
            onChange={handleChange}
            required
            className={fieldStyles}
          />

          <textarea
            name="comment"
            aria-label="Your Comment"
            placeholder="Your Comment"
            value={form.comment}
            onChange={handleChange}
            required
            className={`${fieldStyles} h-[220px] resize-y md:h-[300px]`}
          />

          <div className="flex justify-end">
            <button
              type="submit"
              className="
                flex w-[108px] flex-col items-center
                border-y border-white
                py-2.5 text-[11px] font-medium
                uppercase tracking-wide
                transition-colors duration-200
                hover:bg-white hover:text-black
                md:w-40 md:py-3 md:text-sm
              "
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
