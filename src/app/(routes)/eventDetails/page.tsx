import Link from "next/link";
import { notFound } from "next/navigation";
import AgeLimit from "./components/AgeLimit";
import Category from "./components/Catagory";
import Description from "./components/Descip";
import Doors from "./components/Doors";
import EventDetImage from "./components/EventDetImage";
import LineUp from "./components/LineUp";
import Name from "./components/Name";
import Place from "./components/Place";
import Price from "./components/Price";
import Schedule from "./components/Schedule";
import Start from "./components/Start";

type Event = {
  title?: string;
  description?: string;
  date?: string;
  doorsOpen?: string;
  heroAsset?: {
    url?: string;
    alt?: string;
  };
  location?: string;
  category?: string;
  lineup?: string[];
  schedule?: {
    time: string;
    label: string;
  }[];
  price?: string;
  ageLimit?: string;
};

export default async function EventDetailsPage({
  searchParams,
}: {
  searchParams: Promise<{ id?: string | string[] }>;
}) {
  const { id } = await searchParams;

  if (typeof id !== "string" || !/^\d+$/.test(id)) {
    notFound();
  }

  const apiUrl =
    process.env.NEXT_PUBLIC_API_URL ?? "https://eksam-3-sem.onrender.com";
  const response = await fetch(
    `${apiUrl}/events/${encodeURIComponent(id)}`,
    { cache: "no-store" },
  );

  if (response.status === 404) {
    notFound();
  }

  if (!response.ok) {
    throw new Error("Kunne ikke hente event.");
  }

  const event: Event = await response.json();
  const imageSrc = event.heroAsset?.url
    ? new URL(event.heroAsset.url, `${apiUrl}/`).toString()
    : undefined;

  return (
    <main className="min-h-screen bg-[#0b0b0f] px-5 py-8 text-white sm:px-8 md:px-12">
      <div className="mx-auto max-w-6xl">
        <Link
          href="/events"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-gray-300 transition-colors hover:text-[#ff2670]"
        >
          <span aria-hidden="true">&larr;</span>
          Back to events
        </Link>

        <div className="grid items-start gap-6 md:grid-cols-[minmax(0,1.5fr)_minmax(18rem,1fr)]">
          <section
            aria-label="Event image"
            className="relative min-h-64 overflow-hidden bg-[#111] sm:min-h-96"
          >
            <EventDetImage
              src={imageSrc}
              alt={event.heroAsset?.alt ?? event.title ?? "Event"}
            />
          </section>

          <aside className="flex flex-col gap-6 bg-[#111] p-6 sm:p-8">
            <section aria-label="Event information">
              <Name name={event.title ?? "Untitled event"} />
              <div className="mt-4 space-y-3 text-sm text-gray-300">
                <Start date={event.date} />
                <Doors doorsOpen={event.doorsOpen} />
                <Place place={event.location} />
                <Category category={event.category} />
                <AgeLimit ageLimit={event.ageLimit} />
                <Price price={event.price} />
              </div>
            </section>

            <Description description={event.description} />

            <LineUp lineup={event.lineup} />

            <Schedule schedule={event.schedule} />
          </aside>
        </div>
      </div>
    </main>
  );
}
