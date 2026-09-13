import type { CardInfo } from "../Types/CardInfoType";

interface TechnologyCardProps {
  technology: CardInfo;
  addOn: (technology: CardInfo) => void;
  isAdded: boolean;
}

const TechnologyCard = ({
  technology,
  addOn,
  isAdded,
}: TechnologyCardProps) => {
  return (
    <div
      className={`rounded-2xl border bg-white p-5 shadow-sm ${
        isAdded ? "border-black" : "border-gray-200"
      }`}
    >
      {/* Icon and Badge */}
      <div className="flex items-start justify-between">
        <img
          src={technology.icon}
          alt={technology.name}
          className="h-12 w-12 object-contain"
        />

        <span className="rounded-full border border-emerald-100 bg-emerald-50 px-4 py-1.5 text-sm text-emerald-600">
          {technology.badge}
        </span>
      </div>

      <h2 className="mt-7 text-xl font-semibold text-gray-900">
        {technology.name}
      </h2>

      <p className="mt-3 min-h-[66px] text-sm leading-6 text-gray-500">
        {technology.description}
      </p>

      {/* Technology Info */}
      <div className="mt-4 flex items-center justify-between border-t border-gray-100 pt-3 text-sm">
        <span className="rounded-md bg-gray-50 px-3 py-2 text-gray-600">
          {technology.category}
        </span>

        <span className="text-gray-500">{technology.difficulty}</span>

        <span className="text-gray-700">
          <span className="text-yellow-400">★</span> {technology.rating}
        </span>
      </div>

      {/* Add Button */}
      <button
        onClick={() => addOn(technology)}
        // disabled={isAdded}
        className={`mt-5 w-full rounded-xl py-3 text-sm font-medium text-white transition ${
          isAdded
            ? "cursor-default bg-pink-400"
            : "bg-gray-950 hover:bg-gray-800"
        }`}
      >
        {isAdded ? "✓ Successfully Added" : "Add to Stack"}
      </button>
    </div>
  );
};

export default TechnologyCard;
