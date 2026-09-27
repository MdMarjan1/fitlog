import Link from "next/link";
import { Workout } from "@/lib/types";
import { ClockIcon, FlameIcon, StarIcon } from "./Icons";

export default function WorkoutCard({ workout }: { workout: Workout }) {
  return (
    <Link
      href={`/workout/${workout.id}`}
      className="group flex flex-col overflow-hidden rounded-2xl bg-base-800 transition-transform hover:-translate-y-1"
    >
      <div className="aspect-[4/3] w-full overflow-hidden bg-base-900">
        <img
          src={workout.image}
          alt={workout.name}
          loading="lazy"
          className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <div className="flex flex-wrap gap-1.5">
          {workout.muscleGroups.map((tag) => (
            <span
              key={tag}
              className="badge badge-sm border-none bg-accent/90 font-bold uppercase tracking-wide text-black"
            >
              {tag}
            </span>
          ))}
        </div>

        <h3 className="font-display text-base font-bold uppercase tracking-wide text-white">
          {workout.name}
        </h3>
        <p className="text-xs text-white/50">{workout.equipment}</p>

        <div className="mt-auto flex items-center gap-4 pt-2 text-xs text-white/60">
          <span className="flex items-center gap-1">
            <ClockIcon className="h-3.5 w-3.5" /> {workout.duration} min
          </span>
          <span className="flex items-center gap-1">
            <FlameIcon className="h-3.5 w-3.5" /> {workout.caloriesBurned} kcal
          </span>
          <span className="flex items-center gap-1">
            <StarIcon className="h-3.5 w-3.5 text-accent" /> {workout.rating}
          </span>
        </div>
      </div>
    </Link>
  );
}
