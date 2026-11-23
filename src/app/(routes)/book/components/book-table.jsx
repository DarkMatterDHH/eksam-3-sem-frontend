
"use client";

import Table from "./Table";
import { tables } from "./tables";

export default function BookTable() {
  return (
    <section className="w-full bg-[#080808] px-4 py-12">
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
    </section>
  );
}
