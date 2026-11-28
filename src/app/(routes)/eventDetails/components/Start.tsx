function formatDate(value?: string) {
  if (!value) return undefined;

  const dateParts = value.match(/^(\d{4})-(\d{2})-(\d{2})/);
  const date = dateParts
    ? new Date(
        Date.UTC(
          Number(dateParts[1]),
          Number(dateParts[2]) - 1,
          Number(dateParts[3]),
        ),
      )
    : new Date(value);
  return Number.isNaN(date.getTime())
    ? value
    : date.toLocaleDateString("en-GB", {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
        timeZone: "UTC",
      });
}

export default function Start({ date }: { date?: string }) {
  const formattedDate = formatDate(date);
  if (!formattedDate) return null;

  return (
    <p>
      <span className="font-semibold text-white">Date:</span> {formattedDate}
    </p>
  );
}