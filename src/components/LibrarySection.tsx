"use client";

import { useMemo, useState } from "react";
import { SortKey, Workout } from "@/lib/types";
import WorkoutCard from "./WorkoutCard";
import SortDropdown from "./SortDropdown";

export default function LibrarySection({ workouts }: { workouts: Workout[] }) {
  const [sortKey, setSortKey] = useState<SortKey>("duration");
  const [query, setQuery] = useState("");

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();
    const filtered = q
      ? workouts.filter(
          (w) =>
            w.name.toLowerCase().includes(q) ||
            w.muscleGroups.some((tag) => tag.toLowerCase().includes(q))
        )
      : workouts;

    return [...filtered].sort((a, b) => b[sortKey] - a[sortKey]);
  }, [workouts, sortKey, query]);

  return (
    <section id="library" className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <h2 className="font-display text-3xl font-bold uppercase text-white">
            The Library
          </h2>
          <p className="mt-1 text-sm text-white/50">
            Twelve lifts covering every major muscle group.
          </p>
        </div>

        <div className="flex flex-col gap-2 sm:flex-row sm:items-center">
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or tag..."
            className="input input-sm w-full border-base-300 bg-base-800 text-white placeholder:text-white/40 sm:w-56"
          />
          <SortDropdown value={sortKey} onChange={setSortKey} />
        </div>
      </div>

      {visible.length === 0 ? (
        <p className="mt-10 text-center text-white/50">
          No workouts match your search.
        </p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {visible.map((w) => (
            <WorkoutCard key={w.id} workout={w} />
          ))}
        </div>
      )}
    </section>
  );
}
