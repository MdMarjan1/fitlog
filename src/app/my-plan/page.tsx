"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { usePlan } from "@/context/PlanContext";
import MetricsRow from "@/components/MetricsRow";
import PlanRow from "@/components/PlanRow";
import SortDropdown from "@/components/SortDropdown";
import { SortKey } from "@/lib/types";

type Tab = "plan" | "saved";

export default function MyPlanPage() {
  const {
    plan,
    saved,
    hydrated,
    removeFromPlan,
    removeFromSaved,
    toggleDone,
  } = usePlan();
  const [tab, setTab] = useState<Tab>("plan");
  const [sortKey, setSortKey] = useState<SortKey>("duration");

  const exercises = plan.length;
  const minutes = plan.reduce((sum, w) => sum + w.duration, 0);
  const calories = plan.reduce((sum, w) => sum + w.caloriesBurned, 0);

  const list = tab === "plan" ? plan : saved;
  const sortedList = useMemo(
    () => [...list].sort((a, b) => b[sortKey] - a[sortKey]),
    [list, sortKey]
  );

  return (
    <section className="mx-auto max-w-5xl px-4 py-10 sm:px-6 lg:px-8">
      <h1 className="font-display text-3xl font-bold uppercase text-white">
        My Plan
      </h1>
      <p className="mt-1 text-sm text-white/50">
        Cap of five lifts for today. Finish them, then load more.
      </p>

      <div className="mt-6">
        <MetricsRow exercises={exercises} minutes={minutes} calories={calories} />
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="tabs tabs-boxed w-fit bg-base-800">
          <a
            className={`tab ${tab === "plan" ? "tab-active !bg-accent !text-black font-bold" : "text-white/70"}`}
            onClick={() => setTab("plan")}
          >
            Today&apos;s Plan
          </a>
          <a
            className={`tab ${tab === "saved" ? "tab-active !bg-accent !text-black font-bold" : "text-white/70"}`}
            onClick={() => setTab("saved")}
          >
            Saved
          </a>
        </div>

        <SortDropdown value={sortKey} onChange={setSortKey} />
      </div>

      <div className="mt-6 space-y-3">
        {!hydrated ? (
          <p className="py-16 text-center text-sm uppercase tracking-wide text-white/50">
            Loading workouts…
          </p>
        ) : sortedList.length === 0 ? (
          <div className="flex flex-col items-center gap-3 py-16 text-center">
            <p className="font-display text-lg font-bold uppercase text-white">
              Nothing Here Yet
            </p>
            <p className="max-w-xs text-sm text-white/50">
              Browse the library and add a lift to get today moving.
            </p>
            <Link
              href="/"
              className="btn mt-2 rounded-full border-none bg-accent px-6 text-black hover:bg-accent/90"
            >
              Go to workouts
            </Link>
          </div>
        ) : (
          sortedList.map((item) => (
            <PlanRow
              key={item.id}
              item={item}
              showDone={tab === "plan"}
              onRemove={() =>
                tab === "plan"
                  ? removeFromPlan(item.id)
                  : removeFromSaved(item.id)
              }
              onToggleDone={
                tab === "plan" ? () => toggleDone(item.id) : undefined
              }
            />
          ))
        )}
      </div>
    </section>
  );
}
