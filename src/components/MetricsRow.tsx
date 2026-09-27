export default function MetricsRow({
  exercises,
  minutes,
  calories,
}: {
  exercises: number;
  minutes: number;
  calories: number;
}) {
  const stats = [
    { label: "Exercises", value: exercises },
    { label: "Minutes", value: minutes },
    { label: "Calories", value: calories },
  ];

  return (
    <div className="grid grid-cols-3 gap-3 rounded-2xl bg-base-800 p-5">
      {stats.map((s) => (
        <div key={s.label} className="text-center sm:text-left">
          <p className="text-xs uppercase tracking-wide text-white/50">
            {s.label}
          </p>
          <p className="font-display text-2xl font-bold text-accent sm:text-3xl">
            {s.value}
          </p>
        </div>
      ))}
    </div>
  );
}
