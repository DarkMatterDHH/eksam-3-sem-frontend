
import type { TableData } from "./tables";

type Side = "top" | "bottom" | "left" | "right";

const CHAIR_SIZE = 36;
const CHAIR_GAP = 12;
const TABLE_GAP = 10;

function Chair({ side }: { side: Side }) {
  const vertical = side === "left" || side === "right";

  const backrestClasses = {
    top: "top-0 left-0 h-[8px] w-full",
    bottom: "bottom-0 left-0 h-[8px] w-full",
    left: "left-0 top-0 h-full w-[8px]",
    right: "right-0 top-0 h-full w-[8px]",
  };

  return (
    <div
      className="relative shrink-0 bg-[#202020]"
      style={{
        width: vertical ? 40 : CHAIR_SIZE,
        height: vertical ? CHAIR_SIZE : 40,
      }}
    >
      <div
        className={`absolute bg-[#383838] ${backrestClasses[side]}`}
      />
    </div>
  );
}

export default function Table({
  table,
}: {
  table: TableData;
}) {
  const renderChairs = (side: Side) => {
    const count = table.chairs[side] ?? 0;

    return Array.from({ length: count }, (_, i) => (
      <Chair key={`${side}-${i}`} side={side} />
    ));
  };

  return (
    <div
      className="relative shrink-0"
      style={{
        width: table.width,
        height: table.height,
      }}
    >
      {/* Table */}
      <div className="flex h-full w-full items-center justify-center bg-[#18181b] text-3xl font-bold text-white">
        {table.id}
      </div>

      {/* Top chairs */}
      <div
        className="absolute bottom-full left-1/2 flex -translate-x-1/2"
        style={{
          gap: CHAIR_GAP,
          marginBottom: TABLE_GAP,
        }}
      >
        {renderChairs("top")}
      </div>

      {/* Bottom chairs */}
      <div
        className="absolute top-full left-1/2 flex -translate-x-1/2"
        style={{
          gap: CHAIR_GAP,
          marginTop: TABLE_GAP,
        }}
      >
        {renderChairs("bottom")}
      </div>

      {/* Left chairs */}
      <div
        className="absolute right-full top-1/2 flex -translate-y-1/2 flex-col"
        style={{
          gap: CHAIR_GAP,
          marginRight: TABLE_GAP,
        }}
      >
        {renderChairs("left")}
      </div>

      {/* Right chairs */}
      <div
        className="absolute left-full top-1/2 flex -translate-y-1/2 flex-col"
        style={{
          gap: CHAIR_GAP,
          marginLeft: TABLE_GAP,
        }}
      >
        {renderChairs("right")}
      </div>
    </div>
  );
}
