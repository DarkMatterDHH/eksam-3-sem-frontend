import Link from "next/link";

export default function EventCard({ event, index, apiUrl }) {
  const eventId = event._id ?? event.id;
  const image = event.asset?.url
    ? new URL(event.asset.url, `${apiUrl}/`).toString()
    : null;
  const isReversed = index % 2 === 1;
  const date = event.date
    ? new Date(event.date).toLocaleDateString("en-US", {
        year: "numeric",
        month: "short",
        day: "numeric",
      })
    : null;

  return (
    <article className="grid min-h-[240px] overflow-hidden bg-[#111]/80 md:grid-cols-2">
      <div
        className={`relative min-h-[220px] md:min-h-[240px] ${
          isReversed ? "md:order-2" : ""
        }`}
      >
        {image && (
          <img
            src={image}
            alt={event.asset?.alt ?? event.title ?? "Event"}
            className="absolute inset-0 h-full w-full object-cover"
            loading="lazy"
          />
        )}
      </div>

      <div
        className={`flex flex-col justify-center px-7 py-8 md:px-9 ${
          isReversed ? "md:order-1" : ""
        }`}
      >
        <h2 className="text-sm font-bold uppercase tracking-wide text-[#ff2670]">
          {event.title ?? "Untitled event"}
        </h2>
        {date && (
          <p className="mt-1 text-xs font-semibold uppercase text-white">
            {date}
          </p>
        )}
        {event.description && (
          <p className="mt-5 line-clamp-4 text-[11px] leading-5 text-gray-300">
            {event.description}
          </p>
        )}
        {eventId && (
          <Link
            href={`/eventDetails?id=${encodeURIComponent(eventId)}`}
            className="mt-6 self-end border border-white/40 px-4 py-2 text-[9px] font-bold uppercase tracking-wider text-white transition-colors hover:border-[#ff2670] hover:text-[#ff2670]"
          >
            Read more
          </Link>
        )}
      </div>
    </article>
  );
}
