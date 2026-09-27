"use client";

import { Workout } from "@/lib/types";
import { usePlan } from "@/context/PlanContext";
import { PlusIcon, BookmarkIcon } from "./Icons";

export default function DetailActions({ workout }: { workout: Workout }) {
  const { addToPlan, addToSaved, isInPlan, isInSaved, isPlanFull } = usePlan();

  const inPlan = isInPlan(workout.id);
  const inSaved = isInSaved(workout.id);
  const disablePlan = inPlan || (isPlanFull && !inPlan);

  return (
    <div className="flex flex-col gap-3 sm:flex-row">
      <button
        onClick={() => addToPlan(workout)}
        disabled={disablePlan}
        className="btn gap-2 rounded-full border-none bg-accent px-6 text-black hover:bg-accent/90 disabled:bg-white/10 disabled:text-white/40"
      >
        <PlusIcon className="h-4 w-4" />
        {inPlan
          ? "Already in Plan"
          : isPlanFull
          ? "Plan Full (5/5)"
          : "Add to today's plan"}
      </button>
      <button
        onClick={() => addToSaved(workout)}
        disabled={inSaved}
        className="btn gap-2 rounded-full border border-white/30 bg-transparent px-6 text-white hover:bg-white/10 disabled:border-white/10 disabled:text-white/30"
      >
        <BookmarkIcon className="h-4 w-4" />
        {inSaved ? "Saved" : "Save for later"}
      </button>
    </div>
  );
}
