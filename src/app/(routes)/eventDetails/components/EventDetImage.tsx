export default function EventDetImage({
  src,
  alt,
}: {
  src?: string;
  alt: string;
}) {
  if (!src) {
    return (
      <div className="absolute inset-0 grid place-items-center text-sm text-gray-500">
        Event image unavailable
      </div>
    );
  }

  return (
    <img
      src={src}
      alt={alt}
      className="absolute inset-0 h-full w-full object-cover"
    />
  );
}