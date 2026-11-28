"use client";

import Table from "./Table";
import { tables } from "./tables";
import { useState } from "react";

export default function BookTable() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    table: "",
    guests: "",
    date: "",
    phone: "",
    comment: "",
  });

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage("");
    setSuccess(false);

    try {
      const reservation = {
        name: form.name.trim(),
        email: form.email.trim(),
        table: form.table,
        guests: form.guests,
        date: new Date(form.date).toISOString(),
        phone: form.phone.trim(),
        comment: form.comment.trim(),
      };

      const response = await fetch(process.env.NEXT_PUBLIC_API_URL ?? "https://eksam-3-sem.onrender.com/reservations", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(reservation),
      });

      if (!response.ok) {
        throw new Error(`Reservation failed (${response.status})`);
      }

      setSuccess(true);
      setMessage("Your table has been reserved!");

      setForm({
        name: "",
        email: "",
        table: "",
        guests: "",
        date: "",
        phone: "",
        comment: "",
      });
    } catch (error) {
      setMessage(error.message || "Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const fieldStyles = `
    w-full border border-white/40 bg-transparent
    px-2 py-2.5 text-[11px] text-white
    placeholder:text-white/70
    outline-none transition-colors
    focus:border-white
    md:px-4 md:py-3 md:text-sm
  `;

  const nightOptions = Array.from({ length: 7 }, (_, index) => {
    const date = new Date();
    date.setHours(0, 0, 0, 0);
    date.setDate(date.getDate() + index);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, "0");
    const day = String(date.getDate()).padStart(2, "0");

    return {
      value: `${year}-${month}-${day}`,
      label: date.toLocaleDateString(undefined, {
        weekday: "long",
        month: "long",
        day: "numeric",
      }),
    };
  });

  return (
    <section className="w-full bg-[#080808]">
      <div
        className="relative flex h-11 items-center justify-center bg-cover bg-center md:h-28"
        style={{ backgroundImage: "url('/Rectangle%2031.svg')" }}
      >
        <h1 className="relative z-10 text-xl font-semibold uppercase tracking-[0.08em] md:text-4xl">
          Book Table
        </h1>
      </div>
      <div
        className="
          mx-auto grid max-w-[1600px]
          grid-cols-1
          gap-x-8 gap-y-16
          md:grid-cols-3
          xl:grid-cols-5
        "
      >
        {tables.map((table) => (
          <div
            key={table.id}
            className="flex min-h-[180px] items-center justify-center"
          >
            <Table table={table} />
          </div>
        ))}
      </div>
      <div className="mx-auto w-full max-w-58px px-2.5 pt-6 pb-8 sm:max-w-md sm:px-5 md:max-w-2xl md:pt-14 md:pb-20 ">
        <h1 className="text-xl font-semibold uppercase tracking-[0.08em] md:text-4xl sm: [10px]">
          Book Table
        </h1>
        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 gap-2.5 md:grid-cols-2 md:gap-5"
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

          <input
            type="number"
            name="table"
            aria-label="Table Number"
            placeholder="Table Number"
            min="1"
            value={form.table}
            onChange={handleChange}
            required
            className={fieldStyles}
          />

          <input
            type="number"
            name="guests"
            aria-label="Number of Guests"
            placeholder="Number of Guests"
            min="1"
            value={form.guests}
            onChange={handleChange}
            required
            className={fieldStyles}
          />

          <select
            name="date"
            aria-label="Choose Night"
            value={form.date}
            onChange={handleChange}
            required
            className={`${fieldStyles} bg-[#080808]`}
          >
            <option value="" disabled className="bg-[#080808] text-white/70">
              Choose Night
            </option>
            {nightOptions.map((night) => (
              <option
                key={night.value}
                value={night.value}
                className="bg-[#080808] text-white"
              >
                {night.label}
              </option>
            ))}
          </select>

          <input
            type="tel"
            name="phone"
            aria-label="Your Contact Number"
            placeholder="Your Contact Number"
            value={form.phone}
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
            className={`${fieldStyles} col-span-full h-[220px] resize-y md:h-[300px]`}
          />

          <div className="col-span-full flex items-center justify-end gap-4">
            {message && (
              <p
                role="status"
                className={success ? "text-green-400" : "text-red-400"}
              >
                {message}
              </p>
            )}
            <button
              type="submit"
              disabled={loading}
              className="flex w-[108px] items-center justify-center border-y border-white py-2.5 text-sm uppercase text-white transition-colors hover:bg-white hover:text-black disabled:opacity-50 md:w-40"
            >
              {loading ? "Reserving..." : "Reserve"}
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
