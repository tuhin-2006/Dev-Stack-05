import type { CardInfo } from "../Types/CardInfoType";

interface YourStackProps {
  stack: CardInfo[];
  onRemove: (id: number) => void;
  onRemoveAll: () => void;
}

const YourStack = ({ stack, onRemove, onRemoveAll }: YourStackProps) => {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-sm">
      {/* Heading */}
      <h2 className="text-lg font-semibold text-gray-900">Your Stack</h2>

      {/* Selected count */}
      <p className="mt-1 text-sm text-gray-400">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} Technology Selected`}
      </p>

      {/* Empty state */}
      {stack.length === 0 && (
        <div className="mt-4 flex h-24 items-center justify-center rounded-xl border border-dashed border-gray-300">
          <p className="text-sm text-gray-400">Your stack is empty.</p>
        </div>
      )}

      {/* Selected technologies */}
      {stack.length > 0 && (
        <div className="mt-4 space-y-2">
          {stack.map((technology) => (
            <div
              key={technology.id}
              className="flex items-center justify-between rounded-xl border border-gray-200 p-3"
            >
              {/* Technology information */}
              <div className="flex items-center gap-3">
                <img
                  src={technology.icon}
                  alt={technology.name}
                  className="h-8 w-8 object-contain"
                />

                <div>
                  <h3 className="text-sm font-semibold text-gray-800">
                    {technology.name}
                  </h3>

                  <p className="text-[10px] text-gray-400">
                    {technology.category}
                  </p>
                </div>
              </div>

              {/* Remove button */}
              <button
                onClick={() => onRemove(technology.id)}
                className="text-xl text-gray-400 transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove all */}
      {stack.length > 0 && (
        <button
          onClick={onRemoveAll}
          className="mt-5 w-full rounded-lg border border-red-300 py-2 text-sm font-medium text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </div>
  );
};

export default YourStack;
