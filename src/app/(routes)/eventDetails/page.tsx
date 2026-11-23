import Image from "next/image";

export default async function eventDetails({
  searchParams,
}: {
  searchParams: Promise<{ id?: string | string[] }>;
}) {
  const { id } = await searchParams;
  let description = "";
  let eventName = "";
  let date = "";
  let doorsOpen = "";
  let startTime = "";
  let place = "";
  let catagory = "";
  let price = "";
  let ageLimit = "";
  let lineUp = "";
  let schedule = "";
  let image = "";

  if (typeof id === "string" && /^\d+$/.test(id)) {
    try {
      const response = await fetch(
        `https://dummyjson.com/products/${encodeURIComponent(id)}`,
        {
          cache: "no-store",
        },
      );

      if (response.ok) {
        const event = await response.json();
        image =
          event.heroAsset || event.images?.[0] || event.heroAsset.url || image;
        description = event.description || "";
        eventName = event.tittle || event.slug || "";
        date = event.date || "";
        doorsOpen = event.doorsOpen || "";
        startTime = event.schedule.time || "";
        place = event.location || "";
        catagory = event.catagory || "";
        price = event.price || "";
        ageLimit = event.ageLimit || "";
        lineUp = event.lineup || "";
        schedule = event.schedule || "";
      }
    } catch {}
  }

  return <></>;
}
