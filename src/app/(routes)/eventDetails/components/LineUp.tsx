export default function LineUp({ lineup = [] }: { lineup?: string[] }) {
  if (lineup.length === 0) return null;

  return (
    <section aria-labelledby="event-lineup">
      <h2
        id="event-lineup"
        className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#ff2670]"
      >
        Line-up
      </h2>
      <ul className="space-y-1 text-sm text-gray-300">
        {lineup.map((performer) => (
          <li key={performer}>{performer}</li>
        ))}
      </ul>
    </section>
  );
}