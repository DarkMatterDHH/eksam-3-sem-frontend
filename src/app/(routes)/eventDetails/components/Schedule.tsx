type ScheduleItem = {
  time: string;
  label: string;
};

export default function Schedule({
  schedule = [],
}: {
  schedule?: ScheduleItem[];
}) {
  if (schedule.length === 0) return null;

  return (
    <section aria-labelledby="event-schedule">
      <h2
        id="event-schedule"
        className="mb-3 text-xs font-bold uppercase tracking-[0.2em] text-[#ff2670]"
      >
        Schedule
      </h2>
      <ol className="space-y-2 text-sm text-gray-300">
        {schedule.map((item, index) => (
          <li
            key={`${item.time}-${item.label}-${index}`}
            className="grid grid-cols-[3.5rem_1fr] gap-3"
          >
            <span className="font-semibold text-white">{item.time}</span>
            <span>{item.label}</span>
          </li>
        ))}
      </ol>
    </section>
  );
}
