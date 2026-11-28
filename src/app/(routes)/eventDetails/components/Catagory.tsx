export default function Category({ category }: { category?: string }) {
  if (!category) return null;

  return (
    <p>
      <span className="font-semibold text-white">Category:</span> {category}
    </p>
  );
}