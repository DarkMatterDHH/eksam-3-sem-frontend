import EventCard from "./components/EventCard";
import Link from "next/link";

type Event = {
  _id?: string | number;
  id?: string | number;
  title?: string;
  description?: string;
  date?: string;
  asset?: {
    url?: string;
    alt?: string;
  };
};

export default async function EventsPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string | string[] }>;
}) {
  const params = await searchParams;
  const requestedPage = Number(
    Array.isArray(params.page) ? params.page[0] : params.page,
  );
  const requestedPageNumber =
    Number.isInteger(requestedPage) && requestedPage > 0 ? requestedPage : 1;
  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "https://eksam-3-sem.onrender.com";
  const response = await fetch(`${apiUrl}/events`);

  if (!response.ok) {
    throw new Error("Kunne ikke hente events.");
  }

  const payload = await response.json();
  const events: Event[] = Array.isArray(payload)
    ? payload
    : (payload.events ?? []);
  const perPage = 3;
  const totalPages = Math.max(1, Math.ceil(events.length / perPage));
  const page = Math.min(requestedPageNumber, totalPages);
  const visibleEvents = events.slice((page - 1) * perPage, page * perPage);

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-5 py-12 sm:px-8 md:px-12">
      <h1 className="mb-8 text-center text-sm font-bold uppercase tracking-[0.25em] text-white">
        Events
      </h1>
      <section className="mx-auto max-w-[760px] space-y-8">
        {visibleEvents.length > 0 ? (
          visibleEvents.map((event, index) => (
            <EventCard
              key={event._id ?? event.id ?? index}
              event={event}
              index={index}
              apiUrl={apiUrl}
            />
          ))
        ) : (
          <p className="py-16 text-center text-sm text-gray-400">
            No events available right now.
          </p>
        )}
      </section>

      {totalPages > 1 && (
        <nav
          aria-label="Event pages"
          className="mx-auto mt-10 flex max-w-[760px] items-center justify-center gap-1 text-xs"
        >
          {page > 1 && (
            <Link
              href={`/events?page=${page - 1}`}
              className="px-3 py-2 text-gray-400 hover:text-white"
              rel="prev"
            >
              Previous
            </Link>
          )}
          {Array.from({ length: totalPages }, (_, index) => index + 1).map(
            (number) => (
              <Link
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
              </Link>
            ),
          )}
          {page < totalPages && (
            <Link
              href={`/events?page=${page + 1}`}
              className="px-3 py-2 text-gray-400 hover:text-white"
              rel="next"
            >
              Next
            </Link>
          )}
        </nav>
      )}
    </main>
  );
}
