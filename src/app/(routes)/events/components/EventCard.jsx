import Image from "next/image";

const FecthData = async () => {
  const response = await fetch("http://localhost:4000/events", {
    method: "GET",
  });

  const events = await response.json;

  return events.events.map((events, index) => (
    <article>
      <Image
        src={events.Image[0]}
        alt={events.title}
        width={200}
        height={200}
        loading="eager"
      />
      <h2>{events.title}</h2>
    </article>
  ));
};
