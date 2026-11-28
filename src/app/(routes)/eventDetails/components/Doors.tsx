function formatTime(value?: string) {
  if (!value) return undefined;

  const time = value.match(/(?:T|^)(\d{1,2}:\d{2})/);
  if (time) return time[1];

  const date = new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleTimeString("en-GB", { hour: "2-digit", minute: "2-digit" });
}

export default function Doors({ doorsOpen }: { doorsOpen?: string }) {
  const time = formatTime(doorsOpen);
  if (!time) return null;

  return (
    <p>
      <span className="font-semibold text-white">Doors open:</span> {time}
    </p>
  );
}