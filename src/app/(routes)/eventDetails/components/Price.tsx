export default function Price({ price }: { price?: string }) {
  if (!price) return null;

  return (
    <p>
      <span className="font-semibold text-white">Price:</span> {price}
    </p>
  );
}