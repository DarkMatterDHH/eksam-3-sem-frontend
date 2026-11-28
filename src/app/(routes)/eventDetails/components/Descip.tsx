export default function Description({
  description,
}: {
  description?: string;
}) {
  if (!description) return null;

  return (
    <section aria-labelledby="event-description">
      <h2
        id="event-description"
        className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff2670]"
      >
        About this event
      </h2>
      <p className="whitespace-pre-line text-sm leading-6 text-gray-300">
        {description}
      </p>
    </section>
  );
}