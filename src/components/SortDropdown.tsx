"use client";

import { SortKey } from "@/lib/types";
import { ChevronDownIcon } from "./Icons";

const options: { key: SortKey; label: string }[] = [
  { key: "duration", label: "Duration" },
  { key: "caloriesBurned", label: "Calories" },
  { key: "rating", label: "Rating" },
];

export default function SortDropdown({
  value,
  onChange,
}: {
  value: SortKey;
  onChange: (key: SortKey) => void;
}) {
  return (
    <div className="dropdown dropdown-end">
      <div
        tabIndex={0}
        role="button"
        className="btn btn-sm gap-2 border-base-300 bg-base-900 font-normal text-white/80 hover:bg-base-800"
      >
        Sort By: {options.find((o) => o.key === value)?.label}
        <ChevronDownIcon className="h-3.5 w-3.5" />
      </div>
      <ul
        tabIndex={0}
        className="menu dropdown-content z-10 mt-2 w-40 rounded-box bg-base-800 p-2 shadow-lg"
      >
        {options.map((opt) => (
          <li key={opt.key}>
            <a
              onClick={() => onChange(opt.key)}
              className={value === opt.key ? "active" : ""}
            >
              {opt.label}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
