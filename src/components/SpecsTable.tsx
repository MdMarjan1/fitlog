import { Workout } from "@/lib/types";

export default function SpecsTable({ workout }: { workout: Workout }) {
  const rows: [string, string | number][] = [
    ["Equipment", workout.equipment],
    ["Difficulty", workout.difficulty],
    ["Sets", workout.sets],
    ["Reps", workout.reps],
    ["Duration", `${workout.duration} min`],
    ["Calories", `${workout.caloriesBurned} kcal`],
    ["Rating", workout.rating],
  ];

  return (
    <div className="divide-y divide-base-300 rounded-xl bg-base-800">
      {rows.map(([label, value]) => (
        <div
          key={label}
          className="flex items-center justify-between px-4 py-2.5 text-sm"
        >
          <span className="uppercase tracking-wide text-white/50">
            {label}
          </span>
          <span className="font-semibold text-white">{value}</span>
        </div>
      ))}
    </div>
  );
}
