import EventCard from "./components/EventCard";

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const params = await searchParams;
  const requestedPage = Number(params.page);
  const page =
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-5 py-12 sm:px-8 md:px-12">
      <h1 className="mb-8 text-center text-sm font-bold uppercase tracking-[0.25em] text-white">
        Events
      </h1>
      <section className="mx-auto max-w-[760px] space-y-8">
        <EventCard page={page} perPage={3} />
      </section>

      <nav
        aria-label="Event pages"
        className="mx-auto mt-10 flex max-w-[760px] items-center justify-center gap-1 text-xs"
      >
        {[1, 2, 3].map((number) => (
          <a
            key={number}
            href={`/events?page=${number}`}
            aria-current={page === number ? "page" : undefined}
            className={`grid h-7 w-7 place-items-center border font-bold ${
              page === number
                ? "border-[#ff2670] text-[#ff2670]"
                : "border-transparent text-gray-400 hover:text-white"
            }`}
          >
            {number}
          </a>
        ))}
      </nav>
    </main>
  );
}
