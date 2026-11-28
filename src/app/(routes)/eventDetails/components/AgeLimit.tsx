export default function AgeLimit({ ageLimit }: { ageLimit?: string }) {
  if (!ageLimit) return null;

  return (
    <p>
      <span className="font-semibold text-white">Age limit:</span> {ageLimit}
    </p>
  );
}