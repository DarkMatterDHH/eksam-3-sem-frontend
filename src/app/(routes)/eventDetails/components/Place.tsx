export default function Place({ place }: { place?: string }) {
  if (!place) return null;

  return (
    <p>
      <span className="font-semibold text-white">Location:</span> {place}
    </p>
  );
}