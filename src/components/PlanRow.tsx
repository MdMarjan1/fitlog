"use client";

import Link from "next/link";
import { PlanItem } from "@/lib/types";
import { ClockIcon, FlameIcon, StarIcon, CheckIcon, XIcon } from "./Icons";

export default function PlanRow({
  item,
  showDone,
  onRemove,
  onToggleDone,
}: {
  item: PlanItem;
  showDone: boolean;
  onRemove: () => void;
  onToggleDone?: () => void;
}) {
  return (
    <div className="flex flex-col gap-3 rounded-xl bg-base-800 p-3 sm:flex-row sm:items-center sm:justify-between">
      <div className="flex items-center gap-3">
        <img
          src={item.image}
          alt={item.name}
          className="h-14 w-14 shrink-0 rounded-lg object-cover"
        />
        <div>
          <p
            className={`font-display text-sm font-bold uppercase tracking-wide ${
              item.done ? "text-white/40 line-through" : "text-white"
            }`}
          >
            {item.name}
          </p>
          <p className="text-xs text-white/50">{item.equipment}</p>
          <div className="mt-1 flex items-center gap-3 text-xs text-white/50">
            <span className="flex items-center gap-1">
              <ClockIcon className="h-3.5 w-3.5" /> {item.duration} min
            </span>
            <span className="flex items-center gap-1">
              <FlameIcon className="h-3.5 w-3.5" /> {item.caloriesBurned} kcal
            </span>
            <span className="flex items-center gap-1">
              <StarIcon className="h-3.5 w-3.5 text-accent" /> {item.rating}
            </span>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-2 self-end sm:self-auto">
        <Link
          href={`/workout/${item.id}`}
          className="btn btn-sm border-base-300 bg-base-900 font-normal text-white/80 hover:bg-base-900"
        >
          View Details
        </Link>
        {showDone && onToggleDone && (
          <button
            onClick={onToggleDone}
            className={`btn btn-sm gap-1 border-none font-bold ${
              item.done ? "bg-white/10 text-white/70" : "bg-accent text-black"
            }`}
          >
            <CheckIcon className="h-3.5 w-3.5" />
            {item.done ? "Done" : "Mark as Done"}
          </button>
        )}
        <button
          onClick={onRemove}
          aria-label="Remove"
          className="btn btn-sm btn-square border-base-300 bg-base-900 text-white/60 hover:bg-error/20 hover:text-error"
        >
          <XIcon className="h-3.5 w-3.5" />
        </button>
      </div>
    </div>
  );
}
